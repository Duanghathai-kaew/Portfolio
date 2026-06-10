import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { experienceItems } from "@/data/experience";
import { profile } from "@/data/profile";

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="Design and development work across product interfaces, systems, and websites."
          />
          <button
            type="button"
            disabled
            title={profile.resume.pendingReason}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-primary-foreground opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark disabled:cursor-not-allowed"
          >
            View Resume
          </button>
        </div>
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
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-graphite">
                      {item.company}
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-bold leading-tight tracking-tight text-graphite-dark">
                      {item.role}
                    </h3>
                  </div>
                  <p className="font-sans text-sm font-semibold text-muted-foreground">
                    {item.timeline}
                  </p>
                </div>
                <p className="mt-4 max-w-2xl font-sans text-sm font-normal leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
