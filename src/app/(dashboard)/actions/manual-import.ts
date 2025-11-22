"use server";

import { createHash } from 'crypto';

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
import type { ManualImportResult } from '@/app/(dashboard)/actions/manual-import-shared';

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

const eventbriteOrderSchema = z.object({
  event_id: z.string().min(1, 'event_id is required'),
  event_name: z.string().min(1, 'event_name is required'),
  event_start_date: z.string().min(1, 'event_start_date is required'),
  event_start_time: z.string().optional(),
  event_timezone: z.string().optional(),
  event_location: z.string().optional(),
  order_id: z.string().optional(),
  order_date: z.string().optional(),
  ticket_quantity: z.string().optional(),
  gross_sales: z.string().optional(),
  ticket_revenue: z.string().optional(),
  add_ons_revenue: z.string().optional(),
  ticket_add_ons_revenue: z.string().optional(),
  net_sales: z.string().optional(),
  payment_status: z.string().optional()
});

type NormalizedEventRow = z.infer<typeof eventRowSchema>;
type LegacyEventbriteRow = z.infer<typeof eventbriteOrderSchema>;

const etapestryExportSchema = z.object({
  date: z.string().min(1, 'date is required'),
  role: z.string().optional(),
  account_name: z.string().min(1, 'account_name is required'),
  type: z.string().optional(),
  pledged: z.string().optional(),
  received: z.string().optional(),
  fund: z.string().optional()
});

type NormalizedPledgeRow = z.infer<typeof pledgeRowSchema>;
type LegacyEtapestryRow = z.infer<typeof etapestryExportSchema>;
type NormalizedEventRowWithMeta = NormalizedEventRow & { __rowNumber?: number };
type LegacyEventbriteRowWithMeta = LegacyEventbriteRow & { __rowNumber: number };

function normalizeHeaderKey(key: string) {
  return key
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function parseCsv(text: string) {
  return parse(text, {
    columns: (header: string[]) => header.map(normalizeHeaderKey),
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

function formatCurrencyNumber(value: number) {
  return (Math.round(value * 100) / 100).toFixed(2);
}

function isLegacyEtapestryRow(row: Record<string, string> | undefined) {
  if (!row) return false;
  const hasAccountName = Boolean(row.account_name);
  const hasPledgeId = 'pledge_id' in row;
  return hasAccountName && !hasPledgeId;
}

function isSummaryLegacyRow(row: Record<string, string>) {
  return !row.date && !row.account_name && !row.type && !row.fund;
}

function deriveLegacyPledgeId(row: LegacyEtapestryRow) {
  const token = createHash('sha1')
    .update(
      [
        row.account_name ?? '',
        row.date ?? '',
        row.type ?? '',
        row.fund ?? '',
        row.received ?? row.pledged ?? ''
      ].join('|')
    )
    .digest('hex');
  return `legacy-etp:${token}`;
}

function mapLegacyRow(row: LegacyEtapestryRow): NormalizedPledgeRow {
  const amount = row.received?.trim() || row.pledged?.trim() || '0';
  return {
    pledge_id: deriveLegacyPledgeId(row),
    donor_name: row.account_name.trim(),
    donor_email: undefined,
    donor_phone: undefined,
    amount: amount,
    date: row.date,
    status: row.type,
    campaign: row.fund
  };
}

function parseLegacyEventbriteRows(rows: Record<string, string>[]): LegacyEventbriteRowWithMeta[] {
  const parsed: LegacyEventbriteRowWithMeta[] = [];

  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    if (!row.event_id) {
      continue;
    }
    const result = eventbriteOrderSchema.safeParse(row);
    if (!result.success) {
      throw new Error(
        `Row ${index + 2}: ${result.error.issues[0]?.message ?? 'Invalid Eventbrite order row'}`
      );
    }
    parsed.push({ ...result.data, __rowNumber: index + 2 });
  }

  if (!parsed.length) {
    throw new Error('No Eventbrite rows were detected in the CSV.');
  }

  return parsed;
}

function aggregateEventbriteOrders(rows: LegacyEventbriteRowWithMeta[]): NormalizedEventRowWithMeta[] {
  const grouped = new Map<
    string,
    {
      row: LegacyEventbriteRowWithMeta;
      tickets: number;
      gross: number;
      net: number;
      rowNumber: number;
    }
  >();

  for (const entry of rows) {
    const tickets = parseInteger(entry.ticket_quantity);
    const gross =
      parseCurrency(entry.ticket_add_ons_revenue ?? entry.ticket_revenue ?? entry.gross_sales) ?? 0;
    const net =
      parseCurrency(entry.net_sales ?? entry.ticket_add_ons_revenue ?? entry.ticket_revenue) ?? gross;

    if (!grouped.has(entry.event_id)) {
      grouped.set(entry.event_id, {
        row: entry,
        tickets,
        gross,
        net,
        rowNumber: entry.__rowNumber
      });
    } else {
      const bucket = grouped.get(entry.event_id)!;
      bucket.tickets += tickets;
      bucket.gross += gross;
      bucket.net += net;
      bucket.rowNumber = Math.min(bucket.rowNumber, entry.__rowNumber);
    }
  }

  return Array.from(grouped.values()).map(({ row, tickets, gross, net, rowNumber }) => ({
    event_id: row.event_id,
    name: row.event_name,
    start_date: row.event_start_date,
    end_date: row.event_start_date,
    venue: row.event_location,
    status: 'completed',
    tickets_total: String(tickets),
    tickets_sold: String(tickets),
    gross_revenue: formatCurrencyNumber(gross),
    net_revenue: formatCurrencyNumber(net > 0 ? net : gross * 0.88),
    __rowNumber: rowNumber
  }));
}

async function importPledges(rows: Record<string, string>[], options: { legacyFormat?: boolean } = {}) {
  let imported = 0;
  const legacyFormat = options.legacyFormat ?? false;

  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    if (legacyFormat && isSummaryLegacyRow(row)) {
      continue;
    }
    let normalized: NormalizedPledgeRow;
    if (legacyFormat) {
      const parsed = etapestryExportSchema.safeParse(row);
      if (!parsed.success) {
        throw new Error(`Row ${index + 2}: ${parsed.error.issues[0]?.message ?? 'Invalid pledge row'}`);
      }
      normalized = mapLegacyRow(parsed.data);
    } else {
      const parsed = pledgeRowSchema.safeParse(row);
      if (!parsed.success) {
        throw new Error(`Row ${index + 2}: ${parsed.error.issues[0]?.message ?? 'Invalid pledge row'}`);
      }
      normalized = parsed.data;
    }
    const amount = parseCurrency(normalized.amount);
    const date = new Date(normalized.date);
    if (Number.isNaN(date.getTime())) {
      throw new Error(`Row ${index + 2}: Invalid date "${normalized.date}"`);
    }
    const donorEmail = normalized.donor_email?.trim() || null;

    let donor =
      donorEmail ? await prisma.donor.findUnique({ where: { email: donorEmail } }) : null;
    if (!donor) {
      donor = await prisma.donor.upsert({
        where: { externalId: `manual-etp:${normalized.pledge_id}` },
        update: {
          name: normalized.donor_name,
          email: donorEmail,
          phone: normalized.donor_phone?.trim() || null
        },
        create: {
          externalId: `manual-etp:${normalized.pledge_id}`,
          name: normalized.donor_name,
          email: donorEmail,
          phone: normalized.donor_phone?.trim() || null
        }
      });
    } else {
      await prisma.donor.update({
        where: { id: donor.id },
        data: {
          name: normalized.donor_name,
          phone: normalized.donor_phone?.trim() || donor.phone
        }
      });
    }

    await prisma.pledge.upsert({
      where: { externalId: normalized.pledge_id },
      update: {
        donorId: donor.id,
        amount,
        date,
        campaign: normalized.campaign?.trim() || null,
        status: normalizePledgeStatus(normalized.status)
      },
      create: {
        externalId: normalized.pledge_id,
        donorId: donor.id,
        amount,
        date,
        campaign: normalized.campaign?.trim() || null,
        status: normalizePledgeStatus(normalized.status)
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

function isEventbriteOrderRow(row: Record<string, string> | undefined) {
  if (!row) return false;
  return Boolean(row.event_id && row.order_id);
}

async function importEvents(rows: Record<string, string>[], options: { legacyFormat?: boolean } = {}) {
  let imported = 0;
  const legacyFormat = options.legacyFormat ?? false;

  const normalizedRows: NormalizedEventRowWithMeta[] = [];

  if (legacyFormat) {
    const parsedOrders = parseLegacyEventbriteRows(rows);
    normalizedRows.push(...aggregateEventbriteOrders(parsedOrders));
  } else {
    for (let index = 0; index < rows.length; index += 1) {
      const result = eventRowSchema.safeParse(rows[index]);
      if (!result.success) {
        throw new Error(`Row ${index + 2}: ${result.error.issues[0]?.message ?? 'Invalid event row'}`);
      }
      normalizedRows.push({ ...result.data, __rowNumber: index + 2 });
    }
  }

  for (const row of normalizedRows) {
    const rowPrefix = row.__rowNumber ? `Row ${row.__rowNumber}` : `Event ${row.name}`;
    const startDate = new Date(row.start_date);
    const endDate = new Date(row.end_date || row.start_date);
    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
      throw new Error(`${rowPrefix}: Invalid start/end date`);
    }

    const ticketsTotal = parseInteger(row.tickets_total);
    const ticketsSold = parseInteger(row.tickets_sold);
    const grossRevenue = parseCurrency(row.gross_revenue);
    const netRevenue = row.net_revenue
      ? parseCurrency(row.net_revenue)
      : Math.round(grossRevenue * 0.88 * 100) / 100;

    await prisma.event.upsert({
      where: { externalId: row.event_id },
      update: {
        name: row.name,
        startDate,
        endDate,
        venue: row.venue?.trim() || null,
        status: normalizeEventStatus(row.status),
        ticketsTotal,
        ticketsSold,
        grossRevenue,
        netRevenue
      },
      create: {
        externalId: row.event_id,
        name: row.name,
        startDate,
        endDate,
        venue: row.venue?.trim() || null,
        status: normalizeEventStatus(row.status),
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

    const legacyEtapestryFormat = source === 'etapestry' ? isLegacyEtapestryRow(rows[0]) : false;
    const legacyEventbriteFormat = source === 'eventbrite' ? isEventbriteOrderRow(rows[0]) : false;
    const count =
      source === 'etapestry'
        ? await importPledges(rows, { legacyFormat: legacyEtapestryFormat })
        : await importEvents(rows, { legacyFormat: legacyEventbriteFormat });

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


