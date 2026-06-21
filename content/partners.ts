// Partners and integrations, verbatim from references.md section 4.

// 4a. Energy & ecosystem actors (homepage logo strip).
export const energyActorsHeading =
  "Intégré avec les acteurs majeurs de l'énergie";

export const energyActors: { name: string; note: string }[] = [
  { name: "Enedis", note: "données conso électricité (API Enedis, courbe de charge C5)" },
  { name: "GRDF", note: "données conso gaz (GRDF ADICT en production, index/historique gaz)" },
  { name: "EDF", note: "fournisseur" },
  { name: "Engie", note: "fournisseur" },
  { name: "TotalEnergies", note: "fournisseur" },
  { name: "Brevo", note: "emailing transactionnel & campagnes" },
];

// 4b. Recommended partners / paid third-party integrations (Tarifs + Intégrations).
export type PaidPartner = {
  name: string;
  category: string;
  pricing: string;
  note: string;
  url: string;
};

export const paidPartners: PaidPartner[] = [
  {
    name: "Ringover",
    category: "Téléphonie VoIP / SIP trunk",
    pricing: "À partir de 19 €/user/mois",
    note: "Trunk SIP certifié compatible GridCRM FreeSWITCH · click-to-call, enregistrement, transcription, pop-up CRM",
    url: "https://www.ringover.fr",
  },
  {
    name: "Stripe",
    category: "Paiement & prélèvement SEPA",
    pricing: "1,4 % + 0,25 € / transaction",
    note: "Encaissement factures, SEPA, CB, subscription",
    url: "https://stripe.com",
  },
  {
    name: "Brevo",
    category: "Emailing transactionnel & campagnes",
    pricing: "Gratuit · puis 19 €/mois",
    note: "SMTP, templates, tracking, délivrabilité sous votre domaine",
    url: "https://www.brevo.com",
  },
  {
    name: "OHM Énergies Pro",
    category: "Fournisseur · grille pro temps réel",
    pricing: "Partenariat commercial",
    note: "Grille pro branchée dans les comparatifs avec rétribution partenaire",
    url: "https://www.ohm-energie.com",
  },
  {
    name: "Pennylane",
    category: "Comptabilité · export automatisé",
    pricing: "À partir de 29 €/mois",
    note: "Factures + écritures poussées auto, réconciliation bancaire",
    url: "https://www.pennylane.com",
  },
  {
    name: "Gandi / OVHcloud",
    category: "Domaines · emails pro",
    pricing: "Selon domaine",
    note: "Emails pro @votrecabinet.fr",
    url: "https://www.gandi.net",
  },
  {
    name: "OVHcloud",
    category: "Infrastructure / hébergement",
    pricing: "—",
    note: "Hébergeur souverain FR, serveurs dédiés Roubaix",
    url: "https://www.ovhcloud.com",
  },
];

export const affiliateDisclaimer =
  "Les liens de parrainage peuvent générer une commission pour Grid Energies sans modifier le tarif appliqué chez le partenaire. Chaque carte dispose d'un bouton « Lien parrainage GridCRM ».";

// 4c. Compatibility names (accounting export).
export const accountingCompat = ["Sage", "Pennylane", "Cegid"];
export const accountingCompatLine =
  "Facturation & export comptable compatibles : Sage, Pennylane, Cegid.";
