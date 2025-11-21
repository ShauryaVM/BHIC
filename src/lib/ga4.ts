import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { OAuth2Client } from 'google-auth-library';
import { MetricSource } from '@prisma/client';
import { format } from 'date-fns';

import { withMetricCache } from '@/lib/cache-metrics';
import { env } from '@/lib/env';

let client: BetaAnalyticsDataClient | null = null;
let oauthClient: OAuth2Client | null = null;

function getOAuthClient() {
  if (oauthClient) {
    return oauthClient;
  }

  oauthClient = new OAuth2Client(env.GA4_OAUTH_CLIENT_ID, env.GA4_OAUTH_CLIENT_SECRET);
  oauthClient.setCredentials({ refresh_token: env.GA4_OAUTH_REFRESH_TOKEN });

  return oauthClient;
}

function normalizePrivateKey(key: string) {
  return key.includes('\\n') ? key.replace(/\\n/g, '\n') : key;
}

function getClient() {
  if (client) {
    return client;
  }

  if (env.GA4_AUTH_MODE === 'oauth') {
    client = new BetaAnalyticsDataClient({
      authClient: getOAuthClient()
    });
  } else {
    if (!env.GA4_SERVICE_ACCOUNT) {
      throw new Error('GA4 service account credentials missing');
    }

    client = new BetaAnalyticsDataClient({
      credentials: {
        client_email: env.GA4_SERVICE_ACCOUNT.client_email,
        private_key: normalizePrivateKey(env.GA4_SERVICE_ACCOUNT.private_key)
      }
    });
  }

  return client;
}

const property = `properties/${env.GA4_PROPERTY_ID}`;

function iso(date: Date) {
  return format(date, 'yyyy-MM-dd');
}

interface BaseRange {
  from: Date;
  to: Date;
}

export interface Ga4SeriesPoint {
  label: string;
  value: number;
  date: string;
}

export interface Ga4SeriesResponse {
  points: Ga4SeriesPoint[];
}

export interface Ga4TopPage {
  path: string;
  title: string;
  pageviews: number;
}

export interface Ga4SummaryResponse {
  users: number;
  sessions: number;
  pageviews: number;
  averageEngagementTime: number;
  error?: string;
}

async function fetchSessionsSeries(params: BaseRange & { granularity: 'DAILY' | 'MONTHLY' }): Promise<Ga4SeriesResponse> {
  const dimensionName = params.granularity === 'MONTHLY' ? 'yearMonth' : 'date';
  const response = await getClient().runReport({
    property,
    dateRanges: [{ startDate: iso(params.from), endDate: iso(params.to) }],
    dimensions: [{ name: dimensionName }],
    metrics: [{ name: 'sessions' }],
    orderBys: [{ dimension: { dimensionName } }]
  });

  const points: Ga4SeriesPoint[] =
    response[0]?.rows?.map((row) => {
      const raw = row.dimensionValues?.[0]?.value ?? '';
      let label = raw;
      let dateValue = raw;
      if (params.granularity === 'MONTHLY' && raw.length === 6) {
        const year = Number(raw.slice(0, 4));
        const month = Number(raw.slice(4, 6)) - 1;
        const dt = new Date(Date.UTC(year, month, 1));
        label = format(dt, 'MMM yy');
        dateValue = dt.toISOString();
      } else if (params.granularity === 'DAILY' && raw.length === 8) {
        const year = Number(raw.slice(0, 4));
        const month = Number(raw.slice(4, 6)) - 1;
        const day = Number(raw.slice(6, 8));
        const dt = new Date(Date.UTC(year, month, day));
        label = format(dt, 'MMM d');
        dateValue = dt.toISOString();
      }

      const value = Number(row.metricValues?.[0]?.value ?? 0);
      return { label, value, date: dateValue };
    }) ?? [];

  return { points };
}

export async function getSessionsOverTime(range: BaseRange & { granularity?: 'DAILY' | 'MONTHLY' }): Promise<Ga4SeriesResponse & { error?: string }> {
  try {
    return await withMetricCache({
      key: `ga4:sessions:${range.granularity ?? 'DAILY'}:${iso(range.from)}:${iso(range.to)}`,
      from: range.from,
      to: range.to,
      source: MetricSource.GA4,
      fetcher: () =>
        fetchSessionsSeries({
          granularity: range.granularity ?? 'DAILY',
          from: range.from,
          to: range.to
        })
    });
  } catch (error) {
    console.error('Failed to fetch GA4 sessions', error);
    return {
      points: [],
      error: 'Unable to load Google Analytics sessions right now.'
    };
  }
}

export async function getTopPages(range: BaseRange, limit = 8): Promise<{ rows: Ga4TopPage[]; error?: string }> {
  try {
    const response = await getClient().runReport({
      property,
      dateRanges: [{ startDate: iso(range.from), endDate: iso(range.to) }],
      dimensions: [{ name: 'pagePathPlusQueryString' }, { name: 'pageTitle' }],
      metrics: [{ name: 'screenPageViews' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit
    });

    const rows: Ga4TopPage[] =
      response[0]?.rows?.map((row) => ({
        path: row.dimensionValues?.[0]?.value ?? 'N/A',
        title: row.dimensionValues?.[1]?.value ?? 'Untitled page',
        pageviews: Number(row.metricValues?.[0]?.value ?? 0)
      })) ?? [];

    return { rows };
  } catch (error) {
    console.error('Failed to fetch GA4 top pages', error);
    return { rows: [], error: 'Unable to load top page data.' };
  }
}

export async function getSummaryMetrics(range: BaseRange): Promise<Ga4SummaryResponse> {
  try {
    const response = await getClient().runReport({
      property,
      dateRanges: [{ startDate: iso(range.from), endDate: iso(range.to) }],
      metrics: [
        { name: 'totalUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' }
      ]
    });

    const metrics = response[0]?.rows?.[0]?.metricValues ?? [];
    const users = Number(metrics[0]?.value ?? 0);
    const sessions = Number(metrics[1]?.value ?? 0);
    const pageviews = Number(metrics[2]?.value ?? 0);
    const averageEngagementTime = Number(metrics[3]?.value ?? 0);

    return {
      users,
      sessions,
      pageviews,
      averageEngagementTime
    };
  } catch (error) {
    console.error('Failed to fetch GA4 summary metrics', error);
    return {
      users: 0,
      sessions: 0,
      pageviews: 0,
      averageEngagementTime: 0,
      error: 'Unable to load Google Analytics metrics.'
    };
  }
}

