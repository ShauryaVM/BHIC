import { Prisma } from '@prisma/client';
import { startOfMonth, subDays, subMonths } from 'date-fns';

import { prisma } from '@/lib/prisma';
import { getMonthlyBuckets, type MonthlyBucket } from '@/lib/time-series';

const toNumber = (value?: Prisma.Decimal | null) => Number(value ?? 0);

export interface DonorFilters {
  query?: string;
  minTotalGiven?: number;
  lastGiftFrom?: Date;
  lastGiftTo?: Date;
}

export interface DonorListResult {
  donors: Array<{
    id: string;
    name: string;
    email?: string | null;
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
    acquisitions: Array<{ label: string; value: number }>;
    giftDistribution: Array<{ name: string; value: number }>;
  };
}

export async function getDonorList(params: DonorFilters & { page: number; pageSize: number }): Promise<DonorListResult> {
  const { page, pageSize, query, minTotalGiven, lastGiftFrom, lastGiftTo } = params;
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

  if (lastGiftFrom || lastGiftTo) {
    where.lastGiftDate = {};
    if (lastGiftFrom) {
      where.lastGiftDate.gte = lastGiftFrom;
    }
    if (lastGiftTo) {
      where.lastGiftDate.lte = lastGiftTo;
    }
  }

  try {
    const [totalMatching, donors, totalDonors, activeDonors, averageLifetimeValue, acquisitionSource, lifetimeValues] = await Promise.all([
      prisma.donor.count({ where }),
      prisma.donor.findMany({
        where,
        orderBy: { totalGiven: 'desc' },
        take: pageSize,
        skip: (page - 1) * pageSize,
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          totalGiven: true,
          totalPledged: true,
          lastGiftDate: true
        }
      }),
      prisma.donor.count(),
      prisma.donor.count({ where: { lastGiftDate: { gte: subDays(new Date(), 365) } } }),
      prisma.donor.aggregate({ _avg: { totalGiven: true } }),
      prisma.donor.findMany({
        where: { createdAt: { gte: subMonths(startOfMonth(new Date()), 11) } },
        select: { createdAt: true }
      }),
      prisma.donor.findMany({ select: { totalGiven: true } })
    ]);

    const formattedDonors = donors.map((donor) => ({
      ...donor,
      totalGiven: toNumber(donor.totalGiven),
      totalPledged: toNumber(donor.totalPledged)
    }));

    const acquisitions = acquisitionBuckets.map((bucket) => ({
      label: bucket.label,
      value: acquisitionSource.filter((entry) => entry.createdAt >= bucket.start && entry.createdAt <= bucket.end).length
    }));

    const giftDistribution = giftRanges.map((range) => ({
      name: range.name,
      value: lifetimeValues.filter((value) => {
        const amount = toNumber(value.totalGiven);
        return amount >= range.min && amount < range.max;
      }).length
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
        acquisitions,
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
      acquisitions: acquisitionBuckets.map((bucket) => ({ label: bucket.label, value: 0 })),
      giftDistribution: giftRanges.map((range) => ({ name: range.name, value: 0 }))
    }
  };
}

