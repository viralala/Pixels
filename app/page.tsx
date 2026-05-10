import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { ShowcaseCarousel } from "@/components/sections/showcase-carousel";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ShowcaseCarousel />
      <FeaturedProjects />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
