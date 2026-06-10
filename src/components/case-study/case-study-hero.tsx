import type { CaseStudy } from "@/types/case-study";

interface CaseStudyHeroProps {
  project: CaseStudy;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <header className="bg-[#E8CCD8]/45 pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/70">
          {project.category}
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-4xl text-xl leading-8 md:text-2xl">
              {project.subtitle}
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-xl leading-8 text-muted-foreground">
              {project.summary}
            </p>

            {project.status && (
              <p className="mt-6 border-t border-foreground/20 pt-4 text-sm font-medium">
                {project.status}
              </p>
            )}
          </div>
        </div>

        <div className="relative mt-14 flex aspect-[16/8] w-full items-center justify-center overflow-hidden border border-foreground/20 bg-background">
          {" "}
          {project.heroImage ? (
            <img
              src={project.heroImage}
              alt={`${project.title} project preview`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="text-center">
              <p className="font-heading text-lg font-semibold">
                Project hero image
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Add IDEACREW overview image later
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
