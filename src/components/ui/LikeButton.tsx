"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

/**
 * LikeButton - Interactive heart button with fill animation
 * 
 * Features:
 * - Bottom-to-top fill animation on hover/liked state
 * - Pulse effect on click
 * - Scale animation on hover
 * - Accessible with ARIA labels and keyboard support
 * 
 * @example
 * <LikeButton />
 */
export default function LikeButton() {
  // Track liked state for persistence across hover
  const [isLiked, setIsLiked] = useState(false);
  
  // Track hover state for fill animation trigger
  const [isHovered, setIsHovered] = useState(false);
  
  // Track pulse animation state on click
  const [isPulsing, setIsPulsing] = useState(false);

  /**
   * Handle click interaction
   * Toggles liked state and triggers pulse animation
   */
  const handleClick = () => {
    setIsLiked(!isLiked);
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 300);
  };

  // Determine if heart should be filled (hovered or liked)
  const isFilled = isHovered || isLiked;

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background rounded-sm"
      aria-label={isLiked ? "Remove like" : "Add like"}
      aria-pressed={isLiked}
      type="button"
    >
      <div 
        className={`fill-container relative ${isPulsing ? 'animate-pulse' : ''}`}
        data-fill={isFilled ? "100" : "0"}
        role="presentation"
      >
        {/* Filled heart layer - animates from bottom to top */}
        <div 
          className="absolute inset-0 overflow-hidden fill-wrapper"
          aria-hidden="true"
        >
          <Heart
            className="w-4 h-4 text-accent transition-transform duration-300 
            group-hover:scale-110"
            fill="currentColor"
          />
        </div>
        
        {/* Outline heart layer - always visible */}
        <Heart
          className="w-4 h-4 text-accent transition-transform duration-300 group-hover:scale-110"
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
    </button>
  );
}