// /contact content, verbatim from references.md section 11.

export const contactHeader = {
  heading: "Demandez un accès à GridCRM.",
  sub: "Notre équipe vous recontacte sous 24 h ouvrées.",
};

export type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
};

export const contactFields: Field[] = [
  { name: "nom", label: "Nom", type: "text", required: true },
  { name: "prenom", label: "Prénom", type: "text", required: true },
  { name: "email", label: "Email professionnel", type: "email", required: true },
  { name: "telephone", label: "Téléphone", type: "tel", required: false },
  { name: "societe", label: "Société", type: "text", required: true },
  { name: "besoin", label: "Votre besoin", type: "textarea", required: false },
];

export const consentText =
  "J'accepte que mes données soient traitées par Grid Energies (RCS Paris, siège : 59 rue de Ponthieu, 75008 Paris) dans le cadre de ma demande d'accès. Vos données ne sont ni revendues ni transmises à des tiers.";

export const submitLabel = "Envoyer la demande";

export const coordinates = {
  heading: "Coordonnées",
  address: "59 rue de Ponthieu, 75008 Paris",
  email: "contact@gridenergies.fr",
  phone: "01 41 09 16 98",
};

export const whatYouGetHeading = "Ce que vous obtenez";
export const whatYouGet = [
  "Démonstration personnalisée (45 min)",
  "Configuration adaptée",
  "Formation équipes incluse (2 h)",
  "Données hébergées en France, chiffrées",
];

export const contactRgpdNote =
  "Vos données sont conservées 36 mois maximum, avec suppression à tout moment sur demande à dpo@gridenergies.fr.";

export const processHeading = "De la demande à votre première signature. 4 étapes";
export const processNote = "Onboarding ~10 j ouvrés";
export const processSteps: {
  index: string;
  day: string;
  title: string;
  detail: string;
}[] = [
  {
    index: "01",
    day: "J+0",
    title: "Premier échange",
    detail: "rappel sous 24 h ouvrées, qualification",
  },
  {
    index: "02",
    day: "J+3",
    title: "Démo personnalisée",
    detail: "45 min visio, cas d'usage réels",
  },
  {
    index: "03",
    day: "J+5",
    title: "Configuration & import",
    detail: "espace, contacts/contrats, rôles",
  },
  {
    index: "04",
    day: "J+10",
    title: "Formation & go live",
    detail: "2 h, doc PDF, accès support chat",
  },
];

export const contactFaq = {
  heading: "Questions fréquentes",
  items: [
    {
      q: "Courtier indépendant, est-ce possible ?",
      a: "Oui, avec le plan Solo (jusqu'à 500 contacts actifs, sans engagement annuel).",
    },
    {
      q: "Quel est le délai opérationnel ?",
      a: "Comptez environ 10 jours ouvrés entre le premier échange et la mise en production, formation comprise.",
    },
    {
      q: "L'intégration Enedis / GRDF est-elle incluse ?",
      a: "Oui sur les plans Cabinet et Groupe : GRDF ADICT et Enedis sont natifs, credentials fournis, récupération automatique des PDL et PCE.",
    },
    {
      q: "Puis-je migrer depuis un autre CRM ?",
      a: "Oui, par import CSV avec mapping assisté. La reprise des données est incluse dans le déploiement (Cabinet & Groupe).",
    },
    {
      q: "La VoIP est-elle incluse ?",
      a: "La téléphonie VoIP FreeSWITCH est incluse à partir du plan Cabinet ; seul le SIP trunk externe est facturé au consommé par son éditeur.",
    },
    {
      q: "Peut-on tester avant de s'engager ?",
      a: "Plutôt qu'un libre-service, nous organisons une démo personnalisée de 45 min sur vos cas, puis un devis et un plan de déploiement.",
    },
  ],
};
