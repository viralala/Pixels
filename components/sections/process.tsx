"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

interface Step {
  num: string;
  title: string;
  description: string;
  duration: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We embed with founders to understand the audience, the ambition, and the obstacles. Workshops, references, gut-checks.",
    duration: "Week 1",
  },
  {
    num: "02",
    title: "Strategy",
    description:
      "Positioning, narrative, and a creative direction built around a single clear idea worth defending.",
    duration: "Week 2",
  },
  {
    num: "03",
    title: "Design",
    description:
      "Editorial layouts, motion principles, and a design system tuned for the brand's specific voice.",
    duration: "Weeks 3–5",
  },
  {
    num: "04",
    title: "Build",
    description:
      "Production engineering with Next.js, GSAP, and Framer Motion. Performance budgeted from day one.",
    duration: "Weeks 4–7",
  },
  {
    num: "05",
    title: "Launch",
    description:
      "We ship. Then we sit with the metrics, the heatmaps, and the feedback for the next two weeks.",
    duration: "Week 8",
  },
  {
    num: "06",
    title: "Scale",
    description:
      "Ongoing partnerships for the brands we believe in — new pages, new launches, new chapters.",
    duration: "Ongoing",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 40%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative overflow-hidden py-28 md:py-36">
      <div className="container">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <SectionHeading
              eyebrow="How we work"
              index="05 —"
              title="Six steps. One studio."
              description="A focused process, sized to the brief. We bring the same craft to a one-month landing as a six-month flagship."
            />
            <Reveal delay={0.4} y={20}>
              <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
                <Stat value="6–8 wks" label="Avg. timeline" />
                <Stat value="2 active" label="Projects at once" />
                <Stat value="100%" label="In-house team" />
                <Stat value="∞" label="Iteration loops" />
              </div>
            </Reveal>
          </div>

          <div ref={containerRef} className="relative md:col-span-7">
            {/* Vertical track */}
            <div className="absolute left-[28px] top-0 h-full w-px bg-border md:left-[34px]">
              <motion.div
                style={{ height: lineHeight }}
                className="absolute left-0 top-0 w-full bg-accent shadow-[0_0_12px_rgba(212,255,74,0.6)]"
              />
            </div>

            <ol className="relative flex flex-col gap-8 md:gap-10">
              {STEPS.map((step, i) => (
                <ProcessStep key={step.num} step={step} index={i} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLLIElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 30%"],
  });
  const dotScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <Reveal as="li" y={28} delay={index * 0.04} className="relative">
      <div ref={ref} className="flex gap-6 md:gap-8">
        <div className="relative pt-2">
          <motion.div
            style={{ scale: dotScale, opacity: dotOpacity }}
            className="grid h-14 w-14 place-items-center rounded-full border border-border bg-surface-elevated md:h-[68px] md:w-[68px]"
          >
            <span className="font-mono text-sm tracking-widest text-muted-foreground">
              {step.num}
            </span>
          </motion.div>
        </div>

        <div className="flex-1 pb-2 pt-3">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl tracking-tight md:text-3xl">
              {step.title}
            </h3>
            <span className="text-eyebrow uppercase text-muted-foreground whitespace-nowrap">
              {step.duration}
            </span>
          </div>
          <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted-foreground md:text-base">
            {step.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-border pt-3">
      <div className="font-display text-2xl tracking-tight md:text-3xl">{value}</div>
      <div className="mt-1 text-eyebrow uppercase text-muted-foreground">{label}</div>
    </div>
  );
}
