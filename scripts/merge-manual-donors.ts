import { PrismaClient } from '@prisma/client';

import { recalculateDonorLifetimeValues } from '@/lib/etapestry';

const prisma = new PrismaClient();

function normalizeName(value?: string | null) {
  return (value ?? '').trim().toLowerCase();
}

function normalizePhone(value?: string | null) {
  if (!value) return null;
  const digits = value.replace(/\D+/g, '');
  return digits || null;
}

async function main() {
  const manualDonors = await prisma.donor.findMany({
    where: { externalId: { startsWith: 'manual-etp:' } },
    select: { id: true, name: true, phone: true, email: true }
  });

  if (!manualDonors.length) {
    console.info('No manual donors to merge.');
    return;
  }

  const canonicalEmailMap = new Map<string, string>();
  const canonicalEmails = await prisma.donor.findMany({
    where: {
      externalId: { not: { startsWith: 'manual-etp:' } },
      email: { not: null }
    },
    select: { id: true, email: true }
  });
  for (const donor of canonicalEmails) {
    if (!donor.email) continue;
    canonicalEmailMap.set(donor.email.trim().toLowerCase(), donor.id);
  }

  const phoneSet = new Set<string>();
  for (const donor of manualDonors) {
    const digits = normalizePhone(donor.phone);
    if (digits) {
      phoneSet.add(digits);
    }
  }

  const canonicalNamePhoneMap = new Map<string, string>();
  if (phoneSet.size) {
    const canonicalPhoneDonors = await prisma.donor.findMany({
      where: {
        externalId: { not: { startsWith: 'manual-etp:' } },
        phone: { in: Array.from(phoneSet) }
      },
      select: { id: true, name: true, phone: true }
    });
    for (const donor of canonicalPhoneDonors) {
      const digits = normalizePhone(donor.phone);
      if (!digits) continue;
      const nameKey = normalizeName(donor.name);
      canonicalNamePhoneMap.set(`${nameKey}|${digits}`, donor.id);
    }
  }

  const manualNamesWithoutPhone = manualDonors
    .filter((donor) => !normalizePhone(donor.phone))
    .map((donor) => donor.name)
    .filter(Boolean);
  const canonicalNameMap = new Map<string, string | null>();
  if (manualNamesWithoutPhone.length) {
    const canonicalNameDonors = await prisma.donor.findMany({
      where: {
        externalId: { not: { startsWith: 'manual-etp:' } },
        name: { in: manualNamesWithoutPhone }
      },
      select: { id: true, name: true }
    });
    for (const donor of canonicalNameDonors) {
      const key = normalizeName(donor.name);
      if (!canonicalNameMap.has(key)) {
        canonicalNameMap.set(key, donor.id);
      } else {
        canonicalNameMap.set(key, null);
      }
    }
  }

  let merged = 0;
  for (const manual of manualDonors) {
    const emailKey = manual.email?.trim().toLowerCase();
    let targetId = emailKey ? canonicalEmailMap.get(emailKey) : undefined;
    if (!targetId) {
      const phoneDigits = normalizePhone(manual.phone);
      if (phoneDigits) {
        const nameKey = normalizeName(manual.name);
        targetId = canonicalNamePhoneMap.get(`${nameKey}|${phoneDigits}`);
      }
    }
    if (!targetId && !normalizePhone(manual.phone)) {
      const uniqueMatch = canonicalNameMap.get(normalizeName(manual.name));
      if (uniqueMatch) {
        targetId = uniqueMatch;
      }
    }
    if (!targetId) {
      continue;
    }

    await prisma.$transaction([
      prisma.pledge.updateMany({
        where: { donorId: manual.id },
        data: { donorId: targetId }
      }),
      prisma.donor.delete({ where: { id: manual.id } })
    ]);
    merged += 1;
  }

  const manualEmailDonors = await prisma.donor.findMany({
    where: { externalId: { startsWith: 'manual-etp:email:' } },
    select: { id: true, name: true }
  });
  const manualEmailMap = new Map<string, string | null>();
  for (const donor of manualEmailDonors) {
    const key = normalizeName(donor.name);
    if (!manualEmailMap.has(key)) {
      manualEmailMap.set(key, donor.id);
    } else {
      manualEmailMap.set(key, null);
    }
  }

  const manualAcctDonors = await prisma.donor.findMany({
    where: { externalId: { startsWith: 'manual-etp:acct:' } },
    select: { id: true, name: true }
  });

  for (const manual of manualAcctDonors) {
    const key = normalizeName(manual.name);
    const targetId = manualEmailMap.get(key);
    if (!targetId) continue;
    await prisma.$transaction([
      prisma.pledge.updateMany({
        where: { donorId: manual.id },
        data: { donorId: targetId }
      }),
      prisma.donor.delete({ where: { id: manual.id } })
    ]);
    merged += 1;
  }

  console.info(`Merged ${merged} manual donors into existing records.`);
  await recalculateDonorLifetimeValues();
}

main()
  .catch((error) => {
    console.error('Failed to merge manual donors', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


