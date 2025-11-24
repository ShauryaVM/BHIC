import { EventStatus, Prisma } from '@prisma/client';
import { addDays, startOfDay, subDays } from 'date-fns';
import { unstable_cache } from 'next/cache';

import { prisma } from '@/lib/prisma';

const toNumber = (value?: Prisma.Decimal | null) => Number(value ?? 0);

export interface EventFilters {
  from?: Date;
  to?: Date;
}

export type EventSortField =
  | 'name'
  | 'startDate'
  | 'venue'
  | 'ticketsSold'
  | 'ticketsTotal'
  | 'grossRevenue'
  | 'netRevenue';

export interface EventSortOptions {
  sortBy?: EventSortField;
  sortDir?: 'asc' | 'desc';
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
    topTickets: Array<{ name: string; tickets: number }>;
    topRevenue: Array<{ name: string; gross: number; net: number }>;
  };
}

function buildWhere(filters: EventFilters) {
  if (!filters.from && !filters.to) {
    return {};
  }
  const where: Prisma.EventWhereInput = {};
  if (filters.from || filters.to) {
    where.startDate = {
      ...(filters.from ? { gte: filters.from } : {}),
      ...(filters.to ? { lte: filters.to } : {})
    };
  }
  return where;
}

async function _getEventsData(
  filters: EventFilters = {},
  sortOptions: EventSortOptions = {}
): Promise<EventsPageData> {
  const where = buildWhere(filters);

  const sortFieldMap: Record<EventSortField, keyof Prisma.EventOrderByWithRelationInput> = {
    name: 'name',
    startDate: 'startDate',
    venue: 'venue',
    ticketsSold: 'ticketsSold',
    ticketsTotal: 'ticketsTotal',
    grossRevenue: 'grossRevenue',
    netRevenue: 'netRevenue'
  };

  const orderBy: Prisma.EventOrderByWithRelationInput =
    sortOptions.sortBy && sortOptions.sortDir
      ? { [sortFieldMap[sortOptions.sortBy]]: sortOptions.sortDir }
      : { startDate: 'desc' };

  try {
    const eventRecords = await prisma.event.findMany({
      where,
      orderBy: [orderBy, { id: 'asc' }]
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
    const grossRevenue = events.reduce<number>((sum, event) => sum + Number(event.grossRevenue ?? 0), 0);
    const netRevenue = events.reduce<number>((sum, event) => sum + Number(event.netRevenue ?? 0), 0);

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
        topTickets: events
          .filter((event) => event.ticketsSold > 0)
          .sort((a, b) => b.ticketsSold - a.ticketsSold)
          .slice(0, 10)
          .map((event) => ({ name: event.name, tickets: event.ticketsSold })),
        topRevenue: events
          .filter((event) => Number(event.grossRevenue ?? 0) > 0)
          .sort((a, b) => Number(b.grossRevenue ?? 0) - Number(a.grossRevenue ?? 0))
          .slice(0, 10)
          .map((event) => ({
            name: event.name,
            gross: Number(event.grossRevenue ?? 0),
            net: Number(event.netRevenue ?? 0)
          }))
      }
    };
  } catch (error) {
    console.warn('Unable to load events data, returning empty snapshot', error instanceof Error ? error.message : error);
    return buildFallbackEventsData();
  }
}

function buildFallbackEventsData(): EventsPageData {
  return {
    events: [],
    summary: {
      upcomingEvents: 0,
      pastEvents: 0,
      ticketsSold: 0,
      grossRevenue: 0,
      netRevenue: 0
    },
    charts: {
    topTickets: [],
    topRevenue: []
    }
  };
}

export async function getEventsData(
  filters: EventFilters = {},
  sortOptions: EventSortOptions = {}
): Promise<EventsPageData> {
  // Cache for 30 seconds to improve performance
  // Only cache successful results, not errors
  const cacheKey = `events-${JSON.stringify({ filters, sortOptions })}`;
  return unstable_cache(
    async () => {
      try {
        return await _getEventsData(filters, sortOptions);
      } catch (error) {
        // Don't cache errors - throw them immediately
        throw error;
      }
    },
    [cacheKey],
    { revalidate: 30, tags: ['events'] }
  )();
}

export function defaultEventFilters(): EventFilters {
  return {
    from: subDays(startOfDay(new Date()), 90),
    to: addDays(startOfDay(new Date()), 180)
  };
}

