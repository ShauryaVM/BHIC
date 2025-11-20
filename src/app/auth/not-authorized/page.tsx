import Link from "next/link";

export default function NotAuthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="card w-full max-w-lg space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Access denied</p>
        <h1 className="text-3xl font-semibold text-slate-900">BHIC email required</h1>
        <p className="text-sm text-slate-500">
          This dashboard is restricted to Bald Head Island Conservancy staff accounts. Please sign in with an @bhic.org
          Gmail address or reach out to the Digital team to request access.
        </p>
        <Link
          href="/auth/signin"
          className="inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-light"
        >
          Return to sign in
        </Link>
      </div>
    </div>
  );
}

