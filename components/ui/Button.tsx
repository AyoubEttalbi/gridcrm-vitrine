import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-sm font-medium transition-[background-color,color,transform,border-color] duration-150 active:translate-y-px focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary: "bg-btn-bg text-btn-fg px-5 py-2.5 hover:bg-btn-bg-hover",
  ghost:
    "border border-line text-ink px-5 py-2.5 hover:border-accent hover:text-accent",
  link: "text-accent underline-offset-4 hover:underline",
};

export function Button({ href, children, variant = "primary", external, className }: Props) {
  const cls = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
