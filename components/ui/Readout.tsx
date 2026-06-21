import { cn } from "@/lib/utils";

type Props = {
  label: string;
  value: React.ReactNode;
  delta?: string;
  sub?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

// The universal instrument-stat: mono uppercase label, large tabular value,
// optional accent delta. Reused on every stat surface so figures read as one
// calibrated instrument.
export function Readout({ label, value, delta, sub, className, size = "md" }: Props) {
  const valueCls =
    size === "lg"
      ? "text-3xl md:text-4xl"
      : size === "sm"
        ? "text-xl"
        : "text-2xl md:text-[1.75rem]";
  const isPositive = !!delta && delta.trim().startsWith("+");
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
      <span className={cn("font-mono leading-none tabular-nums text-ink", valueCls)}>
        {value}
      </span>
      {delta && (
        <span className="font-mono text-xs text-accent">
          {isPositive ? "▲ " : ""}
          {delta}
        </span>
      )}
      {sub && <span className="text-xs leading-snug text-muted">{sub}</span>}
    </div>
  );
}
