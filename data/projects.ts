/* ------------------------------------------------------------------
 *  PROJECTS — the heart of this portfolio.
 *  Data extracted from https://anujcooks.vercel.app (Recent Works)
 *  plus Anuj's six newest sites (newcineverse, anujgpt, anujbeats,
 *  anujtubes, shreeshyamstore, anujcodes) — screenshots taken live
 *  from each site. To add/edit a project, just change this file —
 *  the whole site updates automatically.
 *
 *  image   -> file inside /public/projects (webp, ~1560px wide)
 *  liveUrl -> live demo (leave empty string "" if none)
 *  githubUrl -> repository (leave empty string "" if none)
 *  featured -> true  = big alternating showcase card
 *              false = grid card (first 6 visible, rest behind
 *                      "View All Projects")
 * ------------------------------------------------------------------ */

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  /** Short punchy label shown as a badge on featured cards */
  kicker?: string;
};

export const projects: Project[] = [
  /* ------------------ newest products (added Nov 2026) ------------------ */

  {
    title: "Cineverse",
    description:
      "A streaming discovery app for movies, series and anime in 4K Ultra HD — award-winning titles, Oscar nominees and genre browsing wrapped in a cinematic hero experience.",
    image: "/projects/cineverse.webp",
    tags: ["React", "4K Streaming", "UI/UX"],
    liveUrl: "https://newcineverse.pages.dev/",
    githubUrl: "",
    featured: true,
    kicker: "Streaming App",
  },
  {
    title: "AnujGPT",
    description:
      "A minimal, streaming AI chat workspace — model selector, suggestion chips and a clean dark interface built for focused, distraction-free conversations.",
    image: "/projects/anujgpt.webp",
    tags: ["Next.js", "AI / LLM", "Streaming UI"],
    liveUrl: "https://anujgpt.anujthakur9684.workers.dev/",
    githubUrl: "",
    featured: true,
    kicker: "AI Workspace",
  },
  {
    title: "AnujBeats",
    description:
      "A Spotify-style music streaming app — search artists and albums, build playlists and play with synced karaoke lyrics, shuffle/repeat and a full ambient player UI that melts into the album art.",
    image: "/projects/anujbeats.webp",
    tags: ["React", "Music Streaming", "Synced Lyrics"],
    liveUrl: "https://anujbeats.pages.dev/",
    githubUrl: "",
    featured: true,
    kicker: "Music Streaming",
  },
  {
    title: "AnujTubes",
    description:
      "A YouTube-style video platform with 28 categories, Shorts, subscriptions and a built-in Studio importer for bulk video imports — plus optional live YouTube Data API search and trending.",
    image: "/projects/anujtubes.webp",
    tags: ["JavaScript", "YouTube API", "SPA"],
    liveUrl: "https://anujtubes.pages.dev/",
    githubUrl: "",
    featured: true,
    kicker: "Video Platform",
  },
  {
    title: "Shree Shyam Store",
    description:
      "A complete e-commerce store for genuine fiber laser consumables & spares — protective lenses, nozzles, ceramic rings and optics for RayTools, OSPRI, WSX & BOCI cutting heads. Pan-India delivery from Ghaziabad with one-tap WhatsApp ordering.",
    image: "/projects/shree-shyam-store.webp",
    tags: ["Next.js", "E-Commerce", "WhatsApp API"],
    liveUrl: "https://shreeshyamstore.anujthakur9684.workers.dev/",
    githubUrl: "",
    featured: true,
    kicker: "E-Commerce",
  },
  {
    title: "Anujcodes",
    description:
      "The studio of Anuj — a full-stack developer in Meerut, India. Frontend engineering, backend & APIs, full-stack products, interface design, motion & interaction, performance & SEO. No lorem ipsum, ever.",
    image: "/projects/anujcodes.webp",
    tags: ["Next.js", "TypeScript", "Full Stack", "UI/UX"],
    liveUrl: "https://anujcodes.vercel.app/",
    githubUrl: "",
    featured: true,
    kicker: "Developer Studio",
  },

  /* ---------------------- earlier featured work ---------------------- */

  {
    title: "Anuj Portfolio",
    description:
      "Modern portfolio website interface with smooth animations and an intuitive user experience design — a personal brand built to leave a first impression.",
    image: "/projects/anuj-portfolio.webp",
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    liveUrl: "https://anujthakurportfolio.netlify.app/",
    githubUrl: "",
    featured: true,
    kicker: "Personal Brand",
  },
  {
    title: "Krishi Sakhi",
    description:
      "An agricultural companion platform covering every aspect and query of a farmer's daily life — powered by built-in AI assistance with a smooth, intuitive interface.",
    image: "/projects/krishi-sakhi.webp",
    tags: ["Built-in AI", "React", "UI/UX", "Mobile"],
    liveUrl: "https://newkrishisakhi.netlify.app/",
    githubUrl: "",
    featured: true,
    kicker: "AI + AgriTech",
  },
  {
    title: "Notes Hub",
    description:
      "A fresh take on note-taking — a notes platform interface with smooth animations and an intuitive, distraction-free experience for students.",
    image: "/projects/notes-hub.webp",
    tags: ["React", "UI/UX", "Mobile"],
    liveUrl: "https://mietnoteshub.netlify.app/",
    githubUrl: "",
    featured: true,
    kicker: "Productivity",
  },

  /* ---------------------- grid projects ---------------------- */

  {
    title: "Happy Birthday 2.0",
    description:
      "A modern birthday website — version 2.0 with richer interactions, smoother animations and a more polished celebratory experience.",
    image: "/projects/happy-birthday-20.webp",
    tags: ["HTML5", "CSS", "UI/UX"],
    liveUrl: "https://anujcooks.github.io/Happy-Birthday-Dev/",
    githubUrl: "https://github.com/AnujCooks/Happy-Birthday-Dev",
    featured: false,
  },
  {
    title: "Github Profile",
    description:
      "A live window into my code — explore the raw repositories behind every project on this page.",
    image: "/projects/github-profile.webp",
    tags: ["Git", "GitHub"],
    liveUrl: "",
    githubUrl: "https://github.com/AnujCooks",
    featured: false,
  },
  {
    title: "3D-Vortex",
    description:
      "A shader-powered 3D vortex — real-time, GPU-driven motion that runs right in the browser.",
    image: "/projects/3d-vortex.webp",
    tags: ["3D", "Shaders", "Animation"],
    liveUrl: "https://anujcooks.github.io/3D-Vortex/",
    githubUrl: "https://github.com/AnujCooks/3D-Vortex",
    featured: false,
  },
  {
    title: "Fireflies Jar",
    description:
      "Fireflies in a jar — a dreamy GreenSock-powered animation where light drifts exactly like the real thing.",
    image: "/projects/fireflies-jar.webp",
    tags: ["React", "TypeScript", "GSAP"],
    liveUrl: "https://anujcooks.github.io/Fireflies-jar/",
    githubUrl: "https://github.com/AnujCooks/Fireflies-jar",
    featured: false,
  },
  {
    title: "Monster Cursor",
    description:
      "A playful cursor effect — a cute monster that follows your cursor everywhere across the screen.",
    image: "/projects/monster-cursor.webp",
    tags: ["JavaScript", "Animation", "UI/UX"],
    liveUrl: "https://anujcooks.github.io/Reptile-Monstar-Cursor-Effect/",
    githubUrl: "https://github.com/AnujCooks/Reptile-Monstar-Cursor-Effect",
    featured: false,
  },
  {
    title: "Pong Game",
    description:
      "The classic arcade game, rebuilt for the browser — clean motion, instant play, zero install.",
    image: "/projects/pong-game.webp",
    tags: ["JavaScript", "Game", "Animation"],
    liveUrl: "https://anujcooks.github.io/Pong-Game/",
    githubUrl: "https://github.com/AnujCooks/Pong-Game",
    featured: false,
  },
  {
    title: "Spooky Login Form",
    description:
      "A floating ghost follows your typing with its eyes, smiles at a valid email and covers its eyes while you type your password. No peeks — only boos.",
    image: "/projects/spooky-login-form.webp",
    tags: ["HTML/CSS", "UI/UX", "JavaScript"],
    liveUrl: "https://anujcooks.github.io/Interactive-Spooky-Login-Form/",
    githubUrl: "https://github.com/AnujCooks/Interactive-Spooky-Login-Form",
    featured: false,
  },
  {
    title: "Happy Birthday",
    description:
      "The original animated birthday website — smooth animations and an intuitive, joyful user experience.",
    image: "/projects/happy-birthday.webp",
    tags: ["JavaScript", "Animation", "UI/UX"],
    liveUrl: "https://anujcooks.github.io/Happy-Birthday/",
    githubUrl: "https://github.com/AnujCooks/Happy-Birthday",
    featured: false,
  },
  {
    title: "Anuj Card 2.0",
    description:
      "Version 2.0 of my digital I-Card — a refined layout with smoother micro-interactions.",
    image: "/projects/anuj-card-20.webp",
    tags: ["UI/UX", "CSS", "Animation"],
    liveUrl: "https://anujcooks.github.io/About-Me/About-Me-2.0/",
    githubUrl: "https://github.com/AnujCooks/About-Me",
    featured: false,
  },
  {
    title: "Anuj Card",
    description:
      "A modern digital I-Card interface — a compact identity card with smooth animations.",
    image: "/projects/anuj-card.webp",
    tags: ["UI/UX", "CSS", "Animation"],
    liveUrl: "https://anujcooks.github.io/About-Me/",
    githubUrl: "https://github.com/AnujCooks/About-Me",
    featured: false,
  },
  {
    title: "Spidy Cursor",
    description:
      "A cute spider that crawls along with your cursor everywhere on the screen — a playful DOM animation experiment.",
    image: "/projects/spidy-cursor.webp",
    tags: ["JavaScript", "Animation", "UI/UX"],
    liveUrl: "https://anujcooks.github.io/Spidy/",
    githubUrl: "https://github.com/AnujCooks/Spidy",
    featured: false,
  },
];

/** Featured projects keep their order; grid = everything else. */
export const featuredProjects = projects.filter((p) => p.featured);
export const gridProjects = projects.filter((p) => !p.featured);
export const INITIAL_GRID_COUNT = 6;
