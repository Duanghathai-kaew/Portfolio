import { ArrowUpRight, Layers, MousePointer2, TerminalSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { PortfolioMode, Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  mode: PortfolioMode;
}

export function ProjectCard({ project, mode }: ProjectCardProps) {
  const emphasis =
    mode === "designer" ? project.designerEmphasis : project.developerEmphasis;

  return (
    <Card
      className={cn(
        "group overflow-hidden transition-transform duration-300 hover:-translate-y-1",
        project.featured ? "lg:col-span-2" : ""
      )}
    >
      <div
        className={cn(
          "grid gap-6 p-5 sm:p-6",
          project.featured ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
        )}
      >
        <div
          className={cn(
            "relative min-h-64 overflow-hidden rounded-md border border-border",
            mode === "designer"
              ? "bg-lilac-light"
              : "bg-graphite-dark text-primary-foreground"
          )}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(108,108,106,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(108,108,106,0.13)_1px,transparent_1px)] bg-[size:26px_26px]" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-md border border-border/70 bg-card/90 px-3 py-2 text-xs font-semibold text-graphite-dark shadow-sm">
            <Layers className="h-4 w-4 text-lilac-dark" />
            Component Preview
          </div>
          <div className="absolute bottom-6 left-5 right-5 rounded-lg border border-border/80 bg-card p-4 text-graphite-dark shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="h-2 w-20 rounded-full bg-lilac-dark" />
                <div className="mt-3 h-2 w-36 rounded-full bg-muted" />
              </div>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-md bg-graphite" />
                <div className="h-8 w-8 rounded-md bg-lilac" />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="h-14 rounded-md bg-muted" />
              <div className="h-14 rounded-md bg-lilac-light" />
              <div className="h-14 rounded-md bg-muted" />
            </div>
          </div>
          <div className="absolute right-6 top-16 rounded-md border border-lilac-dark/60 bg-background/90 p-3 text-graphite-dark shadow-sm">
            {mode === "designer" ? (
              <MousePointer2 className="h-5 w-5" />
            ) : (
              <TerminalSquare className="h-5 w-5" />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-graphite">
              {project.category}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-graphite-dark">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
            <p className="mt-4 rounded-md border border-border bg-muted p-3 text-sm leading-6 text-foreground">
              {emphasis}
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold text-graphite-dark">
              {project.role}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge key={technology} tone="lilac">
                  {technology}
                </Badge>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-graphite-dark transition-colors hover:text-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark"
            >
              View Case Study
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
