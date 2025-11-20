import type { ReactNode } from "react";
import clsx from "clsx";

export function Table({ children, className }: { children: ReactNode; className?: string }) {
  return <table className={clsx("min-w-full divide-y divide-slate-200", className)}>{children}</table>;
}

export function THead({ children }: { children: ReactNode }) {
  return (
    <thead className="bg-slate-50">
      <tr className="text-xs font-semibold uppercase tracking-wider text-slate-500">{children}</tr>
    </thead>
  );
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody className="divide-y divide-slate-100 bg-white text-sm text-slate-700">{children}</tbody>;
}

export function TH({ children, align = "left" }: { children: ReactNode; align?: "left" | "center" | "right" }) {
  return (
    <th
      scope="col"
      className={clsx("px-4 py-3", {
        "text-left": align === "left",
        "text-center": align === "center",
        "text-right": align === "right"
      })}
    >
      {children}
    </th>
  );
}

export function TD({ children, align = "left" }: { children: ReactNode; align?: "left" | "center" | "right" }) {
  return (
    <td
      className={clsx("px-4 py-3", {
        "text-left": align === "left",
        "text-center": align === "center",
        "text-right": align === "right"
      })}
    >
      {children}
    </td>
  );
}

