import { EventStatus, Prisma } from '@prisma/client';
import { addDays, startOfDay, subDays } from 'date-fns';

import { prisma } from '@/lib/prisma';

const toNumber = (value?: Prisma.Decimal | null) => Number(value ?? 0);

export interface EventFilters {
  from?: Date;
  to?: Date;
}

export interface EventsPageData {
  events: Array<{
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    venue?: string | null;
    status: EventStatus;
    ticketsSold: number;
    ticketsTotal: number;
    grossRevenue: number;
    netRevenue: number;
  }>;
  summary: {
    upcomingEvents: number;
    pastEvents: number;
    ticketsSold: number;
    grossRevenue: number;
    netRevenue: number;
  };
  charts: {
    ticketsPerEvent: Array<{ name: string; tickets: number }>;
    revenuePerEvent: Array<{ name: string; gross: number; net: number }>;
  };
}

function buildWhere(filters: EventFilters) {
  if (!filters.from && !filters.to) {
    return {};
  }
  const where: Prisma.EventWhereInput = {};
  if (filters.from) {
    where.startDate = { ...(where.startDate ?? {}), gte: filters.from };
  }
  if (filters.to) {
    where.startDate = { ...(where.startDate ?? {}), lte: filters.to };
  }
  return where;
}

export async function getEventsData(filters: EventFilters = {}): Promise<EventsPageData> {
  const where = buildWhere(filters);
  const eventRecords = await prisma.event.findMany({
    where,
    orderBy: { startDate: 'desc' }
  });

  const events = eventRecords.map((event) => ({
    ...event,
    grossRevenue: toNumber(event.grossRevenue),
    netRevenue: toNumber(event.netRevenue)
  }));

  const now = new Date();
  const upcomingEvents = events.filter((event) => event.startDate >= now).length;
  const pastEvents = events.length - upcomingEvents;
  const ticketsSold = events.reduce((sum, event) => sum + event.ticketsSold, 0);
  const grossRevenue = events.reduce((sum, event) => sum + toNumber(event.grossRevenue), 0);
  const netRevenue = events.reduce((sum, event) => sum + toNumber(event.netRevenue), 0);

  return {
    events,
    summary: {
      upcomingEvents,
      pastEvents,
      ticketsSold,
      grossRevenue,
      netRevenue
    },
    charts: {
      ticketsPerEvent: events.map((event) => ({ name: event.name, tickets: event.ticketsSold })),
      revenuePerEvent: events.map((event) => ({
        name: event.name,
        gross: toNumber(event.grossRevenue),
        net: toNumber(event.netRevenue)
      }))
    }
  };
}

export function defaultEventFilters(): EventFilters {
  return {
    from: subDays(startOfDay(new Date()), 90),
    to: addDays(startOfDay(new Date()), 180)
  };
}

