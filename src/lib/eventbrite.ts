import { EventStatus, MetricSource } from '@prisma/client';
import { addDays, subDays } from 'date-fns';

import { withMetricCache } from '@/lib/cache-metrics';
import { env } from '@/lib/env';
import { prisma } from '@/lib/prisma';

interface FetchParams {
  from: Date;
  to: Date;
}

interface EventbriteName {
  text?: string;
}

interface EventbriteDateInfo {
  utc: string;
}

interface EventbriteVenue {
  name?: string;
}

interface EventbriteTicketAvailability {
  capacity?: number;
}

interface EventbriteEvent {
  id: string;
  name?: EventbriteName;
  start: EventbriteDateInfo;
  end: EventbriteDateInfo;
  status?: string;
  venue?: EventbriteVenue;
  ticket_availability?: EventbriteTicketAvailability;
}

interface EventbriteAttendee {
  id: string;
  profile: {
    name?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
  };
  quantity?: number;
  cost?: {
    major_value?: string;
  };
  ticket_class_name?: string;
}

const API_BASE = 'https://www.eventbriteapi.com/v3';

function withAuthHeaders() {
  return {
    Authorization: `Bearer ${env.EVENTBRITE_API_TOKEN}`,
    'Content-Type': 'application/json'
  };
}

function rangeWithDefault(range?: Partial<FetchParams>): FetchParams {
  const now = new Date();
  return {
    from: range?.from ?? subDays(now, 120),
    to: range?.to ?? addDays(now, 30)
  };
}

function mapStatus(status?: string): EventStatus {
  switch (status?.toLowerCase()) {
    case 'live':
      return EventStatus.PUBLISHED;
    case 'completed':
      return EventStatus.COMPLETED;
    case 'canceled':
      return EventStatus.CANCELLED;
    default:
      return EventStatus.DRAFT;
  }
}

async function fetchEventAttendees(eventId: string): Promise<EventbriteAttendee[]> {
  const url = new URL(`/events/${eventId}/attendees/`, API_BASE);
  const response = await fetch(url, {
    headers: withAuthHeaders(),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch attendees for ${eventId}`);
  }

  const body = (await response.json()) as { attendees?: EventbriteAttendee[] };
  return body.attendees ?? [];
}

export async function fetchEvents(range: FetchParams): Promise<Array<EventbriteEvent & { attendees: EventbriteAttendee[] }>> {
  const url = new URL('/organizations/me/events/', API_BASE);
  url.searchParams.set('order_by', 'start_desc');
  url.searchParams.set('time_filter', 'custom');
  url.searchParams.set('start_date.range_start', range.from.toISOString());
  url.searchParams.set('start_date.range_end', range.to.toISOString());
  url.searchParams.set('expand', 'ticket_availability,venue');

  const response = await fetch(url, {
    headers: withAuthHeaders(),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Eventbrite events: ${response.statusText}`);
  }

  const data = (await response.json()) as { events?: EventbriteEvent[] };
  const events = data.events ?? [];

  const withAttendees = await Promise.all(
    events.map(async (event) => ({
      ...event,
      attendees: await fetchEventAttendees(event.id)
    }))
  );

  return withAttendees;
}

export async function syncEventsToDb(range?: Partial<FetchParams>) {
  const window = rangeWithDefault(range);
  const events = await fetchEvents(window);

  for (const event of events) {
    const base = await prisma.event.upsert({
      where: { externalId: event.id },
      update: {
        name: event.name?.text ?? 'Untitled Event',
        startDate: new Date(event.start.utc),
        endDate: new Date(event.end.utc ?? event.start.utc),
        venue: event.venue?.name,
        status: mapStatus(event.status),
        ticketsTotal: event.ticket_availability?.capacity ?? 0
      },
      create: {
        externalId: event.id,
        name: event.name?.text ?? 'Untitled Event',
        startDate: new Date(event.start.utc),
        endDate: new Date(event.end.utc ?? event.start.utc),
        venue: event.venue?.name,
        status: mapStatus(event.status),
        ticketsTotal: event.ticket_availability?.capacity ?? 0
      }
    });

    await prisma.eventAttendance.deleteMany({ where: { eventId: base.id } });

    let ticketsSold = 0;
    let grossRevenue = 0;

    const attendancePayload = [];

    for (const attendee of event.attendees) {
      const email = attendee.profile?.email;
      if (!email) continue;
      const ticketsCount = attendee.quantity ?? 1;
      const orderTotal = Number(attendee.cost?.major_value ?? 0);
      ticketsSold += ticketsCount;
      grossRevenue += orderTotal;

      const donor = await prisma.donor.findUnique({ where: { email } });

      attendancePayload.push({
        eventId: base.id,
        donorId: donor?.id ?? null,
        attendeeEmail: email,
        ticketType: attendee.ticket_class_name ?? 'General',
        ticketsCount,
        orderTotal
      });
    }

    if (attendancePayload.length) {
      await prisma.eventAttendance.createMany({ data: attendancePayload });
    }

    await prisma.event.update({
      where: { id: base.id },
      data: {
        ticketsSold,
        grossRevenue,
        netRevenue: grossRevenue * 0.88
      }
    });
  }

  return { synced: events.length };
}

export async function getEventKpis(range: FetchParams) {
  return withMetricCache({
    key: `events:${range.from.toISOString()}:${range.to.toISOString()}`,
    from: range.from,
    to: range.to,
    source: MetricSource.EVENTBRITE,
    fetcher: async () => {
      const events = await prisma.event.findMany({
        where: {
          startDate: { gte: range.from, lte: range.to }
        }
      });

      const eventsCount = events.length;
      const ticketsSold = events.reduce((sum, event) => sum + event.ticketsSold, 0);
      const grossRevenue = events.reduce((sum, event) => sum + Number(event.grossRevenue), 0);
      const netRevenue = events.reduce((sum, event) => sum + Number(event.netRevenue), 0);

      return {
        eventsCount,
        ticketsSold,
        grossRevenue,
        netRevenue
      };
    }
  });
}

