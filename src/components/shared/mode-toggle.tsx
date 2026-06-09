"use client";

import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  mode: PortfolioMode;
  onModeChange: (mode: PortfolioMode) => void;
  className?: string;
}

const options: PortfolioMode[] = ["designer", "developer"];

export function ModeToggle({ mode, onModeChange, className }: ModeToggleProps) {
  return (
    <div
      className={cn(
        "inline-flex rounded-lg border border-border bg-card p-1 shadow-sm",
        className
      )}
      aria-label="Portfolio viewing mode"
    >
      {options.map((option) => {
        const isActive = mode === option;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onModeChange(option)}
            className={cn(
              "min-h-9 rounded-md px-3 text-sm font-semibold capitalize transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark",
              isActive
                ? mode === "designer"
                  ? "bg-lilac text-graphite-dark shadow-sm"
                  : "bg-graphite text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
