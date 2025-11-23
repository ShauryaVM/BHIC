import { PledgeStatus, Prisma } from '@prisma/client';
import { format, startOfMonth, startOfYear, subDays, subMonths } from 'date-fns';
import { unstable_cache } from 'next/cache';

import { getFundsRaisedSummary } from '@/lib/etapestry';
import { getEventKpis } from '@/lib/eventbrite';
import { getSessionsOverTime, getSummaryMetrics } from '@/lib/ga4';
import { prisma } from '@/lib/prisma';
import { getMonthlyBuckets } from '@/lib/time-series';

const toNumber = (value?: Prisma.Decimal | null) => Number(value ?? 0);

export interface DashboardSeriesPoint extends Record<string, unknown> {
  label: string;
  funds: number;
  tickets: number;
  sessions: number;
}

export interface DashboardData {
  kpis: {
    fundsYtd: number;
    totalDonors: number;
    activeDonors: number;
    eventsThisYear: number;
    ticketsSold: number;
    sessionsLast30Days: number;
    gaError?: string;
  };
  charts: {
    monthly: DashboardSeriesPoint[];
  };
}

async function _getDashboardData(range: 'ytd' | '12m' = 'ytd'): Promise<DashboardData> {
  const now = new Date();
  const summaryStart = range === '12m' ? subMonths(startOfMonth(now), 11) : startOfYear(now);
  const monthlyStart = subMonths(startOfMonth(now), 11);
  const monthlyRange = { from: monthlyStart, to: now };
  const last30Start = subDays(now, 30);

  try {
    const [fundsSummary, fundsYtdAggregate, totalDonors, activeDonors, eventKpis, gaSummary, gaSessions, eventSeries] = await Promise.all([
      getFundsRaisedSummary(monthlyRange),
      prisma.pledge.aggregate({
        where: {
          date: { gte: summaryStart, lte: now },
          status: { in: [PledgeStatus.PLEDGED, PledgeStatus.RECEIVED] }
        },
        _sum: { amount: true }
      }),
      prisma.donor.count(),
      prisma.donor.count({
        where: { lastGiftDate: { gte: subDays(now, 365) } }
      }),
      getEventKpis({ from: summaryStart, to: now }),
      getSummaryMetrics({ from: last30Start, to: now }),
      getSessionsOverTime({ from: monthlyStart, to: now, granularity: 'MONTHLY' }),
      prisma.event.findMany({
        where: { startDate: { gte: monthlyStart, lte: now } },
        select: { startDate: true, ticketsSold: true }
      })
    ]);

    const sessionsMap = new Map(gaSessions.points.map((point) => [point.label, point.value]));
    const fundsMap = new Map(fundsSummary.monthly.map((point) => [point.label, point.total]));
    const monthlyBuckets = getMonthlyBuckets(12, now);
    const ticketsByMonth = new Map<string, number>();
    for (const event of eventSeries) {
      if (!event.startDate) continue;
      const key = format(startOfMonth(event.startDate), 'yyyy-MM');
      ticketsByMonth.set(key, (ticketsByMonth.get(key) ?? 0) + (event.ticketsSold ?? 0));
    }

    const monthlySeries = monthlyBuckets.map((bucket) => {
      return {
        label: bucket.label,
        funds: fundsMap.get(bucket.label) ?? 0,
        tickets: ticketsByMonth.get(bucket.key) ?? 0,
        sessions: sessionsMap.get(bucket.label) ?? 0
      };
    });

    return {
      kpis: {
        fundsYtd: toNumber(fundsYtdAggregate._sum.amount),
        totalDonors,
        activeDonors,
        eventsThisYear: eventKpis.eventsCount,
        ticketsSold: eventKpis.ticketsSold,
        sessionsLast30Days: gaSummary.sessions,
        gaError: gaSummary.error
      },
      charts: {
        monthly: monthlySeries
      }
    };
  } catch (error) {
    console.error('Failed to load dashboard data', error);
    return buildFallbackDashboardData(now);
  }
}

function buildFallbackDashboardData(anchor: Date): DashboardData {
  const buckets = getMonthlyBuckets(12, anchor);
  return {
    kpis: {
      fundsYtd: 0,
      totalDonors: 0,
      activeDonors: 0,
      eventsThisYear: 0,
      ticketsSold: 0,
      sessionsLast30Days: 0,
      gaError: 'Metrics temporarily unavailable. Check data sources.'
    },
    charts: {
      monthly: buckets.map((bucket) => ({
        label: bucket.label,
        funds: 0,
        tickets: 0,
        sessions: 0
      }))
    }
  };
}

