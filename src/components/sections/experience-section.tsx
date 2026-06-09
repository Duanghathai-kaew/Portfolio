import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { experienceItems } from "@/data/experience";

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Experience"
          title="A clean timeline prepared for real roles and contributions."
          description="Each entry uses placeholder fields only. Replace them with verified experience when ready."
        />
        <div className="relative space-y-5">
          <div
            className="absolute bottom-8 left-4 top-8 w-px bg-border"
            aria-hidden="true"
          />
          {experienceItems.map((item) => (
            <article key={item.id} className="relative pl-10">
              <span
                className="absolute left-0 top-4 h-8 w-8 rounded-md border border-lilac-dark bg-lilac"
                aria-hidden="true"
              />
              <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-graphite">
                      {item.company}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-graphite-dark">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    {item.timeline}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} tone="lilac">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
