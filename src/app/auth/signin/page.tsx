import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

import { authOptions } from "@/lib/auth";
import { SignInButton } from "@/app/auth/signin/sign-in-button";

export const metadata: Metadata = {
  title: "Sign in | BHIC Dashboard"
};

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
      <div className="card w-full max-w-md space-y-6 text-center">
        <Image src="/logo.svg" alt="BHIC" width={64} height={64} className="mx-auto" unoptimized />
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-slate-900">BHIC Mission Control</h1>
          <p className="text-sm text-slate-500">
            Sign in using your @bhic.org Gmail account to access the Bald Head Island Conservancy dashboard.
          </p>
        </div>
        <SignInButton />
        <p className="text-xs text-slate-400">
          Access is restricted to Conservancy staff. Reach out to the Digital team if you need help.
        </p>
      </div>
    </div>
  );
}

