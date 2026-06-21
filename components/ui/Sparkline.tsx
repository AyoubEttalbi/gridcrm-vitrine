// Inline SVG sparkline drawn from data, single accent stroke + faint area fill.
// Generated from tokens (no chart library, no chart-junk).
export function Sparkline({
  data = [8, 12, 10, 16, 14, 20, 18, 24],
  width = 220,
  height = 56,
  className,
}: {
  data?: number[];
  width?: number;
  height?: number;
  className?: string;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pad = 4;
  const stepX = (width - pad * 2) / (data.length - 1);
  const points = data.map((d, i) => {
    const x = pad + i * stepX;
    const y = pad + (height - pad * 2) * (1 - (d - min) / range);
    return [x, y] as const;
  });
  const line = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${pad},${height - pad} ${line} ${width - pad},${height - pad}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      width="100%"
      preserveAspectRatio="none"
      role="img"
      aria-label="Tendance"
    >
      <polygon points={area} fill="var(--accent-wash)" />
      <polyline
        points={line}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
