import { useRef } from "react";
import { useMagneticEffect } from "@/components/ui/ToolboxCard/hooks/useMagneticEffect";
import { handleToolClick } from "./hooks/gradientUtils";
import { Tool, techIconMap } from "./types";

export type NormalToolIconProps = {
  tool: Tool;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
};

/**
 * Normal icon component with magnetic snap effect
 * 
 * Features:
 * - Magnetic attraction towards mouse cursor within 100px radius
 * - Icon ↔ name transition on hover
 * - 3D transform effects for depth
 * - Optional URL click handling
 * 
 * @param tool - Tool configuration with icon, name, and optional URL
 * @param isHovered - Current hover state
 * @param onHover - Callback to update hover state
 */
export const NormalToolIcon = ({ 
  tool, 
  isHovered, 
  onHover 
}: NormalToolIconProps) => {
  const IconComponent = techIconMap[tool.icon];
  const iconRef = useRef<HTMLDivElement>(null);

  // Apply magnetic effect using shared hook
  useMagneticEffect(iconRef);

  return (
    <div
      ref={iconRef}
      className={`relative w-12 h-12 rounded-lg bg-surface/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:scale-110 hover:bg-surface transition-all duration-300 ${
        tool.url 
          ? "hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30" 
          : ""
      }`}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
      onClick={() => handleToolClick(tool)}
    >
      {/* Initial state: icon display */}
      <div
        className={`transition-all duration-300 ${
          isHovered ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <IconComponent className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
      </div>

      {/* Hover state: name display */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <span className="text-foreground text-xs font-bold text-center leading-tight px-1">
          {tool.name}
        </span>
      </div>
    </div>
  );
};