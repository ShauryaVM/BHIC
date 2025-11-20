import { Card } from '@/components/ui/card';
import { Table, TBody, TD, TH, THead } from '@/components/ui/table';
import { TimeSeriesChart } from '@/components/charts/time-series-chart';
import { AnalyticsRangeControls } from '@/app/(dashboard)/analytics/_components/range-controls';
import { defaultAnalyticsFilters, getAnalyticsData } from '@/lib/analytics-data';
import { formatNumber } from '@/lib/format';
import { PageHeader, PageHeaderMeta } from '@/components/layout/page-header';

interface AnalyticsPageProps {
  searchParams?: {
    from?: string;
    to?: string;
  };
}

const secondsToMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.round(seconds % 60);
  return `${minutes}m ${remaining}s`;
};

export default async function AnalyticsPage({ searchParams }: AnalyticsPageProps) {
  const defaults = defaultAnalyticsFilters();
  const filters = {
    from: searchParams?.from ? new Date(searchParams.from) : defaults.from,
    to: searchParams?.to ? new Date(searchParams.to) : defaults.to
  };
  const data = await getAnalyticsData(filters);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Digital"
        title="Digital analytics"
        description="GA4 insights for bhic.org traffic and engagement."
        actions={<AnalyticsRangeControls initialFrom={filters.from.toISOString().slice(0, 10)} initialTo={filters.to.toISOString().slice(0, 10)} />}
      >
        <PageHeaderMeta
          items={[
            { label: 'Users', value: formatNumber(data.summary.users), helper: data.summary.error },
            { label: 'Sessions', value: formatNumber(data.summary.sessions) },
            { label: 'Pageviews', value: formatNumber(data.summary.pageviews) },
            { label: 'Avg engagement', value: secondsToMinutes(data.summary.averageEngagementTime) }
          ]}
          columns={4}
        />
      </PageHeader>

      <Card title="Sessions over time">
        <TimeSeriesChart
          data={data.sessionsSeries.points}
          lines={[{ dataKey: 'value', color: '#2563eb', name: 'Sessions' }]}
          footer={
            data.sessionsSeries.error ? (
              <p className="text-sm text-red-500">{data.sessionsSeries.error}</p>
            ) : (
              <p className="text-xs text-slate-500">Source: Google Analytics Data API</p>
            )
          }
        />
      </Card>

      <Card title="Top pages" description="Pageviews from GA4">
        <div className="overflow-x-auto">
          <Table>
            <THead>
              <TH>Page</TH>
              <TH>Title</TH>
              <TH>Pageviews</TH>
            </THead>
            <TBody>
              {data.topPages.rows.map((row) => (
                <tr key={`${row.path}-${row.title}`}>
                  <TD>{row.path}</TD>
                  <TD>{row.title}</TD>
                  <TD>{formatNumber(row.pageviews)}</TD>
                </tr>
              ))}
            </TBody>
          </Table>
        </div>
        {data.topPages.error ? <p className="text-sm text-red-500">{data.topPages.error}</p> : null}
      </Card>
    </div>
  );
}

