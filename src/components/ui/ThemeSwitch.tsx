"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // S'assurer que le composant est monté côté client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Pendant l'hydratation, afficher un placeholder neutre
  if (!mounted) {
    return (
      <button
        className="relative rounded-xl block w-10 h-6 flex-shrink-0 border border-border"
        aria-label="Theme switch loading"
        disabled
      >
        <span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center">
          <Sun size={12} className="text-yellow-500" />
        </span>
      </button>
    );
  }

  // Une fois monté, afficher le vrai état
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative rounded-xl w-10 h-6 flex-shrink-0 
      border border-border transition-all duration-300 ease-in-out 
      bg-soft cursor-pointer hover:border-accent
      focus:outline-none focus:ring-2 focus:ring-accent/20"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span
        className={`
                    absolute top-0.5 left-0.5 w-4.5 h-4.5 rounded-full 
                    bg-white shadow-md transition-transform duration-300 ease-in-out
                    flex items-center justify-center
                    ${theme === "dark" ? "translate-x-4" : "translate-x-0"}
                `}
      >
        {theme === "dark" ? (
          <Moon size={12} className="text-slate-600" />
        ) : (
          <Sun size={12} className="text-accent" />
        )}
      </span>
    </button>
  );
}
