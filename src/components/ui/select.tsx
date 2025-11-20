"use client";

import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import clsx from "clsx";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select({ className, children, error, ...props }, ref) {
  return (
    <div className="space-y-1">
      <select
        ref={ref}
        className={clsx(
          "w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30",
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
});

