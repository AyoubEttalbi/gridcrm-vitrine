import { cn } from "@/lib/utils";

type Props = {
  appPath: string;
  label?: string;
  simulated?: boolean;
  children: React.ReactNode;
  className?: string;
};

// Honest product-surface simulation: a real token-built panel behind a mono
// app-chrome bar, explicitly labelled "simulé". Never a fake screenshot <img>.
export function InstrumentCard({ appPath, label, simulated = true, children, className }: Props) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[8px] border border-line bg-raised",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b border-line bg-sunken px-3 py-2">
        <div className="flex min-w-0 items-center gap-2 font-mono text-[10.5px] text-muted">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
          <span className="truncate">
            {appPath}
            {label ? ` · ${label}` : ""}
          </span>
        </div>
        {simulated && (
          <span className="shrink-0 font-mono text-[9.5px] uppercase tracking-[0.18em] text-faint">
            simulé
          </span>
        )}
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}
