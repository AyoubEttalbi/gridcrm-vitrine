// Legal pages content, from references.md section 12.
// Mentions légales facts are verbatim. The confidentialité / CGV / CGU pages are
// "standard legal copy" on the live site (route only in the inventory); the text
// below is standard French legal copy grounded in the known company facts.

export const mentionsLegales = {
  updated: "MAJ avril 2026",
  editor: {
    title: "Éditeur",
    lines: [
      "Grid Energies SAS, SAS à capital variable.",
      "Siège social : 59 rue de Ponthieu, 75008 Paris.",
      "Téléphone : 01 41 09 16 98.",
      "Email : contact@gridenergies.fr.",
      "Site : gridenergies.fr.",
    ],
  },
  rcsNote:
    "RCS Paris — numéro en cours de publication au greffe suite au transfert de siège social (avril 2026).",
  directeur: "Directeur de la publication : le représentant légal de Grid Energies.",
  hebergeur: {
    title: "Hébergeur",
    lines: [
      "OVHcloud (OVH SAS), 2 rue Kellermann, 59100 Roubaix.",
      "Téléphone : 1007.",
      "Données stockées exclusivement en France métropolitaine.",
    ],
  },
  sections: [
    {
      title: "Propriété intellectuelle",
      body: "L'ensemble des contenus présents sur le site GridCRM (textes, marques, logos, interfaces, éléments graphiques) est la propriété de Grid Energies ou de ses partenaires. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable, est interdite.",
    },
    {
      title: "Limitation de responsabilité",
      body: "Grid Energies s'efforce d'assurer l'exactitude des informations diffusées sur le site mais ne saurait être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour, qu'elles soient de son fait ou du fait de tiers partenaires.",
    },
    {
      title: "Liens hypertextes",
      body: "Le site peut contenir des liens vers des sites tiers. Grid Energies n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. Certains liens partenaires sont des liens de parrainage.",
    },
    {
      title: "Protection des données",
      body: "Les traitements de données personnelles réalisés via le site et la plateforme sont conformes au RGPD. Vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité, exerçable auprès du DPO à dpo@gridenergies.fr.",
    },
    {
      title: "Cookies",
      body: "Le site utilise uniquement des cookies strictement nécessaires, aucun cookie publicitaire ou de traçage tiers.",
    },
    {
      title: "Droit applicable",
      body: "Le présent site et son utilisation sont régis par le droit français. Tout litige relève de la compétence des tribunaux de Paris.",
    },
  ],
};

export const confidentialite = {
  updated: "MAJ avril 2026",
  intro:
    "La présente politique décrit la manière dont Grid Energies SAS collecte, utilise et protège vos données personnelles dans le cadre de l'utilisation du site et de la plateforme GridCRM, conformément au Règlement Général sur la Protection des Données (RGPD).",
  sections: [
    {
      title: "Responsable de traitement",
      body: "Le responsable de traitement est Grid Energies SAS, 59 rue de Ponthieu, 75008 Paris. Le délégué à la protection des données (DPO) est joignable à dpo@gridenergies.fr.",
    },
    {
      title: "Données collectées",
      body: "Nous collectons les données que vous nous transmettez via nos formulaires (nom, prénom, email professionnel, téléphone, société, besoin exprimé) ainsi que les données strictement nécessaires au fonctionnement du service.",
    },
    {
      title: "Finalités",
      body: "Vos données sont traitées pour répondre à vos demandes d'accès et de démonstration, assurer la relation commerciale, fournir et améliorer le service. Elles ne sont ni revendues ni transmises à des tiers.",
    },
    {
      title: "Durée de conservation",
      body: "Les données de prospect sont conservées 36 mois maximum à compter du dernier contact. Les données client sont conservées pendant la durée de la relation contractuelle puis archivées conformément aux obligations légales.",
    },
    {
      title: "Hébergement et sécurité",
      body: "Les données sont hébergées exclusivement en France métropolitaine chez OVHcloud, chiffrées au repos (AES-256) et en transit (TLS 1.3). Aucun transfert hors UE n'est réalisé.",
    },
    {
      title: "Vos droits",
      body: "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité. Vous pouvez les exercer, ou demander la suppression de vos données à tout moment, en écrivant à dpo@gridenergies.fr.",
    },
    {
      title: "Cookies",
      body: "Seuls des cookies strictement nécessaires au fonctionnement du site sont déposés. Aucun cookie publicitaire ou de traçage tiers n'est utilisé.",
    },
  ],
};

export const cgv = {
  updated: "MAJ avril 2026",
  intro:
    "Les présentes Conditions Générales de Vente régissent la souscription aux offres de la plateforme GridCRM éditée par Grid Energies SAS, 59 rue de Ponthieu, 75008 Paris.",
  sections: [
    {
      title: "Objet",
      body: "Les CGV définissent les conditions de souscription, de facturation et de résiliation des abonnements à GridCRM (plans Solo, Cabinet et Groupe).",
    },
    {
      title: "Prix",
      body: "Tous les prix sont indiqués en euros hors taxes (HT), par utilisateur. Seules les intégrations tierces restent facturées par leurs éditeurs, à prix public.",
    },
    {
      title: "Abonnement et engagement",
      body: "L'abonnement est souscrit pour une durée mensuelle ou annuelle. L'engagement annuel ouvre droit à une remise de 20 %. L'accès est délivré sur demande, après qualification par un expert courtage.",
    },
    {
      title: "Facturation et paiement",
      body: "La facturation intervient selon la périodicité choisie. Les factures sont émises au format PDF conforme.",
    },
    {
      title: "Résiliation",
      body: "La résiliation s'effectue en 1 clic depuis l'administration, avec un préavis de 30 jours sur le mensuel et à l'échéance sur l'annuel. Vos données restent exportables 90 jours après la fin du contrat.",
    },
    {
      title: "Droit applicable",
      body: "Les présentes CGV sont régies par le droit français. Tout litige relève de la compétence des tribunaux de Paris.",
    },
  ],
};

export const cgu = {
  updated: "MAJ avril 2026",
  intro:
    "Les présentes Conditions Générales d'Utilisation encadrent l'accès et l'usage de la plateforme GridCRM éditée par Grid Energies SAS.",
  sections: [
    {
      title: "Acceptation",
      body: "L'utilisation de GridCRM implique l'acceptation pleine et entière des présentes CGU par l'utilisateur.",
    },
    {
      title: "Accès au service",
      body: "L'accès est réservé aux utilisateurs disposant d'un compte valide. L'authentification s'appuie sur le SSO Google Workspace avec 2FA hérité. Chaque utilisateur est responsable de la confidentialité de ses accès.",
    },
    {
      title: "Obligations de l'utilisateur",
      body: "L'utilisateur s'engage à utiliser le service conformément à sa destination, à la réglementation applicable et à ne pas porter atteinte à la sécurité ou à l'intégrité de la plateforme.",
    },
    {
      title: "Disponibilité",
      body: "Grid Energies met en œuvre les moyens nécessaires pour assurer la disponibilité du service. Le plan Groupe bénéficie d'un SLA de 99,9 % avec pénalités.",
    },
    {
      title: "Données et sécurité",
      body: "Les données de chaque cabinet sont isolées, chiffrées et hébergées en France. La traçabilité des actions est assurée par un journal immuable horodaté.",
    },
    {
      title: "Droit applicable",
      body: "Les présentes CGU sont régies par le droit français. Tout litige relève de la compétence des tribunaux de Paris.",
    },
  ],
};
