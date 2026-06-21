import { Check } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type Item = { title: string; detail?: string };

export function Checklist({
  items,
  columns = 2,
  className,
}: {
  items: Item[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-8 gap-y-4",
        columns === 2 ? "sm:grid-cols-2" : "grid-cols-1",
        className,
      )}
    >
      {items.map((it) => (
        <li key={it.title} className="flex gap-3">
          <Check
            size={18}
            weight="bold"
            className="mt-0.5 shrink-0 text-accent"
            aria-hidden
          />
          <span className="text-sm leading-snug">
            <span className="text-ink">{it.title}</span>
            {it.detail ? (
              <span className="mt-0.5 block text-muted">{it.detail}</span>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}
