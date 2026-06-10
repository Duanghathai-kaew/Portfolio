"use client";

import { useState } from "react";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HybridSection } from "@/components/sections/hybrid-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import type { PortfolioMode } from "@/types/portfolio";

export default function Home() {
  const [mode, setMode] = useState<PortfolioMode>("designer");

  return (
    <div data-mode={mode} className="min-h-screen">
      <Navbar mode={mode} onModeChange={setMode} />
      <main>
        <HeroSection mode={mode} />
        <ProjectsSection mode={mode} />
        <HybridSection mode={mode} />
        <SkillsSection mode={mode} />
        <ProcessSection mode={mode} />
        <ExperienceSection />
        <EducationSection />
        <ContactSection mode={mode} />
      </main>
      <Footer />
    </div>
  );
}
