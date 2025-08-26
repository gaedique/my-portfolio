import { useState } from "react";
import { Tool } from "./types";
import { GradientToolIcon } from "./GradientToolIcon";
import { NormalToolIcon } from "./NormalToolIcon";

export type ToolIconProps = {
  tool: Tool;
  gradientBgStyle?: React.CSSProperties;
};

/**
 * Individual icon component with interactive effects
 * Supports two modes: gradient mesh or normal icon with snap effect
 */
export const ToolIcon = ({ tool, gradientBgStyle }: ToolIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute group transition-all duration-300 ${
        isHovered ? "z-20" : "z-10"
      } ${tool.url ? "cursor-pointer hover:scale-105" : "cursor-default"}`}
      style={{
        top: tool.position.top,
        bottom: tool.position.bottom,
        left: tool.position.left,
        right: tool.position.right,
      }}
    >
      {tool.gradient ? (
        /* Gradient Mesh Mode */
        <GradientToolIcon
          tool={tool}
          gradientBgStyle={gradientBgStyle}
          isHovered={isHovered}
          onHover={setIsHovered}
        />
      ) : (
        /* Normal Icon Mode with Magnetic Effect */
        <NormalToolIcon
          tool={tool}
          isHovered={isHovered}
          onHover={setIsHovered}
        />
      )}
    </div>
  );
};
