import { FileText, Github, Globe } from "lucide-react";
import Image from "next/image";
import CTA from "./Button";
import { TechBadges } from "./TechBadges";

// Mapping des icônes
const iconMap = {
  Globe: Globe,
  FileText: FileText,
  Github: Github,
};

export type ProjectDetailsProps = {
  client: string;
  title: string;
  description: string;
  technologies: string[];
  cta: {
    [key: string]: {
      text: string;
      href: string;
      external: boolean;
      icon: string;
    };
  };
  images: { src: string; alt: string }[];
  isexpended: boolean;
};

export const ProjectDetails = (props: ProjectDetailsProps) => {
  return (
    <div className="overflow-hidden ">
      <p className="text-sm text-muted pt-8">{props.client}</p>
      <h3 className="text-2xl text-title pb-6">{props.title}</h3>
      <p className="w-sm">{props.description}</p>
      <TechBadges technologies={props.technologies} />
      <CTA
        buttons={props.cta}
        iconMap={iconMap}
        gap="sm"
        className="text-sm pt-2"
      />
      <div className="flex bg-surface rounded-md gap-2 p-4 mt-8 mb-16">
        {props.images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] w-full max-w-sm rounded-md overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
