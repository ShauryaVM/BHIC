"use client";

import type { ReactNode } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export interface PieChartDatum extends Record<string, unknown> {
  name: string;
  value: number;
}

interface PieChartComponentProps {
  data: PieChartDatum[];
  colors?: string[];
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  footer?: ReactNode;
}

const defaultColors = ["#0f172a", "#1d4ed8", "#059669", "#f97316", "#9333ea", "#e11d48"];

export function PieChartComponent({
  data,
  colors = defaultColors,
  height = 320,
  innerRadius = 60,
  outerRadius = 120,
  footer
}: PieChartComponentProps) {
  return (
    <div className="space-y-4">
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" label innerRadius={innerRadius} outerRadius={outerRadius}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {footer}
    </div>
  );
}

