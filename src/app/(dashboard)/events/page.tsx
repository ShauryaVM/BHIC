import { Card } from '@/components/ui/card';
import { Table, TBody, TD, TH, THead } from '@/components/ui/table';
import { BarChartComponent } from '@/components/charts/bar-chart';
import { EventsFilters } from '@/app/(dashboard)/events/_components/events-filters';
import { defaultEventFilters, getEventsData } from '@/lib/events-data';
import { formatCurrency, formatDate, formatNumber } from '@/lib/format';
import { PageHeader, PageHeaderMeta } from '@/components/layout/page-header';

interface SearchParams {
  from?: string;
  to?: string;
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

  const data = await getEventsData(filters);

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

      <EventsFilters initialFrom={from.toISOString().slice(0, 10)} initialTo={to.toISOString().slice(0, 10)} />

      <Card title="Event performance" description="Revenue and tickets by event">
        <div className="overflow-x-auto">
          <Table>
            <THead>
              <TH>Name</TH>
              <TH>Dates</TH>
              <TH>Venue</TH>
              <TH>Tickets sold</TH>
              <TH>Capacity</TH>
              <TH>Gross revenue</TH>
              <TH>Net revenue</TH>
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
        <Card title="Tickets per event">
          <BarChartComponent
            data={data.charts.ticketsPerEvent}
            bars={[{ dataKey: 'tickets', color: '#1d4ed8', name: 'Tickets sold' }]}
          />
        </Card>
        <Card title="Revenue per event">
          <BarChartComponent
            data={data.charts.revenuePerEvent}
            bars={[
              { dataKey: 'gross', color: '#0f172a', name: 'Gross' },
              { dataKey: 'net', color: '#059669', name: 'Net' }
            ]}
            stacked={false}
          />
        </Card>
      </section>
    </div>
  );
}

