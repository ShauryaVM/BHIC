"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface DonorFiltersProps {
  initialQuery?: string;
  initialMinTotalGiven?: number;
  initialLastGiftFrom?: string;
  initialLastGiftTo?: string;
}

export function DonorFilters({
  initialQuery = '',
  initialMinTotalGiven,
  initialLastGiftFrom,
  initialLastGiftTo
}: DonorFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(initialQuery);
  const [minTotal, setMinTotal] = useState(initialMinTotalGiven?.toString() ?? '');
  const [lastFrom, setLastFrom] = useState(initialLastGiftFrom ?? '');
  const [lastTo, setLastTo] = useState(initialLastGiftTo ?? '');

  function applyFilters(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (query) params.set('query', query);
    else params.delete('query');

    if (minTotal) params.set('minTotalGiven', minTotal);
    else params.delete('minTotalGiven');

    if (lastFrom) params.set('lastGiftFrom', lastFrom);
    else params.delete('lastGiftFrom');

    if (lastTo) params.set('lastGiftTo', lastTo);
    else params.delete('lastGiftTo');

    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  }

  function resetFilters() {
    setQuery('');
    setMinTotal('');
    setLastFrom('');
    setLastTo('');
    const params = new URLSearchParams(searchParams.toString());
    ['query', 'minTotalGiven', 'lastGiftFrom', 'lastGiftTo', 'page'].forEach((key) => params.delete(key));
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={applyFilters}
      className="grid gap-4 rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur md:grid-cols-4"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Search</p>
        <Input placeholder="Name or email" value={query} onChange={(event) => setQuery(event.target.value)} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Min lifetime value ($)</p>
        <Input type="number" min={0} value={minTotal} onChange={(event) => setMinTotal(event.target.value)} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Last gift from</p>
        <Input type="date" value={lastFrom} onChange={(event) => setLastFrom(event.target.value)} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Last gift to</p>
        <Input type="date" value={lastTo} onChange={(event) => setLastTo(event.target.value)} />
      </div>
      <div className="md:col-span-4 flex justify-end gap-2">
        <Button type="button" variant="ghost" onClick={resetFilters}>
          Reset
        </Button>
        <Button type="submit">Apply filters</Button>
      </div>
    </form>
  );
}

