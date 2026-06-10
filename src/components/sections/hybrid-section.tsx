"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { profile } from "@/data/profile";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface HybridSectionProps {
  mode: PortfolioMode;
}

export function HybridSection({ mode }: HybridSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [28, -20]);
  const headlinePhrases = ["Designing with users in mind", "—and development in sight."];

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const updateDesktop = () => {
      setIsDesktop(query.matches);
    };

    updateDesktop();
    query.addEventListener("change", updateDesktop);

    return () => {
      query.removeEventListener("change", updateDesktop);
    };
  }, []);

  return (
    <SectionContainer
      id="about"
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden",
        mode === "designer" ? "bg-lilac-light/70" : "bg-graphite-dark"
      )}
    >
      <div
        className={cn(
          "absolute right-4 top-10 hidden font-heading text-[8rem] font-bold leading-none lg:block",
          mode === "developer" ? "text-lilac/10" : "text-graphite/10"
        )}
        aria-hidden="true"
      >
        ABOUT
      </div>
      <div
        className={cn(
          "grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end",
          mode === "developer" ? "text-primary-foreground" : ""
        )}
      >
        <div>
          <p
            className={cn(
              "font-mono text-xs font-medium uppercase tracking-[0.12em]",
              mode === "developer" ? "text-lilac" : "text-graphite"
            )}
          >
            {profile.about.eyebrow}
          </p>
          <h2
            aria-label={profile.about.headline}
            className={cn(
              "mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl",
              mode === "developer" ? "text-primary-foreground" : "text-graphite-dark"
            )}
          >
            {headlinePhrases.map((phrase, index) => (
              <motion.span
                key={phrase}
                className="block"
                initial={{
                  color: mode === "developer" ? "rgba(245,232,237,0.62)" : "#6c6c6a"
                }}
                whileInView={{
                  color: mode === "developer" ? "#ffffff" : "#3f3f3d"
                }}
                viewport={{ amount: 0.72, once: false }}
                transition={{ duration: shouldReduceMotion ? 0.15 : 0.42 }}
              >
                {index === 0 ? phrase : phrase}
              </motion.span>
            ))}
          </h2>
        </div>
        <motion.div
          className={cn(
            "rounded-lg border p-6 shadow-sm sm:p-8",
            mode === "developer"
              ? "border-lilac-light/20 bg-primary-foreground/10"
              : "border-lilac-dark/50 bg-card"
          )}
          style={isDesktop && !shouldReduceMotion ? { y: cardY } : undefined}
        >
          <p
            className={cn(
              "mt-4 max-w-2xl font-sans text-base font-normal leading-7 sm:text-lg",
              mode === "developer" ? "text-lilac-light/80" : "text-muted-foreground"
            )}
          >
            {profile.about.body}
          </p>
          <div
            className={cn(
              "mt-6 flex flex-col gap-3 border-t pt-5 text-sm sm:flex-row sm:items-center sm:justify-between",
              mode === "developer" ? "border-lilac-light/20" : "border-border"
            )}
          >
            <span
              className={cn(
                "font-sans font-semibold",
                mode === "developer" ? "text-lilac" : "text-graphite"
              )}
            >
              {profile.shortName}
            </span>
            <a
              href="#work"
              className={cn(
                "inline-flex items-center gap-2 rounded-md font-sans font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark",
                mode === "developer" ? "text-lilac-light" : "text-graphite-dark"
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
