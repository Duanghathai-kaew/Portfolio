import type { CaseStudyTextSection } from "@/types/case-study";

interface CaseStudySectionProps {
  section: CaseStudyTextSection;
  tone?: "default" | "accent";
}

export function CaseStudySection({
  section,
  tone = "default",
}: CaseStudySectionProps) {
  return (
    <section
      id={section.id}
      className={
        tone === "accent"
          ? "border-t border-foreground/15 bg-[#E8CCD8]/35 py-20 lg:py-28"
          : "border-t border-foreground/15 bg-background py-20 lg:py-28"
      }
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-3">
          {section.eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {section.eyebrow}
            </p>
          )}
        </div>

        <div className="lg:col-span-9">
          <h2 className="max-w-4xl font-heading text-3xl font-bold leading-tight tracking-[-0.03em] md:text-5xl">
            {section.title}
          </h2>

          {section.description && (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              {section.description}
            </p>
          )}

          {section.paragraphs && (
            <div className="mt-8 max-w-3xl space-y-5">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {section.bullets && (
            <ul className="mt-10 grid gap-0 md:grid-cols-2 md:gap-x-8">
              {section.bullets.map((item) => (
                <li
                  key={item}
                  className="border-t border-foreground/15 py-4 leading-7"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
