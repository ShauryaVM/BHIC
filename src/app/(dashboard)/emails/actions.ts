"use server";

import { CampaignStatus, type Prisma } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

import { authOptions } from '@/lib/auth';
import { AudienceFilters, generateCampaignSuggestion } from '@/lib/email';
import { prisma } from '@/lib/prisma';

const createCampaignSchema = z.object({
  name: z.string().min(3),
  audience: z.object({
    donatedWithinDays: z.number().optional(),
    totalGivenGreaterThan: z.number().optional(),
    attendedEventIds: z.array(z.string()).optional(),
    pledgeCampaigns: z.array(z.string()).optional()
  }),
  template: z.discriminatedUnion('mode', [
    z.object({
      mode: z.literal('existing'),
      templateId: z.string().min(1)
    }),
    z.object({
      mode: z.literal('new'),
      name: z.string().min(3),
      subject: z.string().min(3),
      html: z.string().min(10),
      text: z.string().min(10)
    })
  ])
});

export type CreateCampaignInput = z.infer<typeof createCampaignSchema>;

const deleteCampaignSchema = z.object({
  campaignId: z.string().min(1)
});

async function requireSession() {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('Authentication required');
  }
  return session;
}

export async function createCampaignAction(data: CreateCampaignInput) {
  await requireSession();
  const parsed = createCampaignSchema.parse(data);

  const filters: AudienceFilters = {
    donatedWithinDays: parsed.audience.donatedWithinDays,
    totalGivenGreaterThan: parsed.audience.totalGivenGreaterThan,
    attendedEventIds: parsed.audience.attendedEventIds?.filter(Boolean),
    pledgeCampaigns: parsed.audience.pledgeCampaigns?.filter(Boolean)
  };

  const segment = await prisma.audienceSegment.create({
    data: {
      name: `${parsed.name} audience ${Date.now()}`,
      filters: filters as Prisma.JsonObject
    }
  });

  let templateId: string;
  if (parsed.template.mode === 'existing') {
    templateId = parsed.template.templateId;
  } else {
    const template = await prisma.emailTemplate.create({
      data: {
        name: parsed.template.name,
        subject: parsed.template.subject,
        html: parsed.template.html,
        text: parsed.template.text
      }
    });
    templateId = template.id;
  }

  const campaign = await prisma.emailCampaign.create({
    data: {
      name: parsed.name,
      templateId,
      audienceSegmentId: segment.id,
      status: CampaignStatus.DRAFT,
      scheduledFor: null
    }
  });

  return { success: true, campaignId: campaign.id };
}

export async function generateCampaignDraftAction(campaignId: string) {
  await requireSession();
  const suggestion = await generateCampaignSuggestion(campaignId);
  return { success: true, suggestion };
}

export async function deleteCampaignAction(input: { campaignId: string }) {
  await requireSession();
  const { campaignId } = deleteCampaignSchema.parse(input);

  const campaign = await prisma.emailCampaign.findUnique({
    where: { id: campaignId },
    select: {
      audienceSegmentId: true
    }
  });

  if (!campaign) {
    throw new Error('Campaign not found');
  }

  await prisma.emailLog.deleteMany({ where: { campaignId } });
  await prisma.emailCampaign.delete({ where: { id: campaignId } });

  if (campaign.audienceSegmentId) {
    const remaining = await prisma.emailCampaign.count({
      where: { audienceSegmentId: campaign.audienceSegmentId }
    });
    if (remaining === 0) {
      await prisma.audienceSegment.delete({ where: { id: campaign.audienceSegmentId } }).catch(() => undefined);
    }
  }

  revalidatePath('/emails');
  return { success: true };
}

