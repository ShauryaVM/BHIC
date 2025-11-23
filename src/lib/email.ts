import { GoogleGenerativeAI } from '@google/generative-ai';
import { PledgeStatus, type Prisma } from '@prisma/client';
import { subDays, subMonths } from 'date-fns';

import { env } from '@/lib/env';
import { prisma } from '@/lib/prisma';
import { formatCurrency, formatDate, formatNumber, formatPercent } from '@/lib/format';

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
  sampleRecipients?: string[];
  ctaLabel?: string;
  ctaUrl?: string;
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
  audienceInsights?: string;
  featuredEvent?: string;
  callToAction?: string;
  notes?: string;
}) {
  return `
You are an assistant helping the Bald Head Island Conservancy craft donor outreach emails.
Write with a warm, professional tone that reflects a conservation nonprofit.
Always speak directly to the donor and reference the provided metrics so the message feels bespoke.
The email must include:
- an opening paragraph that thanks the donor and references at least one data point
- a middle section that expands on the goal or project using the supplied insights
- a closing paragraph with a clear call to action using the provided CTA label and link
- a short PS line reinforcing urgency or impact

Return ONLY valid JSON with the following shape:
{
  "subject": string,
  "html": string,
  "text": string,
  "talkingPoints": string[]
}

Guidance:
- Keep the subject under 72 characters.
- Provide a substantial HTML body (3-4 paragraphs plus CTA) using <p>, <strong>, and <ul>/<li> when helpful.
- Provide a text-only alternative that mirrors the HTML content closely.
- talkingPoints should be a concise array (3-5 bullets) summarizing key facts from the insights.
- Explicitly reference the CTA label and link in the closing paragraph.
- If there is a featured event, weave it into the story and tie it to the CTA.

Context:
- Campaign: ${options.campaignName}
- Existing subject: ${options.templateSubject}
- Existing HTML (converted to text): ${stripHtml(options.templateHtml).slice(0, 1200)}
- Existing text: ${options.templateText.slice(0, 1200)}
- Donor insights: ${options.donorSummary}
- Goals or notes: ${options.goals ?? 'Highlight impact, gratitude, and a clear call to action.'}
- Audience metrics: ${options.audienceInsights ?? 'No additional metrics.'}
- Featured event: ${options.featuredEvent ?? 'No single event focus.'}
- Call to action: ${options.callToAction ?? 'Invite them to donate or register.'}
- Additional staff notes: ${options.notes ?? 'None provided.'}
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

function fallbackSuggestion(
  template: { subject: string; html: string; text: string },
  donorName?: string | null,
  cta?: { label?: string | null; url?: string | null }
): EmailDraftSuggestion {
  const renderedHtml = renderContent(template.html, donorName);
  const htmlWithCta =
    cta?.label && cta?.url
      ? `${renderedHtml}<p><strong>${cta.label}:</strong> <a href="${cta.url}">${cta.url}</a></p>`
      : renderedHtml;
  const textWithCta =
    cta?.label && cta?.url ? `${renderContent(template.text, donorName)}\n\n${cta.label}: ${cta.url}` : renderContent(template.text, donorName);
  return {
    subject: renderContent(template.subject, donorName),
    html: htmlWithCta,
    text: textWithCta,
    talkingPoints: ['Automated fallback using saved template'],
    sampleRecipients: donorName ? [donorName] : [],
    ctaLabel: cta?.label ?? undefined,
    ctaUrl: cta?.url ?? undefined
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
      audienceSegment: true,
      featuredEvent: true
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

  const donorIds = recipients.map((donor) => donor.id);
  const lifetimeTotal = recipients.reduce((sum, donor) => sum + Number(donor.totalGiven ?? 0), 0);
  const avgLifetime = recipients.length ? lifetimeTotal / recipients.length : 0;
  const recentActiveWindow = subDays(new Date(), 90);
  const recentActiveCount = recipients.filter((donor) => donor.lastGiftDate && donor.lastGiftDate >= recentActiveWindow).length;

  const recentGiftStats = donorIds.length
    ? await prisma.pledge.aggregate({
        _sum: { amount: true },
        _count: true,
        where: {
          donorId: { in: donorIds },
          status: PledgeStatus.RECEIVED,
          date: { gte: subMonths(new Date(), 12) }
        }
      })
    : { _sum: { amount: 0 }, _count: 0 };

  const audienceInsights = [
    `${formatNumber(recipients.length)} donors in this audience`,
    `Lifetime total across this group: ${formatCurrency(lifetimeTotal)}`,
    `Average lifetime value: ${formatCurrency(avgLifetime)}`,
    `${formatCurrency(Number(recentGiftStats._sum.amount ?? 0))} received in the last 12 months across ${recentGiftStats._count} gifts`,
    `${formatPercent(recipients.length ? recentActiveCount / recipients.length : 0)} gave within the last 90 days`
  ];

  const topDonors = recipients
    .slice()
    .sort((a, b) => Number(b.totalGiven ?? 0) - Number(a.totalGiven ?? 0))
    .slice(0, 3)
    .map(
      (donor) =>
        `${donor.name ?? donor.email} – lifetime ${formatCurrency(Number(donor.totalGiven ?? 0))}${
          donor.lastGiftDate ? ` (last gift ${formatDate(donor.lastGiftDate)})` : ''
        }`
    );

  const donorSummary =
    topDonors.length > 0
      ? topDonors.join('; ')
      : sampleRecipients.length > 0
        ? sampleRecipients
            .map(
              (donor) =>
                `${donor.name} (${donor.email}) – lifetime $${donor.totalGiven} · last gift ${donor.lastGiftDate.slice(0, 10)}`
            )
            .join('; ')
        : 'No matching donors found yet. Suggest a general-purpose draft.';

  const eventSummary = campaign.featuredEvent
    ? `${campaign.featuredEvent.name} on ${formatDate(campaign.featuredEvent.startDate)} at ${
        campaign.featuredEvent.venue ?? 'BHIC'
      } · ${formatNumber(campaign.featuredEvent.ticketsSold)} of ${formatNumber(campaign.featuredEvent.ticketsTotal || 0)} tickets sold (${
        campaign.featuredEvent.ticketsTotal
          ? formatPercent(
              campaign.featuredEvent.ticketsTotal ? campaign.featuredEvent.ticketsSold / campaign.featuredEvent.ticketsTotal : 0
            )
          : 'n/a'
      }) · gross ${formatCurrency(Number(campaign.featuredEvent.grossRevenue ?? 0))}`
    : undefined;

  const insightBullets = [...audienceInsights];
  if (campaign.goal) {
    insightBullets.push(`Goal: ${campaign.goal}`);
  }
  if (eventSummary) {
    insightBullets.push(`Featured event: ${eventSummary}`);
  }
  if (campaign.contextNotes) {
    insightBullets.push(`Staff notes: ${campaign.contextNotes}`);
  }

  try {
    const prompt = buildPrompt({
      campaignName: campaign.name,
      templateSubject: campaign.template.subject,
      templateHtml: campaign.template.html,
      templateText: campaign.template.text,
      donorSummary,
      goals: campaign.goal ?? campaign.contextNotes ?? undefined,
      audienceInsights: insightBullets.join('\n- '),
      featuredEvent: eventSummary,
      callToAction: `${campaign.ctaLabel ?? 'Donate now'} ${campaign.ctaUrl ?? ''}`.trim(),
      notes: campaign.contextNotes ?? undefined
    });

    const response = await geminiModel.generateContent(prompt);
    const suggestion = extractJsonPayload(response.response?.text());

    return {
      subject: suggestion.subject ?? campaign.template.subject,
      html: suggestion.html ?? campaign.template.html,
      text: suggestion.text ?? campaign.template.text,
      talkingPoints: suggestion.talkingPoints ?? insightBullets.slice(0, 5),
      sampleRecipients: sampleRecipients.map((recipient) => recipient.email),
      ctaLabel: campaign.ctaLabel ?? undefined,
      ctaUrl: campaign.ctaUrl ?? undefined
    };
  } catch (error) {
    console.error('Gemini draft generation failed', error);
    const donorName = sampleRecipients[0]?.name;
    return fallbackSuggestion(campaign.template, donorName, {
      label: campaign.ctaLabel,
      url: campaign.ctaUrl
    });
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
      talkingPoints: suggestion.talkingPoints ?? [],
      sampleRecipients: suggestion.sampleRecipients ?? []
    };
  } catch (error) {
    console.error('Gemini thank-you draft failed', error);
    return fallbackSuggestion(template, donor.name);
  }
}

