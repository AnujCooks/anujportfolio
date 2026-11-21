import { Code2 } from "lucide-react";
import {
  siHtml5,
  siCss3,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siMongodb,
  siPostgresql,
  siFirebase,
  siPython,
  siOpenjdk,
  siC,
  siGit,
  siGithub,
  siPostman,
} from "simple-icons";

/** Accurate brand marks (simple-icons paths), tree-shaken to what we use.
 *  Note: simple-icons v13 removed Java & VS Code brand marks (trademark),
 *  so Java uses the OpenJDK mark and VS Code falls back to a Lucide icon. */
const ICONS: Record<string, { path: string; hex: string }> = {
  siHtml5,
  siCss3,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siMongodb,
  siPostgresql,
  siFirebase,
  siPython,
  siOpenjdk,
  siC,
  siGit,
  siGithub,
  siPostman,
};

/** Non-simple-icons fallbacks (name → brand hex). */
const FALLBACK_HEX: Record<string, string> = { lucideCode2: "007acc" };

export function brandHex(name: string): string {
  return ICONS[name]?.hex ?? FALLBACK_HEX[name] ?? "8b5cf6";
}

export default function BrandIcon({ name, size = 18 }: { name: string; size?: number }) {
  if (name === "lucideCode2") {
    return <Code2 size={size} aria-hidden className="shrink-0 transition-colors duration-300" />;
  }
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="shrink-0 transition-colors duration-300"
    >
      <path d={icon.path} />
    </svg>
  );
}
