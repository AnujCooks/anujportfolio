# Anuj Thakur — Developer Portfolio

A premium, project-first personal portfolio built with **Next.js 15 + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide**.

All real project data was extracted from [anujcooks.vercel.app](https://anujcooks.vercel.app/) (Recent Works section) — 20 projects with actual names, descriptions, screenshots, tech tags and live URLs.

---

## ✏️ How to edit content (everything is centralized)

| What you want to change      | File                          |
| ---------------------------- | ----------------------------- |
| Name, email, socials, resume | `data/site.ts`                |
| **Projects** (add/edit/remove) | `data/projects.ts`          |
| Skills & tech icons          | `data/skills.ts`              |
| Experience / timeline dates  | `data/experience.ts`          |
| Sections & colors            | `app/globals.css` (`@theme`)  |

### Adding a project
1. Drop a screenshot into `public/projects/` (webp or jpg, ~1560px wide recommended).
2. Add an entry in `data/projects.ts`:

```ts
{
  title: "My New Project",
  description: "What it does, in one or two engaging sentences.",
  image: "/projects/my-new-project.webp",
  tags: ["React", "Node.js"],
  liveUrl: "https://demo.example.com",   // "" if none
  githubUrl: "https://github.com/AnujCooks/repo", // "" if none
  featured: true,   // true = big alternating showcase, false = grid card
  kicker: "AI + AgriTech", // optional badge (featured only)
}
```

> `featured: false` projects show 6 at a time behind the **View All Projects** button — no code changes needed.

### ⚠️ Placeholders to fill in
- `data/experience.ts` → internship & degree **dates** ("Add your dates"), university name.
- `data/site.ts` → `siteUrl` after deploying (used for SEO metadata).
- `public/Anuj-Thakur-Resume.pdf` → replace with your final resume anytime (same filename = no code change).

---

## 📬 Contact form (real email delivery)

The form posts to `/api/contact` (`app/api/contact/route.ts`), which relays to **FormSubmit.co** — a real email service, no API key needed.

**One-time activation:** an activation email was already sent to `anujthakur9684@gmail.com`. Click **"Activate Form"** in it once. Until then the form shows an honest "relay not active" error (never a fake success).

Upgrades (optional, via env vars):
- `WEB3FORMS_ACCESS_KEY=...` → switches the relay to Web3Forms.
- `FORMSUBMIT_EMAIL=...` → change the recipient address.
- `CONTACT_ORIGIN=...` → origin header sent to the relay (default: your existing site).

Spam protection: honeypot field + server-side validation (name ≥ 2, valid email, message 10–3000 chars).

---

## 🚀 Run & deploy

```bash
npm install
npm run dev      # develop at http://localhost:3000
npm run build    # production build (type-checked, static homepage)
npm run start    # serve the production build
```

**Deploy to Vercel:** push this folder to GitHub → import in Vercel → deploy. Update `siteUrl` in `data/site.ts` afterwards. No env vars required for the default FormSubmit setup.

---

## 🧱 Tech notes

- **Images:** all 20 screenshots + avatar converted to WebP (6.9 MB → 527 KB), served through `next/image`.
- **SEO:** full metadata, OpenGraph/Twitter tags, semantic landmarks, `aria` labels throughout.
- **A11y:** keyboard-focusable controls, `aria-live` form status, `prefers-reduced-motion` disables animation.
- **Brand icons:** `simple-icons` (tree-shaken). Note: v13 removed Java/VS Code marks — Java uses OpenJDK's mark, VS Code uses a Lucide fallback.
