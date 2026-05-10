import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { RevealText, Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  index?: string;
}

/**
 * Editorial section heading.
 * Eyebrow + index + display title + optional lede.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  index,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {(eyebrow || index) && (
        <Reveal delay={0} y={12}>
          <div
            className={cn(
              "flex items-center gap-3 text-eyebrow uppercase",
              align === "center" && "justify-center",
            )}
          >
            {index && (
              <span className="font-mono text-muted-foreground">{index}</span>
            )}
            {eyebrow && (
              <>
                {index && (
                  <span className="h-px w-8 bg-border" aria-hidden />
                )}
                <span className="num-badge">{eyebrow}</span>
              </>
            )}
          </div>
        </Reveal>
      )}

      <RevealText
        as="h2"
        text={title}
        className="text-display-lg max-w-[14ch]"
      />

      {description && (
        <Reveal delay={0.2} y={16}>
          <p className="max-w-[44ch] text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </header>
  );
}
