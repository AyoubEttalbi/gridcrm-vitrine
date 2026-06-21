import Link from "next/link";
import { footer, brand, contact } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-sunken">
      <div className="shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">{brand.tagline}</p>
            <p className="mt-5 font-mono text-xs text-muted">{contact.address}</p>
            <a
              href={`mailto:${contact.email}`}
              className="font-mono text-xs text-accent hover:underline"
            >
              {contact.email}
            </a>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="font-mono text-xs text-muted">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
