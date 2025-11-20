import { PrismaClient, UserRole, PledgeStatus, EventStatus, CampaignStatus } from '@prisma/client';
import { addDays, subDays, startOfYear } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
  console.info('🌱 Seeding BHIC database...');

  const adminEmail = 'director@bhic.org';
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      name: 'BHIC Admin',
      role: UserRole.ADMIN
    },
    create: {
      email: adminEmail,
      name: 'BHIC Admin',
      role: UserRole.ADMIN
    }
  });

  const donorAlice = await prisma.donor.upsert({
    where: { email: 'alice.mariner@bhic.org' },
    update: {},
    create: {
      externalId: 'ETP-1001',
      name: 'Alice Mariner',
      email: 'alice.mariner@bhic.org',
      phone: '910-555-1001',
      totalPledged: 25000,
      totalGiven: 18000,
      lastGiftDate: subDays(new Date(), 25)
    }
  });

  const donorBen = await prisma.donor.upsert({
    where: { email: 'ben.tidewater@bhic.org' },
    update: {},
    create: {
      externalId: 'ETP-1002',
      name: 'Ben Tidewater',
      email: 'ben.tidewater@bhic.org',
      phone: '910-555-1002',
      totalPledged: 12000,
      totalGiven: 9200,
      lastGiftDate: subDays(new Date(), 90)
    }
  });

  const donorCarla = await prisma.donor.upsert({
    where: { email: 'carla.dunes@bhic.org' },
    update: {},
    create: {
      externalId: 'ETP-1003',
      name: 'Carla Dunes',
      email: 'carla.dunes@bhic.org',
      phone: '910-555-1003',
      totalPledged: 8000,
      totalGiven: 6100,
      lastGiftDate: subDays(new Date(), 200)
    }
  });

  const donors = [donorAlice, donorBen, donorCarla];

  await prisma.pledge.createMany({
    data: [
      {
        donorId: donorAlice.id,
        amount: 5000,
        campaign: 'Sea Turtle Protection',
        status: PledgeStatus.RECEIVED,
        date: subDays(new Date(), 60)
      },
      {
        donorId: donorAlice.id,
        amount: 13000,
        campaign: 'Coastal Resilience',
        status: PledgeStatus.PLEDGED,
        date: subDays(new Date(), 10)
      },
      {
        donorId: donorBen.id,
        amount: 4000,
        campaign: 'Sea Turtle Protection',
        status: PledgeStatus.RECEIVED,
        date: subDays(new Date(), 30)
      },
      {
        donorId: donorBen.id,
        amount: 5200,
        campaign: 'Junior Naturalists',
        status: PledgeStatus.PLEDGED,
        date: subDays(new Date(), 5)
      },
      {
        donorId: donorCarla.id,
        amount: 3000,
        campaign: 'Maritime Forest',
        status: PledgeStatus.RECEIVED,
        date: subDays(new Date(), 180)
      }
    ]
  });

  const coastalFestival = await prisma.event.upsert({
    where: { externalId: 'EB-COAST-2024' },
    update: {},
    create: {
      externalId: 'EB-COAST-2024',
      name: 'Coastal Festival 2024',
      startDate: addDays(startOfYear(new Date()), 120),
      endDate: addDays(startOfYear(new Date()), 121),
      venue: 'BHIC Campus',
      status: EventStatus.PUBLISHED,
      ticketsTotal: 400,
      ticketsSold: 320,
      grossRevenue: 25000,
      netRevenue: 18500
    }
  });

  const turtleGala = await prisma.event.upsert({
    where: { externalId: 'EB-TURTLE-2024' },
    update: {},
    create: {
      externalId: 'EB-TURTLE-2024',
      name: 'Sea Turtle Gala',
      startDate: addDays(startOfYear(new Date()), 200),
      endDate: addDays(startOfYear(new Date()), 201),
      venue: 'Marsh Harbor Inn',
      status: EventStatus.PUBLISHED,
      ticketsTotal: 250,
      ticketsSold: 210,
      grossRevenue: 42000,
      netRevenue: 33000
    }
  });

  await prisma.eventAttendance.createMany({
    data: donors.flatMap((donor, idx) => [
      {
        eventId: coastalFestival.id,
        donorId: donor.id,
        attendeeEmail: donor.email!,
        ticketType: idx === 0 ? 'VIP' : 'General',
        ticketsCount: idx === 0 ? 2 : 1,
        orderTotal: idx === 0 ? 600 : 300
      },
      {
        eventId: turtleGala.id,
        donorId: donor.id,
        attendeeEmail: donor.email!,
        ticketType: 'General',
        ticketsCount: 1,
        orderTotal: 250
      }
    ])
  });

  const defaultTemplate = await prisma.emailTemplate.upsert({
    where: { name: 'Default Thank You' },
    update: {
      subject: 'Thank you for supporting BHIC',
      html: '<p>Dear supporter,<br/>Thank you for investing in the Bald Head Island Conservancy.</p>',
      text: 'Dear supporter, thank you for investing in BHIC.'
    },
    create: {
      name: 'Default Thank You',
      subject: 'Thank you for supporting BHIC',
      html: '<p>Dear supporter,<br/>Thank you for investing in the Bald Head Island Conservancy.</p>',
      text: 'Dear supporter, thank you for investing in BHIC.',
      isDefaultThankYou: true
    }
  });

  const engagedAudience = await prisma.audienceSegment.create({
    data: {
      name: 'Engaged Donors (90 days)',
      filters: {
        donatedWithinDays: 90,
        totalGivenGreaterThan: 5000
      }
    }
  });

  await prisma.emailCampaign.create({
    data: {
      name: 'Spring Conservation Appeal',
      templateId: defaultTemplate.id,
      audienceSegmentId: engagedAudience.id,
      status: CampaignStatus.DRAFT,
      scheduledFor: addDays(new Date(), 7)
    }
  });

  console.info('✅ Seed completed');
}

main()
  .catch((error) => {
    console.error('❌ Seeding failed', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


