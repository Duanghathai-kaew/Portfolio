"use client";

import { ExternalLink, Mail, MapPin, User } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { profile } from "@/data/profile";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  mode: PortfolioMode;
}

export function ContactSection({ mode }: ContactSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionContainer id="contact" className="overflow-hidden bg-background pb-20">
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border p-6 shadow-soft sm:p-8 lg:p-10",
          mode === "designer"
            ? "border-lilac-dark bg-lilac-light"
            : "border-graphite bg-graphite-dark text-primary-foreground"
        )}
      >
        <motion.div
          className={cn(
            "absolute -right-20 -top-20 h-64 w-64 rounded-full border",
            mode === "designer" ? "border-lilac-dark/35" : "border-lilac/25"
          )}
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : { scale: [1, 1.04, 1], rotate: [0, 4, 0] }
          }
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={cn(
            "absolute bottom-8 right-8 h-24 w-24 rounded-lg",
            mode === "designer" ? "bg-card/45" : "bg-primary-foreground/10"
          )}
          aria-hidden="true"
          animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <motion.p
              className={cn(
                "font-mono text-xs font-medium uppercase tracking-[0.12em]",
                mode === "developer" ? "text-lilac" : "text-graphite"
              )}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.25 }}
            >
              {profile.contact.eyebrow}
            </motion.p>
            <motion.h2
              className={cn(
                "mt-3 max-w-3xl font-heading text-3xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-5xl",
                mode === "developer" ? "text-primary-foreground" : "text-graphite-dark"
              )}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.52 }}
            >
              {profile.contact.headline}
            </motion.h2>
            <motion.p
              className={cn(
                "mt-5 max-w-2xl font-sans text-base font-normal leading-7 sm:text-lg",
                mode === "developer" ? "text-lilac-light/80" : "text-muted-foreground"
              )}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.4, delay: 0.08 }}
            >
              {profile.contact.description}
            </motion.p>
            <motion.dl
              className={cn(
                "mt-6 grid gap-3 font-sans text-sm font-normal leading-6 sm:grid-cols-3",
                mode === "developer" ? "text-lilac-light/80" : "text-muted-foreground"
              )}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.07,
                    delayChildren: shouldReduceMotion ? 0 : 0.16
                  }
                }
              }}
            >
              <motion.div
                className="flex items-center gap-2"
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <User aria-hidden="true" className="h-4 w-4 shrink-0" />
                <div>
                  <dt className="sr-only">Name</dt>
                  <dd>{profile.name}</dd>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                <div>
                  <dt className="sr-only">Location</dt>
                  <dd>{profile.location}</dd>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>{profile.email}</dd>
                </div>
              </motion.div>
            </motion.dl>
          </div>
          <motion.div
            className="relative z-10 flex flex-col gap-3"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.44, delay: 0.18 }}
          >
            <MagneticButton
              href={`mailto:${profile.email}`}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 font-sans text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark",
                mode === "developer"
                  ? "bg-lilac text-graphite-dark hover:bg-lilac-light"
                  : "bg-primary text-primary-foreground hover:bg-graphite-dark"
              )}
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              {profile.contact.primaryCtaLabel}
            </MagneticButton>
            <button
              type="button"
              disabled
              title={profile.linkedIn.pendingReason}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-2.5 font-sans text-sm font-semibold opacity-60 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark disabled:cursor-not-allowed",
                mode === "developer"
                  ? "border-lilac-light/40 text-lilac-light hover:bg-lilac-light hover:text-graphite-dark"
                  : "border-border bg-card text-foreground hover:border-lilac-dark hover:bg-card"
              )}
            >
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
              {profile.linkedIn.label}
            </button>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
