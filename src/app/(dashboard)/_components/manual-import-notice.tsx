import Link from 'next/link';

import { ManualImportForm } from '@/app/(dashboard)/_components/manual-import-form';
import { Card } from '@/components/ui/card';
import {
  IntegrationStatuses,
  IntegrationStatusValue,
  isIntegrationStale
} from '@/lib/integration-sync';

interface ManualImportNoticeProps {
  statuses: IntegrationStatuses;
  urgent?: boolean;
}

function formatStatus(status: IntegrationStatusValue | null) {
  if (!status) {
    return 'No successful sync detected.';
  }
  if (status.error) {
    return `Last attempt failed: ${status.error}`;
  }
  const timestamp = new Date(status.timestamp);
  const formatted = Number.isNaN(timestamp.getTime()) ? 'Unknown time' : timestamp.toLocaleString();
  return `Last automatic sync: ${formatted}`;
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
        </ul>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
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
            <li>Log into eTapestry → Reports → Queries → run the “BHIC pledge export” or “Data Extraction” query.</li>
            <li>
              Export the results as CSV. The default columns (Date, Role, Account Name, Type, Pledged, Received, Fund) or
              the template-based export both work.
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
            <li>In Eventbrite, open Reports → Orders (or the “BHIC Orders” saved report).</li>
            <li>
              Export the orders table as CSV—the default columns (Order ID, Event name, Ticket quantity, Net sales, etc.)
              already match what the uploader expects.
            </li>
            <li>Upload the CSV to refresh event counts, tickets sold, and revenue.</li>
          </ol>
          <div className="mt-4">
            <ManualImportForm source="eventbrite" label="events" />
          </div>
        </div>
      </div>
    </Card>
  );
}

