// Single shared motion easing so the whole site has one physical feel.
// Institutional ease-out, no bounce.
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.12,
  base: 0.4,
  slow: 0.6,
} as const;

// Z-index scale, documented in one place (Section 6.F of the design rules).
export const Z = {
  base: 0,
  raised: 10,
  header: 40,
  overlay: 50,
  toast: 60,
} as const;

export const SITE_URL = "https://gridcrm.fr";
