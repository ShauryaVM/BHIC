"use client";

import { useActionState, useId } from 'react';

import { manualImportAction } from '@/app/(dashboard)/actions/manual-import';
import { manualImportInitialState } from '@/app/(dashboard)/actions/manual-import-shared';
import { Button } from '@/components/ui/button';

interface ManualImportFormProps {
  source: 'etapestry' | 'eventbrite';
  label: string;
}

export function ManualImportForm({ source, label }: ManualImportFormProps) {
  const [state, formAction, pending] = useActionState(manualImportAction, manualImportInitialState);
  const id = useId();

  return (
    <form action={formAction} encType="multipart/form-data" className="space-y-3">
      <input type="hidden" name="source" value={source} />
      <div className="space-y-1.5">
        <label htmlFor={`${id}-file`} className="text-sm font-medium text-slate-700">
          Upload CSV export
        </label>
        <input
          id={`${id}-file`}
          name="file"
          type="file"
          accept=".csv"
          required
          className="block w-full cursor-pointer rounded-xl border border-dashed border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-900 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-white"
        />
        <p className="text-xs text-slate-500">Only CSV files using the provided template are accepted.</p>
      </div>
      <Button type="submit" variant="primary" disabled={pending}>
        {pending ? 'Importing…' : `Import ${label}`}
      </Button>
      {state.message ? (
        <p className={`text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>{state.message}</p>
      ) : null}
    </form>
  );
}

