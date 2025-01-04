import type { Project } from "@/types";
import { technologies } from "@/components/base/technologies";

export const projects: Project[] = [
  {
    name: "Container Management Platform",
    description:
      "A web-based container management solution featuring real-time monitoring and control of Docker containers.",
    githubLink: "https://github.com/yourusername/container-platform",
    liveLink: "https://demo-container-platform.com",
    technologies: [
      technologies.golang,
      technologies.react,
      technologies.docker,
      technologies.typescript,
    ],
    features: [
      "Real-time container monitoring via WebSocket",
      "Interactive terminal access to containers",
      "Resource usage visualization (CPU, Memory, Network)",
      "Container log streaming and search",
      "Image and volume management",
    ],
    thumbnail: "/projects/container-platform.png",
    category: "DevOps",
    status: "Completed",
  },
  {
    name: "AI-Powered Code Review Assistant",
    description:
      "An intelligent code review tool that uses machine learning to analyze code quality and suggest improvements.",
    githubLink: "https://github.com/yourusername/code-reviewer",
    technologies: [
      technologies.python,
      technologies.fastapi,
      technologies.mongodb,
    ],
    features: [
      "Automated code quality analysis",
      "Security vulnerability detection",
      "Performance optimization suggestions",
      "Integration with GitHub Actions",
    ],
    category: "AI/ML",
    status: "In Progress",
  },
  {
    name: "Microservices Orchestration Platform",
    description:
      "A lightweight container orchestration system built to understand core concepts of Kubernetes.",
    githubLink: "https://github.com/yourusername/micro-orchestrator",
    technologies: [
      technologies.golang,
      technologies.kubernetes,
      technologies.docker,
    ],
    features: [
      "Custom scheduler implementation",
      "Service discovery and load balancing",
      "Automated scaling and failover",
      "Health monitoring and self-healing",
    ],
    category: "DevOps",
    status: "Completed",
  },
  {
    name: "ReduceMe",
    description:
      "A lightweight, TypeScript-first Redux-like state management library built for learning and understanding Redux principles. It provides immutable state management with modern features like slices and middleware support.",
    githubLink: "https://github.com/utkarsh5026/ReduceMe",
    technologies: [technologies.typescript, technologies.node],
    features: [
      "Redux-like state management with TypeScript support",
      "Immutable state updates using Immer",
      "Slice-based state organization",
      "Middleware support for extending functionality",
      "Type-safe action creators and reducers",
      "Combined reducers for complex state management",
      "State change subscription system",
      "Comprehensive test coverage",
    ],
    category: "Library",
    status: "Completed",
  },
];

export default projects;