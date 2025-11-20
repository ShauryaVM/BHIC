"use client";

import type { ReactNode } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

type SeriesConfig = {
  dataKey: string;
  color: string;
  name?: string;
};

interface BarChartComponentProps<TData extends Record<string, unknown>> {
  data: TData[];
  bars: SeriesConfig[];
  xKey?: keyof TData;
  stacked?: boolean;
  height?: number;
  footer?: ReactNode;
}

export function BarChartComponent<TData extends Record<string, unknown>>({
  data,
  bars,
  xKey = "label",
  stacked,
  height = 320,
  footer
}: BarChartComponentProps<TData>) {
  return (
    <div className="space-y-4">
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height={height}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
            <XAxis dataKey={xKey as string} tick={{ fill: "#475569", fontSize: 12 }} />
            <YAxis tick={{ fill: "#475569", fontSize: 12 }} />
            <Tooltip
              contentStyle={{ borderRadius: 12, borderColor: "#e2e8f0", boxShadow: "0 10px 30px rgba(15,23,42,0.15)" }}
            />
            <Legend />
            {bars.map((bar, idx) => (
              <Bar
                key={bar.dataKey}
                dataKey={bar.dataKey}
                fill={bar.color}
                name={bar.name}
                stackId={stacked ? "stack" : `bar-${idx}`}
                radius={[8, 8, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
      {footer}
    </div>
  );
}

