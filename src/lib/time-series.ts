import { format, startOfMonth, endOfMonth, subMonths } from 'date-fns';

export interface MonthlyBucket {
  key: string;
  label: string;
  start: Date;
  end: Date;
}

export function getMonthlyBuckets(months = 12, anchor: Date = new Date()): MonthlyBucket[] {
  const buckets: MonthlyBucket[] = [];
  const anchorStart = startOfMonth(anchor);

  for (let i = months - 1; i >= 0; i -= 1) {
    const start = subMonths(anchorStart, i);
    buckets.push({
      key: format(start, 'yyyy-MM'),
      label: format(start, 'MMM yy'),
      start,
      end: endOfMonth(start)
    });
  }

  return buckets;
}

