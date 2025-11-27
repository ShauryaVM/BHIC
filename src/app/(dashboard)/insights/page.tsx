import { Card } from '@/components/ui/card';
import { Table, TBody, TD, TH, THead } from '@/components/ui/table';
import { PageHeader, PageHeaderMeta } from '@/components/layout/page-header';
import { TimeSeriesChart } from '@/components/charts/time-series-chart';
import { BarChartComponent } from '@/components/charts/bar-chart';
import { PieChartComponent } from '@/components/charts/pie-chart';
import { HorizontalBarChart } from '@/components/charts/horizontal-bar-chart';
import { Progress } from '@/components/ui/progress';
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
  const topTickets = (data.events.data.charts.topTickets ?? []).slice(0, 8);
  const topRevenueEvents = (data.events.data.charts.topRevenue ?? []).slice(0, 8);
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
  const giftsMonthlySeries = data.donors.charts.giftsMonthly.slice(-12).map((bucket) => ({
    ...bucket,
    value: Math.round(bucket.value)
  }));
  const giftsMonthlyGiftCount = giftsMonthlySeries.reduce((sum, bucket) => sum + bucket.count, 0);
  const giftDistributionTotal = data.donors.charts.giftDistribution.reduce((sum, bucket) => sum + bucket.value, 0) || 1;
  const avgNetPerTicket =
    data.events.data.summary.ticketsSold > 0 ? data.events.data.summary.netRevenue / data.events.data.summary.ticketsSold : 0;
  const channelBlend = data.dashboard.charts.monthly.slice(-6).map((point) => ({
    label: point.label,
    donorFunds: Math.round(point.funds),
    eventRevenue: Math.round(point.tickets * avgNetPerTicket)
  }));
  const revenueMix = [
    { name: 'Direct gifts (YTD)', value: Math.max(0, data.dashboard.kpis.fundsYtd) },
    { name: 'Event net (window)', value: Math.max(0, data.events.data.summary.netRevenue) }
  ];
  const funnelData = [
    { label: 'Sessions (30d)', value: data.analytics.data.summary.sessions ?? 0 },
    { label: 'Tickets sold (event window)', value: data.events.data.summary.ticketsSold ?? 0 },
    { label: 'Active donors (12m)', value: data.donors.summary.activeDonors ?? 0 }
  ];
  const giftsByLabel = new Map((data.donors.charts.giftsMonthly ?? []).map((bucket) => [bucket.label, bucket.count]));
  const donorTicketBridge = data.dashboard.charts.monthly.slice(-12).map((point) => ({
    label: point.label,
    tickets: Math.max(0, point.tickets),
    giftCount: giftsByLabel.get(point.label) ?? 0
  }));

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
        <PageHeaderMeta
          items={[
            ...summaryItems,
            {
              label: 'Data sources',
              value: [
                data.donors.summary.totalDonors > 0 && 'eTapestry',
                data.events.data.summary.ticketsSold > 0 && 'Eventbrite',
                data.analytics.data.summary.sessions > 0 && 'GA4',
                ...data.customDataSources.map((ds) => ds.name)
              ]
                .filter(Boolean)
                .join(' · ') || 'No data sources',
              helper: `${data.customDataSources.length} custom source${data.customDataSources.length !== 1 ? 's' : ''}`
            }
          ]}
          columns={5}
        />
      </PageHeader>

      <Card title="Insight highlights" description="Auto-generated observations from merged datasets.">
        <div className="grid gap-4 md:grid-cols-2">
          {data.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className={`rounded-2xl border p-4 shadow-sm transition ${impactStyles[highlight.impact] ?? impactStyles.neutral}`}
            >
              <p className="text-sm font-semibold">{highlight.title}</p>
              <p className="mt-2 text-sm leading-6" suppressHydrationWarning>
                {highlight.description}
              </p>
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
          <HorizontalBarChart
            data={topTickets}
            bars={[{ dataKey: 'tickets', color: '#2563eb', name: 'Tickets sold' }]}
            categoryKey="name"
            height={380}
          />
          <p className="text-xs text-slate-500">Source: Eventbrite sync window.</p>
        </Card>
        <Card title="Revenue per event" description="Gross vs. net performance for recent programs.">
          <HorizontalBarChart
            data={topRevenueEvents}
            bars={[
              { dataKey: 'gross', color: '#0f172a', name: 'Gross' },
              { dataKey: 'net', color: '#059669', name: 'Net' }
            ]}
            categoryKey="name"
            height={380}
          />
          <p className="text-xs text-slate-500">Net overlays gross to highlight capture per program.</p>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card title="Giving history" description="Monthly received gifts (last 12 months).">
          <TimeSeriesChart
            data={giftsMonthlySeries}
            lines={[{ dataKey: 'value', color: '#2563eb', name: 'Total received ($)' }]}
            footer={
              <p className="text-xs text-slate-500">
                {giftsMonthlyGiftCount.toLocaleString()} recorded gifts in this period.
              </p>
            }
          />
        </Card>
        <Card title="Gift size distribution" description="Share of donors by lifetime giving.">
          <div className="space-y-4">
            {data.donors.charts.giftDistribution.map((bucket) => {
              const percent = (bucket.value / giftDistributionTotal) * 100;
              return (
                <div key={bucket.name}>
                  <div className="flex justify-between text-sm font-semibold text-slate-700">
                    <span>{bucket.name}</span>
                    <span>
                      {bucket.value.toLocaleString()} donors · {percent.toFixed(1)}%
                    </span>
                  </div>
                  <Progress value={percent} className="mt-1" />
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card title="Channel blend (last 6 months)" description="Comparing donor funds vs. event net revenue.">
          <BarChartComponent
            data={channelBlend}
            xKey="label"
            bars={[
              { dataKey: 'donorFunds', color: '#2563eb', name: 'Donor funds ($)' },
              { dataKey: 'eventRevenue', color: '#059669', name: 'Event net ($)' }
            ]}
            stacked
            footer={<p className="text-xs text-slate-500">Displays overlap in donor + event revenue streams.</p>}
          />
        </Card>
        <Card title="Revenue mix snapshot" description="Share of direct donations vs. event net.">
          <PieChartComponent
            data={revenueMix}
            footer={<p className="text-xs text-slate-500">Helps explain how much revenue is tied to each source.</p>}
          />
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card title="Digital-to-donor funnel" description="How sessions convert to ticket buyers and active donors.">
          <BarChartComponent
            data={funnelData}
            xKey="label"
            bars={[{ dataKey: 'value', color: '#0f172a', name: 'Audience size' }]}
            footer={<p className="text-xs text-slate-500">Uses GA4 sessions, Eventbrite tickets, and eTapestry donors.</p>}
          />
        </Card>
        <Card title="Tickets sold vs. gift activity" description="Does program demand correlate with donor engagement?">
          <BarChartComponent
            data={donorTicketBridge.slice(-6)}
            xKey="label"
            bars={[
              { dataKey: 'tickets', color: '#2563eb', name: 'Tickets sold' },
              { dataKey: 'giftCount', color: '#9333ea', name: 'Gift count' }
            ]}
            footer={<p className="text-xs text-slate-500">Aligns Eventbrite ticketing with received gift counts.</p>}
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

      {data.customDataSources.length > 0 && (
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Custom Data Sources</h2>
            <p className="mt-1 text-sm text-slate-600">
              Insights from {data.customDataSources.length} custom data source{data.customDataSources.length !== 1 ? 's' : ''}
            </p>
          </div>

          {data.customDataSources.map((customSource) => (
            <div key={customSource.id} className="space-y-6">
              <Card 
                title={customSource.name} 
                description={customSource.description || undefined}
              >
                {/* Data Type Badge */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800">
                      {customSource.dynamicInsights ? (
                        `🤖 ${customSource.dynamicInsights.dataType.charAt(0).toUpperCase() + customSource.dynamicInsights.dataType.slice(1)} Data (AI-Enhanced)`
                      ) : (
                        <>
                          {customSource.dataType === 'volunteer' && '👷 Volunteer Data'}
                          {customSource.dataType === 'membership' && '👥 Membership Data'}
                          {customSource.dataType === 'sales' && '💰 Sales Data'}
                          {customSource.dataType === 'donations' && '💝 Donation Data'}
                          {customSource.dataType === 'events' && '🎉 Event Data'}
                          {customSource.dataType === 'inventory' && '📦 Inventory Data'}
                          {customSource.dataType === 'general' && '📊 General Data'}
                        </>
                      )}
                    </span>
                    {customSource.dynamicInsights ? (
                      <span className="text-xs text-green-600 font-medium">✓ AI Active</span>
                    ) : (
                      <span className="text-xs text-slate-500">(Heuristic-based)</span>
                    )}
                  </div>
                  {customSource.dynamicInsights?.insights && customSource.dynamicInsights.insights.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {customSource.dynamicInsights.insights.map((insight, idx) => {
                        // Handle both string and object formats
                        const insightText = typeof insight === 'string' 
                          ? insight 
                          : (insight as any)?.text || (insight as any)?.title || String(insight);
                        return (
                          <p key={idx} className="text-xs text-slate-600 italic">💡 {insightText}</p>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Context-Aware Summary Metrics */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-600">{customSource.metrics.primaryMetric.label}</p>
                    <p className="text-2xl font-semibold text-slate-900">{customSource.metrics.primaryMetric.formatted}</p>
                  </div>
                  {customSource.metrics.secondaryMetrics.slice(0, 3).map((metric, idx) => (
                    <div key={idx}>
                      <p className="text-sm font-semibold text-slate-600">{metric.label}</p>
                      <p className="text-2xl font-semibold text-slate-900">{metric.formatted}</p>
                    </div>
                  ))}
                </div>

                {/* Trends */}
                {customSource.hasAmountData && customSource.trends.peakMonth && (
                  <div className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-sm">
                      <div>
                        <p className="font-semibold text-slate-600">Growth Trend</p>
                        <p
                          className={`text-lg font-semibold ${
                            customSource.trends.growth > 0
                              ? 'text-green-600'
                              : customSource.trends.growth < 0
                                ? 'text-red-600'
                                : 'text-slate-600'
                          }`}
                        >
                          {customSource.trends.growth > 0 ? '+' : ''}
                          {customSource.trends.growth.toFixed(1)}%
                        </p>
                        <p className="text-xs text-slate-500">Last 3 months vs prior 3 months</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-600">Month-over-Month</p>
                        <p
                          className={`text-lg font-semibold ${
                            customSource.trends.periodOverPeriod > 0
                              ? 'text-green-600'
                              : customSource.trends.periodOverPeriod < 0
                                ? 'text-red-600'
                                : 'text-slate-600'
                          }`}
                        >
                          {customSource.trends.periodOverPeriod > 0 ? '+' : ''}
                          {customSource.trends.periodOverPeriod.toFixed(1)}%
                        </p>
                        <p className="text-xs text-slate-500">Latest month change</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-600">Peak Month</p>
                        <p className="text-lg font-semibold text-slate-900">
                          {customSource.trends.peakMonth.label}
                        </p>
                        <p className="text-xs text-slate-500">
                          {formatCurrency(customSource.trends.peakMonth.value)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Charts Grid - Use AI recommendations if available, otherwise fallback to heuristics */}
                {customSource.dynamicInsights?.visualizations && customSource.dynamicInsights.visualizations.length > 0 ? (
                  // AI-generated visualizations
                  <div className="grid gap-6 lg:grid-cols-2">
                    {customSource.dynamicInsights.visualizations
                      .map((viz, idx) => {
                        if (viz.type === 'timeSeries' && (customSource.hasAmountData || customSource.hasHoursData)) {
                          // Filter to only show months with actual data (value > 0 or count > 0)
                          const chartData = customSource.monthlyData.filter((m) => m.value > 0 || m.count > 0);
                          // Always use 'value' for our data structure, ignore AI-generated dataKey
                          const dataKey = 'value';
                          console.log(`[Insights] timeSeries chart data for ${customSource.name}:`, {
                            totalMonthlyData: customSource.monthlyData.length,
                            filteredLength: chartData.length,
                            sample: chartData.slice(0, 3),
                            allData: chartData,
                            hasAmountData: customSource.hasAmountData,
                            totalAmount: customSource.summary.totalAmount,
                            aiDataKey: viz.dataKey,
                            usingDataKey: dataKey
                          });
                          if (chartData.length > 0) {
                            return (
                              <Card key={idx} title={viz.title} description={viz.description || ''}>
                                <TimeSeriesChart
                                  data={chartData}
                                  lines={[
                                    { 
                                      dataKey: dataKey, 
                                      color: viz.color || '#9333ea', 
                                      name: viz.title || 'Value',
                                      strokeWidth: 3,
                                      dot: true
                                    }
                                  ]}
                                  footer={<p className="text-xs text-slate-500">{viz.description || ''}</p>}
                                />
                              </Card>
                            );
                          }
                          return null;
                        } else if (viz.type === 'pie') {
                        // Determine which data source to use based on title/description
                        const titleLower = viz.title.toLowerCase();
                        const descLower = viz.description.toLowerCase();
                        let pieData: Array<{ name: string; value: number }> = [];
                        
                        if ((titleLower.includes('payment') || descLower.includes('payment')) && customSource.paymentMethodBreakdown && customSource.paymentMethodBreakdown.length > 0) {
                          pieData = customSource.paymentMethodBreakdown.slice(0, 6).map((pm) => ({ name: pm.name, value: pm.value }));
                        } else if (customSource.categoryBreakdown.length > 0) {
                          pieData = customSource.categoryBreakdown.slice(0, 6).map((cat) => ({ name: cat.name, value: cat.value }));
                        }
                        
                        if (pieData.length > 0) {
                          return (
                            <Card key={idx} title={viz.title} description={viz.description || ''}>
                              <PieChartComponent
                                data={pieData}
                                footer={<p className="text-xs text-slate-500">{viz.description || ''}</p>}
                              />
                            </Card>
                          );
                        }
                        return null;
                      } else if (viz.type === 'horizontalBar') {
                        // Determine which data source to use based on title/description
                        const titleLower = viz.title.toLowerCase();
                        const descLower = (viz.description || '').toLowerCase();
                        let barData: Array<{ name: string; value: number; count: number }> = [];
                        
                        if ((titleLower.includes('customer') || descLower.includes('customer')) && customSource.topCustomers && customSource.topCustomers.length > 0) {
                          barData = customSource.topCustomers.slice(0, 10);
                          // Always use 'value' for our data structure
                          const dataKey = 'value';
                          console.log(`[Insights] horizontalBar chart (customer) for ${customSource.name}:`, {
                            topCustomersLength: customSource.topCustomers.length,
                            barDataLength: barData.length,
                            sample: barData.slice(0, 3),
                            allBarData: barData,
                            topCustomersSample: customSource.topCustomers.slice(0, 3),
                            aiDataKey: viz.dataKey,
                            usingDataKey: dataKey
                          });
                        } else if ((titleLower.includes('product') || descLower.includes('product')) && customSource.topItems.length > 0) {
                          barData = customSource.topItems.slice(0, 10);
                        } else if (customSource.topItems.length > 0) {
                          barData = customSource.topItems.slice(0, 10);
                        }
                        
                        if (barData.length > 0) {
                          // Always use 'value' for our data structure
                          const dataKey = 'value';
                          return (
                            <Card key={idx} title={viz.title} description={viz.description || ''}>
                              <HorizontalBarChart
                                data={barData}
                                bars={[{ 
                                  dataKey: dataKey, 
                                  color: viz.color || '#9333ea', 
                                  name: viz.title || 'Value'
                                }]}
                                categoryKey={(viz.categoryKey || 'name') as 'name' | 'value' | 'count'}
                                height={Math.min(400, Math.max(200, barData.length * 40))}
                              />
                              <p className="mt-2 text-xs text-slate-500">{viz.description || ''}</p>
                            </Card>
                          );
                        }
                        return null;
                      } else if (viz.type === 'bar') {
                        // Determine which data source to use based on title/description
                        const titleLower = viz.title.toLowerCase();
                        const descLower = (viz.description || '').toLowerCase();
                        let barData: Array<{ label: string; value: number }> = [];
                        let dataKey = 'value'; // Default to revenue/amount
                        
                        // Check if this is a quantity chart - use count instead of value
                        // More specific check: if title mentions "quantity" or "units" or description mentions "sold" in terms of units
                        const isQuantityChart = (titleLower.includes('quantity') || titleLower.includes('units') || 
                                                 (titleLower.includes('sold') && (titleLower.includes('by') || descLower.includes('units')))) ||
                                                (descLower.includes('quantity') || descLower.includes('units') || 
                                                 (descLower.includes('sold') && descLower.includes('units')));
                        
                        if ((titleLower.includes('product') || descLower.includes('product')) && customSource.topItems.length > 0) {
                          if (isQuantityChart) {
                            // Use count for quantity charts - sort by count descending
                            const sortedByCount = [...customSource.topItems].sort((a, b) => b.count - a.count);
                            barData = sortedByCount.slice(0, 8).map((item) => ({ label: item.name, value: item.count }));
                            dataKey = 'value';
                            console.log(`[Insights] bar chart (product QUANTITY) for ${customSource.name}:`, {
                              title: viz.title,
                              isQuantityChart: true,
                              topItemsLength: customSource.topItems.length,
                              barDataLength: barData.length,
                              sample: barData.slice(0, 3),
                              allBarData: barData
                            });
                          } else {
                            // Use value (revenue) for revenue charts
                            barData = customSource.topItems.slice(0, 8).map((item) => ({ label: item.name, value: item.value }));
                            dataKey = 'value';
                            console.log(`[Insights] bar chart (product REVENUE) for ${customSource.name}:`, {
                              title: viz.title,
                              isQuantityChart: false,
                              topItemsLength: customSource.topItems.length,
                              barDataLength: barData.length,
                              sample: barData.slice(0, 3)
                            });
                          }
                        } else if ((titleLower.includes('payment') || descLower.includes('payment')) && customSource.paymentMethodBreakdown && customSource.paymentMethodBreakdown.length > 0) {
                          barData = customSource.paymentMethodBreakdown.slice(0, 8).map((pm) => ({ label: pm.name, value: pm.value }));
                        } else if (customSource.categoryBreakdown.length > 0) {
                          barData = customSource.categoryBreakdown.slice(0, 8).map((cat) => ({ label: cat.name, value: cat.value }));
                        }
                        
                        if (barData.length > 0) {
                          return (
                            <Card key={idx} title={viz.title} description={viz.description || ''}>
                              <BarChartComponent
                                data={barData}
                                xKey="label"
                                bars={[{ 
                                  dataKey: dataKey, 
                                  color: viz.color || '#9333ea', 
                                  name: viz.title || 'Value'
                                }]}
                                footer={<p className="text-xs text-slate-500">{viz.description || ''}</p>}
                              />
                            </Card>
                          );
                        }
                        return null;
                      }
                      // If no chart was rendered, return null (will be filtered out)
                      return null;
                    })
                      .filter((item): item is React.ReactElement => item !== null)}
                  </div>
                ) : (
                  // Fallback to heuristic-based visualizations
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Monthly Trend - Context-aware */}
                    {(customSource.hasAmountData || customSource.hasHoursData) && (
                      <Card 
                        title="Monthly Trend" 
                        description={
                          customSource.dataType === 'volunteer' 
                            ? 'Volunteer hours over time'
                            : customSource.dataType === 'sales'
                              ? 'Revenue over time'
                              : customSource.dataType === 'donations'
                                ? 'Donations over time'
                                : 'Activity over time'
                        }
                      >
                        <TimeSeriesChart
                          data={customSource.monthlyData.filter((m) => m.value > 0 || m.count > 0)}
                          lines={[
                            { 
                              dataKey: 'value', 
                              color: '#9333ea', 
                              name: customSource.dataType === 'volunteer' 
                                ? 'Hours' 
                                : customSource.dataType === 'sales'
                                  ? 'Revenue ($)'
                                  : customSource.dataType === 'donations'
                                    ? 'Donations ($)'
                                    : 'Amount ($)', 
                              strokeWidth: 3 
                            },
                            { dataKey: 'count', color: '#8b5cf6', name: 'Record Count', strokeWidth: 2, dot: true }
                          ]}
                          footer={
                            <p className="text-xs text-slate-500">
                              {customSource.summary.totalRecords} records in selected window
                            </p>
                          }
                        />
                      </Card>
                    )}

                    {/* Category Breakdown */}
                    {customSource.hasCategoryData && customSource.categoryBreakdown.length > 0 && (
                      <Card title="Category Breakdown" description="Distribution by category">
                        <PieChartComponent
                          data={customSource.categoryBreakdown.slice(0, 6).map((cat) => ({
                            name: cat.name,
                            value: cat.value
                          }))}
                          footer={
                            <p className="text-xs text-slate-500">
                              {customSource.categoryBreakdown.length} categor{customSource.categoryBreakdown.length !== 1 ? 'ies' : 'y'}
                            </p>
                          }
                        />
                      </Card>
                    )}

                    {/* Top Products - Context-aware */}
                    {customSource.hasProductData && customSource.topItems.length > 0 && (
                      <Card
                        title={
                          customSource.dataType === 'volunteer' 
                            ? 'Top Activities'
                            : customSource.dataType === 'sales'
                              ? 'Top Products'
                              : customSource.dataType === 'events'
                                ? 'Top Events'
                                : 'Top Items'
                        }
                        description={
                          customSource.dataType === 'volunteer'
                            ? 'Activities with most volunteer hours'
                            : customSource.dataType === 'sales'
                              ? 'Highest revenue products'
                              : 'Highest performing items'
                        }
                        className={customSource.hasCategoryData ? '' : 'lg:col-span-2'}
                      >
                        <HorizontalBarChart
                          data={customSource.topItems.slice(0, 10)}
                          bars={[{ 
                            dataKey: 'value', 
                            color: '#9333ea', 
                            name: customSource.dataType === 'volunteer' ? 'Hours' : 'Amount ($)'
                          }]}
                          categoryKey="name"
                          height={Math.min(400, customSource.topItems.length * 40)}
                        />
                        <p className="mt-2 text-xs text-slate-500">
                          Showing top {Math.min(10, customSource.topItems.length)} of {customSource.topItems.length} items
                        </p>
                      </Card>
                    )}
                  </div>
                )}

                {/* Metadata */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-slate-500">
                  <span>
                    {customSource.lastSynced
                      ? `Last synced: ${formatDateTime(customSource.lastSynced)}`
                      : 'Never synced'}
                  </span>
                  <span>{customSource.summary.totalRecords} records in window</span>
                </div>
              </Card>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}


