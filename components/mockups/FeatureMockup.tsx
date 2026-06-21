import { InstrumentCard } from "../ui/InstrumentCard";
import { Tag } from "../ui/Tag";
import { cn } from "@/lib/utils";

// Honest per-module instrument panels for /fonctionnalites and the home modules.
// Driven by the typed mockup data in content/features.ts.

type Mockup = { kind: string } & Record<string, unknown>;

interface PipelineMockup {
  title: string;
  meta: string;
  columns: { stage: string; count: number; items: { name: string; detail: string }[] }[];
}
interface LedgerMockup {
  period: string;
  rows: { label: string; value: string; delta?: string; sub?: string }[];
  invoices: string;
}
interface RosterMockup {
  title: string;
  meta: string;
  people: { name: string; role: string; status: string }[];
  note: string;
}
interface RecruitMockup {
  role: string;
  meta: string;
  columns: { stage: string; count: number; items: { name: string; score: string }[] }[];
}
interface GridAiMockup {
  tool: string;
  target: string;
  subject: string;
  body: string;
  openRate: string;
  sequence: string;
}
interface SignatureMockup {
  ref: string;
  meta: string;
  progress: string;
  signers: { name: string; role: string; status: string }[];
  stamp: string;
}

const POSITIVE = new Set(["Présente", "Présent", "Signé"]);

function StatusPill({ status }: { status: string }) {
  const positive = POSITIVE.has(status);
  return (
    <span
      className={cn(
        "rounded-[4px] border px-1.5 py-0.5 font-mono text-[10px] leading-none",
        positive
          ? "border-accent-line bg-accent-wash text-accent"
          : "border-line bg-sunken text-muted",
      )}
    >
      {status}
    </span>
  );
}

function ColumnBoard({
  meta,
  columns,
}: {
  meta: string;
  columns: { stage: string; count: number; items: { name: string; detail?: string }[] }[];
}) {
  return (
    <>
      <p className="mb-3 font-mono text-[11px] text-muted">{meta}</p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {columns.map((col) => (
          <div key={col.stage} className="rounded-[4px] border border-line bg-sunken p-2.5">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] font-medium text-ink-2">{col.stage}</span>
              <span className="font-mono text-xs tabular-nums text-muted">{col.count}</span>
            </div>
            <ul className="mt-2 space-y-1.5">
              {col.items.map((it) => (
                <li
                  key={it.name}
                  className="rounded-[3px] border border-line bg-raised px-2 py-1.5"
                >
                  <div className="truncate text-[11px] font-medium text-ink">{it.name}</div>
                  {it.detail && (
                    <div className="mt-0.5 font-mono text-[10px] text-muted">{it.detail}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export function FeatureMockup({
  mockup,
  appPath = "app.gridcrm.fr",
}: {
  mockup: Mockup;
  appPath?: string;
}) {
  switch (mockup.kind) {
    case "pipeline": {
      const m = mockup as unknown as PipelineMockup;
      return (
        <InstrumentCard appPath={appPath} label={m.title}>
          <ColumnBoard meta={m.meta} columns={m.columns} />
        </InstrumentCard>
      );
    }
    case "recruit": {
      const m = mockup as unknown as RecruitMockup;
      return (
        <InstrumentCard appPath={appPath} label="Recrutement">
          <p className="mb-1 text-sm font-medium text-ink">{m.role}</p>
          <ColumnBoard
            meta={m.meta}
            columns={m.columns.map((c) => ({
              stage: c.stage,
              count: c.count,
              items: c.items.map((it) => ({ name: it.name, detail: it.score })),
            }))}
          />
        </InstrumentCard>
      );
    }
    case "ledger": {
      const m = mockup as unknown as LedgerMockup;
      return (
        <InstrumentCard appPath={appPath} label={m.period}>
          <div className="divide-y divide-line">
            {m.rows.map((r) => (
              <div key={r.label} className="flex items-center justify-between gap-4 py-2.5">
                <span className="text-sm text-ink-2">{r.label}</span>
                <span className="flex items-baseline gap-2">
                  <span className="font-mono text-base tabular-nums text-ink">{r.value}</span>
                  {r.delta && <span className="font-mono text-xs text-accent">{r.delta}</span>}
                  {r.sub && <span className="font-mono text-[10px] text-muted">{r.sub}</span>}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 border-t border-line pt-3">
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-muted">
              Factures
            </span>
            <span className="font-mono text-xs text-ink-2">{m.invoices}</span>
          </div>
        </InstrumentCard>
      );
    }
    case "roster": {
      const m = mockup as unknown as RosterMockup;
      return (
        <InstrumentCard appPath={appPath} label={m.title}>
          <p className="mb-3 font-mono text-[11px] text-muted">{m.meta}</p>
          <ul className="divide-y divide-line">
            {m.people.map((p) => (
              <li key={p.name} className="flex items-center justify-between gap-3 py-2.5">
                <span className="min-w-0">
                  <span className="block truncate text-sm text-ink">{p.name}</span>
                  <span className="block truncate text-[11px] text-muted">{p.role}</span>
                </span>
                <StatusPill status={p.status} />
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-line pt-3 font-mono text-[11px] text-muted">
            {m.note}
          </div>
        </InstrumentCard>
      );
    }
    case "gridai": {
      const m = mockup as unknown as GridAiMockup;
      return (
        <InstrumentCard appPath={appPath} label={m.tool}>
          <div className="rounded-[4px] border border-line bg-sunken p-3">
            <div className="font-mono text-[10.5px] uppercase tracking-wider text-muted">
              Cible
            </div>
            <div className="mt-0.5 text-sm font-medium text-ink">{m.target}</div>
            <div className="mt-3 font-mono text-[10.5px] uppercase tracking-wider text-muted">
              Sujet
            </div>
            <div className="mt-0.5 text-sm text-ink-2">{m.subject}</div>
            <div className="mt-2 text-[12px] text-muted">{m.body}</div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Tag accent>Taux ouverture {m.openRate}</Tag>
            <Tag>{m.sequence}</Tag>
          </div>
        </InstrumentCard>
      );
    }
    case "signature": {
      const m = mockup as unknown as SignatureMockup;
      return (
        <InstrumentCard appPath={appPath} label={m.ref}>
          <div className="flex items-center justify-between gap-3">
            <span className="text-[12px] text-muted">{m.meta}</span>
            <span className="font-mono text-xs text-accent">{m.progress}</span>
          </div>
          <ul className="mt-3 divide-y divide-line">
            {m.signers.map((s) => (
              <li key={s.name} className="flex items-center justify-between gap-3 py-2.5">
                <span className="min-w-0">
                  <span className="block truncate text-sm text-ink">{s.name}</span>
                  {s.role && <span className="block truncate text-[11px] text-muted">{s.role}</span>}
                </span>
                <StatusPill status={s.status} />
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-line pt-3 font-mono text-[10.5px] text-muted">
            {m.stamp}
          </div>
        </InstrumentCard>
      );
    }
    default:
      return null;
  }
}
