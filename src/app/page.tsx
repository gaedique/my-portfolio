import { About } from "@/components/sections/About";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Lab } from "@/components/sections/Lab";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Hero />
      <FeaturedProjects />
      <Lab />
      <About />
    </div>
  );
}
