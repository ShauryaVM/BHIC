import { Coins, Globe, Ticket, Users2 } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { TimeSeriesChart } from '@/components/charts/time-series-chart';
import { getDashboardData } from '@/lib/dashboard-data';
import { formatCurrency, formatNumber } from '@/lib/format';
import { PageHeader, PageHeaderMeta } from '@/components/layout/page-header';
import { getIntegrationStatuses, isIntegrationStale } from '@/lib/integration-sync';

import { DashboardRangeSelector } from '@/app/(dashboard)/range-selector';
import { IntegrationSyncPanel } from '@/app/(dashboard)/_components/integration-sync-panel';
import { ManualImportNotice } from '@/app/(dashboard)/_components/manual-import-notice';

interface DashboardPageProps {
  searchParams: Promise<{
    range?: string | string[];
  }>;
}

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const params = await searchParams;
  const rawRange = Array.isArray(params?.range) ? params?.range[0] : params?.range;
  const range = rawRange === '12m' ? '12m' : 'ytd';
  const data = await getDashboardData(range);
  const integrationStatuses = await getIntegrationStatuses();
  const manualImportActive =
    isIntegrationStale(integrationStatuses.etapestry) || isIntegrationStale(integrationStatuses.eventbrite);

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Executive view"
        title="Mission Control"
        description="Funds, community engagement, and digital reach in one place."
        actions={<DashboardRangeSelector currentRange={range} />}
      >
        <PageHeaderMeta
          items={[
            {
              label: 'Current range',
              value: range === '12m' ? 'Last 12 months' : 'Year to date'
            },
            {
              label: 'Data sources',
              value: 'eTapestry · Eventbrite · GA4',
              helper: 'Synced securely via service accounts'
            },
            {
              label: 'Refresh cadence',
              value: 'Every 60 minutes',
              helper: 'Automatic background sync'
            }
          ]}
        />
      </PageHeader>

      {manualImportActive ? <ManualImportNotice statuses={integrationStatuses} /> : null}

      <Card title="Data pipeline" description="Manually refresh eTapestry and Eventbrite data or review last sync status.">
        <IntegrationSyncPanel statuses={integrationStatuses} />
      </Card>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="space-y-3 bg-gradient-to-br from-brand/10 via-white to-white">
          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-500">
            <span>Funds raised ({range === '12m' ? '12 months' : 'YTD'})</span>
            <Coins className="h-5 w-5 text-brand" />
          </div>
          <p className="text-4xl font-semibold text-slate-900">{formatCurrency(data.kpis.fundsYtd)}</p>
          <p className="text-xs text-slate-500">Includes pledges received and committed.</p>
        </Card>
        <Card className="space-y-3 bg-gradient-to-br from-slate-50 via-white to-white">
          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-500">
            <span>Active donors</span>
            <Users2 className="h-5 w-5 text-brand-light" />
          </div>
          <p className="text-4xl font-semibold text-slate-900">{formatNumber(data.kpis.activeDonors)}</p>
          <p className="text-xs text-slate-500">Last gift within the past 12 months.</p>
        </Card>
        <Card className="space-y-3 bg-gradient-to-br from-white via-slate-50 to-white">
          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-500">
            <span>Events + tickets</span>
            <Ticket className="h-5 w-5 text-brand" />
          </div>
          <p className="text-4xl font-semibold text-slate-900">
            {formatNumber(data.kpis.eventsThisYear)} <span className="text-base text-slate-500">events</span>
          </p>
          <p className="text-sm font-semibold text-slate-800">{formatNumber(data.kpis.ticketsSold)} tickets sold</p>
        </Card>
        <Card className="space-y-3 bg-gradient-to-br from-white via-white to-slate-50">
          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-500">
            <span>Website sessions (30d)</span>
            <Globe className="h-5 w-5 text-brand-light" />
          </div>
          <p className="text-4xl font-semibold text-slate-900">{formatNumber(data.kpis.sessionsLast30Days)}</p>
          {data.kpis.gaError ? (
            <p className="text-xs text-red-500">{data.kpis.gaError}</p>
          ) : (
            <p className="text-xs text-slate-500">Source: Google Analytics 4</p>
          )}
        </Card>
      </section>

      <Card title="Performance trends" description="Funds, ticketing, and sessions across the last 12 months">
        <TimeSeriesChart
          data={data.charts.monthly}
          lines={[
            { dataKey: 'funds', color: '#0f172a', name: 'Funds raised', strokeWidth: 3 },
            { dataKey: 'tickets', color: '#f97316', name: 'Tickets sold', strokeWidth: 3 },
            { dataKey: 'sessions', color: '#2563eb', name: 'Sessions', strokeWidth: 3 }
          ]}
        />
      </Card>
    </div>
  );
}

