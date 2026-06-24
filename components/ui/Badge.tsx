import type { ReactNode } from "react";

type BadgeVariant = "standard" | "premium" | "neutral";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantClasses: Record<BadgeVariant, string> = {
  standard: "bg-muted text-muted-foreground",
  premium: "bg-premium-soft text-premium",
  neutral: "bg-secondary text-secondary-foreground",
};

export function Badge({
  children,
  variant = "neutral",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}