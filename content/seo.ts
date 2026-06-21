// Exact per-route meta titles and sitemap priorities, verbatim from
// references.md section 1. Titles are applied with `title: { absolute }` so
// they render EXACTLY as captured (some are intentionally unaccented in <title>).

export type RouteSeo = {
  path: string;
  title: string;
  priority: number;
  description: string;
};

export const routesSeo: RouteSeo[] = [
  {
    path: "/",
    title: "GridCRM - CRM et logiciel de gestion pour courtiers en énergie",
    priority: 1.0,
    description:
      "Le SaaS tout-en-un pour les courtiers en énergie. Pipeline commercial, comparatifs d'offres, signatures électroniques, VoIP, données Enedis et GRDF, hébergé en France.",
  },
  {
    path: "/fonctionnalites/",
    title: "Fonctionnalites - CRM, comptabilité, RH et prospection IA | GridCRM",
    priority: 0.9,
    description:
      "Six modules complémentaires : CRM, comptabilité, ressources humaines, recrutement, prospection Grid AI et signature électronique. Du lead à la signature, sans quitter GridCRM.",
  },
  {
    path: "/tarifs/",
    title: "GridCRM - CRM et logiciel de gestion pour courtiers en énergie",
    priority: 0.9,
    description:
      "Un prix par utilisateur, tout le CRM. Plans Solo, Cabinet et Groupe. Seules les intégrations tierces restent facturées par leurs éditeurs, à prix public.",
  },
  {
    path: "/integrations/",
    title: "Intégrations - Souveraineté et connecteurs ouverts | GridCRM",
    priority: 0.8,
    description:
      "GridCRM s'intègre à vos outils métier : téléphonie, paiement, e-mail, comptabilité. Connecteurs GRDF ADICT et Enedis, webhooks HMAC, API REST. Hébergement souverain France.",
  },
  {
    path: "/ecosysteme/",
    title: "Ecosysteme Grid Energies - Outils interconnectes | GridCRM",
    priority: 0.8,
    description:
      "GridCRM est le noyau central d'un ensemble d'outils métier interconnectés : Grid PILOT, GridSign, Mon Comparatif Énergie, OHM Énergies Pro, Grid Academy et Grid AI. Sans ressaisie.",
  },
  {
    path: "/securite/",
    title: "Securite - Protection des données et hébergement France | GridCRM",
    priority: 0.7,
    description:
      "La sécurité au cœur de GridCRM : hébergement France, chiffrement TLS 1.3 et AES-256, conformité RGPD, serveurs dédiés. Trois couches de défense, zéro angle mort.",
  },
  {
    path: "/contact/",
    title: "Contact - Demander un acces a GridCRM | GridCRM",
    priority: 0.7,
    description:
      "Demandez un accès à GridCRM. Notre équipe vous recontacte sous 24 h ouvrées pour une démonstration personnalisée de 45 minutes.",
  },
  {
    path: "/mentions-legales/",
    title: "Mentions légales | GridCRM",
    priority: 0.3,
    description:
      "Mentions légales de GridCRM, édité par Grid Energies SAS, 59 rue de Ponthieu, 75008 Paris. Hébergeur OVHcloud, données stockées exclusivement en France métropolitaine.",
  },
  {
    path: "/politique-confidentialite/",
    title: "Politique de confidentialité | GridCRM",
    priority: 0.3,
    description:
      "Politique de confidentialité et de protection des données personnelles de GridCRM, conforme au RGPD. Données hébergées en France, jamais revendues ni transmises à des tiers.",
  },
  {
    path: "/legal/cgv/",
    title: "Conditions Générales de Vente | GridCRM",
    priority: 0.3,
    description:
      "Conditions Générales de Vente de GridCRM, édité par Grid Energies SAS. Abonnement mensuel ou annuel, résiliation, données exportables.",
  },
  {
    path: "/legal/cgu/",
    title: "Conditions Générales d'Utilisation | GridCRM",
    priority: 0.3,
    description:
      "Conditions Générales d'Utilisation de la plateforme GridCRM éditée par Grid Energies SAS.",
  },
];

export function seoFor(path: string): RouteSeo {
  const found = routesSeo.find((r) => r.path === path);
  if (!found) throw new Error(`No SEO entry for ${path}`);
  return found;
}
