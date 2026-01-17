"use client";

import Link from "next/link";
import { siteData } from "@/data/siteData";
import LikeButton from "../ui/LikeButton";

/**
 * Footer - Site footer with copyright and attribution
 * 
 * Features:
 * - Copyright notice with dynamic year
 * - Attribution link with interactive heart button
 * - Responsive layout (stacked on mobile, row on desktop)
 * - Hover effects on author name
 * 
 * @example
 * <Footer />
 */
export const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-8 text-center text-sm"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted">
        {/* Copyright notice */}
        <p className="text-center sm:text-left">
          © <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}
          <span>{siteData.fullName}</span>. All rights reserved.
        </p>

        {/* Attribution link with heart */}
        <Link
          href={siteData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground transition-colors group"
          aria-label={`Visit ${siteData.fullName}'s website`}
        >
          {/* "Designed & developed with" text */}
          <span>Designed & developed with</span>
          
          {/* Interactive heart button */}
          <LikeButton />
          
          {/* "by [name]" text with hover effect */}
          <span>
            by{" "}
            <span className="group-hover:text-foreground transition-colors">
              {siteData.name}
            </span>
          </span>
        </Link>
      </div>
    </footer>
  );
};