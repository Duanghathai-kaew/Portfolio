export type PortfolioMode = "designer" | "developer";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  designerEmphasis: string;
  developerEmphasis: string;
  role: string;
  technologies: string[];
  featured?: boolean;
}

export type SkillGroupId =
  | "product-ux"
  | "interface-design"
  | "frontend"
  | "backend-data"
  | "tools-collaboration";

export interface SkillGroup {
  id: SkillGroupId;
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  timeline: string;
  description: string;
  tags: string[];
}
