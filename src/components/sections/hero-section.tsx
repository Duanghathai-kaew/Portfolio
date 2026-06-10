import { ArrowRight, Braces, Frame, Ruler } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { profile } from "@/data/profile";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  mode: PortfolioMode;
}

export function HeroSection({ mode }: HeroSectionProps) {
  const isDesigner = mode === "designer";

  return (
    <SectionContainer id="top" className="pb-14 pt-12 sm:pt-16 lg:pb-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="inline-block max-w-full rounded-md border border-lilac-dark bg-lilac-light px-3 py-1.5 font-mono text-xs font-medium uppercase leading-6 tracking-[0.12em] text-graphite-dark">
            {profile.hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl font-heading text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-graphite-dark sm:text-6xl lg:text-7xl">
            {profile.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base font-normal leading-7 text-muted-foreground sm:text-lg">
            {profile.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-graphite-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark"
            >
              {profile.hero.primaryCtaLabel}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <button
              type="button"
              disabled
              title={profile.resume.pendingReason}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 font-sans text-sm font-semibold text-foreground opacity-60 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark disabled:cursor-not-allowed"
            >
              {profile.hero.secondaryCtaLabel}
            </button>
          </div>
          <p className="mt-4 max-w-2xl font-sans text-sm font-medium leading-6 text-graphite">
            {profile.availability}
          </p>
        </div>

        <div
          className={cn(
            "relative min-h-[34rem] overflow-hidden rounded-lg border p-4 shadow-soft sm:p-6",
            isDesigner
              ? "border-lilac-dark bg-lilac-light"
              : "border-graphite bg-graphite-dark text-primary-foreground"
          )}
          aria-label="Visual composition showing design and development interface elements"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(108,108,106,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(108,108,106,0.16)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="relative rounded-lg border border-border bg-card p-4 text-graphite-dark shadow-soft">
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
          </div>

          <div className="relative mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-background/92 p-4 text-graphite-dark shadow-sm">
              <Ruler className="h-5 w-5 text-lilac-dark" aria-hidden="true" />
              <p className="mt-4 font-sans text-sm font-semibold">Spacing System</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="h-8 w-5 rounded-sm bg-lilac" />
                <span className="h-14 w-5 rounded-sm bg-graphite" />
                <span className="h-20 w-5 rounded-sm bg-lilac-dark" />
              </div>
            </div>
            <div className="rounded-lg border border-lilac-dark/50 bg-graphite p-4 text-primary-foreground shadow-sm">
              <Braces className="h-5 w-5 text-lilac" aria-hidden="true" />
              <p className="mt-4 font-sans text-sm font-semibold">Component States</p>
              <div className="mt-4 grid gap-2">
                <span className="h-8 rounded-md bg-lilac text-graphite-dark" />
                <span className="h-8 rounded-md border border-lilac-light/40" />
              </div>
            </div>
          </div>

          <div className="relative mt-5 rounded-lg border border-border bg-card p-4 text-graphite-dark shadow-sm">
            <p className="font-sans text-sm font-semibold">
              {isDesigner ? "Designer lens" : "Developer lens"}
            </p>
            <p className="mt-2 font-sans text-sm leading-6 text-muted-foreground">
              {isDesigner
                ? "Editorial details, grid logic, and interface annotations are emphasized."
                : "Structured surfaces, code details, and implementation states are emphasized."}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
