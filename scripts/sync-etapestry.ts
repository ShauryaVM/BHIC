import { syncPledgesToDb } from '@/lib/etapestry';

async function main() {
  console.info('Syncing pledges from eTapestry via SOAP query...');
  const result = await syncPledgesToDb();
  console.info(`Synced ${result.synced} pledges into Prisma.`);
}

main().catch((error) => {
  console.error('Failed to sync eTapestry pledges', error);
  process.exit(1);
});

