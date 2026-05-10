"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Mail, Globe, Linkedin, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealText, Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "hello@pixels.studio",
    href: "mailto:hello@pixels.studio",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/pixels",
    href: "https://linkedin.com",
    Icon: Linkedin,
  },
  {
    label: "Website",
    value: "pixels.studio",
    href: "https://pixels.studio",
    Icon: Globe,
  },
  {
    label: "Are.na",
    value: "are.na/pixels",
    href: "https://are.na",
    Icon: Link2,
  },
];

export function CTA() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  const handleBook = () => {
    window.location.href = "mailto:hello@pixels.studio?subject=Project%20Inquiry";
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative isolate overflow-hidden py-32 md:py-44"
    >
      {/* Massive accent orb */}
      <motion.div
        aria-hidden
        style={{ y: orbY, scale: orbScale }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[140px] md:h-[80vw] md:w-[80vw]"
      />

      <div className="container">
        <div className="relative flex flex-col items-center text-center">
          <Reveal y={20}>
            <div className="num-badge">Take the next step</div>
          </Reveal>

          <h2 className="mt-10 font-display text-display-xl">
            <RevealText
              as="span"
              text="Let's build"
              className="block"
              stagger={0.05}
            />
            <span className="block">
              <RevealText
                as="span"
                text="something"
                className="inline"
                stagger={0.05}
                delay={0.15}
              />{" "}
              <span className="inline-block overflow-hidden align-bottom pb-[0.05em]">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block font-serif italic text-accent"
                >
                  incredible.
                </motion.span>
              </span>
            </span>
          </h2>

          <Reveal delay={0.6} y={20}>
            <p className="mt-10 max-w-[44ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              We have two slots opening this quarter. If your launch deserves more than a
              template, we'd love to hear about it.
            </p>
          </Reveal>

          <Reveal delay={0.8} y={20}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" variant="primary" type="button" onClick={handleBook}>
                Book a 30-min call
              </Button>
              <Magnetic strength={0.25}>
                <a
                  href="mailto:hello@pixels.studio"
                  className="group inline-flex h-14 items-center gap-3 rounded-full border border-border bg-surface-elevated px-7 text-[15px] tracking-tight transition-all duration-500 ease-out-cinema hover:border-foreground/40 hover:bg-surface"
                >
                  <Mail className="h-4 w-4" />
                  hello@pixels.studio
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-cinema group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.95} y={20}>
            <div className="mt-10 grid w-full gap-4 md:grid-cols-2">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between rounded-[18px] border border-border bg-surface px-5 py-4 text-left transition-all duration-500 ease-out-cinema hover:border-foreground/40 hover:bg-surface-elevated"
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {link.label}
                    </div>
                    <div className="mt-1 text-base font-display tracking-tight">
                      {link.value}
                    </div>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground transition-all duration-500 ease-out-cinema group-hover:border-foreground/40">
                    <link.Icon className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Decorative bottom row */}
          <Reveal delay={1} y={20} className="mt-24 w-full">
            <div className="grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4 md:gap-12">
              <Cell label="Response within" value="24 hrs" />
              <Cell label="Discovery call" value="Free" />
              <Cell label="Engagement starts" value="2-week ramp" />
              <Cell label="Based in" value="Worldwide" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-left">
      <div className="text-eyebrow uppercase text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-2xl tracking-tight md:text-3xl">{value}</div>
    </div>
  );
}
