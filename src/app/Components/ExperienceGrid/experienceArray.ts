import IExperienceCard from './interface';

const experienceArray:IExperienceCard[] = [
    {
      project: "ERP myClicar",
      company: "CLICAR",
      years: "2022-2023",
      duration: "",
      technologies: ["React", "TypeScript", "NodeJS",  "MongoDB", "SogeCommerce",],
      description: "**Système intégré qui gère en temps réel l'ensemble du cycle de location - de la réservation et les  gestion financière à partir d'une base de données centralisée**",
      achievements: [
        "Intégration d'un système d'Alerte en temps réel",
        "Création d'un tableau de bord analytique",
        "Développement d'un système de gestion et des differentes modules en temps réel"
      ],
      category: "web"
    },
    {
      project: "Les sites E-commerce de Venum",
      company: "Venum et Dragon Bleu",
      years: "2023-aujourd'hui",
      duration: "",
      technologies: ["Shopify", "NextJS", "Remix", "StoryBlok","Tailwind"],
      description: "Refonte et maintenance des 13 sites web internationaux de l'entreprise",
      achievements: [
        "Intégration des normes d'accessibilité et d'optimisation SEO",
        "Développement, integration, et conception de nouvelles interfaces utilisateur responsives et accessibles",
        "Mise en accessibilité pour les personnes handicapées avec les normes WCAG,RGAA"
      ],
      category: "mobile"
    },
    {
      project: "Création dES applications shopify personnalisées",
      company: "Venum et Dragon Bleu",
      years: "2023-Aujourd'hui",
      duration: "",
      technologies: ["Next", "Remix", "GraphQl", "MySQL", "Shopify API","shopify Extensions"],
      description: "Solutions digitales sur mesure (back-office et front-office) pour automatiser, innover les besoins des clients et les équipes commerciales",
      achievements: [
        "ALERTIFY:applcation qui envoye des mails concernant les états des produits",
        "APP-CLUB: application de gestion des remises",
        "TIMER: application qui permet des afficher des bannières dynamiquement avec une compte a rebour",
        "HEPPENER: gerer les affichages des méthode de livraisons dans la pages checkout",
        "RUNBACK:permet de retouner une commande",
        "EDIT-ORDER: une application qui permet au utilisateur de modifier leur commande",
        "CHECKOUT-APP: permet de gerer les formulaire dans la page checkout",
        "APP-QUIZ: une application qui aide les utilisateur a mieux choisir leur produits"
      ],
      category: "fullstack"
    },
    {
      project: "Projets personnelles",
      company: "",
      years: "2020-2021",
      duration: "",
      technologies: ["Node.js", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
      description: "Architecture microservices pour un système de gestion d'entreprise avec plus de 50 endpoints API.",
      achievements: [
        "Tafatafa: une réseau sociaux comme messenger réalisé par Next,Typescript, Nodes, MongoDB,webSocket(2024-2025)",
        "Création d'un logiciel de prédiction de séries temporelles par réseaux de neurones Artificiels multicouches,développé en C# (projet en M2)",
        "Logiciel de gestion de réservation de taxi, développé en React et NodesJS(MERN) (projet en M1)",
        "Logiciel de gestion du centre médico-social au sein du Ministère de la Jeunesse et des Sports,développé en C# (Stage en L3)",
        "KAINA MALAGASY : jeu, développé en Java, projet en L2 à l'ISPM",
        "GESTION D'ÉCOLE : logiciel de gestion d'école développé en C#, projet en L1"
      ],
      category: "ai"
    },
  ];

  export default experienceArray;