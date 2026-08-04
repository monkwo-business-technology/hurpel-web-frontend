const dict = {
  common: {
    skipToMain: "Skip to main content",
    home: "Home",
    learnMore: "Learn more",
    donateNow: "Donate Now",
    contactUs: "Contact Us",
    back: "Back",
    charityLine: "Registered Charity",
    focusLine: "Founded in London, Ontario",
    switchToDark: "Switch to dark theme",
    switchToLight: "Switch to light theme",
    callUs: "Call us",
  },
  nav: {
    inquireContact: "Inquire / Contact",
    viewAll: "View all",
    comingSoon: "Coming soon",
    sections: {
      home: { label: "Home" },
      contact: { label: "Contact Us" },
      about: {
        label: "About Us",
        items: {
          mission: {
            label: "Who We Are — Mission & Values",
            description: "Valued people, inclusive community — what drives us every day.",
          },
          impact: {
            label: "Our Impact",
            description: "What we are building, and what we will report on publicly.",
          },
          accountability: {
            label: "Accreditation & Accountability",
            description: "How a new charity stays transparent from day one.",
          },
        },
      },
      whoWeSupport: {
        label: "Who We Support",
        description: "People with medical and complex needs, living well in community.",
      },
      services: {
        label: "Our Vision",
        groupLabel: "Our Phased Vision",
        items: {
          youth: {
            label: "Phase 1 — Youth Residential Services",
            description: "Our immediate focus, currently in licensing with MCCSS.",
          },
          adult: {
            label: "Phase 2 — Adult Supportive Housing",
            description: "A separate future phase, after our youth program is licensed.",
          },
          licensing: {
            label: "Licensing Disclaimer",
            description: "Where we stand, and what we cannot do until licensed.",
          },
        },
      },
      events: {
        label: "Upcoming Events",
        items: {
          belong: {
            label: "Everyone Needs A Place to Belong",
            description: "An awareness campaign we are planning. Not scheduled yet.",
          },
          run: {
            label: "A Community Fun Run",
            description: "An accessible walk, roll, or run we hope to host. No date yet.",
          },
          cookie: {
            label: "Local Business Partner Drive",
            description: "A shop-local fundraiser we would like to run. No partners confirmed.",
          },
        },
      },
      impactOfGiving: { label: "Impact of Giving" },
      getInvolved: {
        label: "Get Involved",
        items: {
          volunteer: {
            label: "Volunteer With Us",
            description: "Register your interest — recruitment opens once we are licensed.",
          },
          donate: {
            label: "Donate",
            description: "Give once or monthly — every dollar stays local.",
          },
          contact: {
            label: "Contact & Support",
            description: "Questions about services or partnership? Reach out.",
          },
        },
      },
    },
  },
  hero: {
    greeting: {
      morning: "Good morning",
      afternoon: "Good afternoon",
      evening: "Good evening",
      welcome: "welcome",
      welcomeBack: "welcome back",
    },
    slides: {
      belong: {
        eyebrow: "Hurpel Support Services",
        title: "Valued People.",
        titleAccent: "Inclusive Community.",
        description:
          "Hurpel Support Services is being built to support people with developmental disabilities to live fulfilled lives, in collaboration with families and the community. Our youth residential program is in the licensing stage with MCCSS.",
        primary: "Donate Today",
        secondary: "Explore Services",
      },
      services: {
        eyebrow: "Our Services Ecosystem",
        title: "Support Built",
        titleAccent: "Around You.",
        description:
          "Employment support, child and youth programs, and community access — person-centered supports for every stage of life.",
        primary: "View All Services",
        secondary: "Contact Us",
      },
      events: {
        eyebrow: "In The Works",
        title: "Our First Events",
        titleAccent: "Are Being Planned.",
        description:
          "Nothing is on the calendar yet — we are a new organisation. See what we hope to run first and tell us what you would come to.",
        primary: "See What We Are Planning",
        secondary: "Get Involved",
      },
    },
    chips: {
      charity: { value: "New", label: "registered Canadian charity" },
      local: { value: "London", label: "Ontario — where we are based" },
      open: { value: "Open", label: "to families, volunteers, and partners" },
    },
    prevSlide: "Previous slide",
    nextSlide: "Next slide",
    chooseSlide: "Choose slide",
    goToSlide: "Go to slide",
    highlights: "Highlights",
  },
  licensing: {
    bannerLabel: "Pre-licensing notice:",
    bannerBody:
      "No care operations, residential placements, or intake processing will occur until MCCSS licensing is officially granted.",
    bannerLink: "Read the full disclaimer",
    noticeBadge: "Important disclaimer",
    noticeHeading: "Our licensing status",
    cleared:
      "Hurpel Support Services is fully cleared by local London zoning, fire, and health authorities.",
    pending: "We are presently working on our MCCSS licensing approval.",
    noOperations:
      "No care operations, residential placements, or intake processing will occur until provincial licensing is officially granted.",
  },
  trust: {
    ariaLabel: "How we work",
    badge: "Registered Canadian charity",
    points: [
      "Based in London, Ontario",
      "Person-centered support",
      "Family and community led",
      "Open about what we can and cannot do yet",
    ],
  },
  services: {
    eyebrow: "Our Roadmap",
    heading: "A Phased Vision for Lifelong Support",
    subheading:
      "We recognize that consistency is vital for developmental success. To ensure the highest level of regulatory compliance and safety, Hurpel Support Services operates on a structured, multi-site expansion model.",
    needCare: "Questions about our phased rollout?",
    accessSupport: "Contact our team",
    items: {
      youth: {
        badge: "Phase 1 — In licensing",
        title: "Our Immediate Focus: Youth Residential Services",
        description:
          "We are currently dedicating 100% of our operational resources toward launching our specialized youth program. This facility is in the stage of licensing with the Ontario Ministry of Children, Community and Social Services (MCCSS).",
      },
      adult: {
        badge: "Phase 2 — Future vision",
        title: "Our Future Vision: Adult Supportive Housing",
        description:
          "True support shouldn't stop when an individual reaches adulthood. Our long-term strategic plan includes opening separate, dedicated adult supportive living locations within the London area.",
      },
    },
  },
  impact: {
    heading: "What We Are Building",
    subheading:
      "We are in our founding year, so we have no impact numbers to report yet — and we would rather show you nothing than invent something. Here is what we are committing to, and what we will report on publicly once we have it.",
    items: [
      {
        title: "Person-centered from day one",
        body: "Support planned around the individual and their family, not around what is easiest for us to deliver.",
      },
      {
        title: "Honest reporting",
        body: "We will publish real participant, volunteer, and finance numbers as soon as we have them — no rounded-up claims in the meantime.",
      },
      {
        title: "Local first",
        body: "Every dollar raised is spent on supports for people in London and the surrounding community.",
      },
      {
        title: "Built with families",
        body: "Families and self-advocates help shape what we offer, in what order, and how it is run.",
      },
    ],
    charityNote:
      "Registered Canadian charity. Our first public report will follow at the end of our founding year.",
  },
  quiz: {
    eyebrow: "Two-Minute Match",
    heading: "Find Your Way to Help",
    subheading: "Answer three quick questions and we'll point you to the way you can matter most.",
    questions: [
      {
        question: "How much time could you give?",
        options: [
          { label: "A few hours, sometimes", path: "volunteer" },
          { label: "Not much — but I can give", path: "donate" },
          { label: "My organization has resources", path: "partner" },
        ],
      },
      {
        question: "What sounds most like you?",
        options: [
          { label: "Being there with people", path: "volunteer" },
          { label: "Quietly making things possible", path: "donate" },
          { label: "Building something bigger together", path: "partner" },
        ],
      },
      {
        question: "What would make you proudest?",
        options: [
          { label: "A friendship that changed someone's week", path: "volunteer" },
          { label: "A home or job that exists because of me", path: "donate" },
          { label: "My team rallying behind inclusion", path: "partner" },
        ],
      },
    ],
    results: {
      volunteer: {
        title: "You're a Volunteer at heart",
        description:
          "Event crews, program companions, skills mentors — register your interest now and we will contact you when recruitment opens.",
        cta: "Register Your Interest",
      },
      donate: {
        title: "You're a Quiet Champion",
        description:
          "Your gift stays local and goes toward getting our youth residential program licensed and open. Every dollar works here.",
        cta: "Give Now",
      },
      partner: {
        title: "You're a Community Builder",
        description:
          "Employers, sponsors, and groups make inclusion systemic — hiring, matching gifts, sponsoring events.",
        cta: "Partner With Us",
      },
    },
    restart: "Start over",
    stepLabel: "Question",
  },
  events: {
    eyebrow: "In The Works",
    heading: "Events We Are Planning",
    subheading:
      "We are a brand new organisation, so nothing is on the calendar yet. These are the events we want to bring to our community first — tell us which one you would show up for.",
    notice: "None of these are scheduled yet. Dates will be announced as we grow.",
    items: {
      belong: {
        tag: "Planned campaign",
        dateDay: "TBA",
        dateMonth: "Planned",
        title: "Everyone Needs A Place to Belong",
        description:
          "An awareness campaign we plan to launch for people with developmental disabilities still waiting for support close to home.",
        cta: "Register your interest",
      },
      run: {
        tag: "Planned event",
        dateDay: "TBA",
        dateMonth: "Planned",
        title: "A Community Fun Run",
        description:
          "A fully accessible walk, roll, or run we hope to host once we have the volunteers and permits in place.",
        cta: "Register your interest",
      },
      cookie: {
        tag: "Planned fundraiser",
        dateDay: "TBA",
        dateMonth: "Planned",
        title: "Local Business Partner Drive",
        description:
          "A shop-local fundraising week we would love to run with neighbourhood businesses. No partners confirmed yet.",
        cta: "Partner with us",
      },
    },
  },
  involved: {
    heading: "Be Part of the Story",
    subheading: "Register your interest now — volunteering and partnerships open once we are licensed.",
    volunteer: {
      title: "Volunteer With Us",
      description:
        "Recruitment opens once we are licensed. Register your interest now and we will contact you when it does.",
      cta: "Register Your Interest",
    },
    partner: {
      title: "Partner With Us",
      description:
        "Employers, sponsors, and community groups — introductions welcome, agreements once we are licensed.",
      cta: "Start a Conversation",
    },
  },
  donateBand: {
    heading: "Give the Gift of Belonging",
    subheading:
      "Every dollar stays local — funding programs and opportunities for people with developmental disabilities right here in our community.",
    provides: "provides",
    amounts: [
      { value: "$25", impact: "toward safety and accessibility equipment" },
      { value: "$50", impact: "toward staff training and screening" },
      { value: "$100", impact: "toward furnishing a young person\u2019s room" },
      { value: "$250", impact: "toward licensing and compliance costs" },
    ],
  },
  newsletter: {
    heading: "See Community Impact, Monthly",
    subheading: "Stories, events, and how your support changes lives — one email a month, no noise.",
    emailLabel: "Email address",
    placeholder: "you@example.com",
    signUp: "Sign Up",
    signingUp: "Signing up…",
    thanks: "Thank you for joining! Watch your inbox for community stories.",
    error: "We couldn't sign you up right now. Please try again later.",
  },
  footer: {
    explore: "Explore",
    servicesHeading: "Services",
    contactHeading: "Contact",
    builtFor: "Built for inclusion.",
  },
  contactForm: {
    heading: "Contact form",
    fullName: "Full Name",
    email: "Email Address",
    inquiryLabel: "Nature of Inquiry",
    selectTopic: "Select a topic…",
    inquiryOptions: ["General Question", "Accessing Support", "Volunteering", "Employment/Hiring"],
    messageLabel: "How can our community help yours?",
    newsletterOptIn: "Sign up for our monthly Email Newsletter to see community impact.",
    send: "Send Message",
    sending: "Sending…",
    successTitle: "Message sent!",
    successBody: "Thank you for reaching out. Our team will get back to you within one business day.",
    genericError: "Something went wrong. Please try again.",
  },
  donateForm: {
    heading: "Donation form",
    frequencyLegend: "Donation frequency",
    oneTime: "One-Time",
    monthly: "Monthly ♥",
    monthlyNote: "Monthly gifts provide steady, reliable support all year long.",
    amountLegend: "Choose an amount",
    customAmount: "Custom amount ($)",
    customAmountLabel: "Custom amount in dollars",
    amountContexts: [
      "$25 goes toward safety and accessibility equipment",
      "$50 goes toward staff training and screening",
      "$100 goes toward furnishing a young person\u2019s room",
      "$250 goes toward licensing and compliance costs",
    ],
    fullName: "Full Name",
    email: "Email Address",
    dedicateLabel: "Dedicate this gift (in honor / in memory of someone)",
    dedicationField: "In honor / memory of…",
    submit: "Complete Safe Donation 🔒",
    sending: "Sending…",
    chooseAmountError: "Please choose or enter a donation amount.",
    genericError: "Something went wrong. Please try again.",
    successTitleThanks: "Thank you for your generosity!",
    successBodyMonthly:
      "We've received your monthly pledge. Our team will email you a secure payment link shortly to complete your donation safely.",
    successBodyOneTime:
      "We've received your one-time pledge. Our team will email you a secure payment link shortly to complete your donation safely.",
    disclaimer:
      "No card details are collected here. After you pledge, we email you a secure Stripe/PayPal payment link — your payment details never touch our inbox.",
    comingSoonNote:
      "Online giving is not open yet — we will switch it on once our MCCSS licensing is granted. Please contact us if you would like to give in the meantime.",
    poweredBy: "Powered by",
    paymentPartners: "Accepted payment partners",
  },
  donateOptions: {
    heading: "Give right now",
    subheading:
      "Rather not wait for an email? Donate instantly through one of our secure partners.",
    giveWith: "Give with {provider}",
    comingSoon: "Coming soon",
    comingSoonShort: "Soon",
    modalTitle: "Donate with {provider}",
    close: "Close",
    loading: "Loading the secure donation form…",
    handoffBody:
      "{provider} does not allow its checkout to be displayed inside another website. Continue and {provider}'s secure page will open here — your donation is handled entirely by them.",
    continueTo: "Continue to {provider}",
    cancel: "Cancel",
    stripeAmount: "Choose an amount",
    stripeCustom: "Custom amount ($)",
    stripeContinue: "Continue to secure payment",
    stripeMinimum: "Please enter an amount of $5 or more.",
    stripeSecureNote: "Card details are entered on Stripe and never reach our servers.",
    stripeError: "We couldn't start the payment. Please try again.",
  },
  pages: {
    home: {
      title: "Hurpel Support Services — Valued People. Inclusive Community.",
      description:
        "Hurpel Support Services is being built to support people with developmental disabilities to live fulfilled lives, in collaboration with families and the community. Our youth residential program is in the licensing stage with MCCSS.",
    },
    about: {
      title: "Who We Are",
      metaDescription:
        "Our mission, our impact, and our accountability: quality supports for people with developmental disabilities.",
      banner:
        "A community organization providing quality supports for people with developmental disabilities to live fulfilled lives.",
      missionHeading: "Our Mission & Values",
      missionBody:
        "We believe everyone deserves a safe place to live, meaningful work, and a community that celebrates them.",
      values: [
        {
          title: "Dignity First",
          description: "Every person has the right to be heard, respected, and supported on their own terms.",
        },
        {
          title: "Family Partnership",
          description: "We collaborate with families and caregivers as equal partners in every support plan.",
        },
        {
          title: "Community Belonging",
          description:
            "Inclusion means real friendships, real jobs, and real homes — right here in the community.",
        },
      ],
      leadershipHeading: "Meet Our Leadership",
      leadershipBody:
        "Our leadership team brings together a passion for social services and a strict adherence to provincial compliance. By maintaining open communication with MCCSS program supervisors, municipal inspectors, and local developmental service networks, we ensure our home remains a gold standard for care in Southwestern Ontario.",
      leadershipNote:
        "Individual team profiles will be published once our MCCSS licensing is granted.",
      accountabilityHeading: "Accreditation & Accountability",
      accountabilityBody:
        "As a registered charity, every dollar is tracked and reported. We are a new organisation, so we will publish our first annual figures at the end of our founding year — and we will not claim results we do not have.",
      getInvolvedCta: "Get Involved",
    },
    services: {
      title: "Our Phased Vision",
      metaDescription:
        "Our phased plan: youth residential services currently in MCCSS licensing, and adult supportive housing as a future phase.",
      banner: "A structured, multi-site plan built around regulatory compliance and safety.",
      accessThisSupport: "Ask about this phase",
      faqHeading: "Common Questions",
      faqIntro: "Questions about where we stand? These answers help — and we're a phone call away at",
      items: {
        youth: {
          badge: "Phase 1 — In licensing",
          title: "Our Immediate Focus: Youth Residential Services",
          description:
            "We are currently dedicating 100% of our operational resources toward launching our specialized youth program. This facility is in the stage of licensing with the Ontario Ministry of Children, Community and Social Services (MCCSS). Our youth program is designed to provide stable, family-like environments focusing on education, emotional regulation, and essential life skills.",
          points: [
            "Stable, family-like environments",
            "Education, emotional regulation, and essential life skills",
            "In the licensing stage with MCCSS — not yet operating",
          ],
        },
        adult: {
          badge: "Phase 2 — Future vision",
          title: "Our Future Vision: Adult Supportive Housing",
          description:
            "True support shouldn't stop when an individual reaches adulthood. To prevent service gaps as youth age out of care, our long-term strategic plan includes opening separate, dedicated adult supportive living locations within the London area. This distinct phase will focus on vocational support, independent living transitions, and long-term community participation.",
          points: [
            "Separate, dedicated adult locations in the London area",
            "Vocational support and independent living transitions",
            "Long-term community participation",
          ],
        },
      },
      faqs: [
        {
          question: "Can we apply or register for a placement now?",
          answer:
            "No. No care operations, residential placements, or intake processing will occur until provincial licensing is officially granted. We cannot accept applications, hold waitlist positions, or begin any intake process before that point. You are welcome to contact us with general questions.",
        },
        {
          question: "What stage are you at?",
          answer:
            "Hurpel Support Services is fully cleared by local London zoning, fire, and health authorities, and we are presently working on our MCCSS licensing approval for our youth residential program.",
        },
        {
          question: "When will the youth program open?",
          answer:
            "That is determined by the Ministry, not by us, so we will not guess at a date. We will announce it here once licensing is officially granted.",
        },
        {
          question: "What happens with adult supportive housing?",
          answer:
            "It is a future phase, not a current service. It would require its own separate locations and its own approvals, and work on it begins after our youth program is licensed and running.",
        },
      ],
    },
    events: {
      title: "Upcoming Events",
      metaDescription:
        "Hurpel Support Services is in its founding year. No events are scheduled yet — here is what we are planning.",
      banner: "Our events calendar is still being built. Here is what we hope to run first.",
      noticeBadge: "Coming soon",
      noticeHeading: "No events are running yet",
      noticeBody:
        "Hurpel Support Services is in its founding year, so we have nothing on the calendar right now — and we would rather tell you that plainly than list an event you cannot attend. Everything below is on our plan for the events list, not confirmed. Tell us which one you would come to and we will let you know as soon as a date is set.",
      noticeCta: "Tell us what you would attend",
      plannedBadge: "Planned — not yet scheduled",
      items: {
        belong: {
          tag: "Planned campaign",
          title: "Everyone Needs A Place to Belong",
          description:
            "We plan to run an awareness campaign for people with developmental disabilities who are still waiting for support close to home — sharing local stories and bringing them to decision makers. Nothing has launched yet; we are building the partnerships first.",
          cta: "Register your interest",
        },
        run: {
          tag: "Planned event",
          title: "A Community Fun Run",
          description:
            "A fully accessible walk, roll, or run where everyone belongs at the start line. This is an ambition, not a date — we need volunteers, a route, and permits before we can announce one. If you would take part or help organise it, we want to hear from you.",
          cta: "Register your interest",
        },
        cookie: {
          tag: "Planned fundraiser",
          title: "Local Business Partner Drive",
          description:
            "A shop-local fundraising week run together with neighbourhood businesses, where a share of sales supports our programs. We have not confirmed any partners yet — if you run a local business and want to be among the first, get in touch.",
          cta: "Partner with us",
        },
      },
    },
    getInvolved: {
      title: "Get Involved",
      metaDescription:
        "Register your interest in volunteering or partnering. Recruitment opens once MCCSS licensing is granted.",
      banner: "Register your interest now — formal recruitment opens once we are licensed.",
      noticeHeading: "We are not recruiting yet",
      noticeBody:
        "We are not accepting volunteer applications, screening volunteers, or confirming partnership agreements until our MCCSS licensing is officially granted. You are very welcome to register your interest now — we will keep your details and contact you when recruitment formally opens.",
      volunteerHeading: "Volunteer With Us",
      volunteerBody:
        "These are the roles we expect to need once we are licensed. Nothing below is open for application yet.",
      roles: [
        "Event crews, once our first events are scheduled",
        "Program companions, once our youth program is licensed",
        "Skills and life-skills mentors",
        "Board and committee volunteers",
      ],
      applyCta: "Register Your Interest",
      donateHeading: "Give the Gift of Belonging",
      donateBody:
        "One-time or monthly — every dollar stays local, funding programs and opportunities.",
      partnerHeading: "Partner With Us",
      partnerBody:
        "Employers, sponsors, and community groups — we would like to hear from you, though no partnership can be confirmed until licensing is granted. Call {phone} or send us a message.",
    },
    donate: {
      title: "Donate",
      metaDescription:
        "Give once or monthly. Every dollar stays local, funding homes, programs, and opportunities.",
      banner:
        "Every dollar stays local, funding homes, programs, and opportunities for people with developmental disabilities.",
      faqHeading: "Giving, Answered",
      faqIntro: "Registered Charity {charity} — accountable, transparent, and local.",
      faqs: [
        {
          question: "Will I get a tax receipt?",
          answer:
            "Yes. As a registered Canadian charity, we issue official donation receipts for gifts of $20 or more — automatically by email for online gifts.",
        },
        {
          question: "Where does my money actually go?",
          answer:
            "Every dollar stays local: employment coaching, youth programs, and community access activities. As a new charity our first published financials will follow our founding year, and we will share them openly.",
        },
        {
          question: "Can I dedicate my gift to someone?",
          answer:
            'Absolutely — choose "Dedicate this gift" during checkout to give in honor or in memory of someone, and we can notify the family if you wish.',
        },
        {
          question: "Is monthly giving better than one-time?",
          answer:
            "Monthly gifts give us predictable funding to plan programs year-round, and you can change or cancel anytime. Both are deeply appreciated.",
        },
      ],
    },
    donateNow: {
      title: "Donate Now",
      metaDescription: "Complete your donation securely.",
      heading: "Complete Your Donation",
      subheading: "Safe, secure, and 100% local impact.",
      orPledge: "Or pledge and pay later",
      back: "Back",
    },
    donateComplete: {
      successTitle: "Thank you — your donation is confirmed",
      successBody:
        "Your gift is on its way to supporting people with developmental disabilities right here in our community. Stripe has emailed you a payment receipt; your charitable tax receipt will follow from us.",
      pendingTitle: "We couldn't confirm this donation",
      pendingBody:
        "Stripe has not reported this payment as complete. If money left your account, please contact us and we will sort it out — do not pay twice.",
      receiptTo: "A payment receipt has been sent to {email}.",
      backHome: "Back to home",
      tryAgain: "Try again",
    },
    contact: {
      title: "Contact",
      metaDescription: "Call us, email us, or send a message.",
      banner: "Questions about services, volunteering, or partnership? We'd love to hear from you.",
      heading: "Let's Connect",
      subheading: "Questions about services, volunteering, or partnership? We'd love to hear from you.",
      call: "Give Us A Call",
      emailUs: "Email Us",
      office: "Our Office",
    },
    whoWeSupport: {
      title: "Who We Support",
      metaDescription:
        "Who our youth residential program is being built for — currently in the licensing stage with MCCSS.",
      banner: "Who our programs are being built for. No placements until licensing is granted.",
      supportsHeading: "Who We Are Building For",
      imageCaption: "Ready to ride — everyone belongs on the trail.",
      intro: "The desire to be in your own home and part of a community is universal.",
      missionBody:
        "At Hurpel Support Services, our mission is to support individuals with complex medical, physical, and/or developmental needs to make this a reality. Our youth residential program is in the licensing stage with MCCSS, so this describes who it is designed for — not people we currently support.",
      sacredHeading: "Preserving What's Sacred",
      sacredBody:
        "This work is founded on our philosophy of “Preserving What's Sacred”: the unwavering belief that every individual deserves a life of meaning, belonging, and opportunity, no matter how complex their needs may be.",
      individualityBody:
        "Our programs are designed to honour each person's individuality and protect their right to choose, shaping supports around their unique goals.",
      commitmentBody:
        "Our commitment is to enable the people we will support to live a good life with dignity, choice, and connection, once we are licensed to do so.",
      pillars: [
        {
          title: "Meaning",
          description: "A life built around each person's own goals, passions, and milestones.",
        },
        {
          title: "Belonging",
          description: "A real home, real friendships, and a valued place in the community.",
        },
        {
          title: "Opportunity",
          description: "The chance to learn, work, play, and grow — whatever the complexity of need.",
        },
      ],
      exploreServices: "See Our Phased Vision",
    },
    impactOfGiving: {
      title: "Impact of Giving",
      metaDescription: "See exactly how your donation changes lives in our community.",
      banner: "Every gift becomes a home, a job, a friendship. See how far your generosity goes.",
      journeyHeading: "The Journey of Your Dollar",
      journeyIntro:
        "Every dollar donated stays local and is tracked from gift to impact. Here's what your generosity makes possible.",
      tiers: [
        {
          amount: "$25",
          title: "An Afternoon of Belonging",
          description:
            "Covers a community recreation outing — swimming, bowling, an art class — where friendships take root.",
        },
        {
          amount: "$50",
          title: "A Week of Job Coaching",
          description:
            "Funds one-on-one employment coaching that turns individual strengths into meaningful, paid work.",
        },
        {
          amount: "$100",
          title: "A Family Workshop Session",
          description:
            "Funds a family-centered workshop session, giving parents and carers practical support and a room full of people who understand.",
        },
        {
          amount: "$250",
          title: "A Month of Youth Programs",
          description:
            "Sponsors a month of family-centered workshops that help children and youth grow, learn, and belong.",
        },
      ],
      whereHeading: "Where the Money Goes",
      whereIntro:
        "As a registered charity we report on every dollar, and we will publish our financials once our first year closes. Transparency isn't a promise — it's a practice.",
      allocations: [
        { pct: "78%", label: "Direct programs & supports" },
        { pct: "14%", label: "Homes & facilities" },
        { pct: "8%", label: "Administration & fundraising" },
      ],
      storyHeading: "One Gift, One Story",
      storyQuote:
        "Because of monthly donors, my son moved into a supported home five minutes from us. He has housemates who are now his best friends. That's what giving does.",
      storyAttribution: "Parent of a person supported",
      ctaHeading: "Ready to Make Your Impact?",
      ctaBody: "Give once or monthly — either way, your whole gift goes to work right here.",
    },
  },
};

export const en = dict;
