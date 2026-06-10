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
  role: string;
  technologies: string[];
  ctaLabel: string;
  ctaHref?: string;
  ctaPendingReason?: string;
  featured?: boolean;
}

export type SkillGroupId =
  | "ux-product-design"
  | "ui-design-systems"
  | "frontend-product-development";

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
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  university: string;
  faculty: string;
  timeline: string;
  description: string;
}
