// Brand-colored logotypes. Official SVGs for several of these brands are not in
// open icon sets (trademark), so these are clean recognizable wordmarks in each
// brand's real colors. Confirmed hexes are used where available (Stripe #635BFF,
// Brevo #0B996E, OVH #123F6D). Drop an official file into public/logos/<name>.svg
// and swap a case here to use the exact mark.
const SIZE = { md: "text-2xl", sm: "text-xl" } as const;

export function BrandLogo({
  name,
  size = "md",
}: {
  name: string;
  size?: keyof typeof SIZE;
}) {
  const s = SIZE[size];
  switch (name) {
    // --- Energy actors (homepage strip) ---
    case "Enedis":
      return (
        <span className={`select-none ${s} font-semibold lowercase tracking-tight`} style={{ color: "#3AAA35" }}>
          enedis
        </span>
      );
    case "GRDF":
      return (
        <span className={`select-none ${s} font-bold tracking-[0.08em]`} style={{ color: "#1A9FD9" }}>
          GRDF
        </span>
      );
    case "EDF":
      return (
        <span className={`select-none ${s} font-extrabold lowercase tracking-tight`} style={{ color: "#FE5715" }}>
          edf
        </span>
      );
    case "Engie":
      return (
        <span
          className={`select-none bg-clip-text ${s} font-bold lowercase tracking-tight text-transparent`}
          style={{ backgroundImage: "linear-gradient(90deg, #0084C7, #23D2B5)" }}
        >
          engie
        </span>
      );
    case "TotalEnergies":
      return (
        <span className="flex select-none items-center gap-1.5">
          <span
            aria-hidden
            className="inline-block h-3.5 w-3.5 rounded-[3px]"
            style={{ background: "conic-gradient(#ED1C24, #F58220, #FFCC00, #009639, #0072CE, #ED1C24)" }}
          />
          <span className="text-xl font-bold tracking-tight text-ink">TotalEnergies</span>
        </span>
      );

    // --- Recommended partners (integrations) ---
    case "Stripe":
      return (
        <span className={`select-none ${s} font-bold tracking-tight`} style={{ color: "#635BFF" }}>
          stripe
        </span>
      );
    case "Brevo":
      return (
        <span className={`select-none ${s} font-bold tracking-tight`} style={{ color: "#0B996E" }}>
          Brevo
        </span>
      );
    case "Ringover":
      return (
        <span className={`select-none ${s} font-bold tracking-tight`} style={{ color: "#1F6BFF" }}>
          Ringover
        </span>
      );
    case "Pennylane":
      return (
        <span className={`select-none ${s} font-bold tracking-tight`} style={{ color: "#4F46E5" }}>
          Pennylane
        </span>
      );
    case "OVHcloud":
      return (
        <span className={`select-none ${s} font-bold tracking-tight`}>
          <span style={{ color: "#123F6D" }}>OVH</span>
          <span style={{ color: "#5A7CB0" }}>cloud</span>
        </span>
      );
    case "OHM Énergies Pro":
      return (
        <span className={`select-none ${s} font-bold tracking-tight`}>
          <span style={{ color: "#2F9E44" }}>OHM</span>
          <span className="text-ink"> Énergies</span>
          <span className="font-medium text-muted"> Pro</span>
        </span>
      );

    default:
      return <span className={`select-none ${s} font-semibold text-ink`}>{name}</span>;
  }
}
