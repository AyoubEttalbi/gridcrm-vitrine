// Global site shell content (header nav, footer, recurring CTAs and contacts).
// Verbatim from references.md sections 0, 2, 3, 14.

export const brand = {
  badge: "G",
  wordmark: "Grid CRM",
  baseline: "Le CRM des courtiers en énergie",
  // Footer brand tagline (in-sentence dash preserved from source copy).
  tagline:
    "Le CRM des courtiers en énergie. Pipeline, comparatifs multi-fournisseurs, téléphonie VoIP, mandats eIDAS, facturation — tout-en-un, souverain.",
};

export const contact = {
  company: "Grid Energies SAS",
  address: "59 rue de Ponthieu, 75008 Paris",
  email: "contact@gridenergies.fr",
  dpo: "dpo@gridenergies.fr",
  phone: "01 41 09 16 98",
};

export const appUrl = "https://app.gridcrm.fr";
export const companyUrl = "https://gridenergies.fr";

// Reusable CTA definitions so labels stay identical everywhere (one label per intent).
export const cta = {
  demo: { label: "Demander une démo", href: "/contact/" },
  connexion: { label: "Connexion", href: appUrl, external: true },
  essai: { label: "Essai gratuit 14 jours", href: "/contact/" },
  voirFonctionnalites: { label: "Voir les fonctionnalités", href: "/fonctionnalites/" },
  voirTarifs: { label: "Voir les tarifs", href: "/tarifs/" },
  voirSecurite: { label: "Voir la sécurité", href: "/securite/" },
  demanderAcces: { label: "Demander un accès", href: "/contact/" },
  parlerExpert: { label: "Parler à un expert", href: "/contact/" },
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Fonctionnalités", href: "/fonctionnalites/" },
  { label: "Intégrations", href: "/integrations/" },
  { label: "Sécurité", href: "/securite/" },
  { label: "Écosystème", href: "/ecosysteme/" },
  { label: "Tarifs", href: "/tarifs/" },
  { label: "Contact", href: "/contact/" },
];

export const footer = {
  columns: [
    {
      title: "Produit",
      links: [
        { label: "Fonctionnalités", href: "/fonctionnalites/" },
        { label: "Modules", href: "/fonctionnalites/" },
        { label: "Sécurité RGPD", href: "/securite/" },
        { label: "Intégrations", href: "/integrations/" },
        { label: "Tarifs", href: "/tarifs/" },
        { label: "Écosystème", href: "/ecosysteme/" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "Grid Energies", href: companyUrl, external: true },
        { label: "Nous contacter", href: "/contact/" },
        { label: "Blog énergie", href: "https://gridenergies.info", external: true },
        { label: "Grid Academy", href: "https://gridacademy.fr", external: true },
        { label: "Carrières", href: "https://gridenergies.pro", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/grid-energies", external: true },
      ],
    },
    {
      title: "Écosystème",
      links: [
        { label: "Grid PILOT", href: "https://gridpilot.fr", external: true },
        { label: "GridSign", href: "https://gridsign.fr", external: true },
        { label: "Mon Comparatif Énergie", href: "https://moncomparatifenergie.fr", external: true },
        { label: "OHM Énergies Pro", href: "https://www.ohm-energie.com", external: true },
      ],
    },
    {
      title: "Mentions légales",
      links: [
        { label: "Mentions légales", href: "/mentions-legales/" },
        { label: "Confidentialité RGPD", href: "/politique-confidentialite/" },
        { label: "CGV", href: "/legal/cgv/" },
        { label: "CGU", href: "/legal/cgu/" },
      ],
    },
  ] as { title: string; links: { label: string; href: string; external?: boolean }[] }[],
  copyright: "© 2026 Grid Energies. Tous droits réservés · Hébergé en France.",
};
