"use client";

import { SectionContainer } from "@/components/layout/section-container";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import type { PortfolioMode } from "@/types/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HybridSectionProps {
  mode: PortfolioMode;
}

export function HybridSection({ mode }: HybridSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const headlinePhrases = [
    "Designing with users in mind",
    "—and development in sight.",
  ];

  return (
    <SectionContainer
      id="about"
      className={cn(
        "relative",
        mode === "designer" ? "bg-lilac-light/70" : "bg-graphite-dark",
      )}
    >
      <div
        className={cn(
          "absolute right-4 top-10 hidden font-heading text-[8rem] font-bold leading-none lg:block",
          mode === "developer" ? "text-lilac/10" : "text-graphite/10",
        )}
        aria-hidden="true"
      >
        ABOUT
      </div>
      <div
        className={cn(
          "grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end",
          mode === "developer" ? "text-primary-foreground" : "",
        )}
      >
        <div>
          <p
            className={cn(
              "font-mono text-xs font-medium uppercase tracking-[0.12em]",
              mode === "developer" ? "text-lilac" : "text-graphite",
            )}
          >
            {profile.about.eyebrow}
          </p>
          <h2
            aria-label={profile.about.headline}
            className={cn(
              "mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl",
              mode === "developer"
                ? "text-primary-foreground"
                : "text-graphite-dark",
            )}
          >
            {headlinePhrases.map((phrase, index) => (
              <motion.span
                key={phrase}
                className="block"
                initial={false}
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : { y: [8, 0], opacity: [0.98, 1] }
                }
                viewport={{ amount: 0.55, once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.3,
                  delay: index * 0.06,
                }}
                data-motion
                data-reveal
              >
                {index === 0 ? phrase : phrase}
              </motion.span>
            ))}
          </h2>
        </div>
        <motion.div
          data-motion
          data-reveal
          className={cn(
            "rounded-lg border p-6 shadow-sm sm:p-8",
            mode === "developer"
              ? "border-lilac-light/20 bg-primary-foreground/10"
              : "border-lilac-dark/50 bg-card",
          )}
          initial={false}
          whileInView={
            shouldReduceMotion ? undefined : { y: [10, 0], opacity: [0.98, 1] }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.34 }}
        >
          <p
            className={cn(
              "mt-4 max-w-2xl font-sans text-base font-normal leading-7 sm:text-lg",
              mode === "developer"
                ? "text-lilac-light/80"
                : "text-muted-foreground",
            )}
          >
            {profile.about.body}
          </p>
          <div
            className={cn(
              "mt-6 flex flex-col gap-3 border-t pt-5 text-sm sm:flex-row sm:items-center sm:justify-between",
              mode === "developer" ? "border-lilac-light/20" : "border-border",
            )}
          >
            <span
              className={cn(
                "font-sans font-semibold",
                mode === "developer" ? "text-lilac" : "text-graphite",
              )}
            >
              {profile.shortName}
            </span>
            <a
              href="#work"
              className={cn(
                "inline-flex items-center gap-2 rounded-md font-sans font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark",
                mode === "developer"
                  ? "text-lilac-light"
                  : "text-graphite-dark",
              )}
            >
              View selected work
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
