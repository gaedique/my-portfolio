// import Link from "next/link";

// type CTAButton = {
//   text: string;
//   href: string;
//   icon?: string;
// };

// type CTAProps = {
//   buttons: Record<string, CTAButton>;
//   iconMap: Record<string, React.ComponentType<{ className?: string }>>;
//   className?: string;
//   gap?: "sm" | "md" | "lg";
// };

// const CTA = ({ buttons, iconMap, className = "", gap = "md" }: CTAProps) => {
//   const getVariantClasses = (key: string): string => {
//     const base = "flex items-center gap-2 px-4 py-1 transition-colors";

//     switch (key) {
//       case "primary":
//         return `${base} border border-accent rounded-md text-accent hover:bg-accent hover:text-background`;
//       default:
//         return `${base} hover:text-accent`;
//     }
//   };

//   const getGapClass = () => {
//     switch (gap) {
//       case "sm":
//         return "gap-2";
//       case "md":
//         return "gap-4";
//       case "lg":
//         return "gap-6";
//       default:
//         return "gap-4";
//     }
//   };

//   const isExternalLink = (href: string) => {
//     return href.startsWith("http") || href.startsWith("mailto:");
//   };

//   return (
//     <div className={`flex ${getGapClass()} ${className}`}>
//       {Object.entries(buttons).map(([key, button]) => {
//         const Icon = iconMap[button.icon as keyof typeof iconMap];
//         const classes = getVariantClasses(key);

//         if (isExternalLink(button.href)) {
//           return (
//             <a key={key} href={button.href} className={classes}>
//               {Icon && <Icon className="w-4 h-4" />}
//               {button.text}
//             </a>
//           );
//         }
//         return (
//           <Link key={key} href={button.href} className={getVariantClasses(key)}>
//             {Icon && <Icon className="w-4 h-4" />}
//             {button.text}
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default CTA;
import Link from "next/link";

type CTAButton = {
  text: string;
  href: string;
  icon?: string;
};

type CTAProps = {
  buttons: Record<string, CTAButton>;
  iconMap: Record<string, React.ComponentType<{ className?: string }>>;
  className?: string;
  gap?: "sm" | "md" | "lg";
};

const CTA = ({ buttons, iconMap, className = "", gap = "md" }: CTAProps) => {
  const getVariantClasses = (key: string): string => {
    const base = "flex items-center gap-2 px-4 py-1 transition-colors";

    switch (key) {
      case "primary":
        return `${base} border border-accent rounded-md text-accent hover:bg-accent hover:text-background`;
      default:
        return `${base} hover:text-accent`;
    }
  };

  const getGapClass = () => {
    switch (gap) {
      case "sm":
        return "gap-2";
      case "md":
        return "gap-4";
      case "lg":
        return "gap-6";
      default:
        return "gap-4";
    }
  };

  const isExternalLink = (href: string) => {
    return href.startsWith("http") || href.startsWith("mailto:");
  };

  return (
    <div className={`flex ${getGapClass()} ${className}`}>
      {Object.entries(buttons).map(([key, button]) => {
        const Icon = button.icon ? iconMap[button.icon] : null;
        const classes = getVariantClasses(key);

        if (isExternalLink(button.href)) {
          return (
            <a key={key} href={button.href} className={classes}>
              {Icon && <Icon className="w-4 h-4" />}
              {button.text}
            </a>
          );
        }
        return (
          <Link key={key} href={button.href} className={classes}>
            {Icon && <Icon className="w-4 h-4" />}
            {button.text}
          </Link>
        );
      })}
    </div>
  );
};

export default CTA;
