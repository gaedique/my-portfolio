import { About } from "@/components/sections/About";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Lab } from "@/components/sections/Lab";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Hero />
      <FeaturedProjects />
      <Lab />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
