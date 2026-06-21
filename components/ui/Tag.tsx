import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[4px] border px-2 py-1 font-mono text-[11px] leading-none",
        accent
          ? "border-accent-line bg-accent-wash text-accent"
          : "border-line bg-sunken text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
