import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
  size?: "md" | "lg";
};

// Vertical-stack header (eyebrow -> headline -> intro). Never the banned
// split-header pattern.
export function SectionHeader({ eyebrow, title, intro, className, as = "h2", size = "md" }: Props) {
  const Heading = as;
  return (
    <div className={cn("max-w-[68ch]", className)}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <Heading
        className={cn(
          "font-display tracking-[-0.012em] text-ink text-balance",
          size === "lg"
            ? "text-4xl leading-[1.04] md:text-5xl lg:text-6xl"
            : "text-3xl leading-[1.08] md:text-4xl lg:text-[2.6rem]",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-ink-2">{intro}</p>
      )}
    </div>
  );
}
