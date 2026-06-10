import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}

export function SocialLink({
  href,
  label,
  icon: Icon,
  className
}: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-card px-4 py-2 font-sans text-sm font-semibold text-foreground transition-colors hover:border-lilac-dark hover:bg-lilac-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark",
        className
      )}
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
      {label}
    </a>
  );
}
