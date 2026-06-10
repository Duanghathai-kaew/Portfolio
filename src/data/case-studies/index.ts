import { ideacrewCaseStudy } from "./ideacrew";

export const caseStudies = [ideacrewCaseStudy];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
