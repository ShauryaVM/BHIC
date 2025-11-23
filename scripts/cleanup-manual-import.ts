import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.info('🧹 Removing manual-import pledges and donors...');

  const deletedPledges = await prisma.$executeRaw`
    DELETE FROM "Pledge"
    WHERE "externalId" LIKE 'legacy-etp:%' OR "externalId" LIKE 'manual-etp:%'
  `;

  const deletedDonors = await prisma.$executeRaw`
    DELETE FROM "Donor"
    WHERE "externalId" LIKE 'manual-etp:%'
  `;

  console.info(`✅ Deleted ${deletedPledges} manual pledges and ${deletedDonors} manual donors.`);
}

main()
  .catch((error) => {
    console.error('Cleanup failed', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


