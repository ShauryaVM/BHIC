"use client";

import { ReactNode, useState } from "react";

import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";

type DashboardShellProps = {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: "ADMIN" | "STAFF" | null;
  };
  children: ReactNode;
};

export function DashboardShell({ user, children }: DashboardShellProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        userRole={(user.role as "ADMIN" | "STAFF" | undefined) ?? "STAFF"}
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() => setMobileSidebarOpen(false)}
      />
      <div className="flex flex-1 flex-col bg-transparent">
        <TopNav user={user} onToggleSidebar={() => setMobileSidebarOpen(true)} />
        <main className="flex-1 p-4 sm:p-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col space-y-10">{children}</div>
        </main>
      </div>
    </div>
  );
}


