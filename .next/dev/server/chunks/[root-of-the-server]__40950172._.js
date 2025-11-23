module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@react-pdf/renderer");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        'query',
        'error',
        'warn'
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) {
    global.prisma = prisma;
}
}),
"[project]/src/lib/cache-metrics.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withMetricCache",
    ()=>withMetricCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInMinutes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
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
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].cachedMetric.findFirst({
            where: {
                key
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        if (existing && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["differenceInMinutes"])(new Date(), existing.createdAt) < ttlMinutes) {
            return existing.value;
        }
        const value = await fetcher();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].cachedMetric.create({
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
"[project]/src/lib/env.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const envSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    NEXTAUTH_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    NEXTAUTH_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(32),
    GOOGLE_CLIENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    GOOGLE_CLIENT_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    ADMIN_EMAILS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default(''),
    ALLOWED_EMAIL_DOMAIN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('bhic.org'),
    ETAPESTRY_WSDL_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    ETAPESTRY_DATABASE_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    ETAPESTRY_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    ETAPESTRY_LOGIN_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    ETAPESTRY_LOGIN_PASSWORD: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    ETAPESTRY_APPLICATION_CONTEXT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('BHIC Dashboard'),
    ETAPESTRY_QUERY_CATEGORY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    ETAPESTRY_QUERY_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    EVENTBRITE_API_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    EVENTBRITE_ORGANIZATION_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    GA4_PROPERTY_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    GA4_AUTH_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'service_account',
        'oauth'
    ]).default('service_account'),
    GA4_SERVICE_ACCOUNT_JSON: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    GA4_OAUTH_CLIENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    GA4_OAUTH_CLIENT_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    GA4_OAUTH_REFRESH_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    GEMINI_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    GEMINI_MODEL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('gemini-pro'),
    SETTINGS_ENCRYPTION_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(44)
});
const parsed = envSchema.safeParse({
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    ADMIN_EMAILS: process.env.ADMIN_EMAILS ?? '',
    ALLOWED_EMAIL_DOMAIN: process.env.ALLOWED_EMAIL_DOMAIN ?? 'bhic.org',
    ETAPESTRY_WSDL_URL: process.env.ETAPESTRY_WSDL_URL,
    ETAPESTRY_DATABASE_ID: process.env.ETAPESTRY_DATABASE_ID,
    ETAPESTRY_API_KEY: process.env.ETAPESTRY_API_KEY,
    ETAPESTRY_LOGIN_ID: process.env.ETAPESTRY_LOGIN_ID,
    ETAPESTRY_LOGIN_PASSWORD: process.env.ETAPESTRY_LOGIN_PASSWORD,
    ETAPESTRY_APPLICATION_CONTEXT: process.env.ETAPESTRY_APPLICATION_CONTEXT,
    ETAPESTRY_QUERY_CATEGORY: process.env.ETAPESTRY_QUERY_CATEGORY,
    ETAPESTRY_QUERY_NAME: process.env.ETAPESTRY_QUERY_NAME,
    EVENTBRITE_API_TOKEN: process.env.EVENTBRITE_API_TOKEN,
    EVENTBRITE_ORGANIZATION_ID: process.env.EVENTBRITE_ORGANIZATION_ID,
    GA4_PROPERTY_ID: process.env.GA4_PROPERTY_ID,
    GA4_AUTH_MODE: process.env.GA4_AUTH_MODE ?? 'service_account',
    GA4_SERVICE_ACCOUNT_JSON: process.env.GA4_SERVICE_ACCOUNT_JSON,
    GA4_OAUTH_CLIENT_ID: process.env.GA4_OAUTH_CLIENT_ID,
    GA4_OAUTH_CLIENT_SECRET: process.env.GA4_OAUTH_CLIENT_SECRET,
    GA4_OAUTH_REFRESH_TOKEN: process.env.GA4_OAUTH_REFRESH_TOKEN,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    GEMINI_MODEL: process.env.GEMINI_MODEL ?? 'models/gemini-1.5-flash',
    SETTINGS_ENCRYPTION_KEY: process.env.SETTINGS_ENCRYPTION_KEY
});
if (!parsed.success) {
    console.error('❌ Invalid environment variables', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables. Check .env configuration.');
}
const data = parsed.data;
if (data.GA4_AUTH_MODE === 'service_account' && !data.GA4_SERVICE_ACCOUNT_JSON) {
    throw new Error('GA4_SERVICE_ACCOUNT_JSON is required when GA4_AUTH_MODE=service_account');
}
if (data.GA4_AUTH_MODE === 'oauth' && (!data.GA4_OAUTH_CLIENT_ID || !data.GA4_OAUTH_CLIENT_SECRET || !data.GA4_OAUTH_REFRESH_TOKEN)) {
    throw new Error('GA4 OAuth credentials (client id/secret + refresh token) are required when GA4_AUTH_MODE=oauth');
}
const encryptionKey = Buffer.from(data.SETTINGS_ENCRYPTION_KEY, 'base64');
if (encryptionKey.length !== 32) {
    throw new Error('SETTINGS_ENCRYPTION_KEY must be a base64-encoded 32-byte key (256 bits).');
}
const adminEmails = data.ADMIN_EMAILS.split(',').map((email)=>email.trim().toLowerCase()).filter(Boolean);
const env = {
    ...data,
    ADMIN_EMAILS: adminEmails,
    GA4_SERVICE_ACCOUNT: data.GA4_SERVICE_ACCOUNT_JSON ? JSON.parse(data.GA4_SERVICE_ACCOUNT_JSON) : null,
    SETTINGS_ENCRYPTION_KEY_BUFFER: encryptionKey
};
}),
"[project]/src/lib/integration-sync.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].cachedMetric.create({
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
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].cachedMetric.findMany({
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].cachedMetric.deleteMany({
        where: {
            source: {
                in: sources
            }
        }
    });
}
}),
"[project]/src/lib/time-series.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMonthlyBuckets",
    ()=>getMonthlyBuckets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-route] (ecmascript)");
;
function getMonthlyBuckets(months = 12, anchor = new Date()) {
    const buckets = [];
    const anchorStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startOfMonth"])(anchor);
    for(let i = months - 1; i >= 0; i -= 1){
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subMonths"])(anchorStart, i);
        buckets.push({
            key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(start, 'yyyy-MM'),
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(start, 'MMM yy'),
            start,
            end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["endOfMonth"])(start)
        });
    }
    return buckets;
}
}),
"[project]/src/lib/etapestry.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__XMLParser$3e$__ = __turbopack_context__.i("[project]/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-route] (ecmascript) <export default as XMLParser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache-metrics.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/integration-sync.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time-series.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const allowedStatuses = new Set(Object.values(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"]));
const xmlParser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__XMLParser$3e$__["XMLParser"]({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: 'text',
    removeNSPrefix: false
});
const soapEndpoint = (()=>{
    try {
        const url = new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_WSDL_URL);
        url.search = '';
        return url.toString();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_WSDL_URL.replace(/\?wsdl$/i, '').replace(/\?WSDL$/i, '');
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
    <applicationContext xmlns="" xsi:type="xsd:string">${escapeXml(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_APPLICATION_CONTEXT)}</applicationContext>
    <databaseId xmlns="" xsi:type="xsd:string">${escapeXml(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_DATABASE_ID)}</databaseId>
    <password xmlns="" xsi:type="xsd:string">${escapeXml(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_API_KEY)}</password>
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
        from: range?.from ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subDays"])(now, 90),
        to: range?.to ?? now
    };
}
async function fetchQueryRows(start, count) {
    const sessionId = await getSessionId();
    const queryString = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_QUERY_CATEGORY}:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].ETAPESTRY_QUERY_NAME}`;
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
        const donor = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].donor.upsert({
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].pledge.upsert({
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidateMetricsForSources"])([
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY
    ]);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recordIntegrationSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY, summary);
    return summary;
}
async function recalculateDonorLifetimeValues() {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$executeRaw`
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$executeRaw`
    UPDATE "Donor" AS d
    SET
      "totalPledged" = 0,
      "totalGiven" = 0,
      "lastGiftDate" = NULL
    WHERE NOT EXISTS (SELECT 1 FROM "Pledge" AS p WHERE p."donorId" = d."id");
  `;
}
async function getFundsRaisedSummary(range) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMetricCache"])({
        key: `funds:${range.from.toISOString()}:${range.to.toISOString()}`,
        from: range.from,
        to: range.to,
        source: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY,
        fetcher: async ()=>{
            const pledges = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].pledge.findMany({
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
            const buckets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMonthlyBuckets"])(12, range.to);
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
"[project]/src/lib/eventbrite.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache-metrics.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/integration-sync.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const API_BASE = 'https://www.eventbriteapi.com/v3';
function withAuthHeaders() {
    return {
        Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].EVENTBRITE_API_TOKEN}`,
        'Content-Type': 'application/json'
    };
}
function rangeWithDefault(range) {
    const now = new Date();
    return {
        from: range?.from ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subDays"])(now, 120),
        to: range?.to ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addDays"])(now, 30)
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
        const url = new URL(`/organizations/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].EVENTBRITE_ORGANIZATION_ID}/events/`, API_BASE);
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
        const base = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].event.upsert({
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].eventAttendance.deleteMany({
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
            const donor = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].donor.findUnique({
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].eventAttendance.createMany({
                data: attendancePayload
            });
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].event.update({
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidateMetricsForSources"])([
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE
    ]);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recordIntegrationSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE, summary);
    return summary;
}
async function getEventKpis(range) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMetricCache"])({
        key: `events:${range.from.toISOString()}:${range.to.toISOString()}`,
        from: range.from,
        to: range.to,
        source: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE,
        fetcher: async ()=>{
            const events = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].event.findMany({
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
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[project]/src/lib/ga4.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSessionsOverTime",
    ()=>getSessionsOverTime,
    "getSummaryMetrics",
    ()=>getSummaryMetrics,
    "getTopPages",
    ()=>getTopPages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2d$analytics$2f$data$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google-analytics/data/build/src/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$google$2d$auth$2d$library$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/google-auth-library/build/src/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache-metrics.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-route] (ecmascript)");
;
;
;
;
;
;
let client = null;
let oauthClient = null;
function getOAuthClient() {
    if (oauthClient) {
        return oauthClient;
    }
    oauthClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$google$2d$auth$2d$library$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OAuth2Client"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GA4_OAUTH_CLIENT_ID, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GA4_OAUTH_CLIENT_SECRET);
    oauthClient.setCredentials({
        refresh_token: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GA4_OAUTH_REFRESH_TOKEN
    });
    return oauthClient;
}
function normalizePrivateKey(key) {
    return key.includes('\\n') ? key.replace(/\\n/g, '\n') : key;
}
function getClient() {
    if (client) {
        return client;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GA4_AUTH_MODE === 'oauth') {
        client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2d$analytics$2f$data$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaAnalyticsDataClient"]({
            authClient: getOAuthClient()
        });
    } else {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GA4_SERVICE_ACCOUNT) {
            throw new Error('GA4 service account credentials missing');
        }
        client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2d$analytics$2f$data$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaAnalyticsDataClient"]({
            credentials: {
                client_email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GA4_SERVICE_ACCOUNT.client_email,
                private_key: normalizePrivateKey(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GA4_SERVICE_ACCOUNT.private_key)
            }
        });
    }
    return client;
}
const property = `properties/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GA4_PROPERTY_ID}`;
function iso(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'yyyy-MM-dd');
}
async function fetchSessionsSeries(params) {
    const dimensionName = params.granularity === 'MONTHLY' ? 'yearMonth' : 'date';
    const response = await getClient().runReport({
        property,
        dateRanges: [
            {
                startDate: iso(params.from),
                endDate: iso(params.to)
            }
        ],
        dimensions: [
            {
                name: dimensionName
            }
        ],
        metrics: [
            {
                name: 'sessions'
            }
        ],
        orderBys: [
            {
                dimension: {
                    dimensionName
                }
            }
        ]
    });
    const points = response[0]?.rows?.map((row)=>{
        const raw = row.dimensionValues?.[0]?.value ?? '';
        let label = raw;
        let dateValue = raw;
        if (params.granularity === 'MONTHLY' && raw.length === 6) {
            const year = Number(raw.slice(0, 4));
            const month = Number(raw.slice(4, 6)) - 1;
            const dt = new Date(Date.UTC(year, month, 1));
            label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dt, 'MMM yy');
            dateValue = dt.toISOString();
        } else if (params.granularity === 'DAILY' && raw.length === 8) {
            const year = Number(raw.slice(0, 4));
            const month = Number(raw.slice(4, 6)) - 1;
            const day = Number(raw.slice(6, 8));
            const dt = new Date(Date.UTC(year, month, day));
            label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dt, 'MMM d');
            dateValue = dt.toISOString();
        }
        const value = Number(row.metricValues?.[0]?.value ?? 0);
        return {
            label,
            value,
            date: dateValue
        };
    }) ?? [];
    return {
        points
    };
}
async function getSessionsOverTime(range) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMetricCache"])({
            key: `ga4:sessions:${range.granularity ?? 'DAILY'}:${iso(range.from)}:${iso(range.to)}`,
            from: range.from,
            to: range.to,
            source: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].GA4,
            fetcher: ()=>fetchSessionsSeries({
                    granularity: range.granularity ?? 'DAILY',
                    from: range.from,
                    to: range.to
                })
        });
    } catch (error) {
        console.error('Failed to fetch GA4 sessions', error);
        return {
            points: [],
            error: 'Unable to load Google Analytics sessions right now.'
        };
    }
}
async function getTopPages(range, limit = 8) {
    try {
        const response = await getClient().runReport({
            property,
            dateRanges: [
                {
                    startDate: iso(range.from),
                    endDate: iso(range.to)
                }
            ],
            dimensions: [
                {
                    name: 'pagePathPlusQueryString'
                },
                {
                    name: 'pageTitle'
                }
            ],
            metrics: [
                {
                    name: 'screenPageViews'
                }
            ],
            orderBys: [
                {
                    metric: {
                        metricName: 'screenPageViews'
                    },
                    desc: true
                }
            ],
            limit
        });
        const rows = response[0]?.rows?.map((row)=>({
                path: row.dimensionValues?.[0]?.value ?? 'N/A',
                title: row.dimensionValues?.[1]?.value ?? 'Untitled page',
                pageviews: Number(row.metricValues?.[0]?.value ?? 0)
            })) ?? [];
        return {
            rows
        };
    } catch (error) {
        console.error('Failed to fetch GA4 top pages', error);
        return {
            rows: [],
            error: 'Unable to load top page data.'
        };
    }
}
async function getSummaryMetrics(range) {
    try {
        const response = await getClient().runReport({
            property,
            dateRanges: [
                {
                    startDate: iso(range.from),
                    endDate: iso(range.to)
                }
            ],
            metrics: [
                {
                    name: 'totalUsers'
                },
                {
                    name: 'sessions'
                },
                {
                    name: 'screenPageViews'
                },
                {
                    name: 'averageSessionDuration'
                }
            ]
        });
        const metrics = response[0]?.rows?.[0]?.metricValues ?? [];
        const users = Number(metrics[0]?.value ?? 0);
        const sessions = Number(metrics[1]?.value ?? 0);
        const pageviews = Number(metrics[2]?.value ?? 0);
        const averageEngagementTime = Number(metrics[3]?.value ?? 0);
        return {
            users,
            sessions,
            pageviews,
            averageEngagementTime
        };
    } catch (error) {
        console.error('Failed to fetch GA4 summary metrics', error);
        return {
            users: 0,
            sessions: 0,
            pageviews: 0,
            averageEngagementTime: 0,
            error: 'Unable to load Google Analytics metrics.'
        };
    }
}
}),
"[project]/src/lib/dashboard-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDashboardData",
    ()=>getDashboardData
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfYear.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$etapestry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/etapestry.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventbrite$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/eventbrite.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ga4.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time-series.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
const toNumber = (value)=>Number(value ?? 0);
async function getDashboardData(range = 'ytd') {
    const now = new Date();
    const summaryStart = range === '12m' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subMonths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startOfMonth"])(now), 11) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startOfYear"])(now);
    const monthlyStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subMonths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startOfMonth"])(now), 11);
    const monthlyRange = {
        from: monthlyStart,
        to: now
    };
    const last30Start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subDays"])(now, 30);
    try {
        const [fundsSummary, fundsYtdAggregate, totalDonors, activeDonors, eventKpis, gaSummary, gaSessions, eventSeries] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$etapestry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFundsRaisedSummary"])(monthlyRange),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].pledge.aggregate({
                where: {
                    date: {
                        gte: summaryStart,
                        lte: now
                    },
                    status: {
                        in: [
                            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"].PLEDGED,
                            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"].RECEIVED
                        ]
                    }
                },
                _sum: {
                    amount: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].donor.count(),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].donor.count({
                where: {
                    lastGiftDate: {
                        gte: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subDays"])(now, 365)
                    }
                }
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventbrite$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEventKpis"])({
                from: summaryStart,
                to: now
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSummaryMetrics"])({
                from: last30Start,
                to: now
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionsOverTime"])({
                from: monthlyStart,
                to: now,
                granularity: 'MONTHLY'
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].event.findMany({
                where: {
                    startDate: {
                        gte: monthlyStart,
                        lte: now
                    }
                },
                select: {
                    startDate: true,
                    ticketsSold: true
                }
            })
        ]);
        const sessionsMap = new Map(gaSessions.points.map((point)=>[
                point.label,
                point.value
            ]));
        const fundsMap = new Map(fundsSummary.monthly.map((point)=>[
                point.label,
                point.total
            ]));
        const monthlyBuckets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMonthlyBuckets"])(12, now);
        const ticketsByMonth = new Map();
        for (const event of eventSeries){
            if (!event.startDate) continue;
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startOfMonth"])(event.startDate), 'yyyy-MM');
            ticketsByMonth.set(key, (ticketsByMonth.get(key) ?? 0) + (event.ticketsSold ?? 0));
        }
        const monthlySeries = monthlyBuckets.map((bucket)=>{
            return {
                label: bucket.label,
                funds: fundsMap.get(bucket.label) ?? 0,
                tickets: ticketsByMonth.get(bucket.key) ?? 0,
                sessions: sessionsMap.get(bucket.label) ?? 0
            };
        });
        return {
            kpis: {
                fundsYtd: toNumber(fundsYtdAggregate._sum.amount),
                totalDonors,
                activeDonors,
                eventsThisYear: eventKpis.eventsCount,
                ticketsSold: eventKpis.ticketsSold,
                sessionsLast30Days: gaSummary.sessions,
                gaError: gaSummary.error
            },
            charts: {
                monthly: monthlySeries
            }
        };
    } catch (error) {
        console.error('Failed to load dashboard data', error);
        return buildFallbackDashboardData(now);
    }
}
function buildFallbackDashboardData(anchor) {
    const buckets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMonthlyBuckets"])(12, anchor);
    return {
        kpis: {
            fundsYtd: 0,
            totalDonors: 0,
            activeDonors: 0,
            eventsThisYear: 0,
            ticketsSold: 0,
            sessionsLast30Days: 0,
            gaError: 'Metrics temporarily unavailable. Check data sources.'
        },
        charts: {
            monthly: buckets.map((bucket)=>({
                    label: bucket.label,
                    funds: 0,
                    tickets: 0,
                    sessions: 0
                }))
        }
    };
}
}),
"[project]/src/lib/events-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultEventFilters",
    ()=>defaultEventFilters,
    "getEventsData",
    ()=>getEventsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
const toNumber = (value)=>Number(value ?? 0);
function buildWhere(filters) {
    if (!filters.from && !filters.to) {
        return {};
    }
    const where = {};
    if (filters.from || filters.to) {
        where.startDate = {
            ...filters.from ? {
                gte: filters.from
            } : {},
            ...filters.to ? {
                lte: filters.to
            } : {}
        };
    }
    return where;
}
async function getEventsData(filters = {}, sortOptions = {}) {
    const where = buildWhere(filters);
    const sortFieldMap = {
        name: 'name',
        startDate: 'startDate',
        venue: 'venue',
        ticketsSold: 'ticketsSold',
        ticketsTotal: 'ticketsTotal',
        grossRevenue: 'grossRevenue',
        netRevenue: 'netRevenue'
    };
    const orderBy = sortOptions.sortBy && sortOptions.sortDir ? {
        [sortFieldMap[sortOptions.sortBy]]: sortOptions.sortDir
    } : {
        startDate: 'desc'
    };
    try {
        const eventRecords = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].event.findMany({
            where,
            orderBy: [
                orderBy,
                {
                    id: 'asc'
                }
            ]
        });
        const events = eventRecords.map((event)=>({
                ...event,
                grossRevenue: toNumber(event.grossRevenue),
                netRevenue: toNumber(event.netRevenue)
            }));
        const now = new Date();
        const upcomingEvents = events.filter((event)=>event.startDate >= now).length;
        const pastEvents = events.length - upcomingEvents;
        const ticketsSold = events.reduce((sum, event)=>sum + event.ticketsSold, 0);
        const grossRevenue = events.reduce((sum, event)=>sum + Number(event.grossRevenue ?? 0), 0);
        const netRevenue = events.reduce((sum, event)=>sum + Number(event.netRevenue ?? 0), 0);
        return {
            events,
            summary: {
                upcomingEvents,
                pastEvents,
                ticketsSold,
                grossRevenue,
                netRevenue
            },
            charts: {
                topTickets: events.filter((event)=>event.ticketsSold > 0).sort((a, b)=>b.ticketsSold - a.ticketsSold).slice(0, 10).map((event)=>({
                        name: event.name,
                        tickets: event.ticketsSold
                    })),
                topRevenue: events.filter((event)=>Number(event.grossRevenue ?? 0) > 0).sort((a, b)=>Number(b.grossRevenue ?? 0) - Number(a.grossRevenue ?? 0)).slice(0, 10).map((event)=>({
                        name: event.name,
                        gross: Number(event.grossRevenue ?? 0),
                        net: Number(event.netRevenue ?? 0)
                    }))
            }
        };
    } catch (error) {
        console.warn('Unable to load events data, returning empty snapshot', error instanceof Error ? error.message : error);
        return buildFallbackEventsData();
    }
}
function buildFallbackEventsData() {
    return {
        events: [],
        summary: {
            upcomingEvents: 0,
            pastEvents: 0,
            ticketsSold: 0,
            grossRevenue: 0,
            netRevenue: 0
        },
        charts: {
            topTickets: [],
            topRevenue: []
        }
    };
}
function defaultEventFilters() {
    return {
        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startOfDay"])(new Date()), 90),
        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startOfDay"])(new Date()), 180)
    };
}
}),
"[project]/src/lib/analytics-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultAnalyticsFilters",
    ()=>defaultAnalyticsFilters,
    "getAnalyticsData",
    ()=>getAnalyticsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ga4.ts [app-route] (ecmascript)");
;
;
function defaultAnalyticsFilters() {
    const to = new Date();
    return {
        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subDays"])(to, 30),
        to
    };
}
async function getAnalyticsData(filters) {
    const [summary, sessionsSeries, topPages] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSummaryMetrics"])(filters),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionsOverTime"])({
            ...filters,
            granularity: 'DAILY'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTopPages"])(filters)
    ]);
    return {
        summary,
        sessionsSeries,
        topPages
    };
}
}),
"[project]/src/lib/donor-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDonorList",
    ()=>getDonorList
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfYear.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time-series.ts [app-route] (ecmascript)");
;
;
;
;
const toNumber = (value)=>Number(value ?? 0);
async function getDonorList(params) {
    const { page, pageSize, query, minTotalGiven, lastGiftFrom, lastGiftTo, status, sortBy, sortDir } = params;
    const where = {};
    const giftRanges = [
        {
            name: '< $1k',
            min: 0,
            max: 1000
        },
        {
            name: '$1k - $5k',
            min: 1000,
            max: 5000
        },
        {
            name: '$5k - $10k',
            min: 5000,
            max: 10000
        },
        {
            name: '$10k+',
            min: 10000,
            max: Infinity
        }
    ];
    const acquisitionBuckets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMonthlyBuckets"])(12);
    if (query) {
        where.OR = [
            {
                name: {
                    contains: query,
                    mode: 'insensitive'
                }
            },
            {
                email: {
                    contains: query,
                    mode: 'insensitive'
                }
            }
        ];
    }
    if (minTotalGiven) {
        where.totalGiven = {
            gte: minTotalGiven
        };
    }
    if (status === 'prospect') {
        where.lastGiftDate = null;
    } else {
        if (lastGiftFrom || lastGiftTo || status === 'active') {
            const filter = {};
            if (status === 'active') {
                filter.not = null;
            }
            if (lastGiftFrom) {
                filter.gte = lastGiftFrom;
            }
            if (lastGiftTo) {
                filter.lte = lastGiftTo;
            }
            where.lastGiftDate = filter;
        }
    }
    const sortFieldMap = {
        name: 'name',
        email: 'email',
        totalPledged: 'totalPledged',
        totalGiven: 'totalGiven',
        lastGiftDate: 'lastGiftDate'
    };
    const orderBy = sortBy && sortDir ? [
        {
            [sortFieldMap[sortBy]]: sortDir
        }
    ] : [
        {
            totalGiven: 'desc'
        }
    ];
    try {
        const now = new Date();
        const monthlyWindowStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subMonths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startOfMonth"])(now), 11);
        const yearlyWindowStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startOfYear"])(new Date(now.getFullYear() - 5, 0, 1));
        const allTimeStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startOfYear"])(new Date(2006, 0, 1));
        const [totalMatching, donors, totalDonors, activeDonors, averageLifetimeValue, monthlyGifts, yearlyGifts, lifetimeValues, allTimeGifts] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].donor.count({
                where
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].donor.findMany({
                where,
                orderBy,
                take: pageSize,
                skip: (page - 1) * pageSize,
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    totalGiven: true,
                    totalPledged: true,
                    lastGiftDate: true,
                    emails: {
                        select: {
                            email: true
                        }
                    }
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].donor.count(),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].donor.count({
                where: {
                    lastGiftDate: {
                        gte: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subDays"])(now, 365)
                    }
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].donor.aggregate({
                _avg: {
                    totalGiven: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].pledge.findMany({
                where: {
                    date: {
                        gte: monthlyWindowStart
                    },
                    status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"].RECEIVED
                },
                select: {
                    date: true,
                    amount: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].pledge.findMany({
                where: {
                    date: {
                        gte: yearlyWindowStart
                    },
                    status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"].RECEIVED
                },
                select: {
                    date: true,
                    amount: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].donor.findMany({
                select: {
                    totalGiven: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
        SELECT EXTRACT(YEAR FROM "date")::int AS year,
               SUM("amount") AS total,
               COUNT(*)::bigint AS count
        FROM "Pledge"
        WHERE "status" = ${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"].RECEIVED}::"PledgeStatus"
          AND "date" >= ${allTimeStart}
        GROUP BY year
        ORDER BY year ASC
      `
        ]);
        const formattedDonors = donors.map((donor)=>({
                ...donor,
                emails: donor.emails.map((entry)=>entry.email),
                totalGiven: toNumber(donor.totalGiven),
                totalPledged: toNumber(donor.totalPledged)
            }));
        const giftsMonthly = acquisitionBuckets.map((bucket)=>{
            const entries = monthlyGifts.filter((entry)=>entry.date >= bucket.start && entry.date <= bucket.end);
            const totalAmount = entries.reduce((sum, entry)=>sum + toNumber(entry.amount), 0);
            return {
                label: bucket.label,
                value: totalAmount,
                count: entries.length
            };
        });
        const yearlyBuckets = new Map();
        for (const entry of yearlyGifts){
            const year = entry.date.getFullYear();
            if (!yearlyBuckets.has(year)) {
                yearlyBuckets.set(year, {
                    value: 0,
                    count: 0
                });
            }
            const bucket = yearlyBuckets.get(year);
            bucket.value += toNumber(entry.amount);
            bucket.count += 1;
        }
        const giftsYearly = Array.from(yearlyBuckets.entries()).sort(([a], [b])=>a - b).map(([year, bucket])=>({
                label: `${year}`,
                value: bucket.value,
                count: bucket.count
            }));
        const giftsAllTime = allTimeGifts.map((row)=>({
                label: `${row.year}`,
                value: toNumber(row.total),
                count: Number(row.count)
            }));
        const giftDistribution = giftRanges.map((range)=>({
                name: range.name,
                value: lifetimeValues.filter((value)=>{
                    const amount = toNumber(value.totalGiven);
                    return amount >= range.min && amount < range.max;
                }).length
            }));
        return {
            donors: formattedDonors,
            pagination: {
                page,
                pageSize,
                total: totalMatching,
                totalPages: Math.max(1, Math.ceil(totalMatching / pageSize))
            },
            summary: {
                totalDonors,
                activeDonors,
                averageLifetimeValue: toNumber(averageLifetimeValue._avg.totalGiven)
            },
            charts: {
                giftsMonthly,
                giftsYearly,
                giftsAllTime,
                giftDistribution
            }
        };
    } catch (error) {
        console.error('Failed to load donor list data. Serving fallback dataset.', error);
        return buildFallbackDonorList({
            page,
            pageSize,
            acquisitionBuckets,
            giftRanges
        });
    }
}
function buildFallbackDonorList({ page, pageSize, acquisitionBuckets, giftRanges }) {
    return {
        donors: [],
        pagination: {
            page,
            pageSize,
            total: 0,
            totalPages: 1
        },
        summary: {
            totalDonors: 0,
            activeDonors: 0,
            averageLifetimeValue: 0
        },
        charts: {
            giftsMonthly: acquisitionBuckets.map((bucket)=>({
                    label: bucket.label,
                    value: 0,
                    count: 0
                })),
            giftsYearly: [],
            giftsAllTime: [],
            giftDistribution: giftRanges.map((range)=>({
                    name: range.name,
                    value: 0
                }))
        }
    };
}
}),
"[project]/src/lib/insights-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInsightsData",
    ()=>getInsightsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dashboard-data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$events$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/events-data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics-data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$donor$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/donor-data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/integration-sync.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const MOMENTUM_THRESHOLD = 0.05;
function percentChange(current, previous) {
    if (!Number.isFinite(current) || !Number.isFinite(previous) || previous === 0) {
        return 0;
    }
    return (current - previous) / Math.abs(previous);
}
function rollingAverage(values, length) {
    if (!values.length || length <= 0) return 0;
    const slice = values.slice(-length);
    if (!slice.length) return 0;
    return slice.reduce((sum, value)=>sum + value, 0) / slice.length;
}
function calculateFundsMomentum(series) {
    if (series.length < 4) return 0;
    const funds = series.map((point)=>point.funds);
    const recent = rollingAverage(funds, 3);
    const prior = rollingAverage(funds.slice(0, -3), 3);
    return percentChange(recent, prior);
}
function calculateSessionsMomentum(points) {
    if (points.length < 14) return 0;
    const values = points.map((point)=>point.value);
    const recent = rollingAverage(values.slice(-7), 7);
    const prior = rollingAverage(values.slice(-14, -7), 7);
    return percentChange(recent, prior);
}
function calculateAverageOccupancy(events) {
    const withCapacity = events.filter((event)=>event.ticketsTotal > 0);
    if (!withCapacity.length) return 0;
    const totalCapacity = withCapacity.reduce((sum, event)=>sum + event.ticketsTotal, 0);
    const totalSold = withCapacity.reduce((sum, event)=>sum + event.ticketsSold, 0);
    return totalCapacity === 0 ? 0 : totalSold / totalCapacity;
}
function describeMomentum(value, positiveLabel, negativeLabel, neutralLabel) {
    if (value > MOMENTUM_THRESHOLD) return 'positive';
    if (value < -MOMENTUM_THRESHOLD) return 'negative';
    return 'neutral';
}
function buildHighlights(params) {
    const highlights = [];
    highlights.push({
        title: 'Giving momentum',
        description: params.fundsMomentum > MOMENTUM_THRESHOLD ? 'Monthly funds raised increased compared to the prior quarter.' : params.fundsMomentum < -MOMENTUM_THRESHOLD ? 'Funds raised dipped versus the prior quarter—consider a donor re-engagement push.' : 'Giving volume is steady when compared to the previous quarter.',
        impact: describeMomentum(params.fundsMomentum, 'positive', 'negative', 'neutral')
    });
    highlights.push({
        title: 'Digital engagement',
        description: params.sessionsMomentum > MOMENTUM_THRESHOLD ? 'Website sessions grew over the last two weeks, showing healthy traffic momentum.' : params.sessionsMomentum < -MOMENTUM_THRESHOLD ? 'Sessions trended down in the past two weeks; review campaign and content cadence.' : 'Sessions are holding steady week over week.',
        impact: describeMomentum(params.sessionsMomentum, 'positive', 'negative', 'neutral')
    });
    highlights.push({
        title: 'Event demand',
        description: params.avgOccupancy >= 0.85 ? 'Event attendance is exceeding 85% capacity—consider adding more sessions.' : params.avgOccupancy <= 0.55 ? 'Average attendance is below 55% of capacity—review pricing or promotion.' : 'Event attendance is healthy with mid-level capacity fill.',
        impact: params.avgOccupancy >= 0.85 ? 'positive' : params.avgOccupancy <= 0.55 ? 'negative' : 'neutral'
    });
    if (params.topDonor) {
        highlights.push({
            title: `${params.topDonor.name} leads giving`,
            description: `Top lifetime donor has contributed $${params.topDonor.totalGiven.toLocaleString()} — nurture this relationship for upcoming campaigns.`,
            impact: 'positive'
        });
    }
    if (params.topEvent) {
        const occupancy = params.topEvent.ticketsTotal ? Math.round(params.topEvent.ticketsSold / params.topEvent.ticketsTotal * 100) : null;
        highlights.push({
            title: `${params.topEvent.name} driving revenue`,
            description: `Highest-grossing event delivered $${params.topEvent.grossRevenue.toLocaleString()} in revenue${occupancy ? ` at ${occupancy}% capacity` : ''}.`,
            impact: 'positive'
        });
    }
    if (params.topPage) {
        highlights.push({
            title: 'Top content performer',
            description: `“${params.topPage.title}” led GA4 pageviews (${params.topPage.pageviews.toLocaleString()} views). Share this insight with marketing.`,
            impact: 'neutral'
        });
    }
    return highlights;
}
async function getInsightsData() {
    const now = new Date();
    const range = {
        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subMonths"])(now, 11),
        to: now
    };
    const eventFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$events$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultEventFilters"])();
    const analyticsFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultAnalyticsFilters"])();
    const [dashboard, donors, eventsData, analyticsData, integrationStatuses] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDashboardData"])('12m'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$donor$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDonorList"])({
            page: 1,
            pageSize: 5
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$events$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEventsData"])(eventFilters),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAnalyticsData"])(analyticsFilters),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getIntegrationStatuses"])()
    ]);
    const hasEtapestryData = integrationStatuses.etapestry && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isIntegrationStale"])(integrationStatuses.etapestry);
    const hasEventbriteData = integrationStatuses.eventbrite && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isIntegrationStale"])(integrationStatuses.eventbrite);
    const sanitizedDashboard = sanitizeDashboardData(dashboard, {
        includeEtapestry: Boolean(hasEtapestryData),
        includeEventbrite: Boolean(hasEventbriteData)
    });
    const sanitizedDonors = hasEtapestryData ? donors : blankDonorResult(donors);
    const sanitizedEvents = hasEventbriteData ? eventsData : blankEventsData();
    const fundsMomentum = calculateFundsMomentum(sanitizedDashboard.charts.monthly);
    const sessionsMomentum = calculateSessionsMomentum(analyticsData.sessionsSeries.points);
    const avgOccupancy = calculateAverageOccupancy(sanitizedEvents.events);
    const topEvent = sanitizedEvents.events.slice().sort((a, b)=>b.grossRevenue - a.grossRevenue)[0];
    const topPage = analyticsData.topPages.rows[0];
    const topDonor = sanitizedDonors.donors[0];
    const highlights = buildHighlights({
        fundsMomentum,
        sessionsMomentum,
        avgOccupancy,
        topDonor: topDonor ? {
            name: topDonor.name,
            totalGiven: topDonor.totalGiven
        } : undefined,
        topEvent: topEvent ? {
            name: topEvent.name,
            grossRevenue: topEvent.grossRevenue,
            ticketsSold: topEvent.ticketsSold,
            ticketsTotal: topEvent.ticketsTotal
        } : undefined,
        topPage
    });
    return {
        generatedAt: now.toISOString(),
        range,
        dashboard: sanitizedDashboard,
        donors: sanitizedDonors,
        events: {
            filters: eventFilters,
            data: sanitizedEvents
        },
        analytics: {
            filters: analyticsFilters,
            data: analyticsData
        },
        metrics: {
            fundsMomentum,
            sessionsMomentum,
            avgOccupancy
        },
        highlights
    };
}
function blankDonorResult(template) {
    return {
        donors: [],
        pagination: {
            ...template.pagination,
            total: 0,
            totalPages: 1
        },
        summary: {
            totalDonors: 0,
            activeDonors: 0,
            averageLifetimeValue: 0
        },
        charts: {
            giftsMonthly: template.charts.giftsMonthly.map((bucket)=>({
                    ...bucket,
                    value: 0,
                    count: 0
                })),
            giftsYearly: template.charts.giftsYearly.map((bucket)=>({
                    ...bucket,
                    value: 0,
                    count: 0
                })),
            giftsAllTime: template.charts.giftsAllTime.map((bucket)=>({
                    ...bucket,
                    value: 0,
                    count: 0
                })),
            giftDistribution: template.charts.giftDistribution.map((segment)=>({
                    ...segment,
                    value: 0
                }))
        }
    };
}
function blankEventsData() {
    return {
        events: [],
        summary: {
            upcomingEvents: 0,
            pastEvents: 0,
            ticketsSold: 0,
            grossRevenue: 0,
            netRevenue: 0
        },
        charts: {
            topTickets: [],
            topRevenue: []
        }
    };
}
function sanitizeDashboardData(data, { includeEtapestry, includeEventbrite }) {
    let monthlySeries = data.charts.monthly.map((point)=>({
            ...point
        }));
    const kpis = {
        ...data.kpis
    };
    if (!includeEtapestry) {
        kpis.fundsYtd = 0;
        kpis.totalDonors = 0;
        kpis.activeDonors = 0;
        monthlySeries = monthlySeries.map((point)=>({
                ...point,
                funds: 0
            }));
    }
    if (!includeEventbrite) {
        kpis.eventsThisYear = 0;
        kpis.ticketsSold = 0;
        monthlySeries = monthlySeries.map((point)=>({
                ...point,
                tickets: 0
            }));
    }
    return {
        kpis,
        charts: {
            monthly: monthlySeries
        }
    };
}
}),
"[project]/src/lib/format.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "formatDate",
    ()=>formatDate,
    "formatNumber",
    ()=>formatNumber,
    "formatPercent",
    ()=>formatPercent
]);
function formatCurrency(value, currency = 'USD', maximumFractionDigits = 0) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        maximumFractionDigits
    }).format(value);
}
function formatNumber(value, maximumFractionDigits = 0) {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits
    }).format(value);
}
function formatPercent(value, maximumFractionDigits = 1) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        maximumFractionDigits
    }).format(value);
}
function formatDate(date, options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
}) {
    const dt = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', options).format(dt);
}
}),
"[project]/src/lib/pdf/insights-report.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "InsightsReport",
    ()=>InsightsReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const styles = __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["StyleSheet"].create({
    page: {
        padding: 32,
        fontSize: 12,
        fontFamily: 'Helvetica',
        color: '#0f172a',
        lineHeight: 1.4
    },
    header: {
        marginBottom: 18
    },
    title: {
        fontSize: 20,
        fontWeight: 700
    },
    subtitle: {
        marginTop: 4,
        fontSize: 11,
        color: '#475569'
    },
    section: {
        marginBottom: 18
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 6
    },
    highlightCard: {
        borderWidth: 1,
        borderColor: '#cbd5f5',
        borderRadius: 6,
        padding: 8,
        marginBottom: 6
    },
    table: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 6
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0'
    },
    tableHeader: {
        backgroundColor: '#f8fafc',
        fontWeight: 700
    },
    cell: {
        flexGrow: 1,
        padding: 6,
        fontSize: 11
    },
    kpiRow: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    kpiCard: {
        width: '50%',
        padding: 6
    },
    kpiLabel: {
        fontSize: 11,
        color: '#64748b'
    },
    kpiValue: {
        fontSize: 16,
        fontWeight: 700
    },
    metricRow: {
        marginBottom: 6
    },
    metricLabel: {
        fontSize: 11,
        fontWeight: 700
    },
    metricHelp: {
        fontSize: 10,
        color: '#475569'
    },
    barTrack: {
        height: 6,
        backgroundColor: '#e2e8f0',
        borderRadius: 3,
        marginTop: 4
    },
    barFill: {
        height: 6,
        borderRadius: 3
    },
    splitRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    splitCol: {
        flex: 1
    },
    smallTableTitle: {
        fontSize: 11,
        fontWeight: 700,
        marginBottom: 4
    }
});
const BAR_WIDTH = 150;
function MetricBar({ value, max, color }) {
    const width = max <= 0 ? 0 : Math.max(4, value / max * BAR_WIDTH);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
        style: styles.barTrack,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
            style: [
                styles.barFill,
                {
                    width,
                    backgroundColor: color
                }
            ]
        }, void 0, false, {
            fileName: "[project]/src/lib/pdf/insights-report.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/lib/pdf/insights-report.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
function formatDateTime(value) {
    const date = typeof value === 'string' ? new Date(value) : value;
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    }).format(date);
}
function InsightsReport({ data }) {
    const monthlyPoints = data.dashboard.charts.monthly.slice(-6);
    const maxFunds = Math.max(...monthlyPoints.map((point)=>point.funds), 1);
    const maxTickets = Math.max(...monthlyPoints.map((point)=>point.tickets), 1);
    const maxSessions = Math.max(...monthlyPoints.map((point)=>point.sessions), 1);
    const acquisitions = (data.donors.charts?.giftsMonthly ?? []).slice(-6);
    const maxAcq = Math.max(...acquisitions.map((item)=>item.value), 1);
    const ticketsPerEvent = (data.events.data.charts.topTickets ?? []).slice(0, 6);
    const revenuePerEvent = (data.events.data.charts.topRevenue ?? []).slice(0, 6);
    const donorRatio = data.donors.summary.totalDonors > 0 ? data.donors.summary.activeDonors / data.donors.summary.totalDonors : 0;
    const grossRevenue = data.events.data.summary.grossRevenue;
    const netRevenue = data.events.data.summary.netRevenue;
    const netShare = grossRevenue > 0 ? netRevenue / grossRevenue : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Document"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Page"], {
            style: styles.page,
            size: "A4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.title,
                            children: "BHIC Integrated Insights"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.subtitle,
                            children: [
                                "Generated ",
                                formatDateTime(data.generatedAt),
                                " · Data window ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(data.range.from),
                                " – ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(data.range.to)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Key metrics"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.kpiRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.kpiCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.kpiLabel,
                                            children: "Funds raised (YTD)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.kpiValue,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatCurrency"])(data.dashboard.kpis.fundsYtd)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.kpiCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.kpiLabel,
                                            children: "Active donors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.kpiValue,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(data.dashboard.kpis.activeDonors)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.kpiCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.kpiLabel,
                                            children: "Tickets sold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.kpiValue,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(data.dashboard.kpis.ticketsSold)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.kpiCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.kpiLabel,
                                            children: "Sessions (30d)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.kpiValue,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(data.dashboard.kpis.sessionsLast30Days)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Highlights"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        data.highlights.map((highlight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                style: styles.highlightCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                        style: {
                                            fontSize: 12,
                                            fontWeight: 700
                                        },
                                        children: highlight.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                        style: {
                                            marginTop: 4
                                        },
                                        children: highlight.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, highlight.title, true, {
                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Data freshness"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.table,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: [
                                        styles.tableRow,
                                        styles.tableHeader
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Source"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Window"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Insights generated"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: formatDateTime(data.generatedAt)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Financial (pledges)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(data.range.from),
                                                " – ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(data.range.to)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Eventbrite"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(data.events.filters.from ?? data.range.from),
                                                " – ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(data.events.filters.to ?? data.range.to)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Web analytics"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(data.analytics.filters.from ?? data.range.from),
                                                " – ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(data.analytics.filters.to ?? data.range.to)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Donor health summary"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.table,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: [
                                        styles.tableRow,
                                        styles.tableHeader
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Metric"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Value"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Total donors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(data.donors.summary.totalDonors)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Active donors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(data.donors.summary.activeDonors),
                                                " (",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPercent"])(donorRatio),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Avg lifetime value"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatCurrency"])(data.donors.summary.averageLifetimeValue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Monthly performance snapshot"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this),
                        monthlyPoints.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                style: styles.metricRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                        style: styles.metricLabel,
                                        children: point.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                        style: styles.metricHelp,
                                        children: [
                                            "Funds raised ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatCurrency"])(point.funds)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricBar, {
                                        value: point.funds,
                                        max: maxFunds,
                                        color: "#0f172a"
                                    }, void 0, false, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                        style: [
                                            styles.metricHelp,
                                            {
                                                marginTop: 3
                                            }
                                        ],
                                        children: [
                                            "Tickets ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(point.tickets),
                                            " · Sessions ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(point.sessions)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricBar, {
                                        value: point.tickets,
                                        max: maxTickets,
                                        color: "#2563eb"
                                    }, void 0, false, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricBar, {
                                        value: point.sessions,
                                        max: maxSessions,
                                        color: "#059669"
                                    }, void 0, false, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, point.label, true, {
                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Top donors"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.table,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: [
                                        styles.tableRow,
                                        styles.tableHeader
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Lifetime given"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Last gift"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                data.donors.donors.map((donor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.tableRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: [
                                                    styles.cell,
                                                    {
                                                        flex: 1.4
                                                    }
                                                ],
                                                children: donor.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: styles.cell,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatCurrency"])(donor.totalGiven)
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: styles.cell,
                                                children: donor.lastGiftDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(donor.lastGiftDate) : '—'
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, donor.id, true, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: [
                        styles.section,
                        styles.splitRow
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: [
                                styles.splitCol,
                                {
                                    marginRight: 8
                                }
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.smallTableTitle,
                                    children: "Donor acquisition (last 6 months)"
                                }, void 0, false, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                acquisitions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: {
                                            marginBottom: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: styles.metricLabel,
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: styles.metricHelp,
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(item.value),
                                                    " new donors"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricBar, {
                                                value: item.value,
                                                max: maxAcq,
                                                color: "#2563eb"
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.label, true, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: [
                                styles.splitCol,
                                {
                                    marginLeft: 8
                                }
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.smallTableTitle,
                                    children: "Lifetime gift distribution"
                                }, void 0, false, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.table,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                            style: [
                                                styles.tableRow,
                                                styles.tableHeader
                                            ],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                    style: [
                                                        styles.cell,
                                                        {
                                                            flex: 1.4
                                                        }
                                                    ],
                                                    children: "Segment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                    style: styles.cell,
                                                    children: "Donors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this),
                                        (data.donors.charts?.giftDistribution ?? []).map((segment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.tableRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: [
                                                            styles.cell,
                                                            {
                                                                flex: 1.4
                                                            }
                                                        ],
                                                        children: segment.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.cell,
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(segment.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, segment.name, true, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Top events"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.table,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: [
                                        styles.tableRow,
                                        styles.tableHeader
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Event"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Tickets sold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 310,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Capacity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Gross revenue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this),
                                data.events.data.events.slice(0, 5).map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.tableRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: [
                                                    styles.cell,
                                                    {
                                                        flex: 1.4
                                                    }
                                                ],
                                                children: event.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: styles.cell,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(event.ticketsSold)
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: styles.cell,
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(event.ticketsTotal),
                                                    " (",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPercent"])(event.ticketsTotal ? event.ticketsSold / event.ticketsTotal : 0),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: styles.cell,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatCurrency"])(event.grossRevenue)
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, event.id, true, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 305,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Revenue mix summary"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.table,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: [
                                        styles.tableRow,
                                        styles.tableHeader
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Metric"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Value"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Gross revenue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatCurrency"])(grossRevenue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Net revenue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatCurrency"])(netRevenue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 340,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Net capture"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPercent"])(netShare)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Avg capacity fill"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPercent"])(data.metrics.avgOccupancy)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Tickets per event (top 6)"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.table,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: [
                                        styles.tableRow,
                                        styles.tableHeader
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.6
                                                }
                                            ],
                                            children: "Event"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Tickets"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this),
                                ticketsPerEvent.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.tableRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: [
                                                    styles.cell,
                                                    {
                                                        flex: 1.6
                                                    }
                                                ],
                                                children: event.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: styles.cell,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(event.tickets)
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, event.name, true, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 353,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Revenue per event"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.table,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: [
                                        styles.tableRow,
                                        styles.tableHeader
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Event"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Gross"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Net"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this),
                                revenuePerEvent.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.tableRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: [
                                                    styles.cell,
                                                    {
                                                        flex: 1.4
                                                    }
                                                ],
                                                children: event.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: styles.cell,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatCurrency"])(event.gross)
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 380,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: styles.cell,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatCurrency"])(event.net)
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 381,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, event.name, true, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 371,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Event demand & occupancy"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        data.events.data.events.slice(0, 4).map((event)=>{
                            const occupancy = event.ticketsTotal ? event.ticketsSold / event.ticketsTotal : 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                style: {
                                    marginBottom: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                        style: styles.metricLabel,
                                        children: event.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 393,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                        style: styles.metricHelp,
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(event.ticketsSold),
                                            " / ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(event.ticketsTotal),
                                            " seats (",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPercent"])(occupancy),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 394,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricBar, {
                                        value: occupancy,
                                        max: 1,
                                        color: "#f97316"
                                    }, void 0, false, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                        style: styles.metricHelp,
                                        children: [
                                            "Revenue ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatCurrency"])(event.grossRevenue)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 398,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `${event.id}-occupancy`, true, {
                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                lineNumber: 392,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Digital performance summary"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.table,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: [
                                        styles.tableRow,
                                        styles.tableHeader
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Metric"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Value"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Users"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 412,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(data.analytics.data.summary.users)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Sessions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 416,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(data.analytics.data.summary.sessions)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 417,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Pageviews"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 420,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(data.analytics.data.summary.pageviews)
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 421,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.4
                                                }
                                            ],
                                            children: "Avg engagement time"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 424,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(data.analytics.data.summary.averageEngagementTime, 1),
                                                " sec"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 406,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 404,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.sectionTitle,
                            children: "Top pages (GA4)"
                        }, void 0, false, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.table,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: [
                                        styles.tableRow,
                                        styles.tableHeader
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: [
                                                styles.cell,
                                                {
                                                    flex: 1.8
                                                }
                                            ],
                                            children: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 436,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.cell,
                                            children: "Pageviews"
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                            lineNumber: 437,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this),
                                data.analytics.data.topPages.rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.tableRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: [
                                                    styles.cell,
                                                    {
                                                        flex: 1.8
                                                    }
                                                ],
                                                children: row.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: styles.cell,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(row.pageviews)
                                            }, void 0, false, {
                                                fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, `${row.path}-${row.title}`, true, {
                                        fileName: "[project]/src/lib/pdf/insights-report.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/pdf/insights-report.tsx",
                            lineNumber: 434,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/pdf/insights-report.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/lib/pdf/insights-report.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/lib/pdf/insights-report.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/api/insights/report/route.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$insights$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/insights-data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$insights$2d$report$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf/insights-report.tsx [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$insights$2d$report$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$insights$2d$report$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function GET() {
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$insights$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInsightsData"])();
        const instance = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["pdf"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$insights$2d$report$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InsightsReport"], {
            data: data
        }, void 0, false, {
            fileName: "[project]/src/app/api/insights/report/route.tsx",
            lineNumber: 11,
            columnNumber: 26
        }, this));
        const buffer = await instance.toBuffer();
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](buffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="bhic-insights-${new Date().toISOString().slice(0, 10)}.pdf"`
            }
        });
    } catch (error) {
        console.error('Failed to generate insights PDF', error);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](JSON.stringify({
            error: 'Unable to generate report right now.'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__40950172._.js.map