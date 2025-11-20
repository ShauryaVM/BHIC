import { subDays } from 'date-fns';

import { getSessionsOverTime, getSummaryMetrics, getTopPages } from '@/lib/ga4';

export interface AnalyticsFilters {
  from: Date;
  to: Date;
}

export function defaultAnalyticsFilters(): AnalyticsFilters {
  const to = new Date();
  return {
    from: subDays(to, 30),
    to
  };
}

export async function getAnalyticsData(filters: AnalyticsFilters) {
  const [summary, sessionsSeries, topPages] = await Promise.all([
    getSummaryMetrics(filters),
    getSessionsOverTime({ ...filters, granularity: 'DAILY' }),
    getTopPages(filters)
  ]);

  return {
    summary,
    sessionsSeries,
    topPages
  };
}

