"use client";

import { Linkedin, Mail, FileText, Github } from "lucide-react";
import { contactData } from "@/data/contact";
import { MagneticIcon } from "./MagneticIcon";

/**
 * Social media links with magnetic hover effects
 * 
 * Displays a horizontal row of interactive social icons including:
 * - LinkedIn profile
 * - Direct email link
 * - Resume/CV download
 * - GitHub profile
 * 
 * Each icon features magnetic attraction and icon-to-label transitions.
 */
export const SocialLinks = () => {
  // Social media configuration with icons and links
  const socialIcons = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: contactData.linkedin,
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:${contactData.contactButtons.email.href.split(":")[1]}`,
    },
    {
      name: "Resume",
      icon: FileText,
      href: contactData.resume,
    },
    {
      name: "GitHub",
      icon: Github,
      href: contactData.github,
    },
  ];

  return (
    <div className="flex items-center justify-center gap-6 relative">
      {socialIcons.map((social) => (
        <MagneticIcon
          key={social.name}
          icon={social.icon}
          href={social.href}
          label={social.name}
        />
      ))}
    </div>
  );
};