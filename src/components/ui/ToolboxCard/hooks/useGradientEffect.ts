import { useEffect, useState } from "react";

/**
 * Hook to handle the gradient mesh effect that follows the mouse
 * Calculates the 3D rotation and position of the background in real time
 */
export const useGradientEffect = (
  containerRef: React.RefObject<HTMLDivElement>,
  hasGradientTools: boolean
) => {
  const [gradientBgStyle, setGradientBgStyle] = useState<React.CSSProperties>(
    {}
  );

  useEffect(() => {
    // Skip if no gradient icon
    if (!hasGradientTools) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const containerRect = container.getBoundingClientRect();
      // Position relative de la souris (0-1)
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;

      //  Calculations for the 3D effect
      const rotateX = (mouseY / containerRect.height - 0.5) * 3.6; // Max X rotation ±1.8°
      const rotateY = (mouseX / containerRect.width - 0.5) * 7.4; // Max Y rotation ±3.7°
      // Calculations for gradient motion
      const bgPosX = (mouseX / containerRect.width - 0.5) * 20; // Max X movement ±10px
      const bgPosY = (mouseY / containerRect.height - 0.5) * 20; // Max Y movement ±10px

      // State shared between all gradient icons
      setGradientBgStyle({
        transform: `perspective(600px) translate3d(0px, 0px, 0px) scale(1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        backgroundPosition: `calc(50% + ${bgPosX}px) calc(50% + ${bgPosY}px)`,
      });
    };

    const handleMouseLeave = () => {
      // Reset to neutral position
      setGradientBgStyle({
        transform:
          "perspective(600px) translate3d(0px, 0px, 0px) scale(1) rotateX(0deg) rotateY(0deg)",
        backgroundPosition: "50% 50%",
      });
    };

    // Event listeners
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasGradientTools, containerRef]);

  return gradientBgStyle;
};
