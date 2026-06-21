"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { nav, cta } from "@/content/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm transition-colors hover:text-ink",
                isActive(item.href) ? "text-ink" : "text-muted",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-[21px] left-0 right-0 h-px bg-accent" aria-hidden />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={cta.connexion.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            {cta.connexion.label}
          </a>
          <Button href={cta.demo.href} className="px-4 py-2">
            {cta.demo.label}
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-line text-ink"
          >
            {open ? <X size={20} aria-hidden /> : <List size={20} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav className="shell flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2.5 text-sm",
                  isActive(item.href) ? "text-accent" : "text-ink-2",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4">
              <a
                href={cta.connexion.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted"
              >
                {cta.connexion.label}
              </a>
              <Button href={cta.demo.href} className="w-full" >
                {cta.demo.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
