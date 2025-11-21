"use client";

import { cloneElement, forwardRef, isValidElement } from "react";
import type { ButtonHTMLAttributes, MouseEvent, ReactElement, ReactNode, Ref } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  asChild?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-3"
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-light focus:ring-brand-light",
  secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-200",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-100",
  danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-500"
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  {
    className,
    children,
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    loading,
    disabled,
    asChild = false,
    onClick,
    ...props
  },
  ref
) {
  const isDisabled = Boolean(disabled || loading);
  const baseClasses = clsx(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement;
    const originalOnClick = child.props.onClick;
    const slottedContent = (
      <>
        {leftIcon}
        <span>{loading ? "Processing..." : child.props.children}</span>
        {rightIcon}
      </>
    );

    const handleClick = (event: MouseEvent<HTMLElement>) => {
      if (isDisabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      onClick?.(event as unknown as MouseEvent<HTMLButtonElement>);
      originalOnClick?.(event);
    };

    return cloneElement(
      child,
      {
        ...props,
        className: clsx(child.props.className, baseClasses),
        ref,
        onClick: handleClick,
        "aria-disabled": isDisabled || child.props["aria-disabled"],
        tabIndex: isDisabled ? -1 : child.props.tabIndex ?? props.tabIndex
      },
      slottedContent
    );
  }

  const content = (
    <>
      {leftIcon}
      <span>{loading ? "Processing..." : children}</span>
      {rightIcon}
    </>
  );

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      className={baseClasses}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
});

