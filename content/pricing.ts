// /tarifs content, verbatim from references.md section 7.

export const pricingHeader = {
  heading: "Un prix par utilisateur. Tout le CRM. Rien qui s'ajoute au panier.",
  sub: "Seules les intégrations tierces restent facturées par leurs éditeurs, à prix public.",
};

export const pricingCta = {
  heading: "Un tarif clair, tout le CRM inclus.",
  body: "Un prix par utilisateur, sans surprise. Demandez une démo et repartez avec un devis chiffré pour votre cabinet.",
};

export type Plan = {
  name: string;
  target: string;
  priceAnnual: string;
  priceAnnualNote: string;
  priceMonthly: string;
  priceMonthlyNote: string;
  cta: { label: string; href: string };
  popular?: boolean;
  inheritLine?: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Solo",
    target: "Le courtier indépendant",
    priceAnnual: "39 € HT/mois",
    priceAnnualNote: "1 utilisateur, annuel",
    priceMonthly: "49 € HT/mois",
    priceMonthlyNote: "mensuel sans engagement",
    cta: { label: "Demander l'accès", href: "/contact/" },
    features: [
      "Pipeline courtage complet (MWh, fournisseurs, horizons 2034+)",
      "Comparatifs multi-fournisseurs illimités",
      "Génération mandats ACD + signature GridSign",
      "Tableau de bord temps réel",
      "Import CSV + mapping assisté",
      "Support email sous 24h ouvrées",
    ],
  },
  {
    name: "Cabinet",
    target: "Équipes qui pilotent un cabinet",
    priceAnnual: "69 € HT/mois",
    priceAnnualNote: "/utilisateur, annuel",
    priceMonthly: "89 € HT/mois",
    priceMonthlyNote: "mensuel",
    cta: { label: "Demander une démo", href: "/contact/" },
    popular: true,
    inheritLine: "Tout Solo sans limite, plus :",
    features: [
      "Téléphonie VoIP FreeSWITCH (supervision, call focus, routage)",
      "Intégrations GRDF ADICT + Enedis natives",
      "Calcul auto des commissions & rétributions",
      "Export comptable + factures PDF conformes",
      "Multi-équipes + rôles personnalisés",
      "Déploiement 48h (formation & reprise incluses)",
      "Support prioritaire courriel + téléphone",
    ],
  },
  {
    name: "Groupe",
    target: "Cabinets multi-sites / consolidés",
    priceAnnual: "119 € HT/mois",
    priceAnnualNote: "/utilisateur, annuel",
    priceMonthly: "139 € HT/mois",
    priceMonthlyNote: "mensuel",
    cta: { label: "Parler à un expert", href: "/contact/" },
    inheritLine: "Tout Cabinet, plus :",
    features: [
      "Multi-entités · consolidation reportings",
      "SSO SAML 2.0 + provisioning SCIM",
      "Audit trail complet + exports RGPD à la demande",
      "SLA 99,9 % avec pénalités",
      "Customer Success Manager dédié",
      "Roadmap partagée",
      "Onboarding sur-mesure + formation administrateurs",
    ],
  },
];

export const pricingFinePrint =
  "Tous les prix sont HT. Accès sur demande — qualification par un expert courtage avant déploiement. Résiliation en 1 clic depuis l'admin.";

// "Ce qu'on ne facture jamais" value grid.
export const neverChargeHeading = "Ce qu'on ne facture jamais";
export const neverCharge: { title: string; detail: string }[] = [
  { title: "Conçu & hébergé en France", detail: "Paris" },
  { title: "Hébergement souverain", detail: "Supabase France, aucun transfert hors UE" },
  { title: "Fait par des courtiers", detail: "Grid Energies est un cabinet de courtage" },
  {
    title: "Support humain à Paris",
    detail: "comprend la différence entre un PDL et un PCE. Pas de tickets envoyés en Inde",
  },
  { title: "Déploiement 48h", detail: "" },
  {
    title: "Téléphonie VoIP FreeSWITCH",
    detail: "SIP trunk externe en sus au consommé",
  },
  { title: "Signature GridSign eIDAS", detail: "archivage 10 ans inclus" },
  {
    title: "Intégrations GRDF + Enedis ADICT",
    detail: "credentials fournis, zéro saisie",
  },
  { title: "Chiffrement AES-256 + audit trail", detail: "" },
  { title: "Conformité RGPD native", detail: "" },
  {
    title: "Facturation & export comptable",
    detail: "Sage, Pennylane, Cegid compatibles",
  },
  {
    title: "Utilisateurs illimités dans le plan",
    detail: "Vous payez au siège, pas aux modules",
  },
];

// Competitor comparison matrix.
export const comparisonHeading = "Ce que facturent les autres CRM du marché";
export const comparisonSubhead = "tarifs publics relevés avril 2026";
export const comparisonColumns = [
  "Outil",
  "Entrée",
  "Milieu→haut",
  "Engagement",
  "Téléphonie",
  "Signature",
  "Setup",
];
export type ComparisonRow = {
  tool: string;
  isGrid?: boolean;
  cells: string[]; // Entrée, Milieu→haut, Engagement, Téléphonie, Signature, Setup
};
export const comparisonRows: ComparisonRow[] = [
  {
    tool: "GridCRM",
    isGrid: true,
    cells: ["49 €", "89 € → 139 €", "Mensuel ou annuel", "Incluse", "Incluse", "Formation incluse"],
  },
  {
    tool: "Pipedrive",
    cells: ["14 €", "39 € → 79 €", "Mensuel ou annuel", "Add-on", "Add-on Smart Docs", "Self-service"],
  },
  {
    tool: "HubSpot Sales",
    cells: ["15 €", "90 € → sur devis", "Annuel", "Minutes plafonnées", "Add-on", "Onboarding 1 470 €+"],
  },
  {
    tool: "Salesforce Sales Cloud",
    cells: ["25 €", "100 $ → 330 $", "Annuel", "Sales Dialer en sus", "Add-on AppExchange", "Intégrateur requis"],
  },
  {
    tool: "Axonaut",
    cells: ["34,99 € (3 ans)", "→ 69,99 €", "Mensuel à 3 ans", "Module inclus", "Module inclus", "Self-service"],
  },
  {
    tool: "Sellsy",
    cells: ["49 € (min 2 users)", "89 € → 119 €", "Annuel 12 mois", "Add-on", "Add-on", "Accompagnement en sus"],
  },
  {
    tool: "JobPhoning",
    cells: ["49,95 €", "Sur devis", "Mensuel ou annuel", "SIP à fournir", "Non inclus", "Fichiers 0,16 €/contact"],
  },
  {
    tool: "CRM spécialisés courtage énergie",
    cells: ["Sur devis", "Sur devis", "Annuel + setup", "Variable", "Variable", "Projet sur-mesure"],
  },
];
export const comparisonSources = {
  intro: "Sources (consultées 18 avril 2026)",
  list: [
    "pipedrive.com/fr/pricing",
    "hubspot.com",
    "salesforce.com/fr",
    "axonaut.com/content/prix",
    "sellsy.com",
    "jobphoning.com",
    "nocrm.io",
    "monday.com",
    "zoho.com",
  ],
};

export const integrationsPricingHeading = "Intégrations tierces, à prix public";

// Pricing-page testimonial variant.
export const pricingTestimonial = {
  quote:
    "On a testé trois CRM avant GridCRM. À chaque fois, le prix affiché et le prix réel étaient deux mondes. Ici, ce qu'on voit c'est ce qu'on paie — et le CRM est fait pour notre métier, pas adapté à coups de modules.",
  author: "Cyril Daphniet",
  role: "Fondateur · Grid Energies (cabinet utilisateur)",
  initials: "CD",
};

export const pricingFaq = {
  heading: "Questions fréquentes",
  items: [
    {
      q: "Les prix affichés comprennent-ils tous les modules ?",
      a: "Oui : pipeline, comparatifs, stats, mandats, GridSign, facturation, commissions et VoIP interne sont inclus. Aucun module CRM supplémentaire n'est facturé.",
    },
    {
      q: "Qu'est-ce qui reste facturé séparément ?",
      a: "Uniquement les services externes tiers : SIP trunk, Stripe par paiement, Brevo au volume, emails OVH. GridCRM ne prend aucune marge.",
    },
    {
      q: "Quel engagement contractuel ?",
      a: "Mensuel ou annuel (20 % de remise). Résiliation avec préavis de 30 jours sur le mensuel, à l'échéance sur l'annuel. Données exportables 90 jours après la fin du contrat.",
    },
    {
      q: "Frais de mise en route ?",
      a: "Non, jamais. Import, paramétrage et formation sont inclus (Cabinet & Groupe). Le plan Solo bénéficie d'un onboarding autonome documenté.",
    },
    {
      q: "Peut-on tester avant ?",
      a: "Pas de libre-service. Une démo personnalisée de 45 min sur vos cas, puis un devis et un plan de déploiement.",
    },
    {
      q: "Comment évoluer d'un plan à l'autre ?",
      a: "À tout moment depuis l'administration, effectif à la prochaine échéance mensuelle.",
    },
  ],
};
