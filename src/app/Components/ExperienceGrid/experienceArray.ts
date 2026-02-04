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
        "- Intégration d'un système d'Alerte en temps réel",
        "- Création d'un tableau de bord analytique",
        "- Développement d'un système de gestion et des differentes modules en temps réel"
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
        "- Intégration des normes d'accessibilité et d'optimisation SEO",
        "- Développement, integration, et conception de nouvelles interfaces utilisateur responsives et accessibles",
        "- Mise en accessibilité pour les personnes handicapées avec les normes WCAG,RGAA",
        "- Création d’ un nouveau plugin dans storyblok pour récupérer les produits via l'API de fastsimon.La récupération et l'affichage corrects du marchandising des produits dans le bloc"
      ],
      category: "mobile"
    },
    {
      project: "Création des applications shopify personnalisées",
      company: "Venum et Dragon Bleu",
      years: "2023-Aujourd'hui",
      duration: "",
      technologies: ["Next", "Remix", "GraphQl", "MySQL", "Shopify API","shopify Extensions"],
      description: "Solutions digitales sur mesure (back-office et front-office) pour automatiser les processus, innover et accompagner les besoins des clients et des équipes commerciales.",
      achievements: [
        "1- ALERTIFY : une application qui envoie des e-mails concernant l'état des produits.",
        "2- APP-CLUB : application dédiée à la gestion et au suivi des remises",
        "3- TIMER : une application qui permet d'afficher des bannières dynamiquement avec un compte à rebours.",
        "4- HEPPENER : solution qui adapte l'affichage des méthodes de livraison lors du passage de commande",
        "5- RUNBACK : application de gestion des retours de commandes",
        "6- EDIT-ORDER : outil de gestion permettant aux clients de modifier leurs commandes après validation",
        "7- CHECKOUT-APP : module de personnalisation des formulaires sur la page de paiement",
        "8- APP-QUIZ : guide interactif pour aider les clients à trouver les produits qui leur correspondent"
      ],
      category: "fullstack"
    },
    {
      project: "Projets personnelles",
      company: "",
      years: "2020-aujourd'hui",
      duration: "",
      technologies: ["Node.js", "Docker", "stack MERN", "AdonisJS", "C#"],
      description: "Architecture microservices pour un système de gestion d'entreprise avec plus de 50 endpoints API.",
      achievements: [
        "- Conception et développement d'une application d'apprentissage du malgache. Application éducative sous forme de quiz avec interface d'administration dédiée Développée avec Next.js (frontend) et AdonisJS (backend) (2025-2026)",
        "- Tafatafa : un réseau social similaire à Messenger, réalisé avec Next.js, TypeScript, Node.js, MongoDB et WebSocket (2024-2025)",
        "- Création d'un logiciel de prédiction de séries temporelles par réseaux de neurones artificiels multicouches, développé en C# (projet de M2)",
        "- TAXII: Logiciel de gestion de réservation de taxi, développé avec React et Node.js (stack MERN) (projet de M1)",
        "- DOC-MJS:Logiciel de gestion du centre médico-social au sein du Ministère de la Jeunesse et des Sports, développé en C# (stage de L3)",
        "- KAINA MALAGASY : jeu vidéo développé en Java, projet de L2 à l'ISPM",
        "- GESTION D'ÉCOLE : logiciel de gestion scolaire développé en C#, projet de L1."
      ],
      category: "ai"
    },
    {
      project: "Autres projets et contributions",
      company: "COUA,Probat",
      years: "",
      duration: "",
      technologies: ["Node.js", "Next.js"],
      description: "Architecture microservices pour un système de gestion d'entreprise avec plus de 50 endpoints API.",
      achievements: [
        "- COUA : Un CRM (Customer Relationship Management) pour la gestion des relations clients, développé avec Next.js et Symphony",
        "- Probat : Création d'un site vitrine et d'un outil de prospection."
      ],
      category: "ai"
    },
  ];

  export default experienceArray;