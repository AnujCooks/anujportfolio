"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
  TriangleAlert,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-line bg-surface2/60 px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-all duration-300 focus:border-neon/60 focus:bg-surface2 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)] aria-[invalid=true]:border-red-500/60";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    // client-side validation mirrors the server rules
    if (form.name.trim().length < 2) return setStatus("error"), setErrorMsg("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      return setStatus("error"), setErrorMsg("Please enter a valid email address.");
    if (form.message.trim().length < 10)
      return setStatus("error"), setErrorMsg("Message is too short (min 10 characters).");

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please check your connection and try again.");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        index="05"
        title="Have an idea? Let's build something together"
        sub="Whether it's a project, an opportunity or just a hello — my inbox is always open."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* ---------------- left : direct channels ---------------- */}
        <Reveal className="space-y-4">
          <button
            type="button"
            onClick={copyEmail}
            className="glow-ring group flex w-full items-center gap-4 rounded-2xl border border-line bg-surface/70 p-5 text-left transition-all duration-300 hover:border-neon/40"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neon/20 bg-neon/10 text-neon">
              <Mail size={18} />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                Email
              </span>
              <span className="block truncate text-sm font-medium text-ink">{site.email}</span>
            </span>
            <span className="ml-auto text-muted transition-colors group-hover:text-neon">
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            </span>
          </button>

          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="glow-ring group flex w-full items-center gap-4 rounded-2xl border border-line bg-surface/70 p-5 transition-all duration-300 hover:border-neon/40"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neon/20 bg-neon/10 text-neon">
              <Linkedin size={18} />
            </span>
            <span>
              <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                LinkedIn
              </span>
              <span className="block text-sm font-medium text-ink">Connect professionally</span>
            </span>
            <ArrowUpRight
              size={16}
              className="ml-auto text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon"
            />
          </a>

          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="glow-ring group flex w-full items-center gap-4 rounded-2xl border border-line bg-surface/70 p-5 transition-all duration-300 hover:border-neon/40"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neon/20 bg-neon/10 text-neon">
              <Github size={18} />
            </span>
            <span>
              <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                GitHub
              </span>
              <span className="block text-sm font-medium text-ink">@AnujCooks</span>
            </span>
            <ArrowUpRight
              size={16}
              className="ml-auto text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon"
            />
          </a>

          <p className="flex items-center gap-2 px-2 pt-2 font-mono text-xs text-faint">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Usually replies within 24 hours · {site.location}
          </p>
        </Reveal>

        {/* ---------------- right : form ---------------- */}
        <Reveal delay={0.1}>
          <div className="glow-ring relative rounded-3xl border border-line bg-surface/80 p-6 backdrop-blur md:p-8">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[430px] flex-col items-center justify-center text-center"
                >
                  <motion.span
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                  >
                    <CheckCircle2 size={30} />
                  </motion.span>
                  <h3 className="mt-6 font-display text-2xl font-bold">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                    Thanks for reaching out — your message is on its way to my inbox. I&apos;ll get
                    back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 rounded-full border border-line px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-neon/50 hover:text-neon"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  noValidate
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={set("name")}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={set("email")}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={set("subject")}
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your idea, project or opportunity…"
                      value={form.message}
                      onChange={set("message")}
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {/* honeypot — hidden from humans, tasty for bots */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    className="hidden"
                  />

                  {/* status message */}
                  <div aria-live="polite" className="min-h-[24px]">
                    {status === "error" && errorMsg && (
                      <p className="flex items-center gap-2 text-sm text-red-400">
                        <TriangleAlert size={15} /> {errorMsg}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon to-grape px-6 py-3.5 font-semibold text-bg shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-center font-mono text-[10px] text-faint">
                    Delivered straight to my inbox — no newsletters, no spam.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
