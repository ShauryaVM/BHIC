"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface SeriesConfig {
  dataKey: string;
  color: string;
  name?: string;
}

interface HorizontalBarChartProps<TData extends Record<string, unknown>> {
  data: TData[];
  bars: SeriesConfig[];
  categoryKey?: keyof TData;
  height?: number;
  compact?: boolean;
}

export function HorizontalBarChart<TData extends Record<string, unknown>>({
  data,
  bars,
  categoryKey = "name",
  height = 360,
  compact
}: HorizontalBarChartProps<TData>) {
  const computedHeight = compact ? height : Math.max(height, data.length * 48);
  return (
    <div className="h-full">
      <div style={{ height: computedHeight }}>
        <ResponsiveContainer width="100%" height={computedHeight}>
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
            <XAxis type="number" tick={{ fill: "#475569", fontSize: 12 }} />
            <YAxis
              type="category"
              dataKey={categoryKey as string}
              tick={{ fill: "#475569", fontSize: 12 }}
              width={180}
            />
            <Tooltip
              contentStyle={{ borderRadius: 12, borderColor: "#e2e8f0", boxShadow: "0 10px 30px rgba(15,23,42,0.15)" }}
            />
            <Legend />
            {bars.map((bar) => (
              <Bar key={bar.dataKey} dataKey={bar.dataKey} fill={bar.color} name={bar.name} radius={[0, 8, 8, 0]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


