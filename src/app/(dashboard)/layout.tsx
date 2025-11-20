import { ReactNode } from "react";
import { getServerSession } from "next-auth";

import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { authOptions } from "@/lib/auth";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-transparent">
        <TopNav user={session?.user} />
        <main className="flex-1 p-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col space-y-10">{children}</div>
        </main>
      </div>
    </div>
  );
}

