import type { ProcessStep } from "@/types/portfolio";

export const processIntro =
  "I connect user needs, business requirements, and technical constraints throughout the design process.";

export const processSteps: ProcessStep[] = [
  {
    id: "understand",
    title: "Understand",
    description: "Explore user problems, requirements, and project constraints."
  },
  {
    id: "structure",
    title: "Structure",
    description: "Turn complex information into clear architecture and user flows."
  },
  {
    id: "design",
    title: "Design",
    description: "Create intuitive interfaces and reusable component systems."
  },
  {
    id: "collaborate",
    title: "Collaborate",
    description:
      "Work with stakeholders and developers to deliver practical, implementation-ready solutions."
  }
];
