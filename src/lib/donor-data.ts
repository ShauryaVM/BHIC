import { PledgeStatus, Prisma } from '@prisma/client';
import { startOfMonth, startOfYear, subDays, subMonths } from 'date-fns';
import { unstable_cache } from 'next/cache';

import { prisma } from '@/lib/prisma';
import { getMonthlyBuckets, type MonthlyBucket } from '@/lib/time-series';

const toNumber = (value?: Prisma.Decimal | null) => Number(value ?? 0);

export interface DonorFilters {
  query?: string;
  minTotalGiven?: number;
  lastGiftFrom?: Date;
  lastGiftTo?: Date;
  status?: 'active' | 'prospect';
}

export type DonorSortField = 'name' | 'email' | 'totalPledged' | 'totalGiven' | 'lastGiftDate';

export interface DonorListResult {
  donors: Array<{
    id: string;
    name: string;
    email?: string | null;
    emails: string[];
    phone?: string | null;
    totalPledged: number;
    totalGiven: number;
    lastGiftDate?: Date | null;
  }>;
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  summary: {
    totalDonors: number;
    activeDonors: number;
    averageLifetimeValue: number;
  };
  charts: {
    giftsMonthly: Array<{ label: string; value: number; count: number }>;
    giftsYearly: Array<{ label: string; value: number; count: number }>;
    giftsAllTime: Array<{ label: string; value: number; count: number }>;
    giftDistribution: Array<{ name: string; value: number }>;
  };
}

async function _getDonorList(
  params: DonorFilters & { page: number; pageSize: number; sortBy?: DonorSortField; sortDir?: 'asc' | 'desc' }
): Promise<DonorListResult> {
  const { page, pageSize, query, minTotalGiven, lastGiftFrom, lastGiftTo, status, sortBy, sortDir } = params;
  const where: Prisma.DonorWhereInput = {};
  const giftRanges = [
    { name: '< $1k', min: 0, max: 1000 },
    { name: '$1k - $5k', min: 1000, max: 5000 },
    { name: '$5k - $10k', min: 5000, max: 10000 },
    { name: '$10k+', min: 10000, max: Infinity }
  ];
  const acquisitionBuckets = getMonthlyBuckets(12);

  if (query) {
    where.OR = [
      { name: { contains: query, mode: 'insensitive' } },
      { email: { contains: query, mode: 'insensitive' } }
    ];
  }

  if (minTotalGiven) {
    where.totalGiven = { gte: minTotalGiven };
  }

  if (status === 'prospect') {
    where.lastGiftDate = null;
  } else {
    if (lastGiftFrom || lastGiftTo || status === 'active') {
      const filter: Prisma.DateTimeNullableFilter = {};
      if (status === 'active') {
        filter.not = null;
      }
      if (lastGiftFrom) {
        filter.gte = lastGiftFrom;
      }
      if (lastGiftTo) {
        filter.lte = lastGiftTo;
      }
      where.lastGiftDate = filter;
    }
  }

  const sortFieldMap: Record<DonorSortField, keyof Prisma.DonorOrderByWithRelationInput> = {
    name: 'name',
    email: 'email',
    totalPledged: 'totalPledged',
    totalGiven: 'totalGiven',
    lastGiftDate: 'lastGiftDate'
  };

  const orderBy: Prisma.DonorOrderByWithRelationInput[] =
    sortBy && sortDir
      ? [{ [sortFieldMap[sortBy]]: sortDir }]
      : [{ totalGiven: 'desc' as const }];

  try {
    const now = new Date();
    const monthlyWindowStart = subMonths(startOfMonth(now), 11);
    const yearlyWindowStart = startOfYear(new Date(now.getFullYear() - 5, 0, 1));
    const allTimeStart = startOfYear(new Date(2006, 0, 1));

    const [
      totalMatching,
      donors,
      totalDonors,
      activeDonors,
      averageLifetimeValue,
      monthlyGiftsRaw,
      yearlyGiftsRaw,
      giftDistributionRaw,
      allTimeGifts
    ] = await Promise.all([
      prisma.donor.count({ where }),
      prisma.donor.findMany({
        where,
        orderBy,
        take: pageSize,
        skip: (page - 1) * pageSize,
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          totalGiven: true,
          totalPledged: true,
          lastGiftDate: true,
          emails: {
            select: { email: true }
          }
        }
      }),
      prisma.donor.count(),
      prisma.donor.count({ where: { lastGiftDate: { gte: subDays(now, 365) } } }),
      prisma.donor.aggregate({ _avg: { totalGiven: true } }),
      prisma.$queryRaw<Array<{ month: string; total: Prisma.Decimal; count: bigint }>>`
        SELECT TO_CHAR("date", 'YYYY-MM') AS month,
               SUM("amount") AS total,
               COUNT(*)::bigint AS count
        FROM "Pledge"
        WHERE "status" = ${PledgeStatus.RECEIVED}::"PledgeStatus"
          AND "date" >= ${monthlyWindowStart}
        GROUP BY month
        ORDER BY month ASC
      `,
      prisma.$queryRaw<Array<{ year: number; total: Prisma.Decimal; count: bigint }>>`
        SELECT EXTRACT(YEAR FROM "date")::int AS year,
               SUM("amount") AS total,
               COUNT(*)::bigint AS count
        FROM "Pledge"
        WHERE "status" = ${PledgeStatus.RECEIVED}::"PledgeStatus"
          AND "date" >= ${yearlyWindowStart}
        GROUP BY year
        ORDER BY year ASC
      `,
      prisma.$queryRaw<Array<{ range: string; count: bigint }>>`
        SELECT CASE
          WHEN "totalGiven" < 1000 THEN '< $1k'
          WHEN "totalGiven" < 5000 THEN '$1k - $5k'
          WHEN "totalGiven" < 10000 THEN '$5k - $10k'
          ELSE '$10k+'
        END AS range,
        COUNT(*)::bigint AS count
        FROM "Donor"
        GROUP BY range
      `,
      prisma.$queryRaw<Array<{ year: number; total: Prisma.Decimal; count: bigint }>>`
        SELECT EXTRACT(YEAR FROM "date")::int AS year,
               SUM("amount") AS total,
               COUNT(*)::bigint AS count
        FROM "Pledge"
        WHERE "status" = ${PledgeStatus.RECEIVED}::"PledgeStatus"
          AND "date" >= ${allTimeStart}
        GROUP BY year
        ORDER BY year ASC
      `
    ]);

    const formattedDonors = donors.map((donor) => ({
      ...donor,
      emails: donor.emails.map((entry) => entry.email),
      totalGiven: toNumber(donor.totalGiven),
      totalPledged: toNumber(donor.totalPledged)
    }));

    const monthlyGiftsMap = new Map(monthlyGiftsRaw.map((row) => [row.month, { total: toNumber(row.total), count: Number(row.count) }]));
    const giftsMonthly = acquisitionBuckets.map((bucket) => {
      const data = monthlyGiftsMap.get(bucket.key) ?? { total: 0, count: 0 };
      return {
        label: bucket.label,
        value: data.total,
        count: data.count
      };
    });

    const giftsYearly = yearlyGiftsRaw.map((row) => ({
      label: `${row.year}`,
      value: toNumber(row.total),
      count: Number(row.count)
    }));

    const giftsAllTime = allTimeGifts.map((row) => ({
      label: `${row.year}`,
      value: toNumber(row.total),
      count: Number(row.count)
    }));

    const giftDistributionMap = new Map(giftDistributionRaw.map((row) => [row.range, Number(row.count)]));
    const giftDistribution = giftRanges.map((range) => ({
      name: range.name,
      value: giftDistributionMap.get(range.name) ?? 0
    }));

    return {
      donors: formattedDonors,
      pagination: {
        page,
        pageSize,
        total: totalMatching,
        totalPages: Math.max(1, Math.ceil(totalMatching / pageSize))
      },
      summary: {
        totalDonors,
        activeDonors,
        averageLifetimeValue: toNumber(averageLifetimeValue._avg.totalGiven)
      },
      charts: {
        giftsMonthly,
        giftsYearly,
        giftsAllTime,
        giftDistribution
      }
    };
  } catch (error) {
    console.error('Failed to load donor list data. Serving fallback dataset.', error);
    return buildFallbackDonorList({
      page,
      pageSize,
      acquisitionBuckets,
      giftRanges
    });
  }
}

function buildFallbackDonorList({
  page,
  pageSize,
  acquisitionBuckets,
  giftRanges
}: {
  page: number;
  pageSize: number;
  acquisitionBuckets: MonthlyBucket[];
  giftRanges: Array<{ name: string }>;
}): DonorListResult {
  return {
    donors: [],
    pagination: {
      page,
      pageSize,
      total: 0,
      totalPages: 1
    },
    summary: {
      totalDonors: 0,
      activeDonors: 0,
      averageLifetimeValue: 0
    },
    charts: {
      giftsMonthly: acquisitionBuckets.map((bucket) => ({ label: bucket.label, value: 0, count: 0 })),
      giftsYearly: [],
      giftsAllTime: [],
      giftDistribution: giftRanges.map((range) => ({ name: range.name, value: 0 }))
    }
  };
}

export async function getDonorList(
  params: DonorFilters & { page: number; pageSize: number; sortBy?: DonorSortField; sortDir?: 'asc' | 'desc' }
): Promise<DonorListResult> {
  // Cache for 30 seconds to improve performance
  const cacheKey = `donor-list-${JSON.stringify(params)}`;
  return unstable_cache(
    () => _getDonorList(params),
    [cacheKey],
    { revalidate: 30, tags: ['donors'] }
  )();
}

