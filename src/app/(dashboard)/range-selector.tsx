"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';

const ranges = [
  { value: 'ytd', label: 'Year to date' },
  { value: '12m', label: 'Last 12 months' }
];

interface Props {
  currentRange: 'ytd' | '12m';
}

export function DashboardRangeSelector({ currentRange }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateRange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('range', value);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1">
      {ranges.map((range) => (
        <Button
          key={range.value}
          type="button"
          variant={range.value === currentRange ? 'primary' : 'ghost'}
          size="sm"
          className="rounded-xl"
          onClick={() => updateRange(range.value)}
        >
          {range.label}
        </Button>
      ))}
    </div>
  );
}

