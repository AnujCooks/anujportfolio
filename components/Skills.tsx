import { Code2, Database, Layout, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import BrandIcon, { brandHex } from "./BrandIcon";
import { skillGroups } from "@/data/skills";

const GROUP_ICONS: Record<string, LucideIcon> = {
  Layout,
  Server,
  Database,
  Code2,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        index="03"
        title="Skills & Technologies"
        sub="The toolkit behind every build — from first pixel to production."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, gi) => {
          const GroupIcon = GROUP_ICONS[group.icon] ?? Layout;
          return (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-surface/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/30 hover:shadow-[0_16px_50px_rgba(34,211,238,0.08)]">
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neon/20 bg-neon/10 text-neon">
                    <GroupIcon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold tracking-tight">{group.title}</h3>
                    <p className="font-mono text-[11px] text-faint">{group.blurb}</p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      style={{ ["--brand" as string]: `#${brandHex(skill.icon)}` }}
                      className="inline-flex cursor-default items-center gap-2 rounded-full border border-line bg-surface2/70 px-3.5 py-2 text-sm text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--brand)]/50 hover:bg-[color:var(--brand)]/10 hover:text-ink"
                    >
                      <span className="text-faint transition-colors duration-300 [li:hover_&]:text-[color:var(--brand)]">
                        <BrandIcon name={skill.icon} size={16} />
                      </span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
