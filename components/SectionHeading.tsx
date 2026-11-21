import Reveal from "./Reveal";

/** Numbered section heading with accent period — consistent across sections. */
export default function SectionHeading({
  index,
  title,
  accent = ".",
  sub,
}: {
  index: string;
  title: string;
  accent?: string;
  sub?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs tracking-[0.3em] text-neon">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-neon/70 to-transparent" aria-hidden />
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
        {title}
        <span className="text-gradient">{accent}</span>
      </h2>
      {sub && <p className="mt-4 text-muted max-w-xl text-base md:text-lg">{sub}</p>}
    </Reveal>
  );
}
