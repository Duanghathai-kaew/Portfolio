"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ModeToggle } from "@/components/shared/mode-toggle";
import type { PortfolioMode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface NavbarProps {
  mode: PortfolioMode;
  onModeChange: (mode: PortfolioMode) => void;
}

export function Navbar({ mode, onModeChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <nav
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="rounded-md font-heading text-base font-bold tracking-[-0.01em] text-graphite-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac-dark"
        >
          {profile.shortName}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-medium text-muted-foreground transition-colors hover:text-graphite-dark focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac-dark"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ModeToggle mode={mode} onModeChange={onModeChange} />
          <button
            type="button"
            disabled
            title={profile.resume.pendingReason}
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-4 py-2 font-sans text-sm font-semibold text-primary-foreground opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark disabled:cursor-not-allowed"
          >
            Resume
          </button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark lg:hidden"
        >
          {isOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-border bg-background px-4 py-4 shadow-soft lg:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          <div className="grid gap-2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-3 font-sans text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <ModeToggle mode={mode} onModeChange={onModeChange} />
            <button
              type="button"
              disabled
              title={profile.resume.pendingReason}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2 font-sans text-sm font-semibold text-primary-foreground opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-dark disabled:cursor-not-allowed"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
