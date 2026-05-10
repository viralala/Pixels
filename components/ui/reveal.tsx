"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AsTag =
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "li"
  | "ol"
  | "ul"
  | "figure"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4";

const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  li: motion.li,
  ol: motion.ol,
  ul: motion.ul,
  figure: motion.figure,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
} as const;

interface RevealProps {
  children: ReactNode;
  as?: AsTag;
  className?: string;
  delay?: number;
  /** Distance the element travels in. Px. */
  y?: number;
  once?: boolean;
}

/** Generic block-level reveal-on-scroll wrapper. */
export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  y = 18,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const MotionTag = MOTION_TAGS[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  /** Stagger between words */
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

/**
 * Word-by-word slide-up reveal. Used for cinematic headlines.
 * Splits the string by spaces and animates each word with a clip mask.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.03,
  as = "h2",
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  const words = text.split(" ");

  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    // @ts-expect-error — generic intrinsic element
    <Tag ref={ref} className={cn(className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.05em]"
        >
          <motion.span
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
