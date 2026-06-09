import { SectionContainer } from "@/components/layout/section-container";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";
import type { PortfolioMode } from "@/types/portfolio";

interface ProjectsSectionProps {
  mode: PortfolioMode;
}

export function ProjectsSection({ mode }: ProjectsSectionProps) {
  return (
    <SectionContainer id="work">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Placeholder projects shaped around problems, decisions, and delivery."
          description="Each project card is ready for real case study content later. For now, the content stays generic and clearly labeled."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} mode={mode} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
