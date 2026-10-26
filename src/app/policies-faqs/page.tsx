import Link from "next/link";
import { AnnouncementBar, Footer, Navbar } from "@/components/site-shell";
import { Newsletter } from "@/components/homepage-sections";
import { Icon } from "@/components/icons";
import {
  PoliciesFAQBrowser,
  PolicySectionNav,
} from "@/components/policies-faqs-interactive";
import { contactPage } from "@/data/contact";
import { policiesFaqData } from "@/data/policies-faqs";

export const metadata = {
  title: "Policies & FAQs | Beyond the Beauty",
  description: "Find answers to common questions and review our store policies.",
};

const policySections = [
  { id: "shipping", policy: policiesFaqData.policies.shipping },
  { id: "returns", policy: policiesFaqData.policies.returns },
  { id: "privacy", policy: policiesFaqData.policies.privacy },
  { id: "terms", policy: policiesFaqData.policies.terms },
];

export default function PoliciesFAQsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="policies-page">
        <header className="policies-hero">
          <div className="page-width">
            <p className="eyebrow">HERE TO HELP</p>
            <h1>Policies &amp; FAQs</h1>
            <p>Helpful answers and clear information for a confident shopping experience.</p>
            <nav aria-label="Breadcrumb" className="policies-breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Policies &amp; FAQs</span>
            </nav>
          </div>
        </header>

        <div className="home-section-spacing policies-layout page-width">
          <PolicySectionNav />
          <div className="policies-content">
            <section className="policy-content-section" id="faqs">
              <p className="eyebrow">A LITTLE CLARITY</p>
              <h2>Frequently Asked Questions</h2>
              <p className="policy-section-intro">Browse topics or search to find an answer.</p>
              <PoliciesFAQBrowser
                categories={policiesFaqData.faqs.categories}
                questions={policiesFaqData.faqs.questions}
              />
            </section>

            {policySections.map(({ id, policy }) => (
              <section className="policy-content-section policy-copy-section" id={id} key={id}>
                <p className="eyebrow">BEYOND THE BEAUTY</p>
                <h2>{policy.title}</h2>
                <p className="policy-updated">Last updated: {policy.updated}</p>
                {policy.sections.map((section) => (
                  <div className="policy-copy-block" key={section.heading}>
                    <h3>{section.heading}</h3>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>

        <section className="home-section-spacing">
          <div className="page-width policies-contact-banner">
            <div>
              <p className="eyebrow">WE’RE HERE FOR YOU</p>
              <h2>Still have questions?</h2>
              <p>Our team is happy to help with products, orders, or delivery.</p>
            </div>
            <div className="policies-contact-actions">
              <Link className="button button-gold" href="/contact">Contact Us</Link>
              <a
                className="button button-outline"
                href={`https://wa.me/${contactPage.contactDetails.whatsappNumber}`}
                rel="noreferrer"
                target="_blank"
              >
                <Icon name="whatsapp" />
                Chat on WhatsApp
              </a>
            </div>
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
