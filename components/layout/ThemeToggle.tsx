"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Resolve the effective theme on mount (after hydration) to avoid a
    // server/client mismatch. The applied <html data-theme> is the source of
    // truth (default light, overridden by a stored choice via ThemeScript).
    const applied = document.documentElement.getAttribute("data-theme");
    let next: Theme = applied === "dark" ? "dark" : "light";
    try {
      const stored = localStorage.getItem("gridcrm-theme");
      if (stored === "light" || stored === "dark") next = stored;
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(next);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("gridcrm-theme", next);
    } catch {
      // ignore
    }
  }

  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-line text-ink-2 transition-colors hover:border-accent hover:text-accent"
    >
      <Icon size={17} aria-hidden />
    </button>
  );
}
