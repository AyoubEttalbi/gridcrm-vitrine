import { Spectral, Hanken_Grotesk, Geist_Mono } from "next/font/google";

// Display: an engraved contemporary serif for H1/H2 at large sizes only.
// Chosen for institutional "fait par des courtiers" gravitas and strong French
// diacritic coverage. (Deliberately NOT Fraunces, which reads as an AI tell.)
export const display = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body / UI: a humanist grotesque, warmer and more legible than Inter, with
// full French accent coverage for the dense pricing / security / legal copy.
export const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Metadata layer: tabular mono carries every number, unit, ID and status so
// figures line up like a register (38 420 MWh, 482 k EUR, MD-2026-184, AES-256).
export const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
