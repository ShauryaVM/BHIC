import { MetricSource } from '@prisma/client';

import { prisma } from '@/lib/prisma';

type IntegrationKey = 'integration:etapestry' | 'integration:eventbrite';

const STATUS_KEYS: Record<MetricSource, IntegrationKey | null> = {
  [MetricSource.ETAPESTRY]: 'integration:etapestry',
  [MetricSource.EVENTBRITE]: 'integration:eventbrite',
  [MetricSource.GA4]: null,
  [MetricSource.INTERNAL]: null
};

const keyFor = (source: MetricSource): IntegrationKey => {
  const key = STATUS_KEYS[source];
  if (!key) {
    throw new Error(`Unsupported integration source ${source}`);
  }
  return key;
};

export interface IntegrationStatusValue {
  synced?: number;
  error?: string;
  timestamp: string;
}

export interface IntegrationStatuses {
  etapestry: IntegrationStatusValue | null;
  eventbrite: IntegrationStatusValue | null;
}

export async function recordIntegrationSync(source: MetricSource, payload: Omit<IntegrationStatusValue, 'timestamp'>) {
  if (!STATUS_KEYS[source]) {
    return;
  }
  const now = new Date();
  await prisma.cachedMetric.create({
    data: {
      key: keyFor(source),
      value: {
        ...payload,
        timestamp: now.toISOString(),
        source
      },
      fromDate: now,
      toDate: now,
      source: MetricSource.INTERNAL
    }
  });
}

export async function getIntegrationStatuses(): Promise<IntegrationStatuses> {
  const keys: IntegrationKey[] = ['integration:etapestry', 'integration:eventbrite'];
  const rows = await prisma.cachedMetric.findMany({
    where: { key: { in: keys } },
    orderBy: { createdAt: 'desc' }
  });

  const latest = new Map<string, typeof rows[number]>();
  for (const row of rows) {
    if (!latest.has(row.key)) {
      latest.set(row.key, row);
    }
  }

  const formatStatus = (key: IntegrationKey): IntegrationStatusValue | null => {
    const entry = latest.get(key);
    if (!entry) return null;
    const value = entry.value as Partial<IntegrationStatusValue> | null;
    const timestamp =
      (value?.timestamp && typeof value.timestamp === 'string'
        ? value.timestamp
        : entry.createdAt.toISOString());
    return {
      synced: typeof value?.synced === 'number' ? value.synced : undefined,
      error: typeof value?.error === 'string' ? value.error : undefined,
      timestamp
    };
  };

  return {
    etapestry: formatStatus('integration:etapestry'),
    eventbrite: formatStatus('integration:eventbrite')
  };
}

export function isIntegrationStale(
  status: IntegrationStatusValue | null,
  options: { maxAgeHours?: number } = {}
): boolean {
  const { maxAgeHours = 12 } = options;
  if (!status) return true;
  if (status.error) return true;
  const timestamp = new Date(status.timestamp);
  if (Number.isNaN(timestamp.getTime())) return true;
  const ageMs = Date.now() - timestamp.getTime();
  return ageMs > maxAgeHours * 60 * 60 * 1000;
}

export async function invalidateMetricsForSources(sources: MetricSource[]) {
  if (!sources.length) return;
  await prisma.cachedMetric.deleteMany({
    where: {
      source: { in: sources }
    }
  });
}


