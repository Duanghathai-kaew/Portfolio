---
name: portfolio-development
description: Build and maintain a personal portfolio website for a Computer Science graduate working across UX/UI design and full-stack development. Use when Codex is asked to create, redesign, refactor, or extend this portfolio; implement Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, Lucide React, responsive sections, Designer/Developer mode behavior, portfolio content structure, accessibility, and code-quality checks.
---

# Portfolio Development

## Project Intent

Build a personal portfolio website that positions the owner as both:

- a UX/UI Designer with strong technical understanding
- a Frontend or Full-Stack Developer with product design experience

Make the site useful for recruiters, hiring managers, UX/UI teams, development teams, and potential freelance clients. Keep it professional, modern, creative, easy to scan, and readable.

## Stack

Use:

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React icons

Use optional libraries only when they add clear value:

- Framer Motion for meaningful animation
- next-themes only if a global theme system is required

Do not add another UI framework or unnecessary dependencies.

## TypeScript Rules

Use TypeScript for application code.

- Use `.tsx` for React components.
- Use `.ts` for utilities, types, constants, and configuration.
- Use strict types, typed props, and named types for complex data.
- Avoid `any`, untyped parameters, duplicated type definitions, and JavaScript files.

Prefer this style:

```tsx
interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  imageUrl?: string;
  href?: string;
}
```

## Structure

Use a feature-based structure. Keep `page.tsx` mostly as composition.

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── section-container.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── hybrid-section.tsx
│   │   ├── process-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── experience-section.tsx
│   │   └── contact-section.tsx
│   ├── shared/
│   │   ├── mode-toggle.tsx
│   │   ├── project-card.tsx
│   │   ├── section-heading.tsx
│   │   ├── skill-badge.tsx
│   │   └── social-link.tsx
│   └── ui/
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── navigation.ts
├── hooks/
├── lib/
│   └── utils.ts
└── types/
    └── portfolio.ts
```

Use PascalCase for component names and kebab-case for filenames.

## Components

Give each component one clear responsibility.

Create reusable components when the UI appears more than once, has its own interaction or state, represents a clear pattern, receives data through props, or improves readability.

Do not split tiny decorative fragments into unnecessary components.

Use this hierarchy as the default:

```tsx
<HomePage>
  <Navbar />
  <main>
    <HeroSection />
    <ProjectsSection />
    <HybridSection />
    <ProcessSection />
    <SkillsSection />
    <ExperienceSection />
    <ContactSection />
  </main>
  <Footer />
</HomePage>
```

## Data And Content

Keep portfolio content separate from presentation components.

- Put repeated project, skill, process, navigation, and experience content under `src/data`.
- Do not hardcode repeated data directly in JSX.
- Use clearly labeled placeholder data until real content is provided.
- Do not invent achievements, metrics, companies, URLs, or project results.

Acceptable placeholders include:

- `Project Title`
- `Short description of the project and its impact.`
- `UX/UI Designer & Full-Stack Developer`
- `Technology`
- `Month Year - Month Year`

## Designer And Developer Modes

Include an interactive Designer/Developer mode toggle when building the main portfolio experience.

The selected mode may change accent styling, supporting copy, project emphasis, skill ordering, decorative visual language, labels, or descriptions. Both modes must represent the same person and the same truthful experience.

Designer mode should emphasize user problems, research, user flows, information architecture, visual systems, usability, and design decisions.

Developer mode should emphasize implementation, architecture, reusable components, type safety, performance, data workflows, and scalability.

Use shared components and mode-dependent data or variants. Do not duplicate the full page. Keep the toggle keyboard accessible and make the active state visually clear.

Prefer:

```ts
export type PortfolioMode = "designer" | "developer";
```

Use local state at the highest practical shared level, or Context only if many distant sections need the mode. Do not add a global state library for this feature.

## Visual Direction

Make the design modern, editorial, product-focused, professional, distinctive, and coherent across both modes.

Use strong typography, clear hierarchy, generous spacing, structured grids, selective rounded cards, subtle borders, controlled contrast, purposeful accent colors, large project visuals, and consistent spacing tokens.

Avoid excessive gradients, glassmorphism everywhere, overused shadows, floating decorations, generic dashboards, excessive terminal styling, animations that delay content, and skill progress bars with unsupported percentages.

## Color System

Use this fixed core color palette as the portfolio's visual identity:

- Graphite Moss: `#6C6C6A`
- Vintage Lilac: `#E8CCD8`

Create supporting shades with CSS variables, but keep Graphite Moss and Vintage Lilac clearly recognizable as the main identity colors.

Use this default variable set:

```css
:root {
  --background: #f8f6f5;
  --foreground: #3f3f3d;

  --graphite: #6c6c6a;
  --graphite-dark: #3f3f3d;
  --graphite-light: #a3a3a0;

  --lilac: #e8ccd8;
  --lilac-light: #f5e8ed;
  --lilac-dark: #cfa9ba;

  --card: #ffffff;
  --muted: #f0eeee;
  --muted-foreground: #747471;
  --border: #dedbd9;

  --primary: #6c6c6a;
  --primary-foreground: #ffffff;

  --accent: #e8ccd8;
  --accent-foreground: #3f3f3d;
}
```

Use Graphite Moss for primary text, navigation, Developer mode surfaces, buttons, strong borders, technical visual elements, and code-inspired sections.

Use Vintage Lilac for highlighted sections, accent backgrounds, selected states, Designer mode surfaces, tags, badges, hover details, and decorative visual elements.

Use off-white rather than pure white as the main page background. Do not use pure black for large surfaces; prefer deep graphite tones.

Maintain accessible text contrast:

- Use dark graphite text on Vintage Lilac.
- Use white, off-white, or very pale lilac text on Graphite Moss.
- Do not use Vintage Lilac or pale lilac for long body text on a light background.

Designer mode should use Vintage Lilac more prominently for highlighted surfaces, selected states, light lilac section backgrounds, editorial details, grids, layout measurements, design annotations, and soft visual details.

Developer mode should use Graphite Moss more prominently for darker sections, technical UI elements, structured surfaces, code highlights, and strong layout structure. Keep Vintage Lilac as the accent color for active states, code highlights, borders, and small details.

Both modes must use the same palette so the website maintains one consistent identity. The result should feel editorial, calm, modern, sophisticated, professional, and creative; avoid making it overly pink, childish, pastel-heavy, or like two unrelated themes.

## Responsive Design

Build mobile-first and verify:

- mobile below `768px`
- tablet from `768px` to `1023px`
- desktop at `1024px` and above
- large desktop at `1440px` and above

Test at minimum `375px`, `768px`, `1024px`, and `1440px`.

Ensure no horizontal scrolling, usable mobile navigation, natural card stacking, readable text, touch-friendly controls, balanced spacing, and decorative elements that never cover content.

## Accessibility

Use semantic HTML and accessible interaction patterns.

- Use only one `h1` per page.
- Maintain logical heading order.
- Add accessible names to icon-only buttons.
- Include visible keyboard focus states.
- Ensure sufficient color contrast.
- Do not communicate information with color alone.
- Respect `prefers-reduced-motion`.
- Use descriptive link labels.
- Provide meaningful image alt text.
- Mark decorative images appropriately.
- Use buttons for actions and anchors for navigation.

Example:

```tsx
<button
  type="button"
  aria-pressed={mode === "designer"}
  aria-label="Switch to designer view"
>
  Designer
</button>
```

## Animation

Use animation to support understanding.

Allowed examples include subtle section entrance, toggle transitions, card hover feedback, underline or arrow movement, and small visual changes when switching modes.

Avoid long loading animations, constant background movement, large mobile parallax effects, animating every text line, blocked navigation, and cursor-following effects that reduce usability.

Keep durations generally between `150ms` and `500ms`, and respect reduced-motion preferences.

## Styling

Use Tailwind CSS consistently and use `cn()` for conditional classes.

Prefer CSS variables for background, foreground, muted text, border, card, primary accent, secondary accent, and radius. Use the Color System variables as the default source of truth.

Avoid arbitrary values unless they solve a specific design need.

Prefer one shared `SectionContainer` instead of repeated section-width classes:

```tsx
className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
```

## State

Use local React state for simple UI interactions. Use Context only when state must be shared across distant components.

Do not add Redux, Zustand, or another global state library unless the project later requires complex global application state.

Account for default, hover, focus, active, disabled, loading, and empty states where relevant.

## Navigation

Primary navigation should include:

- Home
- Work
- About
- Experience
- Contact
- Designer/Developer toggle
- Resume action

Use anchor links until real destinations are provided. Do not use dead external links.

## Required Sections

### Navbar

Include a text-based personal logo placeholder, section navigation, Designer/Developer toggle, Resume button, and mobile navigation.

### Hero

Include a role or availability label, strong headline, supporting description, primary CTA for viewing work, secondary CTA for contact or resume, and a visual area representing the combination of design and code.

### Selected Projects

Include two or three placeholder project cards with category, title, short problem or outcome description, role, technology tags, placeholder image area, and case-study link.

Prioritize problem, contribution, and outcome, not only screenshots.

### Hybrid Value

Communicate the benefit of combining design and development with three concise value cards:

- Product thinking
- Feasible design
- Implementation awareness

Avoid exaggerated claims such as `100% pixel-perfect` or `guaranteed`.

### Process

Use four stages:

1. Uncover the Why
2. Connect the Dots
3. Pixels Meet Code
4. Real-World Ready

Each stage should include a number, title, short placeholder explanation, and a simple visual or line connection.

### Skills

Group skills by category:

- Product and UX
- Interface Design
- Frontend
- Backend and Data
- Tools and Collaboration

Do not display proficiency percentages.

### Experience

Use a clean timeline or structured list with placeholder fields for company, role, timeline, description, and technologies or responsibilities.

### Contact

Include a clear headline, supporting message, email action, social links, and resume action. Use placeholders for external URLs until real links are provided.

## Code Quality

Before completing a task:

- Check TypeScript errors.
- Check unused imports.
- Check responsive behavior.
- Check semantic HTML.
- Check keyboard accessibility.
- Check duplicated UI patterns.
- Check that placeholder content is clearly identifiable.
- Check that no unsupported claims or fake metrics were added.

## Working Rules

When implementing a request:

1. Inspect the existing project structure first.
2. Preserve existing working configuration.
3. Reuse existing components where practical.
4. Do not replace the entire project unnecessarily.
5. Explain significant architectural decisions briefly.
6. List files created or changed.
7. Run available lint, type-check, and build commands.
8. Fix errors caused by the implementation.
9. Do not modify unrelated files.
10. Do not add real personal content until explicitly provided.

When a design detail is unspecified, choose a professional and accessible default consistent with this skill.
