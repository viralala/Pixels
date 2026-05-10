"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const FAQS = [
  {
    question: "What is your typical design process?",
    answer:
      "We start with a focused discovery sprint, lock the narrative, then design and build in parallel. Weekly checkpoints keep everything moving.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Most launches ship in 6 to 8 weeks depending on scope, content readiness, and the number of pages.",
  },
  {
    question: "Do you handle development as well?",
    answer:
      "Yes. We design and engineer every build in-house, so there are no handoffs or translation loss.",
  },
  {
    question: "Can you help with pitch decks or brand assets?",
    answer:
      "We do. Most clients ask for a full launch kit: deck, brand system, and a flagship website.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send a short brief and we will respond within 24 hours with next steps and availability.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-28 md:py-36">
      <div className="container grid gap-12 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <SectionHeading
            eyebrow="FAQs"
            index="07 —"
            title="Got questions? We have answers."
            description="Quick notes on how we work, timelines, and what to expect."
          />
        </div>
        <div className="md:col-span-7">
          <div className="divide-y divide-border rounded-[22px] border border-border bg-surface">
            {FAQS.map((item, index) => (
              <Reveal key={item.question} y={16} delay={index * 0.04}>
                <details className="group px-5 py-5 md:px-6">
                  <summary className="list-none flex cursor-pointer items-center justify-between gap-6 text-base font-medium tracking-tight">
                    <span>{item.question}</span>
                    <span className="text-xl text-muted-foreground">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground md:text-base">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
