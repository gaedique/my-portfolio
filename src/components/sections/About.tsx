import { about } from "@/data/about";
import { AboutCard } from "../ui/AboutCard";
import { ToolboxCard } from "../ui/ToolboxCard";

export const About = () => {
  return (
    <section className="flex flex-col py-section border-b border-border gap-12">
      <h2 className="text-3xl font-heading font-bold text-title font-bold">
        About me
      </h2>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <AboutCard {...about.intro} />
          <AboutCard {...about.funFact} />
        </div>
        <ToolboxCard {...about.toolbox} />
      </div>
    </section>
  );
};
