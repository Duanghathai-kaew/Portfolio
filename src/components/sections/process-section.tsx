"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollProgressLine } from "@/components/shared/scroll-progress-line";
import { processIntro, processSteps } from "@/data/process";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ProcessSectionProps {
  mode: PortfolioMode;
}

export function ProcessSection({ mode }: ProcessSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStepId, setActiveStepId] = useState(processSteps[0]?.id ?? "");

  return (
    <SectionContainer
      id="process"
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden",
        mode === "developer" ? "bg-graphite-dark text-primary-foreground" : "bg-background"
      )}
    >
      <div
        className={cn(
          "absolute bottom-10 left-4 hidden font-heading text-[8rem] font-bold leading-none lg:block",
          mode === "developer" ? "text-lilac/10" : "text-graphite/10"
        )}
        aria-hidden="true"
      >
        02
      </div>
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          {mode === "developer" ? (
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-lilac">
                HOW I WORK
              </p>
              <h2 className="mt-3 max-w-3xl font-heading text-3xl font-bold leading-[1.1] tracking-[-0.035em] text-primary-foreground sm:text-4xl">
                {processIntro}
              </h2>
            </div>
          ) : (
            <SectionHeading eyebrow="HOW I WORK" title={processIntro} />
          )}
        </div>
        <div className="relative pl-8 lg:pl-12">
          <div
            className={cn(
              "absolute bottom-8 left-0 top-4 w-px",
              mode === "developer" ? "bg-lilac-light/20" : "bg-border"
            )}
            aria-hidden="true"
          />
          <ScrollProgressLine targetRef={sectionRef} className="bottom-8 left-0" />
          <div className="space-y-6 lg:space-y-12">
            {processSteps.map((step, index) => (
              <ProcessStepCard
                key={step.id}
                id={step.id}
                index={index}
                title={step.title}
                description={step.description}
                mode={mode}
                isActive={activeStepId === step.id}
                onActive={setActiveStepId}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

interface ProcessStepCardProps {
  id: string;
  index: number;
  title: string;
  description: string;
  mode: PortfolioMode;
  isActive: boolean;
  onActive: (id: string) => void;
}

function ProcessStepCard({
  id,
  index,
  title,
  description,
  mode,
  isActive,
  onActive
}: ProcessStepCardProps) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { amount: 0.56, margin: "-24% 0px -24% 0px" });
  const isDeveloper = mode === "developer";

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
        "relative rounded-lg border p-5 shadow-sm transition-colors duration-300 sm:p-6",
        isActive
          ? isDeveloper
            ? "border-lilac bg-primary-foreground/10"
            : "border-graphite bg-card"
          : isDeveloper
            ? "border-lilac-light/15 bg-primary-foreground/[0.04]"
            : "border-border bg-card/80"
      )}
    >
      <span
        className={cn(
          "absolute -left-[2.55rem] top-6 h-4 w-4 rounded-full border transition-colors duration-300 lg:-left-[3.55rem]",
          isActive
            ? "border-lilac-dark bg-lilac"
            : isDeveloper
              ? "border-lilac-light/40 bg-graphite-dark"
              : "border-border bg-background"
        )}
        aria-hidden="true"
      />
      <div className="flex items-center gap-3">
        <motion.span
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-md font-heading text-sm font-bold transition-colors duration-300",
            isActive
              ? mode === "designer"
                ? "bg-lilac text-graphite-dark"
                : "bg-lilac text-graphite-dark"
              : mode === "designer"
                ? "bg-muted text-graphite"
                : "bg-primary-foreground/10 text-lilac-light"
          )}
          animate={{ scale: isActive && !shouldReduceMotion ? 1.05 : 1 }}
          transition={{ duration: 0.25 }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
        <CheckCircle2
          aria-hidden="true"
          className={cn(
            "h-5 w-5 transition-colors duration-300",
            isActive ? "text-lilac-dark" : "text-graphite-light"
          )}
        />
      </div>
      <h3
        className={cn(
          "mt-6 font-heading text-xl font-bold leading-tight tracking-tight",
          isDeveloper ? "text-primary-foreground" : "text-graphite-dark"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-3 max-w-xl font-sans text-sm font-normal leading-6",
          isDeveloper ? "text-lilac-light/80" : "text-muted-foreground"
        )}
      >
        {description}
      </p>
    </motion.article>
  );
}
