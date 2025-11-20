import { randomUUID } from 'crypto';

import { CampaignStatus, EmailLogStatus, Prisma } from '@prisma/client';
import { subDays } from 'date-fns';
import { Resend } from 'resend';

import { env } from '@/lib/env';
import { prisma } from '@/lib/prisma';

const resend = new Resend(env.EMAIL_PROVIDER_API_KEY);

export interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface AudienceFilters {
  donatedWithinDays?: number;
  totalGivenGreaterThan?: number;
  attendedEventIds?: string[];
  pledgeCampaigns?: string[];
}

function renderContent(content: string, donorName?: string | null) {
  if (!content) return content;
  return content.replace(/{{\s*name\s*}}/gi, donorName ?? 'BHIC supporter');
}

export async function sendEmail({ to, subject, html, text }: SendEmailInput) {
  const response = await resend.emails.send({
    from: env.RESEND_FROM_EMAIL,
    to,
    subject,
    html,
    text
  });

  if (response.error) {
    throw new Error(response.error.message);
  }

  return { id: response.data?.id ?? randomUUID() };
}

export async function resolveAudienceSegment(filters: AudienceFilters) {
  const where: Prisma.DonorWhereInput = {
    email: { not: null }
  };

  if (filters.totalGivenGreaterThan) {
    where.totalGiven = { gte: filters.totalGivenGreaterThan };
  }

  if (filters.donatedWithinDays) {
    where.lastGiftDate = { gte: subDays(new Date(), filters.donatedWithinDays) };
  }

  if (filters.attendedEventIds?.length) {
    where.attendance = {
      some: {
        eventId: { in: filters.attendedEventIds }
      }
    };
  }

  if (filters.pledgeCampaigns?.length) {
    where.pledges = {
      some: { campaign: { in: filters.pledgeCampaigns } }
    };
  }

  const donors = await prisma.donor.findMany({
    where,
    select: { id: true, name: true, email: true }
  });

  return donors.filter((donor) => donor.email);
}

export async function sendCampaign(campaignId: string) {
  const campaign = await prisma.emailCampaign.findUnique({
    where: { id: campaignId },
    include: {
      template: true,
      audienceSegment: true
    }
  });

  if (!campaign) {
    throw new Error('Campaign not found');
  }

  const filters = (campaign.audienceSegment.filters ?? {}) as AudienceFilters;
  const recipients = await resolveAudienceSegment(filters);

  if (recipients.length === 0) {
    throw new Error('Audience segment did not resolve to any recipients');
  }

  await prisma.emailCampaign.update({
    where: { id: campaign.id },
    data: { status: CampaignStatus.SCHEDULED }
  });

  let failed = 0;

  for (const recipient of recipients) {
    const log = await prisma.emailLog.create({
      data: {
        campaignId: campaign.id,
        recipientEmail: recipient.email!,
        status: EmailLogStatus.QUEUED
      }
    });

    try {
      const { id } = await sendEmail({
        to: recipient.email!,
        subject: renderContent(campaign.template.subject, recipient.name),
        html: renderContent(campaign.template.html, recipient.name),
        text: renderContent(campaign.template.text, recipient.name)
      });

      await prisma.emailLog.update({
        where: { id: log.id },
        data: {
          status: EmailLogStatus.SENT,
          providerMessageId: id,
          sentAt: new Date()
        }
      });
    } catch (error) {
      failed += 1;
      await prisma.emailLog.update({
        where: { id: log.id },
        data: {
          status: EmailLogStatus.FAILED,
          errorMessage: error instanceof Error ? error.message : 'Unknown send error'
        }
      });
    }
  }

  await prisma.emailCampaign.update({
    where: { id: campaign.id },
    data: {
      status: failed ? CampaignStatus.FAILED : CampaignStatus.SENT,
      sentAt: new Date()
    }
  });

  return { recipients: recipients.length, failed };
}

export async function sendThankYouEmailToDonor(donorId: string, overrides?: { subject?: string; templateId?: string }) {
  const donor = await prisma.donor.findUnique({ where: { id: donorId } });
  if (!donor?.email) {
    throw new Error('Donor does not have an email address on file.');
  }

  const template =
    overrides?.templateId
      ? await prisma.emailTemplate.findUnique({ where: { id: overrides.templateId } })
      : await prisma.emailTemplate.findFirst({ where: { isDefaultThankYou: true } });

  if (!template) {
    throw new Error('No thank-you email template has been configured.');
  }

  await sendEmail({
    to: donor.email,
    subject: overrides?.subject ?? renderContent(template.subject, donor.name),
    html: renderContent(template.html, donor.name),
    text: renderContent(template.text, donor.name)
  });
}

