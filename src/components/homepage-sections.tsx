import Image from "next/image";
import { brands, categories, faqs, type Product } from "@/data/homepage";
import { Icon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { FAQAccordion } from "@/components/faq-accordion";

const heroCopy = {
  eyebrow: "A WORLD OF BEAUTY, THOUGHTFULLY CHOSEN",
  title: "Beyond the Beauty",
  subtitle: "Discover the Beauty Within",
  description:
    "Explore premium skincare, makeup, hair care, body care, and fragrances from the brands you trust. Every product is carefully chosen, so you can shop with confidence and glow every day.",
  trustPoints: [
    "100% Authentic Products",
    "Fast Delivery Across Pakistan",
    "Secure Payments",
  ],
  buttons: {
    shop: "Shop Now",
    collection: "Explore Collection",
  },
};

export function Hero() {
  return (
    <section className="hero">
      <Image
        alt=""
        className="hero-background-image object-cover"
        fill
        priority
        sizes="100vw"
        src="/hero-banner.png"
      />
      <div aria-hidden="true" className="hero-overlay" />
      <div className="hero-content page-width">
        <p className="hero-eyebrow">{heroCopy.eyebrow}</p>
        <h1>{heroCopy.title}</h1>
        <h2 className="hero-subheading">{heroCopy.subtitle}</h2>
        <p className="hero-copy">{heroCopy.description}</p>
        <ul className="hero-trust-list">
          {heroCopy.trustPoints.map((point) => (
            <li key={point}>
              <svg aria-hidden="true" viewBox="0 0 20 20">
                <path d="m4 10 4 4 8-8" />
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="hero-actions">
          <a className="button button-gold" href="/shop">
            {heroCopy.buttons.shop}
          </a>
          <a className="button button-outline" href="/categories">
            {heroCopy.buttons.collection}
          </a>
        </div>
      </div>
    </section>
  );
}

export function CategoryCards() {
  return (
    <section className="section page-width categories-section" id="categories">
      <div className="section-heading centered">
        <h2>Shop by Category</h2>
        <p>Find your perfect beauty essentials</p>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <a className="category-card" href="/categories" key={category.name}>
            <div
              className="category-image"
              role="img"
              aria-label={`${category.name} products`}
              style={{ backgroundImage: `url("${category.image}")` }}
            />
            <span>{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function ProductSection({
  title,
  subtitle,
  products,
  linkText,
  isNew = false,
}: {
  title: string;
  subtitle: string;
  products: Product[];
  linkText: string;
  isNew?: boolean;
}) {
  return (
    <section className="section page-width product-section">
      <div className="section-heading section-heading-row">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <a className="text-link" href={isNew ? "/new-arrivals" : "/best-sellers"}>
          {linkText} <Icon name="arrow" />
        </a>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard isNew={isNew} key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}

export function BrandStrip() {
  return (
    <section className="section page-width brands-section" id="brands">
      <div className="section-heading section-heading-row">
        <div>
          <h2>Featured Brands</h2>
          <p>Your favorite brands, all in one place</p>
        </div>
        <a className="text-link" href="/brands">
          View All Brands <Icon name="arrow" />
        </a>
      </div>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <a className={`brand-name brand-${index}`} href="/brands" key={brand}>
            {brand}
          </a>
        ))}
      </div>
    </section>
  );
}

export function OfferBanner() {
  return (
    <section className="offer-banner page-width">
      <div className="offer-content">
        <p className="eyebrow">A little something special</p>
        <h2>Your Beauty Favorites,<br />Now on Offer</h2>
        <p>Up to 50% off on selected products. Limited time only!</p>
        <a className="button button-gold" href="/offers">Explore Offers</a>
      </div>
      <div className="offer-seal"><span>Up to</span><strong>50%</strong><span>OFF</span></div>
    </section>
  );
}

const benefits = [
  { icon: "shield" as const, title: "100% Authentic Products", detail: "Genuine beauty, guaranteed" },
  { icon: "payment" as const, title: "Secure Payments", detail: "Safe & easy checkout" },
  { icon: "delivery" as const, title: "Fast & Reliable Delivery", detail: "Beauty, delivered with care" },
  { icon: "return" as const, title: "Easy Returns", detail: "Hassle-free peace of mind" },
];

export function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="page-width">
        <div className="section-heading centered">
          <h2>Why Choose Beyond the Beauty?</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <div className="benefit" key={benefit.title}>
              <Icon name={benefit.icon} />
              <h3>{benefit.title}</h3>
              <p>{benefit.detail}</p>
            </div>
          ))}
        </div>
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="newsletter">
      <Image
        alt=""
        className="newsletter-background"
        fill
        sizes="100vw"
        src="/newsletter-banner.png"
      />
      <div aria-hidden="true" className="newsletter-overlay" />
      <div className="newsletter-content">
        <p className="eyebrow">A note from us to you</p>
        <h2>A Little Beauty in Your Inbox</h2>
        <p>Subscribe for beauty inspiration, new arrivals, and a little treat.</p>
        <form action="#" className="newsletter-form">
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input
            autoComplete="email"
            id="newsletter-email"
            name="email"
            placeholder="Enter your email address"
            required
            type="email"
          />
          <button className="button button-gold" type="submit">Subscribe</button>
        </form>
        <p className="newsletter-note">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
