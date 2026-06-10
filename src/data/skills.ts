import type { PortfolioMode, SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    id: "ux-product-design",
    title: "UX & Product Design",
    description: "Research, structure, and flow work for clear product experiences.",
    skills: [
      "User Research",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Usability Testing"
    ]
  },
  {
    id: "ui-design-systems",
    title: "UI & Design Systems",
    description: "Interface details and reusable systems for consistent handoff.",
    skills: [
      "Responsive Design",
      "Visual Hierarchy",
      "Component Design",
      "Design Systems",
      "Developer Handoff"
    ]
  },
  {
    id: "frontend-product-development",
    title: "Frontend & Product Development",
    description: "Technical foundations for implementation-ready digital products.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"]
  }
];

const designerOrder: SkillGroup["id"][] = [
  "ux-product-design",
  "ui-design-systems",
  "frontend-product-development"
];

const developerOrder: SkillGroup["id"][] = [
  "frontend-product-development",
  "ux-product-design",
  "ui-design-systems"
];

export function getOrderedSkillGroups(mode: PortfolioMode) {
  const order = mode === "designer" ? designerOrder : developerOrder;
  return [...skillGroups].sort(
    (a, b) => order.indexOf(a.id) - order.indexOf(b.id)
  );
}
