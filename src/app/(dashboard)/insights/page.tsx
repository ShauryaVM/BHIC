import { Card } from '@/components/ui/card';
import { Table, TBody, TD, TH, THead } from '@/components/ui/table';
import { PageHeader, PageHeaderMeta } from '@/components/layout/page-header';
import { TimeSeriesChart } from '@/components/charts/time-series-chart';
import { BarChartComponent } from '@/components/charts/bar-chart';
import { PieChartComponent } from '@/components/charts/pie-chart';
import { formatCurrency, formatDate, formatNumber, formatPercent } from '@/lib/format';
import { getInsightsData } from '@/lib/insights-data';
import { InsightsReportButton } from '@/app/(dashboard)/insights/_components/insights-report-button';

export const dynamic = 'force-dynamic';

function formatMomentum(value: number) {
  if (!Number.isFinite(value) || value === 0) return 'vs prior period';
  const sign = value > 0 ? '+' : '';
  return `${sign}${(value * 100).toFixed(1)} pts vs prior period`;
}

const impactStyles: Record<string, string> = {
  positive: 'border-green-200 bg-green-50 text-green-900',
  negative: 'border-red-200 bg-red-50 text-red-900',
  neutral: 'border-slate-200 bg-white text-slate-700'
};

export default async function InsightsPage() {
  const data = await getInsightsData();

  const summaryItems = [
    {
      label: 'Funds raised (YTD)',
      value: formatCurrency(data.dashboard.kpis.fundsYtd),
      helper: formatMomentum(data.metrics.fundsMomentum)
    },
    {
      label: 'Active donors',
      value: formatNumber(data.dashboard.kpis.activeDonors),
      helper: `${formatNumber(data.donors.summary.totalDonors)} total`
    },
    {
      label: 'Tickets sold',
      value: formatNumber(data.dashboard.kpis.ticketsSold),
      helper: `${formatPercent(data.metrics.avgOccupancy, 0)} avg capacity`
    },
    {
      label: 'Sessions (30d)',
      value: formatNumber(data.dashboard.kpis.sessionsLast30Days),
      helper: formatMomentum(data.metrics.sessionsMomentum)
    }
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Intelligence"
        title="Integrated insights"
        description="Unified dashboard for revenue, donor, event, and digital performance."
        actions={<InsightsReportButton />}
      >
        <PageHeaderMeta items={summaryItems} columns={4} />
      </PageHeader>

      <Card title="Insight highlights" description="Auto-generated observations from merged datasets.">
        <div className="grid gap-4 md:grid-cols-2">
          {data.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className={`rounded-2xl border p-4 shadow-sm transition ${impactStyles[highlight.impact] ?? impactStyles.neutral}`}
            >
              <p className="text-sm font-semibold">{highlight.title}</p>
              <p className="mt-2 text-sm leading-6">{highlight.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card
        title="Monthly performance"
        description="Funds raised, tickets sold, and website sessions across the last 12 months."
      >
        <TimeSeriesChart
          data={data.dashboard.charts.monthly}
          lines={[
            { dataKey: 'funds', color: '#0f172a', name: 'Funds raised ($)' },
            { dataKey: 'tickets', color: '#2563eb', name: 'Tickets sold' },
            { dataKey: 'sessions', color: '#059669', name: 'Sessions' }
          ]}
        />
      </Card>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card
          title="Top donors"
          description="Highest lifetime value donors with most recent gift date."
          actions={<p className="text-xs text-slate-500">Avg lifetime value {formatCurrency(data.donors.summary.averageLifetimeValue)}</p>}
        >
          <div className="overflow-x-auto">
            <Table>
              <THead>
                <TH>Name</TH>
                <TH>Email</TH>
                <TH>Lifetime given</TH>
                <TH>Last gift</TH>
              </THead>
              <TBody>
                {data.donors.donors.map((donor) => (
                  <tr key={donor.id}>
                    <TD className="font-semibold text-slate-900">{donor.name}</TD>
                    <TD>{donor.email ?? '—'}</TD>
                    <TD>{formatCurrency(donor.totalGiven)}</TD>
                    <TD>{donor.lastGiftDate ? formatDate(donor.lastGiftDate) : 'No gifts'}</TD>
                  </tr>
                ))}
              </TBody>
            </Table>
          </div>
        </Card>

        <Card
          title="Event performance snapshot"
          description="Most recent Eventbrite programs with revenue and capacity details."
          actions={<p className="text-xs text-slate-500">{formatNumber(data.events.data.summary.upcomingEvents)} upcoming · {formatNumber(data.events.data.summary.pastEvents)} past</p>}
        >
          <div className="overflow-x-auto">
            <Table>
              <THead>
                <TH>Name</TH>
                <TH>Dates</TH>
                <TH>Tickets</TH>
                <TH>Capacity</TH>
                <TH>Gross revenue</TH>
              </THead>
              <TBody>
                {data.events.data.events.slice(0, 5).map((event) => (
                  <tr key={event.id}>
                    <TD className="font-semibold text-slate-900">{event.name}</TD>
                    <TD className="text-sm text-slate-600">
                      {formatDate(event.startDate)} – {formatDate(event.endDate)}
                    </TD>
                    <TD>{formatNumber(event.ticketsSold)}</TD>
                    <TD>
                      {formatNumber(event.ticketsTotal)} ({formatPercent(event.ticketsTotal ? event.ticketsSold / event.ticketsTotal : 0)})
                    </TD>
                    <TD>{formatCurrency(event.grossRevenue)}</TD>
                  </tr>
                ))}
              </TBody>
            </Table>
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card title="Donor acquisition (last 12 months)">
          <BarChartComponent
            data={data.donors.charts.acquisitions}
            bars={[{ dataKey: 'value', color: '#2563eb', name: 'New donors' }]}
            footer={<p className="text-xs text-slate-500">Source: eTapestry synced donors</p>}
          />
        </Card>
        <Card title="Gift distribution">
          <PieChartComponent
            data={data.donors.charts.giftDistribution}
            footer={<p className="text-xs text-slate-500">Segments by donor lifetime value</p>}
          />
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card title="Sessions (last 30 days)" description="Google Analytics 4 daily sessions trend.">
          <TimeSeriesChart
            data={data.analytics.data.sessionsSeries.points}
            lines={[{ dataKey: 'value', color: '#0f172a', name: 'Sessions' }]}
            footer={
              data.analytics.data.sessionsSeries.error ? (
                <p className="text-sm text-red-500">{data.analytics.data.sessionsSeries.error}</p>
              ) : (
                <p className="text-xs text-slate-500">Source: Google Analytics Data API</p>
              )
            }
          />
        </Card>
        <Card title="Top pages" description="Highest pageviews by title.">
          <div className="overflow-x-auto">
            <Table>
              <THead>
                <TH>Path</TH>
                <TH>Title</TH>
                <TH>Pageviews</TH>
              </THead>
              <TBody>
                {data.analytics.data.topPages.rows.map((row) => (
                  <tr key={`${row.path}-${row.title}`}>
                    <TD className="font-medium">{row.path}</TD>
                    <TD>{row.title}</TD>
                    <TD>{formatNumber(row.pageviews)}</TD>
                  </tr>
                ))}
              </TBody>
            </Table>
          </div>
          {data.analytics.data.topPages.error ? <p className="mt-2 text-sm text-red-500">{data.analytics.data.topPages.error}</p> : null}
        </Card>
      </section>
    </div>
  );
}


