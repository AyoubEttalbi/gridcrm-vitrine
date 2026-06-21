import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="GridCRM, accueil"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-accent font-display text-lg font-medium leading-none text-on-accent">
        G
      </span>
      <span className="font-display text-lg tracking-[-0.01em] text-ink">Grid CRM</span>
    </Link>
  );
}
