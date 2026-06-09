import { ExternalLink, GitBranch, Mail } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { SocialLink } from "@/components/shared/social-link";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  mode: PortfolioMode;
}

export function ContactSection({ mode }: ContactSectionProps) {
  return (
    <SectionContainer id="contact" className="pb-20">
      <div
        className={cn(
          "rounded-lg border p-6 shadow-soft sm:p-8 lg:p-10",
          mode === "designer"
            ? "border-lilac-dark bg-lilac-light"
            : "border-graphite bg-graphite-dark text-primary-foreground"
        )}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p
              className={cn(
                "text-sm font-semibold uppercase tracking-[0.18em]",
                mode === "developer" ? "text-lilac" : "text-graphite"
              )}
            >
              Contact
            </p>
            <h2
              className={cn(
                "mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl",
                mode === "developer" ? "text-primary-foreground" : "text-graphite-dark"
              )}
            >
              Build useful digital products with thoughtful design and practical code.
            </h2>
            <p
              className={cn(
                "mt-5 max-w-2xl text-base leading-7 sm:text-lg",
                mode === "developer" ? "text-lilac-light/80" : "text-muted-foreground"
              )}
            >
              Placeholder contact copy for future email, resume, and profile links.
              No form submission or backend is included in this version.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:placeholder@example.com"
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark",
                mode === "developer"
                  ? "bg-lilac text-graphite-dark hover:bg-lilac-light"
                  : "bg-primary text-primary-foreground hover:bg-graphite-dark"
              )}
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              Email Placeholder
            </a>
            <a
              href="#contact"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark",
                mode === "developer"
                  ? "border-lilac-light/40 text-lilac-light hover:bg-lilac-light hover:text-graphite-dark"
                  : "border-border bg-card text-foreground hover:border-lilac-dark hover:bg-card"
              )}
            >
              Resume Placeholder
            </a>
            <div className="grid gap-3 sm:grid-cols-2">
              <SocialLink
                href="#contact"
                label="LinkedIn"
                icon={ExternalLink}
                className={mode === "developer" ? "border-lilac-light/30" : ""}
              />
              <SocialLink
                href="#contact"
                label="GitHub"
                icon={GitBranch}
                className={mode === "developer" ? "border-lilac-light/30" : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
