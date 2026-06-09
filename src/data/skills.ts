import type { PortfolioMode, SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    id: "product-ux",
    title: "Product and UX",
    description: "Placeholder skills for understanding user needs and shaping product direction.",
    skills: ["User Flows", "Information Architecture", "Journey Mapping", "Usability Review"]
  },
  {
    id: "interface-design",
    title: "Interface Design",
    description: "Placeholder skills for creating structured, accessible, and polished interfaces.",
    skills: ["Wireframes", "Design Systems", "Responsive Layouts", "Interaction States"]
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Placeholder skills for building typed and reusable frontend experiences.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "backend-data",
    title: "Backend and Data",
    description: "Placeholder skills for connecting interfaces to practical data workflows.",
    skills: ["API Design", "Database Basics", "Validation", "Data Modeling"]
  },
  {
    id: "tools-collaboration",
    title: "Tools and Collaboration",
    description: "Placeholder skills for moving from idea to implementation with a team.",
    skills: ["Figma", "Git", "Documentation", "Handoff"]
  }
];

const designerOrder = [
  "product-ux",
  "interface-design",
  "tools-collaboration",
  "frontend",
  "backend-data"
];

const developerOrder = [
  "frontend",
  "backend-data",
  "tools-collaboration",
  "interface-design",
  "product-ux"
];

export function getOrderedSkillGroups(mode: PortfolioMode) {
  const order = mode === "designer" ? designerOrder : developerOrder;
  return [...skillGroups].sort(
    (a, b) => order.indexOf(a.id) - order.indexOf(b.id)
  );
}
