"use client";

import { useState, useTransition } from 'react';

import { Button } from '@/components/ui/button';
import { IntegrationStatuses } from '@/lib/integration-sync';
import { syncIntegrationsAction } from '@/app/(dashboard)/actions/sync-integrations';

interface IntegrationSyncPanelProps {
  statuses: IntegrationStatuses;
}

export function IntegrationSyncPanel({ statuses }: IntegrationSyncPanelProps) {
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [latest, setLatest] = useState(statuses);

  function formatTimestamp(timestamp?: string | null) {
    if (!timestamp) return "Never synced";
    const date = new Date(timestamp);
    if (Number.isNaN(date.getTime())) return "Unknown";
    return date.toLocaleString();
  }

  function formatStatus(status: IntegrationStatuses["etapestry"]) {
    if (!status) {
      return "Never synced";
    }
    if (status.error) {
      return `Failed · ${status.error}`;
    }
    return `Last synced ${formatTimestamp(status.timestamp)} · ${status.synced ?? 0} records`;
  }

  function handleSync() {
    setMessage(null);
    setError(null);
    startTransition(async () => {
      try {
        const result = await syncIntegrationsAction();
        if (!result.success) {
          setError(result.errors?.join(' ') ?? 'Unable to sync data.');
          return;
        }
        const timestamp = new Date().toISOString();
        setLatest({
          etapestry: {
            synced: result.result.etapestry?.synced,
            timestamp
          },
          eventbrite: {
            synced: result.result.eventbrite?.synced,
            timestamp
          }
        });
        setMessage(
          `eTapestry synced ${result.result.etapestry?.synced ?? 0} pledges · Eventbrite synced ${
            result.result.eventbrite?.synced ?? 0
          } events.`
        );
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : 'Failed to sync data.');
      }
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 text-sm md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">eTapestry</p>
          <p className="mt-1 text-sm text-slate-700">{formatStatus(latest.etapestry)}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Eventbrite</p>
          <p className="mt-1 text-sm text-slate-700">{formatStatus(latest.eventbrite)}</p>
        </div>
      </div>
      <Button type="button" variant="primary" onClick={handleSync} disabled={pending}>
        {pending ? "Syncing data..." : "Sync data sources"}
      </Button>
      {message ? <p className="text-xs text-green-600">{message}</p> : null}
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
}


