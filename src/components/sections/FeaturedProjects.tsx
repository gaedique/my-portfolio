"use client";

import { featuredProjects } from "@/data/featuredProjects";
import { FileText, Github, Globe } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import CTA from "../ui/Button";

export const FeaturedProjects = () => {
  const { image, video, category, title, description, technologies, cta } =
    featuredProjects[0];

  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Vérification de la taille de l'écran pour ajuster le comportement
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice(); // Vérifier la taille initiale
    window.addEventListener("resize", checkDevice); // Écouter les changements de taille
    return () => {
      window.removeEventListener("resize", checkDevice); // Nettoyer l'écouteur d'événements
    };
  }, []);

  // Sur mobile: toujours afficher la vidéo
  // Sur desktop: afficher selon le hover
  const showVideo = isMobile || isHovered;

  // Mapping des icônes
  const iconMap = {
    Globe: Globe,
    FileText: FileText,
    Github: Github,
  };
  return (
    <section className="flex flex-col py-section border-b border-border gap-12">
      <h2 className="text-3xl text-title font-bold">Featured Projects</h2>
      <div className="flex gap-10">
        <a
          href={cta.secondary?.href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start bg-surface p-6 rounded-lg flex-1 relative overflow-hidden cursor-pointer"
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={408}
            height={264}
            className={`transition-opacity duration-300 ${
              showVideo ? "opacity-0" : "opacity-100"
            }`}
          />
          <video
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            width={408}
            height={264}
            className={`absolute top-0 left-0 object-cover rounded transition-opacity duration-300 ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>
        <div className="flex flex-col justify-start flex-1">
          <p className="text-sm text-muted">{category}</p>
          <h3 className="text-2xl text-title pb-6">{title}</h3>
          <p>{description}</p>
          <div className="flex flex-wrap gap-2 py-6">
            {technologies.map((technology, index) => (
              <span
                key={index}
                className="bg-role text-background px-2 py-1 rounded-md text-xs"
              >
                {technology}
              </span>
            ))}
          </div>
          <div>
            <CTA
              buttons={cta}
              iconMap={iconMap}
              gap="sm"
              className="text-sm pt-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
