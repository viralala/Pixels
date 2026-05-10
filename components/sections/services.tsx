"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";
import {
  Code2,
  Layers,
  Database,
  PenTool,
  Sparkles,
  Search,
  CircuitBoard,
  Compass,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface Service {
  num: string;
  title: string;
  description: string;
  deliverables: string[];
  Icon: typeof Code2;
  preview: string;
}

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Frontend Development",
    description: "Cinematic Next.js & React frontends with motion that earns its weight.",
    deliverables: ["Next.js 15", "Framer Motion", "GSAP", "Lenis"],
    Icon: Code2,
    preview: "linear-gradient(135deg, #0a1a2a 0%, #142940 50%, #d4ff4a 130%)",
  },
  {
    num: "02",
    title: "Backend Engineering",
    description: "Type-safe APIs, edge runtimes, and infrastructure that scales quietly.",
    deliverables: ["TypeScript", "Postgres", "Redis", "Edge"],
    Icon: Database,
    preview: "linear-gradient(135deg, #1a0a2a 0%, #2a1545 50%, #6b46ff 130%)",
  },
  {
    num: "03",
    title: "Web & UI Design",
    description: "Editorial layouts and interface systems engineered for clarity and craft.",
    deliverables: ["Figma", "Design Systems", "Prototyping"],
    Icon: Layers,
    preview: "linear-gradient(135deg, #2a1a0a 0%, #3a2515 50%, #ff8a4c 130%)",
  },
  {
    num: "04",
    title: "Product Design",
    description: "End-to-end product flows for SaaS, mobile, and AI-native interfaces.",
    deliverables: ["Discovery", "Flows", "Visual", "Hand-off"],
    Icon: PenTool,
    preview: "linear-gradient(135deg, #0a2a1a 0%, #154025 50%, #4cffaa 130%)",
  },
  {
    num: "05",
    title: "Branding",
    description: "Logos, type systems, and identity guides built to last past the launch.",
    deliverables: ["Identity", "Type", "Guidelines"],
    Icon: Sparkles,
    preview: "linear-gradient(135deg, #2a0a1a 0%, #401530 50%, #ff4caa 130%)",
  },
  {
    num: "06",
    title: "Motion Design",
    description: "Storyboards, scroll-driven sequences, and 3D scenes with cinematic timing.",
    deliverables: ["GSAP", "Three.js", "Lottie", "WebGL"],
    Icon: CircuitBoard,
    preview: "linear-gradient(135deg, #0a0a2a 0%, #151540 50%, #4cd4ff 130%)",
  },
  {
    num: "07",
    title: "SEO & Performance",
    description: "Core Web Vitals, structured data, and content that actually ranks.",
    deliverables: ["Audits", "Schema", "Speed"],
    Icon: Search,
    preview: "linear-gradient(135deg, #2a2a0a 0%, #404015 50%, #ffd44c 130%)",
  },
  {
    num: "08",
    title: "Strategy & Direction",
    description: "Positioning, narrative, and creative direction before a pixel is drawn.",
    deliverables: ["Positioning", "Roadmap", "Voice"],
    Icon: Compass,
    preview: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #f2f2ee 130%)",
  },
];

const SERVICE_TAGS = [
  "Framer Development",
  "Branding",
  "Visual Design",
  "User Interface Design",
  "Product Design",
  "User Experience Design",
  "User Research",
  "Pitch Deck Design",
  "Design Systems",
];

export function Services() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Floating preview that follows cursor
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 20, mass: 0.4 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          index="04 —"
          title="A full studio under one roof."
          description="Strategy through ship. We're builders who design, and designers who ship — so nothing gets lost in translation."
          className="md:max-w-2xl"
        />

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-start">
          <Reveal y={16} className="md:col-span-5">
            <div className="flex flex-wrap gap-2">
              {SERVICE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal y={16} delay={0.05} className="md:col-span-7">
            <div>
              <div className="text-eyebrow uppercase text-muted-foreground">What we bring</div>
              <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">
                Digital experiences that help startups stand out from day one.
              </h3>
              <p className="mt-3 max-w-[48ch] text-sm text-muted-foreground md:text-base">
                We focus on clarity, speed, and craft so your launch feels premium, not generic.
              </p>
            </div>
          </Reveal>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setHoverIndex(null)}
          className="relative mt-16 md:mt-24"
        >
          {/* Cursor-following preview tile (desktop only) */}
          <AnimatePresence>
            {hoverIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  x: sx,
                  y: sy,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                className="pointer-events-none absolute z-30 hidden h-72 w-56 overflow-hidden rounded-[20px] border border-border shadow-card-hover lg:block"
              >
                <div
                  className="h-full w-full"
                  style={{ background: SERVICES[hoverIndex].preview }}
                />
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <div className="text-[10px] uppercase tracking-widest opacity-70">
                    {SERVICES[hoverIndex].num}
                  </div>
                  <div className="font-display text-xl tracking-tight">
                    {SERVICES[hoverIndex].title}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Service rows */}
          <div className="border-t border-border">
            {SERVICES.map((service, i) => (
              <ServiceRow
                key={service.num}
                service={service}
                index={i}
                isHovered={hoverIndex === i}
                anyHovered={hoverIndex !== null}
                onEnter={() => setHoverIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceRowProps {
  service: Service;
  index: number;
  isHovered: boolean;
  anyHovered: boolean;
  onEnter: () => void;
}

function ServiceRow({ service, index, isHovered, anyHovered, onEnter }: ServiceRowProps) {
  const Icon = service.Icon;

  return (
    <Reveal y={20} delay={index * 0.04} className="block">
      <div
        onMouseEnter={onEnter}
        className={cn(
          "group relative flex flex-col gap-3 border-b border-border py-7 transition-all duration-700 ease-out-cinema md:flex-row md:items-center md:justify-between md:gap-10 md:py-10",
          anyHovered && !isHovered && "opacity-30",
        )}
      >
        {/* Subtle accent wash */}
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-accent/10"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        <div
          className={cn(
            "relative flex items-center gap-6 transition-colors duration-500 md:gap-10",
          )}
        >
          <span className="font-mono text-eyebrow uppercase text-muted-foreground transition-colors duration-500 group-hover:text-foreground/70">
            {service.num}
          </span>
          <div className="flex items-center gap-4 md:gap-5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-surface-elevated transition-all duration-500 group-hover:border-foreground/30 group-hover:bg-surface md:h-11 md:w-11">
              <Icon className="h-4 w-4 md:h-5 md:w-5" />
            </span>
            <h3 className="font-display text-2xl tracking-tight md:text-4xl lg:text-5xl">
              {service.title}
            </h3>
          </div>
        </div>

        <div
          className={cn(
            "relative ml-16 flex flex-col items-start gap-3 md:ml-0 md:flex-row md:items-center md:gap-8",
          )}
        >
          <p
            className={cn(
              "max-w-[40ch] text-sm text-muted-foreground transition-colors duration-500 group-hover:text-foreground/80 md:text-right",
            )}
          >
            {service.description}
          </p>
          <div className="hidden items-center gap-1.5 lg:flex">
            {service.deliverables.slice(0, 3).map((d) => (
              <span
                key={d}
                className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground transition-colors duration-500 group-hover:border-foreground/30 group-hover:text-foreground/70"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
