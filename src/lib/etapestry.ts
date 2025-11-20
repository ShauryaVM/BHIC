import { MetricSource, PledgeStatus, Prisma } from '@prisma/client';
import { subDays } from 'date-fns';

import { withMetricCache } from '@/lib/cache-metrics';
import { env } from '@/lib/env';
import { prisma } from '@/lib/prisma';
import { getMonthlyBuckets } from '@/lib/time-series';

interface FetchParams {
  from: Date;
  to: Date;
}

interface ExternalPledge {
  id: string;
  amount: number;
  date: string;
  campaign?: string;
  status?: string;
  donor: {
    id?: string;
    externalId?: string;
    name: string;
    email?: string;
    phone?: string;
    lastGiftDate?: string;
  };
}

const allowedStatuses = new Set(Object.values(PledgeStatus));

function mapStatus(status?: string | null): PledgeStatus {
  if (!status) return PledgeStatus.PLEDGED;
  const normalized = status.toUpperCase() as PledgeStatus;
  return allowedStatuses.has(normalized) ? normalized : PledgeStatus.PLEDGED;
}

function pledgeSyncRange(range?: Partial<FetchParams>): FetchParams {
  const now = new Date();
  return {
    from: range?.from ?? subDays(now, 90),
    to: range?.to ?? now
  };
}

function jsonFetch(url: URL) {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${env.ETAPESTRY_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });
}

export async function fetchPledges(range: FetchParams): Promise<ExternalPledge[]> {
  const url = new URL('/pledges', env.ETAPESTRY_BASE_URL);
  url.searchParams.set('from', range.from.toISOString());
  url.searchParams.set('to', range.to.toISOString());

  const response = await jsonFetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch pledges: ${response.statusText}`);
  }

  const data = (await response.json()) as ExternalPledge[] | { pledges: ExternalPledge[] };
  if (Array.isArray(data)) {
    return data;
  }
  if ('pledges' in data && Array.isArray(data.pledges)) {
    return data.pledges;
  }
  return [];
}

export async function syncPledgesToDb(range?: Partial<FetchParams>) {
  const window = pledgeSyncRange(range);
  const pledges = await fetchPledges(window);

  for (const pledge of pledges) {
    const donorExternalId = pledge.donor.externalId ?? pledge.donor.id ?? `etp-${pledge.donor.email ?? pledge.id}`;
    const donor = await prisma.donor.upsert({
      where: { externalId: donorExternalId },
      update: {
        name: pledge.donor.name,
        email: pledge.donor.email,
        phone: pledge.donor.phone
      },
      create: {
        externalId: donorExternalId,
        name: pledge.donor.name,
        email: pledge.donor.email,
        phone: pledge.donor.phone
      }
    });

    await prisma.pledge.upsert({
      where: { externalId: pledge.id },
      update: {
        donorId: donor.id,
        amount: pledge.amount,
        date: new Date(pledge.date),
        campaign: pledge.campaign,
        status: mapStatus(pledge.status)
      },
      create: {
        externalId: pledge.id,
        donorId: donor.id,
        amount: pledge.amount,
        date: new Date(pledge.date),
        campaign: pledge.campaign,
        status: mapStatus(pledge.status)
      }
    });
  }

  await refreshLifetimeValues();

  return { synced: pledges.length };
}

async function refreshLifetimeValues() {
  const pledged = await prisma.pledge.groupBy({
    by: ['donorId'],
    _sum: { amount: true }
  });

  const received = await prisma.pledge.groupBy({
    by: ['donorId'],
    where: { status: PledgeStatus.RECEIVED },
    _sum: { amount: true }
  });

  const receivedMap = new Map(received.map((item) => [item.donorId, item._sum.amount ?? new Prisma.Decimal(0)]));

  const recentGifts = await prisma.pledge.findMany({
    where: { status: PledgeStatus.RECEIVED },
    select: { donorId: true, date: true },
    orderBy: { date: 'desc' }
  });

  const lastGiftMap = new Map<string, Date>();
  for (const gift of recentGifts) {
    if (!lastGiftMap.has(gift.donorId)) {
      lastGiftMap.set(gift.donorId, gift.date);
    }
  }

  for (const donor of pledged) {
    await prisma.donor.update({
      where: { id: donor.donorId },
      data: {
        totalPledged: donor._sum.amount ?? new Prisma.Decimal(0),
        totalGiven: receivedMap.get(donor.donorId) ?? new Prisma.Decimal(0),
        lastGiftDate: lastGiftMap.get(donor.donorId)
      }
    });
  }
}

export async function getFundsRaisedSummary(range: FetchParams) {
  return withMetricCache({
    key: `funds:${range.from.toISOString()}:${range.to.toISOString()}`,
    from: range.from,
    to: range.to,
    source: MetricSource.ETAPESTRY,
    fetcher: async () => {
      const pledges = await prisma.pledge.findMany({
        where: { date: { gte: range.from, lte: range.to } },
        select: { amount: true, date: true }
      });

      const buckets = getMonthlyBuckets(12, range.to);
      const series = buckets.map((bucket) => {
        const total = pledges
          .filter((pledge) => pledge.date >= bucket.start && pledge.date <= bucket.end)
          .reduce((sum, pledge) => sum + Number(pledge.amount), 0);
        return { label: bucket.label, total };
      });

      const totalYtd = pledges.reduce((sum, pledge) => sum + Number(pledge.amount), 0);
      return {
        total: totalYtd,
        monthly: series
      };
    }
  });
}

