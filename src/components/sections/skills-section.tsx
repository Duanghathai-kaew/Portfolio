import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SkillBadge } from "@/components/shared/skill-badge";
import { Card } from "@/components/ui/card";
import { getOrderedSkillGroups } from "@/data/skills";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface SkillsSectionProps {
  mode: PortfolioMode;
}

export function SkillsSection({ mode }: SkillsSectionProps) {
  const orderedGroups = getOrderedSkillGroups(mode);

  return (
    <SectionContainer id="capabilities">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="WHAT I DO"
          title="From research to interface—and from interface to implementation."
          description="A concise view of the capabilities I use to connect product thinking, interface design, and practical development."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {orderedGroups.map((group) => (
            <Card
              key={group.id}
              className={cn(
                "p-5",
                mode === "developer" &&
                  group.id === "frontend-product-development"
                  ? "border-graphite bg-graphite-dark text-primary-foreground"
                  : ""
              )}
            >
              <h3
                className={cn(
                  "font-heading text-lg font-bold leading-tight tracking-tight text-graphite-dark",
                  mode === "developer" &&
                    group.id === "frontend-product-development"
                    ? "text-primary-foreground"
                    : ""
                )}
              >
                {group.title}
              </h3>
              <p
                className={cn(
                  "mt-3 max-w-sm font-sans text-sm font-normal leading-6 text-muted-foreground",
                  mode === "developer" &&
                    group.id === "frontend-product-development"
                    ? "text-lilac-light/80"
                    : ""
                )}
              >
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
