import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { profile } from "@/data/profile";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface HybridSectionProps {
  mode: PortfolioMode;
}

export function HybridSection({ mode }: HybridSectionProps) {
  return (
    <SectionContainer
      id="about"
      className={cn(
        mode === "designer" ? "bg-lilac-light/70" : "bg-graphite-dark"
      )}
    >
      <div
        className={cn(
          "grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end",
          mode === "developer" ? "text-primary-foreground" : ""
        )}
      >
        <div>
          <p
            className={cn(
              "text-sm font-semibold uppercase tracking-[0.18em]",
              mode === "developer" ? "text-lilac" : "text-graphite"
            )}
          >
            {profile.about.eyebrow}
          </p>
          <h2
            className={cn(
              "mt-3 text-3xl font-semibold leading-tight sm:text-4xl",
              mode === "developer" ? "text-primary-foreground" : "text-graphite-dark"
            )}
          >
            {profile.about.headline}
          </h2>
        </div>
        <div
          className={cn(
            "rounded-lg border p-6 shadow-sm sm:p-8",
            mode === "developer"
              ? "border-lilac-light/20 bg-primary-foreground/10"
              : "border-lilac-dark/50 bg-card"
          )}
        >
          <p
            className={cn(
              "mt-4 text-base leading-7 sm:text-lg",
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
                "font-semibold",
                mode === "developer" ? "text-lilac" : "text-graphite"
              )}
            >
              {profile.shortName}
            </span>
            <a
              href="#work"
              className={cn(
                "inline-flex items-center gap-2 rounded-md font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark",
                mode === "developer" ? "text-lilac-light" : "text-graphite-dark"
              )}
            >
              View selected work
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
