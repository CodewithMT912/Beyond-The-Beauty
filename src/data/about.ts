export type AboutIconName =
  | "target"
  | "eye"
  | "heart"
  | "diamond"
  | "shield"
  | "delivery"
  | "payment"
  | "support"
  | "sparkle"
  | "arrow";

export const aboutPage = {
  images: {
    story: "/about-story.png",
    banner: "/about-banner.png",
  },
  hero: {
    eyebrow: "ABOUT US",
    title: "The Story Behind Beyond the Beauty",
    tagline: "Beauty is more than what you see. It's how you feel.",
    description:
      "We believe everyone deserves access to beauty products that bring out their natural glow and confidence. We’re here to be a partner in your beauty journey.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About Us" },
    ],
  },
  story: {
    eyebrow: "OUR STORY",
    title: "Every Beauty Story Begins Somewhere.",
    paragraphs: [
      "We believe finding the right beauty products should feel simple. Beyond the Beauty brings a thoughtful range together in one place, so it’s easier to explore what suits you.",
      "With quality, trust, reliable information, and a smooth shopping experience in mind, we’re here to help you make choices that feel right for your routine.",
    ],
  },
  missionVision: [
    {
      icon: "target" as const,
      title: "Our Mission",
      description:
        "To help our customers discover the right beauty products for their unique needs, while providing a seamless, enjoyable, and trustworthy shopping experience.",
    },
    {
      icon: "eye" as const,
      title: "Our Vision",
      description:
        "To become a trusted beauty destination, known for quality products, helpful service, and lasting relationships with our customers.",
    },
  ],
  philosophy: {
    eyebrow: "OUR BEAUTY PHILOSOPHY",
    title: "More Than Just Products, It's a Lifestyle.",
    items: [
      {
        icon: "heart" as const,
        title: "Beauty for Everyone",
        description:
          "Beauty has no limits. We make it easier to explore products for different styles, needs, and routines.",
      },
      {
        icon: "diamond" as const,
        title: "Quality Matters",
        description:
          "We value quality and helpful product information, so you can shop with more confidence.",
      },
      {
        icon: "sparkle" as const,
        title: "Confidence Through Beauty",
        description:
          "The right products can be part of feeling good, expressing yourself, and enjoying your routine.",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "WHY CHOOSE BEYOND THE BEAUTY?",
    title: "Your Trust Means Everything",
    description:
      "We’re committed to providing a safe, reliable, and convenient shopping experience, because you deserve nothing but the best.",
    items: [
      {
        icon: "shield" as const,
        title: "Authentic Products",
        subtitle: "Carefully selected beauty products",
      },
      {
        icon: "delivery" as const,
        title: "Reliable Delivery",
        subtitle: "Delivery to supported areas",
      },
      {
        icon: "payment" as const,
        title: "Secure Payments",
        subtitle: "Convenient payment options",
      },
      {
        icon: "support" as const,
        title: "Customer Support",
        subtitle: "Here to help with your questions",
      },
    ],
  },
  closing: {
    eyebrow: "DISCOVER OUR COLLECTION",
    title: "Your Next Beauty Favorite Awaits.",
    description: "Explore our complete range of skincare, makeup, hair care and more.",
    action: "EXPLORE OUR COLLECTION",
    href: "/shop",
  },
  imagePlaceholder: "Image placeholder — add this file to the public folder:",
} as const;
