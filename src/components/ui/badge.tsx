import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "lilac" | "graphite" | "muted";
}

const tones = {
  lilac: "border-lilac-dark bg-lilac-light text-graphite-dark",
  graphite: "border-graphite bg-graphite text-primary-foreground",
  muted: "border-border bg-muted text-muted-foreground"
};

export function Badge({ className, tone = "lilac", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
