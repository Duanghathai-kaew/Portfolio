import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "project-01",
    category: "Product Experience",
    title: "Project Title",
    description: "A short description of the user problem and product value.",
    designerEmphasis: "Clarifies the journey, information hierarchy, and interface decisions.",
    developerEmphasis: "Translates the flow into typed, reusable interface components.",
    role: "UX/UI Designer & Full-Stack Developer",
    technologies: ["Research", "Wireframes", "React", "TypeScript"],
    featured: true
  },
  {
    id: "project-02",
    category: "Interface System",
    title: "Project Title",
    description: "A concise placeholder for a design system or product surface.",
    designerEmphasis: "Focuses on component states, visual consistency, and accessibility.",
    developerEmphasis: "Focuses on component APIs, tokens, and maintainable styling.",
    role: "Product Designer & Frontend Developer",
    technologies: ["Design System", "Tailwind CSS", "Components"]
  },
  {
    id: "project-03",
    category: "Full-Stack Workflow",
    title: "Project Title",
    description: "A placeholder description of a workflow that connects user needs with delivery.",
    designerEmphasis: "Maps user intent into a clear, low-friction task flow.",
    developerEmphasis: "Structures the interface around data, states, and edge cases.",
    role: "Full-Stack Developer with UX/UI Focus",
    technologies: ["Next.js", "Data Models", "Usability"]
  }
];
