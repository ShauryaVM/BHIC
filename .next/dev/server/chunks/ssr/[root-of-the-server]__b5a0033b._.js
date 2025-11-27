module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(dashboard)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(dashboard)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
;
;
function Card({ title, description, className, children, actions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("card p-6 space-y-4", className),
        children: [
            (title || description || actions) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-wrap items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-slate-900",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/card.tsx",
                                lineNumber: 18,
                                columnNumber: 22
                            }, this) : null,
                            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/card.tsx",
                                lineNumber: 19,
                                columnNumber: 28
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/card.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    actions
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/card.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/card.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/table.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TBody",
    ()=>TBody,
    "TD",
    ()=>TD,
    "TH",
    ()=>TH,
    "THead",
    ()=>THead,
    "Table",
    ()=>Table
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
;
;
function Table({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("min-w-full divide-y divide-slate-200", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
function THead({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        className: "bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function TBody({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        className: "divide-y divide-slate-100 bg-white text-sm text-slate-700",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
function TH({ children, align = "left", className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        scope: "col",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("px-4 py-3", {
            "text-left": align === "left",
            "text-center": align === "center",
            "text-right": align === "right"
        }, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function TD({ children, align = "left", className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("px-4 py-3", {
            "text-left": align === "left",
            "text-center": align === "center",
            "text-right": align === "right"
        }, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/page-header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeader",
    ()=>PageHeader,
    "PageHeaderMeta",
    ()=>PageHeaderMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
;
;
function PageHeader({ eyebrow, title, description, actions, children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0px_25px_60px_rgba(15,23,42,0.08)] backdrop-blur", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-16 -right-8 h-48 w-48 rounded-full bg-brand/15 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/page-header.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-60px] left-[-40px] h-44 w-44 rounded-full bg-accent/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/page-header.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/page-header.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-wrap items-start gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center rounded-full border border-slate-100/70 bg-slate-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500",
                                children: eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/page-header.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-semibold leading-tight text-slate-900",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/page-header.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-3xl text-sm text-slate-600",
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/page-header.tsx",
                                        lineNumber: 34,
                                        columnNumber: 28
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/page-header.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/page-header.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    actions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex flex-col items-stretch gap-3",
                        children: actions
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/page-header.tsx",
                        lineNumber: 37,
                        columnNumber: 20
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/page-header.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mt-6",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout/page-header.tsx",
                lineNumber: 39,
                columnNumber: 19
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/page-header.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
function PageHeaderMeta({ items, columns = 3 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("grid gap-4 text-sm text-slate-600", columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"),
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-slate-100/70 bg-white/90 px-4 py-3 shadow-inner shadow-slate-200/70",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/page-header.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-base font-semibold text-slate-900",
                        children: item.value
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/page-header.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    item.helper ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-xs text-slate-500",
                        children: item.helper
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/page-header.tsx",
                        lineNumber: 68,
                        columnNumber: 26
                    }, this) : null
                ]
            }, `${item.label}-${item.value}`, true, {
                fileName: "[project]/src/components/layout/page-header.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/page-header.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/charts/time-series-chart.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "TimeSeriesChart",
    ()=>TimeSeriesChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TimeSeriesChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TimeSeriesChart() from the server but TimeSeriesChart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/charts/time-series-chart.tsx <module evaluation>", "TimeSeriesChart");
}),
"[project]/src/components/charts/time-series-chart.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "TimeSeriesChart",
    ()=>TimeSeriesChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TimeSeriesChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TimeSeriesChart() from the server but TimeSeriesChart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/charts/time-series-chart.tsx", "TimeSeriesChart");
}),
"[project]/src/components/charts/time-series-chart.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$time$2d$series$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/charts/time-series-chart.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$time$2d$series$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/charts/time-series-chart.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$time$2d$series$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/charts/bar-chart.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BarChartComponent",
    ()=>BarChartComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BarChartComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BarChartComponent() from the server but BarChartComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/charts/bar-chart.tsx <module evaluation>", "BarChartComponent");
}),
"[project]/src/components/charts/bar-chart.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BarChartComponent",
    ()=>BarChartComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BarChartComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BarChartComponent() from the server but BarChartComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/charts/bar-chart.tsx", "BarChartComponent");
}),
"[project]/src/components/charts/bar-chart.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/charts/bar-chart.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/charts/bar-chart.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/charts/pie-chart.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "PieChartComponent",
    ()=>PieChartComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PieChartComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PieChartComponent() from the server but PieChartComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/charts/pie-chart.tsx <module evaluation>", "PieChartComponent");
}),
"[project]/src/components/charts/pie-chart.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "PieChartComponent",
    ()=>PieChartComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PieChartComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PieChartComponent() from the server but PieChartComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/charts/pie-chart.tsx", "PieChartComponent");
}),
"[project]/src/components/charts/pie-chart.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$pie$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/charts/pie-chart.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$pie$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/charts/pie-chart.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$pie$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/charts/horizontal-bar-chart.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "HorizontalBarChart",
    ()=>HorizontalBarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HorizontalBarChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HorizontalBarChart() from the server but HorizontalBarChart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/charts/horizontal-bar-chart.tsx <module evaluation>", "HorizontalBarChart");
}),
"[project]/src/components/charts/horizontal-bar-chart.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "HorizontalBarChart",
    ()=>HorizontalBarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HorizontalBarChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HorizontalBarChart() from the server but HorizontalBarChart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/charts/horizontal-bar-chart.tsx", "HorizontalBarChart");
}),
"[project]/src/components/charts/horizontal-bar-chart.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$horizontal$2d$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/charts/horizontal-bar-chart.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$horizontal$2d$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/charts/horizontal-bar-chart.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$horizontal$2d$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ui/progress.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])('relative h-2 w-full overflow-hidden rounded-full bg-slate-100', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "h-full w-full flex-1 bg-blue-500 transition-all",
            style: {
                transform: `translateX(-${100 - (value ?? 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/progress.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/src/lib/format.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    [__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].CUSTOM]: 'integration:custom',
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
    const lastSuccess = new Map();
    for (const row of rows){
        if (!latest.has(row.key)) {
            latest.set(row.key, row);
        }
        const value = row.value;
        const isSuccess = !value?.error;
        if (isSuccess && !lastSuccess.has(row.key)) {
            lastSuccess.set(row.key, row);
        }
    }
    const formatStatus = (key)=>{
        const entry = latest.get(key);
        if (!entry) return null;
        const value = entry.value;
        const timestamp = value?.timestamp && typeof value.timestamp === 'string' ? value.timestamp : entry.createdAt.toISOString();
        const successEntry = lastSuccess.get(key) ?? (!value?.error ? entry : undefined);
        const successValue = successEntry?.value;
        const lastSuccessTimestamp = successEntry && (successValue?.timestamp && typeof successValue.timestamp === 'string' ? successValue.timestamp : successEntry.createdAt.toISOString());
        return {
            synced: typeof value?.synced === 'number' ? value.synced : undefined,
            error: typeof value?.error === 'string' ? value.error : undefined,
            timestamp,
            lastSuccessTimestamp,
            lastSuccessSynced: typeof successValue?.synced === 'number' ? successValue.synced : !value?.error && typeof value?.synced === 'number' ? value.synced : undefined
        };
    };
    return {
        etapestry: formatStatus('integration:etapestry'),
        eventbrite: formatStatus('integration:eventbrite'),
        custom: formatStatus('integration:custom')
    };
}
function isIntegrationStale(status, options = {}) {
    const { maxAgeHours = 12 } = options;
    if (!status) return true;
    const referenceTimestamp = status.lastSuccessTimestamp ?? status.timestamp;
    if (!referenceTimestamp) return true;
    const timestamp = new Date(referenceTimestamp);
    if (Number.isNaN(timestamp.getTime())) return true;
    const ageMs = Date.now() - timestamp.getTime();
    if (ageMs > maxAgeHours * 60 * 60 * 1000) {
        return true;
    }
    return false;
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
    if (!pledges.length) {
        const existingCount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pledge.count();
        if (existingCount > 0) {
            throw new Error('eTapestry returned zero pledges. Existing manual data was kept—verify API credentials or widen the sync date range.');
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateMetricsForSources"])([
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY
        ]);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordIntegrationSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].ETAPESTRY, {
            synced: 0
        });
        return {
            synced: 0
        };
    }
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
    if (!events.length) {
        const existingCount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.count();
        if (existingCount > 0) {
            throw new Error('Eventbrite returned zero events. Existing manual uploads were preserved—check API credentials or adjust the sync window.');
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateMetricsForSources"])([
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE
        ]);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordIntegrationSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MetricSource"].EVENTBRITE, {
            synced: 0
        });
        return {
            synced: 0
        };
    }
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
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

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
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[project]/src/lib/ga4.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSessionsOverTime",
    ()=>getSessionsOverTime,
    "getSummaryMetrics",
    ()=>getSummaryMetrics,
    "getTopPages",
    ()=>getTopPages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2d$analytics$2f$data$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google-analytics/data/build/src/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$google$2d$auth$2d$library$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/google-auth-library/build/src/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache-metrics.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-rsc] (ecmascript)");
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
    oauthClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$google$2d$auth$2d$library$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OAuth2Client"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GA4_OAUTH_CLIENT_ID, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GA4_OAUTH_CLIENT_SECRET);
    oauthClient.setCredentials({
        refresh_token: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GA4_OAUTH_REFRESH_TOKEN
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
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GA4_AUTH_MODE === 'oauth') {
        client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2d$analytics$2f$data$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BetaAnalyticsDataClient"]({
            authClient: getOAuthClient()
        });
    } else {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GA4_SERVICE_ACCOUNT) {
            throw new Error('GA4 service account credentials missing');
        }
        client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2d$analytics$2f$data$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BetaAnalyticsDataClient"]({
            credentials: {
                client_email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GA4_SERVICE_ACCOUNT.client_email,
                private_key: normalizePrivateKey(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GA4_SERVICE_ACCOUNT.private_key)
            }
        });
    }
    return client;
}
const property = `properties/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GA4_PROPERTY_ID}`;
function iso(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'yyyy-MM-dd');
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
            label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dt, 'MMM yy');
            dateValue = dt.toISOString();
        } else if (params.granularity === 'DAILY' && raw.length === 8) {
            const year = Number(raw.slice(0, 4));
            const month = Number(raw.slice(4, 6)) - 1;
            const day = Number(raw.slice(6, 8));
            const dt = new Date(Date.UTC(year, month, day));
            label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dt, 'MMM d');
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2d$metrics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withMetricCache"])({
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
"[project]/src/lib/dashboard-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDashboardData",
    ()=>getDashboardData
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$etapestry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/etapestry.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventbrite$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/eventbrite.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ga4.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time-series.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const toNumber = (value)=>Number(value ?? 0);
async function _getDashboardData(range = 'ytd') {
    const now = new Date();
    const summaryStart = range === '12m' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subMonths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfMonth"])(now), 11) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfYear"])(now);
    const monthlyStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subMonths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfMonth"])(now), 11);
    const monthlyRange = {
        from: monthlyStart,
        to: now
    };
    const last30Start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subDays"])(now, 30);
    try {
        const [fundsSummary, fundsYtdAggregate, totalDonors, activeDonors, eventKpis, gaSummary, gaSessions, eventSeries] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$etapestry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFundsRaisedSummary"])(monthlyRange),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pledge.aggregate({
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].donor.count(),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].donor.count({
                where: {
                    lastGiftDate: {
                        gte: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subDays"])(now, 365)
                    }
                }
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventbrite$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventKpis"])({
                from: summaryStart,
                to: now
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSummaryMetrics"])({
                from: last30Start,
                to: now
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionsOverTime"])({
                from: monthlyStart,
                to: now,
                granularity: 'MONTHLY'
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.findMany({
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
        const monthlyBuckets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMonthlyBuckets"])(12, now);
        const ticketsByMonth = new Map();
        for (const event of eventSeries){
            if (!event.startDate) continue;
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfMonth"])(event.startDate), 'yyyy-MM');
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
    const buckets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMonthlyBuckets"])(12, anchor);
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
async function getDashboardData(range = 'ytd') {
    // Cache for 60 seconds to improve performance
    // Only cache successful results, not errors
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
        try {
            return await _getDashboardData(range);
        } catch (error) {
            // Don't cache errors - throw them immediately
            throw error;
        }
    }, [
        `dashboard-${range}`
    ], {
        revalidate: 60,
        tags: [
            'dashboard',
            'donors',
            'events'
        ]
    })();
}
}),
"[project]/src/lib/events-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultEventFilters",
    ()=>defaultEventFilters,
    "getEventsData",
    ()=>getEventsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
;
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
async function _getEventsData(filters = {}, sortOptions = {}) {
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
        const eventRecords = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.findMany({
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
async function getEventsData(filters = {}, sortOptions = {}) {
    // Cache for 30 seconds to improve performance
    // Only cache successful results, not errors
    const cacheKey = `events-${JSON.stringify({
        filters,
        sortOptions
    })}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
        try {
            return await _getEventsData(filters, sortOptions);
        } catch (error) {
            // Don't cache errors - throw them immediately
            throw error;
        }
    }, [
        cacheKey
    ], {
        revalidate: 30,
        tags: [
            'events'
        ]
    })();
}
function defaultEventFilters() {
    return {
        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(new Date()), 90),
        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(new Date()), 180)
    };
}
}),
"[project]/src/lib/analytics-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultAnalyticsFilters",
    ()=>defaultAnalyticsFilters,
    "getAnalyticsData",
    ()=>getAnalyticsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ga4.ts [app-rsc] (ecmascript)");
;
;
function defaultAnalyticsFilters() {
    const to = new Date();
    return {
        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subDays"])(to, 30),
        to
    };
}
async function getAnalyticsData(filters) {
    const [summary, sessionsSeries, topPages] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSummaryMetrics"])(filters),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionsOverTime"])({
            ...filters,
            granularity: 'DAILY'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ga4$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTopPages"])(filters)
    ]);
    return {
        summary,
        sessionsSeries,
        topPages
    };
}
}),
"[project]/src/lib/donor-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDonorList",
    ()=>getDonorList
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time-series.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const toNumber = (value)=>Number(value ?? 0);
async function _getDonorList(params) {
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
    const acquisitionBuckets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2d$series$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMonthlyBuckets"])(12);
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
        const monthlyWindowStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subMonths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfMonth"])(now), 11);
        const yearlyWindowStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfYear"])(new Date(now.getFullYear() - 5, 0, 1));
        const allTimeStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfYear"])(new Date(2006, 0, 1));
        const [totalMatching, donors, totalDonors, activeDonors, averageLifetimeValue, monthlyGiftsRaw, yearlyGiftsRaw, giftDistributionRaw, allTimeGifts] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].donor.count({
                where
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].donor.findMany({
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].donor.count(),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].donor.count({
                where: {
                    lastGiftDate: {
                        gte: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subDays"])(now, 365)
                    }
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].donor.aggregate({
                _avg: {
                    totalGiven: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
        SELECT TO_CHAR("date", 'YYYY-MM') AS month,
               SUM("amount") AS total,
               COUNT(*)::bigint AS count
        FROM "Pledge"
        WHERE "status" = ${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"].RECEIVED}::"PledgeStatus"
          AND "date" >= ${monthlyWindowStart}
        GROUP BY month
        ORDER BY month ASC
      `,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
        SELECT EXTRACT(YEAR FROM "date")::int AS year,
               SUM("amount") AS total,
               COUNT(*)::bigint AS count
        FROM "Pledge"
        WHERE "status" = ${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PledgeStatus"].RECEIVED}::"PledgeStatus"
          AND "date" >= ${yearlyWindowStart}
        GROUP BY year
        ORDER BY year ASC
      `,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
        SELECT CASE
          WHEN "totalGiven" < 1000 THEN '< $1k'
          WHEN "totalGiven" < 5000 THEN '$1k - $5k'
          WHEN "totalGiven" < 10000 THEN '$5k - $10k'
          ELSE '$10k+'
        END AS range,
        COUNT(*)::bigint AS count
        FROM "Donor"
        GROUP BY range
      `,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
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
        const monthlyGiftsMap = new Map(monthlyGiftsRaw.map((row)=>[
                row.month,
                {
                    total: toNumber(row.total),
                    count: Number(row.count)
                }
            ]));
        const giftsMonthly = acquisitionBuckets.map((bucket)=>{
            const data = monthlyGiftsMap.get(bucket.key) ?? {
                total: 0,
                count: 0
            };
            return {
                label: bucket.label,
                value: data.total,
                count: data.count
            };
        });
        const giftsYearly = yearlyGiftsRaw.map((row)=>({
                label: `${row.year}`,
                value: toNumber(row.total),
                count: Number(row.count)
            }));
        const giftsAllTime = allTimeGifts.map((row)=>({
                label: `${row.year}`,
                value: toNumber(row.total),
                count: Number(row.count)
            }));
        const giftDistributionMap = new Map(giftDistributionRaw.map((row)=>[
                row.range,
                Number(row.count)
            ]));
        const giftDistribution = giftRanges.map((range)=>({
                name: range.name,
                value: giftDistributionMap.get(range.name) ?? 0
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
async function getDonorList(params) {
    // Cache for 30 seconds to improve performance
    // Only cache successful results, not errors
    const cacheKey = `donor-list-${JSON.stringify(params)}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
        try {
            return await _getDonorList(params);
        } catch (error) {
            // Don't cache errors - throw them immediately
            throw error;
        }
    }, [
        cacheKey
    ], {
        revalidate: 30,
        tags: [
            'donors'
        ]
    })();
}
}),
"[project]/src/lib/insights-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInsightsData",
    ()=>getInsightsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dashboard-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$events$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/events-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$donor$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/donor-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/integration-sync.ts [app-rsc] (ecmascript)");
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
        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subMonths"])(now, 11),
        to: now
    };
    const eventFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$events$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultEventFilters"])();
    const analyticsFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAnalyticsFilters"])();
    const [dashboard, donors, eventsData, analyticsData, integrationStatuses] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDashboardData"])('12m'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$donor$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDonorList"])({
            page: 1,
            pageSize: 5
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$events$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventsData"])(eventFilters),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAnalyticsData"])(analyticsFilters),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIntegrationStatuses"])()
    ]);
    const hasEtapestryData = integrationStatuses.etapestry && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isIntegrationStale"])(integrationStatuses.etapestry);
    const hasEventbriteData = integrationStatuses.eventbrite && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$integration$2d$sync$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isIntegrationStale"])(integrationStatuses.eventbrite);
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
"[project]/src/app/(dashboard)/insights/_components/insights-report-button.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "InsightsReportButton",
    ()=>InsightsReportButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const InsightsReportButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InsightsReportButton() from the server but InsightsReportButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(dashboard)/insights/_components/insights-report-button.tsx <module evaluation>", "InsightsReportButton");
}),
"[project]/src/app/(dashboard)/insights/_components/insights-report-button.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "InsightsReportButton",
    ()=>InsightsReportButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const InsightsReportButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InsightsReportButton() from the server but InsightsReportButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(dashboard)/insights/_components/insights-report-button.tsx", "InsightsReportButton");
}),
"[project]/src/app/(dashboard)/insights/_components/insights-report-button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$insights$2f$_components$2f$insights$2d$report$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/insights/_components/insights-report-button.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$insights$2f$_components$2f$insights$2d$report$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/insights/_components/insights-report-button.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$insights$2f$_components$2f$insights$2d$report$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/(dashboard)/insights/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InsightsPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/page-header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$time$2d$series$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/time-series-chart.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/bar-chart.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$pie$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/pie-chart.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$horizontal$2d$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/horizontal-bar-chart.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$insights$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/insights-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$insights$2f$_components$2f$insights$2d$report$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/insights/_components/insights-report-button.tsx [app-rsc] (ecmascript)");
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
const dynamic = 'force-dynamic';
function formatMomentum(value) {
    if (!Number.isFinite(value) || value === 0) return 'vs prior period';
    const sign = value > 0 ? '+' : '';
    return `${sign}${(value * 100).toFixed(1)} pts vs prior period`;
}
const impactStyles = {
    positive: 'border-green-200 bg-green-50 text-green-900',
    negative: 'border-red-200 bg-red-50 text-red-900',
    neutral: 'border-slate-200 bg-white text-slate-700'
};
function ProgressBar({ value, color }) {
    if (!Number.isFinite(value)) return null;
    const clamped = Math.min(1, Math.max(0.04, value));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-full",
            style: {
                width: `${clamped * 100}%`,
                backgroundColor: color
            }
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
        lineNumber: 31,
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
function formatSeconds(value) {
    const minutes = Math.floor(value / 60);
    const seconds = Math.round(value % 60);
    return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
}
async function InsightsPage() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$insights$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInsightsData"])();
    const topTickets = (data.events.data.charts.topTickets ?? []).slice(0, 8);
    const topRevenueEvents = (data.events.data.charts.topRevenue ?? []).slice(0, 8);
    const gaSummary = data.analytics.data.summary;
    const donorRatio = data.donors.summary.totalDonors > 0 ? data.donors.summary.activeDonors / data.donors.summary.totalDonors : 0;
    const grossRevenue = data.events.data.summary.grossRevenue;
    const netRevenue = data.events.data.summary.netRevenue;
    const netShare = grossRevenue > 0 ? netRevenue / grossRevenue : 0;
    const generatedOn = formatDateTime(data.generatedAt);
    const eventWindowStart = data.events.filters.from ?? data.range.from;
    const eventWindowEnd = data.events.filters.to ?? data.range.to;
    const analyticsWindowStart = data.analytics.filters.from ?? data.range.from;
    const analyticsWindowEnd = data.analytics.filters.to ?? data.range.to;
    const giftsMonthlySeries = data.donors.charts.giftsMonthly.slice(-12).map((bucket)=>({
            ...bucket,
            value: Math.round(bucket.value)
        }));
    const giftsMonthlyGiftCount = giftsMonthlySeries.reduce((sum, bucket)=>sum + bucket.count, 0);
    const giftDistributionTotal = data.donors.charts.giftDistribution.reduce((sum, bucket)=>sum + bucket.value, 0) || 1;
    const avgNetPerTicket = data.events.data.summary.ticketsSold > 0 ? data.events.data.summary.netRevenue / data.events.data.summary.ticketsSold : 0;
    const channelBlend = data.dashboard.charts.monthly.slice(-6).map((point)=>({
            label: point.label,
            donorFunds: Math.round(point.funds),
            eventRevenue: Math.round(point.tickets * avgNetPerTicket)
        }));
    const revenueMix = [
        {
            name: 'Direct gifts (YTD)',
            value: Math.max(0, data.dashboard.kpis.fundsYtd)
        },
        {
            name: 'Event net (window)',
            value: Math.max(0, data.events.data.summary.netRevenue)
        }
    ];
    const funnelData = [
        {
            label: 'Sessions (30d)',
            value: data.analytics.data.summary.sessions ?? 0
        },
        {
            label: 'Tickets sold (event window)',
            value: data.events.data.summary.ticketsSold ?? 0
        },
        {
            label: 'Active donors (12m)',
            value: data.donors.summary.activeDonors ?? 0
        }
    ];
    const giftsByLabel = new Map((data.donors.charts.giftsMonthly ?? []).map((bucket)=>[
            bucket.label,
            bucket.count
        ]));
    const donorTicketBridge = data.dashboard.charts.monthly.slice(-12).map((point)=>({
            label: point.label,
            tickets: Math.max(0, point.tickets),
            giftCount: giftsByLabel.get(point.label) ?? 0
        }));
    const summaryItems = [
        {
            label: 'Funds raised (YTD)',
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(data.dashboard.kpis.fundsYtd),
            helper: formatMomentum(data.metrics.fundsMomentum)
        },
        {
            label: 'Active donors',
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(data.dashboard.kpis.activeDonors),
            helper: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(data.donors.summary.totalDonors)} total`
        },
        {
            label: 'Tickets sold',
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(data.dashboard.kpis.ticketsSold),
            helper: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatPercent"])(data.metrics.avgOccupancy, 0)} avg capacity`
        },
        {
            label: 'Sessions (30d)',
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(data.dashboard.kpis.sessionsLast30Days),
            helper: formatMomentum(data.metrics.sessionsMomentum)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHeader"], {
                eyebrow: "Intelligence",
                title: "Integrated insights",
                description: "Unified dashboard for revenue, donor, event, and digital performance.",
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$insights$2f$_components$2f$insights$2d$report$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InsightsReportButton"], {}, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                    lineNumber: 121,
                    columnNumber: 18
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHeaderMeta"], {
                    items: summaryItems,
                    columns: 4
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                title: "Insight highlights",
                description: "Auto-generated observations from merged datasets.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:grid-cols-2",
                    children: data.highlights.map((highlight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-2xl border p-4 shadow-sm transition ${impactStyles[highlight.impact] ?? impactStyles.neutral}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold",
                                    children: highlight.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm leading-6",
                                    suppressHydrationWarning: true,
                                    children: highlight.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, highlight.title, true, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6 xl:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Donor health",
                        description: "Fundraising signals from the eTapestry sync.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600",
                                            children: "Total donors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-slate-900",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(data.donors.summary.totalDonors)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "All-time in CRM"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600",
                                            children: "Active donors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-slate-900",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(data.donors.summary.activeDonors)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: [
                                                "Gifted in last 12 months (",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatPercent"])(donorRatio),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                            value: donorRatio,
                                            color: "#2563eb"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600",
                                            children: "Avg lifetime value"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-slate-900",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(data.donors.summary.averageLifetimeValue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Mean revenue per donor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Revenue mix",
                        description: "Eventbrite revenue + capacity snapshot.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600",
                                            children: "Gross revenue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-slate-900",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(grossRevenue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(data.events.data.summary.ticketsSold),
                                                " tickets sold"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600",
                                            children: "Net revenue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-slate-900",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(netRevenue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatPercent"])(netShare),
                                                " of gross captured"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                            value: netShare,
                                            color: "#059669"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600",
                                            children: "Avg capacity fill"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-slate-900",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatPercent"])(data.metrics.avgOccupancy)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Across synced events"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                            value: data.metrics.avgOccupancy,
                                            color: "#f97316"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Data freshness",
                        description: "Windows synced into this briefing.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                            className: "space-y-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "font-semibold text-slate-600",
                                            children: "Insights generated"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "text-slate-900",
                                            children: generatedOn
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "font-semibold text-slate-600",
                                            children: "Financial window"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "text-slate-900",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(data.range.from),
                                                " – ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(data.range.to)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "font-semibold text-slate-600",
                                            children: "Events window"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "text-slate-900",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(eventWindowStart),
                                                " – ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(eventWindowEnd)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "font-semibold text-slate-600",
                                            children: "Web analytics window"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "text-slate-900",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(analyticsWindowStart),
                                                " – ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(analyticsWindowEnd)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                title: "Monthly performance",
                description: "Funds raised, tickets sold, and website sessions across the last 12 months.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$time$2d$series$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TimeSeriesChart"], {
                    data: data.dashboard.charts.monthly,
                    lines: [
                        {
                            dataKey: 'funds',
                            color: '#0f172a',
                            name: 'Funds raised ($)'
                        },
                        {
                            dataKey: 'tickets',
                            color: '#2563eb',
                            name: 'Tickets sold'
                        },
                        {
                            dataKey: 'sessions',
                            color: '#059669',
                            name: 'Sessions'
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Top donors",
                        description: "Highest lifetime value donors with most recent gift date.",
                        actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500",
                            children: [
                                "Avg lifetime value ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(data.donors.summary.averageLifetimeValue)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["THead"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                                children: "Lifetime given"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                                children: "Last gift"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TBody"], {
                                        children: data.donors.donors.map((donor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                        className: "font-semibold text-slate-900",
                                                        children: donor.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                        children: donor.email ?? '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(donor.totalGiven)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                        children: donor.lastGiftDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(donor.lastGiftDate) : 'No gifts'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, donor.id, true, {
                                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Event performance snapshot",
                        description: "Most recent Eventbrite programs with revenue and capacity details.",
                        actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(data.events.data.summary.upcomingEvents),
                                " upcoming ·",
                                ' ',
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(data.events.data.summary.pastEvents),
                                " past"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 268,
                            columnNumber: 13
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["THead"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                                children: "Dates"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                                children: "Tickets"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                                children: "Capacity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                                children: "Gross revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TBody"], {
                                        children: data.events.data.events.slice(0, 5).map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                        className: "font-semibold text-slate-900",
                                                        children: event.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                        className: "text-sm text-slate-600",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(event.startDate),
                                                            " – ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(event.endDate)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(event.ticketsSold)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(event.ticketsTotal),
                                                            " (",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatPercent"])(event.ticketsTotal ? event.ticketsSold / event.ticketsTotal : 0),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(event.grossRevenue)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, event.id, true, {
                                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Tickets per event",
                        description: "Top recent programs ranked by attendance.",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$horizontal$2d$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HorizontalBarChart"], {
                                data: topTickets,
                                bars: [
                                    {
                                        dataKey: 'tickets',
                                        color: '#2563eb',
                                        name: 'Tickets sold'
                                    }
                                ],
                                categoryKey: "name",
                                height: 380
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: "Source: Eventbrite sync window."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Revenue per event",
                        description: "Gross vs. net performance for recent programs.",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$horizontal$2d$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HorizontalBarChart"], {
                                data: topRevenueEvents,
                                bars: [
                                    {
                                        dataKey: 'gross',
                                        color: '#0f172a',
                                        name: 'Gross'
                                    },
                                    {
                                        dataKey: 'net',
                                        color: '#059669',
                                        name: 'Net'
                                    }
                                ],
                                categoryKey: "name",
                                height: 380
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: "Net overlays gross to highlight capture per program."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Giving history",
                        description: "Monthly received gifts (last 12 months).",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$time$2d$series$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TimeSeriesChart"], {
                            data: giftsMonthlySeries,
                            lines: [
                                {
                                    dataKey: 'value',
                                    color: '#2563eb',
                                    name: 'Total received ($)'
                                }
                            ],
                            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: [
                                    giftsMonthlyGiftCount.toLocaleString(),
                                    " recorded gifts in this period."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 334,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Gift size distribution",
                        description: "Share of donors by lifetime giving.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: data.donors.charts.giftDistribution.map((bucket)=>{
                                const percent = bucket.value / giftDistributionTotal * 100;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm font-semibold text-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: bucket.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        bucket.value.toLocaleString(),
                                                        " donors · ",
                                                        percent.toFixed(1),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 346,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Progress"], {
                                            value: percent,
                                            className: "mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, bucket.name, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Channel blend (last 6 months)",
                        description: "Comparing donor funds vs. event net revenue.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BarChartComponent"], {
                            data: channelBlend,
                            xKey: "label",
                            bars: [
                                {
                                    dataKey: 'donorFunds',
                                    color: '#2563eb',
                                    name: 'Donor funds ($)'
                                },
                                {
                                    dataKey: 'eventRevenue',
                                    color: '#059669',
                                    name: 'Event net ($)'
                                }
                            ],
                            stacked: true,
                            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: "Displays overlap in donor + event revenue streams."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 370,
                                columnNumber: 21
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Revenue mix snapshot",
                        description: "Share of direct donations vs. event net.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$pie$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PieChartComponent"], {
                            data: revenueMix,
                            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: "Helps explain how much revenue is tied to each source."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 376,
                                columnNumber: 21
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Digital-to-donor funnel",
                        description: "How sessions convert to ticket buyers and active donors.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BarChartComponent"], {
                            data: funnelData,
                            xKey: "label",
                            bars: [
                                {
                                    dataKey: 'value',
                                    color: '#0f172a',
                                    name: 'Audience size'
                                }
                            ],
                            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: "Uses GA4 sessions, Eventbrite tickets, and eTapestry donors."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 387,
                                columnNumber: 21
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Tickets sold vs. gift activity",
                        description: "Does program demand correlate with donor engagement?",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$bar$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BarChartComponent"], {
                            data: donorTicketBridge.slice(-6),
                            xKey: "label",
                            bars: [
                                {
                                    dataKey: 'tickets',
                                    color: '#2563eb',
                                    name: 'Tickets sold'
                                },
                                {
                                    dataKey: 'giftCount',
                                    color: '#9333ea',
                                    name: 'Gift count'
                                }
                            ],
                            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: "Aligns Eventbrite ticketing with received gift counts."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 398,
                                columnNumber: 21
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6 xl:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        className: "xl:col-span-2",
                        title: "Sessions (last 30 days)",
                        description: "Google Analytics 4 daily sessions trend.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$time$2d$series$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TimeSeriesChart"], {
                            data: data.analytics.data.sessionsSeries.points,
                            lines: [
                                {
                                    dataKey: 'value',
                                    color: '#0f172a',
                                    name: 'Sessions'
                                }
                            ],
                            footer: data.analytics.data.sessionsSeries.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-500",
                                children: data.analytics.data.sessionsSeries.error
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 414,
                                columnNumber: 17
                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: "Source: Google Analytics Data API"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                lineNumber: 416,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Engagement breakdown",
                        description: "Key GA4 metrics for the selected window.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600",
                                            children: "Users"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 424,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-slate-900",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(gaSummary.users)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Unique visitors in window"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600",
                                            children: "Sessions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 429,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-slate-900",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(gaSummary.sessions)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: formatMomentum(data.metrics.sessionsMomentum)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 431,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600",
                                            children: "Pageviews"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-slate-900",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(gaSummary.pageviews)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 435,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Total content views"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 436,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600",
                                            children: "Avg engagement"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-slate-900",
                                            children: formatSeconds(gaSummary.averageEngagementTime)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Per engaged session"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 441,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 438,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                title: "Top pages",
                description: "Highest pageviews by title.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["THead"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                            children: "Path"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                            children: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TH"], {
                                            children: "Pageviews"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 453,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TBody"], {
                                    children: data.analytics.data.topPages.rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                    className: "font-medium",
                                                    children: row.path
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                    children: row.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TD"], {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(row.pageviews)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, `${row.path}-${row.title}`, true, {
                                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 448,
                        columnNumber: 9
                    }, this),
                    data.analytics.data.topPages.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-red-500",
                        children: data.analytics.data.topPages.error
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                        lineNumber: 467,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
                lineNumber: 447,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/insights/page.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(dashboard)/insights/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(dashboard)/insights/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b5a0033b._.js.map