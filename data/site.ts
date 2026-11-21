/* ------------------------------------------------------------------
 *  Central site configuration — edit anything here in one place.
 * ------------------------------------------------------------------ */

export const site = {
  name: "Anuj Thakur",
  shortName: "ANUJ",
  headline: "I Build Digital Experiences That Make an Impact.",
  intro: "HEY, I'M ANUJ 👋",
  role: "Computer Science Engineer · Full-Stack Developer",
  description:
    "A Computer Science Engineer passionate about building modern web applications, scalable digital products and creative solutions.",
  email: "anujthakur9684@gmail.com",
  location: "Meerut, Uttar Pradesh, India",

  /** Path of the resume file inside /public — replace the PDF anytime. */
  resumeUrl: "/Anuj-Thakur-Resume.pdf",

  /** Public URL used for SEO metadata — update after deploying. */
  siteUrl: "https://anuj-thakur.vercel.app",

  socials: {
    github: "https://github.com/AnujCooks",
    linkedin: "https://www.linkedin.com/in/anuj-thakur-979a6330b",
    instagram: "https://www.instagram.com/anuj.insights",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
