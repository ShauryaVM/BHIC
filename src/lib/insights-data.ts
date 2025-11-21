import { subMonths } from 'date-fns';

import type { DashboardData } from '@/lib/dashboard-data';
import { getDashboardData } from '@/lib/dashboard-data';
import type { EventsPageData, EventFilters } from '@/lib/events-data';
import { defaultEventFilters, getEventsData } from '@/lib/events-data';
import type { AnalyticsFilters } from '@/lib/analytics-data';
import { defaultAnalyticsFilters, getAnalyticsData } from '@/lib/analytics-data';
import type { DonorListResult } from '@/lib/donor-data';
import { getDonorList } from '@/lib/donor-data';

export type InsightImpact = 'positive' | 'neutral' | 'negative';

export interface InsightHighlight {
  title: string;
  description: string;
  impact: InsightImpact;
}

export interface InsightsData {
  generatedAt: string;
  range: { from: Date; to: Date };
  dashboard: DashboardData;
  donors: DonorListResult;
  events: { filters: EventFilters; data: EventsPageData };
  analytics: { filters: AnalyticsFilters; data: Awaited<ReturnType<typeof getAnalyticsData>> };
  metrics: {
    fundsMomentum: number;
    sessionsMomentum: number;
    avgOccupancy: number;
  };
  highlights: InsightHighlight[];
}

const MOMENTUM_THRESHOLD = 0.05;

function percentChange(current: number, previous: number) {
  if (!Number.isFinite(current) || !Number.isFinite(previous) || previous === 0) {
    return 0;
  }
  return (current - previous) / Math.abs(previous);
}

function rollingAverage(values: number[], length: number) {
  if (!values.length || length <= 0) return 0;
  const slice = values.slice(-length);
  if (!slice.length) return 0;
  return slice.reduce((sum, value) => sum + value, 0) / slice.length;
}

function calculateFundsMomentum(series: DashboardData['charts']['monthly']) {
  if (series.length < 4) return 0;
  const funds = series.map((point) => point.funds);
  const recent = rollingAverage(funds, 3);
  const prior = rollingAverage(funds.slice(0, -3), 3);
  return percentChange(recent, prior);
}

function calculateSessionsMomentum(points: Awaited<ReturnType<typeof getAnalyticsData>>['sessionsSeries']['points']) {
  if (points.length < 14) return 0;
  const values = points.map((point) => point.value);
  const recent = rollingAverage(values.slice(-7), 7);
  const prior = rollingAverage(values.slice(-14, -7), 7);
  return percentChange(recent, prior);
}

function calculateAverageOccupancy(events: EventsPageData['events']) {
  const withCapacity = events.filter((event) => event.ticketsTotal > 0);
  if (!withCapacity.length) return 0;
  const totalCapacity = withCapacity.reduce((sum, event) => sum + event.ticketsTotal, 0);
  const totalSold = withCapacity.reduce((sum, event) => sum + event.ticketsSold, 0);
  return totalCapacity === 0 ? 0 : totalSold / totalCapacity;
}

function describeMomentum(value: number, positiveLabel: string, negativeLabel: string, neutralLabel: string): InsightHighlight['impact'] {
  if (value > MOMENTUM_THRESHOLD) return 'positive';
  if (value < -MOMENTUM_THRESHOLD) return 'negative';
  return 'neutral';
}

function buildHighlights(params: {
  fundsMomentum: number;
  sessionsMomentum: number;
  avgOccupancy: number;
  topDonor?: { name: string; totalGiven: number };
  topEvent?: { name: string; grossRevenue: number; ticketsSold: number; ticketsTotal: number };
  topPage?: { title: string; pageviews: number };
}): InsightHighlight[] {
  const highlights: InsightHighlight[] = [];

  highlights.push({
    title: 'Giving momentum',
    description:
      params.fundsMomentum > MOMENTUM_THRESHOLD
        ? 'Monthly funds raised increased compared to the prior quarter.'
        : params.fundsMomentum < -MOMENTUM_THRESHOLD
          ? 'Funds raised dipped versus the prior quarter—consider a donor re-engagement push.'
          : 'Giving volume is steady when compared to the previous quarter.',
    impact: describeMomentum(params.fundsMomentum, 'positive', 'negative', 'neutral')
  });

  highlights.push({
    title: 'Digital engagement',
    description:
      params.sessionsMomentum > MOMENTUM_THRESHOLD
        ? 'Website sessions grew over the last two weeks, showing healthy traffic momentum.'
        : params.sessionsMomentum < -MOMENTUM_THRESHOLD
          ? 'Sessions trended down in the past two weeks; review campaign and content cadence.'
          : 'Sessions are holding steady week over week.',
    impact: describeMomentum(params.sessionsMomentum, 'positive', 'negative', 'neutral')
  });

  highlights.push({
    title: 'Event demand',
    description:
      params.avgOccupancy >= 0.85
        ? 'Event attendance is exceeding 85% capacity—consider adding more sessions.'
        : params.avgOccupancy <= 0.55
          ? 'Average attendance is below 55% of capacity—review pricing or promotion.'
          : 'Event attendance is healthy with mid-level capacity fill.',
    impact:
      params.avgOccupancy >= 0.85 ? 'positive' : params.avgOccupancy <= 0.55 ? 'negative' : 'neutral'
  });

  if (params.topDonor) {
    highlights.push({
      title: `${params.topDonor.name} leads giving`,
      description: `Top lifetime donor has contributed $${params.topDonor.totalGiven.toLocaleString()} — nurture this relationship for upcoming campaigns.`,
      impact: 'positive'
    });
  }

  if (params.topEvent) {
    const occupancy = params.topEvent.ticketsTotal
      ? Math.round((params.topEvent.ticketsSold / params.topEvent.ticketsTotal) * 100)
      : null;
    highlights.push({
      title: `${params.topEvent.name} driving revenue`,
      description: `Highest-grossing event delivered $${params.topEvent.grossRevenue.toLocaleString()} in revenue${occupancy ? ` at ${occupancy}% capacity` : ''}.`,
      impact: 'positive'
    });
  }

  if (params.topPage) {
    highlights.push({
      title: 'Top content performer',
      description: `“${params.topPage.title}” led GA4 pageviews (${params.topPage.pageviews.toLocaleString()} views). Share this insight with marketing.`,
      impact: 'neutral'
    });
  }

  return highlights;
}

export async function getInsightsData(): Promise<InsightsData> {
  const now = new Date();
  const range = { from: subMonths(now, 11), to: now };
  const eventFilters = defaultEventFilters();
  const analyticsFilters = defaultAnalyticsFilters();

  const [dashboard, donors, eventsData, analyticsData] = await Promise.all([
    getDashboardData('12m'),
    getDonorList({ page: 1, pageSize: 5 }),
    getEventsData(eventFilters),
    getAnalyticsData(analyticsFilters)
  ]);

  const fundsMomentum = calculateFundsMomentum(dashboard.charts.monthly);
  const sessionsMomentum = calculateSessionsMomentum(analyticsData.sessionsSeries.points);
  const avgOccupancy = calculateAverageOccupancy(eventsData.events);

  const topEvent = eventsData.events
    .slice()
    .sort((a, b) => b.grossRevenue - a.grossRevenue)[0];
  const topPage = analyticsData.topPages.rows[0];
  const topDonor = donors.donors[0];

  const highlights = buildHighlights({
    fundsMomentum,
    sessionsMomentum,
    avgOccupancy,
    topDonor: topDonor
      ? {
          name: topDonor.name,
          totalGiven: topDonor.totalGiven
        }
      : undefined,
    topEvent: topEvent
      ? {
          name: topEvent.name,
          grossRevenue: topEvent.grossRevenue,
          ticketsSold: topEvent.ticketsSold,
          ticketsTotal: topEvent.ticketsTotal
        }
      : undefined,
    topPage
  });

  return {
    generatedAt: now.toISOString(),
    range,
    dashboard,
    donors,
    events: { filters: eventFilters, data: eventsData },
    analytics: { filters: analyticsFilters, data: analyticsData },
    metrics: {
      fundsMomentum,
      sessionsMomentum,
      avgOccupancy
    },
    highlights
  };
}


