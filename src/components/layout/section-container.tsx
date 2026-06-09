import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export function SectionContainer({
  id,
  className,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 sm:py-20 lg:py-24", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
