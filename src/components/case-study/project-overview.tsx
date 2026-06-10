import type { CaseStudyMeta } from "@/types/case-study";

interface ProjectOverviewProps {
  items: CaseStudyMeta[];
}

export function ProjectOverview({ items }: ProjectOverviewProps) {
  const timeline = items.find((item) => item.label === "Timeline");
  const role = items.find((item) => item.label === "Role");
  const team = items.find((item) => item.label === "Team");
  const tools = items.find((item) => item.label === "Tools");

  return (
    <section className="bg-[#3f3f3d] text-[#f8f6f4]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e8ccd8]">
              Project Overview
            </p>

            <h2 className="mt-5 max-w-md font-heading text-3xl font-bold leading-tight tracking-[-0.04em] md:text-4xl">
              One platform for discovering projects, finding teammates, and
              managing recruitment.
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {timeline && (
              <OverviewItem label="Timeline" value={timeline.value} />
            )}

            {role && <OverviewItem label="Role" value={role.value} />}

            {team && <OverviewItem label="Ownership" value={team.value} />}

            {tools && (
              <div className="border-t border-white/20 pt-5 sm:col-span-2 lg:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#e8ccd8]">
                  Core Tools
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
                  {tools.value}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface OverviewItemProps {
  label: string;
  value: string;
}

function OverviewItem({ label, value }: OverviewItemProps) {
  return (
    <div className="border-t border-white/20 pt-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#e8ccd8]">
        {label}
      </p>

      <p className="mt-3 text-base font-medium leading-7">{value}</p>
    </div>
  );
}
