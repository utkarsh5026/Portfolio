/**
 * My projects showcase! 🛠️
 *
 * This is where I keep all the juicy details about my projects.
 * Each project entry includes:
 * - Project name and description
 * - Links to GitHub (and live demos where available)
 * - Tech stack used (linked to my technologies config)
 * - Key features and highlights
 * - Project status (Completed/In Progress)
 * - Category (DevOps, AI/ML, Library, etc.)
 */

import type { Project } from "@/types";
import { technologies } from "@/components/base/technologies";

export const projects: Project[] = [
  {
    name: "Automotive Training & Workforce Analytics DSS",
    description:
      "A comprehensive Decision Support System for Skoda Auto, Volkswagen, and Audi to analyze training effectiveness, workforce demographics, and employee retention metrics. The system processes large-scale training history and manpower data to provide actionable insights for management decision-making.",

    githubLink: "private-repository",

    technologies: [
      technologies.react,
      technologies.python,
      technologies.django,
      technologies.pandas,
      technologies.plotly,
      technologies.sqlite,
    ],

    features: [
      "Multi-brand workforce analytics (Skoda, VW, Audi)",
      "Training success rate analysis by trainer/location",
      "Employee aging and retention tracking",
      "Customizable trend analysis with date ranges",
      "Zone and dealer-wise performance metrics",
      "Data visualization with interactive charts",
      "Automated data processing pipelines",
      "Role-based access control",
      "Export functionality for reports",
    ],

    category: "Web",

    status: "Completed",

    highlights: [
      "Processes 200,000+ training records across 3 major automotive brands",
      "Reduced reporting time from days to minutes",
      "Interactive dashboards for real-time decision making",
      "Automated data validation and cleaning pipelines",
      "Cross-brand comparative analysis capabilities",
    ],
  },
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
  {
    name: "PAuth",
    description:
      "A modern Python library that simplifies OAuth 2.0 authentication implementation by providing a clean, consistent, and secure interface for multiple providers like Google, GitHub, Facebook, and Twitter.",
    githubLink: "https://github.com/utkarsh5026/pauth",
    technologies: [
      technologies.python,
      technologies.flask,
      technologies.django,
      technologies.rest,
    ],
    features: [
      "Complete OAuth 2.0 implementation with modern security features",
      "Multiple provider support (Google, GitHub, Facebook, Twitter)",
      "Framework integration with Flask and Django",
      "Built-in PKCE (Proof Key for Code Exchange) support",
      "Customizable token storage",
      "Comprehensive error handling",
      "Type hints for better developer experience",
    ],
    category: "Library",
    status: "In Progress",
    highlights: [
      "Security-first approach with PKCE implementation and state validation",
      "Framework-agnostic core with seamless integrations",
      "Extensible provider system with consistent interface",
      "Comprehensive documentation and examples",
      "Type-safe implementation with modern Python features",
    ],
  },
  {
    name: "Current",
    description:
      "A fully functional BitTorrent client built in Go that can download files from the BitTorrent network. Implements core protocol features including peer wire protocol, tracker communication, and piece management.",
    githubLink: "https://github.com/utkarsh5026/current",
    technologies: [technologies.golang, technologies.bittorrent],
    features: [
      "Parse and decode .torrent files using custom bencode parser",
      "Connect and communicate with BitTorrent trackers",
      "Manage peer connections and handshakes",
      "Download file pieces from multiple peers simultaneously",
      "Verify downloaded pieces using SHA1 hashing",
      "Track download progress in real-time",
      "Handle concurrent TCP connections efficiently",
    ],
    category: "Backend",
    status: "Completed",
    highlights: [
      "Custom implementation of the bencode format parser/encoder",
      "Efficient piece management with concurrent downloads",
      "Clean separation of concerns with modular package design",
      "Robust error handling and data verification",
      "Support for both single-file and multi-file torrents",
    ],
  },
  {
    name: "Cope",
    description:
      "A custom implementation of the grep command-line tool in Go, focusing on regular expression pattern matching and text searching capabilities, as it is a part of the CodeCrafters platform challenge",
    githubLink: "https://github.com/utkarsh5026/cope",
    technologies: [technologies.golang, technologies.cli],
    features: [
      "Pattern matching using regular expressions",
      "Command-line interface",
      "File content searching",
      "Test-driven development approach",
      "Support for various input formats",
    ],
    category: "Backend",
    status: "In Progress",
    highlights: [
      "Built as part of the CodeCrafters platform challenge",
      "Implements core grep functionality in pure Go",
      "Includes comprehensive test coverage",
      "Uses modern Go tooling and practices (Go 1.22+)",
    ],
  },
];

export default projects;
