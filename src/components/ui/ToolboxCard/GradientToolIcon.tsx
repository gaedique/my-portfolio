import {
  calculateBackgroundPosition,
  handleToolClick,
} from "./hooks/gradientUtils";
import { Tool, techIconMap } from "./types";

export type GradientToolIconProps = {
  tool: Tool;
  gradientBgStyle?: React.CSSProperties;
  isHovered?: boolean;
  onHover?: (hovered: boolean) => void;
  gradientImageUrl?: string;
};

/**
 * Gradient mesh icon component with dynamic background and 3D effects
 * Features gradient mesh that follows mouse movement with synchronized transforms
 */
export const GradientToolIcon = ({
  tool,
  gradientBgStyle,
  isHovered,
  onHover,
}: GradientToolIconProps) => {
  const IconComponent = techIconMap[tool.icon];

  return (
    <div
      className={`relative w-12 h-12 rounded-xl overflow-hidden ${
        tool.url ? "hover:shadow-lg hover:shadow-primary/20" : ""
      }`}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
      onClick={() => handleToolClick(tool)}
    >
      {/* Background gradient with dynamic position */}
      <div
        className="gradient-mesh-layer"
        aria-hidden="true"
        style={
          {
            "--bg-position": calculateBackgroundPosition(tool, gradientBgStyle),
            "--bg-transform": gradientBgStyle?.transform ?? "none",
          } as React.CSSProperties
        }
      />

      {/* Icon content with icon ↔ text transition */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Initial state: displaying the icon */}
        <div
          className={`transition-all duration-300 ${
            isHovered ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <IconComponent className="w-8 h-8 text-background drop-shadow-lg" />
        </div>

        {/* Hover state: display name */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <span className="text-background text-xs font-bold text-center leading-tight drop-shadow-lg px-1">
            {tool.name}
          </span>
        </div>
      </div>
    </div>
  );
};
