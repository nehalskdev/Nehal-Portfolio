export type SkillItem = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  category: string;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    category: "Core Languages",
    items: [
      { name: "HTML", icon: "/assets/skills/html.svg" },
      { name: "CSS", icon: "/assets/skills/css3.svg" },
      { name: "JavaScript", icon: "/assets/skills/js.svg" },
      { name: "React", icon: "/assets/skills/react.svg" },
      { name: "Typescript", icon: "/assets/skills/typescript.svg" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Sass", icon: "/assets/skills/sass.svg" },
      { name: "Redux", icon: "/assets/skills/redux.svg" },
      { name: "Tailwind", icon: "/assets/skills/tailwind.svg" },
      { name: "VS Code", icon: "/assets/skills/vscode.svg" },
    ],
  },
  {
    category: "Toolkit",
    items: [
      { name: "Vercel", icon: "/assets/skills/vercel.svg" },
      { name: "Vite", icon: "/assets/skills/vite.svg" },
      { name: "GitHub", icon: "/assets/skills/github.svg" },
      { name: "webpack", icon: "/assets/skills/webpack.svg" },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  url: string;
};

export const projects: Project[] = [
  {
    title: "Pokédex",
    description:
      "A Pokémon card collection app created using React, allowing users to browse and manage their favorite cards.",
    url: "https://pokemon-cards-lac.vercel.app/",
  },
  {
    title: "Currency Coverter",
    description:
      "Developed a real-time currency calculator with ExchangeRate API, reducing manual errors by 50% using React.js and lazy loading.",
    url: "https://currency-converter-plum-gamma.vercel.app/",
  },
  {
    title: "Rock Paper Scissors Game",
    description:
      "This is a simple, interactive Rock-Paper-Scissors game built using only HTML, CSS, and Vanilla JavaScript.",
    url: "https://rock-paper-scissors-psi-tan.vercel.app/",
  },
  {
    title: "To-do App",
    description:
      "Ready to use Todo app for daily usage where you can add delete tasks created using Vanilla Javascript",
    url: "https://todo-app-inky-nine-53.vercel.app/",
  },
  {
    title: "E-Commerce Product Landing Page",
    description:
      "A responsive e-commerce product page built with vanilla JavaScript, featuring dynamic cart functionality and product customization.",
    url: "https://shopify-assingment.vercel.app/",
  },
  {
    title: "Pokémon Battle Arena",
    description:
      "Pokémon Battle Simulator built with React, Axios, Bootstrap, and Framer Motion for animated turn-based battles. Fetches Pokémon data from PokeAPI with HP tracking and dynamic attacks.",
    url: "https://pokemon-battle-lemon.vercel.app/",
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Jr Frontend Developer",
    company: "Scott Sports SA",
    period: "Feb 2026 – Present",
    bullets: [
      "Building and maintaining frontend features with Next.js and React.",
      "Collaborating with design and backend teams to ship production UI code.",
      "Applying modern React/Next.js patterns in a live commercial codebase.",
    ],
  },
];

export const socialLinks = {
  email: "mailto:nehal4dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/nehal-shaikh-a632a1a0/",
  github: "https://github.com/nehalskdev",
};

export type YoutubeVideo = {
  id: string;
  title: string;
};

export const youtubeChannelUrl =
  "https://www.youtube.com/@AirborneTravellerHere";

export const youtubeVideos: YoutubeVideo[] = [
  { id: "AXd7fLmivwU", title: "Hill Station Pe Hangout: Lonavla With Boys" },
  {
    id: "iaXvzxzeU24",
    title: "Food Hunting Exploration with Boys in Mumbai - Vlog #10",
  },
  { id: "Bzohy0KfC-Q", title: "They Let Me Ride Their ₹2 Lakh+ Athlete Bike!" },
  {
    id: "U0P5SwgVkZ0",
    title: "Portronics Black iKonnect3... - Detailed Review",
  },
  {
    id: "i6Gjehq1LR8",
    title: "Redgear Cosmo 7.1 RGB Wired Gaming Headset under 1500/-",
  },
  { id: "RD615HA9F84", title: "iPhone 14 Review: Upgrade from iPhone 13?" },
];
