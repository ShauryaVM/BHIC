import Link from 'next/link';
import clsx from 'clsx';

import { Card } from '@/components/ui/card';
import { Table, TBody, TD, TH, THead } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Pagination } from '@/components/ui/pagination';
import { Progress } from '@/components/ui/progress';
import { TimeSeriesChart } from '@/components/charts/time-series-chart';
import { DonorFilters } from '@/app/(dashboard)/donors/_components/donor-filters';
import { DonorGeoCard } from '@/app/(dashboard)/donors/_components/donor-geo-card';
import { getDonorList, DonorSortField } from '@/lib/donor-data';
import { getDonorGeography } from '@/lib/donor-geo';
import { formatCurrency, formatDate, formatNumber } from '@/lib/format';
import { PageHeader, PageHeaderMeta } from '@/components/layout/page-header';

type DonorSearchParams = {
  page?: string;
  query?: string;
  minTotalGiven?: string;
  lastGiftFrom?: string;
  lastGiftTo?: string;
  rosterQuery?: string;
  status?: string;
  sort?: string;
  giftView?: string;
};

interface DonorsPageProps {
  searchParams?: Promise<DonorSearchParams> | DonorSearchParams;
}

const PAGE_SIZE = 10;

export default async function DonorsPage({ searchParams }: DonorsPageProps) {
  const resolvedSearchParams = (await Promise.resolve(searchParams)) ?? {};
  const page = Math.max(1, Number(resolvedSearchParams.page ?? '1'));
  const minTotalGiven = resolvedSearchParams.minTotalGiven ? Number(resolvedSearchParams.minTotalGiven) : undefined;
  const lastGiftFrom = resolvedSearchParams.lastGiftFrom ? new Date(resolvedSearchParams.lastGiftFrom) : undefined;
  const lastGiftTo = resolvedSearchParams.lastGiftTo ? new Date(resolvedSearchParams.lastGiftTo) : undefined;

  const rosterQuery = resolvedSearchParams.rosterQuery ?? resolvedSearchParams.query;
  const statusFilter =
    resolvedSearchParams.status === 'active'
      ? 'active'
      : resolvedSearchParams.status === 'prospect'
        ? 'prospect'
        : undefined;
  const [sortFieldRaw, sortDirRaw] = resolvedSearchParams.sort?.split('.') ?? [];
  const sortField = ['name', 'email', 'totalPledged', 'totalGiven', 'lastGiftDate'].includes(sortFieldRaw ?? '')
    ? (sortFieldRaw as DonorSortField)
    : undefined;
  const sortDir = sortDirRaw === 'asc' || sortDirRaw === 'desc' ? sortDirRaw : undefined;

  const data = await getDonorList({
    page,
    pageSize: PAGE_SIZE,
    query: rosterQuery ?? resolvedSearchParams.query,
    minTotalGiven,
    lastGiftFrom: Number.isNaN(lastGiftFrom?.getTime() ?? NaN) ? undefined : lastGiftFrom,
    lastGiftTo: Number.isNaN(lastGiftTo?.getTime() ?? NaN) ? undefined : lastGiftTo,
    status: statusFilter,
    sortBy: sortField,
    sortDir
  });
  const geography = await getDonorGeography();
  const giftDistributionTotal =
    data.charts.giftDistribution.reduce((sum, bucket) => sum + bucket.value, 0) || 1;
  const giftView = resolvedSearchParams.giftView === 'yearly' ? 'yearly' : 'monthly';
  const giftsData = giftView === 'yearly' ? data.charts.giftsYearly : data.charts.giftsMonthly;
  const totalGiftCount = giftsData.reduce((sum, bucket) => sum + bucket.count, 0);

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
        initialQuery={resolvedSearchParams.query}
        initialMinTotalGiven={minTotalGiven}
        initialLastGiftFrom={resolvedSearchParams.lastGiftFrom}
        initialLastGiftTo={resolvedSearchParams.lastGiftTo}
      />

      <Card
        title="Donor roster"
        description="Sortable list of BHIC supporters with pledge + gift metrics"
        actions={<RosterFilters searchParams={resolvedSearchParams} />}
      >
        <div className="overflow-x-auto">
          <Table>
            <THead>
              <SortableHeader label="Name" field="name" searchParams={resolvedSearchParams} />
              <SortableHeader label="Email" field="email" searchParams={resolvedSearchParams} />
              <SortableHeader label="Total pledged" field="totalPledged" searchParams={resolvedSearchParams} />
              <SortableHeader label="Total given" field="totalGiven" searchParams={resolvedSearchParams} />
              <SortableHeader label="Last gift" field="lastGiftDate" searchParams={resolvedSearchParams} />
              <TH>Status</TH>
            </THead>
            <TBody>
              {data.donors.map((donor) => (
                <tr key={donor.id}>
                  <TD>
                    <p className="font-semibold text-slate-900">{donor.name}</p>
                    {donor.phone ? <p className="text-xs text-slate-500">{donor.phone}</p> : null}
                  </TD>
                <TD>
                  {donor.emails.length ? (
                    <div className="flex flex-wrap gap-1">
                      {donor.emails.map((email) => (
                        <span
                          key={email}
                          className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                        >
                          {email}
                        </span>
                      ))}
                    </div>
                  ) : donor.email ? (
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                      {donor.email}
                    </span>
                  ) : (
                    'N/A'
                  )}
                </TD>
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

      <Card
        title="North Carolina giving map"
        description="Plot donor concentration and giving volume across the state"
      >
        <DonorGeoCard data={geography} />
      </Card>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card
          title="Giving history"
          description={giftView === 'yearly' ? 'Yearly total received gifts' : 'Monthly total received gifts'}
          actions={<GiftViewToggle searchParams={resolvedSearchParams} />}
        >
          <TimeSeriesChart
            data={giftsData.map((bucket) => ({
              ...bucket,
              value: Math.round(bucket.value)
            }))}
            lines={[
              {
                dataKey: 'value',
                color: '#2563eb',
                name: giftView === 'yearly' ? 'Total received ($) per year' : 'Total received ($) per month'
              }
            ]}
          />
          <p className="mt-2 text-xs text-slate-500">
            {totalGiftCount.toLocaleString()} gifts recorded in the selected range.
          </p>
        </Card>
        <Card title="Gift size distribution" description="Share of donors by lifetime giving">
          <div className="space-y-4">
            {data.charts.giftDistribution.map((range) => {
              const percent = (range.value / giftDistributionTotal) * 100;
              return (
                <div key={range.name}>
                  <div className="flex justify-between text-sm font-medium text-slate-700">
                    <span>{range.name}</span>
                    <span>
                      {range.value.toLocaleString()} donors · {percent.toFixed(1)}%
                    </span>
                  </div>
                  <Progress value={percent} className="mt-1" />
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      <Card title="All-time giving drilldown" description="Every recorded year of received gifts since 2006">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2">Year</th>
                <th className="px-3 py-2">Total received</th>
                <th className="px-3 py-2">Gift count</th>
              </tr>
            </thead>
            <tbody>
              {data.charts.giftsAllTime.map((bucket) => (
                <tr key={bucket.label} className="border-t border-slate-100">
                  <td className="px-3 py-2 font-semibold text-slate-800">{bucket.label}</td>
                  <td className="px-3 py-2 text-slate-700">{formatCurrency(bucket.value)}</td>
                  <td className="px-3 py-2 text-slate-600">{bucket.count.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

interface RosterFiltersProps {
  searchParams: DonorSearchParams;
}

function RosterFilters({ searchParams }: RosterFiltersProps) {
  const preserved = new URLSearchParams();
  Object.entries(searchParams ?? {}).forEach(([key, value]) => {
    if (!value) return;
    if (['rosterQuery', 'status', 'page'].includes(key)) return;
    preserved.set(key, value);
  });

  const statusValue = searchParams.status ?? '';

  return (
    <form method="get" className="flex flex-wrap items-center gap-2 text-sm">
      {Array.from(preserved.entries()).map(([key, value]) => (
        <input type="hidden" name={key} value={value} key={key} />
      ))}
      <input
        type="text"
        name="rosterQuery"
        defaultValue={searchParams.rosterQuery ?? ''}
        placeholder="Search donors..."
        className="w-40 rounded-md border border-slate-300 px-2 py-1 text-sm"
      />
      <select
        name="status"
        defaultValue={statusValue}
        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
      >
        <option value="">All statuses</option>
        <option value="active">Active (has gifts)</option>
        <option value="prospect">Prospect (no gifts yet)</option>
      </select>
      <button
        type="submit"
        className="rounded-md border border-slate-300 px-3 py-1 font-medium text-slate-700 hover:bg-slate-50"
      >
        Apply
      </button>
      <Link
        href="/donors"
        className="text-sm font-medium text-slate-500 underline-offset-2 hover:underline"
      >
        Reset
      </Link>
    </form>
  );
}

interface SortableHeaderProps {
  label: string;
  field: DonorSortField;
  searchParams: DonorSearchParams;
}

function SortableHeader({ label, field, searchParams }: SortableHeaderProps) {
  const params = new URLSearchParams();
  Object.entries(searchParams ?? {}).forEach(([key, value]) => {
    if (!value) return;
    if (key === 'page') return;
    if (key === 'sort') return;
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
  const href = paramsString ? `?${paramsString}` : '/donors';

  return (
    <TH>
      <Link href={href} className="flex items-center gap-1 text-sm font-semibold text-slate-700">
        {label}
        <span className="text-xs text-slate-400">{indicator}</span>
      </Link>
    </TH>
  );
}

function GiftViewToggle({ searchParams }: { searchParams: DonorSearchParams }) {
  const baseParams = new URLSearchParams();
  Object.entries(searchParams ?? {}).forEach(([key, value]) => {
    if (!value) return;
    if (key === 'giftView') return;
    baseParams.set(key, value);
  });

  const currentView = searchParams.giftView === 'yearly' ? 'yearly' : 'monthly';

  const buildHref = (view: 'monthly' | 'yearly') => {
    const params = new URLSearchParams(baseParams.toString());
    if (view === 'monthly') {
      params.delete('giftView');
    } else {
      params.set('giftView', view);
    }
    const qs = params.toString();
    return qs ? `?${qs}` : '/donors';
  };

  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
      <Link
        href={buildHref('monthly')}
        className={clsx(
          'rounded-full px-3 py-1 transition',
          currentView === 'monthly' ? 'bg-white text-slate-900 shadow' : 'text-slate-500'
        )}
      >
        Monthly
      </Link>
      <Link
        href={buildHref('yearly')}
        className={clsx(
          'rounded-full px-3 py-1 transition',
          currentView === 'yearly' ? 'bg-white text-slate-900 shadow' : 'text-slate-500'
        )}
      >
        Yearly
      </Link>
    </div>
  );
}

