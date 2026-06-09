import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return <Badge tone="muted">{label}</Badge>;
}
