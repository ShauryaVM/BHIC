import { CampaignStatus } from '@prisma/client';

import { prisma } from '@/lib/prisma';

export async function getEmailCampaigns() {
  const campaigns = await prisma.emailCampaign.findMany({
    include: {
      template: true,
      audienceSegment: true,
      _count: { select: { logs: true } }
    },
    orderBy: { createdAt: 'desc' }
  });

  return campaigns;
}

export async function getEmailFormData() {
  const [templates, events, pledgeCampaigns, sampleDonor] = await Promise.all([
    prisma.emailTemplate.findMany({ orderBy: { name: 'asc' } }),
    prisma.event.findMany({
      orderBy: { startDate: 'desc' },
      select: {
        id: true,
        name: true,
        startDate: true
      }
    }),
    prisma.pledge.findMany({
      where: { campaign: { not: null } },
      distinct: ['campaign'],
      select: { campaign: true }
    }),
    prisma.donor.findFirst({
      orderBy: { totalGiven: 'desc' },
      select: { name: true, email: true }
    })
  ]);

  return {
    templates,
    events: events.map((event) => ({
      ...event,
      startDate: event.startDate.toISOString()
    })),
    pledgeCampaigns: pledgeCampaigns.map((pledge) => pledge.campaign!).filter(Boolean),
    sampleDonor
  };
}

export async function getAudienceSegments() {
  return prisma.audienceSegment.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export function campaignStatusLabel(status: CampaignStatus) {
  switch (status) {
    case CampaignStatus.DRAFT:
      return 'Draft';
    case CampaignStatus.SCHEDULED:
      return 'Scheduled';
    case CampaignStatus.SENT:
      return 'Sent';
    case CampaignStatus.FAILED:
      return 'Failed';
    default:
      return status;
  }
}

