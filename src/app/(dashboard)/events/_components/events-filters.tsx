"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface EventsFiltersProps {
  initialFrom?: string;
  initialTo?: string;
}

export function EventsFilters({ initialFrom = '', initialTo = '' }: EventsFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);

  function submit(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (from) params.set('from', from);
    else params.delete('from');
    if (to) params.set('to', to);
    else params.delete('to');
    router.push(`${pathname}?${params.toString()}`);
  }

  function reset() {
    setFrom('');
    setTo('');
    const params = new URLSearchParams(searchParams.toString());
    ['from', 'to'].forEach((key) => params.delete(key));
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-wrap items-end gap-4 rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur"
    >
      <div className="flex flex-col">
        <label htmlFor="from" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Start
        </label>
        <Input id="from" type="date" value={from} onChange={(event) => setFrom(event.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="to" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          End
        </label>
        <Input id="to" type="date" value={to} onChange={(event) => setTo(event.target.value)} />
      </div>
      <div className="ml-auto flex gap-2">
        <Button type="button" variant="ghost" onClick={reset}>
          Reset
        </Button>
        <Button type="submit">Apply</Button>
      </div>
    </form>
  );
}

