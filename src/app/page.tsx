import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <Hero />
      <FeaturedProjects />
    </div>
  );
}
