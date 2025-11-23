"use server";

import { createHash, randomUUID } from 'crypto';

import { MetricSource, Prisma } from '@prisma/client';
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

function extractEmails(raw?: string | null) {
  if (!raw) return [];
  return raw
    .split(/\r?\n|[,;]/)
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
}

function normalizeName(value: string) {
  return value.trim().toLowerCase();
}

function normalizePhone(value?: string | null) {
  if (!value) return null;
  const digits = value.replace(/\D+/g, '');
  return digits || null;
}

type SourceType = 'etapestry' | 'eventbrite';

const pledgeRowSchema = z.object({
  pledge_id: z.string().min(1, 'pledge_id is required'),
  donor_name: z.string().min(1, 'donor_name is required'),
  donor_email: z.string().optional(),
  donor_phone: z.string().optional(),
  donor_address: z.string().optional(),
  donor_city: z.string().optional(),
  donor_state: z.string().optional(),
  donor_postal_code: z.string().optional(),
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
  fund: z.string().optional(),
  email: z.string().optional(),
  city: z.string().optional(),
  state_province: z.string().optional(),
  postal_code: z.string().optional(),
  full_address_with_country_single_line: z.string().optional()
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

function detectLegacyEtapestryFormat(rows: Record<string, string>[]) {
  for (const row of rows) {
    if (isSummaryLegacyRow(row)) {
      continue;
    }
    if (isLegacyEtapestryRow(row)) {
      return true;
    }
    if ('pledge_id' in row) {
      return false;
    }
  }
  return false;
}

function deriveManualDonorKey(row: NormalizedPledgeRow) {
  const emails = extractEmails(row.donor_email);
  if (emails.length) {
    return `manual-etp:email:${emails[0]}`;
  }
  const token = createHash('sha1')
    .update(`${row.donor_name.trim().toLowerCase()}|${row.donor_phone?.replace(/\D+/g, '') ?? ''}`)
    .digest('hex')
    .slice(0, 16);
  return `manual-etp:acct:${token}`;
}

function chunkArray<T>(items: T[], size: number): T[][] {
  if (size <= 0) return [items];
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
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
  const receivedAmount = parseCurrency(row.received);
  const pledgedAmount = parseCurrency(row.pledged);
  const hasReceived = receivedAmount > 0;
  const amount = hasReceived
    ? row.received?.trim() || row.pledged?.trim() || '0'
    : row.pledged?.trim() || row.received?.trim() || '0';
  const inferredStatus = hasReceived ? 'RECEIVED' : 'PLEDGED';

  return {
    pledge_id: deriveLegacyPledgeId(row),
    donor_name: row.account_name.trim(),
    donor_email: row.email?.trim() || undefined,
    donor_phone: undefined,
    donor_address: row.full_address_with_country_single_line?.trim(),
    donor_city: row.city?.trim(),
    donor_state: row.state_province?.trim(),
    donor_postal_code: row.postal_code?.trim(),
    amount,
    date: row.date,
    status: inferredStatus,
    campaign: row.fund
  };
}

async function upsertManualDonors(payloads: ManualDonorPayload[]) {
  if (!payloads.length) {
    return [] as Array<{ id: string; externalId: string; email: string | null }>;
  }
  const results: Array<{ id: string; externalId: string; email: string | null }> = [];
  for (const chunk of chunkArray(payloads, 400)) {
    if (!chunk.length) continue;
    const values = chunk.map((donor) =>
      Prisma.sql`(${donor.id}, ${donor.externalId}, ${donor.name}, ${donor.email}, ${donor.phone}, ${donor.address}, ${
        donor.city
      }, ${donor.state}, ${donor.postalCode}, ${new Prisma.Decimal(donor.totalPledged)}, ${new Prisma.Decimal(
        donor.totalGiven
      )}, ${donor.lastGiftDate}, NOW())`
    );
    const rows = await prisma.$queryRaw<Array<{ id: string; externalId: string; email: string | null }>>`
      INSERT INTO "Donor" ("id","externalId","name","email","phone","address","city","state","postalCode","totalPledged","totalGiven","lastGiftDate","updatedAt")
      VALUES ${Prisma.join(values)}
      ON CONFLICT ("externalId") DO UPDATE SET
        "name" = EXCLUDED."name",
        "email" = EXCLUDED."email",
        "phone" = EXCLUDED."phone",
        "address" = COALESCE(EXCLUDED."address", "Donor"."address"),
        "city" = COALESCE(EXCLUDED."city", "Donor"."city"),
        "state" = COALESCE(EXCLUDED."state", "Donor"."state"),
        "postalCode" = COALESCE(EXCLUDED."postalCode", "Donor"."postalCode"),
        "totalPledged" = "Donor"."totalPledged" + EXCLUDED."totalPledged",
        "totalGiven" = "Donor"."totalGiven" + EXCLUDED."totalGiven",
        "lastGiftDate" = GREATEST(
          COALESCE("Donor"."lastGiftDate", '-infinity'::timestamp),
          COALESCE(EXCLUDED."lastGiftDate", '-infinity'::timestamp)
        ),
        "updatedAt" = NOW()
      RETURNING "id","externalId","email";
    `;
    results.push(...rows);
  }
  return results;
}

async function upsertDonorEmails(entries: Map<string, Set<string>>) {
  if (!entries.size) return;
  const payloads: Array<{ id: string; donorId: string; email: string }> = [];
  for (const [donorId, emails] of entries.entries()) {
    for (const email of emails) {
      payloads.push({ id: randomUUID(), donorId, email });
    }
  }
  for (const chunk of chunkArray(payloads, 400)) {
    if (!chunk.length) continue;
    const values = chunk.map((item) => Prisma.sql`(${item.id}, ${item.donorId}, ${item.email})`);
    await prisma.$executeRaw`
      INSERT INTO "DonorEmail" ("id","donorId","email")
      VALUES ${Prisma.join(values)}
      ON CONFLICT ("donorId","email") DO NOTHING
    `;
  }
}

async function upsertPledgesRaw(payloads: PledgeUpsertPayload[]) {
  if (!payloads.length) return;
  for (const chunk of chunkArray(payloads, 400)) {
    if (!chunk.length) continue;
    const values = chunk.map((pledge) =>
      Prisma.sql`(${pledge.id}, ${pledge.externalId}, ${pledge.donorId}, ${pledge.amount}, ${pledge.date}, ${
        pledge.campaign
      }, ${pledge.status}::"PledgeStatus", NOW(), NOW())`
    );
    await prisma.$executeRaw`
      INSERT INTO "Pledge" ("id","externalId","donorId","amount","date","campaign","status","createdAt","updatedAt")
      VALUES ${Prisma.join(values)}
      ON CONFLICT ("externalId") DO UPDATE SET
        "donorId" = EXCLUDED."donorId",
        "amount" = EXCLUDED."amount",
        "date" = EXCLUDED."date",
        "campaign" = EXCLUDED."campaign",
        "status" = EXCLUDED."status"::"PledgeStatus",
        "updatedAt" = NOW()
    `;
  }
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

interface ManualDonorPayload {
  id: string;
  externalId: string;
  name: string;
  email: string | null;
  emails: string[];
  phone: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  postalCode: string | null;
  totalPledged: number;
  totalGiven: number;
  lastGiftDate: Date | null;
}

interface PledgeUpsertPayload {
  id: string;
  externalId: string;
  donorId: string;
  amount: Prisma.Decimal;
  date: Date;
  campaign: string | null;
  status: ReturnType<typeof normalizePledgeStatus>;
}

async function importPledges(rows: Record<string, string>[], options: { legacyFormat?: boolean } = {}) {
  const legacyFormat = options.legacyFormat ?? false;
  const normalizedRows: Array<{ rowNumber: number; data: NormalizedPledgeRow }> = [];

  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    if (legacyFormat) {
      if (isSummaryLegacyRow(row)) continue;
      const parsed = etapestryExportSchema.safeParse(row);
      if (!parsed.success) {
        throw new Error(`Row ${index + 2}: ${parsed.error.issues[0]?.message ?? 'Invalid pledge row'}`);
      }
      normalizedRows.push({ rowNumber: index + 2, data: mapLegacyRow(parsed.data) });
    } else {
      const parsed = pledgeRowSchema.safeParse(row);
      if (!parsed.success) {
        throw new Error(`Row ${index + 2}: ${parsed.error.issues[0]?.message ?? 'Invalid pledge row'}`);
      }
      normalizedRows.push({ rowNumber: index + 2, data: parsed.data });
    }
  }

  if (!normalizedRows.length) {
    return 0;
  }

  const prepared = normalizedRows.map(({ rowNumber, data }) => {
    const amount = parseCurrency(data.amount);
    const date = new Date(data.date);
    if (Number.isNaN(date.getTime())) {
      throw new Error(`Row ${rowNumber}: Invalid date "${data.date}"`);
    }
    const donorEmailRaw = data.donor_email?.trim() || null;
    const donorEmails = extractEmails(data.donor_email);
    const donorEmail = donorEmails.length ? donorEmails[0] : donorEmailRaw ? donorEmailRaw.toLowerCase() : null;
    const donorAddress = data.donor_address?.trim() || null;
    const donorCity = data.donor_city?.trim() || null;
    const donorState = data.donor_state?.trim() || null;
    const donorPostalCode = data.donor_postal_code?.trim() || null;
    const donorNameNormalized = normalizeName(data.donor_name);
    const donorPhoneDigits = normalizePhone(data.donor_phone);
    return {
      rowNumber,
      pledgeId: data.pledge_id,
      donorKey: deriveManualDonorKey(data),
      donorName: data.donor_name,
      donorNameNormalized,
      donorEmailRaw,
      donorEmail,
      donorEmails,
      donorPhone: data.donor_phone?.trim() || null,
      donorPhoneDigits,
      donorAddress,
      donorCity,
      donorState,
      donorPostalCode,
      amount,
      date,
      campaign: data.campaign?.trim() || null,
      status: normalizePledgeStatus(data.status)
    };
  });

  const emailRows = prepared.filter((row) => row.donorEmailRaw);
  const uniqueEmails = Array.from(new Set(emailRows.map((row) => row.donorEmailRaw!)));
  const existingEmailDonors = uniqueEmails.length
    ? await prisma.donor.findMany({
        where: { email: { in: uniqueEmails } },
        select: { id: true, email: true }
      })
    : [];
  const emailToDonorId = new Map(
    existingEmailDonors
      .filter((donor) => donor.email)
      .map((donor) => [donor.email!.trim().toLowerCase(), donor.id])
  );

  const manualDonorPayloads: ManualDonorPayload[] = [];
  const manualDonorMap = new Map<string, ManualDonorPayload>();
  const donorIdByKey = new Map<string, string>();

  const phoneTargets = Array.from(
    new Set(prepared.map((row) => row.donorPhoneDigits).filter((value): value is string => Boolean(value)))
  );
  const existingPhoneDonors = phoneTargets.length
    ? await prisma.donor.findMany({
        where: { phone: { in: phoneTargets } },
        select: { id: true, name: true, phone: true }
      })
    : [];
  const namePhoneToDonorId = new Map<string, string>();
  for (const donor of existingPhoneDonors) {
    const phoneDigits = normalizePhone(donor.phone);
    if (!phoneDigits) continue;
    const nameKey = normalizeName(donor.name);
    namePhoneToDonorId.set(`${nameKey}|${phoneDigits}`, donor.id);
  }

  for (const donor of existingEmailDonors) {
    if (donor.email) {
      donorIdByKey.set(`manual-etp:email:${donor.email.trim().toLowerCase()}`, donor.id);
    }
  }

  for (const row of prepared) {
    const hasExistingEmail = row.donorEmail ? emailToDonorId.has(row.donorEmail) : false;
    if (hasExistingEmail) {
      continue;
    }
    const namePhoneKey = row.donorPhoneDigits ? `${row.donorNameNormalized}|${row.donorPhoneDigits}` : null;
    const matchedByNamePhone = namePhoneKey ? namePhoneToDonorId.get(namePhoneKey) : undefined;
    if (matchedByNamePhone) {
      donorIdByKey.set(row.donorKey, matchedByNamePhone);
      continue;
    }
    const existing = manualDonorMap.get(row.donorKey);
    if (!existing) {
      const payload: ManualDonorPayload = {
        id: randomUUID(),
        externalId: row.donorKey,
        name: row.donorName,
        email: row.donorEmails[0] ?? row.donorEmail,
        emails: row.donorEmails,
        phone: row.donorPhone,
        address: row.donorAddress,
        city: row.donorCity,
        state: row.donorState,
        postalCode: row.donorPostalCode,
        totalPledged: row.amount,
        totalGiven: row.status === 'RECEIVED' ? row.amount : 0,
        lastGiftDate: row.status === 'RECEIVED' ? row.date : null
      };
      manualDonorPayloads.push(payload);
      manualDonorMap.set(row.donorKey, payload);
    } else {
      existing.totalPledged += row.amount;
      if (row.status === 'RECEIVED') {
        existing.totalGiven += row.amount;
        existing.lastGiftDate =
          existing.lastGiftDate && existing.lastGiftDate > row.date ? existing.lastGiftDate : row.date;
      }
      for (const email of row.donorEmails) {
        if (!existing.emails.includes(email)) {
          existing.emails.push(email);
        }
      }
      if (!existing.address && row.donorAddress) {
        existing.address = row.donorAddress;
      }
      if (!existing.city && row.donorCity) {
        existing.city = row.donorCity;
      }
      if (!existing.state && row.donorState) {
        existing.state = row.donorState;
      }
      if (!existing.postalCode && row.donorPostalCode) {
        existing.postalCode = row.donorPostalCode;
      }
      if (!existing.email && existing.emails.length) {
        existing.email = existing.emails[0];
      }
    }
  }

  if (manualDonorPayloads.length) {
    const inserted = await upsertManualDonors(manualDonorPayloads);
    for (const donor of inserted) {
      donorIdByKey.set(donor.externalId, donor.id);
    }
  }

  const pledgePayloadMap = new Map<string, PledgeUpsertPayload>();
  const donorEmailsById = new Map<string, Set<string>>();

  for (const row of prepared) {
    const donorKey =
      row.donorEmail && emailToDonorId.has(row.donorEmail) ? `manual-etp:email:${row.donorEmail}` : row.donorKey;
    const donorId = donorIdByKey.get(donorKey);
    if (!donorId) {
      throw new Error(`Unable to resolve donor for row ${row.rowNumber}`);
    }

    if (row.donorEmails.length) {
      if (!donorEmailsById.has(donorId)) {
        donorEmailsById.set(donorId, new Set());
      }
      const bucket = donorEmailsById.get(donorId)!;
      for (const email of row.donorEmails) {
        bucket.add(email);
      }
    }

    const payload: PledgeUpsertPayload = {
      id: randomUUID(),
      externalId: row.pledgeId,
      donorId,
      amount: new Prisma.Decimal(row.amount),
      date: row.date,
      campaign: row.campaign,
      status: row.status
    };

    const existing = pledgePayloadMap.get(payload.externalId);
    if (existing) {
      // Keep the most recent row if duplicates share the same externalId within a single CSV.
      if (payload.date >= existing.date) {
        pledgePayloadMap.set(payload.externalId, payload);
      }
    } else {
      pledgePayloadMap.set(payload.externalId, payload);
    }
  }

  const pledgePayloads = Array.from(pledgePayloadMap.values());

  await upsertPledgesRaw(pledgePayloads);
  await upsertDonorEmails(donorEmailsById);

  await recalculateDonorLifetimeValues();
  await invalidateMetricsForSources([MetricSource.ETAPESTRY]);
  await recordIntegrationSync(MetricSource.ETAPESTRY, { synced: pledgePayloads.length });
  revalidatePath('/');
  revalidatePath('/donors');
  return pledgePayloads.length;
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

  const batchSize = 40;
  for (let index = 0; index < normalizedRows.length; index += batchSize) {
    const batch = normalizedRows.slice(index, index + batchSize);
    await Promise.all(
      batch.map(async (row) => {
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
      })
    );
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

    const legacyEtapestryFormat = source === 'etapestry' ? detectLegacyEtapestryFormat(rows) : false;
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


