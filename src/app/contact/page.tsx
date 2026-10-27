import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { Icon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Footer, AnnouncementBar, Navbar } from "@/components/site-shell";
import { Newsletter } from "@/components/homepage-sections";
import { contactPage } from "@/data/contact";

const contactMethods = [
  {
    icon: "phone" as const,
    title: contactPage.contactCards.phone.title,
    detail: contactPage.contactDetails.phone,
    href: `tel:${contactPage.contactDetails.phoneHref}`,
    action: contactPage.contactCards.phone.action,
  },
  {
    icon: "mail" as const,
    title: contactPage.contactCards.email.title,
    detail: contactPage.contactDetails.email,
    href: `mailto:${contactPage.contactDetails.email}`,
    action: contactPage.contactCards.email.action,
  },
  {
    icon: "whatsapp" as const,
    title: contactPage.contactCards.whatsapp.title,
    detail: contactPage.contactDetails.whatsappDisplay,
    href: `https://wa.me/${contactPage.contactDetails.whatsappNumber}`,
    action: contactPage.contactCards.whatsapp.action,
  },
  {
    icon: "pin" as const,
    title: contactPage.contactCards.online.title,
    detail: contactPage.contactDetails.onlineArea,
    note: contactPage.contactDetails.deliveryNote,
  },
];

const contactBenefits = [
  { icon: "shield" as const, title: contactPage.benefits[0] },
  { icon: "delivery" as const, title: contactPage.benefits[1] },
  { icon: "payment" as const, title: contactPage.benefits[2] },
  { icon: "headphones" as const, title: contactPage.benefits[3] },
];

export const metadata = {
  title: "Contact Us | Beyond the Beauty",
  description: "Get in touch with Beyond the Beauty for help with products, orders, or delivery.",
};

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="contact-page">
        <PageBanner
          action={{ href: "#contact-message-form", label: contactPage.hero.action }}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
          className="page-banner-contact"
          eyebrow={contactPage.hero.eyebrow}
          subtitle={contactPage.hero.description}
          title={contactPage.hero.title}
        />

        <section aria-label="Contact options" className="home-section-spacing">
          <div className="page-width contact-methods">
            {contactMethods.map((method) => (
              <div className="contact-method" key={method.title}>
                <span className="contact-round-icon"><Icon name={method.icon} /></span>
                <h2>{method.title}</h2>
                <p>{method.detail}</p>
                {method.href ? (
                  <a href={method.href} rel={method.icon === "whatsapp" ? "noreferrer" : undefined} target={method.icon === "whatsapp" ? "_blank" : undefined}>
                    {method.action}
                  </a>
                ) : <small>{method.note}</small>}
              </div>
            ))}
          </div>
        </section>

        <section className="home-section-spacing">
          <div className="page-width contact-main-grid">
            <div className="contact-message-card">
              <p className="eyebrow">{contactPage.messageForm.eyebrow}</p>
              <h2>{contactPage.messageForm.title}</h2>
              <p className="contact-card-intro">{contactPage.messageForm.description}</p>
              <ContactForm />
            </div>
            <aside className="contact-info-column">
              <div className="contact-brand-card">
                <Image alt="" fill sizes="(max-width: 760px) 100vw, 36vw" src={contactPage.infoCards.image} />
                <div aria-hidden="true" />
                <h2>{contactPage.infoCards.brand}</h2>
              </div>
              <div className="contact-info-card">
                <span className="contact-round-icon"><Icon name="delivery" /></span>
                <h2>{contactPage.infoCards.delivery.title}</h2>
                <p>{contactPage.infoCards.delivery.description}</p>
              </div>
              <div className="contact-info-card">
                <span className="contact-round-icon"><Icon name="headphones" /></span>
                <h2>{contactPage.infoCards.help.title}</h2>
                <p>{contactPage.infoCards.help.description}</p>
                <Link className="button button-outline" href="/policies-faqs#faqs">{contactPage.infoCards.help.action}</Link>
              </div>
            </aside>
          </div>
        </section>

        <section aria-label="Our service benefits" className="home-section-spacing contact-benefits">
          <div className="page-width contact-benefit-grid">
            {contactBenefits.map((benefit) => (
              <div className="contact-benefit" key={benefit.title}>
                <Icon name={benefit.icon} />
                <h2>{benefit.title}</h2>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section-spacing">
          <div className="page-width contact-faq">
            <div className="section-heading centered">
              <p className="eyebrow">{contactPage.faq.eyebrow}</p>
              <h2>{contactPage.faq.title}</h2>
              <p>{contactPage.faq.description}</p>
            </div>
            <FAQAccordion items={contactPage.faq.questions} title="" />
            <Link className="button button-outline" href="/policies-faqs#faqs">{contactPage.faq.action}</Link>
          </div>
        </section>

        <div className="home-section-spacing">
          <Newsletter />
        </div>
      </main>
      <Footer />
    </>
  );
}
