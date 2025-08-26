import { useEffect } from "react";
import { Tool } from "../types";

/**
 * Hook to manage the magnetic effect (snap) of normal icons
 * Attracts the icon to the mouse within a 100px radius
 */
export const useSnapEffect = (
  iconRef: React.RefObject<HTMLDivElement>,
  tool: Tool
) => {
  useEffect(() => {
    // Skip if it's a gradient icon
    if (tool.gradient) return;

    const icon = iconRef.current;
    const container = icon?.closest(".toolbox-container") as HTMLElement;
    if (!icon || !container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = icon.getBoundingClientRect();
      // Distance from the mouse to the center of the icon
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100; // Radius of influence

      if (distance < maxDistance) {
        // Attractive force inversely proportional to distance
        const strength = (maxDistance - distance) / maxDistance;
        const moveX = x * strength * 0.3; // Motion factor
        const moveY = y * strength * 0.3;

        const baseTransform = `translate(${moveX}px, ${moveY}px) scale(${
          1 + strength * 0.1 // Slight enlargement
        })`;
        icon.style.transform = baseTransform;
      }
    };

    const handleMouseLeave = () => {
      // Reset the position
      icon.style.transform = "translate(0px, 0px) scale(1)";
    };

    container.addEventListener("mousemove", handleMouseMove as EventListener);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener(
        "mousemove",
        handleMouseMove as EventListener
      );
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [tool.gradient, iconRef]);
};
