import type { LucideIcon } from "lucide-react";
import { Activity, CalendarDays, Gauge, Lightbulb, Settings, Users2 } from "lucide-react";

export type DashboardNavItem = { href: string; label: string; icon: LucideIcon };

export const dashboardNavItems: DashboardNavItem[] = [
  { href: "/", label: "Dashboard", icon: Gauge },
  { href: "/donors", label: "Donors", icon: Users2 },
  { href: "/events", label: "Events", icon: CalendarDays },
  { href: "/analytics", label: "Analytics", icon: Activity },
  { href: "/insights", label: "Insights", icon: Lightbulb },
  { href: "/settings", label: "Settings", icon: Settings }
];

