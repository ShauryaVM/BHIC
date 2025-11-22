"use client";

import { MouseEvent, useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import { Activity, CalendarDays, Gauge, Lightbulb, Mail, Settings, Users2, X } from "lucide-react";

const navItems: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "/", label: "Dashboard", icon: Gauge },
  { href: "/donors", label: "Donors", icon: Users2 },
  { href: "/events", label: "Events", icon: CalendarDays },
  { href: "/analytics", label: "Analytics", icon: Activity },
  { href: "/emails", label: "Emails", icon: Mail },
  { href: "/insights", label: "Insights", icon: Lightbulb },
  { href: "/settings", label: "Settings", icon: Settings }
];

type SidebarProps = {
  userRole?: "ADMIN" | "STAFF";
  mobileOpen?: boolean;
  onMobileClose?: () => void;
};

export function Sidebar({ userRole, mobileOpen = false, onMobileClose }: SidebarProps) {
  const [showAdminNotice, setShowAdminNotice] = useState(false);
  const pathname = usePathname();
  const isAdmin = userRole === "ADMIN";

  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href === "/settings" && !isAdmin) {
        event.preventDefault();
        setShowAdminNotice(true);
        onMobileClose?.();
      } else {
        onMobileClose?.();
      }
    },
    [isAdmin, onMobileClose]
  );

  function NavigationSections() {
    return (
      <>
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
                onClick={(event) => handleNavClick(event, item.href)}
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
        {!isAdmin && showAdminNotice ? (
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/90 p-4 text-xs text-slate-700 shadow">
            <p className="font-semibold text-slate-900">Admin access required</p>
            <p>Only admins can open the settings panel. Ask an existing admin to upgrade your account.</p>
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-1 font-semibold text-slate-600 transition hover:bg-slate-100"
              onClick={() => setShowAdminNotice(false)}
            >
              Dismiss
            </button>
          </div>
        ) : null}
        <div className="mt-auto space-y-3 rounded-2xl border border-white/80 bg-gradient-to-br from-brand/15 via-brand/5 to-slate-50 p-4 text-xs text-slate-600">
          <p className="font-semibold text-slate-900">Live data</p>
          <p>Automatic sync every hour from eTapestry, Eventbrite, and GA4.</p>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-dark">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Systems nominal
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <aside className="relative hidden w-72 flex-col border-r border-white/50 bg-white/70 px-6 py-8 shadow-[20px_0_50px_rgba(15,23,42,0.08)] backdrop-blur lg:flex">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        <div className="relative z-10 flex h-full flex-col gap-10">
          <NavigationSections />
        </div>
      </aside>

      <div className="lg:hidden">
        <div
          className={clsx(
            "fixed inset-0 z-40 bg-slate-900/40 transition-opacity",
            mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          )}
          aria-hidden="true"
          onClick={onMobileClose}
        />
        <aside
          className={clsx(
            "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-100 bg-white px-6 py-8 shadow-2xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
          aria-hidden={!mobileOpen}
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">Mission Control</p>
              <p className="text-xs text-slate-500">BHIC Dashboard</p>
            </div>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50"
              onClick={onMobileClose}
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-8 overflow-y-auto pb-6">
            <NavigationSections />
          </div>
        </aside>
      </div>
    </>
  );
}

