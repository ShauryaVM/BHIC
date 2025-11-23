"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { geoAlbers, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import states from "us-atlas/states-10m.json" assert { type: "json" };

import type { DonorGeoPoint } from "@/lib/donor-geo";

type Metric = "totalGiven" | "totalPledged" | "donorCount";
type Grouping = "postal" | "city";

const metricOptions: { value: Metric; label: string }[] = [
  { value: "totalGiven", label: "Total given" },
  { value: "totalPledged", label: "Total pledged" },
  { value: "donorCount", label: "Donor count" }
];

const groupingOptions: { value: Grouping; label: string }[] = [
  { value: "postal", label: "Postal code" },
  { value: "city", label: "City" }
];

const WIDTH = 640;
const HEIGHT = 420;

const metricValue = (point: DonorGeoPoint, metric: Metric) => {
  if (metric === "donorCount") return point.donorCount;
  if (metric === "totalGiven") return point.totalGiven;
  return point.totalPledged;
};

interface DonorGeoCardProps {
  data: DonorGeoPoint[];
}

export function DonorGeoCard({ data }: DonorGeoCardProps) {
  const [metric, setMetric] = useState<Metric>("totalGiven");
  const [grouping, setGrouping] = useState<Grouping>("postal");
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<{
    point: DonorGeoPoint;
    left: number;
    top: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ncFeature = useMemo(() => {
    const geoJson = feature(states as any, (states as any).objects.states);
    return geoJson.features.find((feat: any) => feat.id === "37");
  }, []);

  const projection = useMemo(() => {
    if (!ncFeature) return null;
    return geoAlbers().fitSize([WIDTH, HEIGHT], ncFeature as any);
  }, [ncFeature]);

  const path = useMemo(() => {
    if (!ncFeature || !projection) return null;
    return geoPath().projection(projection)(ncFeature as any);
  }, [ncFeature, projection]);

  const groupedData = useMemo(() => {
    if (grouping === "postal") {
      return data;
    }
    const collection = new Map<
      string,
      DonorGeoPoint & { latitudeSum: number; longitudeSum: number; contributors: number }
    >();

    for (const point of data) {
      if (!point.city) continue;
      const key = `${point.city}-${point.state ?? ""}`;
      const existing = collection.get(key);
      if (existing) {
        existing.totalGiven += point.totalGiven;
        existing.totalPledged += point.totalPledged;
        existing.donorCount += point.donorCount;
        existing.latitudeSum += point.latitude;
        existing.longitudeSum += point.longitude;
        existing.contributors += 1;
      } else {
        collection.set(key, {
          ...point,
          id: key,
          postalCode: point.postalCode,
          latitudeSum: point.latitude,
          longitudeSum: point.longitude,
          contributors: 1
        });
      }
    }

    return Array.from(collection.values()).map((entry) => ({
      id: entry.id,
      city: entry.city,
      state: entry.state,
      postalCode: entry.postalCode,
      donorCount: entry.donorCount,
      totalGiven: entry.totalGiven,
      totalPledged: entry.totalPledged,
      latitude: entry.latitudeSum / entry.contributors,
      longitude: entry.longitudeSum / entry.contributors
    }));
  }, [data, grouping]);

  const maxValue = useMemo(() => {
    if (!groupedData.length) return 1;
    return Math.max(...groupedData.map((point) => Math.max(metricValue(point, metric), 0))) || 1;
  }, [groupedData, metric]);

  if (!mounted || !path || !projection) {
    return <p className="text-sm text-slate-500">Loading map…</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <label className="text-sm font-medium text-slate-600">
          Metric
          <select
            value={metric}
            onChange={(event) => setMetric(event.target.value as Metric)}
            className="ml-2 rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
          >
            {metricOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-600">
          Grouping
          <select
            value={grouping}
            onChange={(event) => setGrouping(event.target.value as Grouping)}
            className="ml-2 rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
          >
            {groupingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {groupedData.length === 0 ? (
        <p className="text-sm text-slate-500">No North Carolina donors found in the imported data yet.</p>
      ) : (
        <div className="relative" ref={containerRef}>
          <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full">
            <path d={path ?? undefined} className="fill-indigo-50 stroke-indigo-200 stroke-[1.5]" />
            {groupedData.map((point) => {
              if (!projection) return null;
              const projected = projection([point.longitude, point.latitude]);
              if (!projected) return null;
              const value = metricValue(point, metric);
              const radius = Math.max(4, (value / maxValue) * 20);
              const [cx, cy] = projected;
              const handleEnter = () => {
                const clampedLeft = Math.min(96, Math.max(4, (cx / WIDTH) * 100));
                const clampedTop = Math.min(92, Math.max(4, (cy / HEIGHT) * 100));
                setHovered({
                  point,
                  left: clampedLeft,
                  top: clampedTop
                });
              };
              return (
                <circle
                  key={point.id}
                  cx={cx}
                  cy={cy}
                  r={radius}
                  className="cursor-pointer fill-blue-500/70 stroke-white stroke-[1.5] transition hover:fill-blue-600"
                  onMouseEnter={handleEnter}
                  onMouseLeave={() => setHovered(null)}
                />
              );
            })}
          </svg>
          {hovered ? (
            <div
              className="pointer-events-none absolute w-48 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 p-3 text-sm shadow-lg"
              style={{ left: `${hovered.left}%`, top: `${hovered.top}%` }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {metricOptions.find((item) => item.value === metric)?.label}
              </p>
              <p className="text-lg font-bold text-slate-900">
                {metric === "donorCount"
                  ? hovered.point.donorCount.toLocaleString()
                  : `$${metricValue(hovered.point, metric).toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
              </p>
              <p className="text-slate-600">
                {grouping === "postal"
                  ? hovered.point.postalCode ?? "Unknown ZIP"
                  : hovered.point.city ?? "Unknown city"}
                , {hovered.point.state ?? "NC"}
              </p>
              <p className="text-xs text-slate-500">
                Donors: {hovered.point.donorCount.toLocaleString()} · Avg gift $
                {hovered.point.donorCount
                  ? Math.round(hovered.point.totalGiven / hovered.point.donorCount).toLocaleString()
                  : 0}
              </p>
            </div>
          ) : null}
        </div>
      )}

      {groupedData.length > 0 ? (
        <div>
          <h4 className="text-sm font-semibold text-slate-700">Top locations</h4>
          <ol className="mt-2 space-y-1 text-sm text-slate-600">
            {groupedData
              .slice()
              .sort((a, b) => metricValue(b, metric) - metricValue(a, metric))
              .slice(0, 5)
              .map((point) => (
                <li key={`${point.id}-stat`} className="flex justify-between">
                  <span>
                    {grouping === "postal" ? point.postalCode ?? "Unknown ZIP" : point.city ?? "Unknown city"},{" "}
                    {point.state ?? "NC"}
                  </span>
                  <span className="font-medium text-slate-900">
                    {metric === "donorCount"
                      ? metricValue(point, metric).toLocaleString()
                      : `$${metricValue(point, metric).toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
                  </span>
                </li>
              ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}


