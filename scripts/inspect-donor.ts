import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const name = process.argv[2];
  if (!name) {
    console.error('Usage: npx tsx scripts/inspect-donor.ts "Donor Name"');
    process.exit(1);
  }
  const donors = await prisma.donor.findMany({
    where: { name: { equals: name } },
    select: { id: true, externalId: true, email: true, phone: true, totalPledged: true, totalGiven: true }
  });
  console.log(donors);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


