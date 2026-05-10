"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  /** seconds for one full loop */
  speed?: number;
  pauseOnHover?: boolean;
}

/**
 * Pure-CSS infinite marquee. Children are duplicated for a seamless loop.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  speed = 40,
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "marquee-mask group relative w-full overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
