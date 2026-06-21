// /fonctionnalites content, verbatim from references.md section 6.

export const featuresHeader = {
  heading: "Tout ce dont un cabinet a besoin, dans un seul outil.",
  intro:
    "Six modules complémentaires, du lead à la signature, sans jamais quitter GridCRM.",
  tabs: [
    "CRM / Gestion des leads",
    "Comptabilité",
    "Ressources Humaines",
    "Recrutement",
    "Prospection Grid AI",
    "Signature électronique",
  ],
};

export type FeatureModule = {
  id: string;
  tab: string;
  index: string;
  title: string;
  intro: string;
  bullets: string[];
  mockup: Record<string, unknown> & { kind: string };
};

export const featureModules: FeatureModule[] = [
  {
    id: "crm",
    tab: "CRM / Gestion des leads",
    index: "01",
    title: "Module CRM / Gestion des leads",
    intro: "Centralisez l'ensemble de votre relation commerciale.",
    bullets: [
      "Pipeline commercial visuel avec étapes personnalisables",
      "Historique complet des échanges",
      "Comparatifs énergie intégrés pour chaque prospect",
      "Tableaux de bord et KPI commerciaux temps réel",
    ],
    mockup: {
      kind: "pipeline",
      title: "Pipeline",
      meta: "27 leads actifs · 680 k€",
      columns: [
        {
          stage: "Prospect",
          count: 12,
          items: [
            { name: "Boulangerie Martin", detail: "180 MWh" },
            { name: "Cabinet Lefebvre", detail: "420 MWh" },
          ],
        },
        {
          stage: "Qualifié",
          count: 7,
          items: [{ name: "Garage Dupuis", detail: "95 MWh, RDV J+2" }],
        },
        {
          stage: "Comparatif",
          count: 5,
          items: [{ name: "Clinique Saint-Luc", detail: "1 240 MWh, 3 offres" }],
        },
        {
          stage: "Signé",
          count: 3,
          items: [{ name: "Hôtel Le Grand", detail: "680 MWh" }],
        },
      ],
    },
  },
  {
    id: "comptabilite",
    tab: "Comptabilité",
    index: "02",
    title: "Module Comptabilité",
    intro: "Pilotez la santé financière de votre cabinet.",
    bullets: [
      "Génération + envoi auto des factures",
      "Suivi encaissements + relances auto",
      "KPI financiers + prévisionnel trésorerie",
      "Rapports comptables exportables (PDF, CSV)",
    ],
    mockup: {
      kind: "ledger",
      period: "Avril 2026",
      rows: [
        { label: "CA mois", value: "34 280 €", delta: "+12,4%" },
        { label: "À encaisser", value: "12 400 €", sub: "3 factures" },
        { label: "Relances", value: "980 €", sub: "1 facture" },
      ],
      invoices: "F-2026-0181 → 0184",
    },
  },
  {
    id: "rh",
    tab: "Ressources Humaines",
    index: "03",
    title: "Module Ressources Humaines",
    intro: "Gérez vos équipes efficacement.",
    bullets: [
      "Gestion congés/absences avec validation",
      "Évaluations de performance + objectifs",
      "Organigramme dynamique",
      "Fiches collaborateurs détaillées",
    ],
    mockup: {
      kind: "roster",
      title: "Équipe",
      meta: "12 collaborateurs",
      people: [
        { name: "Julie Morel", role: "Directrice commerciale", status: "Présente" },
        { name: "Antoine Faure", role: "Courtier senior", status: "Présent" },
        { name: "Sofia Ben Amor", role: "Courtière", status: "Congés" },
        { name: "Maxime Lopez", role: "Apporteur", status: "Télétravail" },
      ],
      note: "Congés à valider 3",
    },
  },
  {
    id: "recrutement",
    tab: "Recrutement",
    index: "04",
    title: "Module Recrutement",
    intro: "Trouvez les meilleurs talents pour faire grandir votre cabinet.",
    bullets: [
      "Publication d'offres multi-canal",
      "Pipeline candidatures visuel",
      "Scoring automatique des profils",
      "Workflow de validation par managers",
    ],
    mockup: {
      kind: "recruit",
      role: "Courtier·ère énergie B2B",
      meta: "12 candidatures · Paris · Ouvert",
      columns: [
        {
          stage: "Reçues",
          count: 8,
          items: [
            { name: "Léa Rossi", score: "82" },
            { name: "Mehdi Karim", score: "74" },
          ],
        },
        {
          stage: "Entretien",
          count: 3,
          items: [
            { name: "Claire Dupont", score: "91" },
            { name: "Tom Leclerc", score: "68" },
          ],
        },
        {
          stage: "Offre",
          count: 1,
          items: [{ name: "Inès Prévost", score: "95" }],
        },
      ],
    },
  },
  {
    id: "prospection",
    tab: "Prospection Grid AI",
    index: "05",
    title: "Module Prospection Grid AI",
    intro:
      "Accélérez votre développement commercial grâce à notre IA propriétaire.",
    bullets: [
      "Génération d'emails de prospection par Grid AI",
      "Séquences automatisées multi-étapes",
      "Analyse d'entreprise cible avec enrichissement",
      "Suggestions de leads qualifiés par scoring IA",
    ],
    mockup: {
      kind: "gridai",
      tool: "Grid AI · générateur d'emails",
      target: "Boulangerie Martin",
      subject: "Réduire votre facture énergie de 28 % en 2026",
      body: "Analyse de 180 MWh/an",
      openRate: "62 %",
      sequence: "Séq. 3 étapes",
    },
  },
  {
    id: "signature",
    tab: "Signature électronique",
    index: "06",
    title: "Module Signature électronique",
    intro: "Finalisez vos mandats et contrats en quelques clics.",
    bullets: [
      "Signature en ligne de mandats/contrats",
      "Archivage sécurisé + horodatage certifié eIDAS",
      "Modèles pré-configurés",
      "Suivi du statut temps réel",
    ],
    mockup: {
      kind: "signature",
      ref: "Mandat MD-2026-184",
      meta: "Boulangerie Martin · 180 MWh/an",
      progress: "2/3 signé",
      signers: [
        { name: "Julie Morel", role: "Grid Energies", status: "Signé" },
        { name: "Philippe Martin", role: "Gérant Boulangerie Martin", status: "Signé" },
        { name: "Service énergie TotalEnergies Pro", role: "", status: "En attente" },
      ],
      stamp: "eIDAS · Horodatage certifié 18 avr. 16:42",
    },
  },
];

export const featuresGridSignNote = "GridSign natif";

export const featuresClosingCta = {
  heading: "Vous voulez voir ces modules en action ?",
  body: "Demandez une démonstration personnalisée — 45 min avec un membre de l'équipe.",
};
