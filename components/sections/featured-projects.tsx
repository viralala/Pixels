"use client";

import type { ComponentType } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  AIMockup,
  FashionMockup,
  LuxuryMockup,
  SaaSMockup,
  StartupMockup,
} from "./carousel-mockups";

interface Project {
  title: string;
  description: string;
  label: string;
  Mockup: ComponentType<{ className?: string }>;
}

const PROJECTS: Project[] = [
  {
    title: "Nova",
    description:
      "A reasoning platform with live agent UI and an editorial documentation experience.",
    label: "Product Design",
    Mockup: AIMockup,
  },
  {
    title: "Aurélien",
    description: "A heritage maison with a calm, slow digital flagship and boutique story.",
    label: "Branding",
    Mockup: LuxuryMockup,
  },
  {
    title: "LinearFlow",
    description: "B2B analytics dashboard rebuilt for clarity, trust, and faster onboarding.",
    label: "UI & UX",
    Mockup: SaaSMockup,
  },
  {
    title: "Maison Vert",
    description: "Editorial lookbook and commerce for a fashion house launching FW26.",
    label: "Visual Design",
    Mockup: FashionMockup,
  },
  {
    title: "Vector",
    description: "Series A launch site for a developer platform expanding into enterprise.",
    label: "Web Design",
    Mockup: StartupMockup,
  },
];

export function FeaturedProjects() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionHeading
              eyebrow="Design in action"
              index="03 —"
              title="Sneak peek of our work."
              description="Crafting functional, refined products with founders who move fast."
              className="md:max-w-2xl"
            />
          </div>
          <Reveal y={16} className="md:col-span-5">
            <p className="text-base text-muted-foreground sm:text-lg">
              A living gallery of launch sites, product experiences, and brands built for ambitious startups.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 divide-y divide-border">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} y={18} delay={i * 0.05}>
              <a
                href="#work"
                className="group grid gap-6 py-6 transition-colors duration-500 ease-out-cinema hover:bg-surface/70 md:grid-cols-[220px_1fr_auto] md:items-center md:rounded-[22px] md:px-5"
              >
                <div className="relative h-36 w-full overflow-hidden rounded-[18px] border border-border bg-surface">
                  <project.Mockup className="h-full w-full" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {project.label}
                  </div>
                  <h3 className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-sm text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-foreground/70">
                  <span>View</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-cinema group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal y={16} delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="md" type="button" icon={false}>
              Load more
            </Button>
            <span className="text-sm text-muted-foreground">
              120+ launches across 12 industries.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
