import { syncPledgesToDb } from '@/lib/etapestry';
import { syncEventsToDb } from '@/lib/eventbrite';

async function main() {
  console.info('Starting full data sync (eTapestry + Eventbrite)...');
  const pledges = await syncPledgesToDb();
  console.info(`Finished eTapestry sync (${pledges.synced} pledges).`);

  const events = await syncEventsToDb();
  console.info(`Finished Eventbrite sync (${events.synced} events).`);
}

main().catch((error) => {
  console.error('Failed to complete integrations sync', error);
  process.exit(1);
});

