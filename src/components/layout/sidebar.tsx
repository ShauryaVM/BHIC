"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import { Activity, CalendarDays, Gauge, Lightbulb, Mail, Users2 } from "lucide-react";

const navItems: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "/", label: "Dashboard", icon: Gauge },
  { href: "/donors", label: "Donors", icon: Users2 },
  { href: "/events", label: "Events", icon: CalendarDays },
  { href: "/insights", label: "Insights", icon: Lightbulb },
  { href: "/analytics", label: "Analytics", icon: Activity },
  { href: "/emails", label: "Emails", icon: Mail }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="relative hidden w-72 flex-col border-r border-white/50 bg-white/70 px-6 py-8 shadow-[20px_0_50px_rgba(15,23,42,0.08)] backdrop-blur lg:flex">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      <div className="relative z-10 flex flex-col gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-3 shadow-inner">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-lg font-semibold text-white">BH</div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-900">Mission Control</p>
              <p className="text-xs text-slate-500">Bald Head Island Conservancy</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">Operations snapshot across fundraising, events, and digital programs.</p>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition duration-200",
                  isActive
                    ? "bg-brand text-white shadow-lg shadow-brand/30"
                    : "text-slate-600 hover:-translate-y-0.5 hover:bg-white/70 hover:text-slate-900"
                )}
              >
                <Icon
                  className={clsx(
                    "h-4 w-4 transition",
                    isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"
                  )}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto space-y-3 rounded-2xl border border-white/80 bg-gradient-to-br from-brand/15 via-brand/5 to-slate-50 p-4 text-xs text-slate-600">
          <p className="font-semibold text-slate-900">Live data</p>
          <p>Automatic sync every hour from eTapestry, Eventbrite, and GA4.</p>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-dark">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Systems nominal
          </div>
        </div>
      </div>
    </aside>
  );
}

