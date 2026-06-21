import { Button } from "../ui/Button";

type Link = { label: string; href: string; external?: boolean };

type Props = {
  heading: string;
  body?: string;
  primary: Link;
  secondary?: Link;
  tags?: string[];
  /** Base path (no extension) of an optional atmospheric background image.
   *  When set, the band renders as a dark, scrimmed "moment". */
  image?: string;
};

export function CtaBand({ heading, body, primary, secondary, tags, image }: Props) {
  if (image) {
    return (
      // Scoped dark-theme island: tokens flip so text is light and the
      // primary button turns green — both legible over the dark photo.
      <div
        data-theme="dark"
        className="relative isolate overflow-hidden rounded-[12px] border border-line"
      >
        <picture>
          <source srcSet={`${image}.webp`} type="image/webp" />
          {/* Decorative full-bleed background; optimized webp+jpg already generated. */}
          <img
            src={`${image}.jpg`}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </picture>
        {/* Lighter directional scrim only — lets the photo stay bright while
            keeping the centered text legible (no flat full-cover darkening). */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-paper/55 via-paper/15 to-paper/65"
          aria-hidden
        />
        <div className="relative px-6 py-16 text-center md:px-10 md:py-24">
          <h2 className="text-balance font-display text-3xl text-ink md:text-4xl lg:text-[2.6rem]">
            {heading}
          </h2>
          {body && (
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink-2">{body}</p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {secondary && (
              <Button href={secondary.href} variant="ghost" external={secondary.external}>
                {secondary.label}
              </Button>
            )}
            <Button href={primary.href} external={primary.external}>
              {primary.label}
            </Button>
          </div>
          {tags && tags.length > 0 && (
            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2">
              {tags.map((t) => (
                <span key={t} className="font-mono text-[11px] text-ink-2">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[8px] border border-line bg-raised p-8 text-center md:p-14">
      <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative">
        <h2 className="text-balance font-display text-3xl text-ink md:text-4xl">{heading}</h2>
        {body && (
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink-2">{body}</p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {secondary && (
            <Button href={secondary.href} variant="ghost" external={secondary.external}>
              {secondary.label}
            </Button>
          )}
          <Button href={primary.href} external={primary.external}>
            {primary.label}
          </Button>
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {tags.map((t) => (
              <span key={t} className="font-mono text-[11px] text-muted">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
