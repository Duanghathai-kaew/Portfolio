interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-3xl font-heading text-3xl font-bold leading-[1.1] tracking-[-0.035em] text-graphite-dark sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl font-sans text-base font-normal leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
