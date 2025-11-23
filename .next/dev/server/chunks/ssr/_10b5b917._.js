module.exports = [
"[project]/src/lib/secure-settings.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTEGRATION_SETTING_DEFINITIONS",
    ()=>INTEGRATION_SETTING_DEFINITIONS,
    "getSecureSettingValue",
    ()=>getSecureSettingValue,
    "listSecureSettings",
    ()=>listSecureSettings,
    "upsertSecureSetting",
    ()=>upsertSecureSetting
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-rsc] (ecmascript)");
;
;
;
const ENCRYPTION_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].SETTINGS_ENCRYPTION_KEY_BUFFER;
const ALGO = 'aes-256-gcm';
function encryptValue(value) {
    const iv = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(12);
    const cipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createCipheriv(ALGO, ENCRYPTION_KEY, iv);
    const encrypted = Buffer.concat([
        cipher.update(value, 'utf8'),
        cipher.final()
    ]);
    const authTag = cipher.getAuthTag();
    return Buffer.concat([
        iv,
        authTag,
        encrypted
    ]).toString('base64');
}
function decryptValue(payload) {
    const buffer = Buffer.from(payload, 'base64');
    const iv = buffer.subarray(0, 12);
    const authTag = buffer.subarray(12, 28);
    const encrypted = buffer.subarray(28);
    const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createDecipheriv(ALGO, ENCRYPTION_KEY, iv);
    decipher.setAuthTag(authTag);
    const decrypted = Buffer.concat([
        decipher.update(encrypted),
        decipher.final()
    ]);
    return decrypted.toString('utf8');
}
const INTEGRATION_SETTING_DEFINITIONS = [
    {
        key: 'EVENTBRITE_API_TOKEN',
        label: 'Eventbrite API Token',
        description: 'Personal OAuth token used for syncing events.',
        type: 'text'
    },
    {
        key: 'EVENTBRITE_ORGANIZATION_ID',
        label: 'Eventbrite Organization ID',
        description: 'Organization identifier for event syncs.',
        type: 'text'
    },
    {
        key: 'ETAPESTRY_API_KEY',
        label: 'eTapestry API Key',
        description: 'API key for SOAP integration.',
        type: 'text'
    },
    {
        key: 'ETAPESTRY_LOGIN_ID',
        label: 'eTapestry Login ID',
        description: 'Username used with the API key.',
        type: 'text'
    },
    {
        key: 'ETAPESTRY_LOGIN_PASSWORD',
        label: 'eTapestry Login Password',
        description: 'Password paired with the login ID.',
        type: 'text'
    },
    {
        key: 'GA4_SERVICE_ACCOUNT_JSON',
        label: 'GA4 Service Account JSON',
        description: 'Full JSON credentials for the GA4 Data API.',
        type: 'textarea',
        placeholder: '{ "type": "service_account", ... }'
    },
    {
        key: 'GEMINI_API_KEY',
        label: 'Gemini API Key',
        description: 'Used for AI drafting.',
        type: 'text'
    }
];
async function listSecureSettings() {
    const keys = INTEGRATION_SETTING_DEFINITIONS.map((definition)=>definition.key);
    const entries = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].secureSetting.findMany({
        where: {
            key: {
                in: keys
            }
        },
        include: {
            updatedBy: true
        }
    });
    const map = new Map(entries.map((entry)=>[
            entry.key,
            entry
        ]));
    return INTEGRATION_SETTING_DEFINITIONS.map((definition)=>{
        const row = map.get(definition.key);
        let preview = null;
        if (row) {
            try {
                const value = decryptValue(row.encryptedValue);
                preview = value.length > 8 ? `•••• ${value.slice(-4)}` : '••••';
            } catch  {
                preview = 'Unable to decrypt';
            }
        }
        return {
            ...definition,
            updatedAt: row?.updatedAt ?? null,
            updatedBy: row?.updatedBy?.email ?? row?.updatedBy?.name ?? null,
            hasValue: Boolean(row),
            preview
        };
    });
}
async function upsertSecureSetting(params) {
    const definition = INTEGRATION_SETTING_DEFINITIONS.find((item)=>item.key === params.key);
    if (!definition) {
        throw new Error(`Unknown setting ${params.key}`);
    }
    const encryptedValue = encryptValue(params.value);
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].secureSetting.upsert({
        where: {
            key: params.key
        },
        update: {
            encryptedValue,
            updatedById: params.userId ?? null
        },
        create: {
            key: params.key,
            encryptedValue,
            updatedById: params.userId ?? null
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].secureSettingHistory.create({
        data: {
            key: params.key,
            encryptedValue,
            settingId: existing.id,
            updatedById: params.userId ?? null
        }
    });
}
async function getSecureSettingValue(key) {
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].secureSetting.findUnique({
        where: {
            key
        }
    });
    if (!row) return null;
    try {
        return decryptValue(row.encryptedValue);
    } catch  {
        return null;
    }
}
}),
"[project]/src/app/(dashboard)/settings/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4023ad6113b819bf73a9d14a12532f433d8ca57f62":"updateSecureSettingAction","4048935d2272663ee1566a2188fe6f9924e0e53d10":"updateUserRoleAction"},"",""] */ __turbopack_context__.s([
    "updateSecureSettingAction",
    ()=>updateSecureSettingAction,
    "updateUserRoleAction",
    ()=>updateUserRoleAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$secure$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/secure-settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const updateSettingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
});
const updateUserRoleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().cuid(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "ADMIN",
        "STAFF"
    ])
});
async function requireAdminSession() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authOptions"]);
    if (!session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/auth/signin");
    }
    if (session.user.role !== "ADMIN") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    }
    return session;
}
async function updateSecureSettingAction(formData) {
    const session = await requireAdminSession();
    const parsed = updateSettingSchema.safeParse({
        key: formData.get("key"),
        value: formData.get("value")
    });
    if (!parsed.success) {
        throw new Error("Invalid setting payload.");
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$secure$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertSecureSetting"])({
        key: parsed.data.key,
        value: parsed.data.value,
        userId: session.user.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/settings");
}
async function updateUserRoleAction(formData) {
    const session = await requireAdminSession();
    const parsed = updateUserRoleSchema.safeParse({
        userId: formData.get("userId"),
        role: formData.get("role")
    });
    if (!parsed.success) {
        throw new Error("Invalid user payload.");
    }
    if (parsed.data.userId === session.user.id && parsed.data.role !== "ADMIN") {
        throw new Error("You cannot downgrade your own role.");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.update({
        where: {
            id: parsed.data.userId
        },
        data: {
            role: parsed.data.role
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/settings");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateSecureSettingAction,
    updateUserRoleAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSecureSettingAction, "4023ad6113b819bf73a9d14a12532f433d8ca57f62", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserRoleAction, "4048935d2272663ee1566a2188fe6f9924e0e53d10", null);
}),
"[project]/.next-internal/server/app/(dashboard)/settings/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(dashboard)/settings/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/settings/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/(dashboard)/settings/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(dashboard)/settings/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4023ad6113b819bf73a9d14a12532f433d8ca57f62",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSecureSettingAction"],
    "4048935d2272663ee1566a2188fe6f9924e0e53d10",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserRoleAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$settings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$dashboard$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/settings/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(dashboard)/settings/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/settings/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_10b5b917._.js.map