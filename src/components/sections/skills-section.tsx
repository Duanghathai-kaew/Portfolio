import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SkillBadge } from "@/components/shared/skill-badge";
import { Card } from "@/components/ui/card";
import { getOrderedSkillGroups } from "@/data/skills";
import type { PortfolioMode } from "@/types/portfolio";

interface SkillsSectionProps {
  mode: PortfolioMode;
}

export function SkillsSection({ mode }: SkillsSectionProps) {
  const orderedGroups = getOrderedSkillGroups(mode);

  return (
    <SectionContainer>
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Skills"
          title="Structured skills with the active mode changing the emphasis."
          description="Designer mode surfaces UX and interface groups first. Developer mode surfaces implementation and data groups first."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {orderedGroups.map((group) => (
            <Card key={group.id} className="p-5">
              <h3 className="text-lg font-semibold text-graphite-dark">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {group.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
