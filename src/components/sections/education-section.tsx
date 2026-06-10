import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { educationItems } from "@/data/education";

export function EducationSection() {
  return (
    <SectionContainer id="education" className="pt-0">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="EDUCATION"
          title="A computer science foundation for practical product design."
        />
        <div className="grid gap-4">
          {educationItems.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold leading-tight tracking-tight text-graphite-dark">
                    {item.degree}
                  </h3>
                  <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-graphite">
                    {item.university}
                  </p>
                  <p className="mt-1 font-sans text-sm font-normal text-muted-foreground">
                    {item.faculty}
                  </p>
                </div>
                <p className="font-sans text-sm font-semibold text-muted-foreground">
                  {item.timeline}
                </p>
              </div>
              <p className="mt-4 max-w-2xl font-sans text-sm font-normal leading-6 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
