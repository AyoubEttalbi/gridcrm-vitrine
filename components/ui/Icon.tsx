// Maps the string icon keys stored in content modules to Phosphor SSR glyphs,
// so content stays serializable and pages render icons by name. One family
// (Phosphor), one stroke weight ("duotone"-free regular), set globally here.
import type { Icon as PhosphorIcon, IconProps } from "@phosphor-icons/react";
import {
  Phone,
  CreditCard,
  EnvelopeSimple,
  Lightning,
  Calculator,
  Cloud,
  Flame,
  Plugs,
  Code,
  Vault,
  Export,
  MapPin,
  ArrowsClockwise,
  GridFour,
  Gauge,
  ChartBar,
  Signature,
  GraduationCap,
  Sparkle,
  MagnetStraight,
  Coins,
  FlowArrow,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

const REGISTRY: Record<string, PhosphorIcon> = {
  Phone,
  CreditCard,
  EnvelopeSimple,
  Lightning,
  Calculator,
  Cloud,
  Flame,
  Plugs,
  Code,
  Vault,
  Export,
  MapPin,
  ArrowsClockwise,
  GridFour,
  Gauge,
  ChartBar,
  Signature,
  GraduationCap,
  Sparkle,
  MagnetStraight,
  Coins,
  FlowArrow,
  ShieldCheck,
};

export function Icon({ name, ...props }: { name: string } & IconProps) {
  const Glyph = REGISTRY[name] ?? Sparkle;
  return <Glyph weight="regular" {...props} />;
}
