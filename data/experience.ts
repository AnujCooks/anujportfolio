/* ------------------------------------------------------------------
 *  EXPERIENCE — professional journey timeline.
 *  ⚠️ Dates are placeholders — replace `duration` with your actual
 *  dates (e.g. "Jan 2025 – Feb 2025"). Everything here is editable.
 * ------------------------------------------------------------------ */

export type ExperienceItem = {
  kind: "work" | "education";
  org: string;
  role: string;
  duration: string; // ← EDIT ME: e.g. "Jan 2025 – Feb 2025"
  location: string;
  points: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    kind: "work",
    org: "CodeAlpha",
    role: "Web Development Intern",
    duration: "Add your dates", // ← EDIT ME
    location: "Remote · Internship",
    points: [
      "Built responsive, pixel-accurate user interfaces with HTML, CSS, JavaScript and React as part of a structured internship program.",
      "Delivered task-based projects — landing pages and interactive UI components — reviewed and approved within deadlines.",
      "Strengthened version-control and clean-code collaboration practices using Git & GitHub.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
  {
    kind: "education",
    org: "Computer Science Engineering", // ← EDIT ME: add your university name
    role: "Bachelor's Degree",
    duration: "Add your year", // ← EDIT ME
    location: "Uttar Pradesh, India",
    points: [
      "Focus on data structures, algorithms, databases, operating systems and web technologies.",
      "Applied coursework to real products — shipping 14+ live web projects alongside academics.",
    ],
    tags: ["DSA", "DBMS", "OS", "Web Dev"],
  },
];
