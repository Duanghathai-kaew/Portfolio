import { notFound } from "next/navigation";

import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { ProjectOverview } from "@/components/case-study/project-overview";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <CaseStudyHero project={project} />

      <ProjectOverview items={project.overview} />

      {project.background && <CaseStudySection section={project.background} />}

      {project.problem && (
        <CaseStudySection section={project.problem} tone="accent" />
      )}

      {project.goals && <CaseStudySection section={project.goals} />}

      {project.role && (
        <CaseStudySection section={project.role} tone="accent" />
      )}
    </main>
  );
}

export function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}
