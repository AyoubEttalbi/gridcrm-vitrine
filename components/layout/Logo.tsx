import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="GridCRM, accueil"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      {/* Brand mark (Grid Energies). Decorative — the link is labelled above. */}
      <img
        src="/logo-mark.png"
        alt=""
        aria-hidden
        width={39}
        height={28}
        className="h-7 w-auto"
      />
      <span className="font-display text-lg tracking-[-0.01em] text-ink">Grid CRM</span>
    </Link>
  );
}
