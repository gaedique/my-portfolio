"use client";
import { useRef } from "react";

import { useGradientEffect } from "./hooks/useGradientEffect";
import { ToolIcon } from "./ToolIcon";
import { ToolboxCardProps } from "./types";

/**
 * Main component displaying a grid of tools with interactive effects
 *
 * Features:
 * - Unified gradient mesh that follows the mouse (for gradient icons)
 * - Individual snap effect (for normal icons)
 * - Icon ↔ name transition on hover
 * - Support for clicking to open URLs
 */
export const ToolboxCard = (props: ToolboxCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const hasGradientTools = Boolean(props.tools?.some((tool) => tool.gradient));

  // Hook to handle the gradient mesh effect
  const gradientBgStyle = useGradientEffect(containerRef, hasGradientTools);

  return (
    <div className="bg-surface p-6 rounded-md h-full flex flex-col">
      {/* Header */}
      <h3 className="text-center font-semibold pb-4">{props.title}</h3>
      <p className="text-muted-foreground mb-6">{props.content}</p>

      {/* Container of icons with hidden overflow */}
      <div
        ref={containerRef}
        className="toolbox-container relative flex-1 w-full overflow-hidden"
      >
        {/* Rendering icons with shared gradient state */}
        {props.tools?.map((tool, index) => (
          <ToolIcon key={index} tool={tool} gradientBgStyle={gradientBgStyle} />
        ))}
      </div>
    </div>
  );
};
