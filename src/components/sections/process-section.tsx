import { CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ProcessSectionProps {
  mode: PortfolioMode;
}

const steps = [
  {
    title: "Uncover the Why",
    description:
      "Placeholder description for understanding the problem, user needs, and product context."
  },
  {
    title: "Connect the Dots",
    description:
      "Placeholder description for turning research, constraints, and flows into a clear direction."
  },
  {
    title: "Pixels Meet Code",
    description:
      "Placeholder description for aligning visual design with component behavior and states."
  },
  {
    title: "Real-World Ready",
    description:
      "Placeholder description for refining responsive details, accessibility, and handoff."
  }
];

export function ProcessSection({ mode }: ProcessSectionProps) {
  return (
    <SectionContainer id="process">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Working Process"
          title="A simple path from problem framing to implementation-ready UI."
          description="The process content is intentionally generic and ready to be replaced with real examples."
        />
        <div className="relative grid gap-5 lg:grid-cols-4">
          <div
            className="absolute left-8 top-10 hidden h-px w-[calc(100%-4rem)] bg-border lg:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
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
                <h3 className="mt-6 text-lg font-semibold text-graphite-dark">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
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
