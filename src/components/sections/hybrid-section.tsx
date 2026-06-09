import { Code2, LayoutPanelTop, Workflow } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { Card } from "@/components/ui/card";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface HybridSectionProps {
  mode: PortfolioMode;
}

const values = [
  {
    title: "Product Thinking",
    description:
      "Placeholder explanation for connecting user needs, business context, and interface direction.",
    icon: Workflow
  },
  {
    title: "Feasible Design",
    description:
      "Placeholder explanation for shaping ideas around constraints, states, and practical delivery.",
    icon: LayoutPanelTop
  },
  {
    title: "Implementation Awareness",
    description:
      "Placeholder explanation for translating decisions into maintainable frontend systems.",
    icon: Code2
  }
];

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
          "grid gap-8 lg:grid-cols-[0.85fr_1.15fr]",
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
            Hybrid Value
          </p>
          <h2
            className={cn(
              "mt-3 text-3xl font-semibold leading-tight sm:text-4xl",
              mode === "developer" ? "text-primary-foreground" : "text-graphite-dark"
            )}
          >
            Design decisions with implementation reality built in.
          </h2>
          <p
            className={cn(
              "mt-4 text-base leading-7 sm:text-lg",
              mode === "developer" ? "text-lilac-light/80" : "text-muted-foreground"
            )}
          >
            This section is a placeholder for explaining why design and development
            experience can make product work clearer, faster to discuss, and easier
            to ship.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <Card
              key={value.title}
              className={cn(
                "p-5",
                mode === "developer"
                  ? "border-lilac-light/20 bg-primary-foreground/10 text-primary-foreground"
                  : "bg-card"
              )}
            >
              <value.icon
                aria-hidden="true"
                className={cn(
                  "h-6 w-6",
                  mode === "developer" ? "text-lilac" : "text-lilac-dark"
                )}
              />
              <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-6",
                  mode === "developer"
                    ? "text-lilac-light/75"
                    : "text-muted-foreground"
                )}
              >
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
