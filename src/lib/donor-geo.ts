import { Prisma } from '@prisma/client';
import zipcodes from 'zipcodes';

import { prisma } from '@/lib/prisma';

const decimalToNumber = (value?: Prisma.Decimal | null) => Number(value ?? 0);

const normalizePostal = (postal?: string | null) => {
  if (!postal) return null;
  const match = postal.match(/\d{5}/);
  return match ? match[0] : null;
};

export type DonorGeoPoint = {
  id: string;
  city: string | null;
  state: string | null;
  postalCode: string | null;
  donorCount: number;
  totalGiven: number;
  totalPledged: number;
  latitude: number;
  longitude: number;
};

export async function getDonorGeography(): Promise<DonorGeoPoint[]> {
  const donors = await prisma.donor.findMany({
    where: {
      postalCode: { not: null },
      state: { not: null }
    },
    select: {
      postalCode: true,
      city: true,
      state: true,
      totalGiven: true,
      totalPledged: true
    }
  });

  const points = new Map<string, DonorGeoPoint>();

  for (const donor of donors) {
    const stateCode = donor.state?.trim().toUpperCase();
    if (stateCode !== 'NC') continue;

    const postal = normalizePostal(donor.postalCode);
    if (!postal) continue;

    const lookup = zipcodes.lookup(postal);
    if (!lookup) continue;

    const key = postal;
    const totalGiven = decimalToNumber(donor.totalGiven);
    const totalPledged = decimalToNumber(donor.totalPledged);

    const entry = points.get(key);
    if (entry) {
      entry.donorCount += 1;
      entry.totalGiven += totalGiven;
      entry.totalPledged += totalPledged;
      continue;
    }

    points.set(key, {
      id: key,
      city: donor.city ?? lookup.city ?? null,
      state: stateCode,
      postalCode: postal,
      donorCount: 1,
      totalGiven,
      totalPledged,
      latitude: lookup.latitude,
      longitude: lookup.longitude
    });
  }

  return Array.from(points.values()).sort((a, b) => b.totalGiven - a.totalGiven);
}


