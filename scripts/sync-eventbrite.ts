import { syncEventsToDb } from '@/lib/eventbrite';

async function main() {
  console.info('Syncing Eventbrite events and attendance into Prisma...');
  const result = await syncEventsToDb();
  console.info(`Synced ${result.synced} events.`);
}

main().catch((error) => {
  console.error('Failed to sync Eventbrite events', error);
  process.exit(1);
});

