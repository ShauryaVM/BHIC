import { Card } from '@/components/ui/card';
import { Table, TBody, TD, TH, THead } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Pagination } from '@/components/ui/pagination';
import { PieChartComponent } from '@/components/charts/pie-chart';
import { TimeSeriesChart } from '@/components/charts/time-series-chart';
import { DonorFilters } from '@/app/(dashboard)/donors/_components/donor-filters';
import { getDonorList } from '@/lib/donor-data';
import { formatCurrency, formatDate, formatNumber } from '@/lib/format';
import { PageHeader, PageHeaderMeta } from '@/components/layout/page-header';

interface DonorsPageProps {
  searchParams?: {
    page?: string;
    query?: string;
    minTotalGiven?: string;
    lastGiftFrom?: string;
    lastGiftTo?: string;
  };
}

const PAGE_SIZE = 10;

export default async function DonorsPage({ searchParams }: DonorsPageProps) {
  const page = Math.max(1, Number(searchParams?.page ?? '1'));
  const minTotalGiven = searchParams?.minTotalGiven ? Number(searchParams.minTotalGiven) : undefined;
  const lastGiftFrom = searchParams?.lastGiftFrom ? new Date(searchParams.lastGiftFrom) : undefined;
  const lastGiftTo = searchParams?.lastGiftTo ? new Date(searchParams.lastGiftTo) : undefined;

  const data = await getDonorList({
    page,
    pageSize: PAGE_SIZE,
    query: searchParams?.query,
    minTotalGiven,
    lastGiftFrom: Number.isNaN(lastGiftFrom?.getTime() ?? NaN) ? undefined : lastGiftFrom,
    lastGiftTo: Number.isNaN(lastGiftTo?.getTime() ?? NaN) ? undefined : lastGiftTo
  });

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Supporters"
        title="Donor intelligence"
        description="Understand giving behavior and surface the right audience for outreach."
      >
        <PageHeaderMeta
          items={[
            { label: 'Total donors', value: formatNumber(data.summary.totalDonors) },
            { label: 'Active donors (12m)', value: formatNumber(data.summary.activeDonors) },
            { label: 'Avg lifetime value', value: formatCurrency(data.summary.averageLifetimeValue) }
          ]}
        />
      </PageHeader>

      <DonorFilters
        initialQuery={searchParams?.query}
        initialMinTotalGiven={minTotalGiven}
        initialLastGiftFrom={searchParams?.lastGiftFrom}
        initialLastGiftTo={searchParams?.lastGiftTo}
      />

      <Card title="Donor roster" description="Sortable list of BHIC supporters with pledge + gift metrics">
        <div className="overflow-x-auto">
          <Table>
            <THead>
              <TH>Name</TH>
              <TH>Email</TH>
              <TH>Total pledged</TH>
              <TH>Total given</TH>
              <TH>Last gift</TH>
              <TH>Status</TH>
            </THead>
            <TBody>
              {data.donors.map((donor) => (
                <tr key={donor.id}>
                  <TD>
                    <p className="font-semibold text-slate-900">{donor.name}</p>
                    {donor.phone ? <p className="text-xs text-slate-500">{donor.phone}</p> : null}
                  </TD>
                  <TD>{donor.email ?? 'N/A'}</TD>
                  <TD>{formatCurrency(donor.totalPledged)}</TD>
                  <TD>{formatCurrency(donor.totalGiven)}</TD>
                  <TD>{donor.lastGiftDate ? formatDate(donor.lastGiftDate) : 'No gifts yet'}</TD>
                  <TD>
                    <Badge variant={donor.lastGiftDate ? 'success' : 'default'}>
                      {donor.lastGiftDate ? 'Active' : 'Prospect'}
                    </Badge>
                  </TD>
                </tr>
              ))}
            </TBody>
          </Table>
        </div>
        <Pagination page={data.pagination.page} totalPages={data.pagination.totalPages} />
      </Card>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card title="Donors acquired" description="Monthly count of new supporters">
          <TimeSeriesChart
            data={data.charts.acquisitions}
            lines={[{ dataKey: 'value', color: '#2563eb', name: 'Donors' }]}
          />
        </Card>
        <Card title="Gift size distribution" description="Lifetime value buckets">
          <PieChartComponent
            data={data.charts.giftDistribution.map((range) => ({ name: range.name, value: range.value }))}
          />
        </Card>
      </section>
    </div>
  );
}

