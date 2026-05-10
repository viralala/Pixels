"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    n: "I",
    title: "Slow down to ship faster",
    body:
      "We pre-empt the wrong work with sharp briefs and one-page strategy docs. Most weeks, we delete more than we draw.",
  },
  {
    n: "II",
    title: "Engineers and designers, not handoffs",
    body:
      "Every studio member writes code and pushes pixels. Designs survive contact with reality because reality co-authored them.",
  },
  {
    n: "III",
    title: "Motion with reason",
    body:
      "If a transition doesn't tell a story, it's removed. Cinematic doesn't mean chaotic — it means deliberate.",
  },
  {
    n: "IV",
    title: "Quiet luxury, loud results",
    body:
      "Restraint is a competitive advantage. We keep the surface calm and the system rigorous.",
  },
];

const STUDIO_SNAPS = [
  {
    title: "A cat person",
    note: "Studio mascot, always on the desk during reviews.",
  },
  {
    title: "Enjoy hiking",
    note: "We do strategy walks before every new build.",
  },
  {
    title: "Hi, it is us",
    note: "Small team, global time zones, zero fluff.",
  },
];

export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id="studio"
      ref={ref}
      className="relative overflow-hidden py-32 md:py-44"
    >
      <div className="container">
        {/* Big editorial statement */}
        <div className="mb-24 grid gap-10 md:grid-cols-12">
          <Reveal y={20} className="md:col-span-3">
            <div className="flex items-center gap-3 text-eyebrow uppercase">
              <span className="font-mono text-muted-foreground">08 —</span>
              <span className="num-badge">The Studio</span>
            </div>
          </Reveal>
          <div className="md:col-span-9">
            <RevealText
              as="h2"
              text="A small, sharp studio designing the digital surfaces of brands worth talking about."
              className="font-display text-display-md max-w-[26ch] md:text-display-lg"
              stagger={0.025}
            />
          </div>
        </div>

        {/* Two-column: image-block + body */}
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <motion.div
              style={{ y: y1 }}
              className="relative h-[420px] overflow-hidden rounded-[24px] border border-border md:h-[560px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated to-surface" />
              <div className="absolute inset-0 bg-dotgrid opacity-40" />

              {/* Decorative editorial composition */}
              <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
                <div className="flex items-baseline justify-between text-eyebrow uppercase text-muted-foreground">
                  <span>Pixels Studio</span>
                  <span>Est. MMXXI</span>
                </div>

                {/* Centerpiece */}
                <div className="text-center">
                  <div className="font-serif text-6xl italic md:text-7xl">P</div>
                  <div className="mx-auto mt-4 h-px w-16 bg-accent" />
                  <div className="mt-4 font-display text-2xl tracking-tight md:text-3xl">
                    Design × Engineering
                  </div>
                  <div className="mt-2 text-eyebrow uppercase text-muted-foreground">
                    A Two-Headed Studio
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-eyebrow uppercase text-muted-foreground">
                  <div>
                    <div className="text-foreground text-sm tracking-tight font-display">07</div>
                    <div>Studio members</div>
                  </div>
                  <div>
                    <div className="text-foreground text-sm tracking-tight font-display">12</div>
                    <div>Time zones</div>
                  </div>
                  <div>
                    <div className="text-foreground text-sm tracking-tight font-display">∞</div>
                    <div>Cups of coffee</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div style={{ y: y2 }} className="md:col-span-7">
            <Reveal y={20}>
              <p className="font-display text-2xl leading-snug tracking-tight text-foreground md:text-3xl">
                We started Pixels in 2021 because the work we wanted to make didn't exist
                inside the agencies we'd worked at. <span className="text-muted-foreground">Too many handoffs, too much motion-for-motion's-sake, not enough substance.</span>
              </p>
            </Reveal>

            <Reveal y={20} delay={0.1}>
              <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg">
                Today we're a seven-person studio working with a tight roster of founders
                across AI, fashion, hospitality, and SaaS. We take on two projects at a time.
                We work directly — no account managers, no PowerPoint decks. The same people
                who pitch you the work are the ones designing and shipping it.
              </p>
            </Reveal>

            <Reveal y={16} delay={0.12}>
              <div className="mt-10 text-eyebrow uppercase text-muted-foreground">Behind the canvas</div>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {STUDIO_SNAPS.map((snap, i) => (
                <Reveal key={snap.title} y={16} delay={0.08 + i * 0.05}>
                  <div className="rounded-[20px] border border-border bg-surface p-4">
                    <div className="aspect-[4/3] rounded-[14px] bg-surface-elevated">
                      <div className="h-full w-full bg-dotgrid opacity-40" />
                    </div>
                    <div className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">
                      {snap.title}
                    </div>
                    <div className="mt-2 text-sm text-foreground/80">
                      {snap.note}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <ol className="mt-14 space-y-8">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.n} y={20} delay={0.05 * i}>
                  <li className="grid grid-cols-[auto_1fr] gap-6 border-t border-border pt-6">
                    <span className="font-serif italic text-2xl text-accent md:text-3xl">
                      {p.n}.
                    </span>
                    <div>
                      <h3 className="font-display text-xl tracking-tight md:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted-foreground md:text-base">
                        {p.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
