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
    focusLine: "Fondé à London, en Ontario",
    switchToDark: "Passer au thème sombre",
    switchToLight: "Passer au thème clair",
    callUs: "Appelez-nous",
  },
  nav: {
    inquireContact: "Renseignements / Contact",
    viewAll: "Voir tout",
    comingSoon: "Bientôt",
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
            description: "Ce que nous bâtissons et ce que nous rendrons public.",
          },
          accountability: {
            label: "Agrément et responsabilité",
            description: "Comment un nouvel organisme reste transparent dès le premier jour.",
          },
        },
      },
      whoWeSupport: {
        label: "Qui nous soutenons",
        description: "Des personnes ayant des besoins médicaux et complexes, vivant bien dans la communauté.",
      },
      services: {
        label: "Notre vision par étapes",
        items: {
          youth: {
            label: "Étape 1 — Services résidentiels jeunesse",
            description: "Notre priorité immédiate, en cours d'autorisation auprès du MCCSS.",
          },
          adult: {
            label: "Étape 2 — Logement avec soutien pour adultes",
            description: "Une étape future distincte, après l'autorisation du programme jeunesse.",
          },
          licensing: {
            label: "Avis d'autorisation",
            description: "Où nous en sommes, et ce que nous ne pouvons pas faire d'ici là.",
          },
        },
      },
      events: {
        label: "Événements à venir",
        items: {
          belong: {
            label: "Chacun mérite une place",
            description: "Une campagne de sensibilisation en préparation. Pas encore programmée.",
          },
          run: {
            label: "Une course communautaire",
            description: "Une marche ou course accessible que nous espérons organiser. Pas de date.",
          },
          cookie: {
            label: "Semaine des commerces locaux",
            description: "Une collecte avec les commerces du quartier. Aucun partenaire confirmé.",
          },
        },
      },
      impactOfGiving: { label: "L'impact de vos dons" },
      getInvolved: {
        label: "Participez",
        items: {
          volunteer: {
            label: "Devenir bénévole",
            description: "Manifestez votre intérêt — le recrutement s'ouvrira après l'autorisation.",
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
          "Hurpel Support Services se bâtit pour soutenir les personnes ayant une déficience développementale afin qu'elles vivent une vie épanouie, en collaboration avec les familles et la communauté. Notre programme résidentiel jeunesse est en cours d'autorisation auprès du MCCSS.",
        primary: "Donnez aujourd'hui",
        secondary: "Découvrir nos services",
      },
      services: {
        eyebrow: "Notre écosystème de services",
        title: "Un soutien bâti",
        titleAccent: "autour de vous.",
        description:
          "Soutien à l'emploi, programmes jeunesse et accès communautaire — des soutiens centrés sur la personne à chaque étape de la vie.",
        primary: "Voir tous les services",
        secondary: "Contactez-nous",
      },
      events: {
        eyebrow: "En préparation",
        title: "Nos premiers événements",
        titleAccent: "sont en préparation.",
        description:
          "Rien n'est encore au calendrier — nous sommes un nouvel organisme. Découvrez ce que nous espérons offrir et dites-nous ce qui vous intéresse.",
        primary: "Voir nos projets",
        secondary: "Participez",
      },
    },
    chips: {
      charity: { value: "Nouvel", label: "organisme de bienfaisance enregistré" },
      local: { value: "London", label: "Ontario — notre point d'ancrage" },
      open: { value: "Ouvert", label: "aux familles, bénévoles et partenaires" },
    },
    prevSlide: "Diapositive précédente",
    nextSlide: "Diapositive suivante",
    chooseSlide: "Choisir une diapositive",
    goToSlide: "Aller à la diapositive",
    highlights: "En vedette",
  },
  licensing: {
    bannerLabel: "Avis pré-autorisation :",
    bannerBody:
      "Aucune opération de soins, aucun placement résidentiel et aucun traitement d'admission n'auront lieu avant l'octroi officiel du permis du MSESC.",
    bannerLink: "Lire l'avis complet",
    noticeBadge: "Avis important",
    noticeHeading: "Notre statut d'autorisation",
    cleared:
      "Hurpel Support Services a reçu toutes les autorisations locales de London en matière de zonage, d'incendie et de santé.",
    pending: "Nous travaillons actuellement à l'obtention de notre permis du MSESC (MCCSS).",
    noOperations:
      "Aucune opération de soins, aucun placement résidentiel et aucun traitement d'admission n'auront lieu avant l'octroi officiel du permis provincial.",
  },
  trust: {
    ariaLabel: "Notre façon de travailler",
    badge: "Organisme de bienfaisance canadien enregistré",
    points: [
      "Établi à London, en Ontario",
      "Soutien centré sur la personne",
      "Mené par les familles et la communauté",
      "Transparent sur ce que nous pouvons offrir ou non",
    ],
  },
  services: {
    eyebrow: "Notre feuille de route",
    heading: "Une vision par étapes pour un soutien à vie",
    subheading:
      "Nous savons que la constance est essentielle au développement. Pour garantir le plus haut niveau de conformité réglementaire et de sécurité, Hurpel Support Services suit un modèle d'expansion structuré sur plusieurs sites.",
    needCare: "Des questions sur notre déploiement par étapes?",
    accessSupport: "Contactez notre équipe",
    items: {
      youth: {
        badge: "Étape 1 — En cours d'autorisation",
        title: "Notre priorité immédiate : services résidentiels jeunesse",
        description:
          "Nous consacrons actuellement 100 % de nos ressources opérationnelles au lancement de notre programme jeunesse spécialisé. Cet établissement est en cours d'autorisation auprès du ministère des Services à l'enfance et des Services sociaux et communautaires de l'Ontario (MCCSS).",
      },
      adult: {
        badge: "Étape 2 — Vision future",
        title: "Notre vision future : logement avec soutien pour adultes",
        description:
          "Le soutien ne devrait pas s'arrêter à l'âge adulte. Notre plan stratégique à long terme prévoit l'ouverture de milieux de vie avec soutien distincts pour adultes dans la région de London.",
      },
    },
  },
  impact: {
    heading: "Ce que nous bâtissons",
    subheading:
      "Nous en sommes à notre première année : nous n'avons pas encore de chiffres d'impact à présenter — et nous préférons ne rien montrer plutôt que d'inventer. Voici nos engagements, et ce que nous rendrons public dès que nous l'aurons.",
    items: [
      {
        title: "Centré sur la personne dès le départ",
        body: "Un soutien planifié autour de la personne et de sa famille, et non autour de ce qui est le plus simple pour nous.",
      },
      {
        title: "Des rapports honnêtes",
        body: "Nous publierons de vrais chiffres sur les participants, les bénévoles et les finances dès que nous les aurons — sans chiffres gonflés entre-temps.",
      },
      {
        title: "Le local d'abord",
        body: "Chaque dollar recueilli sert à soutenir des personnes de London et des environs.",
      },
      {
        title: "Bâti avec les familles",
        body: "Les familles et les autoreprésentants façonnent notre offre, son ordre de priorité et sa mise en œuvre.",
      },
    ],
    charityNote:
      "Organisme de bienfaisance canadien enregistré. Notre premier rapport public suivra à la fin de notre première année.",
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
        cta: "Manifester votre intérêt",
      },
      donate: {
        title: "Vous êtes un champion discret",
        description:
          "Votre don reste local et sert à faire autoriser et ouvrir notre programme résidentiel jeunesse. Chaque dollar compte ici.",
        cta: "Donner maintenant",
      },
      partner: {
        title: "Vous êtes un bâtisseur de communauté",
        description:
          "Employeurs, commanditaires et groupes rendent l'inclusion durable — embauche, jumelage de dons, commandite d'événements.",
        cta: "Amorcer la conversation",
      },
    },
    restart: "Recommencer",
    stepLabel: "Question",
  },
  events: {
    eyebrow: "En préparation",
    heading: "Les événements que nous préparons",
    subheading:
      "Nous sommes un tout nouvel organisme : rien n'est encore au calendrier. Voici les événements que nous souhaitons offrir en premier — dites-nous lequel vous intéresse.",
    notice: "Aucun de ces événements n'est encore programmé. Les dates seront annoncées au fur et à mesure.",
    items: {
      belong: {
        tag: "Campagne prévue",
        dateDay: "À venir",
        dateMonth: "Prévu",
        title: "Chacun mérite une place",
        description:
          "Une campagne de sensibilisation que nous prévoyons lancer pour les personnes ayant une déficience développementale qui attendent encore du soutien près de chez elles.",
        cta: "Manifester votre intérêt",
      },
      run: {
        tag: "Événement prévu",
        dateDay: "À venir",
        dateMonth: "Prévu",
        title: "Une course communautaire",
        description:
          "Une marche ou course entièrement accessible que nous espérons organiser dès que les bénévoles et les permis seront en place.",
        cta: "Manifester votre intérêt",
      },
      cookie: {
        tag: "Collecte prévue",
        dateDay: "À venir",
        dateMonth: "Prévu",
        title: "Semaine des commerces locaux",
        description:
          "Une semaine de financement avec les commerces du quartier que nous aimerions organiser. Aucun partenaire n'est encore confirmé.",
        cta: "Amorcer la conversation",
      },
    },
  },
  involved: {
    heading: "Faites partie de l'histoire",
    subheading:
      "Manifestez votre intérêt dès maintenant — bénévolat et partenariats s'ouvriront une fois notre permis obtenu.",
    volunteer: {
      title: "Devenir bénévole",
      description:
        "Le recrutement s'ouvrira une fois notre permis obtenu. Manifestez votre intérêt et nous vous contacterons à ce moment.",
      cta: "Manifester votre intérêt",
    },
    partner: {
      title: "Devenir partenaire",
      description:
        "Employeurs, commanditaires et groupes communautaires — les présentations sont bienvenues, les ententes viendront après l'autorisation.",
      cta: "Amorcer la conversation",
    },
  },
  donateBand: {
    heading: "Offrez le cadeau de l'appartenance",
    subheading:
      "Chaque dollar reste local — il finance des foyers, des programmes et des opportunités pour les personnes ayant une déficience développementale, ici même dans notre communauté.",
    provides: "offre",
    amounts: [
      { value: "25 $", impact: "pour l'équipement de sécurité et d'accessibilité" },
      { value: "50 $", impact: "pour la formation et la vérification du personnel" },
      { value: "100 $", impact: "pour meubler la chambre d'un jeune" },
      { value: "250 $", impact: "pour les frais d'autorisation et de conformité" },
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
      "25 $ servent à l'équipement de sécurité et d'accessibilité",
      "50 $ servent à la formation et la vérification du personnel",
      "100 $ servent à meubler la chambre d'un jeune",
      "250 $ servent aux frais d'autorisation et de conformité",
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
    comingSoonNote:
      "Les dons en ligne ne sont pas encore ouverts — nous les activerons dès l'obtention de notre permis du MCCSS. Écrivez-nous si vous souhaitez donner entre-temps.",
    poweredBy: "Propulsé par",
    paymentPartners: "Partenaires de paiement acceptés",
  },
  donateOptions: {
    heading: "Faire un don maintenant",
    subheading:
      "Vous préférez ne pas attendre un courriel? Donnez immédiatement via l'un de nos partenaires sécurisés.",
    giveWith: "Donner avec {provider}",
    comingSoon: "Bientôt disponible",
    comingSoonShort: "Bientôt",
    modalTitle: "Donner avec {provider}",
    close: "Fermer",
    loading: "Chargement du formulaire de don sécurisé…",
    handoffBody:
      "{provider} n'autorise pas l'affichage de son paiement à l'intérieur d'un autre site. Continuez et la page sécurisée de {provider} s'ouvrira ici — votre don est traité entièrement par eux.",
    continueTo: "Continuer vers {provider}",
    cancel: "Annuler",
    stripeAmount: "Choisissez un montant",
    stripeCustom: "Montant personnalisé ($)",
    stripeContinue: "Continuer vers le paiement sécurisé",
    stripeMinimum: "Veuillez saisir un montant de 5 $ ou plus.",
    stripeSecureNote:
      "Les données de carte sont saisies chez Stripe et n'atteignent jamais nos serveurs.",
    stripeError: "Nous n'avons pas pu démarrer le paiement. Veuillez réessayer.",
  },
  pages: {
    home: {
      title: "Hurpel Support Services — Des personnes valorisées. Une communauté inclusive.",
      description:
        "Hurpel Support Services se bâtit pour soutenir les personnes ayant une déficience développementale afin qu'elles vivent une vie épanouie, en collaboration avec les familles et la communauté. Notre programme résidentiel jeunesse est en cours d'autorisation auprès du MCCSS.",
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
      leadershipHeading: "Notre direction",
      leadershipBody:
        "Notre équipe de direction allie une passion pour les services sociaux à un strict respect de la conformité provinciale. En maintenant une communication ouverte avec les superviseurs de programme du MCCSS, les inspecteurs municipaux et les réseaux locaux de services aux personnes ayant une déficience intellectuelle, nous veillons à ce que notre maison demeure une référence en matière de soins dans le Sud-Ouest de l'Ontario.",
      leadershipNote:
        "Les profils individuels de l'équipe seront publiés une fois notre permis du MCCSS accordé.",
      accountabilityHeading: "Agrément et responsabilité",
      accountabilityBody:
        "En tant qu'organisme de bienfaisance enregistré, chaque dollar est suivi et déclaré. Nous sommes un nouvel organisme : nos premiers chiffres annuels seront publiés à la fin de notre première année — et nous n'annoncerons pas de résultats que nous n'avons pas.",
      getInvolvedCta: "Participez",
    },
    services: {
      title: "Notre vision par étapes",
      metaDescription:
        "Notre plan par étapes : services résidentiels jeunesse en cours d'autorisation auprès du MCCSS, et logement avec soutien pour adultes comme étape future.",
      banner:
        "Un plan structuré sur plusieurs sites, axé sur la conformité réglementaire et la sécurité.",
      accessThisSupport: "Poser une question sur cette étape",
      faqHeading: "Questions fréquentes",
      faqIntro:
        "Des questions sur où nous en sommes? Ces réponses aident — et nous sommes joignables au",
      items: {
        youth: {
          badge: "Étape 1 — En cours d'autorisation",
          title: "Notre priorité immédiate : services résidentiels jeunesse",
          description:
            "Nous consacrons actuellement 100 % de nos ressources opérationnelles au lancement de notre programme jeunesse spécialisé. Cet établissement est en cours d'autorisation auprès du ministère des Services à l'enfance et des Services sociaux et communautaires de l'Ontario (MCCSS). Notre programme jeunesse vise à offrir des milieux stables, de type familial, axés sur l'éducation, la régulation émotionnelle et les compétences essentielles.",
          points: [
            "Des milieux stables, de type familial",
            "Éducation, régulation émotionnelle et compétences essentielles",
            "En cours d'autorisation auprès du MCCSS — pas encore en activité",
          ],
        },
        adult: {
          badge: "Étape 2 — Vision future",
          title: "Notre vision future : logement avec soutien pour adultes",
          description:
            "Le soutien ne devrait pas s'arrêter à l'âge adulte. Pour éviter les ruptures de service lorsque les jeunes quittent les services jeunesse, notre plan à long terme prévoit l'ouverture de milieux de vie avec soutien distincts pour adultes dans la région de London. Cette étape distincte portera sur le soutien professionnel, la transition vers l'autonomie et la participation communautaire à long terme.",
          points: [
            "Des lieux distincts et dédiés aux adultes dans la région de London",
            "Soutien professionnel et transition vers l'autonomie",
            "Participation communautaire à long terme",
          ],
        },
      },
      faqs: [
        {
          question: "Pouvons-nous faire une demande ou réserver une place maintenant?",
          answer:
            "Non. Aucune opération de soins, aucun placement résidentiel et aucun traitement d'admission n'auront lieu avant l'octroi officiel du permis provincial. Nous ne pouvons accepter aucune demande, ni inscrire qui que ce soit sur une liste d'attente, ni amorcer un processus d'admission avant cette étape. Vous pouvez nous écrire pour des questions générales.",
        },
        {
          question: "À quelle étape en êtes-vous?",
          answer:
            "Hurpel Support Services a reçu toutes les autorisations locales de London en matière de zonage, d'incendie et de santé, et nous travaillons actuellement à l'obtention de notre permis du MCCSS pour notre programme résidentiel jeunesse.",
        },
        {
          question: "Quand le programme jeunesse ouvrira-t-il?",
          answer:
            "Cela relève du ministère et non de nous : nous ne devinerons pas de date. Nous l'annoncerons ici dès que le permis sera officiellement accordé.",
        },
        {
          question: "Qu'en est-il du logement avec soutien pour adultes?",
          answer:
            "Il s'agit d'une étape future, et non d'un service actuel. Elle exigerait ses propres lieux et ses propres approbations, et les travaux commenceront après l'autorisation et la mise en service de notre programme jeunesse.",
        },
      ],
    },
    events: {
      title: "Événements à venir",
      metaDescription:
        "Hurpel Support Services en est à sa première année. Aucun événement n'est encore programmé — voici ce que nous préparons.",
      banner: "Notre calendrier d'événements est encore en construction. Voici ce que nous espérons offrir en premier.",
      noticeBadge: "Bientôt",
      noticeHeading: "Aucun événement n'a encore lieu",
      noticeBody:
        "Hurpel Support Services en est à sa première année : rien n'est au calendrier pour l'instant — et nous préférons vous le dire clairement plutôt que d'afficher un événement auquel vous ne pouvez pas assister. Tout ce qui suit figure à notre plan, sans être confirmé. Dites-nous ce qui vous intéresse et nous vous préviendrons dès qu'une date sera fixée.",
      noticeCta: "Dites-nous ce qui vous intéresse",
      plannedBadge: "Prévu — pas encore programmé",
      items: {
        belong: {
          tag: "Campagne prévue",
          title: "Chacun mérite une place",
          description:
            "Nous prévoyons une campagne de sensibilisation pour les personnes ayant une déficience développementale qui attendent encore du soutien près de chez elles — partager des histoires locales et les porter auprès des décideurs. Rien n'est lancé : nous bâtissons d'abord les partenariats.",
          cta: "Manifester votre intérêt",
        },
        run: {
          tag: "Événement prévu",
          title: "Une course communautaire",
          description:
            "Une marche ou course entièrement accessible où chacun a sa place sur la ligne de départ. C'est une ambition, pas une date — il nous faut des bénévoles, un parcours et des permis avant d'annoncer quoi que ce soit. Si vous souhaitez y participer ou aider à l'organiser, écrivez-nous.",
          cta: "Manifester votre intérêt",
        },
        cookie: {
          tag: "Collecte prévue",
          title: "Semaine des commerces locaux",
          description:
            "Une semaine de financement avec les commerces du quartier, où une part des ventes soutient nos programmes. Aucun partenaire n'est encore confirmé — si vous tenez un commerce local et souhaitez être parmi les premiers, contactez-nous.",
          cta: "Amorcer la conversation",
        },
      },
    },
    getInvolved: {
      title: "Participez",
      metaDescription:
        "Manifestez votre intérêt pour le bénévolat ou un partenariat. Le recrutement s'ouvrira après l'octroi du permis du MCCSS.",
      banner:
        "Manifestez votre intérêt dès maintenant — le recrutement officiel s'ouvrira une fois notre permis obtenu.",
      noticeHeading: "Nous ne recrutons pas encore",
      noticeBody:
        "Nous n'acceptons aucune candidature de bénévole, ne procédons à aucune vérification et ne confirmons aucune entente de partenariat avant l'octroi officiel de notre permis du MCCSS. Vous pouvez tout à fait manifester votre intérêt dès maintenant — nous conserverons vos coordonnées et vous contacterons à l'ouverture officielle du recrutement.",
      volunteerHeading: "Devenir bénévole",
      volunteerBody:
        "Voici les rôles dont nous aurons besoin une fois autorisés. Rien ci-dessous n'est encore ouvert aux candidatures.",
      roles: [
        "Équipes d'événements, dès que nos premiers événements seront programmés",
        "Accompagnateurs pour les activités de jour",
        "Mentors pour les services d'emploi",
        "Bénévoles au conseil et aux comités",
      ],
      applyCta: "Manifester votre intérêt",
      donateHeading: "Offrez le cadeau de l'appartenance",
      donateBody:
        "Don unique ou mensuel — chaque dollar reste local et finance des foyers, des programmes et des opportunités.",
      partnerHeading: "Devenir partenaire",
      partnerBody:
        "Employeurs, commanditaires et groupes communautaires — nous aimerions vous entendre, même si aucune entente ne peut être confirmée avant l'autorisation. Appelez le {phone} ou écrivez-nous.",
    },
    donate: {
      title: "Faire un don",
      metaDescription:
        "Donnez une fois ou chaque mois. Chaque dollar reste local et finance des foyers, des programmes et des opportunités.",
      banner:
        "Chaque dollar reste local et finance des foyers, des programmes et des opportunités pour les personnes ayant une déficience développementale.",
      faqHeading: "Vos questions sur le don",
      faqIntro: "Organisme de bienfaisance enregistré {charity} — responsable, transparent et local.",
      faqs: [
        {
          question: "Vais-je recevoir un reçu fiscal?",
          answer:
            "Oui. En tant qu'organisme de bienfaisance canadien enregistré, nous émettons des reçus officiels pour les dons de 20 $ et plus — automatiquement par courriel pour les dons en ligne.",
        },
        {
          question: "Où va réellement mon argent?",
          answer:
            "Chaque dollar reste local : accompagnement à l'emploi, programmes jeunesse et activités d'accès communautaire. Nouvel organisme, nos premiers états financiers suivront la fin de notre première année et seront partagés ouvertement.",
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
      orPledge: "Ou promettez et payez plus tard",
      back: "Retour",
    },
    donateComplete: {
      successTitle: "Merci — votre don est confirmé",
      successBody:
        "Votre don servira à soutenir des personnes ayant une déficience développementale ici, dans notre communauté. Stripe vous a envoyé un reçu de paiement; votre reçu fiscal suivra de notre part.",
      pendingTitle: "Nous n'avons pas pu confirmer ce don",
      pendingBody:
        "Stripe n'a pas signalé ce paiement comme complet. Si un montant a été prélevé, contactez-nous et nous réglerons la situation — ne payez pas deux fois.",
      receiptTo: "Un reçu de paiement a été envoyé à {email}.",
      backHome: "Retour à l'accueil",
      tryAgain: "Réessayer",
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
        "Pour qui notre programme résidentiel jeunesse est conçu — actuellement en cours d'autorisation auprès du MCCSS.",
      banner:
        "Pour qui nos programmes sont conçus. Aucun placement avant l'octroi du permis.",
      supportsHeading: "Pour qui nous bâtissons",
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
      exploreServices: "Voir notre vision par étapes",
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
          title: "Un atelier pour une famille",
          description:
            "Finance un atelier centré sur la famille : du soutien concret pour les parents et les aidants, entourés de gens qui comprennent.",
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
        "En tant qu'organisme de bienfaisance enregistré, nous rendons compte de chaque dollar et publierons nos états financiers dès la fin de notre première année. La transparence n'est pas une promesse — c'est une pratique.",
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
