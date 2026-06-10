"use client";

import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { processIntro, processSteps } from "@/data/process";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ProcessSectionProps {
  mode: PortfolioMode;
}

export function ProcessSection({ mode }: ProcessSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const isDeveloper = mode === "developer";

  return (
    <SectionContainer
      id="process"
      className={cn(isDeveloper ? "bg-graphite-dark text-primary-foreground" : "bg-background")}
    >
      <div className="space-y-10 lg:space-y-12">
        {isDeveloper ? (
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-lilac">
              HOW I WORK
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-[1.1] tracking-[-0.035em] text-primary-foreground sm:text-4xl">
              {processIntro}
            </h2>
          </div>
        ) : (
          <SectionHeading eyebrow="HOW I WORK" title={processIntro} />
        )}

        <div className="relative">
          <motion.span
            data-motion
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute left-0 right-0 top-6 hidden h-px lg:block",
              isDeveloper ? "bg-lilac-light/30" : "bg-border"
            )}
            initial={false}
            whileInView={shouldReduceMotion ? undefined : { scaleX: [0, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.45 }}
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.id}
                data-motion
                data-reveal
                className={cn(
                  "relative rounded-lg border p-5 shadow-sm sm:p-6",
                  isDeveloper
                    ? "border-lilac-light/20 bg-primary-foreground/[0.06]"
                    : "border-border bg-card"
                )}
                initial={false}
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : { y: [12, 0], opacity: [0.98, 1] }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.34, delay: index * 0.06 }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex h-11 w-11 items-center justify-center rounded-md font-heading text-sm font-bold",
                      isDeveloper ? "bg-lilac text-graphite-dark" : "bg-lilac-light text-graphite-dark"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <CheckCircle2
                    aria-hidden="true"
                    className={cn("h-5 w-5", isDeveloper ? "text-lilac" : "text-lilac-dark")}
                  />
                </div>
                <h3
                  className={cn(
                    "mt-5 font-heading text-xl font-bold leading-tight tracking-tight",
                    isDeveloper ? "text-primary-foreground" : "text-graphite-dark"
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 font-sans text-sm leading-6",
                    isDeveloper ? "text-lilac-light/85" : "text-muted-foreground"
                  )}
                >
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
