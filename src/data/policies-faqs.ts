// Policy copy is a draft. Review and replace all placeholders before publishing.
export const policiesFaqData = {
  faqs: {
    categories: ["All", "Ordering", "Delivery", "Payments", "Returns", "Products"],
    questions: [
      {
        question: "How do I place an order?",
        answer:
          "Browse the collection, add your favorites to your cart, then follow the checkout steps to place your order.",
        category: "Ordering",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery times vary by location. We will share an estimated delivery window when your order is confirmed.",
        category: "Delivery",
      },
      {
        question: "Which payment methods can I use?",
        answer:
          "Available payment options will be shown at checkout before you confirm your order.",
        category: "Payments",
      },
      {
        question: "Can I return or exchange a product?",
        answer:
          "Return and exchange eligibility depends on the product and its condition. Please contact customer care for help with your order.",
        category: "Returns",
      },
      {
        question: "Are your beauty products authentic?",
        answer:
          "We aim to offer genuine products sourced from trusted suppliers. Product sourcing details can be added here.",
        category: "Products",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order is dispatched, use the tracking details shared with your order confirmation to follow its progress.",
        category: "Ordering",
      },
      {
        question: "How can I get more information about a product?",
        answer:
          "Send us a message with the product name and your question, and our team will help with the information available.",
        category: "Products",
      },
      {
        question: "Do you deliver to my city?",
        answer:
          "We deliver across Pakistan. Contact us with your city to confirm delivery availability for your location.",
        category: "Delivery",
      },
      {
        question: "How can I check my order status?",
        answer:
          "Contact us with your order details and we’ll help you check its latest status.",
        category: "Ordering",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "If a refund is approved, its timing and method will be confirmed by our support team. Add the final processing timeframe here.",
        category: "Returns",
      },
    ],
  },
  policies: {
    shipping: {
      title: "Shipping Policy",
      updated: "26 October 2026",
      sections: [
        {
          heading: "Delivery areas",
          paragraphs: [
            "We currently arrange delivery to the locations available at checkout. Contact [business name and email] to confirm service for your area.",
          ],
        },
        {
          heading: "Processing and delivery times",
          paragraphs: [
            "Orders are prepared within [X business days]. Estimated delivery takes [X days] after dispatch and may vary by destination or other circumstances.",
            "We will share available order and delivery updates using the contact details provided at checkout.",
          ],
        },
        {
          heading: "Delivery charges",
          paragraphs: [
            "Applicable delivery charges are shown at checkout before you place an order. Any free-delivery threshold or special delivery terms will be displayed there.",
          ],
        },
        {
          heading: "Delivery support",
          paragraphs: [
            "For a delivery question, contact [business name and email] and include your order number and delivery details.",
          ],
        },
      ],
    },
    returns: {
      title: "Return & Refund Policy",
      updated: "26 October 2026",
      sections: [
        {
          heading: "Requesting a return",
          paragraphs: [
            "Contact [business name and email] within [X days] of receiving your order to ask about a return or exchange. Include your order number and the reason for your request.",
          ],
        },
        {
          heading: "Eligibility and item condition",
          paragraphs: [
            "Items must meet the eligibility requirements confirmed by our support team. For hygiene and safety, opened or used beauty products may not be eligible unless they arrived damaged or incorrect, subject to applicable requirements.",
            "Please wait for return instructions before sending an item back. Do not send products to an address that has not been confirmed by our team.",
          ],
        },
        {
          heading: "Damaged, incorrect, or missing items",
          paragraphs: [
            "Tell us as soon as possible if an order arrives damaged, incorrect, or incomplete. Share your order number and clear photos where relevant so we can review the issue.",
          ],
        },
        {
          heading: "Refunds",
          paragraphs: [
            "After an approved return is received and reviewed, we will confirm the outcome and any applicable refund method. Allow [X days] for processing after approval. Any non-refundable charges or exceptions will be explained before an order is placed.",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      updated: "26 October 2026",
      sections: [
        {
          heading: "Information we collect",
          paragraphs: [
            "When you shop or contact us, we may collect your name, email address, phone number, delivery address, order details, and information you choose to provide in a message.",
          ],
        },
        {
          heading: "How we use information",
          paragraphs: [
            "We use this information to process and deliver orders, provide customer support, respond to questions, manage returns, and maintain or improve our services.",
          ],
        },
        {
          heading: "Sharing and protection",
          paragraphs: [
            "We share information only as needed to operate the service, such as with delivery or payment providers involved in an order, or where required by law. We use reasonable safeguards designed to protect personal information, but no method of transmission or storage can be guaranteed completely secure.",
          ],
        },
        {
          heading: "Your choices and questions",
          paragraphs: [
            "You may contact us to ask about your information or request a correction, subject to applicable requirements. For privacy questions, contact [business name and email].",
          ],
        },
      ],
    },
    terms: {
      title: "Terms & Conditions",
      updated: "26 October 2026",
      sections: [
        {
          heading: "Using this website",
          paragraphs: [
            "By using this website, you agree to use it lawfully and provide accurate information when placing an order or contacting us.",
          ],
        },
        {
          heading: "Products, pricing, and availability",
          paragraphs: [
            "Product descriptions, prices, and availability may be updated. Any applicable taxes, delivery charges, and final order total will be shown before you confirm your purchase.",
          ],
        },
        {
          heading: "Orders and payments",
          paragraphs: [
            "An order request is subject to confirmation and product availability. Available payment methods and any order conditions will be displayed during checkout.",
          ],
        },
        {
          heading: "Liability and changes",
          paragraphs: [
            "To the extent permitted by applicable law, [business name] is not responsible for indirect losses resulting from use of this website. Nothing in these terms limits rights that cannot legally be limited.",
            "We may update these terms from time to time. The current version and its update date will be published on this page.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "For questions about these terms, contact [business name and email].",
          ],
        },
      ],
    },
  },
};

export const contactFaqPreview = [
  policiesFaqData.faqs.questions[0],
  policiesFaqData.faqs.questions[6],
  policiesFaqData.faqs.questions[8],
  policiesFaqData.faqs.questions[7],
];

