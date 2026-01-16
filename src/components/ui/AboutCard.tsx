"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type AboutCardProps = {
  /** Title of the card */
  title: string;
  /** Optional description content */
  content?: string;
  /** Optional avatar image URL */
  avatar?: string;
};

/**
 * Configuration constants for avatar effects
 */
const AVATAR_EFFECTS_CONFIG = {
  rotation: {
    maxDegrees: 15,
    perspective: 800,
  },
  movement: {
    maxPixels: 4,
  },
  border: {
    baseOpacity: 0.3,
    maxOpacity: 0.6,
    influenceRadius: 100,
    avatarOffsetRatio: 0.3,
  },
  animation: {
    transitionDuration: "0.4s",
    easing: "ease-out",
  },
} as const;

/**
 * Custom hook to manage interactive avatar effects
 *
 * Manages two main effects:
 * - Border that brightens based on mouse proximity
 * - 3D rotation and subtle movement of the image based on mouse position
 *
 * @param cardRef - Reference to the card element (detection area)
 * @param imageRef - Reference to the avatar image
 * @param isEnabled - Enables/disables effects
 * @returns CSS styles to apply to the container and image
 */
const useAvatarEffect = (
  cardRef: React.RefObject<HTMLDivElement | null>,
  imageRef: React.RefObject<HTMLImageElement | null>,
  isEnabled: boolean
) => {
  // States for dynamic styles
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({});
  const [imageStyle, setImageStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!isEnabled) return;

    const card = cardRef.current;
    if (!card) return;

    /**
     * Mouse movement manager
     * Calculates effects in real time based on mouse position
     */
    const handleMouseMove = (e: MouseEvent) => {
      const cardRect = card.getBoundingClientRect();
      const mouseX = e.clientX - cardRect.left;
      const mouseY = e.clientY - cardRect.top;

      // Reference points for calculations
      const centerX = cardRect.width / 2;
      const centerY = cardRect.height / 2;

      // 3D rotation calculation (Y axis only)
      // The further to the right the mouse is, the more positive the rotation
      const rotateY =
        (mouseX / cardRect.width - 0.5) *
        AVATAR_EFFECTS_CONFIG.rotation.maxDegrees;

      // Calculate image movement (subtle parallax)
      // Movement proportional to mouse position
      const moveX =
        (mouseX / cardRect.width - 0.5) *
        AVATAR_EFFECTS_CONFIG.movement.maxPixels;
      const moveY =
        (mouseY / cardRect.height - 0.5) *
        AVATAR_EFFECTS_CONFIG.movement.maxPixels;

      // Calculate the border's lighting intensity
      // Area of ​​effect centered on the avatar (offset to the right)
      const avatarCenterX =
        centerX +
        cardRect.width * AVATAR_EFFECTS_CONFIG.border.avatarOffsetRatio;
      const avatarCenterY = centerY;

      // Euclidean distance between the mouse and the center of the avatar
      const distanceToAvatar = Math.sqrt(
        Math.pow(mouseX - avatarCenterX, 2) +
          Math.pow(mouseY - avatarCenterY, 2)
      );

      // 100px area of ​​influence around the avatar
      const avatarMaxDistance = AVATAR_EFFECTS_CONFIG.border.influenceRadius;

      // Intensity inversely proportional to distance (0 = far, 1 = near)
      const borderIntensity = Math.max(
        0,
        1 - distanceToAvatar / avatarMaxDistance
      );

      // Applying styles to the avatar container
      setContainerStyle({
        // Border that lightens: from rgba(255,255,255,0.3) to rgba(255,255,255,0.6)
        borderColor: `rgba(255, 255, 255, ${
          AVATAR_EFFECTS_CONFIG.border.baseOpacity +
          borderIntensity *
            (AVATAR_EFFECTS_CONFIG.border.maxOpacity -
              AVATAR_EFFECTS_CONFIG.border.baseOpacity)
        })`,
        // 3D rotation with perspective for a realistic effect
        transform: `perspective(${AVATAR_EFFECTS_CONFIG.rotation.perspective}) rotateY(${rotateY}deg)`,
        // No transition during movement for fluidity
        transition: "none",
      });

      // Applying movement to the image
      setImageStyle({
        // Simple translation for parallax effect
        transform: `translate(${moveX}px, ${moveY}px)`,
        transition: "none",
      });
    };

    /**
     * Mouse exit handler
     * Resets all effects to their initial state with a smooth transition
     */
    const handleMouseLeave = () => {
      setContainerStyle({
        // Return to neutral rotation
        transform: `perspective(${AVATAR_EFFECTS_CONFIG.rotation.perspective}) rotateY(0deg)`,
        // Smooth transition for the return
        transition: `all ${AVATAR_EFFECTS_CONFIG.animation.transitionDuration} ${AVATAR_EFFECTS_CONFIG.animation.easing}`,
      });

      setImageStyle({
        // Return to original position
        transform: "translate(0px, 0px)",
        transition: `all ${AVATAR_EFFECTS_CONFIG.animation.transitionDuration} ${AVATAR_EFFECTS_CONFIG.animation.easing}`,
      });
    };

    // Adding event listeners
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Cleaning during disassembly
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isEnabled, cardRef, imageRef]);

  return { containerStyle, imageStyle };
};

/**
 * AboutCard Component - Presentation card with interactive avatar
 *
 * Displays a card with a title, content, and an optional avatar.
 * The avatar benefits from interactive effects when hovering over the card.
 *
 * @param props - Component properties
 */
export const AboutCard = (props: AboutCardProps) => {
  // References for interactive effects
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Apply effects only if an avatar is present
  const { containerStyle, imageStyle } = useAvatarEffect(
    cardRef,
    imageRef,
    !!props.avatar
  );

  return (
    <div
      ref={cardRef}
      className="flex items-end bg-surface p-6 gap-12 rounded-md"
    >
      {/* Text content area */}
      <div className="flex flex-col flex-1 gap-4">
        <h3 className="font-semibold">{props.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{props.content}</p>
      </div>

      {/* Avatar area with interactive effects */}
      {props.avatar && (
        <div className="relative mr-4">
          {/* Avatar container with interactive border */}
          <div
            className="w-24 h-24 rounded-md backdrop-blur-sm border border-border bg-surface/80 cursor-pointer"
            style={containerStyle}
          />

          {/* Avatar image with parallax movement */}
          <Image
            ref={imageRef}
            src={props.avatar}
            alt={`${props.title} avatar`}
            width={100}
            height={120}
            className="absolute -bottom-2 -right-2 rounded-lg object-cover pointer-events-none"
            style={{
              width: "auto",
              ...imageStyle,
            }}
          />
        </div>
      )}
    </div>
  );
};
