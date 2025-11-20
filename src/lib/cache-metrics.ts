import { differenceInMinutes } from "date-fns";
import type { MetricSource } from "@prisma/client";

import { prisma } from "@/lib/prisma";

interface CacheParams<T> {
  key: string;
  from: Date;
  to: Date;
  source: MetricSource;
  ttlMinutes?: number;
  fetcher: () => Promise<T>;
}

export async function withMetricCache<T>({ key, from, to, source, ttlMinutes = 60, fetcher }: CacheParams<T>): Promise<T> {
  const existing = await prisma.cachedMetric.findFirst({
    where: { key },
    orderBy: { createdAt: "desc" }
  });

  if (existing && differenceInMinutes(new Date(), existing.createdAt) < ttlMinutes) {
    return existing.value as T;
  }

  const value = await fetcher();
  await prisma.cachedMetric.create({
    data: {
      key,
      value,
      fromDate: from,
      toDate: to,
      source
    }
  });
  return value;
}

