/* ------------------------------------------------------------------
 *  SKILLS — grouped tech stack. Icons come from the `simple-icons`
 *  package (accurate brand marks). Add/remove freely.
 * ------------------------------------------------------------------ */

export type Skill = { name: string; /** simple-icons export name, e.g. "siReact" */ icon: string };
export type SkillGroup = { title: string; blurb: string; icon: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Interfaces that feel alive",
    icon: "Layout",
    skills: [
      { name: "HTML5", icon: "siHtml5" },
      { name: "CSS3", icon: "siCss3" },
      { name: "JavaScript", icon: "siJavascript" },
      { name: "TypeScript", icon: "siTypescript" },
      { name: "React.js", icon: "siReact" },
      { name: "Next.js", icon: "siNextdotjs" },
      { name: "Tailwind CSS", icon: "siTailwindcss" },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs & server logic",
    icon: "Server",
    skills: [
      { name: "Node.js", icon: "siNodedotjs" },
      { name: "Express.js", icon: "siExpress" },
    ],
  },
  {
    title: "Databases",
    blurb: "Data that scales",
    icon: "Database",
    skills: [
      { name: "MongoDB", icon: "siMongodb" },
      { name: "PostgreSQL", icon: "siPostgresql" },
      { name: "Firebase", icon: "siFirebase" },
    ],
  },
  {
    title: "Languages",
    blurb: "Foundations of computer science",
    icon: "Code2",
    skills: [
      { name: "Python", icon: "siPython" },
      { name: "Java", icon: "siOpenjdk" },
      { name: "C", icon: "siC" },
    ],
  },
  {
    title: "Tools",
    blurb: "The daily workflow",
    icon: "Wrench",
    skills: [
      { name: "Git", icon: "siGit" },
      { name: "GitHub", icon: "siGithub" },
      { name: "Postman", icon: "siPostman" },
      { name: "VS Code", icon: "lucideCode2" },
    ],
  },
];
