import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "ideacrew",
    category: "Web-based Collaboration Platform",
    title: "IDEACREW",
    description:
      "A platform that helps students discover projects, find teammates, and manage project applications in one place.",
    role: "UX/UI Designer & Full-Stack Developer",
    technologies: ["Next.js", "TypeScript", "Supabase", "Figma"],
    ctaLabel: "View Case Study",
    ctaPendingReason: "Case study route is not connected yet.",
    featured: true
  },
  {
    id: "recruitment-platform",
    category: "Internship Project",
    title: "Recruitment Platform",
    description:
      "A recruitment platform designed to turn complex hiring requirements into clear, structured, and usable workflows.",
    role: "UX/UI Designer & Full-Stack Developer Intern",
    technologies: ["Figma", "React", "Next.js", "Supabase"],
    ctaLabel: "View Project",
    ctaPendingReason: "Project route is not connected yet."
  },
  {
    id: "design-system",
    category: "Internship Project",
    title: "Design System",
    description:
      "A reusable component-based design system created to improve interface consistency and support smoother developer handoff.",
    role: "UX/UI Designer",
    technologies: ["Figma", "shadcn/ui", "Component Design"],
    ctaLabel: "View Project",
    ctaPendingReason: "Project route is not connected yet."
  }
];
