import { Tool } from "../types";

/**
 * Calculates the background position by combining:
 * - The icon's static offset (for its unique color)
 * - Mouse movement (shared across all icons)
 *
 *
 * @param tool - Tool configuration
 * @param gradientBgStyle - Shared gradient style
 * @returns CSS position calculated for backgroundPosition
 */
export const calculateBackgroundPosition = (
  tool: Tool,
  gradientBgStyle?: React.CSSProperties
): string => {
  const staticOffset = tool.gradientOffset || "0px";

  // If no mouse movement, use only static offset
  if (!gradientBgStyle?.backgroundPosition) {
    return `calc(50% + ${staticOffset}) 50%`;
  }

  const bgPos = gradientBgStyle.backgroundPosition.toString();

  // Parse the mouse movement format "calc(50% + Xpx) calc(50% + Ypx)"
  const calcMatch = bgPos.match(
    /calc\(50% \+ (-?\d+(?:\.\d+)?)px\) calc\(50% \+ (-?\d+(?:\.\d+)?)px\)/
  );

  if (calcMatch) {
    const mouseX = calcMatch[1] + "px";
    const mouseY = calcMatch[2] + "px";
    // Combine static offset + mouse movement
    return `calc(50% + ${staticOffset} + ${mouseX}) calc(50% + ${mouseY})`;
  }

  // Fallback in case of parsing error
  return `calc(50% + ${staticOffset}) 50%`;
};

/**
 * Opens the tool's URL in a new tab
 */
export const handleToolClick = (tool: Tool): void => {
  if (tool.url) {
    window.open(tool.url, "_blank", "noopener,noreferrer");
  }
};
