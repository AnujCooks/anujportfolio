"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";

const SECTION_IDS = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line/80 bg-bg/70 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-[0.18em] text-ink transition-colors hover:text-neon"
        >
          {site.shortName}
          <span className="text-neon">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href.slice(1) ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  active === link.href.slice(1)
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-neon/25 bg-neon/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Resume CTA */}
          <a
            href={site.resumeUrl}
            download
            className="btn-sweep hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-neon/50 hover:text-white sm:inline-flex"
          >
            <Download size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            Resume
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-neon/50 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-2 px-6 pt-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line/60 py-4 font-display text-2xl font-semibold text-ink transition-colors hover:text-neon"
                  >
                    {link.label}
                    <span className="font-mono text-xs text-faint">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * navLinks.length, duration: 0.4 }}
                className="pt-6"
              >
                <a
                  href={site.resumeUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-grape px-6 py-3 font-semibold text-bg"
                >
                  <Download size={16} /> Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
