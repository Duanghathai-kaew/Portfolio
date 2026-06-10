import { CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { processIntro, processSteps } from "@/data/process";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ProcessSectionProps {
  mode: PortfolioMode;
}

export function ProcessSection({ mode }: ProcessSectionProps) {
  return (
    <SectionContainer id="process">
      <div className="space-y-12">
        <SectionHeading eyebrow="HOW I WORK" title={processIntro} />
        <div className="relative grid gap-5 lg:grid-cols-4">
          <div
            className="absolute left-8 top-10 hidden h-px w-[calc(100%-4rem)] bg-border lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <div
                className={cn(
                  "flex h-full flex-col rounded-lg border bg-card p-5 shadow-sm",
                  mode === "developer" ? "border-graphite" : "border-border"
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-md text-sm font-bold",
                      "font-heading",
                      mode === "designer"
                        ? "bg-lilac text-graphite-dark"
                        : "bg-graphite text-primary-foreground"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-5 w-5 text-lilac-dark"
                  />
                </div>
                <h3 className="mt-6 font-heading text-lg font-bold leading-tight tracking-tight text-graphite-dark">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm font-sans text-sm font-normal leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
