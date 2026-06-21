// /integrations content, verbatim from references.md section 9.

export const integrationsHeader = {
  heading: "GridCRM s'intègre à vos outils métier.",
  sub: "Téléphonie, paiement, e-mail, comptabilité.",
};

export const integrationsCta = {
  heading: "Connecté à votre stack, souverain par défaut.",
  body: "Téléphonie, paiement, e-mail, comptabilité, données GRDF et Enedis : tout s'intègre, et vos données restent en France.",
};

export type RecommendedPartner = {
  name: string;
  category: string;
  tags: string[];
  note?: string;
  url: string;
  icon: string;
};

export const recommendedPartners: RecommendedPartner[] = [
  {
    name: "Ringover",
    category: "Téléphonie cloud",
    tags: ["Click-to-call", "Enregistrement", "Pop-up CRM"],
    url: "https://www.ringover.fr",
    icon: "Phone",
  },
  {
    name: "Stripe",
    category: "Paiement",
    tags: ["Checkout", "SEPA", "CB", "Subscription"],
    url: "https://stripe.com",
    icon: "CreditCard",
  },
  {
    name: "Brevo",
    category: "E-mail marketing",
    tags: ["SMTP", "Templates", "Tracking"],
    note: "délivrabilité sous votre domaine",
    url: "https://www.brevo.com",
    icon: "EnvelopeSimple",
  },
  {
    name: "OHM Énergies Pro",
    category: "Fournisseur énergie",
    tags: ["Souscriptions", "Reporting", "Commissions"],
    url: "https://www.ohm-energie.com",
    icon: "Lightning",
  },
  {
    name: "Pennylane",
    category: "Comptabilité",
    tags: ["Factures", "Écritures", "Expert-comptable"],
    url: "https://www.pennylane.com",
    icon: "Calculator",
  },
  {
    name: "OVHcloud",
    category: "Infrastructure",
    tags: ["Serveurs dédiés", "France", "Souverain"],
    url: "https://www.ovhcloud.com",
    icon: "Cloud",
  },
];

export const sponsoredDisclaimer =
  "Les liens « sponsored » sont des liens de parrainage : une commission est perçue auprès du partenaire, le tarif reste inchangé.";

export type TechConnector = {
  name: string;
  description: string;
  tags: string[];
  icon: string;
};

export const techConnectors: TechConnector[] = [
  {
    name: "GRDF ADICT",
    description:
      "Rapatriement auto de la conso gaz (index, historiques) via le contrat ADICT de Grid Energies.",
    tags: ["API GRDF", "Index gaz", "Historique"],
    icon: "Flame",
  },
  {
    name: "Enedis",
    description: "Conso électrique via l'API Enedis, courbes de charge.",
    tags: ["API Enedis", "Courbe de charge", "C5"],
    icon: "Lightning",
  },
  {
    name: "Webhooks HMAC",
    description: "Événements GridCRM poussés sur votre endpoint.",
    tags: ["HMAC-SHA256", "JSON", "Retry auto"],
    icon: "Plugs",
  },
  {
    name: "API REST GridCRM",
    description: "API v1, auth par clé API, scopes granulaires, rate-limit documenté.",
    tags: ["REST", "API key", "Scopes"],
    icon: "Code",
  },
];

export const sovereigntyHeading = "Souveraineté & réversibilité";
export const sovereigntyCards: { title: string; detail: string; icon: string }[] = [
  {
    title: "Vos données vous appartiennent",
    detail: "espace isolé par cabinet, aucune mutualisation",
    icon: "Vault",
  },
  { title: "Export à tout moment", detail: "JSON, CSV, SQL", icon: "Export" },
  {
    title: "Hébergement France",
    detail: "OVHcloud FR métropolitaine, AES-256 au repos",
    icon: "MapPin",
  },
  { title: "Synchro temps réel", detail: "webhooks/API", icon: "ArrowsClockwise" },
];
