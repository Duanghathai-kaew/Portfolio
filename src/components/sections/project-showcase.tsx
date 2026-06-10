"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Layers, MousePointer2, TerminalSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/shared/project-card";
import { Reveal } from "@/components/shared/reveal";
import { projects } from "@/data/projects";
import type { PortfolioMode, Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ProjectShowcaseProps {
  mode: PortfolioMode;
}

interface ProjectWaypointProps {
  projectId: string;
  onActive: (projectId: string) => void;
}

function ProjectWaypoint({ projectId, onActive }: ProjectWaypointProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.55, margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (isInView) {
      onActive(projectId);
    }
  }, [isInView, onActive, projectId]);

  return <div ref={ref} className="h-[68vh]" aria-hidden="true" />;
}

function ProjectVisual({
  project,
  mode,
  isCompact = false
}: {
  project: Project;
  mode: PortfolioMode;
  isCompact?: boolean;
}) {
  const isDesigner = mode === "designer";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border",
        isCompact ? "min-h-64" : "min-h-[32rem]",
        project.featured ? "border-lilac-dark shadow-soft" : "border-border shadow-sm",
        isDesigner ? "bg-lilac-light" : "bg-graphite-dark text-primary-foreground"
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(108,108,106,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(108,108,106,0.13)_1px,transparent_1px)] bg-[size:26px_26px]" />
      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-md border border-border/70 bg-card/90 px-3 py-2 font-mono text-xs font-medium tracking-[0.04em] text-graphite-dark shadow-sm">
        <Layers className="h-4 w-4 text-lilac-dark" />
        {isDesigner ? "Flow preview" : "Product structure"}
      </div>
      <div
        className={cn(
          "absolute left-5 right-5 rounded-lg border border-border/80 bg-card p-4 text-graphite-dark shadow-soft",
          isCompact ? "bottom-5" : "bottom-8"
        )}
      >
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
        {isDesigner ? (
          <MousePointer2 className="h-5 w-5" />
        ) : (
          <TerminalSquare className="h-5 w-5" />
        )}
      </div>
      {project.featured ? (
        <div className="absolute bottom-5 right-5 rounded-md bg-graphite px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground">
          Featured
        </div>
      ) : null}
    </div>
  );
}

export function ProjectShowcase({ mode }: ProjectShowcaseProps) {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? "");
  const shouldReduceMotion = useReducedMotion();
  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? projects[0];
  const accentClass =
    mode === "designer" || activeProject.featured
      ? "bg-lilac-light/70"
      : "bg-graphite-dark";
  const isDeveloperSurface = mode === "developer" && !activeProject.featured;

  return (
    <>
      <div className="lg:hidden">
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} mode={mode} />
            </Reveal>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "relative hidden overflow-hidden rounded-lg border transition-colors duration-500 lg:block",
          accentClass,
          isDeveloperSurface
            ? "border-graphite text-primary-foreground"
            : "border-lilac-dark/60"
        )}
      >
        <div
          className="absolute -left-10 top-16 font-heading text-[9rem] font-bold leading-none text-graphite/10"
          aria-hidden="true"
        >
          01
        </div>
        <div className="grid min-h-[230vh] gap-10 p-8 xl:grid-cols-[0.9fr_1.1fr] xl:p-10">
          <aside className="sticky top-28 h-fit self-start">
            <p
              className={cn(
                "font-mono text-xs font-semibold uppercase tracking-[0.12em]",
                isDeveloperSurface ? "text-lilac" : "text-graphite"
              )}
            >
              Active project
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.42 }}
              >
                <h3
                  className={cn(
                    "mt-4 max-w-lg font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em]",
                    isDeveloperSurface ? "text-primary-foreground" : "text-graphite-dark"
                  )}
                >
                  {activeProject.title}
                </h3>
                <p
                  className={cn(
                    "mt-4 max-w-xl font-sans text-base leading-7",
                    isDeveloperSurface ? "text-lilac-light/85" : "text-muted-foreground"
                  )}
                >
                  {activeProject.description}
                </p>
                <p
                  className={cn(
                    "mt-6 font-sans text-sm font-semibold",
                    isDeveloperSurface ? "text-lilac-light" : "text-graphite-dark"
                  )}
                >
                  {activeProject.role}
                </p>
                <motion.div
                  className="mt-5 flex flex-wrap gap-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: shouldReduceMotion ? 0 : 0.06
                      }
                    }
                  }}
                >
                  {activeProject.technologies.map((technology) => (
                    <motion.span
                      key={technology}
                      variants={{
                        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <Badge tone={isDeveloperSurface ? "muted" : "lilac"}>
                        {technology}
                      </Badge>
                    </motion.span>
                  ))}
                </motion.div>
                <button
                  type="button"
                  disabled
                  title={activeProject.ctaPendingReason}
                  className={cn(
                    "mt-8 inline-flex min-h-11 items-center gap-2 rounded-md font-sans text-sm font-semibold opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark disabled:cursor-not-allowed",
                    isDeveloperSurface ? "text-lilac-light" : "text-graphite-dark"
                  )}
                >
                  {activeProject.ctaLabel}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 grid gap-2" aria-label="Select project">
              {projects.map((project, index) => {
                const isActive = activeProject.id === project.id;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveProjectId(project.id)}
                    className={cn(
                      "flex items-center justify-between rounded-md border px-3 py-2 text-left font-sans text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark",
                      isActive
                        ? "border-graphite bg-card text-graphite-dark"
                        : "border-transparent text-graphite hover:border-border hover:bg-card/60",
                      isDeveloperSurface && !isActive ? "text-lilac-light/75" : ""
                    )}
                    aria-pressed={isActive}
                  >
                    <span>{project.title}</span>
                    <span className="font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="relative">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeProject.id}-${mode}`}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 26, scale: 0.97 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -18, scale: 0.985 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.2 : 0.46,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <ProjectVisual project={activeProject} mode={mode} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0">
              {projects.map((project) => (
                <ProjectWaypoint
                  key={project.id}
                  projectId={project.id}
                  onActive={setActiveProjectId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
