import {
  SiExpress,
  SiFigma,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

/**
 * Mapping technology icons
 * Associates string keys with react-icons icon components
 */
export const techIconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  figma: SiFigma,
  express: SiExpress,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
} as const;

/**
 * Configuring a technological tool
 */
export type Tool = {
  name: string;
  /** Key corresponding to the icon in techIconMap */
  icon: keyof typeof techIconMap;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  /** Enables the display of the gradient mesh instead of the normal style */
  gradient?: boolean;
  /** Horizontal shift to show a different part of the gradient */
  gradientOffset?: string;
  url?: string;
};

export type ToolboxCardProps = {
  title: string;
  content?: string;
  tools?: Tool[];
};
