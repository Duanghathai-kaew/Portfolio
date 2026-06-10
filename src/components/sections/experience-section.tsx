"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { experienceItems } from "@/data/experience";
import { profile } from "@/data/profile";

export function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionContainer id="experience" className="bg-lilac-light/35">
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

        <div className="relative space-y-5">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-4 top-6 hidden w-px bg-border md:block"
          />
          {experienceItems.map((item, index) => (
            <motion.article
              key={item.id}
              data-motion
              data-reveal
              initial={false}
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { y: [10, 0], opacity: [0.98, 1] }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.32, delay: index * 0.06 }}
              className="relative rounded-lg border border-border bg-card p-5 shadow-sm md:pl-10"
            >
              <span
                className="absolute left-0 top-7 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-lilac-dark bg-lilac md:block"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-graphite">
                    {item.company}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold leading-tight tracking-tight text-graphite-dark">
                    {item.role}
                  </h3>
                </div>
                <p className="font-sans text-sm font-semibold text-muted-foreground">
                  {item.timeline}
                </p>
              </div>
              <p className="mt-4 max-w-2xl font-sans text-sm font-normal leading-6 text-muted-foreground">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
