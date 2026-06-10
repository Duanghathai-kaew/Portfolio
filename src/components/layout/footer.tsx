import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-graphite-dark text-primary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-lilac-light/80">
            UX/UI Designer × Full-Stack Developer
          </p>
        </div>
        <div className="flex items-center justify-between gap-4 md:justify-end">
          <p className="text-sm text-lilac-light/75">{currentYear}</p>
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-lilac-light/30 px-4 py-2 text-sm font-semibold text-lilac-light transition-colors hover:bg-lilac-light hover:text-graphite-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac"
          >
            Back to top
            <ArrowUp aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
