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

function ProgressBar({ value, color }: { value: number; color: string }) {
  if (!Number.isFinite(value)) return null;
  const clamped = Math.min(1, Math.max(0.04, value));
  return (
    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
      <div className="h-full rounded-full" style={{ width: `${clamped * 100}%`, backgroundColor: color }} />
    </div>
  );
}

function formatDateTime(value: string | Date) {
  const date = typeof value === 'string' ? new Date(value) : value;
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

function formatSeconds(value: number) {
  const minutes = Math.floor(value / 60);
  const seconds = Math.round(value % 60);
  return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
}

export default async function InsightsPage() {
  const data = await getInsightsData();
  const ticketsByEvent = data.events.data.charts.ticketsPerEvent.slice(0, 8);
  const revenueByEvent = data.events.data.charts.revenuePerEvent.slice(0, 8);
  const gaSummary = data.analytics.data.summary;
  const donorRatio =
    data.donors.summary.totalDonors > 0 ? data.donors.summary.activeDonors / data.donors.summary.totalDonors : 0;
  const grossRevenue = data.events.data.summary.grossRevenue;
  const netRevenue = data.events.data.summary.netRevenue;
  const netShare = grossRevenue > 0 ? netRevenue / grossRevenue : 0;
  const generatedOn = formatDateTime(data.generatedAt);
  const eventWindowStart = data.events.filters.from ?? data.range.from;
  const eventWindowEnd = data.events.filters.to ?? data.range.to;
  const analyticsWindowStart = data.analytics.filters.from ?? data.range.from;
  const analyticsWindowEnd = data.analytics.filters.to ?? data.range.to;

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

      <section className="grid gap-6 xl:grid-cols-3">
        <Card title="Donor health" description="Fundraising signals from the eTapestry sync.">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-slate-600">Total donors</p>
              <p className="text-2xl font-semibold text-slate-900">{formatNumber(data.donors.summary.totalDonors)}</p>
              <p className="text-xs text-slate-500">All-time in CRM</p>
            </div>
            <div>
              <p className="font-semibold text-slate-600">Active donors</p>
              <p className="text-2xl font-semibold text-slate-900">{formatNumber(data.donors.summary.activeDonors)}</p>
              <p className="text-xs text-slate-500">Gifted in last 12 months ({formatPercent(donorRatio)})</p>
              <ProgressBar value={donorRatio} color="#2563eb" />
            </div>
            <div>
              <p className="font-semibold text-slate-600">Avg lifetime value</p>
              <p className="text-2xl font-semibold text-slate-900">
                {formatCurrency(data.donors.summary.averageLifetimeValue)}
              </p>
              <p className="text-xs text-slate-500">Mean revenue per donor</p>
            </div>
          </div>
        </Card>

        <Card title="Revenue mix" description="Eventbrite revenue + capacity snapshot.">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-slate-600">Gross revenue</p>
              <p className="text-2xl font-semibold text-slate-900">{formatCurrency(grossRevenue)}</p>
              <p className="text-xs text-slate-500">
                {formatNumber(data.events.data.summary.ticketsSold)} tickets sold
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-600">Net revenue</p>
              <p className="text-2xl font-semibold text-slate-900">{formatCurrency(netRevenue)}</p>
              <p className="text-xs text-slate-500">{formatPercent(netShare)} of gross captured</p>
              <ProgressBar value={netShare} color="#059669" />
            </div>
            <div>
              <p className="font-semibold text-slate-600">Avg capacity fill</p>
              <p className="text-2xl font-semibold text-slate-900">{formatPercent(data.metrics.avgOccupancy)}</p>
              <p className="text-xs text-slate-500">Across synced events</p>
              <ProgressBar value={data.metrics.avgOccupancy} color="#f97316" />
            </div>
          </div>
        </Card>

        <Card title="Data freshness" description="Windows synced into this briefing.">
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-slate-600">Insights generated</dt>
              <dd className="text-slate-900">{generatedOn}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-600">Financial window</dt>
              <dd className="text-slate-900">
                {formatDate(data.range.from)} &ndash; {formatDate(data.range.to)}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-600">Events window</dt>
              <dd className="text-slate-900">
                {formatDate(eventWindowStart)} &ndash; {formatDate(eventWindowEnd)}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-600">Web analytics window</dt>
              <dd className="text-slate-900">
                {formatDate(analyticsWindowStart)} &ndash; {formatDate(analyticsWindowEnd)}
              </dd>
            </div>
          </dl>
        </Card>
      </section>

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
          actions={
            <p className="text-xs text-slate-500">
              Avg lifetime value {formatCurrency(data.donors.summary.averageLifetimeValue)}
            </p>
          }
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
          actions={
            <p className="text-xs text-slate-500">
              {formatNumber(data.events.data.summary.upcomingEvents)} upcoming ·{' '}
              {formatNumber(data.events.data.summary.pastEvents)} past
            </p>
          }
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
                      {formatNumber(event.ticketsTotal)} (
                      {formatPercent(event.ticketsTotal ? event.ticketsSold / event.ticketsTotal : 0)})
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
        <Card title="Tickets per event" description="Top recent programs ranked by attendance.">
          <BarChartComponent
            data={ticketsByEvent}
            bars={[{ dataKey: 'tickets', color: '#2563eb', name: 'Tickets sold' }]}
            footer={<p className="text-xs text-slate-500">Data source: Eventbrite</p>}
          />
        </Card>
        <Card title="Revenue per event" description="Gross vs. net performance for recent programs.">
          <BarChartComponent
            data={revenueByEvent}
            bars={[
              { dataKey: 'gross', color: '#0f172a', name: 'Gross' },
              { dataKey: 'net', color: '#059669', name: 'Net' }
            ]}
            stacked={false}
            footer={<p className="text-xs text-slate-500">Bars highlight net capture per program.</p>}
          />
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

      <section className="grid gap-6 xl:grid-cols-3">
        <Card
          className="xl:col-span-2"
          title="Sessions (last 30 days)"
          description="Google Analytics 4 daily sessions trend."
        >
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
        <Card title="Engagement breakdown" description="Key GA4 metrics for the selected window.">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-slate-600">Users</p>
              <p className="text-2xl font-semibold text-slate-900">{formatNumber(gaSummary.users)}</p>
              <p className="text-xs text-slate-500">Unique visitors in window</p>
            </div>
            <div>
              <p className="font-semibold text-slate-600">Sessions</p>
              <p className="text-2xl font-semibold text-slate-900">{formatNumber(gaSummary.sessions)}</p>
              <p className="text-xs text-slate-500">{formatMomentum(data.metrics.sessionsMomentum)}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-600">Pageviews</p>
              <p className="text-2xl font-semibold text-slate-900">{formatNumber(gaSummary.pageviews)}</p>
              <p className="text-xs text-slate-500">Total content views</p>
            </div>
            <div>
              <p className="font-semibold text-slate-600">Avg engagement</p>
              <p className="text-2xl font-semibold text-slate-900">{formatSeconds(gaSummary.averageEngagementTime)}</p>
              <p className="text-xs text-slate-500">Per engaged session</p>
            </div>
          </div>
        </Card>
      </section>

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
        {data.analytics.data.topPages.error ? (
          <p className="mt-2 text-sm text-red-500">{data.analytics.data.topPages.error}</p>
        ) : null}
      </Card>
    </div>
  );
}


