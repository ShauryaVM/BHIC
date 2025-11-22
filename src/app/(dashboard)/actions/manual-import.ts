"use server";

import { MetricSource } from '@prisma/client';
import { parse } from 'csv-parse/sync';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { normalizePledgeStatus, recalculateDonorLifetimeValues } from '@/lib/etapestry';
import { normalizeEventStatus } from '@/lib/eventbrite';
import { invalidateMetricsForSources, recordIntegrationSync } from '@/lib/integration-sync';

export type ManualImportResult = {
  success: boolean;
  message: string;
  errors?: string[];
};

export const manualImportInitialState: ManualImportResult = {
  success: false,
  message: ''
};

type SourceType = 'etapestry' | 'eventbrite';

const pledgeRowSchema = z.object({
  pledge_id: z.string().min(1, 'pledge_id is required'),
  donor_name: z.string().min(1, 'donor_name is required'),
  donor_email: z.string().optional(),
  donor_phone: z.string().optional(),
  amount: z.string().min(1, 'amount is required'),
  date: z.string().min(1, 'date is required'),
  status: z.string().optional(),
  campaign: z.string().optional()
});

const eventRowSchema = z.object({
  event_id: z.string().min(1, 'event_id is required'),
  name: z.string().min(1, 'name is required'),
  start_date: z.string().min(1, 'start_date is required'),
  end_date: z.string().optional(),
  venue: z.string().optional(),
  status: z.string().optional(),
  tickets_total: z.string().optional(),
  tickets_sold: z.string().optional(),
  gross_revenue: z.string().optional(),
  net_revenue: z.string().optional()
});

function parseCsv(text: string) {
  return parse(text, {
    columns: (header: string[]) => header.map((key) => key.trim().toLowerCase()),
    skip_empty_lines: true,
    trim: true
  }) as Record<string, string>[];
}

function parseCurrency(value?: string) {
  if (!value) return 0;
  const normalized = value.replace(/[$,\s]/g, '');
  const amount = Number(normalized);
  if (Number.isNaN(amount)) {
    throw new Error(`Invalid currency value "${value}"`);
  }
  return amount;
}

function parseInteger(value?: string) {
  if (!value) return 0;
  const num = Number(value);
  if (!Number.isFinite(num)) {
    throw new Error(`Invalid numeric value "${value}"`);
  }
  return Math.round(num);
}

async function importPledges(rows: Record<string, string>[]) {
  let imported = 0;

  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    const parsed = pledgeRowSchema.safeParse(row);
    if (!parsed.success) {
      throw new Error(`Row ${index + 2}: ${parsed.error.issues[0]?.message ?? 'Invalid pledge row'}`);
    }
    const data = parsed.data;
    const amount = parseCurrency(data.amount);
    const date = new Date(data.date);
    if (Number.isNaN(date.getTime())) {
      throw new Error(`Row ${index + 2}: Invalid date "${data.date}"`);
    }
    const donorEmail = data.donor_email?.trim() || null;

    let donor =
      donorEmail ? await prisma.donor.findUnique({ where: { email: donorEmail } }) : null;
    if (!donor) {
      donor = await prisma.donor.upsert({
        where: { externalId: `manual-etp:${data.pledge_id}` },
        update: {
          name: data.donor_name,
          email: donorEmail,
          phone: data.donor_phone?.trim() || null
        },
        create: {
          externalId: `manual-etp:${data.pledge_id}`,
          name: data.donor_name,
          email: donorEmail,
          phone: data.donor_phone?.trim() || null
        }
      });
    } else {
      await prisma.donor.update({
        where: { id: donor.id },
        data: {
          name: data.donor_name,
          phone: data.donor_phone?.trim() || donor.phone
        }
      });
    }

    await prisma.pledge.upsert({
      where: { externalId: data.pledge_id },
      update: {
        donorId: donor.id,
        amount,
        date,
        campaign: data.campaign?.trim() || null,
        status: normalizePledgeStatus(data.status)
      },
      create: {
        externalId: data.pledge_id,
        donorId: donor.id,
        amount,
        date,
        campaign: data.campaign?.trim() || null,
        status: normalizePledgeStatus(data.status)
      }
    });
    imported += 1;
  }

  await recalculateDonorLifetimeValues();
  await invalidateMetricsForSources([MetricSource.ETAPESTRY]);
  await recordIntegrationSync(MetricSource.ETAPESTRY, { synced: imported });
  revalidatePath('/');
  revalidatePath('/donors');
  return imported;
}

async function importEvents(rows: Record<string, string>[]) {
  let imported = 0;

  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    const parsed = eventRowSchema.safeParse(row);
    if (!parsed.success) {
      throw new Error(`Row ${index + 2}: ${parsed.error.issues[0]?.message ?? 'Invalid event row'}`);
    }
    const data = parsed.data;
    const startDate = new Date(data.start_date);
    const endDate = new Date(data.end_date || data.start_date);
    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
      throw new Error(`Row ${index + 2}: Invalid start/end date`);
    }

    const ticketsTotal = parseInteger(data.tickets_total);
    const ticketsSold = parseInteger(data.tickets_sold);
    const grossRevenue = parseCurrency(data.gross_revenue);
    const netRevenue = data.net_revenue
      ? parseCurrency(data.net_revenue)
      : Math.round(grossRevenue * 0.88 * 100) / 100;

    await prisma.event.upsert({
      where: { externalId: data.event_id },
      update: {
        name: data.name,
        startDate,
        endDate,
        venue: data.venue?.trim() || null,
        status: normalizeEventStatus(data.status),
        ticketsTotal,
        ticketsSold,
        grossRevenue,
        netRevenue
      },
      create: {
        externalId: data.event_id,
        name: data.name,
        startDate,
        endDate,
        venue: data.venue?.trim() || null,
        status: normalizeEventStatus(data.status),
        ticketsTotal,
        ticketsSold,
        grossRevenue,
        netRevenue
      }
    });
    imported += 1;
  }

  await invalidateMetricsForSources([MetricSource.EVENTBRITE]);
  await recordIntegrationSync(MetricSource.EVENTBRITE, { synced: imported });
  revalidatePath('/');
  revalidatePath('/events');
  return imported;
}

export async function manualImportAction(
  _prevState: ManualImportResult,
  formData: FormData
): Promise<ManualImportResult> {
  const session = await getServerSession(authOptions);
  if (!session) {
    return { success: false, message: 'You must be signed in to import data.' };
  }
  if (session.user.role !== 'ADMIN') {
    return { success: false, message: 'Admin access required for manual imports.' };
  }

  const source = formData.get('source');
  if (source !== 'etapestry' && source !== 'eventbrite') {
    return { success: false, message: 'Select a source to import.' };
  }

  const file = formData.get('file');
  if (!(file instanceof File) || file.size === 0) {
    return { success: false, message: 'Upload a CSV file exported from the vendor portal.' };
  }

  const text = Buffer.from(await file.arrayBuffer()).toString('utf-8');
  if (!text.trim()) {
    return { success: false, message: 'The uploaded file was empty.' };
  }

  try {
    const rows = parseCsv(text);
    if (!rows.length) {
      return { success: false, message: 'No records were found in the CSV file.' };
    }

    const count =
      source === 'etapestry' ? await importPledges(rows) : await importEvents(rows);

    return {
      success: true,
      message: `Imported ${count} ${source === 'etapestry' ? 'pledges' : 'events'} from CSV.`
    };
  } catch (error) {
    console.error('Manual import failed', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unable to import data from CSV.'
    };
  }
}


