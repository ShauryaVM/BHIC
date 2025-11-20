import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
  actions?: ReactNode;
}

export function Card({ title, description, className, children, actions }: CardProps) {
  return (
    <section className={clsx("card p-6 space-y-4", className)}>
      {(title || description || actions) && (
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            {title ? <h3 className="text-lg font-semibold text-slate-900">{title}</h3> : null}
            {description ? <p className="text-sm text-slate-500">{description}</p> : null}
          </div>
          {actions}
        </header>
      )}
      <div>{children}</div>
    </section>
  );
}

