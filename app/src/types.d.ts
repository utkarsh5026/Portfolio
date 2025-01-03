export type TechnologyLearning = {
  name: string;
  icon: React.ReactNode;
  description: string;
  repoLink?: string;
  category: "Database" | "Backend" | "Frontend" | "DevOps" | "AI/ML";
};

export type Technology = {
  name: string;
  aboutLink: string;
  icon?: React.ReactNode;
};

export type Project = {
  name: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  technologies: Technology[];
  features: string[];
  thumbnail?: string;
  category: "Web" | "Mobile" | "Backend" | "DevOps" | "AI/ML";
  status: "Completed" | "In Progress" | "Planned";
  timeline: string;
  role?: string;
  collaborators?: string[];
  highlights?: string[];
};
