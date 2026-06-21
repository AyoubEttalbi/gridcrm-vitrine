// /securite content, verbatim from references.md section 10.

export const securityHeader = {
  heading: "La sécurité au cœur de GridCRM.",
  badges: [
    "Hébergement France",
    "Chiffrement TLS 1.3 + AES-256",
    "Conforme RGPD",
    "Serveurs dédiés",
  ],
};

export const securityCta = {
  heading: "Une infrastructure souveraine, vérifiable de bout en bout.",
  body: "Hébergement en France, chiffrement TLS 1.3 et AES-256, journalisation complète. Demandez les documents de conformité ou un échange avec notre équipe.",
};

export const securitySections: { title: string; bullets: string[] }[] = [
  {
    title: "Authentification Google Workspace",
    bullets: ["SSO Google", "2FA hérité", "Révocation instantanée", "Sessions JWT"],
  },
  {
    title: "Rôles et permissions",
    bullets: [
      "Rôles prédéfinis/personnalisables",
      "Permissions par module/action",
      "Audit des accès",
      "Séparation stricte par équipe",
    ],
  },
  {
    title: "Chiffrement des données",
    bullets: ["TLS 1.3", "AES-256 au repos", "Clés en HSM", "Hachage des données sensibles"],
  },
  {
    title: "Hébergement souverain France",
    bullets: [
      "Serveurs en France",
      "Aucun transfert hors UE",
      "Sauvegardes quotidiennes chiffrées",
      "Infra dédiée (pas de cloud mutualisé)",
    ],
  },
  {
    title: "Conformité RGPD",
    bullets: [
      "Registre des traitements",
      "Droits RGPD en un clic",
      "Minimisation",
      "Politique de conservation par type",
    ],
  },
  {
    title: "Journalisation et audit",
    bullets: [
      "Journal immuable horodaté",
      "Traçabilité connexions/actions",
      "Alertes activité suspecte",
      "Export des logs",
    ],
  },
];

export const architectureHeading = "Trois couches de défense, zéro angle mort";
export const architectureLayers: {
  index: string;
  title: string;
  subtitle: string;
  controls: string[];
}[] = [
  {
    index: "01",
    title: "Accès",
    subtitle: "Identité & permissions",
    controls: [
      "SSO Google Workspace obligatoire",
      "2FA hérité",
      "Tokens JWT signés rotation 12 h",
      "Blocage IP après 5 échecs",
    ],
  },
  {
    index: "02",
    title: "Application",
    subtitle: "Contrôles métier",
    controls: [
      "Row-Level Security PostgreSQL",
      "Séparation stricte par société",
      "Validation server-side systématique",
      "Journalisation de chaque action",
    ],
  },
  {
    index: "03",
    title: "Données",
    subtitle: "Chiffrement & isolation",
    controls: [
      "AES-256 au repos / TLS 1.3 en transit",
      "Clés en HSM souverain",
      "Sauvegardes chiffrées H+1",
      "Hébergement France métropolitaine",
    ],
  },
];

export const complianceHeading = "Conformité";
export const complianceNote = "Documents fournis sur demande";
export const complianceDocs = [
  "Registre des traitements RGPD",
  "Contrat de sous-traitance type (art. 28)",
  "Politique de sécurité du SI (PSSI)",
  "Plan de continuité d'activité (PCA)",
  "Rapport annuel de pentests",
];

export const securityFacts: { label: string; value: string }[] = [
  { label: "Hébergement France", value: "OVHcloud Roubaix" },
  { label: "Conformité RGPD", value: "Privacy by design" },
  { label: "Signature eIDAS", value: "GridSign intégré" },
  { label: "Pentests annuels", value: "cabinet indépendant" },
  { label: "RTO/RPO", value: "4 h / 1 h" },
  { label: "DPO dédié", value: "dpo@gridenergies.fr" },
];

export const securityFaq = {
  heading: "Questions fréquentes",
  items: [
    {
      q: "Où sont stockées mes données ?",
      a: "Exclusivement en France métropolitaine, infra OVHcloud à Roubaix. Aucune donnée hors UE.",
    },
    {
      q: "Que deviennent mes données si je quitte GridCRM ?",
      a: "Elles restent exportables (JSON, CSV, SQL) pendant 90 jours après la fin du contrat, puis sont supprimées de nos infrastructures.",
    },
    {
      q: "Qui a accès à mes données chez Grid Energies ?",
      a: "Seules les personnes habilitées, sur la base du moindre privilège. Chaque accès est tracé dans un journal immuable et placé sous la responsabilité du DPO.",
    },
    {
      q: "GridCRM est-il conforme au RGPD ?",
      a: "Oui, par conception (privacy by design) : registre des traitements, droits RGPD en un clic, minimisation et politique de conservation par type de donnée.",
    },
    {
      q: "Comment sont gérés les incidents de sécurité ?",
      a: "Détection via alertes sur activité suspecte, journal immuable horodaté et procédure de gestion d'incident. Le plan de continuité d'activité garantit un RTO/RPO de 4 h / 1 h.",
    },
    {
      q: "Réalisez-vous des audits de sécurité ?",
      a: "Oui, des pentests annuels menés par un cabinet indépendant. Le rapport est disponible sur demande.",
    },
  ],
};
