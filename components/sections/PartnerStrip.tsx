import { BrandLogo } from "../ui/BrandLogo";

export function PartnerStrip({
  heading,
  names,
}: {
  heading: string;
  names: string[];
}) {
  // Duplicate the set so the marquee loops seamlessly at translateX(-50%).
  const items = [...names, ...names];
  return (
    <div>
      <p className="text-center font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        {heading}
      </p>
      <div className="marquee mt-8 overflow-hidden">
        <div className="marquee-track items-center gap-x-12 md:gap-x-16">
          {items.map((n, i) => (
            <div
              key={`${n}-${i}`}
              className="flex shrink-0 items-center opacity-80"
              aria-hidden={i >= names.length}
            >
              <BrandLogo name={n} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
