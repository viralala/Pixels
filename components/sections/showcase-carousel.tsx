"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import {
  CafeMockup,
  GymMockup,
  FashionMockup,
  AIMockup,
  RealEstateMockup,
  LuxuryMockup,
  SaaSMockup,
  PortfolioMockup,
  RestaurantMockup,
  FitnessMockup,
  StartupMockup,
} from "./carousel-mockups";

type ProjectKey =
  | "cafe" | "gym" | "fashion" | "ai" | "realestate"
  | "luxury" | "saas" | "portfolio" | "restaurant" | "fitness" | "startup";

interface Project {
  key: ProjectKey;
  index: string;
  industry: string;
  title: string;
  description: string;
  tags: string[];
  Mockup: React.ComponentType<{ className?: string }>;
}

const PROJECTS: Project[] = [
  { key: "cafe",       index: "01", industry: "Café",        title: "Brewhouse",   description: "Editorial coffee brand with a calm, slow-mornings feel.", tags: ["Brand", "Web", "Motion"], Mockup: CafeMockup },
  { key: "gym",        index: "02", industry: "Gym",         title: "Iron Club",    description: "Brutal type and red energy for a 24/7 strength gym.", tags: ["Brand", "Web"], Mockup: GymMockup },
  { key: "fashion",    index: "03", industry: "Fashion",     title: "Maison Vert", description: "Editorial b/w lookbook for a Parisian fashion house.", tags: ["Web", "Photo"], Mockup: FashionMockup },
  { key: "ai",         index: "04", industry: "AI Startup",  title: "Nova",        description: "Conic gradients and live agents UI for an AI platform.", tags: ["Product", "Web"], Mockup: AIMockup },
  { key: "realestate", index: "05", industry: "Real Estate", title: "Ardent & Co.", description: "Soft, residential brand with architectural typography.", tags: ["Brand", "Web"], Mockup: RealEstateMockup },
  { key: "luxury",     index: "06", industry: "Luxury",      title: "Aurélien",    description: "Heritage maison with serif type, gold, and quiet luxury.", tags: ["Brand", "Web"], Mockup: LuxuryMockup },
  { key: "saas",       index: "07", industry: "SaaS",        title: "Linear­Flow", description: "Dashboard product with a sharp data-first aesthetic.", tags: ["Product", "UI"], Mockup: SaaSMockup },
  { key: "portfolio",  index: "08", industry: "Portfolio",   title: "Marin",       description: "Bold, asymmetric portfolio for an art director.", tags: ["Portfolio", "Web"], Mockup: PortfolioMockup },
  { key: "restaurant", index: "09", industry: "Restaurant",  title: "L’Étoile",    description: "Wine-warm tasting menu with serif italics & reservations.", tags: ["Brand", "Web"], Mockup: RestaurantMockup },
  { key: "fitness",    index: "10", industry: "Fitness",     title: "Pulse",       description: "Live workouts, BPM tracking, motion-driven UI.", tags: ["Product", "App"], Mockup: FitnessMockup },
  { key: "startup",    index: "11", industry: "Tech Startup",title: "Vector",      description: "Series A landing with cinematic gradients & motion.", tags: ["Web", "Brand"], Mockup: StartupMockup },
];

export function ShowcaseCarousel() {
  return (
    <section
      id="work"
      className="theme-ink relative isolate overflow-hidden bg-background py-28 text-foreground md:py-36"
    >
      <div className="container mb-16 flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between md:mb-20">
        <SectionHeading
          eyebrow="Selected Work"
          index="02 —"
          title="Built for every kind of ambition."
          description={
            <>
              Drag, scroll, or wait. Each card is a real project we’ve shipped
              for a brand operating in that space.
            </>
          }
          className="md:max-w-2xl"
        />
        <Reveal delay={0.2} y={20}>
          <div className="flex items-center gap-3 text-eyebrow uppercase text-muted-foreground">
            <MoveHorizontal className="h-4 w-4" />
            <span>Drag to explore</span>
          </div>
        </Reveal>
      </div>

      <Carousel3D projects={PROJECTS} />
    </section>
  );
}

interface Carousel3DProps {
  projects: Project[];
}

function Carousel3D({ projects }: Carousel3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { margin: "-20% 0px -20% 0px" });
  const prefersReducedMotion = useReducedMotion();

  const count = projects.length;
  const angleStep = 360 / count;

  // Responsive radius — bigger card + bigger radius on desktop
  const [radius, setRadius] = useState(560);
  const [cardSize, setCardSize] = useState({ w: 320, h: 420 });

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardSize({ w: 220, h: 300 });
        setRadius(380);
      } else if (w < 1024) {
        setCardSize({ w: 280, h: 380 });
        setRadius(500);
      } else {
        setCardSize({ w: 340, h: 460 });
        setRadius(620);
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // Rotation state — manual + auto
  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, { stiffness: 80, damping: 22, mass: 0.5 });

  const [isHovering, setIsHovering] = useState(false);
  const isDraggingRef = useRef(false);
  const lastPointerXRef = useRef<number | null>(null);
  const lastPointerTimeRef = useRef<number | null>(null);
  const velocityRef = useRef(0);
  const inertiaRef = useRef<ReturnType<typeof animate> | null>(null);
  const pauseUntilRef = useRef(0);

  // Auto-rotation. Slows when hovering, pauses when not in view or when dragging.
  useEffect(() => {
    if (prefersReducedMotion) return;
    let frame: number;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;

      const paused = now < pauseUntilRef.current;
      if (inView && !isDraggingRef.current && !paused) {
        const targetSpeed = isHovering ? 0.004 : 0.012; // deg / ms
        rotation.set(rotation.get() + dt * targetSpeed);
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isHovering, inView, rotation, prefersReducedMotion]);

  // Pointer drag
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!isDraggingRef.current || lastPointerXRef.current === null) return;
      const now = performance.now();
      const lastTime = lastPointerTimeRef.current ?? now;
      const dx = e.clientX - lastPointerXRef.current;
      const dt = Math.max(16, now - lastTime);
      lastPointerXRef.current = e.clientX;
      lastPointerTimeRef.current = now;
      const delta = dx * 0.35;
      rotation.set(rotation.get() + delta);
      velocityRef.current = delta / dt;
    };
    const onUp = () => {
      if (isDraggingRef.current && Math.abs(velocityRef.current) > 0.02) {
        inertiaRef.current?.stop();
        inertiaRef.current = animate(rotation, rotation.get() + velocityRef.current * 220, {
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        });
        pauseUntilRef.current = performance.now() + 1100;
      }
      isDraggingRef.current = false;
      lastPointerXRef.current = null;
      lastPointerTimeRef.current = null;
      velocityRef.current = 0;
      document.body.style.cursor = "";
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [rotation]);

  const startDrag = (clientX: number) => {
    isDraggingRef.current = true;
    lastPointerXRef.current = clientX;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;
    inertiaRef.current?.stop();
    document.body.style.cursor = "grabbing";
  };

  const nudge = (direction: 1 | -1) => {
    pauseUntilRef.current = performance.now() + 800;
    animate(rotation, rotation.get() + direction * angleStep, {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    });
  };

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!inView) return;
      if (e.key === "ArrowRight") nudge(1);
      if (e.key === "ArrowLeft") nudge(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, angleStep]);

  // Snap to specific card with shortest-path animation
  const goTo = (i: number) => {
    pauseUntilRef.current = performance.now() + 900;
    const target = i * angleStep;
    const current = rotation.get();
    const wraps = Math.round((current - target) / 360);
    animate(rotation, target + wraps * 360, {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    });
  };

  // Index of card closest to camera (front-facing).
  // Card i appears at world angle (i * angleStep - r). Active when this ≡ 0 (mod 360),
  // i.e. when i * angleStep ≡ r (mod 360).
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsub = smoothRotation.on("change", (v) => {
      const normalized = ((v % 360) + 360) % 360;
      let closest = 0;
      let closestDelta = Infinity;
      for (let i = 0; i < count; i++) {
        const target = (i * angleStep) % 360;
        let delta = ((normalized - target) % 360 + 360) % 360;
        delta = Math.min(delta, 360 - delta);
        if (delta < closestDelta) {
          closestDelta = delta;
          closest = i;
        }
      }
      setActiveIndex(closest);
    });
    return () => unsub();
  }, [smoothRotation, angleStep, count]);

  const sceneTransform = useTransform(smoothRotation, (r) => `rotateY(${-r}deg)`);

  return (
    <div ref={containerRef} className="select-none">
      <div
        className="perspective-3d relative mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ height: cardSize.h + 80 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onPointerDown={(e) => {
          (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
          startDrag(e.clientX);
        }}
        role="region"
        aria-label="Project showcase carousel"
      >
        {/* Floor reflection / shadow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[60%] rounded-[100%] bg-accent/18 blur-3xl"
          style={{ width: radius * 2, height: 80 }}
        />

        <motion.div
          ref={sceneRef}
          className="preserve-3d relative gpu"
          style={{
            transform: sceneTransform,
            width: cardSize.w,
            height: cardSize.h,
          }}
        >
          {projects.map((project, i) => (
            <CarouselCard
              key={project.key}
              project={project}
              angle={i * angleStep}
              radius={radius}
              cardWidth={cardSize.w}
              cardHeight={cardSize.h}
              rotation={smoothRotation}
              isActive={activeIndex === i}
              floatSeed={i * 0.35}
              reducedMotion={!!prefersReducedMotion}
            />
          ))}
        </motion.div>

        {/* Edge gradients to fade peripheral cards into the void */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[8vw] bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[8vw] bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* Controls */}
      <div className="container mt-12 flex flex-col items-center gap-8 md:mt-16">
        <div className="flex items-center gap-3">
          <CarouselButton onClick={() => nudge(-1)} ariaLabel="Previous project">
            <ArrowLeft className="h-4 w-4" />
          </CarouselButton>

          <div className="flex items-center gap-1.5 px-2">
            {projects.map((p, i) => (
              <button
                key={p.key}
                onClick={() => goTo(i)}
                className={cn(
                  "relative h-1 rounded-full transition-all duration-500",
                  activeIndex === i ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60",
                )}
                aria-label={`Show ${p.title}`}
              />
            ))}
          </div>

          <CarouselButton onClick={() => nudge(1)} ariaLabel="Next project">
            <ArrowRight className="h-4 w-4" />
          </CarouselButton>
        </div>

        {/* Active project info */}
        <div className="relative mt-2 h-[88px] w-full max-w-2xl text-center">
          {projects.map((p, i) => (
            <motion.div
              key={p.key}
              initial={false}
              animate={{
                opacity: activeIndex === i ? 1 : 0,
                y: activeIndex === i ? 0 : 8,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <div className="flex items-center justify-center gap-3 text-eyebrow uppercase text-muted-foreground">
                <span className="font-mono">{p.index}</span>
                <span className="h-px w-6 bg-border" />
                <span>{p.industry}</span>
              </div>
              <div className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
                {p.title}
              </div>
              <div className="mt-1 text-sm text-muted-foreground max-w-[40ch] mx-auto">
                {p.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CarouselButton({
  children, onClick, ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/90 text-foreground/80 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.3)] transition-all duration-500 ease-out-cinema hover:border-foreground/40 hover:text-foreground hover:bg-surface"
    >
      {children}
    </button>
  );
}

interface CarouselCardProps {
  project: Project;
  angle: number;
  radius: number;
  cardWidth: number;
  cardHeight: number;
  rotation: ReturnType<typeof useSpring>;
  isActive: boolean;
  floatSeed: number;
  reducedMotion: boolean;
}

function CarouselCard({
  project, angle, radius, cardWidth, cardHeight, rotation, isActive,
  floatSeed, reducedMotion,
}: CarouselCardProps) {
  // Per-card brightness/opacity based on its facing angle relative to camera.
  // Card's effective world angle = angle - r. Closeness to camera = 0..180.
  const facing = useTransform(rotation, (r) => {
    const effective = (((angle - r) % 360) + 360) % 360;
    return Math.min(effective, 360 - effective);
  });
  const opacity = useTransform(facing, [0, 90, 180], [1, 0.55, 0.15]);
  const filter = useTransform(facing, (delta) => {
    const b = delta < 60 ? 0 : Math.min(6, (delta - 60) / 20);
    return `blur(${b}px) brightness(${1 - b * 0.05})`;
  });

  const Mockup = project.Mockup;
  const floatAnimation = reducedMotion ? undefined : { y: [0, -10, 0] };
  const floatTransition = reducedMotion
    ? undefined
    : { duration: 6 + floatSeed, repeat: Infinity, ease: "easeInOut", delay: floatSeed * 0.2 };

  return (
    <motion.div
      className="preserve-3d absolute left-0 top-0 origin-center"
      style={{
        width: cardWidth,
        height: cardHeight,
        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
        opacity,
        filter,
      }}
    >
      <motion.div
        className="h-full w-full"
        animate={floatAnimation}
        transition={floatTransition}
      >
        <motion.div
          whileHover={{ scale: 1.04, y: -8, rotateX: 6, rotateY: -6 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1200 }}
          className={cn(
            "group relative h-full w-full overflow-hidden rounded-[24px] border border-border surface-card",
            isActive && "ring-1 ring-accent/40 shadow-glow-md",
          )}
        >
          {/* Minimal chrome */}
          <div className="relative flex h-8 items-center justify-between border-b border-border/70 bg-surface-elevated/80 px-3 text-[9px] uppercase tracking-widest text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
              <span>{project.industry}</span>
            </div>
            <span className="font-mono">{project.index}</span>
          </div>

          {/* Mockup */}
          <div className="relative h-[calc(100%-1.75rem)]">
            <Mockup className="h-full w-full" />

            {/* Hover overlay */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/85 via-background/30 to-transparent p-4 opacity-0 transition-opacity duration-500 ease-out-cinema group-hover:opacity-100">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{project.industry}</div>
              <div className="font-display text-lg tracking-tight text-foreground">{project.title}</div>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border/70 bg-surface/70 px-2 py-0.5 text-[9px] uppercase tracking-widest text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Accent border glint */}
          <div className="pointer-events-none absolute inset-0 rounded-[24px]"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.04) 100%)",
              mixBlendMode: "overlay",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
