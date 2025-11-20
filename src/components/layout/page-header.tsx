import type { ReactNode } from "react";
import clsx from "clsx";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({ eyebrow, title, description, actions, children, className }: PageHeaderProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0px_25px_60px_rgba(15,23,42,0.08)] backdrop-blur",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -right-8 h-48 w-48 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute bottom-[-60px] left-[-40px] h-44 w-44 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="relative z-10 flex flex-wrap items-start gap-6">
        <div className="space-y-3">
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full border border-slate-100/70 bg-slate-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {eyebrow}
            </span>
          ) : null}
          <div>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900">{title}</h1>
            {description ? <p className="mt-2 max-w-3xl text-sm text-slate-600">{description}</p> : null}
          </div>
        </div>
        {actions ? <div className="ml-auto flex flex-col items-stretch gap-3">{actions}</div> : null}
      </div>
      {children ? <div className="relative z-10 mt-6">{children}</div> : null}
    </section>
  );
}

interface PageHeaderMetaProps {
  items: Array<{
    label: string;
    value: string;
    helper?: string;
  }>;
  columns?: number;
}

export function PageHeaderMeta({ items, columns = 3 }: PageHeaderMetaProps) {
  return (
    <div
      className={clsx(
        "grid gap-4 text-sm text-slate-600",
        columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"
      )}
    >
      {items.map((item) => (
        <div
          key={`${item.label}-${item.value}`}
          className="rounded-2xl border border-slate-100/70 bg-white/90 px-4 py-3 shadow-inner shadow-slate-200/70"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
          <p className="mt-1 text-base font-semibold text-slate-900">{item.value}</p>
          {item.helper ? <p className="mt-0.5 text-xs text-slate-500">{item.helper}</p> : null}
        </div>
      ))}
    </div>
  );
}


