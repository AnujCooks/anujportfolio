"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ExternalLink, Github } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  featuredProjects,
  gridProjects,
  INITIAL_GRID_COUNT,
  type Project,
} from "@/data/projects";

/* ---------------------------------------------------------------- */
/*  Tech tag chip                                                    */
/* ---------------------------------------------------------------- */
function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-line bg-surface2/80 px-3 py-1 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:border-neon/25">
      {label}
    </span>
  );
}

/* ---------------------------------------------------------------- */
/*  Shared action buttons                                            */
/* ---------------------------------------------------------------- */
function ProjectActions({ project, size = "md" }: { project: Project; size?: "md" | "lg" }) {
  const pad = size === "lg" ? "px-6 py-3 text-sm" : "px-4 py-2 text-xs";
  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={`btn-sweep group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-grape font-semibold text-bg shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)] ${pad}`}
        >
          Live Preview
          <ExternalLink
            size={size === "lg" ? 15 : 12}
            className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
          />
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${project.title} — source code on GitHub`}
          className={`inline-flex items-center gap-2 rounded-full border border-line font-semibold text-ink transition-all duration-300 hover:border-neon/50 hover:text-neon ${pad}`}
        >
          <Github size={size === "lg" ? 15 : 12} />
          GitHub
        </a>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Featured project — large alternating card                        */
/* ---------------------------------------------------------------- */
function FeaturedCard({
  project,
  index,
  reverse,
}: {
  project: Project;
  index: number;
  reverse: boolean;
}) {
  let domain = "";
  try {
    domain = new URL(project.liveUrl).hostname;
  } catch {
    domain = "";
  }

  return (
    <Reveal>
      <article className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {/* image */}
        <div className={reverse ? "lg:order-2" : ""}>
          <a
            href={project.liveUrl || project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open ${project.title}`}
            tabIndex={-1}
          >
            <div className="glow-ring relative overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
              {/* browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-line/70 bg-surface2/70 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
                {domain && (
                  <span className="ml-3 truncate font-mono text-[11px] text-faint">{domain}</span>
                )}
                <ArrowUpRight
                  size={13}
                  className="ml-auto text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} — project screenshot`}
                  width={1560}
                  height={800}
                  sizes="(max-width: 1024px) 92vw, 620px"
                  className="h-auto w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                {/* hover sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-neon/10 via-transparent to-grape/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
              </div>
              {/* big index watermark */}
              <span className="pointer-events-none absolute bottom-2 right-4 font-display text-7xl font-bold text-ink/[0.06]">
                0{index + 1}
              </span>
            </div>
          </a>
        </div>

        {/* copy */}
        <div className={reverse ? "lg:order-1" : ""}>
          {project.kicker && (
            <span className="inline-flex items-center gap-2 rounded-full border border-neon/25 bg-neon/10 px-3.5 py-1 font-mono text-[11px] tracking-[0.2em] text-neon uppercase">
              {project.kicker}
            </span>
          )}
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-lg text-muted leading-relaxed">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
          <div className="mt-7">
            <ProjectActions project={project} size="lg" />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ---------------------------------------------------------------- */
/*  Grid project card                                                */
/* ---------------------------------------------------------------- */
function GridCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="glow-ring group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:-translate-y-1.5"
    >
      {/* image */}
      <a
        href={project.liveUrl || project.githubUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Open ${project.title}`}
        className="relative block aspect-[16/9] overflow-hidden"
      >
        <Image
          src={project.image}
          alt={`${project.title} — project screenshot`}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1280px) 45vw, 30vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-neon/10 to-grape/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute right-3 top-3 inline-flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-line bg-bg/80 text-ink opacity-0 backdrop-blur transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={15} className="text-neon" />
        </span>
      </a>

      {/* body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-neon">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        <div className="mt-5">
          <ProjectActions project={project} />
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------------------------------------------------------- */
/*  Section                                                          */
/* ---------------------------------------------------------------- */
export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? gridProjects : gridProjects.slice(0, INITIAL_GRID_COUNT);
  const hiddenCount = gridProjects.length - INITIAL_GRID_COUNT;

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        index="01"
        title="Selected Projects"
        sub="Things I've designed, developed and brought to life."
      />

      {/* featured showcases */}
      <div className="space-y-24 md:space-y-32">
        {featuredProjects.map((p, i) => (
          <FeaturedCard key={p.title} project={p} index={i} reverse={i % 2 === 1} />
        ))}
      </div>

      {/* divider + grid */}
      <div className="mt-24 md:mt-32">
        <Reveal className="mb-10 flex items-center gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight text-muted">
            More things I&apos;ve built
          </h3>
          <span className="h-px flex-1 bg-line" aria-hidden />
          <span className="font-mono text-xs text-faint">
            {gridProjects.length} projects
          </span>
        </Reveal>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <GridCard key={p.title} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* view all toggle */}
        {gridProjects.length > INITIAL_GRID_COUNT && (
          <Reveal className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-7 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-neon/50 hover:text-neon hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              {showAll ? "Show Less" : `View All Projects (+${hiddenCount})`}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover:translate-y-0.5"}`}
              />
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
