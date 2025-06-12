export const featuredProjects = [
  {
    category: "Client Project",
    title: "React-Based Medical Practice",
    description: "End-to-end project combining UI/UX design and development.",
    image: {
      src: "/images/featured/medical-practice.png",
      alt: "Medical practice website screenshot showing modern design",
    },
    video: {
      src: "/video/medical-practice.webm",
      alt: "Medical practice website demo video",
    },
    role: "UI/UX Designer & Frontend Developer",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    cta: {
      primary: {
        text: "website",
        href: "https://medical-practice.vercel.app/",
        external: true,
        icon: "Globe",
      },
      secondary: {
        text: "Case study",
        href: "/",
        external: false,
        icon: "FileText",
      },
      // tertiary: {
      //   text: "code",
      //   href: "https://github.com/gaedique/gilles-mariambourg",
      //   external: true,
      //   icon: "Github",
      // },
    },
  },
];
