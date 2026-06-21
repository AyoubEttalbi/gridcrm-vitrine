import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** alternate sunken background to separate adjacent sections */
  alt?: boolean;
  /** remove the centered shell container (for full-bleed content) */
  bare?: boolean;
  containerClassName?: string;
  /** scroll-reveal the section content on entry (default true) */
  reveal?: boolean;
};

export function Section({
  id,
  children,
  className,
  alt,
  bare,
  containerClassName,
  reveal = true,
}: Props) {
  const inner = bare ? children : <div className={cn("shell", containerClassName)}>{children}</div>;
  return (
    <section id={id} className={cn("py-16 md:py-24", alt && "bg-sunken", className)}>
      {reveal ? <Reveal>{inner}</Reveal> : inner}
    </section>
  );
}
