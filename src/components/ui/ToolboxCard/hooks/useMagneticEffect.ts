import { useEffect, RefObject } from "react";

type UseMagneticEffectOptions = {
  maxDistance?: number;
  strength?: number;
  scaleBoost?: number;
};

export const useMagneticEffect = (
  ref: RefObject<HTMLElement | null>,
  options: UseMagneticEffectOptions = {}
) => {
  const {
    maxDistance = 100,
    strength = 0.3,
    scaleBoost = 0.15,
  } = options;

  useEffect(() => {
    const element = ref.current;
    const container = element?.parentElement;
    if (!element || !container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const distance = Math.sqrt(x * x + y * y);

      if (distance < maxDistance) {
        const magnetStrength = (maxDistance - distance) / maxDistance;
        const moveX = x * magnetStrength * strength;
        const moveY = y * magnetStrength * strength;
        const scale = 1 + magnetStrength * scaleBoost;

        element.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
      } else {
        element.style.transform = "translate(0px, 0px) scale(1)";
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0px, 0px) scale(1)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxDistance, strength, scaleBoost]);
};