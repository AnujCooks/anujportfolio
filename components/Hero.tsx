"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

function stagger(delay = 0) {
  return {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  };
}

export default function Hero() {
  const reduce = useReducedMotion();
  const words = site.headline.split(" ");

  return (
    <section id="home" className="relative flex min-h-[94svh] items-center pb-20 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.08fr_0.92fr]">
        {/* ---------------------------- left : copy ---------------------------- */}
        <div>
          <motion.p
            {...stagger(0.1)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 font-mono text-[11px] tracking-[0.28em] text-muted backdrop-blur"
          >
            {site.intro}
          </motion.p>

          <motion.h1
            {...stagger(0.22)}
            className="mt-6 font-display text-[clamp(2.4rem,6vw,4.2rem)] font-bold leading-[1.06] tracking-tight"
          >
            {words.map((w, i) =>
              w === "Digital" || w === "Experiences" ? (
                <span key={i} className="text-gradient">
                  {w}{" "}
                </span>
              ) : (
                <span key={i}>{w} </span>
              ),
            )}
          </motion.h1>

          <motion.p {...stagger(0.34)} className="mt-5 font-mono text-sm text-muted">
            <span className="text-neon">&gt;</span>{" "}
            <strong className="font-semibold text-ink">{site.name}</strong> — {site.role}
          </motion.p>

          <motion.p {...stagger(0.44)} className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {site.description}
          </motion.p>

          {/* CTAs */}
          <motion.div {...stagger(0.56)} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-grape px-7 py-3.5 font-semibold text-bg shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(34,211,238,0.45)]"
            >
              Explore My Work
              <ArrowDown
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
            <a
              href={site.resumeUrl}
              download
              className="btn-sweep inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-semibold text-ink transition-colors duration-300 hover:border-neon/60 hover:text-white"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...stagger(0.66)} className="mt-8 flex items-center gap-3">
            <span className="mr-1 h-px w-8 bg-line" aria-hidden />
            {[
              { href: site.socials.github, label: "GitHub", Icon: Github },
              { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/70 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-neon/50 hover:text-neon hover:shadow-[0_6px_24px_rgba(34,211,238,0.2)]"
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="ml-3 inline-flex items-center gap-2 text-xs text-faint">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to opportunities
            </span>
          </motion.div>
        </div>

        {/* -------------------------- right : visual --------------------------- */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* glow behind */}
          <div
            className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-neon/20 via-transparent to-grape/20 blur-3xl"
            aria-hidden
          />

          {/* avatar card */}
          <div className="relative rounded-[2rem] bg-gradient-to-br from-neon/40 via-line to-grape/40 p-[1.5px] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
            <div className="overflow-hidden rounded-[calc(2rem-1.5px)] bg-surface">
              <div className="flex items-center gap-1.5 border-b border-line/70 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-faint">anuj.thakur — profile</span>
              </div>
              <Image
                src="/anujhero.png"
                alt="Anuj Thakur — Full-Stack Developer"
                width={768}
                height={1365}
                priority
                className="h-auto w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* floating chip — React */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
            className="absolute -left-5 top-14 hidden animate-float items-center gap-2 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:flex"
          >
            <span className="text-lg">⚛️</span>
            <div>
              <p className="text-xs font-semibold text-ink">React · Next.js</p>
              <p className="font-mono text-[10px] text-faint">frontend stack</p>
            </div>
          </motion.div>

          {/* floating chip — projects count */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.7, ease: EASE }}
            className="absolute -right-4 top-1/3 hidden animate-float-slow rounded-2xl border border-neon/30 bg-surface/90 px-4 py-3 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur sm:block"
          >
            <p className="font-display text-xl font-bold text-neon">14+</p>
            <p className="font-mono text-[10px] text-muted">live projects</p>
          </motion.div>

          {/* code card */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.8, ease: EASE }}
            className="absolute -bottom-10 left-4 right-4 rounded-2xl border border-line bg-surface/95 p-4 font-mono text-[11px] leading-relaxed shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur md:-bottom-12 md:left-8 md:right-auto md:w-[340px]"
          >
            <p className="mb-1 text-faint">developer.js</p>
            <p>
              <span className="text-grape">const</span> <span className="text-ice">developer</span>{" "}
              = {"{"}
            </p>
            <p className="pl-4">
              name: <span className="text-emerald-300">&quot;Anuj&quot;</span>,
            </p>
            <p className="pl-4">
              passion: <span className="text-emerald-300">&quot;Building things&quot;</span>,
            </p>
            <p className="pl-4">
              motto: <span className="text-emerald-300">&quot;Code with love ❤️&quot;</span>
            </p>
            <p>{"}"}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-faint transition-colors hover:text-neon lg:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </motion.a>
    </section>
  );
}
