import { MonogramTile } from "../ui/MonogramTile";
import { cn } from "@/lib/utils";

// Note: the source quote is fixed brand copy and runs longer than the usual
// landing-page snippet, so it is set at a calmer scale to stay glanceable.
export function Testimonial({
  quote,
  author,
  role,
  initials,
  className,
}: {
  quote: string;
  author: string;
  role: string;
  initials: string;
  className?: string;
}) {
  return (
    <figure className={cn("mx-auto max-w-3xl text-center", className)}>
      <blockquote className="text-balance font-display text-xl leading-snug text-ink md:text-2xl">
        {"« "}
        {quote}
        {" »"}
      </blockquote>
      <figcaption className="mt-7 flex items-center justify-center gap-3">
        <MonogramTile initials={initials} size="sm" />
        <span className="text-left">
          <span className="block text-sm font-medium text-ink">{author}</span>
          <span className="block font-mono text-xs text-muted">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
