(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/charts/time-series-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimeSeriesChart",
    ()=>TimeSeriesChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
"use client";
;
;
function TimeSeriesChart({ data, lines, xKey = "label", height = 320, footer }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[320px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: height,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                        data: data,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                className: "stroke-slate-200"
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts/time-series-chart.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: xKey,
                                tick: {
                                    fill: "#475569",
                                    fontSize: 12
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts/time-series-chart.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                tick: {
                                    fill: "#475569",
                                    fontSize: 12
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts/time-series-chart.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    borderRadius: 12,
                                    borderColor: "#e2e8f0",
                                    boxShadow: "0 10px 30px rgba(15,23,42,0.15)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts/time-series-chart.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                fileName: "[project]/src/components/charts/time-series-chart.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            lines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                    type: "monotone",
                                    dataKey: line.dataKey,
                                    name: line.name,
                                    stroke: line.color,
                                    strokeWidth: line.strokeWidth ?? 3,
                                    dot: line.dot ?? false
                                }, line.dataKey, false, {
                                    fileName: "[project]/src/components/charts/time-series-chart.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/charts/time-series-chart.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/charts/time-series-chart.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/charts/time-series-chart.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            footer
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/charts/time-series-chart.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = TimeSeriesChart;
var _c;
__turbopack_context__.k.register(_c, "TimeSeriesChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(dashboard)/range-selector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardRangeSelector",
    ()=>DashboardRangeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ranges = [
    {
        value: 'ytd',
        label: 'Year to date'
    },
    {
        value: '12m',
        label: 'Last 12 months'
    }
];
function DashboardRangeSelector({ currentRange }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    function updateRange(value) {
        const params = new URLSearchParams(searchParams.toString());
        params.set('range', value);
        router.replace(`${pathname}?${params.toString()}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1",
        children: ranges.map((range)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: range.value === currentRange ? 'primary' : 'ghost',
                size: "sm",
                className: "rounded-xl",
                onClick: ()=>updateRange(range.value),
                children: range.label
            }, range.value, false, {
                fileName: "[project]/src/app/(dashboard)/range-selector.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/range-selector.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(DashboardRangeSelector, "66hrdMMH0WyruZN7frcpeuU7V/k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = DashboardRangeSelector;
var _c;
__turbopack_context__.k.register(_c, "DashboardRangeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(dashboard)/actions/data:4a198c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00e796c46ae6800f9326b0250049149bc0be344449":"syncIntegrationsAction"},"src/app/(dashboard)/actions/sync-integrations.ts",""] */ __turbopack_context__.s([
    "syncIntegrationsAction",
    ()=>syncIntegrationsAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var syncIntegrationsAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00e796c46ae6800f9326b0250049149bc0be344449", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "syncIntegrationsAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3luYy1pbnRlZ3JhdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBNZXRyaWNTb3VyY2UgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5cclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xyXG5pbXBvcnQgeyBzeW5jUGxlZGdlc1RvRGIgfSBmcm9tIFwiQC9saWIvZXRhcGVzdHJ5XCI7XHJcbmltcG9ydCB7IHN5bmNFdmVudHNUb0RiIH0gZnJvbSBcIkAvbGliL2V2ZW50YnJpdGVcIjtcclxuaW1wb3J0IHsgcmVjb3JkSW50ZWdyYXRpb25TeW5jIH0gZnJvbSBcIkAvbGliL2ludGVncmF0aW9uLXN5bmNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jSW50ZWdyYXRpb25zQWN0aW9uKCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICBjb25zdCBlbXB0eVJlc3VsdCA9IHtcclxuICAgIGV0YXBlc3RyeTogbnVsbCxcclxuICAgIGV2ZW50YnJpdGU6IG51bGxcclxuICB9O1xyXG5cclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IFtcIkF1dGhlbnRpY2F0aW9uIHJlcXVpcmVkXCJdLCByZXN1bHQ6IGVtcHR5UmVzdWx0IH07XHJcbiAgfVxyXG4gIGlmIChzZXNzaW9uLnVzZXIucm9sZSAhPT0gXCJBRE1JTlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBbXCJBZG1pbiBhY2Nlc3MgcmVxdWlyZWRcIl0sIHJlc3VsdDogZW1wdHlSZXN1bHQgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdDoge1xyXG4gICAgZXRhcGVzdHJ5OiB7IHN5bmNlZDogbnVtYmVyIH0gfCBudWxsO1xyXG4gICAgZXZlbnRicml0ZTogeyBzeW5jZWQ6IG51bWJlciB9IHwgbnVsbDtcclxuICB9ID0ge1xyXG4gICAgZXRhcGVzdHJ5OiBudWxsLFxyXG4gICAgZXZlbnRicml0ZTogbnVsbFxyXG4gIH07XHJcbiAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICB0cnkge1xyXG4gICAgcmVzdWx0LmV0YXBlc3RyeSA9IGF3YWl0IHN5bmNQbGVkZ2VzVG9EYigpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVua25vd24gZVRhcGVzdHJ5IGVycm9yXCI7XHJcbiAgICBlcnJvcnMucHVzaChgZVRhcGVzdHJ5OiAke21lc3NhZ2V9YCk7XHJcbiAgICBhd2FpdCByZWNvcmRJbnRlZ3JhdGlvblN5bmMoTWV0cmljU291cmNlLkVUQVBFU1RSWSwgeyBlcnJvcjogbWVzc2FnZSB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICByZXN1bHQuZXZlbnRicml0ZSA9IGF3YWl0IHN5bmNFdmVudHNUb0RiKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBFdmVudGJyaXRlIGVycm9yXCI7XHJcbiAgICBlcnJvcnMucHVzaChgRXZlbnRicml0ZTogJHttZXNzYWdlfWApO1xyXG4gICAgYXdhaXQgcmVjb3JkSW50ZWdyYXRpb25TeW5jKE1ldHJpY1NvdXJjZS5FVkVOVEJSSVRFLCB7IGVycm9yOiBtZXNzYWdlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gIHJldmFsaWRhdGVQYXRoKFwiL2V2ZW50c1wiKTtcclxuICByZXZhbGlkYXRlUGF0aChcIi9kb25vcnNcIik7XHJcblxyXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzLCByZXN1bHQgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHJlc3VsdCB9O1xyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnVUFXc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntegrationSyncPanel",
    ()=>IntegrationSyncPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$data$3a$4a198c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/actions/data:4a198c [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function IntegrationSyncPanel({ statuses }) {
    _s();
    const [pending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [latest, setLatest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(statuses);
    function formatTimestamp(timestamp) {
        if (!timestamp) return "Never synced";
        const date = new Date(timestamp);
        if (Number.isNaN(date.getTime())) return "Unknown";
        return date.toLocaleString();
    }
    function formatStatus(status) {
        if (!status) {
            return "Never synced";
        }
        if (status.error) {
            const fallback = status.lastSuccessTimestamp ? `Last success ${formatTimestamp(status.lastSuccessTimestamp)}` : "No successful sync recorded";
            return `Failed · ${status.error} · ${fallback}`;
        }
        return `Last synced ${formatTimestamp(status.timestamp)} · ${status.synced ?? 0} records`;
    }
    function handleSync() {
        setMessage(null);
        setError(null);
        startTransition(async ()=>{
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$data$3a$4a198c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["syncIntegrationsAction"])();
                if (!result.success) {
                    setError(result.errors?.join(' ') ?? 'Unable to sync data.');
                    return;
                }
                const timestamp = new Date().toISOString();
                setLatest({
                    etapestry: {
                        synced: result.result.etapestry?.synced,
                        timestamp,
                        lastSuccessTimestamp: timestamp,
                        lastSuccessSynced: result.result.etapestry?.synced
                    },
                    eventbrite: {
                        synced: result.result.eventbrite?.synced,
                        timestamp,
                        lastSuccessTimestamp: timestamp,
                        lastSuccessSynced: result.result.eventbrite?.synced
                    },
                    custom: latest.custom
                });
                setMessage(`eTapestry synced ${result.result.etapestry?.synced ?? 0} pledges · Eventbrite synced ${result.result.eventbrite?.synced ?? 0} events.`);
            } catch (err) {
                console.error(err);
                setError(err instanceof Error ? err.message : 'Failed to sync data.');
            }
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 text-sm md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-slate-200 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
                                children: "eTapestry"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-slate-700",
                                children: formatStatus(latest.etapestry)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-slate-200 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
                                children: "Eventbrite"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-slate-700",
                                children: formatStatus(latest.eventbrite)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "primary",
                onClick: handleSync,
                disabled: pending,
                children: pending ? "Syncing data..." : "Sync data sources"
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-green-600",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx",
                lineNumber: 92,
                columnNumber: 18
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx",
                lineNumber: 93,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/_components/integration-sync-panel.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(IntegrationSyncPanel, "etaf5F2/RkFz/teoof512gPp+mA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = IntegrationSyncPanel;
var _c;
__turbopack_context__.k.register(_c, "IntegrationSyncPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(dashboard)/actions/data:ebec1e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"600ed49537ea6f4783ff1d6d42249a3194c15ba525":"manualImportAction"},"src/app/(dashboard)/actions/manual-import.ts",""] */ __turbopack_context__.s([
    "manualImportAction",
    ()=>manualImportAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var manualImportAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("600ed49537ea6f4783ff1d6d42249a3194c15ba525", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "manualImportAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWFudWFsLWltcG9ydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUhhc2gsIHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nO1xyXG5cclxuaW1wb3J0IHsgTWV0cmljU291cmNlLCBQcmlzbWEgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnY3N2LXBhcnNlL3N5bmMnO1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XHJcblxyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGliL2F1dGgnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnO1xyXG5pbXBvcnQgeyBub3JtYWxpemVQbGVkZ2VTdGF0dXMsIHJlY2FsY3VsYXRlRG9ub3JMaWZldGltZVZhbHVlcyB9IGZyb20gJ0AvbGliL2V0YXBlc3RyeSc7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUV2ZW50U3RhdHVzIH0gZnJvbSAnQC9saWIvZXZlbnRicml0ZSc7XHJcbmltcG9ydCB7IGludmFsaWRhdGVNZXRyaWNzRm9yU291cmNlcywgcmVjb3JkSW50ZWdyYXRpb25TeW5jIH0gZnJvbSAnQC9saWIvaW50ZWdyYXRpb24tc3luYyc7XHJcbmltcG9ydCB0eXBlIHsgTWFudWFsSW1wb3J0UmVzdWx0IH0gZnJvbSAnQC9hcHAvKGRhc2hib2FyZCkvYWN0aW9ucy9tYW51YWwtaW1wb3J0LXNoYXJlZCc7XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0RW1haWxzKHJhdz86IHN0cmluZyB8IG51bGwpIHtcclxuICBpZiAoIXJhdykgcmV0dXJuIFtdO1xyXG4gIHJldHVybiByYXdcclxuICAgIC5zcGxpdCgvXFxyP1xcbnxbLDtdLylcclxuICAgIC5tYXAoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSlcclxuICAgIC5maWx0ZXIoQm9vbGVhbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gIHJldHVybiB2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplUGhvbmUodmFsdWU/OiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZGlnaXRzID0gdmFsdWUucmVwbGFjZSgvXFxEKy9nLCAnJyk7XHJcbiAgcmV0dXJuIGRpZ2l0cyB8fCBudWxsO1xyXG59XHJcblxyXG50eXBlIFNvdXJjZVR5cGUgPSAnZXRhcGVzdHJ5JyB8ICdldmVudGJyaXRlJztcclxuXHJcbmNvbnN0IHBsZWRnZVJvd1NjaGVtYSA9IHoub2JqZWN0KHtcclxuICBwbGVkZ2VfaWQ6IHouc3RyaW5nKCkubWluKDEsICdwbGVkZ2VfaWQgaXMgcmVxdWlyZWQnKSxcclxuICBkb25vcl9uYW1lOiB6LnN0cmluZygpLm1pbigxLCAnZG9ub3JfbmFtZSBpcyByZXF1aXJlZCcpLFxyXG4gIGRvbm9yX2VtYWlsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgZG9ub3JfcGhvbmU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBkb25vcl9hZGRyZXNzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgZG9ub3JfY2l0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIGRvbm9yX3N0YXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgZG9ub3JfcG9zdGFsX2NvZGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBhbW91bnQ6IHouc3RyaW5nKCkubWluKDEsICdhbW91bnQgaXMgcmVxdWlyZWQnKSxcclxuICBkYXRlOiB6LnN0cmluZygpLm1pbigxLCAnZGF0ZSBpcyByZXF1aXJlZCcpLFxyXG4gIHN0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIGNhbXBhaWduOiB6LnN0cmluZygpLm9wdGlvbmFsKClcclxufSk7XHJcblxyXG5jb25zdCBldmVudFJvd1NjaGVtYSA9IHoub2JqZWN0KHtcclxuICBldmVudF9pZDogei5zdHJpbmcoKS5taW4oMSwgJ2V2ZW50X2lkIGlzIHJlcXVpcmVkJyksXHJcbiAgbmFtZTogei5zdHJpbmcoKS5taW4oMSwgJ25hbWUgaXMgcmVxdWlyZWQnKSxcclxuICBzdGFydF9kYXRlOiB6LnN0cmluZygpLm1pbigxLCAnc3RhcnRfZGF0ZSBpcyByZXF1aXJlZCcpLFxyXG4gIGVuZF9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgdmVudWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBzdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICB0aWNrZXRzX3RvdGFsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgdGlja2V0c19zb2xkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgZ3Jvc3NfcmV2ZW51ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIG5ldF9yZXZlbnVlOiB6LnN0cmluZygpLm9wdGlvbmFsKClcclxufSk7XHJcblxyXG5jb25zdCBldmVudGJyaXRlT3JkZXJTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgZXZlbnRfaWQ6IHouc3RyaW5nKCkubWluKDEsICdldmVudF9pZCBpcyByZXF1aXJlZCcpLFxyXG4gIGV2ZW50X25hbWU6IHouc3RyaW5nKCkubWluKDEsICdldmVudF9uYW1lIGlzIHJlcXVpcmVkJyksXHJcbiAgZXZlbnRfc3RhcnRfZGF0ZTogei5zdHJpbmcoKS5taW4oMSwgJ2V2ZW50X3N0YXJ0X2RhdGUgaXMgcmVxdWlyZWQnKSxcclxuICBldmVudF9zdGFydF90aW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgZXZlbnRfdGltZXpvbmU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBldmVudF9sb2NhdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIG9yZGVyX2lkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgb3JkZXJfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIHRpY2tldF9xdWFudGl0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIGdyb3NzX3NhbGVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgdGlja2V0X3JldmVudWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBhZGRfb25zX3JldmVudWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICB0aWNrZXRfYWRkX29uc19yZXZlbnVlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgbmV0X3NhbGVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgcGF5bWVudF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxyXG59KTtcclxuXHJcbnR5cGUgTm9ybWFsaXplZEV2ZW50Um93ID0gei5pbmZlcjx0eXBlb2YgZXZlbnRSb3dTY2hlbWE+O1xyXG50eXBlIExlZ2FjeUV2ZW50YnJpdGVSb3cgPSB6LmluZmVyPHR5cGVvZiBldmVudGJyaXRlT3JkZXJTY2hlbWE+O1xyXG5cclxuY29uc3QgZXRhcGVzdHJ5RXhwb3J0U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGRhdGU6IHouc3RyaW5nKCkubWluKDEsICdkYXRlIGlzIHJlcXVpcmVkJyksXHJcbiAgcm9sZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIGFjY291bnRfbmFtZTogei5zdHJpbmcoKS5taW4oMSwgJ2FjY291bnRfbmFtZSBpcyByZXF1aXJlZCcpLFxyXG4gIHR5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBwbGVkZ2VkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgcmVjZWl2ZWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBmdW5kOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgZW1haWw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBjaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgc3RhdGVfcHJvdmluY2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBwb3N0YWxfY29kZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIGZ1bGxfYWRkcmVzc193aXRoX2NvdW50cnlfc2luZ2xlX2xpbmU6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxyXG59KTtcclxuXHJcbnR5cGUgTm9ybWFsaXplZFBsZWRnZVJvdyA9IHouaW5mZXI8dHlwZW9mIHBsZWRnZVJvd1NjaGVtYT47XHJcbnR5cGUgTGVnYWN5RXRhcGVzdHJ5Um93ID0gei5pbmZlcjx0eXBlb2YgZXRhcGVzdHJ5RXhwb3J0U2NoZW1hPjtcclxudHlwZSBOb3JtYWxpemVkRXZlbnRSb3dXaXRoTWV0YSA9IE5vcm1hbGl6ZWRFdmVudFJvdyAmIHsgX19yb3dOdW1iZXI/OiBudW1iZXIgfTtcclxudHlwZSBMZWdhY3lFdmVudGJyaXRlUm93V2l0aE1ldGEgPSBMZWdhY3lFdmVudGJyaXRlUm93ICYgeyBfX3Jvd051bWJlcjogbnVtYmVyIH07XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVIZWFkZXJLZXkoa2V5OiBzdHJpbmcpIHtcclxuICByZXR1cm4ga2V5XHJcbiAgICAudHJpbSgpXHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnJlcGxhY2UoL1teYS16MC05XSsvZywgJ18nKVxyXG4gICAgLnJlcGxhY2UoL15fK3xfKyQvZywgJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUNzdih0ZXh0OiBzdHJpbmcpIHtcclxuICByZXR1cm4gcGFyc2UodGV4dCwge1xyXG4gICAgY29sdW1uczogKGhlYWRlcjogc3RyaW5nW10pID0+IGhlYWRlci5tYXAobm9ybWFsaXplSGVhZGVyS2V5KSxcclxuICAgIHNraXBfZW1wdHlfbGluZXM6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlXHJcbiAgfSkgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPltdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUN1cnJlbmN5KHZhbHVlPzogc3RyaW5nKSB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIDA7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHZhbHVlLnJlcGxhY2UoL1skLFxcc10vZywgJycpO1xyXG4gIGNvbnN0IGFtb3VudCA9IE51bWJlcihub3JtYWxpemVkKTtcclxuICBpZiAoTnVtYmVyLmlzTmFOKGFtb3VudCkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjdXJyZW5jeSB2YWx1ZSBcIiR7dmFsdWV9XCJgKTtcclxuICB9XHJcbiAgcmV0dXJuIGFtb3VudDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VJbnRlZ2VyKHZhbHVlPzogc3RyaW5nKSB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIDA7XHJcbiAgY29uc3QgbnVtID0gTnVtYmVyKHZhbHVlKTtcclxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShudW0pKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbnVtZXJpYyB2YWx1ZSBcIiR7dmFsdWV9XCJgKTtcclxuICB9XHJcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3lOdW1iZXIodmFsdWU6IG51bWJlcikge1xyXG4gIHJldHVybiAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTGVnYWN5RXRhcGVzdHJ5Um93KHJvdzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHVuZGVmaW5lZCkge1xyXG4gIGlmICghcm93KSByZXR1cm4gZmFsc2U7XHJcbiAgY29uc3QgaGFzQWNjb3VudE5hbWUgPSBCb29sZWFuKHJvdy5hY2NvdW50X25hbWUpO1xyXG4gIGNvbnN0IGhhc1BsZWRnZUlkID0gJ3BsZWRnZV9pZCcgaW4gcm93O1xyXG4gIHJldHVybiBoYXNBY2NvdW50TmFtZSAmJiAhaGFzUGxlZGdlSWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3VtbWFyeUxlZ2FjeVJvdyhyb3c6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcclxuICByZXR1cm4gIXJvdy5kYXRlICYmICFyb3cuYWNjb3VudF9uYW1lICYmICFyb3cudHlwZSAmJiAhcm93LmZ1bmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRldGVjdExlZ2FjeUV0YXBlc3RyeUZvcm1hdChyb3dzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10pIHtcclxuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XHJcbiAgICBpZiAoaXNTdW1tYXJ5TGVnYWN5Um93KHJvdykpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNMZWdhY3lFdGFwZXN0cnlSb3cocm93KSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICgncGxlZGdlX2lkJyBpbiByb3cpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlcml2ZU1hbnVhbERvbm9yS2V5KHJvdzogTm9ybWFsaXplZFBsZWRnZVJvdykge1xyXG4gIGNvbnN0IGVtYWlscyA9IGV4dHJhY3RFbWFpbHMocm93LmRvbm9yX2VtYWlsKTtcclxuICBpZiAoZW1haWxzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGBtYW51YWwtZXRwOmVtYWlsOiR7ZW1haWxzWzBdfWA7XHJcbiAgfVxyXG4gIGNvbnN0IHRva2VuID0gY3JlYXRlSGFzaCgnc2hhMScpXHJcbiAgICAudXBkYXRlKGAke3Jvdy5kb25vcl9uYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpfXwke3Jvdy5kb25vcl9waG9uZT8ucmVwbGFjZSgvXFxEKy9nLCAnJykgPz8gJyd9YClcclxuICAgIC5kaWdlc3QoJ2hleCcpXHJcbiAgICAuc2xpY2UoMCwgMTYpO1xyXG4gIHJldHVybiBgbWFudWFsLWV0cDphY2N0OiR7dG9rZW59YDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2h1bmtBcnJheTxUPihpdGVtczogVFtdLCBzaXplOiBudW1iZXIpOiBUW11bXSB7XHJcbiAgaWYgKHNpemUgPD0gMCkgcmV0dXJuIFtpdGVtc107XHJcbiAgY29uc3QgY2h1bmtzOiBUW11bXSA9IFtdO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtcy5sZW5ndGg7IGluZGV4ICs9IHNpemUpIHtcclxuICAgIGNodW5rcy5wdXNoKGl0ZW1zLnNsaWNlKGluZGV4LCBpbmRleCArIHNpemUpKTtcclxuICB9XHJcbiAgcmV0dXJuIGNodW5rcztcclxufVxyXG5cclxuZnVuY3Rpb24gZGVyaXZlTGVnYWN5UGxlZGdlSWQocm93OiBMZWdhY3lFdGFwZXN0cnlSb3cpIHtcclxuICBjb25zdCB0b2tlbiA9IGNyZWF0ZUhhc2goJ3NoYTEnKVxyXG4gICAgLnVwZGF0ZShcclxuICAgICAgW1xyXG4gICAgICAgIHJvdy5hY2NvdW50X25hbWUgPz8gJycsXHJcbiAgICAgICAgcm93LmRhdGUgPz8gJycsXHJcbiAgICAgICAgcm93LnR5cGUgPz8gJycsXHJcbiAgICAgICAgcm93LmZ1bmQgPz8gJycsXHJcbiAgICAgICAgcm93LnJlY2VpdmVkID8/IHJvdy5wbGVkZ2VkID8/ICcnXHJcbiAgICAgIF0uam9pbignfCcpXHJcbiAgICApXHJcbiAgICAuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4gYGxlZ2FjeS1ldHA6JHt0b2tlbn1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBMZWdhY3lSb3cocm93OiBMZWdhY3lFdGFwZXN0cnlSb3cpOiBOb3JtYWxpemVkUGxlZGdlUm93IHtcclxuICBjb25zdCByZWNlaXZlZEFtb3VudCA9IHBhcnNlQ3VycmVuY3kocm93LnJlY2VpdmVkKTtcclxuICBjb25zdCBwbGVkZ2VkQW1vdW50ID0gcGFyc2VDdXJyZW5jeShyb3cucGxlZGdlZCk7XHJcbiAgY29uc3QgaGFzUmVjZWl2ZWQgPSByZWNlaXZlZEFtb3VudCA+IDA7XHJcbiAgY29uc3QgYW1vdW50ID0gaGFzUmVjZWl2ZWRcclxuICAgID8gcm93LnJlY2VpdmVkPy50cmltKCkgfHwgcm93LnBsZWRnZWQ/LnRyaW0oKSB8fCAnMCdcclxuICAgIDogcm93LnBsZWRnZWQ/LnRyaW0oKSB8fCByb3cucmVjZWl2ZWQ/LnRyaW0oKSB8fCAnMCc7XHJcbiAgY29uc3QgaW5mZXJyZWRTdGF0dXMgPSBoYXNSZWNlaXZlZCA/ICdSRUNFSVZFRCcgOiAnUExFREdFRCc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwbGVkZ2VfaWQ6IGRlcml2ZUxlZ2FjeVBsZWRnZUlkKHJvdyksXHJcbiAgICBkb25vcl9uYW1lOiByb3cuYWNjb3VudF9uYW1lLnRyaW0oKSxcclxuICAgIGRvbm9yX2VtYWlsOiByb3cuZW1haWw/LnRyaW0oKSB8fCB1bmRlZmluZWQsXHJcbiAgICBkb25vcl9waG9uZTogdW5kZWZpbmVkLFxyXG4gICAgZG9ub3JfYWRkcmVzczogcm93LmZ1bGxfYWRkcmVzc193aXRoX2NvdW50cnlfc2luZ2xlX2xpbmU/LnRyaW0oKSxcclxuICAgIGRvbm9yX2NpdHk6IHJvdy5jaXR5Py50cmltKCksXHJcbiAgICBkb25vcl9zdGF0ZTogcm93LnN0YXRlX3Byb3ZpbmNlPy50cmltKCksXHJcbiAgICBkb25vcl9wb3N0YWxfY29kZTogcm93LnBvc3RhbF9jb2RlPy50cmltKCksXHJcbiAgICBhbW91bnQsXHJcbiAgICBkYXRlOiByb3cuZGF0ZSxcclxuICAgIHN0YXR1czogaW5mZXJyZWRTdGF0dXMsXHJcbiAgICBjYW1wYWlnbjogcm93LmZ1bmRcclxuICB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cHNlcnRNYW51YWxEb25vcnMocGF5bG9hZHM6IE1hbnVhbERvbm9yUGF5bG9hZFtdKSB7XHJcbiAgaWYgKCFwYXlsb2Fkcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBbXSBhcyBBcnJheTx7IGlkOiBzdHJpbmc7IGV4dGVybmFsSWQ6IHN0cmluZzsgZW1haWw6IHN0cmluZyB8IG51bGwgfT47XHJcbiAgfVxyXG4gIGNvbnN0IHJlc3VsdHM6IEFycmF5PHsgaWQ6IHN0cmluZzsgZXh0ZXJuYWxJZDogc3RyaW5nOyBlbWFpbDogc3RyaW5nIHwgbnVsbCB9PiA9IFtdO1xyXG4gIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtBcnJheShwYXlsb2FkcywgNDAwKSkge1xyXG4gICAgaWYgKCFjaHVuay5sZW5ndGgpIGNvbnRpbnVlO1xyXG4gICAgY29uc3QgdmFsdWVzID0gY2h1bmsubWFwKChkb25vcikgPT5cclxuICAgICAgUHJpc21hLnNxbGAoJHtkb25vci5pZH0sICR7ZG9ub3IuZXh0ZXJuYWxJZH0sICR7ZG9ub3IubmFtZX0sICR7ZG9ub3IuZW1haWx9LCAke2Rvbm9yLnBob25lfSwgJHtkb25vci5hZGRyZXNzfSwgJHtcclxuICAgICAgICBkb25vci5jaXR5XHJcbiAgICAgIH0sICR7ZG9ub3Iuc3RhdGV9LCAke2Rvbm9yLnBvc3RhbENvZGV9LCAke25ldyBQcmlzbWEuRGVjaW1hbChkb25vci50b3RhbFBsZWRnZWQpfSwgJHtuZXcgUHJpc21hLkRlY2ltYWwoXHJcbiAgICAgICAgZG9ub3IudG90YWxHaXZlblxyXG4gICAgICApfSwgJHtkb25vci5sYXN0R2lmdERhdGV9LCBOT1coKSlgXHJcbiAgICApO1xyXG4gICAgY29uc3Qgcm93cyA9IGF3YWl0IHByaXNtYS4kcXVlcnlSYXc8QXJyYXk8eyBpZDogc3RyaW5nOyBleHRlcm5hbElkOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmcgfCBudWxsIH0+PmBcclxuICAgICAgSU5TRVJUIElOVE8gXCJEb25vclwiIChcImlkXCIsXCJleHRlcm5hbElkXCIsXCJuYW1lXCIsXCJlbWFpbFwiLFwicGhvbmVcIixcImFkZHJlc3NcIixcImNpdHlcIixcInN0YXRlXCIsXCJwb3N0YWxDb2RlXCIsXCJ0b3RhbFBsZWRnZWRcIixcInRvdGFsR2l2ZW5cIixcImxhc3RHaWZ0RGF0ZVwiLFwidXBkYXRlZEF0XCIpXHJcbiAgICAgIFZBTFVFUyAke1ByaXNtYS5qb2luKHZhbHVlcyl9XHJcbiAgICAgIE9OIENPTkZMSUNUIChcImV4dGVybmFsSWRcIikgRE8gVVBEQVRFIFNFVFxyXG4gICAgICAgIFwibmFtZVwiID0gRVhDTFVERUQuXCJuYW1lXCIsXHJcbiAgICAgICAgXCJlbWFpbFwiID0gRVhDTFVERUQuXCJlbWFpbFwiLFxyXG4gICAgICAgIFwicGhvbmVcIiA9IEVYQ0xVREVELlwicGhvbmVcIixcclxuICAgICAgICBcImFkZHJlc3NcIiA9IENPQUxFU0NFKEVYQ0xVREVELlwiYWRkcmVzc1wiLCBcIkRvbm9yXCIuXCJhZGRyZXNzXCIpLFxyXG4gICAgICAgIFwiY2l0eVwiID0gQ09BTEVTQ0UoRVhDTFVERUQuXCJjaXR5XCIsIFwiRG9ub3JcIi5cImNpdHlcIiksXHJcbiAgICAgICAgXCJzdGF0ZVwiID0gQ09BTEVTQ0UoRVhDTFVERUQuXCJzdGF0ZVwiLCBcIkRvbm9yXCIuXCJzdGF0ZVwiKSxcclxuICAgICAgICBcInBvc3RhbENvZGVcIiA9IENPQUxFU0NFKEVYQ0xVREVELlwicG9zdGFsQ29kZVwiLCBcIkRvbm9yXCIuXCJwb3N0YWxDb2RlXCIpLFxyXG4gICAgICAgIFwidG90YWxQbGVkZ2VkXCIgPSBcIkRvbm9yXCIuXCJ0b3RhbFBsZWRnZWRcIiArIEVYQ0xVREVELlwidG90YWxQbGVkZ2VkXCIsXHJcbiAgICAgICAgXCJ0b3RhbEdpdmVuXCIgPSBcIkRvbm9yXCIuXCJ0b3RhbEdpdmVuXCIgKyBFWENMVURFRC5cInRvdGFsR2l2ZW5cIixcclxuICAgICAgICBcImxhc3RHaWZ0RGF0ZVwiID0gR1JFQVRFU1QoXHJcbiAgICAgICAgICBDT0FMRVNDRShcIkRvbm9yXCIuXCJsYXN0R2lmdERhdGVcIiwgJy1pbmZpbml0eSc6OnRpbWVzdGFtcCksXHJcbiAgICAgICAgICBDT0FMRVNDRShFWENMVURFRC5cImxhc3RHaWZ0RGF0ZVwiLCAnLWluZmluaXR5Jzo6dGltZXN0YW1wKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgXCJ1cGRhdGVkQXRcIiA9IE5PVygpXHJcbiAgICAgIFJFVFVSTklORyBcImlkXCIsXCJleHRlcm5hbElkXCIsXCJlbWFpbFwiO1xyXG4gICAgYDtcclxuICAgIHJlc3VsdHMucHVzaCguLi5yb3dzKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwc2VydERvbm9yRW1haWxzKGVudHJpZXM6IE1hcDxzdHJpbmcsIFNldDxzdHJpbmc+Pikge1xyXG4gIGlmICghZW50cmllcy5zaXplKSByZXR1cm47XHJcbiAgY29uc3QgcGF5bG9hZHM6IEFycmF5PHsgaWQ6IHN0cmluZzsgZG9ub3JJZDogc3RyaW5nOyBlbWFpbDogc3RyaW5nIH0+ID0gW107XHJcbiAgZm9yIChjb25zdCBbZG9ub3JJZCwgZW1haWxzXSBvZiBlbnRyaWVzLmVudHJpZXMoKSkge1xyXG4gICAgZm9yIChjb25zdCBlbWFpbCBvZiBlbWFpbHMpIHtcclxuICAgICAgcGF5bG9hZHMucHVzaCh7IGlkOiByYW5kb21VVUlEKCksIGRvbm9ySWQsIGVtYWlsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rQXJyYXkocGF5bG9hZHMsIDQwMCkpIHtcclxuICAgIGlmICghY2h1bmsubGVuZ3RoKSBjb250aW51ZTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IGNodW5rLm1hcCgoaXRlbSkgPT4gUHJpc21hLnNxbGAoJHtpdGVtLmlkfSwgJHtpdGVtLmRvbm9ySWR9LCAke2l0ZW0uZW1haWx9KWApO1xyXG4gICAgYXdhaXQgcHJpc21hLiRleGVjdXRlUmF3YFxyXG4gICAgICBJTlNFUlQgSU5UTyBcIkRvbm9yRW1haWxcIiAoXCJpZFwiLFwiZG9ub3JJZFwiLFwiZW1haWxcIilcclxuICAgICAgVkFMVUVTICR7UHJpc21hLmpvaW4odmFsdWVzKX1cclxuICAgICAgT04gQ09ORkxJQ1QgKFwiZG9ub3JJZFwiLFwiZW1haWxcIikgRE8gTk9USElOR1xyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwc2VydFBsZWRnZXNSYXcocGF5bG9hZHM6IFBsZWRnZVVwc2VydFBheWxvYWRbXSkge1xyXG4gIGlmICghcGF5bG9hZHMubGVuZ3RoKSByZXR1cm47XHJcbiAgZm9yIChjb25zdCBjaHVuayBvZiBjaHVua0FycmF5KHBheWxvYWRzLCA0MDApKSB7XHJcbiAgICBpZiAoIWNodW5rLmxlbmd0aCkgY29udGludWU7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBjaHVuay5tYXAoKHBsZWRnZSkgPT5cclxuICAgICAgUHJpc21hLnNxbGAoJHtwbGVkZ2UuaWR9LCAke3BsZWRnZS5leHRlcm5hbElkfSwgJHtwbGVkZ2UuZG9ub3JJZH0sICR7cGxlZGdlLmFtb3VudH0sICR7cGxlZGdlLmRhdGV9LCAke1xyXG4gICAgICAgIHBsZWRnZS5jYW1wYWlnblxyXG4gICAgICB9LCAke3BsZWRnZS5zdGF0dXN9OjpcIlBsZWRnZVN0YXR1c1wiLCBOT1coKSwgTk9XKCkpYFxyXG4gICAgKTtcclxuICAgIGF3YWl0IHByaXNtYS4kZXhlY3V0ZVJhd2BcclxuICAgICAgSU5TRVJUIElOVE8gXCJQbGVkZ2VcIiAoXCJpZFwiLFwiZXh0ZXJuYWxJZFwiLFwiZG9ub3JJZFwiLFwiYW1vdW50XCIsXCJkYXRlXCIsXCJjYW1wYWlnblwiLFwic3RhdHVzXCIsXCJjcmVhdGVkQXRcIixcInVwZGF0ZWRBdFwiKVxyXG4gICAgICBWQUxVRVMgJHtQcmlzbWEuam9pbih2YWx1ZXMpfVxyXG4gICAgICBPTiBDT05GTElDVCAoXCJleHRlcm5hbElkXCIpIERPIFVQREFURSBTRVRcclxuICAgICAgICBcImRvbm9ySWRcIiA9IEVYQ0xVREVELlwiZG9ub3JJZFwiLFxyXG4gICAgICAgIFwiYW1vdW50XCIgPSBFWENMVURFRC5cImFtb3VudFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiID0gRVhDTFVERUQuXCJkYXRlXCIsXHJcbiAgICAgICAgXCJjYW1wYWlnblwiID0gRVhDTFVERUQuXCJjYW1wYWlnblwiLFxyXG4gICAgICAgIFwic3RhdHVzXCIgPSBFWENMVURFRC5cInN0YXR1c1wiOjpcIlBsZWRnZVN0YXR1c1wiLFxyXG4gICAgICAgIFwidXBkYXRlZEF0XCIgPSBOT1coKVxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlTGVnYWN5RXZlbnRicml0ZVJvd3Mocm93czogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdKTogTGVnYWN5RXZlbnRicml0ZVJvd1dpdGhNZXRhW10ge1xyXG4gIGNvbnN0IHBhcnNlZDogTGVnYWN5RXZlbnRicml0ZVJvd1dpdGhNZXRhW10gPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJvd3MubGVuZ3RoOyBpbmRleCArPSAxKSB7XHJcbiAgICBjb25zdCByb3cgPSByb3dzW2luZGV4XTtcclxuICAgIGlmICghcm93LmV2ZW50X2lkKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gZXZlbnRicml0ZU9yZGVyU2NoZW1hLnNhZmVQYXJzZShyb3cpO1xyXG4gICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYFJvdyAke2luZGV4ICsgMn06ICR7cmVzdWx0LmVycm9yLmlzc3Vlc1swXT8ubWVzc2FnZSA/PyAnSW52YWxpZCBFdmVudGJyaXRlIG9yZGVyIHJvdyd9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcGFyc2VkLnB1c2goeyAuLi5yZXN1bHQuZGF0YSwgX19yb3dOdW1iZXI6IGluZGV4ICsgMiB9KTtcclxuICB9XHJcblxyXG4gIGlmICghcGFyc2VkLmxlbmd0aCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBFdmVudGJyaXRlIHJvd3Mgd2VyZSBkZXRlY3RlZCBpbiB0aGUgQ1NWLicpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcnNlZDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWdncmVnYXRlRXZlbnRicml0ZU9yZGVycyhyb3dzOiBMZWdhY3lFdmVudGJyaXRlUm93V2l0aE1ldGFbXSk6IE5vcm1hbGl6ZWRFdmVudFJvd1dpdGhNZXRhW10ge1xyXG4gIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPFxyXG4gICAgc3RyaW5nLFxyXG4gICAge1xyXG4gICAgICByb3c6IExlZ2FjeUV2ZW50YnJpdGVSb3dXaXRoTWV0YTtcclxuICAgICAgdGlja2V0czogbnVtYmVyO1xyXG4gICAgICBncm9zczogbnVtYmVyO1xyXG4gICAgICBuZXQ6IG51bWJlcjtcclxuICAgICAgcm93TnVtYmVyOiBudW1iZXI7XHJcbiAgICB9XHJcbiAgPigpO1xyXG5cclxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIHJvd3MpIHtcclxuICAgIGNvbnN0IHRpY2tldHMgPSBwYXJzZUludGVnZXIoZW50cnkudGlja2V0X3F1YW50aXR5KTtcclxuICAgIGNvbnN0IGdyb3NzID1cclxuICAgICAgcGFyc2VDdXJyZW5jeShlbnRyeS50aWNrZXRfYWRkX29uc19yZXZlbnVlID8/IGVudHJ5LnRpY2tldF9yZXZlbnVlID8/IGVudHJ5Lmdyb3NzX3NhbGVzKSA/PyAwO1xyXG4gICAgY29uc3QgbmV0ID1cclxuICAgICAgcGFyc2VDdXJyZW5jeShlbnRyeS5uZXRfc2FsZXMgPz8gZW50cnkudGlja2V0X2FkZF9vbnNfcmV2ZW51ZSA/PyBlbnRyeS50aWNrZXRfcmV2ZW51ZSkgPz8gZ3Jvc3M7XHJcblxyXG4gICAgaWYgKCFncm91cGVkLmhhcyhlbnRyeS5ldmVudF9pZCkpIHtcclxuICAgICAgZ3JvdXBlZC5zZXQoZW50cnkuZXZlbnRfaWQsIHtcclxuICAgICAgICByb3c6IGVudHJ5LFxyXG4gICAgICAgIHRpY2tldHMsXHJcbiAgICAgICAgZ3Jvc3MsXHJcbiAgICAgICAgbmV0LFxyXG4gICAgICAgIHJvd051bWJlcjogZW50cnkuX19yb3dOdW1iZXJcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBidWNrZXQgPSBncm91cGVkLmdldChlbnRyeS5ldmVudF9pZCkhO1xyXG4gICAgICBidWNrZXQudGlja2V0cyArPSB0aWNrZXRzO1xyXG4gICAgICBidWNrZXQuZ3Jvc3MgKz0gZ3Jvc3M7XHJcbiAgICAgIGJ1Y2tldC5uZXQgKz0gbmV0O1xyXG4gICAgICBidWNrZXQucm93TnVtYmVyID0gTWF0aC5taW4oYnVja2V0LnJvd051bWJlciwgZW50cnkuX19yb3dOdW1iZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEFycmF5LmZyb20oZ3JvdXBlZC52YWx1ZXMoKSkubWFwKCh7IHJvdywgdGlja2V0cywgZ3Jvc3MsIG5ldCwgcm93TnVtYmVyIH0pID0+ICh7XHJcbiAgICBldmVudF9pZDogcm93LmV2ZW50X2lkLFxyXG4gICAgbmFtZTogcm93LmV2ZW50X25hbWUsXHJcbiAgICBzdGFydF9kYXRlOiByb3cuZXZlbnRfc3RhcnRfZGF0ZSxcclxuICAgIGVuZF9kYXRlOiByb3cuZXZlbnRfc3RhcnRfZGF0ZSxcclxuICAgIHZlbnVlOiByb3cuZXZlbnRfbG9jYXRpb24sXHJcbiAgICBzdGF0dXM6ICdjb21wbGV0ZWQnLFxyXG4gICAgdGlja2V0c190b3RhbDogU3RyaW5nKHRpY2tldHMpLFxyXG4gICAgdGlja2V0c19zb2xkOiBTdHJpbmcodGlja2V0cyksXHJcbiAgICBncm9zc19yZXZlbnVlOiBmb3JtYXRDdXJyZW5jeU51bWJlcihncm9zcyksXHJcbiAgICBuZXRfcmV2ZW51ZTogZm9ybWF0Q3VycmVuY3lOdW1iZXIobmV0ID4gMCA/IG5ldCA6IGdyb3NzICogMC44OCksXHJcbiAgICBfX3Jvd051bWJlcjogcm93TnVtYmVyXHJcbiAgfSkpO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTWFudWFsRG9ub3JQYXlsb2FkIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGV4dGVybmFsSWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZyB8IG51bGw7XHJcbiAgZW1haWxzOiBzdHJpbmdbXTtcclxuICBwaG9uZTogc3RyaW5nIHwgbnVsbDtcclxuICBhZGRyZXNzOiBzdHJpbmcgfCBudWxsO1xyXG4gIGNpdHk6IHN0cmluZyB8IG51bGw7XHJcbiAgc3RhdGU6IHN0cmluZyB8IG51bGw7XHJcbiAgcG9zdGFsQ29kZTogc3RyaW5nIHwgbnVsbDtcclxuICB0b3RhbFBsZWRnZWQ6IG51bWJlcjtcclxuICB0b3RhbEdpdmVuOiBudW1iZXI7XHJcbiAgbGFzdEdpZnREYXRlOiBEYXRlIHwgbnVsbDtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBsZWRnZVVwc2VydFBheWxvYWQge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZXh0ZXJuYWxJZDogc3RyaW5nO1xyXG4gIGRvbm9ySWQ6IHN0cmluZztcclxuICBhbW91bnQ6IFByaXNtYS5EZWNpbWFsO1xyXG4gIGRhdGU6IERhdGU7XHJcbiAgY2FtcGFpZ246IHN0cmluZyB8IG51bGw7XHJcbiAgc3RhdHVzOiBSZXR1cm5UeXBlPHR5cGVvZiBub3JtYWxpemVQbGVkZ2VTdGF0dXM+O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbXBvcnRQbGVkZ2VzKHJvd3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSwgb3B0aW9uczogeyBsZWdhY3lGb3JtYXQ/OiBib29sZWFuIH0gPSB7fSkge1xyXG4gIGNvbnN0IGxlZ2FjeUZvcm1hdCA9IG9wdGlvbnMubGVnYWN5Rm9ybWF0ID8/IGZhbHNlO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRSb3dzOiBBcnJheTx7IHJvd051bWJlcjogbnVtYmVyOyBkYXRhOiBOb3JtYWxpemVkUGxlZGdlUm93IH0+ID0gW107XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByb3dzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xyXG4gICAgY29uc3Qgcm93ID0gcm93c1tpbmRleF07XHJcbiAgICBpZiAobGVnYWN5Rm9ybWF0KSB7XHJcbiAgICAgIGlmIChpc1N1bW1hcnlMZWdhY3lSb3cocm93KSkgY29udGludWU7XHJcbiAgICAgIGNvbnN0IHBhcnNlZCA9IGV0YXBlc3RyeUV4cG9ydFNjaGVtYS5zYWZlUGFyc2Uocm93KTtcclxuICAgICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUm93ICR7aW5kZXggKyAyfTogJHtwYXJzZWQuZXJyb3IuaXNzdWVzWzBdPy5tZXNzYWdlID8/ICdJbnZhbGlkIHBsZWRnZSByb3cnfWApO1xyXG4gICAgICB9XHJcbiAgICAgIG5vcm1hbGl6ZWRSb3dzLnB1c2goeyByb3dOdW1iZXI6IGluZGV4ICsgMiwgZGF0YTogbWFwTGVnYWN5Um93KHBhcnNlZC5kYXRhKSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBsZWRnZVJvd1NjaGVtYS5zYWZlUGFyc2Uocm93KTtcclxuICAgICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUm93ICR7aW5kZXggKyAyfTogJHtwYXJzZWQuZXJyb3IuaXNzdWVzWzBdPy5tZXNzYWdlID8/ICdJbnZhbGlkIHBsZWRnZSByb3cnfWApO1xyXG4gICAgICB9XHJcbiAgICAgIG5vcm1hbGl6ZWRSb3dzLnB1c2goeyByb3dOdW1iZXI6IGluZGV4ICsgMiwgZGF0YTogcGFyc2VkLmRhdGEgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIW5vcm1hbGl6ZWRSb3dzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmVwYXJlZCA9IG5vcm1hbGl6ZWRSb3dzLm1hcCgoeyByb3dOdW1iZXIsIGRhdGEgfSkgPT4ge1xyXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VDdXJyZW5jeShkYXRhLmFtb3VudCk7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YS5kYXRlKTtcclxuICAgIGlmIChOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm93ICR7cm93TnVtYmVyfTogSW52YWxpZCBkYXRlIFwiJHtkYXRhLmRhdGV9XCJgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRvbm9yRW1haWxSYXcgPSBkYXRhLmRvbm9yX2VtYWlsPy50cmltKCkgfHwgbnVsbDtcclxuICAgIGNvbnN0IGRvbm9yRW1haWxzID0gZXh0cmFjdEVtYWlscyhkYXRhLmRvbm9yX2VtYWlsKTtcclxuICAgIGNvbnN0IGRvbm9yRW1haWwgPSBkb25vckVtYWlscy5sZW5ndGggPyBkb25vckVtYWlsc1swXSA6IGRvbm9yRW1haWxSYXcgPyBkb25vckVtYWlsUmF3LnRvTG93ZXJDYXNlKCkgOiBudWxsO1xyXG4gICAgY29uc3QgZG9ub3JBZGRyZXNzID0gZGF0YS5kb25vcl9hZGRyZXNzPy50cmltKCkgfHwgbnVsbDtcclxuICAgIGNvbnN0IGRvbm9yQ2l0eSA9IGRhdGEuZG9ub3JfY2l0eT8udHJpbSgpIHx8IG51bGw7XHJcbiAgICBjb25zdCBkb25vclN0YXRlID0gZGF0YS5kb25vcl9zdGF0ZT8udHJpbSgpIHx8IG51bGw7XHJcbiAgICBjb25zdCBkb25vclBvc3RhbENvZGUgPSBkYXRhLmRvbm9yX3Bvc3RhbF9jb2RlPy50cmltKCkgfHwgbnVsbDtcclxuICAgIGNvbnN0IGRvbm9yTmFtZU5vcm1hbGl6ZWQgPSBub3JtYWxpemVOYW1lKGRhdGEuZG9ub3JfbmFtZSk7XHJcbiAgICBjb25zdCBkb25vclBob25lRGlnaXRzID0gbm9ybWFsaXplUGhvbmUoZGF0YS5kb25vcl9waG9uZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByb3dOdW1iZXIsXHJcbiAgICAgIHBsZWRnZUlkOiBkYXRhLnBsZWRnZV9pZCxcclxuICAgICAgZG9ub3JLZXk6IGRlcml2ZU1hbnVhbERvbm9yS2V5KGRhdGEpLFxyXG4gICAgICBkb25vck5hbWU6IGRhdGEuZG9ub3JfbmFtZSxcclxuICAgICAgZG9ub3JOYW1lTm9ybWFsaXplZCxcclxuICAgICAgZG9ub3JFbWFpbFJhdyxcclxuICAgICAgZG9ub3JFbWFpbCxcclxuICAgICAgZG9ub3JFbWFpbHMsXHJcbiAgICAgIGRvbm9yUGhvbmU6IGRhdGEuZG9ub3JfcGhvbmU/LnRyaW0oKSB8fCBudWxsLFxyXG4gICAgICBkb25vclBob25lRGlnaXRzLFxyXG4gICAgICBkb25vckFkZHJlc3MsXHJcbiAgICAgIGRvbm9yQ2l0eSxcclxuICAgICAgZG9ub3JTdGF0ZSxcclxuICAgICAgZG9ub3JQb3N0YWxDb2RlLFxyXG4gICAgICBhbW91bnQsXHJcbiAgICAgIGRhdGUsXHJcbiAgICAgIGNhbXBhaWduOiBkYXRhLmNhbXBhaWduPy50cmltKCkgfHwgbnVsbCxcclxuICAgICAgc3RhdHVzOiBub3JtYWxpemVQbGVkZ2VTdGF0dXMoZGF0YS5zdGF0dXMpXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBlbWFpbFJvd3MgPSBwcmVwYXJlZC5maWx0ZXIoKHJvdykgPT4gcm93LmRvbm9yRW1haWxSYXcpO1xyXG4gIGNvbnN0IHVuaXF1ZUVtYWlscyA9IEFycmF5LmZyb20obmV3IFNldChlbWFpbFJvd3MubWFwKChyb3cpID0+IHJvdy5kb25vckVtYWlsUmF3ISkpKTtcclxuICBjb25zdCBleGlzdGluZ0VtYWlsRG9ub3JzID0gdW5pcXVlRW1haWxzLmxlbmd0aFxyXG4gICAgPyBhd2FpdCBwcmlzbWEuZG9ub3IuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IGVtYWlsOiB7IGluOiB1bmlxdWVFbWFpbHMgfSB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgZW1haWw6IHRydWUgfVxyXG4gICAgICB9KVxyXG4gICAgOiBbXTtcclxuICBjb25zdCBlbWFpbFRvRG9ub3JJZCA9IG5ldyBNYXAoXHJcbiAgICBleGlzdGluZ0VtYWlsRG9ub3JzXHJcbiAgICAgIC5maWx0ZXIoKGRvbm9yKSA9PiBkb25vci5lbWFpbClcclxuICAgICAgLm1hcCgoZG9ub3IpID0+IFtkb25vci5lbWFpbCEudHJpbSgpLnRvTG93ZXJDYXNlKCksIGRvbm9yLmlkXSlcclxuICApO1xyXG5cclxuICBjb25zdCBtYW51YWxEb25vclBheWxvYWRzOiBNYW51YWxEb25vclBheWxvYWRbXSA9IFtdO1xyXG4gIGNvbnN0IG1hbnVhbERvbm9yTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hbnVhbERvbm9yUGF5bG9hZD4oKTtcclxuICBjb25zdCBkb25vcklkQnlLZXkgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG5cclxuICBjb25zdCBwaG9uZVRhcmdldHMgPSBBcnJheS5mcm9tKFxyXG4gICAgbmV3IFNldChwcmVwYXJlZC5tYXAoKHJvdykgPT4gcm93LmRvbm9yUGhvbmVEaWdpdHMpLmZpbHRlcigodmFsdWUpOiB2YWx1ZSBpcyBzdHJpbmcgPT4gQm9vbGVhbih2YWx1ZSkpKVxyXG4gICk7XHJcbiAgY29uc3QgZXhpc3RpbmdQaG9uZURvbm9ycyA9IHBob25lVGFyZ2V0cy5sZW5ndGhcclxuICAgID8gYXdhaXQgcHJpc21hLmRvbm9yLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyBwaG9uZTogeyBpbjogcGhvbmVUYXJnZXRzIH0gfSxcclxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIHBob25lOiB0cnVlIH1cclxuICAgICAgfSlcclxuICAgIDogW107XHJcbiAgY29uc3QgbmFtZVBob25lVG9Eb25vcklkID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcclxuICBmb3IgKGNvbnN0IGRvbm9yIG9mIGV4aXN0aW5nUGhvbmVEb25vcnMpIHtcclxuICAgIGNvbnN0IHBob25lRGlnaXRzID0gbm9ybWFsaXplUGhvbmUoZG9ub3IucGhvbmUpO1xyXG4gICAgaWYgKCFwaG9uZURpZ2l0cykgY29udGludWU7XHJcbiAgICBjb25zdCBuYW1lS2V5ID0gbm9ybWFsaXplTmFtZShkb25vci5uYW1lKTtcclxuICAgIG5hbWVQaG9uZVRvRG9ub3JJZC5zZXQoYCR7bmFtZUtleX18JHtwaG9uZURpZ2l0c31gLCBkb25vci5pZCk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IGRvbm9yIG9mIGV4aXN0aW5nRW1haWxEb25vcnMpIHtcclxuICAgIGlmIChkb25vci5lbWFpbCkge1xyXG4gICAgICBkb25vcklkQnlLZXkuc2V0KGBtYW51YWwtZXRwOmVtYWlsOiR7ZG9ub3IuZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCl9YCwgZG9ub3IuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCByb3cgb2YgcHJlcGFyZWQpIHtcclxuICAgIGNvbnN0IGhhc0V4aXN0aW5nRW1haWwgPSByb3cuZG9ub3JFbWFpbCA/IGVtYWlsVG9Eb25vcklkLmhhcyhyb3cuZG9ub3JFbWFpbCkgOiBmYWxzZTtcclxuICAgIGlmIChoYXNFeGlzdGluZ0VtYWlsKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmFtZVBob25lS2V5ID0gcm93LmRvbm9yUGhvbmVEaWdpdHMgPyBgJHtyb3cuZG9ub3JOYW1lTm9ybWFsaXplZH18JHtyb3cuZG9ub3JQaG9uZURpZ2l0c31gIDogbnVsbDtcclxuICAgIGNvbnN0IG1hdGNoZWRCeU5hbWVQaG9uZSA9IG5hbWVQaG9uZUtleSA/IG5hbWVQaG9uZVRvRG9ub3JJZC5nZXQobmFtZVBob25lS2V5KSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChtYXRjaGVkQnlOYW1lUGhvbmUpIHtcclxuICAgICAgZG9ub3JJZEJ5S2V5LnNldChyb3cuZG9ub3JLZXksIG1hdGNoZWRCeU5hbWVQaG9uZSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXhpc3RpbmcgPSBtYW51YWxEb25vck1hcC5nZXQocm93LmRvbm9yS2V5KTtcclxuICAgIGlmICghZXhpc3RpbmcpIHtcclxuICAgICAgY29uc3QgcGF5bG9hZDogTWFudWFsRG9ub3JQYXlsb2FkID0ge1xyXG4gICAgICAgIGlkOiByYW5kb21VVUlEKCksXHJcbiAgICAgICAgZXh0ZXJuYWxJZDogcm93LmRvbm9yS2V5LFxyXG4gICAgICAgIG5hbWU6IHJvdy5kb25vck5hbWUsXHJcbiAgICAgICAgZW1haWw6IHJvdy5kb25vckVtYWlsc1swXSA/PyByb3cuZG9ub3JFbWFpbCxcclxuICAgICAgICBlbWFpbHM6IHJvdy5kb25vckVtYWlscyxcclxuICAgICAgICBwaG9uZTogcm93LmRvbm9yUGhvbmUsXHJcbiAgICAgICAgYWRkcmVzczogcm93LmRvbm9yQWRkcmVzcyxcclxuICAgICAgICBjaXR5OiByb3cuZG9ub3JDaXR5LFxyXG4gICAgICAgIHN0YXRlOiByb3cuZG9ub3JTdGF0ZSxcclxuICAgICAgICBwb3N0YWxDb2RlOiByb3cuZG9ub3JQb3N0YWxDb2RlLFxyXG4gICAgICAgIHRvdGFsUGxlZGdlZDogcm93LmFtb3VudCxcclxuICAgICAgICB0b3RhbEdpdmVuOiByb3cuc3RhdHVzID09PSAnUkVDRUlWRUQnID8gcm93LmFtb3VudCA6IDAsXHJcbiAgICAgICAgbGFzdEdpZnREYXRlOiByb3cuc3RhdHVzID09PSAnUkVDRUlWRUQnID8gcm93LmRhdGUgOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgIG1hbnVhbERvbm9yUGF5bG9hZHMucHVzaChwYXlsb2FkKTtcclxuICAgICAgbWFudWFsRG9ub3JNYXAuc2V0KHJvdy5kb25vcktleSwgcGF5bG9hZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBleGlzdGluZy50b3RhbFBsZWRnZWQgKz0gcm93LmFtb3VudDtcclxuICAgICAgaWYgKHJvdy5zdGF0dXMgPT09ICdSRUNFSVZFRCcpIHtcclxuICAgICAgICBleGlzdGluZy50b3RhbEdpdmVuICs9IHJvdy5hbW91bnQ7XHJcbiAgICAgICAgZXhpc3RpbmcubGFzdEdpZnREYXRlID1cclxuICAgICAgICAgIGV4aXN0aW5nLmxhc3RHaWZ0RGF0ZSAmJiBleGlzdGluZy5sYXN0R2lmdERhdGUgPiByb3cuZGF0ZSA/IGV4aXN0aW5nLmxhc3RHaWZ0RGF0ZSA6IHJvdy5kYXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAoY29uc3QgZW1haWwgb2Ygcm93LmRvbm9yRW1haWxzKSB7XHJcbiAgICAgICAgaWYgKCFleGlzdGluZy5lbWFpbHMuaW5jbHVkZXMoZW1haWwpKSB7XHJcbiAgICAgICAgICBleGlzdGluZy5lbWFpbHMucHVzaChlbWFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghZXhpc3RpbmcuYWRkcmVzcyAmJiByb3cuZG9ub3JBZGRyZXNzKSB7XHJcbiAgICAgICAgZXhpc3RpbmcuYWRkcmVzcyA9IHJvdy5kb25vckFkZHJlc3M7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFleGlzdGluZy5jaXR5ICYmIHJvdy5kb25vckNpdHkpIHtcclxuICAgICAgICBleGlzdGluZy5jaXR5ID0gcm93LmRvbm9yQ2l0eTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWV4aXN0aW5nLnN0YXRlICYmIHJvdy5kb25vclN0YXRlKSB7XHJcbiAgICAgICAgZXhpc3Rpbmcuc3RhdGUgPSByb3cuZG9ub3JTdGF0ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWV4aXN0aW5nLnBvc3RhbENvZGUgJiYgcm93LmRvbm9yUG9zdGFsQ29kZSkge1xyXG4gICAgICAgIGV4aXN0aW5nLnBvc3RhbENvZGUgPSByb3cuZG9ub3JQb3N0YWxDb2RlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZXhpc3RpbmcuZW1haWwgJiYgZXhpc3RpbmcuZW1haWxzLmxlbmd0aCkge1xyXG4gICAgICAgIGV4aXN0aW5nLmVtYWlsID0gZXhpc3RpbmcuZW1haWxzWzBdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAobWFudWFsRG9ub3JQYXlsb2Fkcy5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGluc2VydGVkID0gYXdhaXQgdXBzZXJ0TWFudWFsRG9ub3JzKG1hbnVhbERvbm9yUGF5bG9hZHMpO1xyXG4gICAgZm9yIChjb25zdCBkb25vciBvZiBpbnNlcnRlZCkge1xyXG4gICAgICBkb25vcklkQnlLZXkuc2V0KGRvbm9yLmV4dGVybmFsSWQsIGRvbm9yLmlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHBsZWRnZVBheWxvYWRNYXAgPSBuZXcgTWFwPHN0cmluZywgUGxlZGdlVXBzZXJ0UGF5bG9hZD4oKTtcclxuICBjb25zdCBkb25vckVtYWlsc0J5SWQgPSBuZXcgTWFwPHN0cmluZywgU2V0PHN0cmluZz4+KCk7XHJcblxyXG4gIGZvciAoY29uc3Qgcm93IG9mIHByZXBhcmVkKSB7XHJcbiAgICBjb25zdCBkb25vcktleSA9XHJcbiAgICAgIHJvdy5kb25vckVtYWlsICYmIGVtYWlsVG9Eb25vcklkLmhhcyhyb3cuZG9ub3JFbWFpbCkgPyBgbWFudWFsLWV0cDplbWFpbDoke3Jvdy5kb25vckVtYWlsfWAgOiByb3cuZG9ub3JLZXk7XHJcbiAgICBjb25zdCBkb25vcklkID0gZG9ub3JJZEJ5S2V5LmdldChkb25vcktleSk7XHJcbiAgICBpZiAoIWRvbm9ySWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gcmVzb2x2ZSBkb25vciBmb3Igcm93ICR7cm93LnJvd051bWJlcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm93LmRvbm9yRW1haWxzLmxlbmd0aCkge1xyXG4gICAgICBpZiAoIWRvbm9yRW1haWxzQnlJZC5oYXMoZG9ub3JJZCkpIHtcclxuICAgICAgICBkb25vckVtYWlsc0J5SWQuc2V0KGRvbm9ySWQsIG5ldyBTZXQoKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYnVja2V0ID0gZG9ub3JFbWFpbHNCeUlkLmdldChkb25vcklkKSE7XHJcbiAgICAgIGZvciAoY29uc3QgZW1haWwgb2Ygcm93LmRvbm9yRW1haWxzKSB7XHJcbiAgICAgICAgYnVja2V0LmFkZChlbWFpbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXlsb2FkOiBQbGVkZ2VVcHNlcnRQYXlsb2FkID0ge1xyXG4gICAgICBpZDogcmFuZG9tVVVJRCgpLFxyXG4gICAgICBleHRlcm5hbElkOiByb3cucGxlZGdlSWQsXHJcbiAgICAgIGRvbm9ySWQsXHJcbiAgICAgIGFtb3VudDogbmV3IFByaXNtYS5EZWNpbWFsKHJvdy5hbW91bnQpLFxyXG4gICAgICBkYXRlOiByb3cuZGF0ZSxcclxuICAgICAgY2FtcGFpZ246IHJvdy5jYW1wYWlnbixcclxuICAgICAgc3RhdHVzOiByb3cuc3RhdHVzXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nID0gcGxlZGdlUGF5bG9hZE1hcC5nZXQocGF5bG9hZC5leHRlcm5hbElkKTtcclxuICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAvLyBLZWVwIHRoZSBtb3N0IHJlY2VudCByb3cgaWYgZHVwbGljYXRlcyBzaGFyZSB0aGUgc2FtZSBleHRlcm5hbElkIHdpdGhpbiBhIHNpbmdsZSBDU1YuXHJcbiAgICAgIGlmIChwYXlsb2FkLmRhdGUgPj0gZXhpc3RpbmcuZGF0ZSkge1xyXG4gICAgICAgIHBsZWRnZVBheWxvYWRNYXAuc2V0KHBheWxvYWQuZXh0ZXJuYWxJZCwgcGF5bG9hZCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsZWRnZVBheWxvYWRNYXAuc2V0KHBheWxvYWQuZXh0ZXJuYWxJZCwgcGF5bG9hZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGVkZ2VQYXlsb2FkcyA9IEFycmF5LmZyb20ocGxlZGdlUGF5bG9hZE1hcC52YWx1ZXMoKSk7XHJcblxyXG4gIGF3YWl0IHVwc2VydFBsZWRnZXNSYXcocGxlZGdlUGF5bG9hZHMpO1xyXG4gIGF3YWl0IHVwc2VydERvbm9yRW1haWxzKGRvbm9yRW1haWxzQnlJZCk7XHJcblxyXG4gIGF3YWl0IHJlY2FsY3VsYXRlRG9ub3JMaWZldGltZVZhbHVlcygpO1xyXG4gIGF3YWl0IGludmFsaWRhdGVNZXRyaWNzRm9yU291cmNlcyhbTWV0cmljU291cmNlLkVUQVBFU1RSWV0pO1xyXG4gIGF3YWl0IHJlY29yZEludGVncmF0aW9uU3luYyhNZXRyaWNTb3VyY2UuRVRBUEVTVFJZLCB7IHN5bmNlZDogcGxlZGdlUGF5bG9hZHMubGVuZ3RoIH0pO1xyXG4gIHJldmFsaWRhdGVQYXRoKCcvJyk7XHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy9kb25vcnMnKTtcclxuICByZXR1cm4gcGxlZGdlUGF5bG9hZHMubGVuZ3RoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0V2ZW50YnJpdGVPcmRlclJvdyhyb3c6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCB1bmRlZmluZWQpIHtcclxuICBpZiAoIXJvdykgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiBCb29sZWFuKHJvdy5ldmVudF9pZCAmJiByb3cub3JkZXJfaWQpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbXBvcnRFdmVudHMocm93czogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdLCBvcHRpb25zOiB7IGxlZ2FjeUZvcm1hdD86IGJvb2xlYW4gfSA9IHt9KSB7XHJcbiAgbGV0IGltcG9ydGVkID0gMDtcclxuICBjb25zdCBsZWdhY3lGb3JtYXQgPSBvcHRpb25zLmxlZ2FjeUZvcm1hdCA/PyBmYWxzZTtcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplZFJvd3M6IE5vcm1hbGl6ZWRFdmVudFJvd1dpdGhNZXRhW10gPSBbXTtcclxuXHJcbiAgaWYgKGxlZ2FjeUZvcm1hdCkge1xyXG4gICAgY29uc3QgcGFyc2VkT3JkZXJzID0gcGFyc2VMZWdhY3lFdmVudGJyaXRlUm93cyhyb3dzKTtcclxuICAgIG5vcm1hbGl6ZWRSb3dzLnB1c2goLi4uYWdncmVnYXRlRXZlbnRicml0ZU9yZGVycyhwYXJzZWRPcmRlcnMpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJvd3MubGVuZ3RoOyBpbmRleCArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGV2ZW50Um93U2NoZW1hLnNhZmVQYXJzZShyb3dzW2luZGV4XSk7XHJcbiAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdyAke2luZGV4ICsgMn06ICR7cmVzdWx0LmVycm9yLmlzc3Vlc1swXT8ubWVzc2FnZSA/PyAnSW52YWxpZCBldmVudCByb3cnfWApO1xyXG4gICAgICB9XHJcbiAgICAgIG5vcm1hbGl6ZWRSb3dzLnB1c2goeyAuLi5yZXN1bHQuZGF0YSwgX19yb3dOdW1iZXI6IGluZGV4ICsgMiB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGJhdGNoU2l6ZSA9IDQwO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub3JtYWxpemVkUm93cy5sZW5ndGg7IGluZGV4ICs9IGJhdGNoU2l6ZSkge1xyXG4gICAgY29uc3QgYmF0Y2ggPSBub3JtYWxpemVkUm93cy5zbGljZShpbmRleCwgaW5kZXggKyBiYXRjaFNpemUpO1xyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIGJhdGNoLm1hcChhc3luYyAocm93KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93UHJlZml4ID0gcm93Ll9fcm93TnVtYmVyID8gYFJvdyAke3Jvdy5fX3Jvd051bWJlcn1gIDogYEV2ZW50ICR7cm93Lm5hbWV9YDtcclxuICAgICAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShyb3cuc3RhcnRfZGF0ZSk7XHJcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKHJvdy5lbmRfZGF0ZSB8fCByb3cuc3RhcnRfZGF0ZSk7XHJcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihzdGFydERhdGUuZ2V0VGltZSgpKSB8fCBOdW1iZXIuaXNOYU4oZW5kRGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cm93UHJlZml4fTogSW52YWxpZCBzdGFydC9lbmQgZGF0ZWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGlja2V0c1RvdGFsID0gcGFyc2VJbnRlZ2VyKHJvdy50aWNrZXRzX3RvdGFsKTtcclxuICAgICAgICBjb25zdCB0aWNrZXRzU29sZCA9IHBhcnNlSW50ZWdlcihyb3cudGlja2V0c19zb2xkKTtcclxuICAgICAgICBjb25zdCBncm9zc1JldmVudWUgPSBwYXJzZUN1cnJlbmN5KHJvdy5ncm9zc19yZXZlbnVlKTtcclxuICAgICAgICBjb25zdCBuZXRSZXZlbnVlID0gcm93Lm5ldF9yZXZlbnVlXHJcbiAgICAgICAgICA/IHBhcnNlQ3VycmVuY3kocm93Lm5ldF9yZXZlbnVlKVxyXG4gICAgICAgICAgOiBNYXRoLnJvdW5kKGdyb3NzUmV2ZW51ZSAqIDAuODggKiAxMDApIC8gMTAwO1xyXG5cclxuICAgICAgICBhd2FpdCBwcmlzbWEuZXZlbnQudXBzZXJ0KHtcclxuICAgICAgICAgIHdoZXJlOiB7IGV4dGVybmFsSWQ6IHJvdy5ldmVudF9pZCB9LFxyXG4gICAgICAgICAgdXBkYXRlOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHJvdy5uYW1lLFxyXG4gICAgICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgICAgIGVuZERhdGUsXHJcbiAgICAgICAgICAgIHZlbnVlOiByb3cudmVudWU/LnRyaW0oKSB8fCBudWxsLFxyXG4gICAgICAgICAgICBzdGF0dXM6IG5vcm1hbGl6ZUV2ZW50U3RhdHVzKHJvdy5zdGF0dXMpLFxyXG4gICAgICAgICAgICB0aWNrZXRzVG90YWwsXHJcbiAgICAgICAgICAgIHRpY2tldHNTb2xkLFxyXG4gICAgICAgICAgICBncm9zc1JldmVudWUsXHJcbiAgICAgICAgICAgIG5ldFJldmVudWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgICAgZXh0ZXJuYWxJZDogcm93LmV2ZW50X2lkLFxyXG4gICAgICAgICAgICBuYW1lOiByb3cubmFtZSxcclxuICAgICAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgICAgICBlbmREYXRlLFxyXG4gICAgICAgICAgICB2ZW51ZTogcm93LnZlbnVlPy50cmltKCkgfHwgbnVsbCxcclxuICAgICAgICAgICAgc3RhdHVzOiBub3JtYWxpemVFdmVudFN0YXR1cyhyb3cuc3RhdHVzKSxcclxuICAgICAgICAgICAgdGlja2V0c1RvdGFsLFxyXG4gICAgICAgICAgICB0aWNrZXRzU29sZCxcclxuICAgICAgICAgICAgZ3Jvc3NSZXZlbnVlLFxyXG4gICAgICAgICAgICBuZXRSZXZlbnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW1wb3J0ZWQgKz0gMTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhd2FpdCBpbnZhbGlkYXRlTWV0cmljc0ZvclNvdXJjZXMoW01ldHJpY1NvdXJjZS5FVkVOVEJSSVRFXSk7XHJcbiAgYXdhaXQgcmVjb3JkSW50ZWdyYXRpb25TeW5jKE1ldHJpY1NvdXJjZS5FVkVOVEJSSVRFLCB7IHN5bmNlZDogaW1wb3J0ZWQgfSk7XHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxuICByZXZhbGlkYXRlUGF0aCgnL2V2ZW50cycpO1xyXG4gIHJldHVybiBpbXBvcnRlZDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hbnVhbEltcG9ydEFjdGlvbihcclxuICBfcHJldlN0YXRlOiBNYW51YWxJbXBvcnRSZXN1bHQsXHJcbiAgZm9ybURhdGE6IEZvcm1EYXRhXHJcbik6IFByb21pc2U8TWFudWFsSW1wb3J0UmVzdWx0PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdZb3UgbXVzdCBiZSBzaWduZWQgaW4gdG8gaW1wb3J0IGRhdGEuJyB9O1xyXG4gIH1cclxuICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgIT09ICdBRE1JTicpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnQWRtaW4gYWNjZXNzIHJlcXVpcmVkIGZvciBtYW51YWwgaW1wb3J0cy4nIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBzb3VyY2UgPSBmb3JtRGF0YS5nZXQoJ3NvdXJjZScpO1xyXG4gIGlmIChzb3VyY2UgIT09ICdldGFwZXN0cnknICYmIHNvdXJjZSAhPT0gJ2V2ZW50YnJpdGUnKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1NlbGVjdCBhIHNvdXJjZSB0byBpbXBvcnQuJyB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpO1xyXG4gIGlmICghKGZpbGUgaW5zdGFuY2VvZiBGaWxlKSB8fCBmaWxlLnNpemUgPT09IDApIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVXBsb2FkIGEgQ1NWIGZpbGUgZXhwb3J0ZWQgZnJvbSB0aGUgdmVuZG9yIHBvcnRhbC4nIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCB0ZXh0ID0gQnVmZmVyLmZyb20oYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpKS50b1N0cmluZygndXRmLTgnKTtcclxuICBpZiAoIXRleHQudHJpbSgpKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoZSB1cGxvYWRlZCBmaWxlIHdhcyBlbXB0eS4nIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3Qgcm93cyA9IHBhcnNlQ3N2KHRleHQpO1xyXG4gICAgaWYgKCFyb3dzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ05vIHJlY29yZHMgd2VyZSBmb3VuZCBpbiB0aGUgQ1NWIGZpbGUuJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxlZ2FjeUV0YXBlc3RyeUZvcm1hdCA9IHNvdXJjZSA9PT0gJ2V0YXBlc3RyeScgPyBkZXRlY3RMZWdhY3lFdGFwZXN0cnlGb3JtYXQocm93cykgOiBmYWxzZTtcclxuICAgIGNvbnN0IGxlZ2FjeUV2ZW50YnJpdGVGb3JtYXQgPSBzb3VyY2UgPT09ICdldmVudGJyaXRlJyA/IGlzRXZlbnRicml0ZU9yZGVyUm93KHJvd3NbMF0pIDogZmFsc2U7XHJcbiAgICBjb25zdCBjb3VudCA9XHJcbiAgICAgIHNvdXJjZSA9PT0gJ2V0YXBlc3RyeSdcclxuICAgICAgICA/IGF3YWl0IGltcG9ydFBsZWRnZXMocm93cywgeyBsZWdhY3lGb3JtYXQ6IGxlZ2FjeUV0YXBlc3RyeUZvcm1hdCB9KVxyXG4gICAgICAgIDogYXdhaXQgaW1wb3J0RXZlbnRzKHJvd3MsIHsgbGVnYWN5Rm9ybWF0OiBsZWdhY3lFdmVudGJyaXRlRm9ybWF0IH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIG1lc3NhZ2U6IGBJbXBvcnRlZCAke2NvdW50fSAke3NvdXJjZSA9PT0gJ2V0YXBlc3RyeScgPyAncGxlZGdlcycgOiAnZXZlbnRzJ30gZnJvbSBDU1YuYFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignTWFudWFsIGltcG9ydCBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5hYmxlIHRvIGltcG9ydCBkYXRhIGZyb20gQ1NWLidcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3VEFpdEJzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(dashboard)/actions/manual-import-shared.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "manualImportInitialState",
    ()=>manualImportInitialState
]);
const manualImportInitialState = {
    success: false,
    message: ''
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(dashboard)/_components/manual-import-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManualImportForm",
    ()=>ManualImportForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$data$3a$ebec1e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/actions/data:ebec1e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$manual$2d$import$2d$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/actions/manual-import-shared.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ManualImportForm({ source, label }) {
    _s();
    const [state, formAction, pending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$data$3a$ebec1e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["manualImportAction"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$actions$2f$manual$2d$import$2d$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["manualImportInitialState"]);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: formAction,
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "source",
                value: source
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/_components/manual-import-form.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: `${id}-file`,
                        className: "text-sm font-medium text-slate-700",
                        children: "Upload CSV export"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/_components/manual-import-form.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: `${id}-file`,
                        name: "file",
                        type: "file",
                        accept: ".csv",
                        formEncType: "multipart/form-data",
                        required: true,
                        className: "block w-full cursor-pointer rounded-xl border border-dashed border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-900 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/_components/manual-import-form.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-500",
                        children: "Only CSV files using the provided template are accepted."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/_components/manual-import-form.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/_components/manual-import-form.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                variant: "primary",
                disabled: pending,
                children: pending ? 'Importing…' : `Import ${label}`
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/_components/manual-import-form.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            state.message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`,
                children: state.message
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/_components/manual-import-form.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/_components/manual-import-form.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ManualImportForm, "VZSLGx5JrXzBv+M2vlv+qEJ3/TA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = ManualImportForm;
var _c;
__turbopack_context__.k.register(_c, "ManualImportForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_67c9f774._.js.map