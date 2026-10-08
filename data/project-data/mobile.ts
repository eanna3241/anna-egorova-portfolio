import type { Project } from "@/types/project";

export const mobileProjects: Project[] = [
  {
    slug: "setka",
    category: "mobile",
    shortTitle: "Setka",
    title:
      "Setka — turning cold networking into meaningful professional connections",
    description:
      "Setka is a professional networking platform by hh.ru. For my graduation project, I redesigned the experience of discovering relevant contacts and starting a conversation.",
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
    sections: [
      {
        title: "Result",
        paragraphs: [
          "I designed a networking experience that helps users understand why a connection matters before reaching out. Instead of another contact search tool, the concept supports a more informed journey: Discover → Understand → Connect.",
        ],
      },
      {
        title: "The solution",
        paragraphs: [
          "The experience combines four key elements:",
          "Users can see specific points of connection, including professional experience, interests, mutual contacts and communication style.",
        ],
        bullets: [
          "AI Match evaluates the relevance of a connection",
          "Match reasons explain why the person was recommended",
          "Cultural profile reveals values and communication preferences",
          "Message suggestions make starting a conversation easier",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "Career platforms help people discover professionals but rarely help them decide whether to connect. Profiles often look similar, recommendations lack explanation, and the first message feels like cold outreach to a stranger.",
        ],
        quote:
          "The challenge was not finding more people — it was making each connection feel relevant.",
      },
      {
        title: "Research insights",
        paragraphs: [
          "I conducted in-depth interviews with job seekers and employers, explored networking behaviours and analysed career platforms. The research revealed that:",
        ],
        bullets: [
          "People need more context before making contact",
          "Unexplained recommendations reduce trust",
          "Values and communication style influence the decision",
          "Writing the first message remains the main barrier",
        ],
      },
      {
        title: "Expected impact",
        paragraphs: [
          "The concept was designed to improve:",
        ],
        bullets: [
          "Conversion to First Message",
          "Reply Rate",
          "Successful Conversation Rate",
          "Retention",
        ],
        quote:
          "Success is not the number of profiles viewed, but the number of meaningful conversations started.",
      },
    ],
  },

  {
    slug: "plata",
    category: "mobile",
    shortTitle: "Plata",
    title:
      "Plata — making card ordering simple and transparent",
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
    sections: [
      {
        title: "Result",
        paragraphs: [
          "I designed an end-to-end card-ordering experience that guides users from choosing and customising a physical card to checkout, delivery tracking and everyday use.",
        ],
      },
      {
        title: "The solution",
        paragraphs: [
          "The experience makes every stage of ordering clear and predictable.",
        ],
        bullets: [
          "Consistent attributes make card options easier to compare",
          "A live preview shows the customised card before ordering",
          "Pricing and delivery details remain visible before confirmation",
          "Order status and estimated delivery time are available after payment",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "Users need to make several connected decisions when ordering a physical card. Unclear differences, pricing or delivery information can create uncertainty and interrupt the process.",
        ],
        quote:
          "The challenge was to turn a complex sequence of decisions into one continuous and predictable experience.",
      },
      {
        title: "Research insights",
        bullets: [
          "Users need clear differences between card options",
          "They want to know exactly how the final card will look",
          "Uncertainty around price and delivery increases hesitation",
          "After ordering, users need confirmation and tracking information",
        ],
      },
      {
        title: "Expected impact",
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
      "Capsule — preserving memories through music",
    description:
      "A music time-capsule service that helps users preserve meaningful life moments and return to them through music.",
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
      "Product Designer — research, UX, UI, prototyping, usability testing, and design system development.",
    sections: [
      {
        title: "Result",
        paragraphs: [
          "I designed a music experience that turns listening history into a personal memory archive. Instead of simply saving tracks, users can preserve why a song mattered and return to that moment over time.",
        ],
      },
      {
        title: "The solution",
        paragraphs: [
          "Users create a music capsule by combining tracks with notes, emotions, photos, and the context of a meaningful event.",
          "Each capsule remains closed until a selected date. When it opens, the user can revisit the memory through music and personal artefacts saved at that moment.",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "Music is closely connected to people, places, and important periods of life. However, streaming services primarily preserve listening history rather than the emotional context behind it.",
          "As collections grow, users may remember the song but lose the story of why it was meaningful.",
        ],
        quote:
          "The challenge was not helping users save more music — it was helping them preserve why that music mattered.",
      },
      {
        title: "Research insights",
        paragraphs: [
          "I conducted in-depth interviews and explored music-listening and playlist creation behaviours. The research revealed that:",
        ],
        bullets: [
          "Music is strongly associated with specific life events",
          "Playlists often act as personal memory archives",
          "The meaning behind a playlist can disappear over time",
          "People value opportunities to revisit meaningful moments from the past",
        ],
      },
      {
        title: "Expected impact",
        paragraphs: [
          "The concept was designed to support:",
        ],
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