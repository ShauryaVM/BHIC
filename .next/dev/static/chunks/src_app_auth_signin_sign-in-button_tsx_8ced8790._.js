(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/auth/signin/sign-in-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInButton",
    ()=>SignInButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SignInButton() {
    _s();
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleClick() {
        try {
            setPending(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("google", {
                callbackUrl: "/",
                redirect: true
            });
        } finally{
            setPending(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: handleClick,
        className: "inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-70",
        disabled: pending,
        children: [
            pending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-5 w-5 animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/signin/sign-in-button.tsx",
                lineNumber: 29,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoogleGlyph, {}, void 0, false, {
                fileName: "[project]/src/app/auth/signin/sign-in-button.tsx",
                lineNumber: 29,
                columnNumber: 65
            }, this),
            pending ? "Connecting to Google..." : "Sign in with Google"
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/auth/signin/sign-in-button.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(SignInButton, "yL7EIflDPEq5uy/MZ3+11Tw6P60=");
_c = SignInButton;
function GoogleGlyph() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-5 w-5",
        viewBox: "0 0 533.5 544.3",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M533.5 278.4c0-17.4-1.5-34.1-4.4-50.3H272.1v95.3h147.3c-6.4 34.7-25.7 64-54.8 83.7v69.1h88.6c51.9-47.8 80.3-118.3 80.3-197.8z",
                fill: "#4285f4"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/signin/sign-in-button.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M272.1 544.3c73.8 0 135.7-24.4 180.9-66.1l-88.6-69.1c-24.6 16.5-56 26.1-92.3 26.1-71 0-131.1-47.9-152.6-112.1H27.7v70.5c45.2 89.9 137.9 150.7 244.4 150.7z",
                fill: "#34a853"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/signin/sign-in-button.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M119.5 323.1c-10.6-31.5-10.6-65.4 0-96.9V155.7H27.7c-45.1 89.9-45.1 196.2 0 286.1l91.8-70.5z",
                fill: "#fbbc04"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/signin/sign-in-button.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M272.1 107.7c39.9-.6 78.4 14.7 107.6 42.7l80.3-80.3C405 24 342.1-1.2 272.1 0 165.6 0 72.9 60.8 27.7 150.7l91.8 70.5c21.5-64.3 81.6-112.1 152.6-112.1z",
                fill: "#ea4335"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/signin/sign-in-button.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/auth/signin/sign-in-button.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = GoogleGlyph;
var _c, _c1;
__turbopack_context__.k.register(_c, "SignInButton");
__turbopack_context__.k.register(_c1, "GoogleGlyph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_auth_signin_sign-in-button_tsx_8ced8790._.js.map