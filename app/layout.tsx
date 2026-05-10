import type { Metadata, Viewport } from "next";
import { DM_Sans, Libre_Baskerville, Fragment_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const display = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const serif = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = Fragment_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixels.studio"),
  title: {
    default: "Pixels — Independent Studio for Premium Animated Websites",
    template: "%s · Pixels Studio",
  },
  description:
    "Pixels is a small, sharp studio designing and engineering premium animated websites and digital products for ambitious startups and brands.",
  keywords: [
    "creative agency",
    "design studio",
    "premium websites",
    "animated websites",
    "Next.js agency",
    "Framer Motion",
    "GSAP",
    "branding",
  ],
  openGraph: {
    title: "Pixels — Independent Studio for Premium Animated Websites",
    description:
      "Premium animated websites and digital products for ambitious brands.",
    type: "website",
    siteName: "Pixels Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixels — Independent Studio for Premium Animated Websites",
    description:
      "Premium animated websites and digital products for ambitious brands.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f3",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="grain antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
