"use client";

import type { ReactNode } from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

type LineConfig = {
  dataKey: string;
  color: string;
  name?: string;
  strokeWidth?: number;
  dot?: boolean;
};

interface TimeSeriesChartProps<TData extends Record<string, unknown>> {
  data: TData[];
  lines: LineConfig[];
  xKey?: keyof TData;
  height?: number;
  footer?: ReactNode;
}

export function TimeSeriesChart<TData extends Record<string, unknown>>({
  data,
  lines,
  xKey = "label",
  height = 320,
  footer
}: TimeSeriesChartProps<TData>) {
  return (
    <div className="space-y-4">
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
            <XAxis dataKey={xKey as string} tick={{ fill: "#475569", fontSize: 12 }} />
            <YAxis tick={{ fill: "#475569", fontSize: 12 }} />
            <Tooltip
              contentStyle={{ borderRadius: 12, borderColor: "#e2e8f0", boxShadow: "0 10px 30px rgba(15,23,42,0.15)" }}
            />
            <Legend />
            {lines.map((line) => (
              <Line
                key={line.dataKey}
                type="monotone"
                dataKey={line.dataKey}
                name={line.name}
                stroke={line.color}
                strokeWidth={line.strokeWidth ?? 3}
                dot={line.dot ?? false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      {footer}
    </div>
  );
}

