"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/data/projects";
import type { PortfolioMode } from "@/types/portfolio";

interface ProjectShowcaseProps {
  mode: PortfolioMode;
}

export function ProjectShowcase({ mode }: ProjectShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const secondaryProjects = projects.filter((project) => project.id !== featuredProject.id);

  return (
    <div className="grid gap-5 lg:gap-6">
      <motion.div
        data-motion
        data-reveal
        initial={false}
        whileInView={shouldReduceMotion ? undefined : { y: [6, 0], opacity: [0.98, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.3 }}
      >
        <ProjectCard project={featuredProject} mode={mode} />
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {secondaryProjects.map((project, index) => (
          <motion.div
            key={project.id}
            data-motion
            data-reveal
            initial={false}
            whileInView={
              shouldReduceMotion
                ? undefined
                : { y: [8, 0], opacity: [0.98, 1] }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.32, delay: index * 0.05 }}
          >
            <ProjectCard project={project} mode={mode} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
