import React from "react";

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
  category: "Web" | "Mobile" | "Backend" | "DevOps" | "AI/ML" | "Library";
  status: "Completed" | "In Progress" | "Planned";
  highlights?: string[];
};

export type Article = {
  title: string;
  description: string;
  link: string;
};

export type WorkExperience = {
  company: string;
  position: string;
  duration: string;
  achievements: {
    title: string;
    description: string[];
    icon?: string;
  }[];
  technologies: string[];
  imageSrc: string;
  companyUrl: string;
};
