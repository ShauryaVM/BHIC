import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const totalDonors = await prisma.donor.count();
  const manualDonors = await prisma.donor.count({
    where: { externalId: { startsWith: 'manual-etp:' } }
  });
  const legacyDonors = await prisma.donor.count({
    where: { externalId: { startsWith: 'legacy-etp:' } }
  });
  const nullExternalId = await prisma.donor.count({
    where: { externalId: null }
  });

  console.info('Donor counts:');
  console.info(`  Total: ${totalDonors}`);
  console.info(`  manual-etp:*: ${manualDonors}`);
  console.info(`  legacy-etp:*: ${legacyDonors}`);
  console.info(`  externalId null: ${nullExternalId}`);

  const totalPledges = await prisma.pledge.count();
  const manualPledges = await prisma.pledge.count({
    where: { externalId: { startsWith: 'manual-etp:' } }
  });
  const legacyPledges = await prisma.pledge.count({
    where: { externalId: { startsWith: 'legacy-etp:' } }
  });

  console.info('\nPledge counts:');
  console.info(`  Total: ${totalPledges}`);
  console.info(`  manual-etp:*: ${manualPledges}`);
  console.info(`  legacy-etp:*: ${legacyPledges}`);
}

main()
  .catch((error) => {
    console.error('Audit failed', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


