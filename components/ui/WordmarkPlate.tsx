import { cn } from "@/lib/utils";

// Uniform monochrome wordmark plate, used everywhere a partner/integration logo
// is implied. Logo-only: never a category label underneath.
export function WordmarkPlate({ name, className }: { name: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-12 items-center justify-center rounded-[4px] border border-line bg-sunken px-4 text-center text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-ink",
        className,
      )}
    >
      {name}
    </div>
  );
}
