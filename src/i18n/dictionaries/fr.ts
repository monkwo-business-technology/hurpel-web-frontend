import type { en } from "./en";

type Dict = typeof en;

export const fr: Dict = {
  common: {
    skipToMain: "Passer au contenu principal",
    home: "Accueil",
    learnMore: "En savoir plus",
    donateNow: "Faire un don",
    contactUs: "Contactez-nous",
    back: "Retour",
    charityLine: "Organisme de bienfaisance enregistré",
    focusLine: "Fièrement agréé FOCUS",
    switchToDark: "Passer au thème sombre",
    switchToLight: "Passer au thème clair",
    callUs: "Appelez-nous",
  },
  nav: {
    inquireContact: "Renseignements / Contact",
    viewAll: "Voir tout",
    sections: {
      home: { label: "Accueil" },
      community: { label: "Communauté" },
      contact: { label: "Contactez-nous" },
      about: {
        label: "À propos de nous",
        items: {
          mission: {
            label: "Qui nous sommes — Mission et valeurs",
            description: "Des personnes valorisées, une communauté inclusive — ce qui nous anime chaque jour.",
          },
          impact: {
            label: "Notre impact",
            description: "Plus de 1 000 personnes soutenues chaque année dans 32 foyers.",
          },
          accountability: {
            label: "Agrément et responsabilité",
            description: "Fièrement agréé FOCUS — découvrez notre transparence.",
          },
        },
      },
      whoWeSupport: {
        label: "Qui nous soutenons",
        description: "Des personnes ayant des besoins médicaux et complexes, vivant bien dans la communauté.",
      },
      services: {
        label: "Services",
        items: {
          employment: {
            label: "Services d'emploi",
            description: "Planification personnalisée et placement vers un travail valorisant.",
          },
          accommodation: {
            label: "Hébergement et répit",
            description: "Foyers de groupe sécuritaires et séjours de répit de courte durée.",
          },
          youth: {
            label: "Services à l'enfance et à la jeunesse",
            description: "Ateliers centrés sur la famille pour les esprits en croissance.",
          },
          community: {
            label: "Accès communautaire",
            description: "Programmes de jour, activités sociales et récréatives.",
          },
        },
      },
      events: {
        label: "Événements à venir",
        items: {
          belong: {
            label: "Campagne #WaitingToBelong",
            description: "Tout le monde mérite un chez-soi sécuritaire.",
          },
          run: {
            label: "La course Serious(ly) Fun",
            description: "Samedi 26 septembre 2026 — marchez, roulez ou courez.",
          },
          cookie: {
            label: "Semaine du biscuit sourire",
            description: "Chaque biscuit vendu soutient les programmes locaux.",
          },
        },
      },
      impactOfGiving: { label: "L'impact de vos dons" },
      getInvolved: {
        label: "Participez",
        items: {
          volunteer: {
            label: "Devenir bénévole",
            description: "Rejoignez plus de 200 bénévoles actifs qui rendent l'inclusion réelle.",
          },
          donate: {
            label: "Faire un don",
            description: "Don unique ou mensuel — chaque dollar reste local.",
          },
          contact: {
            label: "Contact et soutien",
            description: "Questions sur les services ou les partenariats? Écrivez-nous.",
          },
        },
      },
    },
  },
  hero: {
    greeting: {
      morning: "Bonjour",
      afternoon: "Bon après-midi",
      evening: "Bonsoir",
      welcome: "bienvenue",
      welcomeBack: "bon retour parmi nous",
    },
    slides: {
      belong: {
        eyebrow: "Hurpel Support Services",
        title: "Des personnes valorisées.",
        titleAccent: "Une communauté inclusive.",
        description:
          "Nous offrons des soutiens de qualité aux personnes ayant une déficience développementale afin qu'elles vivent une vie épanouie, en collaboration avec les familles et la communauté.",
        primary: "Donnez aujourd'hui",
        secondary: "Découvrir nos services",
      },
      services: {
        eyebrow: "Notre écosystème de services",
        title: "Un soutien bâti",
        titleAccent: "autour de vous.",
        description:
          "Emploi, hébergement et répit, programmes jeunesse et accès communautaire — des soutiens centrés sur la personne à chaque étape de la vie.",
        primary: "Voir tous les services",
        secondary: "Obtenir du soutien",
      },
      events: {
        eyebrow: "Communauté en mouvement",
        title: "La course",
        titleAccent: "Serious(ly) Fun 2026.",
        description:
          "À vos agendas : samedi 26 septembre 2026. Marchez, roulez ou courez — tout le monde a sa place sur la ligne de départ.",
        primary: "Voir les événements",
        secondary: "Participez",
      },
    },
    chips: {
      people: { value: "1 000+", label: "personnes soutenues par année" },
      homes: { value: "32", label: "foyers de groupe sécuritaires" },
      volunteers: { value: "200+", label: "bénévoles actifs" },
    },
    prevSlide: "Diapositive précédente",
    nextSlide: "Diapositive suivante",
    chooseSlide: "Choisir une diapositive",
    goToSlide: "Aller à la diapositive",
    highlights: "En vedette",
  },
  trust: {
    ariaLabel: "Agrément et partenaires",
    badge: "Agréé FOCUS — responsabilité maximale",
  },
  services: {
    eyebrow: "Ce que nous faisons",
    heading: "Notre écosystème de services",
    subheading:
      "Des soutiens centrés sur la personne, bâtis autour de chaque individu, de sa famille et de ses objectifs.",
    needCare: "Besoin de soins personnalisés?",
    accessSupport: "Obtenir du soutien",
    items: {
      employment: {
        title: "Services d'emploi",
        description:
          "Une planification d'emploi personnalisée et un placement qui jumelle les forces de chacun avec un travail valorisant.",
      },
      accommodation: {
        title: "Hébergement et répit",
        description:
          "Des foyers de groupe accueillants et des séjours de répit qui soutiennent les familles quand elles en ont le plus besoin.",
      },
      youth: {
        title: "Services à l'enfance et à la jeunesse",
        description:
          "Des ateliers et programmes centrés sur la famille qui aident les enfants et les jeunes à grandir, apprendre et s'épanouir.",
      },
      community: {
        title: "Accès communautaire",
        description:
          "Des programmes de jour et des activités sociales et récréatives qui ouvrent la porte à l'amitié et à la participation.",
      },
    },
  },
  impact: {
    heading: "Notre impact",
    stats: {
      people: "Personnes soutenues chaque année",
      staff: "Membres du personnel dévoués",
      homes: "Foyers de groupe sécuritaires et 3 lieux de répit",
      volunteers: "Bénévoles actifs et 250 familles membres",
    },
    accredited: "Fièrement agréé FOCUS pour une responsabilité maximale.",
    stories: {
      people: "…comme James, qui a reçu sa première paie avec un accompagnateur à ses côtés.",
      staff: "…comme Priya, intervenante résidentielle, qui a célébré 11 anniversaires avec sa maisonnée.",
      homes: "…comme le foyer de la rue Maple, où quatre colocataires sont devenus une famille.",
      volunteers: "…comme Dan, bénévole de la course Fun Run chaque année avec sa fille.",
    },
  },
  quiz: {
    eyebrow: "Jumelage en deux minutes",
    heading: "Trouvez votre façon d'aider",
    subheading:
      "Répondez à trois questions rapides et nous vous montrerons où vous pouvez compter le plus.",
    questions: [
      {
        question: "Combien de temps pourriez-vous donner?",
        options: [
          { label: "Quelques heures, à l'occasion", path: "volunteer" },
          { label: "Peu de temps — mais je peux donner", path: "donate" },
          { label: "Mon organisation a des ressources", path: "partner" },
        ],
      },
      {
        question: "Qu'est-ce qui vous ressemble le plus?",
        options: [
          { label: "Être présent avec les gens", path: "volunteer" },
          { label: "Rendre les choses possibles, discrètement", path: "donate" },
          { label: "Bâtir quelque chose de plus grand ensemble", path: "partner" },
        ],
      },
      {
        question: "Qu'est-ce qui vous rendrait le plus fier?",
        options: [
          { label: "Une amitié qui a changé la semaine de quelqu'un", path: "volunteer" },
          { label: "Un foyer ou un emploi qui existe grâce à moi", path: "donate" },
          { label: "Mon équipe mobilisée pour l'inclusion", path: "partner" },
        ],
      },
    ],
    results: {
      volunteer: {
        title: "Vous êtes bénévole dans l'âme",
        description:
          "Équipes d'événements, accompagnateurs, mentors — quelques heures de votre présence changent toute la semaine de quelqu'un.",
        cta: "Devenir bénévole",
      },
      donate: {
        title: "Vous êtes un champion discret",
        description:
          "Votre don reste local : 50 $ financent une semaine d'accompagnement à l'emploi, 100 $ offrent une journée de répit à une famille.",
        cta: "Donner maintenant",
      },
      partner: {
        title: "Vous êtes un bâtisseur de communauté",
        description:
          "Employeurs, commanditaires et groupes rendent l'inclusion durable — embauche, jumelage de dons, commandite d'événements.",
        cta: "Devenir partenaire",
      },
    },
    restart: "Recommencer",
    stepLabel: "Question",
  },
  stories: {
    heading: "Histoires d'appartenance",
    subheading: "De vraies personnes, de vraies familles, une vraie communauté — dans leurs propres mots.",
    chooseStory: "Choisir une histoire",
    story: "Histoire",
    items: [
      {
        quote:
          "Pour la première fois, mon frère a un chez-soi et des amis présents pour lui. Hurpel ne lui a pas seulement trouvé un logement — ils lui ont trouvé une communauté.",
        name: "Melissa T.",
        role: "Sœur d'une personne soutenue",
      },
      {
        quote:
          "L'équipe d'emploi a cru en moi avant que j'y croie moi-même. Deux ans plus tard, j'adore mon travail et mes collègues sont comme une famille.",
        name: "James R.",
        role: "Personne soutenue, Services d'emploi",
      },
      {
        quote:
          "Le répit a permis à notre famille de respirer. Savoir que notre fille est en sécurité, heureuse et fait ce qu'elle aime — c'est tout.",
        name: "La famille Okafor",
        role: "Services de répit",
      },
    ],
  },
  events: {
    eyebrow: "À vos agendas",
    heading: "Événements et campagnes à venir",
    subheading: "Soyez présents, bougez et tenez-vous aux côtés de vos voisins.",
    items: {
      belong: {
        tag: "#WaitingToBelongCampaign",
        dateDay: "Maintenant",
        dateMonth: "En cours",
        title: "Tout le monde mérite un chez-soi sécuritaire.",
        description:
          "Aidez-nous à combler le manque de logements pour les personnes ayant une déficience développementale en attente d'un foyer sécuritaire et soutenu.",
        cta: "Rejoindre la campagne",
      },
      run: {
        tag: "Communauté en mouvement",
        dateDay: "26",
        dateMonth: "Sept 2026",
        title: "La course Serious(ly) Fun",
        description:
          "Marchez, roulez ou courez — tout le monde a sa place sur la ligne de départ. Parcours entièrement accessible, pour toute la famille.",
        cta: "Réservez la date",
      },
      cookie: {
        tag: "Semaine du biscuit sourire",
        dateDay: "Semaine",
        dateMonth: "Annuel",
        title: "Campagne de partenariat",
        description:
          "Chaque biscuit sourire vendu soutient les programmes locaux. Prenez un biscuit, partagez un sourire, changez une vie.",
        cta: "Trouver un point de vente",
      },
    },
  },
  involved: {
    heading: "Faites partie de l'histoire",
    subheading:
      "Donnez de votre temps ou devenez partenaire — l'inclusion se bâtit grâce à des gens comme vous.",
    volunteer: {
      title: "Devenir bénévole",
      description:
        "Rejoignez plus de 200 bénévoles actifs — équipes d'événements, accompagnateurs de programmes, mentors et plus.",
      cta: "Devenir bénévole",
    },
    partner: {
      title: "Devenir partenaire",
      description:
        "Employeurs, commanditaires et groupes communautaires — bâtissons l'inclusion ensemble.",
      cta: "Devenir partenaire",
    },
  },
  donateBand: {
    heading: "Offrez le cadeau de l'appartenance",
    subheading:
      "Chaque dollar reste local — il finance des foyers, des programmes et des opportunités pour les personnes ayant une déficience développementale, ici même dans notre communauté.",
    provides: "offre",
    amounts: [
      { value: "25 $", impact: "un après-midi de loisirs communautaires" },
      { value: "50 $", impact: "une semaine d'accompagnement à l'emploi" },
      { value: "100 $", impact: "une journée de répit pour une famille" },
      { value: "250 $", impact: "un mois de programmes jeunesse" },
    ],
  },
  newsletter: {
    heading: "L'impact communautaire, chaque mois",
    subheading:
      "Des histoires, des événements et l'impact de votre soutien — un courriel par mois, sans bruit.",
    emailLabel: "Adresse courriel",
    placeholder: "vous@exemple.com",
    signUp: "S'inscrire",
    signingUp: "Inscription…",
    thanks: "Merci de vous être inscrit! Surveillez votre boîte de réception.",
    error: "L'inscription a échoué pour le moment. Veuillez réessayer plus tard.",
  },
  footer: {
    explore: "Explorer",
    servicesHeading: "Services",
    contactHeading: "Contact",
    builtFor: "Bâti pour l'inclusion.",
  },
  contactForm: {
    heading: "Formulaire de contact",
    fullName: "Nom complet",
    email: "Adresse courriel",
    inquiryLabel: "Nature de la demande",
    selectTopic: "Choisissez un sujet…",
    inquiryOptions: ["Question générale", "Accès au soutien", "Bénévolat", "Emploi/Embauche"],
    messageLabel: "Comment notre communauté peut-elle aider la vôtre?",
    newsletterOptIn: "Inscrivez-moi à l'infolettre mensuelle pour suivre l'impact communautaire.",
    send: "Envoyer le message",
    sending: "Envoi en cours…",
    successTitle: "Message envoyé!",
    successBody:
      "Merci de nous avoir écrit. Notre équipe vous répondra dans un délai d'un jour ouvrable.",
    genericError: "Une erreur s'est produite. Veuillez réessayer.",
  },
  donateForm: {
    heading: "Formulaire de don",
    frequencyLegend: "Fréquence du don",
    oneTime: "Unique",
    monthly: "Mensuel ♥",
    monthlyNote: "Les dons mensuels offrent un soutien stable et fiable toute l'année.",
    amountLegend: "Choisissez un montant",
    customAmount: "Montant personnalisé ($)",
    customAmountLabel: "Montant personnalisé en dollars",
    amountContexts: [
      "25 $ finance une heure de soutien individuel",
      "50 $ offre du soutien récréatif communautaire",
      "100 $ finance un atelier familial",
      "250 $ parraine une semaine de répit",
    ],
    fullName: "Nom complet",
    email: "Adresse courriel",
    dedicateLabel: "Dédier ce don (en l'honneur / à la mémoire de quelqu'un)",
    dedicationField: "En l'honneur / à la mémoire de…",
    submit: "Compléter le don sécurisé 🔒",
    sending: "Envoi en cours…",
    chooseAmountError: "Veuillez choisir ou saisir un montant de don.",
    genericError: "Une erreur s'est produite. Veuillez réessayer.",
    successTitleThanks: "Merci de votre générosité!",
    successBodyMonthly:
      "Nous avons bien reçu votre engagement mensuel. Notre équipe vous enverra sous peu un lien de paiement sécurisé par courriel.",
    successBodyOneTime:
      "Nous avons bien reçu votre engagement unique. Notre équipe vous enverra sous peu un lien de paiement sécurisé par courriel.",
    disclaimer:
      "Aucune donnée bancaire n'est recueillie ici. Après votre engagement, nous vous envoyons un lien de paiement sécurisé Stripe/PayPal — vos données de paiement ne passent jamais par notre boîte courriel.",
    poweredBy: "Propulsé par",
    paymentPartners: "Partenaires de paiement acceptés",
  },
  pages: {
    home: {
      title: "Hurpel Support Services — Des personnes valorisées. Une communauté inclusive.",
      description:
        "Nous offrons des soutiens de qualité aux personnes ayant une déficience développementale afin qu'elles vivent une vie épanouie, en collaboration avec les familles et la communauté.",
    },
    about: {
      title: "Qui nous sommes",
      metaDescription:
        "Notre mission, notre impact et notre responsabilité : des soutiens de qualité pour les personnes ayant une déficience développementale.",
      banner:
        "Un organisme communautaire offrant des soutiens de qualité aux personnes ayant une déficience développementale pour vivre une vie épanouie.",
      missionHeading: "Notre mission et nos valeurs",
      missionBody:
        "Nous croyons que chacun mérite un chez-soi sécuritaire, un travail valorisant et une communauté qui le célèbre.",
      values: [
        {
          title: "La dignité d'abord",
          description:
            "Chaque personne a le droit d'être écoutée, respectée et soutenue selon ses propres termes.",
        },
        {
          title: "Partenariat familial",
          description:
            "Nous collaborons avec les familles et les aidants comme partenaires égaux dans chaque plan de soutien.",
        },
        {
          title: "Appartenance communautaire",
          description:
            "L'inclusion, ce sont de vraies amitiés, de vrais emplois et de vrais foyers — ici même, dans la communauté.",
        },
      ],
      accountabilityHeading: "Agrément et responsabilité",
      accountabilityBody:
        "Nous sommes fièrement agréés FOCUS pour une responsabilité maximale. En tant qu'organisme de bienfaisance enregistré, chaque dollar est suivi, vérifié et déclaré — donnez et devenez partenaire en toute confiance.",
      getInvolvedCta: "Participez",
    },
    services: {
      title: "Services",
      metaDescription:
        "Emploi, hébergement et répit, programmes jeunesse et services d'accès communautaire.",
      banner:
        "Des soutiens centrés sur la personne, bâtis autour de chaque individu, de sa famille et de ses objectifs.",
      accessThisSupport: "Accéder à ce soutien",
      faqHeading: "Questions fréquentes",
      faqIntro: "Vous ne savez pas par où commencer? Ces réponses aident — et nous sommes à un appel :",
      items: {
        employment: {
          title: "Services d'emploi",
          description:
            "Une planification d'emploi personnalisée et un placement qui jumelle les forces de chacun avec un travail valorisant dans la communauté.",
          points: [
            "Planification de carrière centrée sur la personne",
            "Accompagnement et soutien en milieu de travail",
            "Partenariats avec les employeurs de la région",
          ],
        },
        accommodation: {
          title: "Hébergement et répit",
          description:
            "Des foyers de groupe sécuritaires et accueillants et des séjours de répit qui soutiennent les familles quand elles en ont le plus besoin.",
          points: [
            "32 foyers de groupe sécuritaires",
            "3 lieux de répit dédiés",
            "Personnel résidentiel formé 24/7",
          ],
        },
        youth: {
          title: "Services à l'enfance et à la jeunesse",
          description:
            "Des ateliers et programmes centrés sur la famille qui aident les enfants et les jeunes à grandir, apprendre et s'épanouir.",
          points: [
            "Ateliers centrés sur la famille",
            "Soutien à la transition scolaire",
            "Programmes de liens entre pairs",
          ],
        },
        community: {
          title: "Accès communautaire",
          description:
            "Des programmes de jour et des activités sociales et récréatives qui ouvrent la porte à l'amitié et à la pleine participation communautaire.",
          points: [
            "Programmes de jour partout en ville",
            "Activités sociales et récréatives",
            "Sorties soutenues par des bénévoles",
          ],
        },
      },
      faqs: [
        {
          question: "Comment accéder aux services pour la première fois?",
          answer:
            "Commencez par notre formulaire de contact ou appelez-nous. Un coordonnateur d'accueil vous rencontrera, vous et votre famille, pour comprendre vos objectifs, expliquer les options de financement et bâtir un plan centré sur la personne — aucune référence requise.",
        },
        {
          question: "Y a-t-il une liste d'attente pour les foyers ou le répit?",
          answer:
            "La demande de logement avec soutien est élevée partout en Ontario. Nous sommes transparents sur les délais lors de l'accueil, et notre campagne #WaitingToBelong finance activement de nouvelles places.",
        },
        {
          question: "Combien coûte le soutien pour les familles?",
          answer:
            "La plupart des services sont financés par des programmes provinciaux comme Passeport et les références SOPDI. Nous aidons chaque famille à naviguer le financement — le coût ne devrait jamais priver quelqu'un de soutien.",
        },
        {
          question: "Les services peuvent-ils être adaptés aux besoins de mon proche?",
          answer:
            "Oui — tout commence par un plan centré sur la personne, bâti autour de l'individu, de sa famille et de ses objectifs. Les soutiens s'adaptent à mesure que les besoins évoluent.",
        },
      ],
    },
    events: {
      title: "Événements à venir",
      metaDescription:
        "Campagnes et événements : #WaitingToBelong, la course Serious(ly) Fun et la Semaine du biscuit sourire.",
      banner: "Soyez présents, bougez et tenez-vous aux côtés de vos voisins.",
      items: {
        belong: {
          tag: "#WaitingToBelongCampaign",
          title: "Tout le monde mérite un chez-soi sécuritaire.",
          description:
            "Trop de personnes ayant une déficience développementale attendent encore un foyer sécuritaire et soutenu. La campagne #WaitingToBelong finance de nouvelles places en foyer de groupe et sensibilise les décideurs.",
          cta: "Soutenir la campagne",
        },
        run: {
          tag: "Communauté en mouvement",
          title: "La course Serious(ly) Fun",
          description:
            "À vos agendas : samedi 26 septembre 2026. Un parcours entièrement accessible au cœur de la communauté — marchez, roulez ou courez. Inscription d'équipes, pour toute la famille, et 100 % des profits restent locaux.",
          cta: "Bénévole le jour de la course",
        },
        cookie: {
          tag: "Semaine du biscuit sourire",
          title: "Campagne de partenariat",
          description:
            "Chaque biscuit sourire vendu dans les points de vente participants soutient les programmes locaux. Prenez un biscuit, partagez un sourire, changez une vie — et parlez de jumelage de dons à votre employeur.",
          cta: "Devenir partenaire",
        },
      },
    },
    getInvolved: {
      title: "Participez",
      metaDescription:
        "Bénévolat, dons ou partenariats — bâtissons une communauté plus inclusive.",
      banner:
        "Rejoignez plus de 200 bénévoles actifs et 250 familles membres qui rendent l'inclusion réelle.",
      volunteerHeading: "Devenir bénévole",
      volunteerBody: "Peu importe vos compétences ou votre horaire, il y a une place pour vous ici.",
      roles: [
        "Équipes d'événements (course Fun Run, Semaine du biscuit sourire)",
        "Accompagnateurs pour les activités de jour",
        "Mentors pour les services d'emploi",
        "Bénévoles au conseil et aux comités",
      ],
      applyCta: "Devenir bénévole",
      donateHeading: "Offrez le cadeau de l'appartenance",
      donateBody:
        "Don unique ou mensuel — chaque dollar reste local et finance des foyers, des programmes et des opportunités.",
      partnerHeading: "Devenir partenaire",
      partnerBody:
        "Employeurs, commanditaires et groupes communautaires — bâtissons l'inclusion ensemble. Appelez le {phone} ou écrivez-nous.",
    },
    donate: {
      title: "Faire un don",
      metaDescription:
        "Donnez une fois ou chaque mois. Chaque dollar reste local et finance des foyers, des programmes et des opportunités.",
      banner:
        "Chaque dollar reste local et finance des foyers, des programmes et des opportunités pour les personnes ayant une déficience développementale.",
      faqHeading: "Vos questions sur le don",
      faqIntro: "Organisme de bienfaisance enregistré {charity} — responsable, vérifié et local.",
      faqs: [
        {
          question: "Vais-je recevoir un reçu fiscal?",
          answer:
            "Oui. En tant qu'organisme de bienfaisance canadien enregistré, nous émettons des reçus officiels pour les dons de 20 $ et plus — automatiquement par courriel pour les dons en ligne.",
        },
        {
          question: "Où va réellement mon argent?",
          answer:
            "Chaque dollar reste local : foyers de groupe et places de répit, accompagnement à l'emploi, programmes jeunesse et activités d'accès communautaire. Nos états financiers vérifiés sont disponibles sur demande.",
        },
        {
          question: "Puis-je dédier mon don à quelqu'un?",
          answer:
            "Absolument — choisissez « Dédier ce don » lors du paiement pour donner en l'honneur ou à la mémoire de quelqu'un, et nous pouvons en informer la famille si vous le souhaitez.",
        },
        {
          question: "Le don mensuel est-il préférable au don unique?",
          answer:
            "Les dons mensuels nous donnent un financement prévisible pour planifier les programmes toute l'année, et vous pouvez modifier ou annuler en tout temps. Les deux sont profondément appréciés.",
        },
      ],
    },
    donateNow: {
      title: "Faire un don",
      metaDescription: "Complétez votre don en toute sécurité.",
      heading: "Complétez votre don",
      subheading: "Sécuritaire, simple et 100 % d'impact local.",
      back: "Retour",
    },
    contact: {
      title: "Contact",
      metaDescription: "Appelez-nous, écrivez-nous ou envoyez un message.",
      banner:
        "Des questions sur les services, le bénévolat ou les partenariats? Nous serions ravis de vous entendre.",
      heading: "Restons en contact",
      subheading:
        "Des questions sur les services, le bénévolat ou les partenariats? Nous serions ravis de vous entendre.",
      call: "Appelez-nous",
      emailUs: "Écrivez-nous",
      office: "Notre bureau",
    },
    whoWeSupport: {
      title: "Qui nous soutenons",
      metaDescription:
        "Nous soutenons les personnes ayant des besoins médicaux et complexes pour bien vivre dans la communauté.",
      banner:
        "Nous soutenons les personnes ayant des besoins médicaux et complexes pour bien vivre dans la communauté.",
      supportsHeading: "Nos soutiens",
      imageCaption: "Prêts à rouler — tout le monde a sa place sur le sentier.",
      intro: "Le désir d'avoir son propre chez-soi et de faire partie d'une communauté est universel.",
      missionBody:
        "Chez Hurpel Support Services, notre mission est de soutenir les personnes ayant des besoins médicaux, physiques et/ou développementaux complexes pour en faire une réalité.",
      sacredHeading: "Préserver ce qui est sacré",
      sacredBody:
        "Ce travail repose sur notre philosophie de « Préserver ce qui est sacré » : la conviction inébranlable que chaque personne mérite une vie de sens, d'appartenance et d'opportunités, peu importe la complexité de ses besoins.",
      individualityBody:
        "Nous honorons l'individualité de chaque personne et protégeons son droit de choisir en façonnant nos soutiens autour de ses objectifs uniques.",
      commitmentBody:
        "Notre engagement est de permettre aux personnes que nous soutenons de vivre une belle vie, avec dignité, choix et connexion.",
      pillars: [
        {
          title: "Le sens",
          description: "Une vie bâtie autour des objectifs, des passions et des jalons de chaque personne.",
        },
        {
          title: "L'appartenance",
          description: "Un vrai chez-soi, de vraies amitiés et une place valorisée dans la communauté.",
        },
        {
          title: "L'opportunité",
          description:
            "La chance d'apprendre, de travailler, de jouer et de grandir — peu importe la complexité des besoins.",
        },
      ],
      exploreServices: "Découvrir nos services",
    },
    impactOfGiving: {
      title: "L'impact de vos dons",
      metaDescription: "Voyez exactement comment votre don change des vies dans notre communauté.",
      banner:
        "Chaque don devient un foyer, un emploi, une amitié. Voyez jusqu'où va votre générosité.",
      journeyHeading: "Le parcours de votre dollar",
      journeyIntro:
        "Chaque dollar donné reste local et est suivi du don jusqu'à l'impact. Voici ce que votre générosité rend possible.",
      tiers: [
        {
          amount: "25 $",
          title: "Un après-midi d'appartenance",
          description:
            "Couvre une sortie récréative communautaire — natation, quilles, cours d'art — où naissent les amitiés.",
        },
        {
          amount: "50 $",
          title: "Une semaine d'accompagnement à l'emploi",
          description:
            "Finance un accompagnement individuel qui transforme les forces de chacun en travail valorisant et rémunéré.",
        },
        {
          amount: "100 $",
          title: "Une journée de répit pour une famille",
          description:
            "Offre une journée complète de répit, donnant aux aidants le temps de souffler pendant que leur proche profite d'un séjour sécuritaire et amusant.",
        },
        {
          amount: "250 $",
          title: "Un mois de programmes jeunesse",
          description:
            "Parraine un mois d'ateliers centrés sur la famille qui aident les enfants et les jeunes à grandir, apprendre et s'épanouir.",
        },
      ],
      whereHeading: "Où va l'argent",
      whereIntro:
        "En tant qu'organisme de bienfaisance enregistré, nous publions des états financiers vérifiés et sommes fièrement agréés FOCUS. La transparence n'est pas une promesse — c'est une pratique.",
      allocations: [
        { pct: "78 %", label: "Programmes et soutiens directs" },
        { pct: "14 %", label: "Foyers et installations" },
        { pct: "8 %", label: "Administration et collecte de fonds" },
      ],
      storyHeading: "Un don, une histoire",
      storyQuote:
        "Grâce aux donateurs mensuels, mon fils a emménagé dans un foyer avec soutien à cinq minutes de chez nous. Ses colocataires sont maintenant ses meilleurs amis. Voilà ce que le don accomplit.",
      storyAttribution: "Parent d'une personne soutenue",
      ctaHeading: "Prêt à faire votre impact?",
      ctaBody: "Donnez une fois ou chaque mois — dans les deux cas, tout votre don travaille ici même.",
    },
  },
};
