import { SectionContainer } from "@/components/layout/section-container";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { SectionHeading } from "@/components/shared/section-heading";
import type { PortfolioMode } from "@/types/portfolio";

interface ProjectsSectionProps {
  mode: PortfolioMode;
}

export function ProjectsSection({ mode }: ProjectsSectionProps) {
  return (
    <SectionContainer id="work" className="bg-background">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects where I combine UX thinking, interface design, and technical understanding to create practical digital products."
        />
        <ProjectShowcase mode={mode} />
      </div>
    </SectionContainer>
  );
}
