"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealText, Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { AIMockup, LuxuryMockup, SaaSMockup } from "./carousel-mockups";

const INDUSTRIES = [
  "Cafés",
  "Gyms",
  "Fashion",
  "AI Startups",
  "Restaurants",
  "Real Estate",
  "SaaS",
  "Luxury",
  "Portfolios",
  "Studios",
  "Fitness",
  "Tech",
];

const STATS = [
  { value: "120+", label: "Projects shipped" },
  { value: "37", label: "Awards & features" },
  { value: "4.9★", label: "Avg. client rating" },
];

const FLOATING_WORK = [
  {
    title: "Nova",
    industry: "AI Startup",
    metric: "+412% CR",
    Mockup: AIMockup,
  },
  {
    title: "Aurélien",
    industry: "Luxury Brand",
    metric: "+92% visits",
    Mockup: LuxuryMockup,
  },
  {
    title: "LinearFlow",
    industry: "SaaS Platform",
    metric: "$2.4M pipeline",
    Mockup: SaaSMockup,
  },
];

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-20 pt-32 md:pt-40"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-spot" />
        <motion.div
          style={{ y: gridY }}
          className="absolute inset-0 bg-grid opacity-30"
        />
        {/* Floating accent orb */}
        <motion.div
          aria-hidden
          className="absolute -right-20 top-20 h-[420px] w-[420px] rounded-full bg-accent/12 blur-[140px]"
          animate={{
            x: [0, 24, -16, 0],
            y: [0, -18, 12, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -left-20 bottom-20 h-[340px] w-[340px] rounded-full bg-accent/8 blur-[120px]"
          animate={{
            x: [0, -18, 16, 0],
            y: [0, 12, -8, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="container flex flex-1 flex-col justify-center"
      >
        {/* Status row */}
        <Reveal y={20} className="mb-10 md:mb-14">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-eyebrow uppercase">
            <span className="num-badge">Pixels Studio · Est. 2021</span>
            <span className="hidden h-px w-16 bg-border md:inline-block" aria-hidden />
            <span className="text-muted-foreground">
              Available · 2 slots Q3
            </span>
          </div>
        </Reveal>

        {/* Headline */}
        <h1 className="text-display-2xl max-w-[16ch] font-display">
          <RevealText
            as="span"
            text="We build digital"
            className="block"
            stagger={0.06}
          />
          <span className="block">
            <RevealText
              as="span"
              text="experiences that"
              className="inline"
              stagger={0.06}
              delay={0.15}
            />{" "}
            <span className="inline-block overflow-hidden align-bottom pb-[0.05em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block font-serif italic text-accent"
              >
                move
              </motion.span>
            </span>{" "}
            <span className="inline-block overflow-hidden align-bottom pb-[0.05em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                people.
              </motion.span>
            </span>
          </span>
        </h1>

        {/* Subhead + CTAs */}
        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-16">
          <Reveal delay={0.7} y={24} className="md:col-span-5 md:col-start-1">
            <p className="max-w-[44ch] text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              An independent studio designing &amp; engineering premium animated
              websites, products, and brands for ambitious startups
              <span className="text-foreground"> worldwide</span>.
            </p>
          </Reveal>

          <Reveal delay={0.85} y={24} className="md:col-span-5 md:col-start-8">
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" variant="primary" type="button" onClick={() => scrollToId("work")}>
                View projects
              </Button>
              <Button size="lg" variant="secondary" type="button" onClick={() => scrollToId("contact")}>
                Book a call
              </Button>
              <Button size="lg" variant="ghost" icon={false} type="button" onClick={() => scrollToId("services")}>
                Start your brand
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Bottom row: stats + scroll indicator */}
        <div className="mt-20 flex flex-wrap items-end justify-between gap-12 md:mt-28">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={1 + i * 0.08} y={16}>
                <div>
                  <div className="font-display text-3xl tracking-tight md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-eyebrow uppercase text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1.2} y={16}>
            <div className="flex items-center gap-3 text-eyebrow uppercase text-muted-foreground">
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </motion.span>
              <span>Scroll to explore</span>
            </div>
          </Reveal>
        </div>
      </motion.div>

      {/* Floating showcase stack (desktop only) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute right-[6vw] top-[18vh] flex flex-col gap-6">
          {FLOATING_WORK.map((card, i) => {
            const Mockup = card.Mockup;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  className="relative h-40 w-64 overflow-hidden rounded-[20px] border border-border bg-surface-elevated/60 shadow-card"
                >
                  <div className="absolute inset-0 opacity-90">
                    <Mockup className="h-full w-full" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-4">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {card.industry}
                    </div>
                    <div className="font-display text-lg tracking-tight">{card.title}</div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {card.metric}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Industries marquee at very bottom */}
      <Reveal delay={1.3} y={20} className="mt-16 md:mt-24">
        <div className="border-y border-border bg-surface/30 py-5 md:py-6">
          <Marquee speed={45}>
            {INDUSTRIES.map((industry, i) => (
              <div
                key={`${industry}-${i}`}
                className={cn(
                  "flex shrink-0 items-center gap-10 px-10 font-display text-2xl tracking-tight md:text-3xl",
                  i % 3 === 1 && "text-accent",
                  i % 3 === 2 && "text-muted-foreground italic font-serif",
                )}
              >
                <span>{industry}</span>
                <span className="text-muted-foreground/40">✦</span>
              </div>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}
