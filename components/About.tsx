import { Layers, Rocket, Sparkles, Zap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const focuses = [
  {
    Icon: Rocket,
    title: "Product-minded building",
    text: "I care about the outcome, not just the code — every feature earns its place.",
  },
  {
    Icon: Layers,
    title: "Clean, scalable foundations",
    text: "Reusable components and structured data, so projects grow without turning into spaghetti.",
  },
  {
    Icon: Sparkles,
    title: "Polish users can feel",
    text: "Motion, micro-interactions and detail work that make an interface feel alive.",
  },
];

const stats = [
  { value: "14+", label: "Projects shipped" },
  { value: "CodeAlpha", label: "Web Dev Internship" },
  { value: "CS", label: "Engineering background" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading index="02" title="About Me" />

      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* copy */}
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m <strong className="font-semibold text-ink">Anuj Thakur</strong> — a Computer
            Science Engineer and full-stack developer who genuinely enjoys turning ideas into
            things people can use. I started with curiosity about how websites work, and that
            curiosity turned into a habit of shipping.
          </p>
          <p className="mt-5 leading-relaxed text-muted">
            I&apos;m drawn to <strong className="font-semibold text-ink">practical products</strong>{" "}
            — tools, platforms and interfaces that solve a real problem for a real person. My
            approach is simple: understand the problem first, design the smallest thing that
            solves it well, then polish it until it feels effortless.
          </p>
          <p className="mt-5 leading-relaxed text-muted">
            When I&apos;m not building, I&apos;m studying how great products are made — dissecting
            animations, reading documentation for fun, and sketching the next idea.
          </p>

          {/* stats */}
          <div className="mt-9 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-line bg-surface/70 p-4 text-center transition-colors duration-300 hover:border-neon/30"
              >
                <p className="font-display text-xl font-bold text-neon md:text-2xl">{s.value}</p>
                <p className="mt-1 font-mono text-[11px] leading-snug text-faint">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* focus cards */}
        <div className="space-y-4">
          {focuses.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="group flex items-start gap-4 rounded-2xl border border-line bg-surface/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/30 hover:shadow-[0_10px_40px_rgba(34,211,238,0.08)]">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neon/20 bg-neon/10 text-neon transition-transform duration-300 group-hover:scale-110">
                  <f.Icon size={19} />
                </span>
                <div>
                  <h3 className="font-display font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-gradient-to-r from-neon/[0.07] to-grape/[0.07] p-5">
              <Zap size={18} className="shrink-0 text-grape" />
              <p className="font-mono text-xs leading-relaxed text-muted">
                Motto: <span className="text-ink">&quot;Code with love ❤️ — build it, ship it,
                make it feel good.&quot;</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
