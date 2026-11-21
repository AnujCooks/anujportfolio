import { ArrowUp, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line/70 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="#home" className="font-display text-2xl font-bold tracking-[0.16em]">
              {site.shortName}
              <span className="text-neon">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Computer Science Engineer & Full-Stack Developer building digital experiences that
              make an impact.
            </p>
          </div>

          {/* nav */}
          <nav aria-label="Footer">
            <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-faint">
              Navigate
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-neon">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* socials */}
          <div>
            <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-faint">
              Elsewhere
            </h3>
            <div className="flex gap-2.5">
              {[
                { href: site.socials.github, label: "GitHub", Icon: Github },
                { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
                { href: site.socials.instagram, label: "Instagram", Icon: Instagram },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-1 hover:border-neon/50 hover:text-neon"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line/60 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-faint">
            © {year} {site.name} · Built with Next.js, Tailwind CSS & Framer Motion
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 font-mono text-xs text-faint transition-colors hover:text-neon"
          >
            Back to top
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:-translate-y-1 group-hover:border-neon/50">
              <ArrowUp size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
