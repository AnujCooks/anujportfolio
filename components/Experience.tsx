import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        index="04"
        title="Experience & Journey"
        sub="Where I've worked, learned and grown as a developer."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* timeline spine */}
        <div
          className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-neon/60 via-line to-transparent md:left-[23px]"
          aria-hidden
        />

        <div className="space-y-10">
          {experience.map((item, i) => (
            <Reveal key={`${item.org}-${i}`} delay={i * 0.12}>
              <div className="relative pl-14 md:pl-16">
                {/* node */}
                <span className="absolute left-0 top-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neon/30 bg-surface text-neon shadow-[0_0_24px_rgba(34,211,238,0.15)] md:h-12 md:w-12">
                  {item.kind === "work" ? (
                    <Briefcase size={18} />
                  ) : (
                    <GraduationCap size={18} />
                  )}
                </span>

                <div className="glow-ring rounded-2xl border border-line bg-surface/70 p-6 transition-colors duration-300 hover:border-neon/25">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {item.role}
                    </h3>
                    <span className="text-neon">@</span>
                    <span className="font-semibold text-ink">{item.org}</span>
                    <span className="ml-auto rounded-full border border-line bg-surface2/80 px-3 py-1 font-mono text-[11px] text-muted">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-faint">
                    <MapPin size={12} /> {item.location}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-neon to-grape" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {item.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line bg-surface2/70 px-3 py-1 font-mono text-[11px] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
