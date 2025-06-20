import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Lab } from "@/components/sections/Lab";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <Hero />
      <FeaturedProjects />
      <Lab />
    </div>
  );
}
