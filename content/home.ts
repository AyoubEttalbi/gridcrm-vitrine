// Homepage content, verbatim from references.md section 5.

export const hero = {
  eyebrow: "CRM Souverain · Courtage en énergie",
  // h1 split so the closing word carries the italic accent treatment.
  h1Lead: "CRM nouvelle génération pour le courtage en ",
  h1Accent: "énergie",
  sub: "Le SaaS tout-en-un pour les courtiers en énergie. Pipeline commercial, comparatifs d'offres, signatures électroniques, VoIP, données Enedis et GRDF — tout ce dont votre cabinet a besoin, dans une plateforme unique hébergée en France.",
  reassurance: [
    { strong: "Hébergement France", rest: "données chiffrées par cabinet" },
    { strong: "Installation en 10 minutes", rest: "aucune infrastructure requise" },
    { strong: "API GRDF ADICT, Enedis, Stripe, Brevo intégrées", rest: "" },
  ],
};

// Hero console: an honest, fully token-built product simulation (labelled
// "simulé"). The whole panel is interface chrome — no fake screenshot image.
export const heroConsole = {
  appPath: "app.gridcrm.fr",
  brand: "GridCRM",
  search: "Recherche leads, mandats, factures…",
  liveLabel: "En direct",
  locale: "FR",
  workspace: "Pipeline courtage · Q4 2024",
  updated: "Mis à jour il y a 14 secondes",
  views: ["Kanban", "Liste", "Gantt"],
  nav: [
    {
      group: "Pilotage",
      items: [
        { label: "Pipeline", icon: "GridFour", active: true },
        { label: "Comparatifs", icon: "ChartBar", badge: "38" },
        { label: "Mandats", icon: "Signature", badge: "12" },
      ],
    },
    {
      group: "Opérations",
      items: [
        { label: "Leads", icon: "Users" },
        { label: "Prospection IA", icon: "Sparkle" },
        { label: "Facturation", icon: "Receipt" },
        { label: "RH", icon: "IdentificationBadge" },
      ],
    },
    {
      group: "Système",
      items: [
        { label: "Rapports", icon: "ChartLineUp" },
        { label: "Paramètres", icon: "Gear" },
      ],
    },
  ],
  // value is the integer count target; frac/suffix are appended after count-up.
  stats: [
    { label: "CA signé (cumul)", tag: "2024", value: 4287600, group: true, frac: "", suffix: " €", delta: "+18,4% vs 2023" },
    { label: "MWh négociés", tag: "live", value: 18432, group: true, frac: "", suffix: "", delta: "+12,1%" },
    { label: "Mandats signés", tag: "mois", value: 47, group: false, frac: "", suffix: "", delta: "+6 vs M-1" },
    { label: "Taux de signature", tag: "trimestre", value: 31, group: false, frac: ",2", suffix: " %", delta: "+2,4 pts" },
  ],
  columns: [
    {
      title: "Leads entrants",
      count: "126",
      cards: [
        { company: "SAS Boulangerie Verdier", meta: "CFE · CRC · Lorraine", vol: "9,8 GWh", tag: "Entrant J-2", score: "Score 84" },
        { company: "Transports Lefèvre SAS", meta: "Pro · IDF", vol: "4,2 GWh", tag: "Entrant J-1", score: "Score 76" },
        { company: "Papeterie du Rhône", meta: "Industriel · Auvergne-Rhône", vol: "4,5 GWh", tag: "À rappeler" },
      ],
    },
    {
      title: "Comparatifs",
      count: "35",
      cards: [
        { company: "SAS Boulangerie Verdier", meta: "EDF · Engie · TotalEnergies", vol: "9,8 GWh", tag: "3 offres reçues" },
        { company: "Groupe Pellier", meta: "5 fournisseurs", vol: "12 GWh", tag: "Comparatif généré" },
        { company: "Garages Martin", meta: "2 offres · relance", vol: "840 MWh", tag: "Fournisseur muet" },
      ],
    },
    {
      title: "À signer",
      count: "8",
      cards: [
        { company: "SAS Boulangerie Verdier", meta: "Mandat envoyé · eIDAS", vol: "9,8 GWh", tag: "En attente client" },
        { company: "Groupe Pellier", meta: "2 signataires DK", vol: "12 GWh", tag: "Relance J+1" },
      ],
    },
    {
      title: "Signés ce mois",
      count: "47",
      cards: [
        { company: "Transports Lefèvre SAS", meta: "Signé J-2", vol: "1,2 GWh", signed: true },
        { company: "Logistique Nord-Est", meta: "Signé J-5", vol: "3,4 GWh", signed: true },
        { company: "Menuiseries Boisvert", meta: "Signé J-7", vol: "750 MWh", signed: true },
      ],
    },
  ],
  stamp: "Signé",
};

export const modulesSection = {
  heading: "Tous les modules dont un courtier a besoin",
  intro:
    "Prospection, CRM, comparatifs, téléphonie, mandats, facturation — nativement intégrés, zéro outil externe.",
  cards: [
    {
      title: "Prospection & Leads",
      body: "Captez, qualifiez et suivez vos prospects depuis un pipeline unifié. Leads web, imports, campagnes — tout converge dans GridCRM.",
    },
    {
      title: "Comparatifs multi-fournisseurs",
      body: "Comparez en quelques clics jusqu'à 20 fournisseurs d'énergie sur des contrats jusqu'en 2034. Données GRDF et Enedis à jour.",
    },
    {
      title: "Statistiques temps réel",
      body: "Pilotez votre cabinet avec des dashboards dynamiques — CA signé, MWh négociés, taux de transformation, activité par commercial.",
    },
    {
      title: "Téléphonie intégrée",
      body: "FreeSWITCH natif, supervision, call focus, routage intelligent. Chaque appel est tracé dans le CRM, aucune perte d'information.",
    },
    {
      title: "Intégrations GRDF & Enedis",
      body: "ADICT en production, récupération automatique des PDL et PCE, mise à jour des données consommation. Zéro saisie manuelle.",
    },
    {
      title: "Mandats ACD & Signatures",
      body: "Génération automatique des mandats ACD, signature électronique GridSign propriétaire, archivage conforme RGPD.",
    },
  ],
};

export const resultsSection = {
  heading: "Des résultats concrets, pas du vent",
  tagline:
    "GridCRM n'est pas un énième outil SaaS : c'est le CRM pensé par des courtiers pour des courtiers. Les chiffres parlent.",
  counters: [
    {
      value: 200,
      suffix: "+",
      group: true,
      label: "Cabinets équipés",
      sub: "Cabinets de courtage équipés partout en France.",
    },
    {
      value: 12,
      suffix: "k+",
      group: true,
      label: "Contrats négociés",
      sub: "Contrats négociés avec notre outil depuis le lancement.",
    },
    {
      value: 48,
      suffix: "h",
      group: true,
      label: "Déploiement",
      sub: "Déploiement complet, formation incluse, reprise des données.",
    },
    {
      value: 2034,
      suffix: "+",
      group: false,
      label: "Horizon négociation",
      sub: "Contrats long terme jusqu'en 2034+.",
    },
  ],
  liveWidget: {
    source: "app.gridcrm.fr/analytics",
    metrics: [
      { label: "CA signé", value: "482 k€", delta: "+18%" },
      { label: "Comparatifs", value: "1 240", delta: "+24%" },
      { label: "Actifs", value: "48", delta: "+6%" },
      { label: "MWh négociés 12 mois", value: "38 420 MWh", delta: "" },
      { label: "Horizon contrats", value: "Jusqu'en 2034+", delta: "" },
    ],
  },
};

export const featuresBand = {
  heading: "Des fonctionnalités pensées pour la réalité du courtage",
  intro:
    "Du premier lead à la commission versée, chaque étape s'enchaîne dans un seul outil : sans ressaisie, sans export, sans angle mort.",
  flowLabel: "Le parcours d'un dossier",
  flow: [
    { step: "Lead capturé", detail: "Formulaire web", icon: "MagnetStraight" },
    { step: "Comparatif lancé", detail: "20 fournisseurs", icon: "ChartBar" },
    { step: "Mandat signé", detail: "eIDAS · GridSign", icon: "Signature" },
    { step: "Commission", detail: "Calculée auto", icon: "Coins" },
  ],
  kpisLabel: "Indicateurs cabinet",
  // value = animated count target; rendered output stays identical to source.
  kpis: [
    { label: "CA signé", value: 482, group: false, suffix: " k€" },
    { label: "MWh négociés", value: 38420, group: true, suffix: "" },
    { label: "Contrats actifs", value: 127, group: false, suffix: "" },
    { label: "Taux transfo.", value: 34, group: false, suffix: "%" },
    { label: "Appels/jour", value: 86, group: false, suffix: "" },
    { label: "Mandats/mois", value: 41, group: false, suffix: "" },
  ],
  valueCards: [
    {
      title: "Workflow unifié",
      icon: "FlowArrow",
      body: "Du prospect à la facturation, chaque étape s'enchaîne dans un workflow visible de toute l'équipe — statuts, relances, signatures.",
    },
    {
      title: "Conformité RGPD native",
      icon: "ShieldCheck",
      body: "Hébergement France, chiffrement AES-256, audit trail complet.",
    },
    {
      title: "Commissions & rétributions",
      icon: "Coins",
      body: "Calcul automatique des commissions par commercial, fournisseur, type de contrat. Export compta et rapports mensuels en un clic.",
    },
  ],
};

export const testimonial = {
  quote:
    "GridCRM a transformé notre cabinet. Avant, on jonglait entre Excel, téléphone perso et mail. Aujourd'hui, tout est centralisé — prospection, comparatifs, mandats, facturation. On a gagné 40% de productivité sur la phase comparatif.",
  author: "Cyril Daphniet",
  role: "Fondateur · Grid Energies",
  initials: "CD",
};

export const ecosystemTeaser = {
  heading: "GridCRM au centre de votre activité énergie.",
  links: [
    {
      name: "Grid PILOT",
      role: "Espace client entreprises",
      href: "https://gridpilot.fr",
      icon: "Gauge",
    },
    {
      name: "GridSign",
      role: "Signature électronique",
      href: "https://gridsign.fr",
      icon: "Signature",
    },
    {
      name: "Grid Academy",
      role: "Formation en ligne",
      href: "https://gridacademy.fr",
      icon: "GraduationCap",
    },
    {
      name: "Mon Comparatif Énergie",
      role: "Générateur de comparatifs",
      href: "https://moncomparatifenergie.fr",
      icon: "ChartBar",
    },
  ],
  cta: { label: "Découvrir l'écosystème", href: "/ecosysteme/" },
};

export const homeFaq = {
  heading: "Questions fréquentes",
  items: [
    {
      q: "GridCRM propose-t-il une démo ?",
      a: "Oui, nous proposons une démo personnalisée de 45 minutes avec l'un de nos experts courtage. Vous nous présentez vos cas d'usage et vous repartez avec un devis chiffré adapté à la taille de votre cabinet.",
    },
    {
      q: "Puis-je changer d'offre plus tard ?",
      a: "Oui. Vous pouvez faire évoluer votre plan à tout moment depuis l'administration, avec effet à la prochaine échéance mensuelle.",
    },
    {
      q: "Quelle est votre politique d'annulation ?",
      a: "Engagement mensuel ou annuel. Résiliation avec un préavis de 30 jours sur le mensuel, à l'échéance sur l'annuel. Vos données restent exportables 90 jours après la fin du contrat.",
    },
    {
      q: "Les données GRDF / Enedis sont-elles incluses ?",
      a: "Oui. Les intégrations GRDF ADICT et Enedis sont natives dans les plans Cabinet et Groupe : credentials fournis, récupération automatique des PDL et PCE, zéro saisie manuelle.",
    },
    {
      q: "Comment fonctionne la facturation ?",
      a: "Un prix par utilisateur, tout le CRM inclus. Seules les intégrations tierces (SIP trunk, Stripe, Brevo, emails) restent facturées par leurs éditeurs, à prix public.",
    },
    {
      q: "Comment importer mes prospects existants ?",
      a: "Par import CSV avec mapping assisté. Sur les plans Cabinet et Groupe, la reprise des données est incluse dans le déploiement.",
    },
  ],
  sideCard: {
    initials: ["CD", "MJ", "PL"],
    text: "Notre équipe répond sous 24h ouvrées. Démo, tarifs, intégration, RGPD — on couvre tout.",
    cta: { label: "Nous contacter", href: "/contact/" },
    note: "Démo personnalisée · 45 min",
  },
};

export const finalCta = {
  heading: "Prêt à reprendre le contrôle de votre cabinet ?",
  body: "Rejoignez les cabinets de courtage qui pilotent leur activité avec GridCRM. Déploiement 48h, formation incluse, vos données restent en France.",
  tags: ["Démo sous 24h ouvrées", "Mensuel sans engagement", "Hébergement France", "RGPD"],
};
