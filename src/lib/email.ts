import { GoogleGenerativeAI } from '@google/generative-ai';
import type { Prisma } from '@prisma/client';
import { subDays } from 'date-fns';

import { env } from '@/lib/env';
import { prisma } from '@/lib/prisma';

export interface AudienceFilters extends Record<string, unknown> {
  donatedWithinDays?: number;
  totalGivenGreaterThan?: number;
  attendedEventIds?: string[];
  pledgeCampaigns?: string[];
}

export interface EmailDraftSuggestion {
  subject: string;
  html: string;
  text: string;
  talkingPoints: string[];
  sampleRecipients: string[];
}

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
const geminiModel = genAI.getGenerativeModel({ model: env.GEMINI_MODEL });

function renderContent(content: string, donorName?: string | null) {
  if (!content) return content;
  return content.replace(/{{\s*name\s*}}/gi, donorName ?? 'BHIC supporter');
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function buildPrompt(options: {
  campaignName: string;
  templateSubject: string;
  templateHtml: string;
  templateText: string;
  donorSummary: string;
  goals?: string;
}) {
  return `
You are an assistant helping the Bald Head Island Conservancy craft donor outreach emails.
Write with a warm, professional tone that reflects a conservation nonprofit.

Return ONLY valid JSON with the following shape:
{
  "subject": string,
  "html": string,
  "text": string,
  "talkingPoints": string[]
}

Guidance:
- Keep the subject under 80 characters.
- Provide a short HTML body (2-4 paragraphs max) with basic formatting (p, strong, ul/li).
- Provide a text-only alternative that mirrors the HTML content.
- talkingPoints should be a short array summarizing the main ideas.

Context:
- Campaign: ${options.campaignName}
- Existing subject: ${options.templateSubject}
- Existing HTML (converted to text): ${stripHtml(options.templateHtml).slice(0, 1200)}
- Existing text: ${options.templateText.slice(0, 1200)}
- Donor insights: ${options.donorSummary}
- Goals or notes: ${options.goals ?? 'Highlight impact, gratitude, and a clear call to action.'}
`;
}

function extractJsonPayload(output?: string) {
  if (!output) {
    throw new Error('Gemini did not return any text.');
  }

  const fenced = output.match(/```json([\s\S]*?)```/i);
  const raw = fenced ? fenced[1].trim() : output.trim();
  const firstBrace = raw.indexOf('{');
  const lastBrace = raw.lastIndexOf('}');
  const candidate = firstBrace !== -1 && lastBrace !== -1 ? raw.slice(firstBrace, lastBrace + 1) : raw;
  return JSON.parse(candidate);
}

function fallbackSuggestion(template: { subject: string; html: string; text: string }, donorName?: string | null): EmailDraftSuggestion {
  const renderedHtml = renderContent(template.html, donorName);
  return {
    subject: renderContent(template.subject, donorName),
    html: renderedHtml,
    text: renderContent(template.text, donorName),
    talkingPoints: ['Automated fallback using saved template'],
    sampleRecipients: donorName ? [donorName] : []
  };
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
    select: { id: true, name: true, email: true, totalGiven: true, lastGiftDate: true }
  });

  return donors.filter((donor) => donor.email);
}

export async function generateCampaignSuggestion(campaignId: string): Promise<EmailDraftSuggestion> {
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
  const sampleRecipients = recipients.slice(0, 5).map((donor) => ({
    name: donor.name ?? donor.email,
    email: donor.email!,
    totalGiven: Number(donor.totalGiven ?? 0).toFixed(0),
    lastGiftDate: donor.lastGiftDate?.toISOString() ?? 'Unknown'
  }));

  const donorSummary =
    sampleRecipients.length > 0
      ? sampleRecipients
          .map(
            (donor) =>
              `${donor.name} (${donor.email}) – lifetime $${donor.totalGiven} · last gift ${donor.lastGiftDate.slice(0, 10)}`
          )
          .join('; ')
      : 'No matching donors found yet. Suggest a general-purpose draft.';

  try {
    const prompt = buildPrompt({
      campaignName: campaign.name,
      templateSubject: campaign.template.subject,
      templateHtml: campaign.template.html,
      templateText: campaign.template.text,
      donorSummary
    });

    const response = await geminiModel.generateContent(prompt);
    const suggestion = extractJsonPayload(response.response?.text());

    return {
      subject: suggestion.subject ?? campaign.template.subject,
      html: suggestion.html ?? campaign.template.html,
      text: suggestion.text ?? campaign.template.text,
      talkingPoints: suggestion.talkingPoints ?? [],
      sampleRecipients: sampleRecipients.map((recipient) => recipient.email)
    };
  } catch (error) {
    console.error('Gemini draft generation failed', error);
    const donorName = sampleRecipients[0]?.name;
    return fallbackSuggestion(campaign.template, donorName);
  }
}

export async function generateThankYouSuggestion(donorId: string): Promise<EmailDraftSuggestion> {
  const donor = await prisma.donor.findUnique({
    where: { id: donorId },
    select: { name: true, email: true, totalGiven: true, lastGiftDate: true }
  });

  if (!donor) {
    throw new Error('Donor not found');
  }

  const template = await prisma.emailTemplate.findFirst({ where: { isDefaultThankYou: true } });
  if (!template) {
    throw new Error('Default thank-you template is missing.');
  }

  const prompt = buildPrompt({
    campaignName: 'Personal thank-you message',
    templateSubject: template.subject,
    templateHtml: template.html,
    templateText: template.text,
    donorSummary: `Recipient ${donor.name ?? donor.email} donated a lifetime total of $${Number(donor.totalGiven ?? 0).toFixed(
      0
    )}. Last gift date: ${donor.lastGiftDate ?? 'unknown'}.`
  });

  try {
    const response = await geminiModel.generateContent(prompt);
    const suggestion = extractJsonPayload(response.response?.text());
    return {
      subject: suggestion.subject ?? renderContent(template.subject, donor.name),
      html: suggestion.html ?? renderContent(template.html, donor.name),
      text: suggestion.text ?? renderContent(template.text, donor.name),
      talkingPoints: suggestion.talkingPoints ?? []
    };
  } catch (error) {
    console.error('Gemini thank-you draft failed', error);
    return fallbackSuggestion(template, donor.name);
  }
}

