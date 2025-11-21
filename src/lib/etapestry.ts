import { MetricSource, PledgeStatus, Prisma } from '@prisma/client';
import { subDays } from 'date-fns';
import { XMLParser } from 'fast-xml-parser';

import { withMetricCache } from '@/lib/cache-metrics';
import { env } from '@/lib/env';
import { prisma } from '@/lib/prisma';
import { invalidateMetricsForSources, recordIntegrationSync } from '@/lib/integration-sync';
import { getMonthlyBuckets } from '@/lib/time-series';

interface FetchParams {
  from: Date;
  to: Date;
}

interface ExternalPledge {
  id: string;
  amount: number;
  date: string;
  campaign?: string;
  status?: string;
  donor: {
    id?: string;
    externalId?: string;
    name: string;
    email?: string;
    phone?: string;
    lastGiftDate?: string;
  };
}

type SoapField = { name?: string; fieldName?: string; value?: unknown };
type SoapRow = Record<string, unknown> & {
  fieldValues?: SoapField[] | { fieldValue?: SoapField[] };
  values?: SoapField[] | { value?: SoapField[] };
};

const allowedStatuses = new Set(Object.values(PledgeStatus));
const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
  textNodeName: 'text',
  removeNSPrefix: false
});
const soapEndpoint = (() => {
  try {
    const url = new URL(env.ETAPESTRY_WSDL_URL);
    url.search = '';
    return url.toString();
  } catch {
    return env.ETAPESTRY_WSDL_URL.replace(/\?wsdl$/i, '').replace(/\?WSDL$/i, '');
  }
})();
let sessionPromise: Promise<string> | null = null;

class SoapFaultError extends Error {
  faultCode?: string;
  detail?: unknown;
  raw?: string;
}

class SoapHttpError extends Error {
  status: number;
  body: string;

  constructor(message: string, status: number, body: string) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildEnvelope(innerBody: string, sessionId?: string) {
  const header = sessionId
    ? `<soap:Header><sessionId xmlns="etapestryAPI/service" xsi:type="xsd:string">${escapeXml(sessionId)}</sessionId></soap:Header>`
    : '<soap:Header/>';

  return `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tns="etapestryAPI/service">
  ${header}
  <soap:Body soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
    ${innerBody}
  </soap:Body>
</soap:Envelope>`;
}

function mapStatus(status?: string | null): PledgeStatus {
  if (!status) return PledgeStatus.PLEDGED;
  const normalized = status.toUpperCase() as PledgeStatus;
  return allowedStatuses.has(normalized) ? normalized : PledgeStatus.PLEDGED;
}

async function sendSoapRequest(method: string, innerBody: string, sessionId?: string) {
  const response = await fetch(soapEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      SOAPAction: method
    },
    body: buildEnvelope(innerBody, sessionId)
  });

  const text = await response.text();

  if (!response.ok) {
    throw new SoapHttpError(`SOAP ${method} failed with status ${response.status}`, response.status, text);
  }

  const body = parseSoapBody(text);
  return body;
}

function parseSoapBody(xml: string) {
  const document = xmlParser.parse(xml);
  const envelope = document['soap:Envelope'] ?? document['env:Envelope'] ?? document.Envelope;
  if (!envelope) {
    throw new Error('Invalid SOAP response: missing envelope');
  }

  const body = envelope['soap:Body'] ?? envelope['env:Body'] ?? envelope.Body;
  if (!body) {
    throw new Error('Invalid SOAP response: missing body');
  }

  const fault = body['soap:Fault'] ?? body['env:Fault'] ?? body.Fault;
  if (fault) {
    const error = new SoapFaultError(fault.faultstring ?? 'SOAP fault');
    error.faultCode = fault.faultcode;
    error.detail = fault.detail;
    error.raw = xml;
    throw error;
  }

  return body as Record<string, unknown>;
}

function findResponseNode(body: Record<string, unknown>, method: string) {
  const expected = method.endsWith('Response') ? method : `${method}Response`;
  for (const [key, value] of Object.entries(body)) {
    const simpleKey = key.includes(':') ? key.split(':').pop() ?? key : key;
    if (simpleKey === expected) {
      return value as Record<string, unknown>;
    }
  }
  return body;
}

function firstText(node: unknown): string | undefined {
  if (node == null) return undefined;
  if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
    return String(node);
  }
  if (Array.isArray(node)) {
    for (const entry of node) {
      const value = firstText(entry);
      if (value) return value;
    }
    return undefined;
  }
  if (typeof node === 'object') {
    for (const value of Object.values(node as Record<string, unknown>)) {
      const result = firstText(value);
      if (result) return result;
    }
  }
  return undefined;
}

function normalizeRecordKeys(record: Record<string, unknown>) {
  const normalized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(record)) {
    const simpleKey = key.includes(':') ? key.split(':').pop() ?? key : key;
    if (normalized[simpleKey] === undefined) {
      normalized[simpleKey] = value;
    } else {
      const current = normalized[simpleKey];
      if (Array.isArray(current)) {
        normalized[simpleKey] = current.concat(value);
      } else {
        normalized[simpleKey] = [current, value];
      }
    }
  }

  return normalized;
}

async function getSessionId() {
  if (!sessionPromise) {
    sessionPromise = login();
  }
  return sessionPromise;
}

async function login(): Promise<string> {
  try {
    const innerBody = `<tns:connect>
  <ConnectRequest_1 xsi:type="tns:ConnectRequest">
    <applicationContext xmlns="" xsi:type="xsd:string">${escapeXml(env.ETAPESTRY_APPLICATION_CONTEXT)}</applicationContext>
    <databaseId xmlns="" xsi:type="xsd:string">${escapeXml(env.ETAPESTRY_DATABASE_ID)}</databaseId>
    <password xmlns="" xsi:type="xsd:string">${escapeXml(env.ETAPESTRY_API_KEY)}</password>
  </ConnectRequest_1>
</tns:connect>`;

    const body = await sendSoapRequest('connect', innerBody);
    const responseNode = findResponseNode(body, 'connectResponse');
    const sessionId = firstText(responseNode);

    if (!sessionId) {
      throw new Error('eTapestry connect did not return a session id.');
    }

    return sessionId;
  } catch (error) {
    sessionPromise = null;
    console.error('Failed to authenticate with eTapestry', error);
    throw error;
  }
}

function invalidateSession() {
  sessionPromise = null;
}

function pledgeSyncRange(range?: Partial<FetchParams>): FetchParams {
  const now = new Date();
  return {
    from: range?.from ?? subDays(now, 90),
    to: range?.to ?? now
  };
}

async function fetchQueryRows(start: number, count: number): Promise<SoapRow[]> {
  const sessionId = await getSessionId();
  const queryString = `${env.ETAPESTRY_QUERY_CATEGORY}:${env.ETAPESTRY_QUERY_NAME}`;

  const innerBody = `<tns:getExistingQueryResults>
  <PagedExistingQueryResultsRequest_1 xsi:type="tns:PagedExistingQueryResultsRequest">
    <clearCache xmlns="" xsi:type="xsd:boolean">false</clearCache>
    <count xmlns="" xsi:type="xsd:int">${count}</count>
    <start xmlns="" xsi:type="xsd:int">${start}</start>
    <accountType xmlns="" xsi:type="xsd:int">0</accountType>
    <query xmlns="" xsi:type="xsd:string">${escapeXml(queryString)}</query>
    <sortOptions xmlns="" xsi:nil="true" />
  </PagedExistingQueryResultsRequest_1>
</tns:getExistingQueryResults>`;

  try {
    const body = await sendSoapRequest('getExistingQueryResults', innerBody, sessionId);
    const responseNode = findResponseNode(body, 'getExistingQueryResultsResponse');
    const resultNode = (responseNode as Record<string, unknown>)?.result ?? responseNode;

    if (!resultNode || typeof resultNode !== 'object') {
      return [];
    }

    return extractRows(resultNode as Record<string, unknown>);
  } catch (error) {
    if (error instanceof SoapFaultError && error.faultCode?.toLowerCase().includes('session')) {
      invalidateSession();
    }
    throw error;
  }
}

function getFieldCollection(entry?: SoapField[] | { fieldValue?: SoapField[] } | { value?: SoapField[] }) {
  if (!entry) return [];
  if (Array.isArray(entry)) return entry;
  if (typeof entry === 'object' && entry !== null) {
    if ('fieldValue' in entry && Array.isArray(entry.fieldValue)) return entry.fieldValue;
    if ('value' in entry && Array.isArray(entry.value)) return entry.value;
  }
  return [];
}

function normalizePrimitive(value: unknown): string | undefined {
  if (value == null) return undefined;
  if (typeof value === 'string' || typeof value === 'number') {
    return String(value);
  }
  if (typeof value === 'object' && value !== null && 'value' in (value as Record<string, unknown>)) {
    return normalizePrimitive((value as Record<string, unknown>).value);
  }
  return undefined;
}

function resolveField(row: SoapRow, candidates: string[]): string | undefined {
  const target = candidates.map((candidate) => candidate.toLowerCase());

  for (const [key, value] of Object.entries(row)) {
    if (target.includes(key.toLowerCase())) {
      const primitive = normalizePrimitive(value);
      if (primitive) return primitive;
    }
  }

  for (const collection of [row.fieldValues, row.values]) {
    const entries = getFieldCollection(collection);
    for (const entry of entries) {
      const key = entry.name ?? entry.fieldName;
      if (key && target.includes(key.toLowerCase())) {
        const primitive = normalizePrimitive(entry.value);
        if (primitive) return primitive;
      }
    }
  }

  return undefined;
}

function parseCurrency(value?: string) {
  if (!value) return undefined;
  const normalized = value.replace(/[^0-9.-]/g, '');
  const amount = Number(normalized);
  return Number.isNaN(amount) ? undefined : amount;
}

function parseDateValue(value?: string) {
  if (!value) return undefined;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed;
}

function mapSoapRowToPledge(row: SoapRow): ExternalPledge | null {
  const id = resolveField(row, ['id', 'pledgeid', 'ref', 'accountref']);
  const amount = parseCurrency(resolveField(row, ['amount', 'pledgeamount', 'giftamount']));
  const date = parseDateValue(resolveField(row, ['date', 'pledgedate', 'giftdate', 'entrydate']));

  if (!id || amount == null || !date) {
    return null;
  }

  const donorName = resolveField(row, ['donorname', 'name', 'accountname']) ?? 'BHIC donor';
  const donorExternalId = resolveField(row, ['donorid', 'accountnumber', 'constituentid']);
  const donorEmail = resolveField(row, ['email', 'emailaddress', 'primaryemail']);
  const donorPhone = resolveField(row, ['phone', 'phonenumber']);
  const lastGiftDate = parseDateValue(resolveField(row, ['lastgiftdate', 'lastgivingdate']));
  const campaign = resolveField(row, ['campaign', 'fund', 'appeal']);
  const status = resolveField(row, ['status', 'pledgestatus']);

  return {
    id,
    amount,
    date: date.toISOString(),
    campaign: campaign ?? undefined,
    status: status ?? undefined,
    donor: {
      externalId: donorExternalId ?? undefined,
      name: donorName,
      email: donorEmail ?? undefined,
      phone: donorPhone ?? undefined,
      lastGiftDate: lastGiftDate ? lastGiftDate.toISOString() : undefined
    }
  };
}

function extractRows(payload: unknown): SoapRow[] {
  if (!payload) return [];
  if (Array.isArray(payload)) {
    return payload.filter((item): item is SoapRow => typeof item === 'object' && item !== null);
  }
  if (typeof payload !== 'object') return [];
  const record = normalizeRecordKeys(payload as Record<string, unknown>);

  const candidates = ['queryResults', 'rows', 'row', 'return', 'value', 'results', 'data', 'collection', 'item', 'items'];
  for (const key of candidates) {
    const nested = record[key];
    if (Array.isArray(nested)) {
      return nested.filter((item): item is SoapRow => typeof item === 'object' && item !== null);
    }
    if (nested && typeof nested === 'object') {
      const rows = extractRows(nested);
      if (rows.length) {
        return rows;
      }
    }
  }

  return [];
}

export async function fetchPledges(range: FetchParams): Promise<ExternalPledge[]> {
  const pageSize = 500;
  let start = 0;
  const collected: ExternalPledge[] = [];

  while (start < 5000) {
    const rows = await fetchQueryRows(start, pageSize);
    const pledges = rows
      .map((row) => mapSoapRowToPledge(row))
      .filter((pledge): pledge is ExternalPledge => Boolean(pledge));

    collected.push(...pledges);

    if (rows.length < pageSize) {
      break;
    }

    start += pageSize;
  }

  return collected.filter((pledge) => {
    const date = new Date(pledge.date);
    return date >= range.from && date <= range.to;
  });
}

export async function syncPledgesToDb(range?: Partial<FetchParams>) {
  const window = pledgeSyncRange(range);
  const pledges = await fetchPledges(window);

  for (const pledge of pledges) {
    const donorExternalId = pledge.donor.externalId ?? pledge.donor.id ?? `etp-${pledge.donor.email ?? pledge.id}`;
    const donor = await prisma.donor.upsert({
      where: { externalId: donorExternalId },
      update: {
        name: pledge.donor.name,
        email: pledge.donor.email,
        phone: pledge.donor.phone
      },
      create: {
        externalId: donorExternalId,
        name: pledge.donor.name,
        email: pledge.donor.email,
        phone: pledge.donor.phone
      }
    });

    await prisma.pledge.upsert({
      where: { externalId: pledge.id },
      update: {
        donorId: donor.id,
        amount: pledge.amount,
        date: new Date(pledge.date),
        campaign: pledge.campaign,
        status: mapStatus(pledge.status)
      },
      create: {
        externalId: pledge.id,
        donorId: donor.id,
        amount: pledge.amount,
        date: new Date(pledge.date),
        campaign: pledge.campaign,
        status: mapStatus(pledge.status)
      }
    });
  }

  await refreshLifetimeValues();

  const summary = { synced: pledges.length };
  await invalidateMetricsForSources([MetricSource.ETAPESTRY]);
  await recordIntegrationSync(MetricSource.ETAPESTRY, summary);

  return summary;
}

async function refreshLifetimeValues() {
  const pledged = await prisma.pledge.groupBy({
    by: ['donorId'],
    _sum: { amount: true }
  });

  const received = await prisma.pledge.groupBy({
    by: ['donorId'],
    where: { status: PledgeStatus.RECEIVED },
    _sum: { amount: true }
  });

  const receivedMap = new Map(received.map((item) => [item.donorId, item._sum.amount ?? new Prisma.Decimal(0)]));

  const recentGifts = await prisma.pledge.findMany({
    where: { status: PledgeStatus.RECEIVED },
    select: { donorId: true, date: true },
    orderBy: { date: 'desc' }
  });

  const lastGiftMap = new Map<string, Date>();
  for (const gift of recentGifts) {
    if (!lastGiftMap.has(gift.donorId)) {
      lastGiftMap.set(gift.donorId, gift.date);
    }
  }

  for (const donor of pledged) {
    await prisma.donor.update({
      where: { id: donor.donorId },
      data: {
        totalPledged: donor._sum.amount ?? new Prisma.Decimal(0),
        totalGiven: receivedMap.get(donor.donorId) ?? new Prisma.Decimal(0),
        lastGiftDate: lastGiftMap.get(donor.donorId)
      }
    });
  }
}

export async function getFundsRaisedSummary(range: FetchParams) {
  return withMetricCache({
    key: `funds:${range.from.toISOString()}:${range.to.toISOString()}`,
    from: range.from,
    to: range.to,
    source: MetricSource.ETAPESTRY,
    fetcher: async () => {
      const pledges = await prisma.pledge.findMany({
        where: { date: { gte: range.from, lte: range.to } },
        select: { amount: true, date: true }
      });

      const buckets = getMonthlyBuckets(12, range.to);
      const series = buckets.map((bucket) => {
        const total = pledges
          .filter((pledge) => pledge.date >= bucket.start && pledge.date <= bucket.end)
          .reduce((sum, pledge) => sum + Number(pledge.amount), 0);
        return { label: bucket.label, total };
      });

      const totalYtd = pledges.reduce((sum, pledge) => sum + Number(pledge.amount), 0);
      return {
        total: totalYtd,
        monthly: series
      };
    }
  });
}

