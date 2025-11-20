import { Card } from '@/components/ui/card';
import { Table, TBody, TD, TH, THead } from '@/components/ui/table';
import { BarChartComponent } from '@/components/charts/bar-chart';
import { EventsFilters } from '@/app/(dashboard)/events/_components/events-filters';
import { defaultEventFilters, getEventsData } from '@/lib/events-data';
import { formatCurrency, formatDate, formatNumber } from '@/lib/format';
import { PageHeader, PageHeaderMeta } from '@/components/layout/page-header';

interface EventsPageProps {
  searchParams?: {
    from?: string;
    to?: string;
  };
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const defaults = defaultEventFilters();
  const filters = {
    from: searchParams?.from ? new Date(searchParams.from) : defaults.from,
    to: searchParams?.to ? new Date(searchParams.to) : defaults.to
  };

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

      <EventsFilters initialFrom={searchParams?.from} initialTo={searchParams?.to} />

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

