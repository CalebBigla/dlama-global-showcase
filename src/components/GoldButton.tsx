import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300";

const styles = {
  gold: "text-navy-deep shadow-[0_10px_30px_-16px_oklch(0.52_0.075_78)] hover:brightness-110 hover:-translate-y-0.5",
  outline: "border border-accent text-accent hover:bg-accent hover:text-navy-deep",
  light:
    "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary",
} as const;

type Variant = keyof typeof styles;

const goldStyle = { backgroundImage: "var(--gradient-gold)" };

export function GoldButton({
  variant = "gold",
  className = "",
  children,
  ...rest
}: ComponentProps<"button"> & { variant?: Variant; children: ReactNode }) {
  return (
    <button
      {...rest}
      style={variant === "gold" ? goldStyle : undefined}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function GoldLink({
  variant = "gold",
  className = "",
  children,
  ...rest
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link
      {...rest}
      style={variant === "gold" ? goldStyle : undefined}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}