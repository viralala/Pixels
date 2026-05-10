import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Design system tokens — driven by CSS variables in globals.css
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          elevated: "rgb(var(--surface-elevated) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
          glow: "rgb(var(--accent-glow) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Editorial scale
        "display-2xl": ["clamp(4rem, 12vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.04em", fontWeight: "500" }],
        "display-xl": ["clamp(3.25rem, 9vw, 8rem)", { lineHeight: "0.94", letterSpacing: "-0.035em", fontWeight: "500" }],
        "display-lg": ["clamp(2.5rem, 6.5vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em", fontWeight: "500" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.025em", fontWeight: "500" }],
        eyebrow: ["0.7rem", { lineHeight: "1", letterSpacing: "0.18em", fontWeight: "500" }],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.04em",
        wider: "0.12em",
        widest: "0.2em",
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "28px",
        "2xl": "36px",
      },
      boxShadow: {
        "glow-sm": "0 0 24px -10px rgb(var(--accent) / 0.35)",
        "glow-md": "0 0 60px -22px rgb(var(--accent) / 0.4)",
        "glow-lg": "0 0 120px -40px rgb(var(--accent) / 0.45)",
        "card": "0 1px 0 rgb(255 255 255 / 0.6) inset, 0 18px 40px -24px rgb(15 23 42 / 0.25)",
        "card-hover": "0 1px 0 rgb(255 255 255 / 0.8) inset, 0 32px 70px -28px rgb(15 23 42 / 0.28)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-cinema": "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-cinema": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
