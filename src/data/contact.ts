import { contactFaqPreview } from "@/data/policies-faqs";

export const contactPage = {
  hero: {
    eyebrow: "CONTACT US",
    title: "We'd Love to Hear From You",
    description:
      "Have a question about our products, an order, or delivery? We're here to help.",
    action: "Contact Our Team",
    image: "/hero-banner.png",
  },
  contactDetails: {
    phone: "+92 000 0000000",
    phoneHref: "+920000000000",
    email: "support@example.com",
    whatsappNumber: "923704060104",
    whatsappDisplay: "0370 4060104",
    onlineArea: "Lahore | Karachi",
    deliveryNote: "We deliver across Pakistan",
  },
  contactCards: {
    phone: { title: "Phone", detail: "Call our customer care team", action: "Call us" },
    email: { title: "Email", action: "Send an Email", detail: "We’ll reply as soon as we can" },
    whatsapp: { title: "WhatsApp", action: "Chat on WhatsApp", detail: "Message us anytime" },
    online: { title: "Online Service" },
  },
  messageForm: {
    eyebrow: "SEND US A MESSAGE",
    title: "Get In Touch",
    description: "Fill out the form below and we’ll get back to you as soon as possible.",
    fields: {
      fullName: { label: "Full Name", placeholder: "Enter your full name", required: "Please enter your full name." },
      email: { label: "Email Address", placeholder: "Enter your email address", required: "Please enter your email address.", invalid: "Enter a valid email address." },
      phone: { label: "Phone Number", placeholder: "Enter your phone number", required: "Please enter your phone number.", invalid: "Enter a valid phone number." },
      subject: { label: "Subject", placeholder: "Select a subject" },
      message: { label: "Message", placeholder: "Type your message here...", required: "Please enter a message.", tooLong: "Your message must be 3,000 characters or fewer." },
    },
    subjects: [
      "General Inquiry",
      "Product Information",
      "Order Status",
      "Delivery Question",
      "Return or Exchange",
      "Other",
    ],
    submit: "Send Message",
    sending: "Sending...",
    success: "Thank you! We'll get back to you soon.",
    failure: "Sorry, your message could not be sent. Please try again.",
    openWhatsApp: "Open WhatsApp",
    maxMessageLength: 3000,
  },
  infoCards: {
    brand: "Your Beauty, Our Priority",
    image: "/hero-banner.png",
    delivery: {
      title: "Shop Online From Anywhere",
      description:
        "We deliver across Pakistan, including Lahore, Karachi, and other cities.",
    },
    help: {
      title: "Need Help With Your Order?",
      description:
        "For questions about your order, products, shipping, or returns, our support team is here to help.",
      action: "Visit Our FAQs",
    },
  },
  benefits: [
    "100% Authentic Products",
    "Fast and Reliable Delivery",
    "Secure Payments",
    "24/7 Customer Support",
  ],
  faq: {
    eyebrow: "HAVE A QUESTION?",
    title: "Check Our FAQs",
    description: "Find quick answers to common questions.",
    action: "View All FAQs",
    questions: contactFaqPreview,
  },
  formErrors: {
    invalidRequest: "Please check your details and try again.",
    rateLimit: "Too many messages were sent. Please wait a little and try again.",
    honeypot: "Unable to send this message.",
  },
};
