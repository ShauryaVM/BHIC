"use client";

import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RefreshCw, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

interface TopNavProps {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
  };
}

export function TopNav({ user }: TopNavProps) {
  const router = useRouter();
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
    : "BH";

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/70 bg-white/80 px-6 py-4 backdrop-blur">
      <div className="space-y-1">
        <p className="text-sm font-semibold text-slate-700">Bald Head Island Conservancy</p>
        <p className="text-xs text-slate-500">Mission Control Dashboard</p>
      </div>
      <div className="flex flex-1 items-center justify-end gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-700 md:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Live sync enabled
        </div>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm hover:bg-white md:inline-flex"
          onClick={() => router.refresh()}
        >
          <RefreshCw className="h-4 w-4" />
          Refresh data
        </Button>
        <Link
          href="https://bhic.org"
          target="_blank"
          className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-brand transition hover:bg-brand/10"
        >
          <Sparkles className="h-4 w-4" />
          Visit bhic.org
        </Link>
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left shadow-sm">
            {user?.image ? (
              <Image src={user.image} alt={user?.name ?? "User"} width={32} height={32} className="rounded-full" />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                {initials}
              </div>
            )}
            <div className="hidden text-left text-xs sm:block">
              <p className="font-semibold text-slate-800">{user?.name ?? "BHIC Staff"}</p>
              <p className="text-slate-500">{user?.role ?? "STAFF"}</p>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition duration-100"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 mt-3 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-card focus:outline-none">
              <div className="px-3 py-2 text-xs">
                <p className="font-semibold text-slate-800">{user?.name ?? "BHIC Staff"}</p>
                <p className="text-slate-500">{user?.email ?? ""}</p>
              </div>
              <Menu.Item>
                {() => (
                  <form method="post" action="/api/auth/signout">
                    <button
                      type="submit"
                      className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                      Sign out
                    </button>
                  </form>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}

