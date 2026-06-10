export interface CaseStudyMeta {
  label: string;
  value: string;
}

export interface CaseStudyTextSection {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface CaseStudyInsight {
  title: string;
  finding: string;
  response: string;
}

export interface CaseStudyFlow {
  title: string;
  description?: string;
  steps: string[];
}

export interface CaseStudySolution {
  title: string;
  problem: string;
  solution: string;
  value: string;
}

export interface CaseStudyChallenge {
  title: string;
  challenge: string;
  decision: string;
  result: string;
}

export interface CaseStudyInformationArchitecture {
  description?: string;
  groups: {
    title: string;
    items: string[];
  }[];
}

export interface CaseStudyTechnical {
  technologies: string[];
  architecture?: string;
  dataAreas?: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: string;

  status?: string;
  heroImage?: string;

  overview: CaseStudyMeta[];

  background?: CaseStudyTextSection;
  problem?: CaseStudyTextSection;
  goals?: CaseStudyTextSection;
  role?: CaseStudyTextSection;
  discovery?: CaseStudyTextSection;

  insights?: CaseStudyInsight[];

  informationArchitecture?: CaseStudyInformationArchitecture;

  userFlows?: CaseStudyFlow[];
  solutions?: CaseStudySolution[];

  systemStates?: CaseStudyTextSection;
  designSystem?: CaseStudyTextSection;

  technical?: CaseStudyTechnical;

  authentication?: CaseStudyTextSection;
  challenges?: CaseStudyChallenge[];

  testing?: CaseStudyTextSection;
  outcome?: CaseStudyTextSection;
  learnings?: CaseStudyTextSection;
  nextSteps?: CaseStudyTextSection;
  reflection?: CaseStudyTextSection;

  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;

  previousProjectSlug?: string;
  nextProjectSlug?: string;
}
