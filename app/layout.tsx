import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import { SITE_URL } from "@/lib/constants";
import { routesSeo } from "@/content/seo";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { AnimeScript } from "@/components/layout/AnimeScript";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";

const home = routesSeo[0];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: home.title, template: "%s · GridCRM" },
  description: home.description,
  applicationName: "GridCRM",
  openGraph: {
    siteName: "GridCRM",
    locale: "fr_FR",
    type: "website",
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      data-theme="light"
      className={`${fontVariables} h-full`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <AnimeScript />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
