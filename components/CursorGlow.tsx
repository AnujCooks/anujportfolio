"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Soft cyan glow that trails the pointer — desktop & fine pointers only. */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 140, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 140, damping: 22, mass: 0.6 });
  const reduce = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce.current) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 240);
      y.set(e.clientY - 240);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[480px] w-[480px] rounded-full opacity-40 mix-blend-screen"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle at center, rgba(34,211,238,0.10) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
