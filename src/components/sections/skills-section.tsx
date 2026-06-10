"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SkillBadge } from "@/components/shared/skill-badge";
import { getOrderedSkillGroups } from "@/data/skills";
import type { PortfolioMode, SkillGroupId } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface SkillsSectionProps {
  mode: PortfolioMode;
}

export function SkillsSection({ mode }: SkillsSectionProps) {
  const orderedGroups = getOrderedSkillGroups(mode);
  const shouldReduceMotion = useReducedMotion();
  const defaultActiveId: SkillGroupId =
    mode === "designer" ? "ux-product-design" : "frontend-product-development";
  const [activeGroupId, setActiveGroupId] = useState<SkillGroupId>(defaultActiveId);

  useEffect(() => {
    setActiveGroupId(defaultActiveId);
  }, [defaultActiveId]);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    groupId: SkillGroupId
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveGroupId(groupId);
    }
  };

  return (
    <SectionContainer id="capabilities" className="bg-lilac-light/45">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="WHAT I DO"
          title="From research to interface—and from interface to implementation."
          description="A concise view of the capabilities I use to connect product thinking, interface design, and practical development."
        />

        <div className="hidden gap-4 lg:flex">
          {orderedGroups.map((group) => (
            <motion.article
              key={group.id}
              tabIndex={0}
              role="button"
              aria-pressed={activeGroupId === group.id}
              onMouseEnter={() => setActiveGroupId(group.id)}
              onFocus={() => setActiveGroupId(group.id)}
              onClick={() => setActiveGroupId(group.id)}
              onKeyDown={(event) => handleKeyDown(event, group.id)}
              className={cn(
                "min-h-[26rem] cursor-default rounded-lg border p-6 shadow-sm transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark",
                activeGroupId === group.id
                  ? "border-graphite bg-graphite-dark text-primary-foreground"
                  : "border-border bg-card text-foreground"
              )}
              animate={{
                flex: activeGroupId === group.id ? 1.22 : 0.9,
                y: activeGroupId === group.id && !shouldReduceMotion ? -4 : 0
              }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.36 }}
            >
              <p
                className={cn(
                  "font-mono text-xs font-semibold uppercase tracking-[0.12em]",
                  activeGroupId === group.id ? "text-lilac" : "text-graphite"
                )}
              >
                Capability
              </p>
              <h3
                className={cn(
                  "mt-5 font-heading text-2xl font-bold leading-tight tracking-tight text-graphite-dark",
                  activeGroupId === group.id
                    ? "text-primary-foreground"
                    : ""
                )}
              >
                {group.title}
              </h3>
              <p
                className={cn(
                  "mt-4 max-w-sm font-sans text-sm font-normal leading-6 text-muted-foreground",
                  activeGroupId === group.id
                    ? "text-lilac-light/80"
                    : ""
                )}
              >
                {group.description}
              </p>
              <AnimatePresence initial={false}>
                {activeGroupId === group.id ? (
                  <motion.div
                    className="mt-8 flex flex-wrap gap-2"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: shouldReduceMotion ? 0 : 0.045
                        }
                      }
                    }}
                  >
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={{
                          hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.28 }}
                      >
                        <SkillBadge label={skill} />
                      </motion.span>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-3 lg:hidden">
          {orderedGroups.map((group) => {
            const isExpanded = activeGroupId === group.id;

            return (
              <article
                key={group.id}
                className="rounded-lg border border-border bg-card shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 rounded-lg px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark"
                  aria-expanded={isExpanded}
                  onClick={() => setActiveGroupId(group.id)}
                >
                  <span className="font-heading text-lg font-bold leading-tight tracking-tight text-graphite-dark">
                    {group.title}
                  </span>
                  <span className="font-mono text-xs font-semibold text-graphite">
                    {isExpanded ? "Open" : "View"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isExpanded ? (
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                      transition={{ duration: shouldReduceMotion ? 0.15 : 0.28 }}
                      className="px-5 pb-5"
                    >
                      <p className="max-w-sm font-sans text-sm leading-6 text-muted-foreground">
                        {group.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <SkillBadge key={skill} label={skill} />
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
