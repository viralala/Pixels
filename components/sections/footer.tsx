"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

const NAV = {
  Studio: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#studio" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Journal", href: "#" },
    { label: "Awards", href: "#" },
    { label: "Press kit", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Connect: [
    { label: "X / Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Read.cv", href: "#" },
  ],
};

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/London",
      });
      setTime(formatted);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background pt-24">
      {/* Massive Pixels mark */}
      <Reveal y={40} className="container">
        <div className="relative">
          <h2
            className={cn(
              "font-display tracking-[-0.045em] leading-[0.85]",
              "text-[clamp(5rem,22vw,22rem)]",
            )}
          >
            <span>Pixels</span>
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-accent inline-block"
            >
              .
            </motion.span>
          </h2>

          {/* Subtle decorative line */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-border" />
        </div>
      </Reveal>

      {/* Main grid */}
      <div className="container mt-24 grid gap-12 pb-16 md:grid-cols-12">
        {/* Brand block */}
        <div className="md:col-span-4">
          <Reveal y={20}>
            <p className="max-w-[36ch] font-display text-xl tracking-tight md:text-2xl">
              The independent studio for founders who think the details are the work.
            </p>
            <div className="mt-8 flex items-center gap-3 text-eyebrow uppercase">
              <span className="num-badge">Available · 2 slots Q3</span>
            </div>
            <Magnetic strength={0.2}>
              <a
                href="mailto:hello@pixels.studio"
                className="link-underline mt-6 inline-block font-display text-2xl tracking-tight text-foreground"
              >
                hello@pixels.studio
              </a>
            </Magnetic>
          </Reveal>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-3 gap-8 md:col-span-8 md:grid-cols-3">
          {Object.entries(NAV).map(([section, items], idx) => (
            <Reveal key={section} y={20} delay={0.05 * idx}>
              <div>
                <h4 className="text-eyebrow uppercase text-muted-foreground">
                  {section}
                </h4>
                <ul className="mt-6 space-y-3.5">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="link-underline text-base tracking-tight text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-border">
        <div className="container flex flex-col items-start gap-6 py-7 text-eyebrow uppercase text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© Pixels Studio · MMXXVI</span>
            <span className="hidden md:inline-block">·</span>
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Cookies</Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-pulse-glow rounded-full bg-accent" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              All systems normal
            </span>
            <span>London — {time || "—"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
