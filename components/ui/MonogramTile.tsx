import { cn } from "@/lib/utils";

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-11 w-11 text-base",
  lg: "h-14 w-14 text-xl",
};

// Initials tile standing in for any person/headshot. No stock or fabricated faces.
export function MonogramTile({
  initials,
  size = "md",
  className,
}: {
  initials: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[4px] border border-accent-line bg-accent-wash font-display font-medium text-accent",
        sizes[size],
        className,
      )}
      aria-hidden
    >
      {initials}
    </span>
  );
}
