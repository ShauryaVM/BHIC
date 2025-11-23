import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { Table, TBody, TD, TH, THead } from '@/components/ui/table';
import { HorizontalBarChart } from '@/components/charts/horizontal-bar-chart';
import { EventsFilters } from '@/app/(dashboard)/events/_components/events-filters';
import { defaultEventFilters, getEventsData, type EventSortField } from '@/lib/events-data';
import { formatCurrency, formatDate, formatNumber } from '@/lib/format';
import { PageHeader, PageHeaderMeta } from '@/components/layout/page-header';

interface SearchParams {
  from?: string;
  to?: string;
  sort?: string;
}

interface EventsPageProps {
  searchParams?: Promise<SearchParams> | SearchParams;
}

export const dynamic = 'force-dynamic';

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const resolvedSearchParams = (await Promise.resolve(searchParams)) ?? {};
  const defaults = defaultEventFilters();

  const parseDate = (value?: string) => {
    if (!value) return undefined;
    const candidate = new Date(value);
    return Number.isNaN(candidate.getTime()) ? undefined : candidate;
  };

  const from = parseDate(resolvedSearchParams.from) ?? defaults.from;
  const to = parseDate(resolvedSearchParams.to) ?? defaults.to;

  const filters = { from, to };
  const [sortFieldRaw, sortDirRaw] = (resolvedSearchParams.sort ?? '').split('.');
  const sortField = ['name', 'startDate', 'venue', 'ticketsSold', 'ticketsTotal', 'grossRevenue', 'netRevenue'].includes(
    sortFieldRaw ?? ''
  )
    ? (sortFieldRaw as EventSortField)
    : undefined;
  const sortDir = sortDirRaw === 'asc' || sortDirRaw === 'desc' ? sortDirRaw : undefined;

  const data = await getEventsData(filters, { sortBy: sortField, sortDir });

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Experiences"
        title="Events + experiences"
        description="Performance snapshot for Eventbrite programs hosted by BHIC."
      >
        <PageHeaderMeta
          items={[
            { label: 'Upcoming events', value: formatNumber(data.summary.upcomingEvents) },
            { label: 'Past events', value: formatNumber(data.summary.pastEvents) },
            { label: 'Tickets sold', value: formatNumber(data.summary.ticketsSold) },
            { label: 'Gross revenue', value: formatCurrency(data.summary.grossRevenue) }
          ]}
          columns={4}
        />
      </PageHeader>

      <EventsFilters
        initialFrom={from?.toISOString().slice(0, 10)}
        initialTo={to?.toISOString().slice(0, 10)}
      />

      <Card title="Event performance" description="Revenue and tickets by event">
        <div className="overflow-x-auto">
          <Table>
            <THead>
              <EventSortableHeader label="Name" field="name" searchParams={resolvedSearchParams} />
              <EventSortableHeader label="Dates" field="startDate" searchParams={resolvedSearchParams} />
              <EventSortableHeader label="Venue" field="venue" searchParams={resolvedSearchParams} />
              <EventSortableHeader label="Tickets sold" field="ticketsSold" searchParams={resolvedSearchParams} />
              <EventSortableHeader label="Capacity" field="ticketsTotal" searchParams={resolvedSearchParams} />
              <EventSortableHeader label="Gross revenue" field="grossRevenue" searchParams={resolvedSearchParams} />
              <EventSortableHeader label="Net revenue" field="netRevenue" searchParams={resolvedSearchParams} />
            </THead>
            <TBody>
              {data.events.map((event) => (
                <tr key={event.id}>
                  <TD className="font-semibold text-slate-900">{event.name}</TD>
                  <TD>
                    <span className="text-sm text-slate-600">
                      {formatDate(event.startDate)} &ndash; {formatDate(event.endDate)}
                    </span>
                  </TD>
                  <TD>{event.venue ?? 'TBD'}</TD>
                  <TD>{formatNumber(event.ticketsSold)}</TD>
                  <TD>{formatNumber(event.ticketsTotal)}</TD>
                  <TD>{formatCurrency(event.grossRevenue)}</TD>
                  <TD>{formatCurrency(event.netRevenue)}</TD>
                </tr>
              ))}
            </TBody>
          </Table>
        </div>
      </Card>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card title="Tickets per event (recent)">
          <HorizontalBarChart
            data={data.charts.topTickets}
            bars={[{ dataKey: 'tickets', color: '#1d4ed8', name: 'Tickets sold' }]}
            categoryKey="name"
            height={400}
          />
        </Card>
        <Card title="Revenue per event (recent)">
          <HorizontalBarChart
            data={data.charts.topRevenue}
            bars={[
              { dataKey: 'gross', color: '#0f172a', name: 'Gross' },
              { dataKey: 'net', color: '#059669', name: 'Net' }
            ]}
            categoryKey="name"
            height={400}
          />
        </Card>
      </section>
    </div>
  );
}

interface EventSortableHeaderProps {
  label: string;
  field: EventSortField;
  searchParams: SearchParams;
}

function EventSortableHeader({ label, field, searchParams }: EventSortableHeaderProps) {
  const params = new URLSearchParams();
  Object.entries(searchParams ?? {}).forEach(([key, value]) => {
    if (!value) return;
    if (key === 'page' || key === 'sort') return;
    params.set(key, value);
  });

  const [currentField, currentDir] = (searchParams.sort ?? '').split('.');
  let nextDir: 'asc' | 'desc' | undefined = 'asc';
  if (currentField === field) {
    nextDir = currentDir === 'asc' ? 'desc' : currentDir === 'desc' ? undefined : 'asc';
  }

  if (nextDir) {
    params.set('sort', `${field}.${nextDir}`);
  } else {
    params.delete('sort');
  }

  const indicator =
    currentField === field ? (currentDir === 'asc' ? '↑' : currentDir === 'desc' ? '↓' : '↕') : '↕';

  const paramsString = params.toString();
  const href = paramsString ? `?${paramsString}` : '/events';

  return (
    <TH>
      <Link href={href} className="flex items-center gap-1 text-sm font-semibold text-slate-700">
        {label}
        <span className="text-xs text-slate-400">{indicator}</span>
      </Link>
    </TH>
  );
}

