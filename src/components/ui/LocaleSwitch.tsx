"use client";

import { FR, GB } from "country-flag-icons/react/1x1";
import { useState } from "react";

export default function LocaleSwitch() {
  const [locale, setLocale] = useState("en");

  const toggleLocale = () => {
    setLocale((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <button
      onClick={toggleLocale}
      className="relative rounded-xl w-6 h-6 flex-shrink-0 cursor-pointer
      overflow-hidden border border-border 
      transition-all duration-300 ease-in-out 
      hover:scale-110 hover:border-accent 
      focus:outline-none focus:ring-2 focus:ring-accent/20"
      aria-label={`Switch to ${locale === "en" ? "French" : "English"}`}
    >
      {locale === "en" ? (
        <GB className="w-full h-full object-cover" />
      ) : (
        <FR className="w-full h-full object-cover" />
      )}
    </button>
  );
}
