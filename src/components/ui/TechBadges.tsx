export type TechBadgesProps = {
  technologies: string[];
};

/**
 * Displays a list of technologies as styled badges
 */

export const TechBadges = (props: TechBadgesProps) => {
  return (
    <div className="flex flex-wrap gap-2 py-6">
      {props.technologies.map((technology, index) => (
        <span
          key={index}
          className="bg-card text-background font-bold px-2 py-1 rounded-md text-xs"
        >
          {technology}
        </span>
      ))}
    </div>
  );
};
