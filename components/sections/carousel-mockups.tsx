/**
 * Per-industry "fake website" mockups used inside the showcase carousel.
 * Each one is a small composition that hints at the industry's visual language.
 * Pure CSS/SVG — no images required.
 */

import { cn } from "@/lib/utils";

interface MockupProps {
  className?: string;
}

/* Cafe — warm amber, soft serif */
export function CafeMockup({ className }: MockupProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}
      style={{
        background:
          "linear-gradient(135deg, #2A1810 0%, #3F2418 40%, #6B3D1F 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{ background: "radial-gradient(circle at 30% 40%, #FFA552 0%, transparent 60%)" }}
      />
      <div className="relative flex h-full flex-col p-5 text-amber-50">
        <div className="mb-auto flex items-center justify-between">
          <span className="font-serif italic text-sm">Brewhouse</span>
          <span className="text-[9px] tracking-widest uppercase opacity-70">Est. ’21</span>
        </div>
        <div className="space-y-2">
          <div className="font-serif text-3xl leading-none tracking-tight">
            Slow<br />
            <span className="italic text-amber-300/90">brewed</span>
          </div>
          <div className="text-[10px] leading-relaxed opacity-60 max-w-[18ch]">
            Specialty coffee, sourdough, and quiet mornings.
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-7 w-7 rounded-full border border-amber-200/40" />
          <div className="h-1 flex-1 bg-amber-200/20" />
          <div className="text-[9px] uppercase tracking-widest">Menu</div>
        </div>
      </div>
    </div>
  );
}

/* Gym — bold red, brutal type */
export function GymMockup({ className }: MockupProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}
      style={{
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #1a0606 40%, #5a1010 100%)",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-2/3 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 49%, rgba(255,80,80,0.15) 50%, transparent 51%)",
          backgroundSize: "8px 100%",
        }}
      />
      <div className="relative flex h-full flex-col p-5 text-red-50">
        <div className="mb-auto flex items-center justify-between text-[10px] uppercase tracking-widest">
          <span>Iron / 24h</span>
          <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-red-300">Open</span>
        </div>
        <div className="font-display font-bold text-[2.4rem] leading-[0.9] tracking-tighter uppercase">
          No Days<br />Off.
        </div>
        <div className="mt-3 flex items-end justify-between">
          <div className="space-y-1 text-[9px] uppercase tracking-widest opacity-70">
            <div>Strength</div>
            <div>HIIT</div>
            <div>Recovery</div>
          </div>
          <div className="h-12 w-12 rounded-full border-2 border-red-400 grid place-items-center">
            <div className="h-1 w-6 bg-red-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Fashion — editorial b/w */
export function FashionMockup({ className }: MockupProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-stone-100 text-stone-900", className)}>
      <div className="relative flex h-full flex-col p-5">
        <div className="mb-auto flex items-baseline justify-between">
          <span className="font-display tracking-[0.3em] text-[10px] uppercase">Maison Vert</span>
          <span className="text-[10px]">N°04</span>
        </div>
        <div className="absolute inset-0 top-1/3 grid grid-cols-2">
          <div className="bg-stone-900" />
          <div className="bg-stone-300" />
        </div>
        <div className="relative -mx-5 -mb-5 mt-auto h-1/2 grid grid-cols-2">
          <div className="flex flex-col justify-end p-5 text-stone-100">
            <div className="font-display text-2xl leading-none">FW/26</div>
            <div className="text-[9px] uppercase tracking-widest opacity-70 mt-1">Collection</div>
          </div>
          <div className="flex flex-col justify-end p-5">
            <div className="font-display text-2xl leading-none italic">Forme</div>
            <div className="text-[9px] uppercase tracking-widest opacity-70 mt-1">Lookbook</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* AI Startup — gradient mesh, monospace */
export function AIMockup({ className }: MockupProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}
      style={{
        background:
          "radial-gradient(ellipse at 30% 30%, #1a1a3a 0%, #0a0a18 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-60"
        style={{
          background:
            "conic-gradient(from 200deg at 70% 70%, #6b46ff, #00d2ff, #d4ff4a, #6b46ff)",
          filter: "blur(40px)",
        }}
      />
      <div className="relative flex h-full flex-col p-5 text-white">
        <div className="mb-auto flex items-center gap-2 font-mono text-[10px]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>nova.ai/v2</span>
        </div>
        <div className="space-y-2">
          <div className="font-display text-3xl leading-none tracking-tight">
            Reasoning,<br />redefined.
          </div>
          <div className="font-mono text-[9px] opacity-60 max-w-[24ch]">
            $ npm i @nova/agents
          </div>
        </div>
        <div className="mt-3 flex gap-1.5">
          {["Agents", "Eval", "RAG"].map((t) => (
            <div key={t} className="rounded-full border border-white/20 px-2 py-0.5 text-[9px] font-mono">{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Real Estate — soft beige, architecture lines */
export function RealEstateMockup({ className }: MockupProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#E8E2D5] text-stone-800", className)}>
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 200 240">
        <g stroke="currentColor" strokeWidth="0.5" fill="none">
          <rect x="40" y="80" width="120" height="120" />
          <rect x="60" y="100" width="30" height="40" />
          <rect x="110" y="100" width="30" height="40" />
          <rect x="60" y="150" width="30" height="40" />
          <rect x="110" y="150" width="30" height="40" />
          <path d="M 40 80 L 100 30 L 160 80" />
        </g>
      </svg>
      <div className="relative flex h-full flex-col p-5">
        <div className="mb-auto flex items-baseline justify-between">
          <span className="font-display text-sm tracking-tight">Ardent &amp; Co.</span>
          <span className="text-[9px] uppercase tracking-widest">25 Listings</span>
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-widest opacity-60">Featured</div>
          <div className="font-display text-2xl leading-tight tracking-tight">
            The Hillcrest<br />Residence
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px]">
            <span>4 BR · 3 BA</span>
            <span className="font-mono">$2.4M</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Luxury — deep black gold */
export function LuxuryMockup({ className }: MockupProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-black text-amber-50", className)}>
      <div className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.25) 0%, transparent 60%)",
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-between p-5 text-center">
        <div className="text-[9px] uppercase tracking-[0.4em] text-amber-200/70">Maison</div>
        <div>
          <div className="mx-auto mb-3 h-px w-12 bg-amber-300/60" />
          <div className="font-serif text-3xl tracking-tight">Aurélien</div>
          <div className="font-serif italic text-sm text-amber-200/70 mt-1">depuis 1948</div>
          <div className="mx-auto mt-3 h-px w-12 bg-amber-300/60" />
        </div>
        <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest">
          <span>Atelier</span><span>·</span><span>Boutique</span>
        </div>
      </div>
    </div>
  );
}

/* SaaS — clean dashboard */
export function SaaSMockup({ className }: MockupProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-white text-slate-900", className)}>
      <div className="flex h-full">
        <div className="w-12 border-r border-slate-200 bg-slate-50/60 flex flex-col items-center gap-3 py-4">
          <div className="h-5 w-5 rounded-md bg-slate-900" />
          <div className="h-1.5 w-6 rounded-full bg-slate-300" />
          <div className="h-1.5 w-6 rounded-full bg-slate-300" />
          <div className="h-1.5 w-6 rounded-full bg-[#d4ff4a]" />
        </div>
        <div className="flex-1 p-3">
          <div className="text-[9px] uppercase tracking-widest text-slate-500">Overview</div>
          <div className="mt-1 font-display text-base">$48,210 <span className="text-emerald-500 text-[10px]">+12%</span></div>
          <div className="mt-3 grid grid-cols-7 items-end gap-1 h-14">
            {[40, 60, 35, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="rounded-sm bg-slate-200" style={{ height: `${h}%` }}>
                {i === 5 && <div className="h-full bg-[#d4ff4a]" />}
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <div className="rounded bg-slate-50 p-2">
              <div className="text-[8px] uppercase tracking-wider text-slate-500">Users</div>
              <div className="text-xs font-mono">12,490</div>
            </div>
            <div className="rounded bg-slate-50 p-2">
              <div className="text-[8px] uppercase tracking-wider text-slate-500">Active</div>
              <div className="text-xs font-mono">8.2k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Creative Portfolio — vibrant asymmetric */
export function PortfolioMockup({ className }: MockupProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#0a0a0a] text-white", className)}>
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-1/2 w-2/3 bg-[#d4ff4a]" />
        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-violet-600" />
      </div>
      <div className="relative flex h-full flex-col p-5">
        <div className="mb-auto flex items-baseline justify-between">
          <span className="font-display text-sm">⚹ Marin</span>
          <span className="text-[9px] uppercase tracking-widest mix-blend-difference">'26</span>
        </div>
        <div>
          <div className="font-display text-3xl leading-[0.9] tracking-tighter">
            <span>Designer</span><br />
            <span className="italic font-serif text-violet-200">director</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1">
            {[1, 2, 3].map((n) => (
              <div key={n} className="aspect-square rounded bg-white/10 backdrop-blur-sm" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Restaurant — warm wine, menu */
export function RestaurantMockup({ className }: MockupProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}
      style={{
        background:
          "linear-gradient(160deg, #2a0a14 0%, #4a0e1f 70%, #1a0408 100%)",
      }}
    >
      <div className="relative flex h-full flex-col p-5 text-rose-50">
        <div className="mb-auto text-center">
          <div className="font-serif italic text-2xl">L’Étoile</div>
          <div className="mx-auto mt-1 h-px w-8 bg-rose-200/50" />
          <div className="mt-1 text-[9px] uppercase tracking-[0.3em]">Tasting Room</div>
        </div>
        <div className="space-y-2 text-[10px]">
          <div className="flex justify-between border-b border-rose-200/15 pb-1">
            <span className="font-serif italic">Hamachi crudo</span>
            <span className="font-mono">26</span>
          </div>
          <div className="flex justify-between border-b border-rose-200/15 pb-1">
            <span className="font-serif italic">Truffle agnolotti</span>
            <span className="font-mono">38</span>
          </div>
          <div className="flex justify-between border-b border-rose-200/15 pb-1">
            <span className="font-serif italic">Wagyu ribeye</span>
            <span className="font-mono">82</span>
          </div>
        </div>
        <div className="mt-3 text-center text-[9px] uppercase tracking-widest opacity-70">Reserve</div>
      </div>
    </div>
  );
}

/* Fitness — energetic teal */
export function FitnessMockup({ className }: MockupProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}
      style={{
        background:
          "linear-gradient(180deg, #001a1f 0%, #003848 60%, #00b4ce 130%)",
      }}
    >
      <div className="relative flex h-full flex-col p-5 text-cyan-50">
        <div className="mb-auto flex items-center justify-between">
          <span className="font-display tracking-tight text-sm">Pulse</span>
          <span className="rounded-full bg-cyan-400/20 px-2 py-0.5 text-[9px] uppercase tracking-widest text-cyan-200">Live</span>
        </div>
        <div>
          <div className="font-display text-[2.6rem] leading-[0.9] tracking-tighter">
            BPM<br />
            <span className="text-cyan-300">142</span>
          </div>
          <svg className="mt-2 w-full h-8" viewBox="0 0 200 32">
            <path d="M 0 16 L 30 16 L 40 8 L 50 24 L 60 4 L 70 28 L 80 16 L 200 16"
              stroke="rgb(110, 231, 249)" strokeWidth="1.2" fill="none" />
          </svg>
          <div className="mt-2 flex justify-between text-[9px] uppercase tracking-widest opacity-70">
            <span>Zone 4</span>
            <span>32:14</span>
            <span>418 cal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Tech / Startup — neutral premium */
export function StartupMockup({ className }: MockupProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#0a0a0a] text-white", className)}>
      <div className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 100%, rgba(212, 255, 74, 0.4), transparent 60%)",
        }}
      />
      <div className="relative flex h-full flex-col p-5">
        <div className="mb-auto flex items-baseline justify-between">
          <span className="font-display text-sm tracking-tight">Vector ◆</span>
          <span className="text-[9px] font-mono opacity-60">v1.2.0</span>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Series A · 2026</div>
          <div className="font-display text-3xl leading-[0.95] tracking-tight">
            Build<br />
            faster than<br />
            <span className="text-[#d4ff4a]">competition.</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex -space-x-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i}
                className="h-5 w-5 rounded-full border border-black"
                style={{ background: `hsl(${i * 60 + 60}, 70%, 60%)` }}
              />
            ))}
          </div>
          <div className="text-[9px] uppercase tracking-widest">+12.4k</div>
        </div>
      </div>
    </div>
  );
}
