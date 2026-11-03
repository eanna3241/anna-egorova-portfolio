import type { Project } from "@/types/project";

export const mobileProjects: Project[] = [
  {
    slug: "setka",
    category: "mobile",

    shortTitle: "Setka",

    title:
      "Turning cold networking into meaningful professional connections",

    description:
      "Setka is a professional networking platform by hh.ru. For my graduation project, I redesigned how users discover relevant contacts, understand why they match and start the first conversation.",

    badge:
      "/assets/images/home/logotype_badge_setka.png",

    preview:
      "/assets/images/home/hero-setka.png",

    cover:
      "/assets/images/projects/setka/hero-setka.png",

    tags: [
      "UX Research",
      "JTBD",
      "User Flow",
      "Information Architecture",
      "Wireframes",
      "UI Design",
      "Usability",
      "Motion",
    ],

    role:
      "Product Designer — research, UX, UI, prototyping, usability testing and product logic.",

    meta: {
      role: "Product Designer",
      status: "Graduation project",
      year: "2026",
      type: "Mobile · Career Tech",
      scope: "Research · UX · UI · Testing",
      team: "Individual project",
    },

    overview: {
      problem:
        "Career platforms help users discover professionals, but rarely provide enough context to decide whether starting a conversation is worthwhile.",

      solution:
        "AI Match, transparent match reasons, a cultural profile and first-message suggestions make every recommendation easier to understand and act on.",

      result:
        "A complete networking journey that helps users move from discovering a contact to starting a more informed and intentional conversation.",
    },

    impact: [
      {
        value: "16",
        label: "Usability test participants",
      },
      {
        value: "12",
        label: "Participants completed the full scenario",
      },
      {
        value: "255.58 sec",
        label: "Average completion time",
      },
      {
        value: "181.92 sec",
        label: "Median completion time",
      },
    ],

    learning:
      "Better networking does not start with showing users more people. It starts with giving them enough context to make a confident decision.",

    sections: [
      {
        eyebrow: "The challenge",

        title:
          "The problem wasn’t finding more people — it was understanding why they mattered",

        paragraphs: [
          "Users could already discover potentially relevant professionals. The difficult part was deciding whether a person was worth contacting.",

          "Profiles often looked similar, recommendations lacked explanation and the first message felt like cold outreach to a stranger.",
        ],
      },

      {
        eyebrow: "Research insight",

        title:
          "Recommendations without context did not feel trustworthy",

        paragraphs: [
          "I conducted in-depth interviews with job seekers and employers, explored professional networking behaviours and analysed career platforms.",
        ],

        bullets: [
          "People needed more context before making contact",
          "Unexplained recommendations reduced trust",
          "Values and communication style influenced the decision",
          "Writing the first message remained the main barrier",
        ],
      },

      {
        eyebrow: "Design decision",

        title:
          "Making every recommendation easier to understand",

        paragraphs: [
          "Instead of showing users more profiles, I focused on improving the quality of each recommendation.",

          "AI Match evaluates the relevance of a connection while match reasons reveal specific points of overlap, including professional experience, interests, mutual contacts and communication style.",
        ],
      },

      {
        eyebrow: "Communication fit",

        title:
          "Professional experience was not the only signal that mattered",

        paragraphs: [
          "Research showed that users also wanted to understand what communicating with a person might feel like.",

          "The cultural profile adds context about values, working style and communication preferences before the user decides to connect.",
        ],
      },

      {
        eyebrow: "First interaction",

        title:
          "Helping users overcome the hardest step — writing the first message",

        paragraphs: [
          "Even after finding a relevant contact, users often did not know how to begin the conversation.",

          "Message suggestions use the known points of connection to provide a natural starting point without replacing the user’s own voice.",
        ],
      },

      {
        eyebrow: "Usability testing",

        title:
          "Testing the complete journey from recommendation to conversation",

        paragraphs: [
          "I tested the end-to-end scenario with 16 participants. The task was to find a suitable, non-toxic manager using AI recommendations and start a conversation.",

          "Twelve participants completed the complete scenario. The average completion time was 255.58 seconds and the median was 181.92 seconds.",
        ],
      },

      {
        eyebrow: "Expected product impact",

        title:
          "Success means meaningful conversations, not profiles viewed",

        paragraphs: [
          "Because this was a graduation concept rather than a released product, the business effect is presented as expected impact rather than measured results.",
        ],

        bullets: [
          "Conversion to First Message",
          "Reply Rate",
          "Successful Conversation Rate",
          "Retention",
        ],

        quote:
          "The goal is not to maximise the number of contacts viewed, but to increase the number of meaningful professional conversations started.",
      },
    ],
  },

  {
    slug: "plata",
    category: "mobile",

    shortTitle: "Plata",

    title:
      "Making card ordering simple and transparent",

    description:
      "A fintech product design challenge focused on creating a clear and personal card-ordering experience — from comparison and customisation to checkout and delivery tracking.",

    badge:
      "/assets/images/home/logotype_badge_plata.png",

    preview:
      "/assets/images/projects/plata/hero-plata.png",

    cover:
      "/assets/images/projects/plata/hero-plata.png",

    tags: [
      "UX Research",
      "User Flow",
      "Information Architecture",
      "UX Writing",
      "UI Design",
      "Prototyping",
    ],

    role:
      "Product Designer — research, user flow, UX, UI, prototyping and product logic.",

    meta: {
      role: "Product Designer",
      status: "Design challenge",
      type: "Mobile · Fintech",
      scope: "UX · UI · Prototyping",
      team: "Individual project",
    },

    overview: {
      problem:
        "Ordering a physical card requires several connected decisions. Unclear differences, pricing or delivery details can create uncertainty and interrupt the process.",

      solution:
        "A guided flow combines card comparison, live customisation, transparent pricing, checkout and delivery tracking in one continuous journey.",

      result:
        "An end-to-end card-ordering experience that makes every stage predictable — from choosing a card to receiving and using it.",
    },

    learning:
      "A financial flow feels simpler when every decision has a visible consequence and users always understand what will happen next.",

    sections: [
      {
        eyebrow: "The challenge",

        title:
          "A simple card order contains several connected decisions",

        paragraphs: [
          "Before completing an order, users need to compare card options, understand their differences, choose a design, confirm the price and evaluate delivery conditions.",

          "When this information is fragmented, even a relatively short flow can feel uncertain.",
        ],
      },

      {
        eyebrow: "UX principle",

        title:
          "Each step should answer the user’s next question",

        bullets: [
          "What is the difference between these cards?",
          "What will my customised card look like?",
          "How much will I pay?",
          "When will the card arrive?",
          "Where can I see the current order status?",
        ],
      },

      {
        eyebrow: "Card comparison",

        title:
          "Consistent attributes made card options easier to compare",

        paragraphs: [
          "I organised card information around the same set of attributes so users could compare options without repeatedly interpreting different content structures.",
        ],
      },

      {
        eyebrow: "Personalisation",

        title:
          "A live preview connected customisation with the final result",

        paragraphs: [
          "The card preview updates during customisation, allowing users to understand what they are ordering before they move to checkout.",
        ],
      },

      {
        eyebrow: "Transparency",

        title:
          "Price and delivery information stayed visible before confirmation",

        paragraphs: [
          "Important conditions remain available at the moment of decision instead of appearing only at the final checkout step.",
        ],
      },

      {
        eyebrow: "After checkout",

        title:
          "The experience continued after the order was placed",

        paragraphs: [
          "Confirmation, order status and estimated delivery time give users a clear sense of progress after payment.",
        ],
      },

      {
        eyebrow: "Expected product impact",

        title:
          "Reducing uncertainty can improve completion and trust",

        bullets: [
          "Higher conversion to completed card orders",
          "Lower checkout abandonment",
          "Fewer questions about pricing and delivery",
          "Stronger engagement through personalisation",
        ],
      },
    ],
  },

  {
    slug: "capsule",
    category: "mobile",

    shortTitle: "Capsule",

    title:
      "Preserving meaningful memories through music",

    description:
      "A music time-capsule service that helps users preserve meaningful life moments and return to them through music, emotions and personal artefacts.",

    badge:
      "/assets/images/home/logotype_badge_capsule.png",

    preview:
      "/assets/images/projects/capsule/hero-capsule.png",

    cover:
      "/assets/images/projects/capsule/hero-capsule.png",

    tags: [
      "UX Research",
      "User Interviews",
      "User Flow",
      "Information Architecture",
      "Wireframes",
      "UI Design",
      "Design System",
      "Usability",
    ],

    role:
      "Product Designer — research, UX, UI, prototyping, usability testing and design system development.",

    meta: {
      role: "Product Designer",
      status: "Concept project",
      type: "Mobile · Music",
      scope: "Research · UX · UI",
      team: "Individual project",
    },

    overview: {
      problem:
        "Streaming services remember what people listened to, but rarely preserve why a song was meaningful or which life moment it belonged to.",

      solution:
        "Users combine music with emotions, notes, photos and event context, then select a future date when the capsule can be opened again.",

      result:
        "A music experience that turns listening history into a personal memory archive users can return to over time.",
    },

    learning:
      "The long-term value of a music service can come not only from discovering new content, but also from preserving the personal meaning behind it.",

    sections: [
      {
        eyebrow: "The opportunity",

        title:
          "Music already works as a personal memory archive",

        paragraphs: [
          "Certain tracks can instantly bring back people, places, events and specific periods of life.",

          "People already use playlists to preserve these associations, but the meaning behind a playlist can gradually disappear.",
        ],
      },

      {
        eyebrow: "Research insight",

        title:
          "Users remembered the music but often lost its original context",

        paragraphs: [
          "I conducted in-depth interviews and explored music-listening and playlist-creation behaviours.",
        ],

        bullets: [
          "Music was strongly associated with specific life events",
          "Playlists often acted as personal memory archives",
          "The context behind a playlist could disappear over time",
          "People valued opportunities to revisit meaningful moments",
        ],
      },

      {
        eyebrow: "Product concept",

        title:
          "Turning a playlist into a time capsule",

        paragraphs: [
          "Users create a capsule by combining tracks with notes, emotions, photographs and the context of a meaningful event.",

          "This transforms a collection of music into a richer record of a specific moment.",
        ],
      },

      {
        eyebrow: "Time mechanic",

        title:
          "Closing the capsule gives the memory a future moment of return",

        paragraphs: [
          "The user selects a date when the capsule can be opened again.",

          "When that date arrives, the service brings back the music and personal artefacts saved at the moment of creation.",
        ],
      },

      {
        eyebrow: "Emotional experience",

        title:
          "The product was designed for reflection, not only consumption",

        paragraphs: [
          "The interface gives space to the memory itself instead of treating music as an endless stream of content.",

          "Visual hierarchy, colour and motion support a slower and more personal experience.",
        ],
      },

      {
        eyebrow: "Expected product impact",

        title:
          "Accumulated memories can create long-term product value",

        bullets: [
          "Stronger emotional attachment to the service",
          "Higher engagement and return frequency",
          "Deeper personalisation",
          "Long-term value through accumulated memories",
        ],

        quote:
          "The value of a music collection is not only in what users listened to, but in the moments those songs help them remember.",
      },
    ],
  },
];