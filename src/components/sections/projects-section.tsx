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
          eyebrow="SELECTED WORK"
          title="Projects where I combine UX thinking, interface design, and technical understanding to create practical digital products."
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
