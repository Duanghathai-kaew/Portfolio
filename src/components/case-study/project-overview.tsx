import type { CaseStudyMeta } from "@/types/case-study";

interface ProjectOverviewProps {
  items: CaseStudyMeta[];
}

export function ProjectOverview({ items }: ProjectOverviewProps) {
  return (
    <section className="border-b border-foreground/15 bg-background">
      <div className="mx-auto grid w-full max-w-7xl gap-0 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="border-t border-foreground/15 py-6 md:px-6 md:first:pl-0 lg:border-l lg:border-t-0"
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {item.label}
            </p>

            <p className="mt-3 max-w-sm font-medium leading-7">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
