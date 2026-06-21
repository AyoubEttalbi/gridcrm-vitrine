// /ecosysteme content, verbatim from references.md section 8.

export const ecosystemHeader = {
  heading: "GridCRM est le noyau central d'un ensemble d'outils métier, sans ressaisie.",
};

export const ecosystemCta = {
  heading: "Un écosystème, une seule source de vérité.",
  body: "Leads, mandats, signatures, formation et fournisseur dédié s'enchaînent autour de GridCRM, sans ressaisie ni rupture de données.",
};

export type EcoTool = {
  name: string;
  role: string;
  detail: string;
  isCore?: boolean;
  visit?: boolean;
  href?: string;
  icon?: string;
};

export const ecoTools: EcoTool[] = [
  {
    name: "GridCRM",
    role: "Noyau central",
    detail: "CRM, comptabilité, RH, recrutement, prospection, signature.",
    isCore: true,
    href: "https://app.gridcrm.fr",
    icon: "GridFour",
  },
  {
    name: "Grid PILOT",
    role: "Espace client entreprises",
    detail: "portail contrats/factures/documents.",
    visit: true,
    href: "https://gridpilot.fr",
    icon: "Gauge",
  },
  {
    name: "Mon Comparatif Énergie",
    role: "Génération de leads",
    detail: "prospects → leads auto dans GridCRM.",
    visit: true,
    href: "https://moncomparatifenergie.fr",
    icon: "ChartBar",
  },
  {
    name: "GridSign",
    role: "Signature électronique propriétaire",
    detail: "mandats/contrats → archivage auto.",
    visit: true,
    href: "https://gridsign.fr",
    icon: "Signature",
  },
  {
    name: "OHM Énergies Pro",
    role: "Fournisseur dédié",
    detail: "souscriptions, suivi contractuel, reporting partagé.",
    visit: true,
    href: "https://www.ohm-energie.com",
    icon: "Lightning",
  },
  {
    name: "Grid Academy",
    role: "Formation en ligne",
    detail: "parcours RH reliés.",
    visit: true,
    href: "https://gridacademy.fr",
    icon: "GraduationCap",
  },
  {
    name: "Grid AI",
    role: "IA propriétaire",
    detail: "passerelle multi-modèles + RAG ; emails, analyse entreprise, scoring leads.",
    icon: "Sparkle",
  },
];

export const dataFlowHeading = "Flux de données";
export const dataFlow: { from: string; to: string; detail: string }[] = [
  { from: "Mon Comparatif Énergie", to: "GridCRM", detail: "lead créé avec conso en MWh" },
  { from: "GridCRM", to: "GridSign", detail: "mandat/contrat envoyé à signature" },
  { from: "GridSign", to: "GridCRM", detail: "signé → archivé, statut lead mis à jour" },
  { from: "GridCRM", to: "Grid PILOT", detail: "données client validées alimentent l'espace entreprise" },
  { from: "GridCRM", to: "OHM Énergies Pro", detail: "souscriptions transmises, reporting partagé" },
  { from: "Grid AI", to: "GridCRM", detail: "emails de prospection + enrichissement fiches entreprise" },
];

export const whyEcosystemHeading = "Pourquoi un écosystème";
export const whyEcosystemStats: { value: string; title: string; detail: string }[] = [
  {
    value: "−4 h/semaine/courtier",
    title: "Zéro double-saisie",
    detail: "lead Mon Comparatif → contact qualifié GridCRM, pas d'import CSV",
  },
  {
    value: "0 faille inter-apps",
    title: "Sécurité unifiée",
    detail: "un seul SSO, une politique de rôles, un DPO",
  },
  {
    value: "−42 % coût logiciel vs stack éclatée",
    title: "TCO maîtrisé",
    detail: "une facture, tarif par utilisateur tout-en-un",
  },
  {
    value: "1 interlocuteur support",
    title: "Support centralisé",
    detail: "un ticket, une équipe",
  },
];
