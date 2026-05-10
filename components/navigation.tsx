"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./ui/magnetic";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-700 ease-out-cinema",
          scrolled
            ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="#" className="group flex items-center gap-2.5">
            <LogoMark />
            <span className="font-display text-lg tracking-tight">
              Pixels<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  className="link-underline text-sm tracking-tight text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Magnetic strength={0.25}>
              <Link
                href="#contact"
                className="group relative inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface-elevated/60 pl-4 pr-2 text-sm transition-colors hover:border-foreground/40"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-pulse-glow rounded-full bg-accent" />
                  <span className="relative h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-foreground/90">Book a call</span>
                <span className="ml-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground transition-colors">
                  Free
                </span>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-surface-elevated/40 md:hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <X className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col bg-background pt-24"
            >
              <nav className="container flex flex-1 flex-col gap-2 py-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.15 + i * 0.06,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-border"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-5 text-3xl font-display tracking-tight"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="container py-8">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex h-14 items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground"
                >
                  Book a call →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7 text-foreground transition-transform duration-700 ease-out-cinema group-hover:rotate-90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="11" height="11" rx="2" fill="currentColor" />
      <rect x="18" y="3" width="11" height="11" rx="2" className="fill-accent" />
      <rect x="3" y="18" width="11" height="11" rx="2" className="fill-accent" />
      <rect x="18" y="18" width="11" height="11" rx="2" fill="currentColor" />
    </svg>
  );
}
