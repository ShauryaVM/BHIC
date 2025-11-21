import { PledgeStatus, Prisma } from '@prisma/client';
import { startOfMonth, startOfYear, subDays, subMonths } from 'date-fns';

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

export async function getDashboardData(range: 'ytd' | '12m' = 'ytd'): Promise<DashboardData> {
  const now = new Date();
  const summaryStart = range === '12m' ? subMonths(startOfMonth(now), 11) : startOfYear(now);
  const monthlyStart = subMonths(startOfMonth(now), 11);
  const monthlyRange = { from: monthlyStart, to: now };
  const last30Start = subDays(now, 30);

  try {
    const [fundsSummary, fundsYtdAggregate, totalDonors, activeDonors, eventKpis, gaSummary, gaSessions, attendance] = await Promise.all([
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
      prisma.eventAttendance.findMany({
        where: { createdAt: { gte: monthlyStart, lte: now } },
        select: { ticketsCount: true, createdAt: true }
      })
    ]);

    const sessionsMap = new Map(gaSessions.points.map((point) => [point.label, point.value]));
    const fundsMap = new Map(fundsSummary.monthly.map((point) => [point.label, point.total]));
    const monthlyBuckets = getMonthlyBuckets(12, now);

    const monthlySeries = monthlyBuckets.map((bucket) => {
      const tickets = attendance
        .filter((entry) => entry.createdAt >= bucket.start && entry.createdAt <= bucket.end)
        .reduce((sum, entry) => sum + entry.ticketsCount, 0);

      return {
        label: bucket.label,
        funds: fundsMap.get(bucket.label) ?? 0,
        tickets,
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

