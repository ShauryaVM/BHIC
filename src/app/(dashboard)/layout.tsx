import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { DashboardShell } from "@/components/layout/dashboard-shell";
import { authOptions } from "@/lib/auth";
import { env } from "@/lib/env";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  const email = session.user?.email;
  const allowedDomain = env.ALLOWED_EMAIL_DOMAIN.toLowerCase();

  if (!email || !email.toLowerCase().endsWith(`@${allowedDomain}`)) {
    redirect("/auth/not-authorized");
  }

  return <DashboardShell user={session.user}>{children}</DashboardShell>;
}

