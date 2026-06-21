"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

// Signature card-entrance choreography, one variant per page, powered by
// Anime.js. The wrapper IS the card grid (pass grid classes via className) so
// 3D transforms get a real perspective from their direct parent.
export type WowVariant =
  | "rise"
  | "pop"
  | "flip"
  | "orbit"
  | "slideLeft"
  | "cascade"
  | "tilt";

type Params = Record<string, unknown>;

function preset(v: WowVariant): Params {
  switch (v) {
    case "pop":
      return {
        opacity: [0, 1],
        scale: [0.8, 1],
        translateY: [22, 0],
        duration: 1000,
        ease: "outElastic(1, .68)",
        delay: stagger(110),
      };
    case "flip":
      return {
        opacity: [0, 1],
        rotateY: [-72, 0],
        translateX: [26, 0],
        duration: 820,
        ease: "outExpo",
        delay: stagger(85),
      };
    case "orbit":
      return {
        opacity: [0, 1],
        scale: [0.62, 1],
        rotate: [-9, 0],
        duration: 880,
        ease: "outBack(2)",
        delay: stagger(70),
      };
    case "slideLeft":
      return {
        opacity: [0, 1],
        translateX: [-46, 0],
        duration: 820,
        ease: "outExpo",
        delay: stagger(120),
      };
    case "cascade":
      return {
        opacity: [0, 1],
        translateY: [34, 0],
        duration: 720,
        ease: "outExpo",
        delay: stagger(105),
      };
    case "tilt":
      return {
        opacity: [0, 1],
        rotateX: [26, 0],
        translateY: [30, 0],
        duration: 860,
        ease: "outExpo",
        delay: stagger(95),
      };
    case "rise":
    default:
      return {
        opacity: [0, 1],
        translateY: [38, 0],
        scale: [0.97, 1],
        duration: 800,
        ease: "outExpo",
        delay: stagger(90),
      };
  }
}

const NEEDS_PERSPECTIVE: WowVariant[] = ["flip", "tilt"];

export function Wow({
  variant = "rise",
  className,
  children,
  amount = 0.2,
}: {
  variant?: WowVariant;
  className?: string;
  children: React.ReactNode;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    // data-anim is only set when JS runs AND reduced-motion is off; otherwise
    // the cards stay visible (CSS gate inactive) and we do nothing.
    if (document.documentElement.getAttribute("data-anim") !== "on") return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".wow-card"));
    if (!cards.length) return;

    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      animate(cards, preset(variant));
    };

    // Fallback: if the observer API is missing, reveal immediately.
    if (typeof IntersectionObserver === "undefined") {
      cards.forEach((c) => (c.style.opacity = "1"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            play();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(root);
    return () => io.disconnect();
  }, [variant, amount]);

  return (
    <div
      ref={ref}
      className={className}
      style={NEEDS_PERSPECTIVE.includes(variant) ? { perspective: "1200px" } : undefined}
    >
      {children}
    </div>
  );
}
