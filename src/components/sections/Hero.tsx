"use client";
import { heroData } from "@/data/hero";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import CTA from "../ui/Button";

export const Hero = () => {
  const { greeting, name, role, tagline, description, cta, avatar } = heroData;

  // Mapping des icônes
  const iconMap = {
    mail: Mail,
    download: Download,
  };

  return (
    <section className="flex flex-col justify-center gap-12 py-section border-b border-border">
      <h1 className="leading-relaxed">
        <span className="block text-accent">{greeting}</span>
        <strong className="block text-title font-bold text-4xl">{name}</strong>
        <span className="block text-role font-bold text-4xl">{role}</span>
      </h1>
      <div className="flex items-start justify-start gap-12">
        <Image
          src={avatar.src}
          alt={avatar.alt}
          width={110}
          height={110}
          className="rounded-full"
        />
        <div className="flex flex-col bg-surface gap-4 px-4 py-6 rounded-lg">
          <div className="flex flex-col gap-2">
            <p>
              {tagline.map((segment, index) => {
                if (typeof segment === "string") {
                  return segment;
                }
                return (
                  <span
                    key={index}
                    className={`${segment.bold ? "font-bold" : ""} ${
                      segment.italic ? "italic" : ""
                    }`}
                  >
                    {segment.text}
                  </span>
                );
              })}
            </p>
            <p>
              {description.map((segment, index) => {
                if (typeof segment === "string") {
                  return segment;
                }
                return (
                  <span
                    key={index}
                    className={`${segment.bold ? "font-bold" : ""} ${
                      segment.italic ? "italic" : ""
                    }`}
                  >
                    {segment.text}
                  </span>
                );
              })}
            </p>
          </div>
          <CTA buttons={cta} iconMap={iconMap} gap="sm" />
        </div>
      </div>
    </section>
  );
};
