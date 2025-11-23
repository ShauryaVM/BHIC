module.exports = [
"[project]/src/lib/cache-metrics.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withMetricCache",
    ()=>withMetricCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInMinutes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
;
;
let cacheDisabled = false;
function toJsonValue(value) {
    return value;
}
async function withMetricCache({ key, from, to, source, ttlMinutes = 60, fetcher }) {
    if (cacheDisabled) {
        return fetcher();
    }
    try {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].cachedMetric.findFirst({
            where: {
                key
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        if (existing && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["differenceInMinutes"])(new Date(), existing.createdAt) < ttlMinutes) {
            return existing.value;
        }
        const value = await fetcher();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].cachedMetric.create({
            data: {
                key,
                value: toJsonValue(value),
                fromDate: from,
                toDate: to,
                source
            }
        }).catch((error)=>{
            console.warn('Failed to persist cached metric', error instanceof Error ? error.message : error);
        });
        return value;
    } catch (error) {
        cacheDisabled = true;
        console.warn('Metric cache unavailable, falling back to live fetch', error instanceof Error ? error.message : error);
        return fetcher();
    }
}
}),
"[project]/src/lib/integration-sync.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIntegrationStatuses",
    ()=>getIntegrationStatuses,
    "invalidateMetricsForSources",
    ()=>invalidateMetricsForSources,
    "isIntegrationStale",
    ()=>isIntegrationStale,
    "recordIntegrationSync",
    ()=>recordIntegrationSync
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
;
;
const STATUS_KEYS = {
    [__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY]: 'integration:etapestry',
    [__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE]: 'integration:eventbrite',
    [__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].GA4]: null,
    [__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].INTERNAL]: null
};
const keyFor = (source)=>{
    const key = STATUS_KEYS[source];
    if (!key) {
        throw new Error(`Unsupported integration source ${source}`);
    }
    return key;
};
async function recordIntegrationSync(source, payload) {
    if (!STATUS_KEYS[source]) {
        return;
    }
    const now = new Date();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].cachedMetric.create({
        data: {
            key: keyFor(source),
            value: {
                ...payload,
                timestamp: now.toISOString(),
                source
            },
            fromDate: now,
            toDate: now,
            source: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].INTERNAL
        }
    });
}
async function getIntegrationStatuses() {
    const keys = [
        'integration:etapestry',
        'integration:eventbrite'
    ];
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].cachedMetric.findMany({
        where: {
            key: {
                in: keys
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    const latest = new Map();
    for (const row of rows){
        if (!latest.has(row.key)) {
            latest.set(row.key, row);
        }
    }
    const formatStatus = (key)=>{
        const entry = latest.get(key);
        if (!entry) return null;
        const value = entry.value;
        const timestamp = value?.timestamp && typeof value.timestamp === 'string' ? value.timestamp : entry.createdAt.toISOString();
        return {
            synced: typeof value?.synced === 'number' ? value.synced : undefined,
            error: typeof value?.error === 'string' ? value.error : undefined,
            timestamp
        };
    };
    return {
        etapestry: formatStatus('integration:etapestry'),
        eventbrite: formatStatus('integration:eventbrite')
    };
}
function isIntegrationStale(status, options = {}) {
    const { maxAgeHours = 12 } = options;
    if (!status) return true;
    if (status.error) return true;
    const timestamp = new Date(status.timestamp);
    if (Number.isNaN(timestamp.getTime())) return true;
    const ageMs = Date.now() - timestamp.getTime();
    return ageMs > maxAgeHours * 60 * 60 * 1000;
}
async function invalidateMetricsForSources(sources) {
    if (!sources.length) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].cachedMetric.deleteMany({
        where: {
            source: {
                in: sources
            }
        }
    });
}
}),
"[project]/src/lib/time-series.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMonthlyBuckets",
    ()=>getMonthlyBuckets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-rsc] (ecmascript)");
;
function getMonthlyBuckets(months = 12, anchor = new Date()) {
    const buckets = [];
    const anchorStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfMonth"])(anchor);
    for(let i = months - 1; i >= 0; i -= 1){
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subMonths"])(anchorStart, i);
        buckets.push({
            key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(start, 'yyyy-MM'),
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(start, 'MMM yy'),
            start,
            end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["endOfMonth"])(start)
        });
    }
    return buckets;
}
}),
"[project]/src/lib/etapestry.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchPledges",
    ()=>fetchPledges,
    "getFundsRaisedSummary",
    ()=>getFundsRaisedSummary,
    "normalizePledgeStatus",
    ()=>normalizePledgeStatus,
    "recalculateDonorLifetimeValues",
    ()=>recalculateDonorLifetimeValues,
    "syncPledgesToDb",
    ()=>syncPledgesToDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__XMLParser$3e$__ = __turbopack_context__.i("[project]/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-rsc] (ecmascript) <export default as XMLParser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache-metrics.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/integration-sync.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time-series.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const allowedStatuses = new Set(Object.values(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"]));
const xmlParser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__XMLParser$3e$__["XMLParser"]({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: 'text',
    removeNSPrefix: false
});
const soapEndpoint = (()=>{
    try {
        const url = new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_WSDL_URL);
        url.search = '';
        return url.toString();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_WSDL_URL.replace(/\?wsdl$/i, '').replace(/\?WSDL$/i, '');
    }
})();
let sessionPromise = null;
class SoapFaultError extends Error {
    faultCode;
    detail;
    raw;
}
class SoapHttpError extends Error {
    status;
    body;
    constructor(message, status, body){
        super(message);
        this.status = status;
        this.body = body;
    }
}
function escapeXml(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
function buildEnvelope(innerBody, sessionId) {
    const header = sessionId ? `<soap:Header><sessionId xmlns="etapestryAPI/service" xsi:type="xsd:string">${escapeXml(sessionId)}</sessionId></soap:Header>` : '<soap:Header/>';
    return `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tns="etapestryAPI/service">
  ${header}
  <soap:Body soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
    ${innerBody}
  </soap:Body>
</soap:Envelope>`;
}
function normalizePledgeStatus(status) {
    if (!status) return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"].PLEDGED;
    const normalized = status.toUpperCase();
    return allowedStatuses.has(normalized) ? normalized : __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"].PLEDGED;
}
async function sendSoapRequest(method, innerBody, sessionId) {
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
function parseSoapBody(xml) {
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
    return body;
}
function findResponseNode(body, method) {
    const expected = method.endsWith('Response') ? method : `${method}Response`;
    for (const [key, value] of Object.entries(body)){
        const simpleKey = key.includes(':') ? key.split(':').pop() ?? key : key;
        if (simpleKey === expected) {
            return value;
        }
    }
    return body;
}
function firstText(node) {
    if (node == null) return undefined;
    if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
        return String(node);
    }
    if (Array.isArray(node)) {
        for (const entry of node){
            const value = firstText(entry);
            if (value) return value;
        }
        return undefined;
    }
    if (typeof node === 'object') {
        for (const value of Object.values(node)){
            const result = firstText(value);
            if (result) return result;
        }
    }
    return undefined;
}
function normalizeRecordKeys(record) {
    const normalized = {};
    for (const [key, value] of Object.entries(record)){
        const simpleKey = key.includes(':') ? key.split(':').pop() ?? key : key;
        if (normalized[simpleKey] === undefined) {
            normalized[simpleKey] = value;
        } else {
            const current = normalized[simpleKey];
            if (Array.isArray(current)) {
                normalized[simpleKey] = current.concat(value);
            } else {
                normalized[simpleKey] = [
                    current,
                    value
                ];
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
async function login() {
    try {
        const innerBody = `<tns:connect>
  <ConnectRequest_1 xsi:type="tns:ConnectRequest">
    <applicationContext xmlns="" xsi:type="xsd:string">${escapeXml(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_APPLICATION_CONTEXT)}</applicationContext>
    <databaseId xmlns="" xsi:type="xsd:string">${escapeXml(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_DATABASE_ID)}</databaseId>
    <password xmlns="" xsi:type="xsd:string">${escapeXml(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_API_KEY)}</password>
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
function pledgeSyncRange(range) {
    const now = new Date();
    return {
        from: range?.from ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subDays"])(now, 90),
        to: range?.to ?? now
    };
}
async function fetchQueryRows(start, count) {
    const sessionId = await getSessionId();
    const queryString = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_QUERY_CATEGORY}:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_QUERY_NAME}`;
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
        const resultNode = responseNode?.result ?? responseNode;
        if (!resultNode || typeof resultNode !== 'object') {
            return [];
        }
        return extractRows(resultNode);
    } catch (error) {
        if (error instanceof SoapFaultError && error.faultCode?.toLowerCase().includes('session')) {
            invalidateSession();
        }
        throw error;
    }
}
function getFieldCollection(entry) {
    if (!entry) return [];
    if (Array.isArray(entry)) return entry;
    if (typeof entry === 'object' && entry !== null) {
        if ('fieldValue' in entry && Array.isArray(entry.fieldValue)) return entry.fieldValue;
        if ('value' in entry && Array.isArray(entry.value)) return entry.value;
    }
    return [];
}
function normalizePrimitive(value) {
    if (value == null) return undefined;
    if (typeof value === 'string' || typeof value === 'number') {
        return String(value);
    }
    if (typeof value === 'object' && value !== null && 'value' in value) {
        return normalizePrimitive(value.value);
    }
    return undefined;
}
function resolveField(row, candidates) {
    const target = candidates.map((candidate)=>candidate.toLowerCase());
    for (const [key, value] of Object.entries(row)){
        if (target.includes(key.toLowerCase())) {
            const primitive = normalizePrimitive(value);
            if (primitive) return primitive;
        }
    }
    for (const collection of [
        row.fieldValues,
        row.values
    ]){
        const entries = getFieldCollection(collection);
        for (const entry of entries){
            const key = entry.name ?? entry.fieldName;
            if (key && target.includes(key.toLowerCase())) {
                const primitive = normalizePrimitive(entry.value);
                if (primitive) return primitive;
            }
        }
    }
    return undefined;
}
function parseCurrency(value) {
    if (!value) return undefined;
    const normalized = value.replace(/[^0-9.-]/g, '');
    const amount = Number(normalized);
    return Number.isNaN(amount) ? undefined : amount;
}
function parseDateValue(value) {
    if (!value) return undefined;
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return undefined;
    return parsed;
}
function mapSoapRowToPledge(row) {
    const id = resolveField(row, [
        'id',
        'pledgeid',
        'ref',
        'accountref'
    ]);
    const amount = parseCurrency(resolveField(row, [
        'amount',
        'pledgeamount',
        'giftamount'
    ]));
    const date = parseDateValue(resolveField(row, [
        'date',
        'pledgedate',
        'giftdate',
        'entrydate'
    ]));
    if (!id || amount == null || !date) {
        return null;
    }
    const donorName = resolveField(row, [
        'donorname',
        'name',
        'accountname'
    ]) ?? 'BHIC donor';
    const donorExternalId = resolveField(row, [
        'donorid',
        'accountnumber',
        'constituentid'
    ]);
    const donorEmail = resolveField(row, [
        'email',
        'emailaddress',
        'primaryemail'
    ]);
    const donorPhone = resolveField(row, [
        'phone',
        'phonenumber'
    ]);
    const lastGiftDate = parseDateValue(resolveField(row, [
        'lastgiftdate',
        'lastgivingdate'
    ]));
    const campaign = resolveField(row, [
        'campaign',
        'fund',
        'appeal'
    ]);
    const status = resolveField(row, [
        'status',
        'pledgestatus'
    ]);
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
function extractRows(payload) {
    if (!payload) return [];
    if (Array.isArray(payload)) {
        return payload.filter((item)=>typeof item === 'object' && item !== null);
    }
    if (typeof payload !== 'object') return [];
    const record = normalizeRecordKeys(payload);
    const candidates = [
        'queryResults',
        'rows',
        'row',
        'return',
        'value',
        'results',
        'data',
        'collection',
        'item',
        'items'
    ];
    for (const key of candidates){
        const nested = record[key];
        if (Array.isArray(nested)) {
            return nested.filter((item)=>typeof item === 'object' && item !== null);
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
async function fetchPledges(range) {
    const pageSize = 500;
    let start = 0;
    const collected = [];
    while(start < 5000){
        const rows = await fetchQueryRows(start, pageSize);
        const pledges = rows.map((row)=>mapSoapRowToPledge(row)).filter((pledge)=>Boolean(pledge));
        collected.push(...pledges);
        if (rows.length < pageSize) {
            break;
        }
        start += pageSize;
    }
    return collected.filter((pledge)=>{
        const date = new Date(pledge.date);
        return date >= range.from && date <= range.to;
    });
}
async function syncPledgesToDb(range) {
    const window = pledgeSyncRange(range);
    const pledges = await fetchPledges(window);
    for (const pledge of pledges){
        const donorExternalId = pledge.donor.externalId ?? pledge.donor.id ?? `etp-${pledge.donor.email ?? pledge.id}`;
        const donor = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].donor.upsert({
            where: {
                externalId: donorExternalId
            },
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pledge.upsert({
            where: {
                externalId: pledge.id
            },
            update: {
                donorId: donor.id,
                amount: pledge.amount,
                date: new Date(pledge.date),
                campaign: pledge.campaign,
                status: normalizePledgeStatus(pledge.status)
            },
            create: {
                externalId: pledge.id,
                donorId: donor.id,
                amount: pledge.amount,
                date: new Date(pledge.date),
                campaign: pledge.campaign,
                status: normalizePledgeStatus(pledge.status)
            }
        });
    }
    await recalculateDonorLifetimeValues();
    const summary = {
        synced: pledges.length
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateMetricsForSources"])([
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY
    ]);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordIntegrationSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY, summary);
    return summary;
}
async function recalculateDonorLifetimeValues() {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$executeRaw`
    WITH donor_ids AS (
      SELECT DISTINCT "donorId"
      FROM "Pledge"
      WHERE "donorId" IS NOT NULL
    ),
    pledged AS (
      SELECT "donorId", SUM("amount") AS total
      FROM "Pledge"
      GROUP BY "donorId"
    ),
    received AS (
      SELECT "donorId", SUM("amount") AS total
      FROM "Pledge"
      WHERE "status" = ${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"].RECEIVED}::"PledgeStatus"
      GROUP BY "donorId"
    ),
    last_gift AS (
      SELECT DISTINCT ON ("donorId") "donorId", "date"
      FROM "Pledge"
      WHERE "status" = ${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"].RECEIVED}::"PledgeStatus"
      ORDER BY "donorId", "date" DESC
    )
    UPDATE "Donor" AS d
    SET
      "totalPledged" = COALESCE(p.total, 0),
      "totalGiven" = COALESCE(r.total, 0),
      "lastGiftDate" = l.date
    FROM donor_ids ids
    LEFT JOIN pledged p ON p."donorId" = ids."donorId"
    LEFT JOIN received r ON r."donorId" = ids."donorId"
    LEFT JOIN last_gift l ON l."donorId" = ids."donorId"
    WHERE d."id" = ids."donorId";
  `;
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$executeRaw`
    UPDATE "Donor" AS d
    SET
      "totalPledged" = 0,
      "totalGiven" = 0,
      "lastGiftDate" = NULL
    WHERE NOT EXISTS (SELECT 1 FROM "Pledge" AS p WHERE p."donorId" = d."id");
  `;
}
async function getFundsRaisedSummary(range) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withMetricCache"])({
        key: `funds:${range.from.toISOString()}:${range.to.toISOString()}`,
        from: range.from,
        to: range.to,
        source: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY,
        fetcher: async ()=>{
            const pledges = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pledge.findMany({
                where: {
                    date: {
                        gte: range.from,
                        lte: range.to
                    }
                },
                select: {
                    amount: true,
                    date: true
                }
            });
            const buckets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMonthlyBuckets"])(12, range.to);
            const series = buckets.map((bucket)=>{
                const total = pledges.filter((pledge)=>pledge.date >= bucket.start && pledge.date <= bucket.end).reduce((sum, pledge)=>sum + Number(pledge.amount), 0);
                return {
                    label: bucket.label,
                    total
                };
            });
            const totalYtd = pledges.reduce((sum, pledge)=>sum + Number(pledge.amount), 0);
            return {
                total: totalYtd,
                monthly: series
            };
        }
    });
}
}),
"[project]/src/lib/eventbrite.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchEvents",
    ()=>fetchEvents,
    "getEventKpis",
    ()=>getEventKpis,
    "normalizeEventStatus",
    ()=>normalizeEventStatus,
    "syncEventsToDb",
    ()=>syncEventsToDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache-metrics.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/integration-sync.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const API_BASE = 'https://www.eventbriteapi.com/v3';
function withAuthHeaders() {
    return {
        Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].EVENTBRITE_API_TOKEN}`,
        'Content-Type': 'application/json'
    };
}
function rangeWithDefault(range) {
    const now = new Date();
    return {
        from: range?.from ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subDays"])(now, 120),
        to: range?.to ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(now, 30)
    };
}
function normalizeEventStatus(status) {
    switch(status?.toLowerCase()){
        case 'live':
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["EventStatus"].PUBLISHED;
        case 'completed':
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["EventStatus"].COMPLETED;
        case 'canceled':
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["EventStatus"].CANCELLED;
        default:
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["EventStatus"].DRAFT;
    }
}
async function fetchEventAttendees(eventId) {
    const attendees = [];
    let continuation;
    let page = 1;
    while(true){
        const url = new URL(`/events/${eventId}/attendees/`, API_BASE);
        url.searchParams.set('status', 'attending');
        url.searchParams.set('expand', 'profile');
        if (continuation) {
            url.searchParams.set('continuation', continuation);
        } else {
            url.searchParams.set('page', String(page));
        }
        const response = await fetch(url, {
            headers: withAuthHeaders(),
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch attendees for ${eventId}: ${response.statusText}`);
        }
        const body = await response.json();
        attendees.push(...body.attendees ?? []);
        const pagination = body.pagination;
        if (pagination?.has_more_items) {
            if (pagination.continuation) {
                continuation = pagination.continuation;
            } else {
                continuation = undefined;
                page += 1;
            }
        } else {
            break;
        }
    }
    return attendees;
}
async function fetchEvents(range) {
    const events = [];
    let continuation;
    let page = 1;
    while(true){
        const url = new URL(`/organizations/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].EVENTBRITE_ORGANIZATION_ID}/events/`, API_BASE);
        url.searchParams.set('order_by', 'start_desc');
        url.searchParams.set('time_filter', 'custom');
        url.searchParams.set('start_date.range_start', range.from.toISOString());
        url.searchParams.set('start_date.range_end', range.to.toISOString());
        url.searchParams.set('expand', 'ticket_availability,venue');
        url.searchParams.set('page_size', '50');
        if (continuation) {
            url.searchParams.set('continuation', continuation);
        } else {
            url.searchParams.set('page', String(page));
        }
        const response = await fetch(url, {
            headers: withAuthHeaders(),
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch Eventbrite events: ${response.statusText}`);
        }
        const data = await response.json();
        events.push(...data.events ?? []);
        const pagination = data.pagination;
        if (pagination?.has_more_items) {
            if (pagination.continuation) {
                continuation = pagination.continuation;
            } else {
                continuation = undefined;
                page += 1;
            }
        } else {
            break;
        }
    }
    const withAttendees = await Promise.all(events.map(async (event)=>({
            ...event,
            attendees: await fetchEventAttendees(event.id)
        })));
    return withAttendees;
}
async function syncEventsToDb(range) {
    const window = rangeWithDefault(range);
    const events = await fetchEvents(window);
    for (const event of events){
        const base = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.upsert({
            where: {
                externalId: event.id
            },
            update: {
                name: event.name?.text ?? 'Untitled Event',
                startDate: new Date(event.start.utc),
                endDate: new Date(event.end.utc ?? event.start.utc),
                venue: event.venue?.name,
                status: normalizeEventStatus(event.status),
                ticketsTotal: event.ticket_availability?.capacity ?? 0
            },
            create: {
                externalId: event.id,
                name: event.name?.text ?? 'Untitled Event',
                startDate: new Date(event.start.utc),
                endDate: new Date(event.end.utc ?? event.start.utc),
                venue: event.venue?.name,
                status: normalizeEventStatus(event.status),
                ticketsTotal: event.ticket_availability?.capacity ?? 0
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].eventAttendance.deleteMany({
            where: {
                eventId: base.id
            }
        });
        let ticketsSold = 0;
        let grossRevenue = 0;
        const attendancePayload = [];
        for (const attendee of event.attendees){
            const email = attendee.profile?.email;
            if (!email) continue;
            const ticketsCount = attendee.quantity ?? 1;
            const orderTotal = Number(attendee.cost?.major_value ?? 0);
            ticketsSold += ticketsCount;
            grossRevenue += orderTotal;
            const donor = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].donor.findUnique({
                where: {
                    email
                }
            });
            attendancePayload.push({
                eventId: base.id,
                donorId: donor?.id ?? null,
                attendeeEmail: email,
                ticketType: attendee.ticket_class_name ?? 'General',
                ticketsCount,
                orderTotal
            });
        }
        if (attendancePayload.length) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].eventAttendance.createMany({
                data: attendancePayload
            });
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.update({
            where: {
                id: base.id
            },
            data: {
                ticketsSold,
                grossRevenue,
                netRevenue: grossRevenue * 0.88
            }
        });
    }
    const summary = {
        synced: events.length
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateMetricsForSources"])([
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE
    ]);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordIntegrationSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE, summary);
    return summary;
}
async function getEventKpis(range) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withMetricCache"])({
        key: `events:${range.from.toISOString()}:${range.to.toISOString()}`,
        from: range.from,
        to: range.to,
        source: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE,
        fetcher: async ()=>{
            const events = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.findMany({
                where: {
                    startDate: {
                        gte: range.from,
                        lte: range.to
                    }
                }
            });
            const eventsCount = events.length;
            const ticketsSold = events.reduce((sum, event)=>sum + event.ticketsSold, 0);
            const grossRevenue = events.reduce((sum, event)=>sum + Number(event.grossRevenue), 0);
            const netRevenue = events.reduce((sum, event)=>sum + Number(event.netRevenue), 0);
            return {
                eventsCount,
                ticketsSold,
                grossRevenue,
                netRevenue
            };
        }
    });
}
}),
"[project]/src/app/(dashboard)/actions/sync-integrations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00e796c46ae6800f9326b0250049149bc0be344449":"syncIntegrationsAction"},"",""] */ __turbopack_context__.s([
    "syncIntegrationsAction",
    ()=>syncIntegrationsAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$etapestry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/etapestry.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventbrite$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/eventbrite.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/integration-sync.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function syncIntegrationsAction() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authOptions"]);
    const emptyResult = {
        etapestry: null,
        eventbrite: null
    };
    if (!session) {
        return {
            success: false,
            errors: [
                "Authentication required"
            ],
            result: emptyResult
        };
    }
    if (session.user.role !== "ADMIN") {
        return {
            success: false,
            errors: [
                "Admin access required"
            ],
            result: emptyResult
        };
    }
    const result = {
        etapestry: null,
        eventbrite: null
    };
    const errors = [];
    try {
        result.etapestry = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$etapestry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncPledgesToDb"])();
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown eTapestry error";
        errors.push(`eTapestry: ${message}`);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordIntegrationSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY, {
            error: message
        });
    }
    try {
        result.eventbrite = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventbrite$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncEventsToDb"])();
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown Eventbrite error";
        errors.push(`Eventbrite: ${message}`);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordIntegrationSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE, {
            error: message
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/events");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/donors");
    if (errors.length) {
        return {
            success: false,
            errors,
            result
        };
    }
    return {
        success: true,
        result
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    syncIntegrationsAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(syncIntegrationsAction, "00e796c46ae6800f9326b0250049149bc0be344449", null);
}),
"[project]/src/app/(dashboard)/actions/manual-import.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"600ed49537ea6f4783ff1d6d42249a3194c15ba525":"manualImportAction"},"",""] */ __turbopack_context__.s([
    "manualImportAction",
    ()=>manualImportAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$sync$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/sync.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$etapestry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/etapestry.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventbrite$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/eventbrite.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/integration-sync.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function extractEmails(raw) {
    if (!raw) return [];
    return raw.split(/\r?\n|[,;]/).map((value)=>value.trim().toLowerCase()).filter(Boolean);
}
function normalizeName(value) {
    return value.trim().toLowerCase();
}
function normalizePhone(value) {
    if (!value) return null;
    const digits = value.replace(/\D+/g, '');
    return digits || null;
}
const pledgeRowSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    pledge_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'pledge_id is required'),
    donor_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'donor_name is required'),
    donor_email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    donor_phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    donor_address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    donor_city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    donor_state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    donor_postal_code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    amount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'amount is required'),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'date is required'),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    campaign: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const eventRowSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    event_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'event_id is required'),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'name is required'),
    start_date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'start_date is required'),
    end_date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    venue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    tickets_total: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    tickets_sold: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    gross_revenue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    net_revenue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const eventbriteOrderSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    event_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'event_id is required'),
    event_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'event_name is required'),
    event_start_date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'event_start_date is required'),
    event_start_time: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    event_timezone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    event_location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    order_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    order_date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    ticket_quantity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    gross_sales: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    ticket_revenue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    add_ons_revenue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    ticket_add_ons_revenue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    net_sales: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    payment_status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const etapestryExportSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'date is required'),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    account_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'account_name is required'),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    pledged: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    received: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    fund: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    state_province: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    postal_code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    full_address_with_country_single_line: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
function normalizeHeaderKey(key) {
    return key.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}
function parseCsv(text) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$sync$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(text, {
        columns: (header)=>header.map(normalizeHeaderKey),
        skip_empty_lines: true,
        trim: true
    });
}
function parseCurrency(value) {
    if (!value) return 0;
    const normalized = value.replace(/[$,\s]/g, '');
    const amount = Number(normalized);
    if (Number.isNaN(amount)) {
        throw new Error(`Invalid currency value "${value}"`);
    }
    return amount;
}
function parseInteger(value) {
    if (!value) return 0;
    const num = Number(value);
    if (!Number.isFinite(num)) {
        throw new Error(`Invalid numeric value "${value}"`);
    }
    return Math.round(num);
}
function formatCurrencyNumber(value) {
    return (Math.round(value * 100) / 100).toFixed(2);
}
function isLegacyEtapestryRow(row) {
    if (!row) return false;
    const hasAccountName = Boolean(row.account_name);
    const hasPledgeId = 'pledge_id' in row;
    return hasAccountName && !hasPledgeId;
}
function isSummaryLegacyRow(row) {
    return !row.date && !row.account_name && !row.type && !row.fund;
}
function detectLegacyEtapestryFormat(rows) {
    for (const row of rows){
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
function deriveManualDonorKey(row) {
    const emails = extractEmails(row.donor_email);
    if (emails.length) {
        return `manual-etp:email:${emails[0]}`;
    }
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha1').update(`${row.donor_name.trim().toLowerCase()}|${row.donor_phone?.replace(/\D+/g, '') ?? ''}`).digest('hex').slice(0, 16);
    return `manual-etp:acct:${token}`;
}
function chunkArray(items, size) {
    if (size <= 0) return [
        items
    ];
    const chunks = [];
    for(let index = 0; index < items.length; index += size){
        chunks.push(items.slice(index, index + size));
    }
    return chunks;
}
function deriveLegacyPledgeId(row) {
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha1').update([
        row.account_name ?? '',
        row.date ?? '',
        row.type ?? '',
        row.fund ?? '',
        row.received ?? row.pledged ?? ''
    ].join('|')).digest('hex');
    return `legacy-etp:${token}`;
}
function mapLegacyRow(row) {
    const receivedAmount = parseCurrency(row.received);
    const pledgedAmount = parseCurrency(row.pledged);
    const hasReceived = receivedAmount > 0;
    const amount = hasReceived ? row.received?.trim() || row.pledged?.trim() || '0' : row.pledged?.trim() || row.received?.trim() || '0';
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
async function upsertManualDonors(payloads) {
    if (!payloads.length) {
        return [];
    }
    const results = [];
    for (const chunk of chunkArray(payloads, 400)){
        if (!chunk.length) continue;
        const values = chunk.map((donor)=>__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].sql`(${donor.id}, ${donor.externalId}, ${donor.name}, ${donor.email}, ${donor.phone}, ${donor.address}, ${donor.city}, ${donor.state}, ${donor.postalCode}, ${new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].Decimal(donor.totalPledged)}, ${new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].Decimal(donor.totalGiven)}, ${donor.lastGiftDate}, NOW())`);
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
      INSERT INTO "Donor" ("id","externalId","name","email","phone","address","city","state","postalCode","totalPledged","totalGiven","lastGiftDate","updatedAt")
      VALUES ${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].join(values)}
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
async function upsertDonorEmails(entries) {
    if (!entries.size) return;
    const payloads = [];
    for (const [donorId, emails] of entries.entries()){
        for (const email of emails){
            payloads.push({
                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                donorId,
                email
            });
        }
    }
    for (const chunk of chunkArray(payloads, 400)){
        if (!chunk.length) continue;
        const values = chunk.map((item)=>__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].sql`(${item.id}, ${item.donorId}, ${item.email})`);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$executeRaw`
      INSERT INTO "DonorEmail" ("id","donorId","email")
      VALUES ${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].join(values)}
      ON CONFLICT ("donorId","email") DO NOTHING
    `;
    }
}
async function upsertPledgesRaw(payloads) {
    if (!payloads.length) return;
    for (const chunk of chunkArray(payloads, 400)){
        if (!chunk.length) continue;
        const values = chunk.map((pledge)=>__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].sql`(${pledge.id}, ${pledge.externalId}, ${pledge.donorId}, ${pledge.amount}, ${pledge.date}, ${pledge.campaign}, ${pledge.status}::"PledgeStatus", NOW(), NOW())`);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$executeRaw`
      INSERT INTO "Pledge" ("id","externalId","donorId","amount","date","campaign","status","createdAt","updatedAt")
      VALUES ${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].join(values)}
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
function parseLegacyEventbriteRows(rows) {
    const parsed = [];
    for(let index = 0; index < rows.length; index += 1){
        const row = rows[index];
        if (!row.event_id) {
            continue;
        }
        const result = eventbriteOrderSchema.safeParse(row);
        if (!result.success) {
            throw new Error(`Row ${index + 2}: ${result.error.issues[0]?.message ?? 'Invalid Eventbrite order row'}`);
        }
        parsed.push({
            ...result.data,
            __rowNumber: index + 2
        });
    }
    if (!parsed.length) {
        throw new Error('No Eventbrite rows were detected in the CSV.');
    }
    return parsed;
}
function aggregateEventbriteOrders(rows) {
    const grouped = new Map();
    for (const entry of rows){
        const tickets = parseInteger(entry.ticket_quantity);
        const gross = parseCurrency(entry.ticket_add_ons_revenue ?? entry.ticket_revenue ?? entry.gross_sales) ?? 0;
        const net = parseCurrency(entry.net_sales ?? entry.ticket_add_ons_revenue ?? entry.ticket_revenue) ?? gross;
        if (!grouped.has(entry.event_id)) {
            grouped.set(entry.event_id, {
                row: entry,
                tickets,
                gross,
                net,
                rowNumber: entry.__rowNumber
            });
        } else {
            const bucket = grouped.get(entry.event_id);
            bucket.tickets += tickets;
            bucket.gross += gross;
            bucket.net += net;
            bucket.rowNumber = Math.min(bucket.rowNumber, entry.__rowNumber);
        }
    }
    return Array.from(grouped.values()).map(({ row, tickets, gross, net, rowNumber })=>({
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
async function importPledges(rows, options = {}) {
    const legacyFormat = options.legacyFormat ?? false;
    const normalizedRows = [];
    for(let index = 0; index < rows.length; index += 1){
        const row = rows[index];
        if (legacyFormat) {
            if (isSummaryLegacyRow(row)) continue;
            const parsed = etapestryExportSchema.safeParse(row);
            if (!parsed.success) {
                throw new Error(`Row ${index + 2}: ${parsed.error.issues[0]?.message ?? 'Invalid pledge row'}`);
            }
            normalizedRows.push({
                rowNumber: index + 2,
                data: mapLegacyRow(parsed.data)
            });
        } else {
            const parsed = pledgeRowSchema.safeParse(row);
            if (!parsed.success) {
                throw new Error(`Row ${index + 2}: ${parsed.error.issues[0]?.message ?? 'Invalid pledge row'}`);
            }
            normalizedRows.push({
                rowNumber: index + 2,
                data: parsed.data
            });
        }
    }
    if (!normalizedRows.length) {
        return 0;
    }
    const prepared = normalizedRows.map(({ rowNumber, data })=>{
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
            status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$etapestry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizePledgeStatus"])(data.status)
        };
    });
    const emailRows = prepared.filter((row)=>row.donorEmailRaw);
    const uniqueEmails = Array.from(new Set(emailRows.map((row)=>row.donorEmailRaw)));
    const existingEmailDonors = uniqueEmails.length ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].donor.findMany({
        where: {
            email: {
                in: uniqueEmails
            }
        },
        select: {
            id: true,
            email: true
        }
    }) : [];
    const emailToDonorId = new Map(existingEmailDonors.filter((donor)=>donor.email).map((donor)=>[
            donor.email.trim().toLowerCase(),
            donor.id
        ]));
    const manualDonorPayloads = [];
    const manualDonorMap = new Map();
    const donorIdByKey = new Map();
    const phoneTargets = Array.from(new Set(prepared.map((row)=>row.donorPhoneDigits).filter((value)=>Boolean(value))));
    const existingPhoneDonors = phoneTargets.length ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].donor.findMany({
        where: {
            phone: {
                in: phoneTargets
            }
        },
        select: {
            id: true,
            name: true,
            phone: true
        }
    }) : [];
    const namePhoneToDonorId = new Map();
    for (const donor of existingPhoneDonors){
        const phoneDigits = normalizePhone(donor.phone);
        if (!phoneDigits) continue;
        const nameKey = normalizeName(donor.name);
        namePhoneToDonorId.set(`${nameKey}|${phoneDigits}`, donor.id);
    }
    for (const donor of existingEmailDonors){
        if (donor.email) {
            donorIdByKey.set(`manual-etp:email:${donor.email.trim().toLowerCase()}`, donor.id);
        }
    }
    for (const row of prepared){
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
            const payload = {
                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
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
                existing.lastGiftDate = existing.lastGiftDate && existing.lastGiftDate > row.date ? existing.lastGiftDate : row.date;
            }
            for (const email of row.donorEmails){
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
        for (const donor of inserted){
            donorIdByKey.set(donor.externalId, donor.id);
        }
    }
    const pledgePayloadMap = new Map();
    const donorEmailsById = new Map();
    for (const row of prepared){
        const donorKey = row.donorEmail && emailToDonorId.has(row.donorEmail) ? `manual-etp:email:${row.donorEmail}` : row.donorKey;
        const donorId = donorIdByKey.get(donorKey);
        if (!donorId) {
            throw new Error(`Unable to resolve donor for row ${row.rowNumber}`);
        }
        if (row.donorEmails.length) {
            if (!donorEmailsById.has(donorId)) {
                donorEmailsById.set(donorId, new Set());
            }
            const bucket = donorEmailsById.get(donorId);
            for (const email of row.donorEmails){
                bucket.add(email);
            }
        }
        const payload = {
            id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
            externalId: row.pledgeId,
            donorId,
            amount: new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].Decimal(row.amount),
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$etapestry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recalculateDonorLifetimeValues"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateMetricsForSources"])([
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY
    ]);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordIntegrationSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY, {
        synced: pledgePayloads.length
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/donors');
    return pledgePayloads.length;
}
function isEventbriteOrderRow(row) {
    if (!row) return false;
    return Boolean(row.event_id && row.order_id);
}
async function importEvents(rows, options = {}) {
    let imported = 0;
    const legacyFormat = options.legacyFormat ?? false;
    const normalizedRows = [];
    if (legacyFormat) {
        const parsedOrders = parseLegacyEventbriteRows(rows);
        normalizedRows.push(...aggregateEventbriteOrders(parsedOrders));
    } else {
        for(let index = 0; index < rows.length; index += 1){
            const result = eventRowSchema.safeParse(rows[index]);
            if (!result.success) {
                throw new Error(`Row ${index + 2}: ${result.error.issues[0]?.message ?? 'Invalid event row'}`);
            }
            normalizedRows.push({
                ...result.data,
                __rowNumber: index + 2
            });
        }
    }
    const batchSize = 40;
    for(let index = 0; index < normalizedRows.length; index += batchSize){
        const batch = normalizedRows.slice(index, index + batchSize);
        await Promise.all(batch.map(async (row)=>{
            const rowPrefix = row.__rowNumber ? `Row ${row.__rowNumber}` : `Event ${row.name}`;
            const startDate = new Date(row.start_date);
            const endDate = new Date(row.end_date || row.start_date);
            if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
                throw new Error(`${rowPrefix}: Invalid start/end date`);
            }
            const ticketsTotal = parseInteger(row.tickets_total);
            const ticketsSold = parseInteger(row.tickets_sold);
            const grossRevenue = parseCurrency(row.gross_revenue);
            const netRevenue = row.net_revenue ? parseCurrency(row.net_revenue) : Math.round(grossRevenue * 0.88 * 100) / 100;
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.upsert({
                where: {
                    externalId: row.event_id
                },
                update: {
                    name: row.name,
                    startDate,
                    endDate,
                    venue: row.venue?.trim() || null,
                    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventbrite$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeEventStatus"])(row.status),
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
                    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventbrite$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeEventStatus"])(row.status),
                    ticketsTotal,
                    ticketsSold,
                    grossRevenue,
                    netRevenue
                }
            });
            imported += 1;
        }));
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateMetricsForSources"])([
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE
    ]);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordIntegrationSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE, {
        synced: imported
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/events');
    return imported;
}
async function manualImportAction(_prevState, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authOptions"]);
    if (!session) {
        return {
            success: false,
            message: 'You must be signed in to import data.'
        };
    }
    if (session.user.role !== 'ADMIN') {
        return {
            success: false,
            message: 'Admin access required for manual imports.'
        };
    }
    const source = formData.get('source');
    if (source !== 'etapestry' && source !== 'eventbrite') {
        return {
            success: false,
            message: 'Select a source to import.'
        };
    }
    const file = formData.get('file');
    if (!(file instanceof File) || file.size === 0) {
        return {
            success: false,
            message: 'Upload a CSV file exported from the vendor portal.'
        };
    }
    const text = Buffer.from(await file.arrayBuffer()).toString('utf-8');
    if (!text.trim()) {
        return {
            success: false,
            message: 'The uploaded file was empty.'
        };
    }
    try {
        const rows = parseCsv(text);
        if (!rows.length) {
            return {
                success: false,
                message: 'No records were found in the CSV file.'
            };
        }
        const legacyEtapestryFormat = source === 'etapestry' ? detectLegacyEtapestryFormat(rows) : false;
        const legacyEventbriteFormat = source === 'eventbrite' ? isEventbriteOrderRow(rows[0]) : false;
        const count = source === 'etapestry' ? await importPledges(rows, {
            legacyFormat: legacyEtapestryFormat
        }) : await importEvents(rows, {
            legacyFormat: legacyEventbriteFormat
        });
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
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    manualImportAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(manualImportAction, "600ed49537ea6f4783ff1d6d42249a3194c15ba525", null);
}),
"[project]/.next-internal/server/app/(dashboard)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(dashboard)/actions/sync-integrations.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/(dashboard)/actions/manual-import.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$sync$2d$integrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/actions/sync-integrations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$manual$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/actions/manual-import.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/(dashboard)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(dashboard)/actions/sync-integrations.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/(dashboard)/actions/manual-import.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00e796c46ae6800f9326b0250049149bc0be344449",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$sync$2d$integrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncIntegrationsAction"],
    "600ed49537ea6f4783ff1d6d42249a3194c15ba525",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$manual$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["manualImportAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$sync$2d$integrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$manual$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(dashboard)/actions/sync-integrations.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/(dashboard)/actions/manual-import.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$sync$2d$integrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/actions/sync-integrations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$manual$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/actions/manual-import.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_66941011._.js.map