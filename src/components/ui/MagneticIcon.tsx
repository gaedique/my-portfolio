"use client";

import { useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import { useMagneticEffect } from "@/components/ui/ToolboxCard/hooks/useMagneticEffect";

type MagneticIconProps = {
  icon: LucideIcon;
  href: string;
  label: string;
};

/**
 * Magnetic icon link with hover effects
 * 
 * Features:
 * - Magnetic attraction effect towards mouse cursor
 * - Icon ↔ label transition on hover
 * - 3D transform for visual depth
 * - Opens links in new tab with security attributes
 * 
 * @param icon - Lucide React icon component
 * @param href - Destination URL
 * @param label - Accessible label and hover text
 */
export const MagneticIcon = ({ icon: Icon, href, label }: MagneticIconProps) => {
  const iconRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Apply magnetic attraction effect
  useMagneticEffect(iconRef);

  return (
    <a
      ref={iconRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-3 bg-surface/80 backdrop-blur-sm border border-border/50 rounded-lg transition-all duration-300"
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={label}
    >
      {/* Default state: icon display */}
      <div
        className={`transition-all duration-300 ${
          isHovered ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <Icon className="w-5 h-5 text-foreground" />
      </div>

      {/* Hover state: label display */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <span className="text-foreground text-xs font-bold text-center leading-tight px-1">
          {label}
        </span>
      </div>
    </a>
  );
};