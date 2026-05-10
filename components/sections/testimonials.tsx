"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Pixels delivered a launch site that lifted our Series A round. The motion design alone got us trending on Twitter the day we shipped.",
    author: "Aria Mendel",
    role: "Co-founder & CEO",
    company: "Nova",
  },
  {
    quote:
      "I've worked with the best agencies on both coasts. Pixels is the only one that ships better than they pitch. Quietly the best in the business.",
    author: "Jordan Reyes",
    role: "Brand Director",
    company: "Maison Vert",
  },
  {
    quote:
      "We expected a website. They handed us a brand. Then they engineered it. Conversion rate doubled in three weeks.",
    author: "Sam Okafor",
    role: "Founder",
    company: "Vector",
  },
  {
    quote:
      "Working with Pixels feels less like hiring an agency and more like adding a senior design and engineering team for two months.",
    author: "Priya Devanand",
    role: "Head of Product",
    company: "LinearFlow",
  },
  {
    quote:
      "Every detail had been thought about twice. Even the easter eggs had easter eggs. Worth every dollar — and then some.",
    author: "Marco Tellini",
    role: "Creative Director",
    company: "Aurélien",
  },
  {
    quote:
      "Most agencies design for awards. Pixels designs for outcomes. Our pipeline grew $2.4M in the first quarter post-launch.",
    author: "Hannah Cole",
    role: "VP Marketing",
    company: "Brewhouse",
  },
];

const LOGOS = [
  "NOVA",
  "VERT",
  "AURELIEN",
  "VECTOR",
  "LINEARFLOW",
  "BREWHOUSE",
  "LETOILE",
  "PULSE",
  "ARDENT",
  "MARIN",
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="Kind words"
              index="06 —"
              title="Trusted by founders who care about the details."
              description="Quiet launches, loud results. Here's what our partners say after we ship."
            />
          </div>
          <div className="space-y-4 md:col-span-7">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} y={18} delay={i * 0.06}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-border pt-10 md:grid-cols-12 md:items-start">
          <Reveal y={16} className="md:col-span-4">
            <div className="text-eyebrow uppercase text-muted-foreground">Brands we've worked with</div>
            <p className="mt-3 text-sm text-muted-foreground">
              A small, focused roster across product, fashion, hospitality, and SaaS.
            </p>
          </Reveal>
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-2">
              {LOGOS.map((logo, i) => (
                <span
                  key={`${logo}-${i}`}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-[20px] border border-border bg-surface p-6 transition-shadow duration-500 ease-out-cinema hover:shadow-card">
      <blockquote className="font-display text-lg leading-tight tracking-tight md:text-xl">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-5 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{testimonial.author}</span>
        <span> · {testimonial.role}</span>
        <span> · {testimonial.company}</span>
      </figcaption>
    </figure>
  );
}
