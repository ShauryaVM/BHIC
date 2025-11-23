"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface SeriesConfig {
  dataKey: string;
  color: string;
  name?: string;
}

interface AreaChartComponentProps<TData extends Record<string, unknown>> {
  data: TData[];
  lines: SeriesConfig[];
  xKey?: keyof TData;
  height?: number;
}

export function AreaChartComponent<TData extends Record<string, unknown>>({
  data,
  lines,
  xKey = "name",
  height = 320
}: AreaChartComponentProps<TData>) {
  return (
    <div className="h-full">
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height={height}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
            <XAxis dataKey={xKey as string} tick={{ fill: "#475569", fontSize: 12 }} />
            <YAxis tick={{ fill: "#475569", fontSize: 12 }} />
            <Tooltip
              contentStyle={{ borderRadius: 12, borderColor: "#e2e8f0", boxShadow: "0 10px 30px rgba(15,23,42,0.15)" }}
            />
            <Legend />
            {lines.map((line) => (
              <Area
                key={line.dataKey}
                type="monotone"
                dataKey={line.dataKey}
                stroke={line.color}
                fill={line.color}
                fillOpacity={0.2}
                name={line.name}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


