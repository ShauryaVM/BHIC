import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL ?? 'ga@bhic.org';

  const user = await prisma.user.upsert({
    where: { email },
    update: { role: UserRole.ADMIN },
    create: {
      email,
      name: 'BHIC Analytics Admin',
      role: UserRole.ADMIN
    }
  });

  console.info(`✅ ${user.email} now has role ${user.role}`);
}

main()
  .catch((error) => {
    console.error('Failed to grant admin role', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

