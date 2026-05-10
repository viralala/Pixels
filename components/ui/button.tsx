"use client";

import { ArrowUpRight } from "lucide-react";
import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  magnetic?: boolean;
}

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[13px]",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-7 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow-sm hover:shadow-glow-md",
  secondary:
    "bg-surface-elevated text-foreground border border-border hover:border-foreground/40 hover:bg-surface",
  ghost:
    "bg-transparent text-foreground border border-border/60 hover:border-foreground/50 hover:bg-surface/40",
};

/**
 * Premium magnetic button with hover icon-rotation and arrow reveal.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    icon = true,
    magnetic = true,
    className,
    ...props
  },
  ref,
) {
  const inner = (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5",
        "rounded-full font-medium tracking-tight",
        "transition-all duration-500 ease-out-cinema",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        sizes[size],
        variants[variant],
        className,
      )}
      {...props}
    >
      <span className="relative">{children}</span>
      {icon && (
        <span className="relative h-4 w-4 overflow-hidden">
          <motion.span
            initial={false}
            className="absolute inset-0 flex items-center justify-center"
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-cinema group-hover:translate-x-3 group-hover:-translate-y-3" />
          </motion.span>
          <motion.span
            initial={false}
            className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out-cinema -translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0"
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </span>
      )}
    </button>
  );

  if (magnetic) {
    return <Magnetic strength={0.25}>{inner}</Magnetic>;
  }
  return inner;
});
