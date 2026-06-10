"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollProgressLine } from "@/components/shared/scroll-progress-line";
import { experienceItems } from "@/data/experience";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeItemId, setActiveItemId] = useState(experienceItems[0]?.id ?? "");

  return (
    <SectionContainer id="experience" ref={sectionRef} className="bg-lilac-light/35">
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
        <div className="relative space-y-6 xl:space-y-0">
          <div
            className="absolute bottom-8 left-4 top-8 w-px bg-border xl:left-1/2"
            aria-hidden="true"
          />
          <ScrollProgressLine
            targetRef={sectionRef}
            className="bottom-8 left-4 top-8 xl:left-1/2"
          />
          {experienceItems.map((item, index) => (
            <ExperienceTimelineItem
              key={item.id}
              id={item.id}
              company={item.company}
              role={item.role}
              timeline={item.timeline}
              description={item.description}
              index={index}
              isActive={activeItemId === item.id}
              onActive={setActiveItemId}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

interface ExperienceTimelineItemProps {
  id: string;
  company: string;
  role: string;
  timeline: string;
  description: string;
  index: number;
  isActive: boolean;
  onActive: (id: string) => void;
}

function ExperienceTimelineItem({
  id,
  company,
  role,
  timeline,
  description,
  index,
  isActive,
  onActive
}: ExperienceTimelineItemProps) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { amount: 0.55, margin: "-22% 0px -22% 0px" });
  const isEven = index % 2 === 0;

  useEffect(() => {
    if (isInView) {
      onActive(id);
    }
  }, [id, isInView, onActive]);

  return (
    <motion.article
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: shouldReduceMotion ? 0.18 : 0.42 }}
      className={cn(
        "relative pl-10 xl:grid xl:grid-cols-[1fr_4rem_1fr] xl:pl-0",
        !isEven ? "xl:[&>div:last-child]:col-start-3" : ""
      )}
    >
      <span
        className={cn(
          "absolute left-0 top-4 h-8 w-8 rounded-md border transition-colors duration-300 xl:left-1/2 xl:-translate-x-1/2",
          isActive
            ? "border-lilac-dark bg-lilac shadow-soft"
            : "border-border bg-background"
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "rounded-lg border p-5 shadow-sm transition-colors duration-300 xl:col-start-1",
          isEven ? "" : "xl:col-start-3",
          isActive ? "border-graphite bg-card" : "border-border bg-card/80"
        )}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between xl:flex-col">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-graphite">
              {company}
            </p>
            <h3 className="mt-2 font-heading text-xl font-bold leading-tight tracking-tight text-graphite-dark">
              {role}
            </h3>
          </div>
          <p className="font-sans text-sm font-semibold text-muted-foreground">
            {timeline}
          </p>
        </div>
        <p className="mt-4 max-w-2xl font-sans text-sm font-normal leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
