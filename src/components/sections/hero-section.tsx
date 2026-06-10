"use client";

import { ArrowRight, Braces, Frame, Ruler } from "lucide-react";
import { useEffect, useState, type PointerEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { profile } from "@/data/profile";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  mode: PortfolioMode;
}

export function HeroSection({ mode }: HeroSectionProps) {
  const isDesigner = mode === "designer";
  const shouldReduceMotion = useReducedMotion();
  const [supportsPointerMotion, setSupportsPointerMotion] = useState(false);
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });
  const headlineParts = profile.hero.headline
    .split(". ")
    .map((part, index, parts) => (index < parts.length - 1 ? `${part}.` : part));

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updatePointerSupport = () => {
      setSupportsPointerMotion(query.matches);
    };

    updatePointerSupport();
    query.addEventListener("change", updatePointerSupport);

    return () => {
      query.removeEventListener("change", updatePointerSupport);
    };
  }, []);

  const canUsePointerMotion = supportsPointerMotion && !shouldReduceMotion;

  const handleCanvasPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!canUsePointerMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;

    setPointerOffset({ x, y });
  };

  const resetCanvasPointer = () => {
    setPointerOffset({ x: 0, y: 0 });
  };

  return (
    <SectionContainer
      id="top"
      className="relative overflow-hidden pb-14 pt-12 sm:pt-16 lg:pb-20"
    >
      <div
        className="absolute inset-x-0 top-0 h-px origin-left bg-graphite/30 motion-safe:animate-[section-rule_700ms_ease-out_both]"
        aria-hidden="true"
      />
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <motion.p
            className="inline-block max-w-full rounded-md border border-lilac-dark bg-lilac-light px-3 py-1.5 font-mono text-xs font-medium uppercase leading-6 tracking-[0.12em] text-graphite-dark"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {profile.hero.eyebrow}
          </motion.p>
          <h1 className="mt-6 max-w-4xl font-heading text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-graphite-dark sm:text-6xl lg:text-7xl">
            <span className="sr-only">{profile.hero.headline}</span>
            <span aria-hidden="true" className="block">
              {headlineParts.map((part, index) => (
                <motion.span
                  key={part}
                  className="block"
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.52,
                    delay: shouldReduceMotion ? 0 : 0.08 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {part}
                </motion.span>
              ))}
            </span>
          </h1>
          <motion.p
            className="mt-6 max-w-2xl font-sans text-base font-normal leading-7 text-muted-foreground sm:text-lg"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.26 }}
          >
            {profile.hero.description}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: shouldReduceMotion ? 0 : 0.34,
                  staggerChildren: shouldReduceMotion ? 0 : 0.08
                }
              }
            }}
          >
            <motion.a
              href="#work"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-graphite-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark"
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.35 }}
            >
              {profile.hero.primaryCtaLabel}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </motion.a>
            <motion.button
              type="button"
              disabled
              title={profile.resume.pendingReason}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 font-sans text-sm font-semibold text-foreground opacity-60 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark disabled:cursor-not-allowed"
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
                visible: { opacity: 0.6, y: 0 }
              }}
              transition={{ duration: 0.35 }}
            >
              {profile.hero.secondaryCtaLabel}
            </motion.button>
          </motion.div>
          <motion.p
            className="mt-4 max-w-2xl font-sans text-sm font-medium leading-6 text-graphite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : 0.46 }}
          >
            {profile.availability}
          </motion.p>
        </div>

        <motion.div
          className={cn(
            "relative min-h-[34rem] overflow-hidden rounded-lg border p-4 shadow-soft transition-colors duration-500 sm:p-6",
            isDesigner
              ? "border-lilac-dark bg-lilac-light"
              : "border-graphite bg-graphite-dark text-primary-foreground"
          )}
          aria-label="Visual composition showing design and development interface elements"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.98 }}
          animate={{
            opacity: 1,
            y: shouldReduceMotion ? 0 : [0, -5, 0],
            scale: 1,
            x: pointerOffset.x,
            rotateX: canUsePointerMotion ? pointerOffset.y * -0.18 : 0,
            rotateY: canUsePointerMotion ? pointerOffset.x * 0.18 : 0
          }}
          transition={{
            opacity: { duration: 0.45, delay: shouldReduceMotion ? 0 : 0.28 },
            scale: { duration: 0.45, delay: shouldReduceMotion ? 0 : 0.28 },
            y: shouldReduceMotion
              ? { duration: 0.01 }
              : { duration: 6, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 0.25 },
            rotateX: { duration: 0.25 },
            rotateY: { duration: 0.25 }
          }}
          onPointerMove={handleCanvasPointerMove}
          onPointerLeave={resetCanvasPointer}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(108,108,106,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(108,108,106,0.16)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <motion.div
            className="relative rounded-lg border border-border bg-card p-4 text-graphite-dark shadow-soft"
            animate={
              shouldReduceMotion
                ? undefined
                : { x: pointerOffset.x * -0.24, y: pointerOffset.y * -0.24 }
            }
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-lilac-dark" />
                <span className="h-3 w-3 rounded-full bg-graphite-light" />
                <span className="h-3 w-3 rounded-full bg-muted" />
              </div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em]">
                Product Canvas
              </p>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-[0.8fr_1fr]">
              <div className="rounded-md bg-muted p-4">
                <Frame className="h-5 w-5 text-graphite" aria-hidden="true" />
                <div className="mt-5 h-2 w-24 rounded-full bg-lilac-dark" />
                <div className="mt-3 h-2 w-32 rounded-full bg-graphite-light" />
                <div className="mt-3 h-16 rounded-md bg-card" />
              </div>
              <div className="rounded-md bg-graphite-dark p-4 font-mono text-xs leading-5 text-lilac-light">
                <p>type Mode = &quot;designer&quot; | &quot;developer&quot;;</p>
                <p className="mt-3 text-lilac">const focus = mode.variant;</p>
                <p className="mt-3 text-primary-foreground/80">
                  render(ProductExperience);
                </p>
              </div>
            </div>
          </motion.div>

          <div className="relative mt-5 grid gap-4 sm:grid-cols-2">
            <motion.div
              className="rounded-lg border border-border bg-background/92 p-4 text-graphite-dark shadow-sm"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { x: pointerOffset.x * 0.18, y: pointerOffset.y * 0.18 }
              }
              transition={{ duration: 0.25 }}
            >
              <Ruler className="h-5 w-5 text-lilac-dark" aria-hidden="true" />
              <p className="mt-4 font-sans text-sm font-semibold">Spacing System</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="h-8 w-5 rounded-sm bg-lilac" />
                <span className="h-14 w-5 rounded-sm bg-graphite" />
                <span className="h-20 w-5 rounded-sm bg-lilac-dark" />
              </div>
            </motion.div>
            <motion.div
              className="rounded-lg border border-lilac-dark/50 bg-graphite p-4 text-primary-foreground shadow-sm"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { x: pointerOffset.x * -0.14, y: pointerOffset.y * -0.14 }
              }
              transition={{ duration: 0.25 }}
            >
              <Braces className="h-5 w-5 text-lilac" aria-hidden="true" />
              <p className="mt-4 font-sans text-sm font-semibold">Component States</p>
              <div className="mt-4 grid gap-2">
                <span className="h-8 rounded-md bg-lilac text-graphite-dark" />
                <span className="h-8 rounded-md border border-lilac-light/40" />
              </div>
            </motion.div>
          </div>

          <motion.div
            key={mode}
            className="relative mt-5 rounded-lg border border-border bg-card p-4 text-graphite-dark shadow-sm"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32 }}
          >
            <p className="font-sans text-sm font-semibold">
              {isDesigner ? "Designer lens" : "Developer lens"}
            </p>
            <p className="mt-2 font-sans text-sm leading-6 text-muted-foreground">
              {isDesigner
                ? "Editorial details, grid logic, and interface annotations are emphasized."
                : "Structured surfaces, code details, and implementation states are emphasized."}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
