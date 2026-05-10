# Pixels — Studio Site

Production-ready agency site built with Next.js 15, React 19, TypeScript,
Tailwind CSS, Framer Motion, GSAP, and Lenis.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Architecture

```
app/                       Next 15 App Router
├── layout.tsx             Fonts, metadata, smooth-scroll provider
├── page.tsx               Composition of all sections
└── globals.css            Design tokens, base styles, utilities

components/
├── navigation.tsx         Sticky nav with magnetic CTA + mobile drawer
├── providers/
│   └── smooth-scroll.tsx  Lenis wrapper
├── ui/
│   ├── button.tsx         Magnetic primary/secondary/ghost buttons
│   ├── magnetic.tsx       Pull-toward-cursor wrapper
│   ├── marquee.tsx        Pure-CSS infinite marquee
│   ├── reveal.tsx         Reveal-on-scroll + word-by-word headline reveal
│   └── section-heading.tsx
└── sections/
    ├── hero.tsx               Cinematic hero with parallax + industries marquee
    ├── showcase-carousel.tsx  3D rotating cylinder carousel (centerpiece)
    ├── carousel-mockups.tsx   Per-industry CSS/SVG mockups
    ├── featured-projects.tsx  Bento grid of case studies
    ├── services.tsx           Hover-revealing services list
    ├── process.tsx            Sticky-headline scroll-driven steps
    ├── testimonials.tsx       Staggered testimonial cards + logo marquee
    ├── about.tsx              Editorial studio statement
    ├── cta.tsx                Final call-to-action
    └── footer.tsx             Massive wordmark + nav + live clock

lib/
└── utils.ts               cn() + math helpers
```

## Design system

All design tokens live in [`app/globals.css`](app/globals.css) as CSS custom
properties and are exposed to Tailwind via [`tailwind.config.ts`](tailwind.config.ts).

| Token       | Value                | Use             |
| ----------- | -------------------- | --------------- |
| background  | rgb(8 8 9)           | Page bg         |
| foreground  | rgb(242 242 238)     | Primary text    |
| accent      | rgb(210 255 74) — lime | Highlights, CTA |
| surface     | rgb(14 14 16)        | Cards           |
| border      | rgb(32 32 36)        | Hairlines       |

Swap the accent at the `--accent` CSS variable in `globals.css` to re-skin the
entire site.

## Performance notes

- Lenis smooth scroll is GPU-accelerated and pause-respects reduced motion.
- The 3D carousel uses `transform-style: preserve-3d`, `will-change: transform`,
  and a single `requestAnimationFrame` loop.
- Per-card opacity/blur derives from `useTransform` so no React re-renders fire
  during rotation.
- All section reveal animations use `framer-motion`'s `useInView` with
  `once: true` to avoid replaying on scroll-back.
- Fonts are loaded via `next/font` with `display: swap`.

## License

Proprietary. © Pixels Studio.
