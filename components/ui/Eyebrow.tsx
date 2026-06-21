import { cn } from "@/lib/utils";

// Mono uppercase label with a leading hairline rule. Used SPARINGLY
// (max ~1 per 3 sections) per the eyebrow-restraint rule.
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
        className,
      )}
    >
      <span className="h-px w-8 bg-current opacity-50" aria-hidden />
      {children}
    </p>
  );
}
