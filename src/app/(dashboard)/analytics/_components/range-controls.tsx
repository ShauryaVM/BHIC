"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const presets = [
  { label: '7 days', days: 7 },
  { label: '30 days', days: 30 },
  { label: '90 days', days: 90 }
];

interface RangeControlsProps {
  initialFrom: string;
  initialTo: string;
}

export function AnalyticsRangeControls({ initialFrom, initialTo }: RangeControlsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);

  function updateRange(updates: { from?: string; to?: string }) {
    const params = new URLSearchParams(searchParams.toString());
    if (updates.from !== undefined) {
      if (updates.from) {
        params.set('from', updates.from);
        setFrom(updates.from);
      } else {
        params.delete('from');
        setFrom('');
      }
    }
    if (updates.to !== undefined) {
      if (updates.to) {
        params.set('to', updates.to);
        setTo(updates.to);
      } else {
        params.delete('to');
        setTo('');
      }
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  function handlePreset(days: number) {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - days);
    updateRange({
      from: start.toISOString().slice(0, 10),
      to: end.toISOString().slice(0, 10)
    });
  }

  return (
    <div className="rounded-[24px] border border-white/70 bg-white/90 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.08)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Date range</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {presets.map((preset) => (
          <Button key={preset.days} type="button" variant="ghost" size="sm" onClick={() => handlePreset(preset.days)}>
            {preset.label}
          </Button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <div>
          <p className="text-xs text-slate-500">From</p>
          <Input
            type="date"
            value={from}
            onChange={(event) => setFrom(event.target.value)}
            onBlur={(event) => updateRange({ from: event.currentTarget.value })}
          />
        </div>
        <div>
          <p className="text-xs text-slate-500">To</p>
          <Input
            type="date"
            value={to}
            onChange={(event) => setTo(event.target.value)}
            onBlur={(event) => updateRange({ to: event.currentTarget.value })}
          />
        </div>
      </div>
    </div>
  );
}

