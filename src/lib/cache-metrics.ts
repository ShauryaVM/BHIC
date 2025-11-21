import { differenceInMinutes } from 'date-fns';
import type { MetricSource, Prisma } from '@prisma/client';

import { prisma } from '@/lib/prisma';

interface CacheParams<T> {
  key: string;
  from: Date;
  to: Date;
  source: MetricSource;
  ttlMinutes?: number;
  fetcher: () => Promise<T>;
}

let cacheDisabled = false;

function toJsonValue<T>(value: T): Prisma.InputJsonValue {
  return value as Prisma.InputJsonValue;
}

export async function withMetricCache<T>({ key, from, to, source, ttlMinutes = 60, fetcher }: CacheParams<T>): Promise<T> {
  if (cacheDisabled) {
    return fetcher();
  }

  try {
    const existing = await prisma.cachedMetric.findFirst({
      where: { key },
      orderBy: { createdAt: 'desc' }
    });

    if (existing && differenceInMinutes(new Date(), existing.createdAt) < ttlMinutes) {
      return existing.value as T;
    }

    const value = await fetcher();
    await prisma.cachedMetric
      .create({
        data: {
          key,
          value: toJsonValue(value),
          fromDate: from,
          toDate: to,
          source
        }
      })
      .catch((error) => {
        console.warn('Failed to persist cached metric', error instanceof Error ? error.message : error);
      });

    return value;
  } catch (error) {
    cacheDisabled = true;
    console.warn('Metric cache unavailable, falling back to live fetch', error instanceof Error ? error.message : error);
    return fetcher();
  }
}

