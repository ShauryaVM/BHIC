import Link from 'next/link';

import { ManualImportForm } from '@/app/(dashboard)/_components/manual-import-form';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  IntegrationStatuses,
  IntegrationStatusValue,
  isIntegrationStale
} from '@/lib/integration-sync';

const STATUS_TIMESTAMP_FORMATTER = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'UTC'
});

interface ManualImportNoticeProps {
  statuses: IntegrationStatuses;
  urgent?: boolean;
}

function formatStatus(status: IntegrationStatusValue | null) {
  if (!status) {
    return 'No successful sync detected.';
  }

  const attemptTimestamp = new Date(status.timestamp);
  const attemptFormatted = Number.isNaN(attemptTimestamp.getTime())
    ? 'Unknown time'
    : `${STATUS_TIMESTAMP_FORMATTER.format(attemptTimestamp)} UTC`;

  const successTimestamp = status.lastSuccessTimestamp ? new Date(status.lastSuccessTimestamp) : null;
  const successFormatted =
    successTimestamp && !Number.isNaN(successTimestamp.getTime())
      ? `${STATUS_TIMESTAMP_FORMATTER.format(successTimestamp)} UTC`
      : null;

  if (status.error) {
    return successFormatted
      ? `Last attempt failed (${status.error}). Last successful sync: ${successFormatted}.`
      : `Last attempt failed (${status.error}). No successful sync recorded.`;
  }

  return `Last automatic sync: ${attemptFormatted}`;
}

export function ManualImportNotice({ statuses, urgent = false }: ManualImportNoticeProps) {
  const etapestryStale = isIntegrationStale(statuses.etapestry);
  const eventbriteStale = isIntegrationStale(statuses.eventbrite);

  return (
    <Card
      className={
        urgent
          ? 'border-2 border-dashed border-amber-400 bg-amber-50/40'
          : 'border border-slate-200 bg-white'
      }
    >
      <div className="space-y-2">
        {urgent ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">Manual import required</p>
            <h2 className="text-2xl font-semibold text-slate-900">Vendor APIs are unavailable</h2>
            <p className="text-sm text-slate-700">
              Automated syncs from eTapestry and Eventbrite are failing. Until Blackbaud/Eventbrite restore API access,
              download the data exports and upload them here so dashboards stay up to date.
            </p>
          </>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Manual CSV upload</p>
            <h2 className="text-2xl font-semibold text-slate-900">Refresh pledges and events manually</h2>
            <p className="text-sm text-slate-700">
              Use this fallback any time you want to push ad-hoc updates or reconcile with exports—no need to wait for the
              automated sync.
            </p>
          </>
        )}
        <ul className="mt-2 space-y-1 text-sm text-slate-700">
          <li>• eTapestry: {formatStatus(statuses.etapestry)}</li>
          <li>• Eventbrite: {formatStatus(statuses.eventbrite)}</li>
          {statuses.custom && (
            <li>• Custom Sources: {formatStatus(statuses.custom)}</li>
          )}
        </ul>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          className={`rounded-2xl border p-5 shadow-sm ${
            urgent ? 'border-amber-200 bg-white/80' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">eTapestry pledges</p>
              <h3 className="text-lg font-semibold text-slate-900">
                {etapestryStale ? 'Sync overdue' : 'Sync healthy'}
              </h3>
            </div>
            <Link
              href="/manual-import/etapestry-template.csv"
              className="text-xs font-semibold text-brand hover:underline"
              target="_blank"
            >
              Download template
            </Link>
          </div>
          <ol className="mt-3 list-decimal space-y-1.5 pl-4 text-sm text-slate-600">
            <li>Log into eTapestry → Reports → Search for "BHIC Data" in search box on left side of page → Click "Run Report"</li>
            <li>
              Select "CSV File - Download" from the dropdown menu for "Report Format". Click "Submit" to download the CSV file.
            </li>
            <li>Upload the CSV below to load pledges and donor updates into BHIC Dashboard.</li>
          </ol>
          <div className="mt-4">
            <ManualImportForm source="etapestry" label="pledges" />
          </div>
        </div>

        <div
          className={`rounded-2xl border p-5 shadow-sm ${
            urgent ? 'border-amber-200 bg-white/80' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Eventbrite events</p>
              <h3 className="text-lg font-semibold text-slate-900">
                {eventbriteStale ? 'Sync overdue' : 'Sync healthy'}
              </h3>
            </div>
            <Link
              href="/manual-import/eventbrite-template.csv"
              className="text-xs font-semibold text-brand hover:underline"
              target="_blank"
            >
              Download template
            </Link>
          </div>
          <ol className="mt-3 list-decimal space-y-1.5 pl-4 text-sm text-slate-600">
            <li>In Eventbrite, open Manage My Orders → Go to the Orders page on the left side of the page.</li>
            <li>
              Select all orders and run report. Export the CSV file.
            </li>
            <li>Upload the CSV to refresh event counts, tickets sold, and revenue.</li>
          </ol>
          <div className="mt-4">
            <ManualImportForm source="eventbrite" label="events" />
          </div>
        </div>

        <div
          className={`rounded-2xl border p-5 shadow-sm ${
            urgent ? 'border-amber-200 bg-white/80' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Custom Data Sources</p>
              <h3 className="text-lg font-semibold text-slate-900">Upload Any CSV</h3>
            </div>
            <Link
              href="/settings/data-sources"
              className="text-xs font-semibold text-brand hover:underline"
            >
              Manage
            </Link>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Create custom data sources for any CSV data. The system will automatically detect structure and map fields.
          </p>
          <div className="mt-4">
            <Link href="/settings/data-sources/new">
              <Button variant="secondary" className="w-full">
                Create Data Source
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

