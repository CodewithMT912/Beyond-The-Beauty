import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Newsletter } from "@/components/homepage-sections";
import { AnnouncementBar, Footer, Navbar } from "@/components/site-shell";
import { aboutPage, type AboutIconName } from "@/data/about";

export const metadata = {
  title: "About Us | Beyond the Beauty",
  description:
    "Discover the story, mission, and beauty philosophy behind Beyond the Beauty.",
};

function AboutIcon({ name }: { name: AboutIconName }) {
  if (name === "arrow") return <Icon name="arrow" />;
  if (name === "heart" || name === "eye" || name === "shield" || name === "delivery" || name === "payment") {
    return <Icon name={name} />;
  }
  if (name === "support") return <Icon name="headphones" />;

  const paths = {
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="m12 12 7-7m-3 0h3v3" /></>,
    diamond: <><path d="M6 4h12l4 6-10 11L2 10l4-6Z" /><path d="m2 10 20 0M6 4l4 6 2 11 2-11 4-6" /></>,
    sparkle: <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></>,
  };
  return <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">{paths[name]}</svg>;
}

function AboutPhoto({
  className,
  imagePath,
  alt,
}: {
  className: string;
  imagePath: string;
  alt: string;
}) {
  const available = existsSync(join(process.cwd(), "public", imagePath.replace(/^\//, "")));

  return (
    <div className={`about-photo ${className}`}>
      {available ? (
        <Image alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" src={imagePath} />
      ) : (
        <div aria-label={`${alt}. ${aboutPage.imagePlaceholder} ${imagePath}`} className="about-photo-placeholder" role="img">
          <span>{aboutPage.imagePlaceholder}</span>
          <strong>{imagePath}</strong>
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="about-page">
        <PageBanner
          breadcrumbs={aboutPage.hero.breadcrumbs}
          className="page-banner-about"
          description={aboutPage.hero.description}
          eyebrow={aboutPage.hero.eyebrow}
          subtitle={aboutPage.hero.tagline}
          title={aboutPage.hero.title}
        />

        <section className="about-story-section home-section-spacing">
          <div className="page-width about-story-layout">
            <div className="about-photo about-story-photo">
              <Image
                alt="Gold cream jar, a mirror, flowers, and a makeup brush"
                className="about-story-image"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 56vw"
                src={aboutPage.images.story}
              />
            </div>
            <article className="about-story-copy">
              <p className="eyebrow about-dash-label">{aboutPage.story.eyebrow}</p>
              <h2>{aboutPage.story.title}</h2>
              {aboutPage.story.paragraphs.map((paragraph) => (
                <p className="about-body-copy" key={paragraph}>{paragraph}</p>
              ))}
            </article>
          </div>
        </section>

        <section aria-label="Our mission and vision" className="about-mission-section">
          <div className="page-width about-mission-grid">
            {aboutPage.missionVision.map((item) => (
              <article className="about-mission-card" key={item.title}>
                <span className="about-mission-icon"><AboutIcon name={item.icon} /></span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="about-philosophy-title" className="about-philosophy home-section-spacing">
          <div className="page-width">
            <header className="about-section-heading">
              <p className="eyebrow about-dash-label">{aboutPage.philosophy.eyebrow}</p>
              <h2 id="about-philosophy-title">{aboutPage.philosophy.title}</h2>
            </header>
            <div className="about-philosophy-grid">
              {aboutPage.philosophy.items.map((item) => (
                <article className="about-philosophy-item" key={item.title}>
                  <span className="about-philosophy-icon"><AboutIcon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-trust-band">
          <div className="page-width about-trust-inner">
            <div className="about-trust-copy">
              <p className="eyebrow about-dash-label">{aboutPage.whyChooseUs.eyebrow}</p>
              <h2>{aboutPage.whyChooseUs.title}</h2>
              <p>{aboutPage.whyChooseUs.description}</p>
            </div>
            <div className="about-trust-grid">
              {aboutPage.whyChooseUs.items.map((item) => (
                <article className="about-trust-item" key={item.title}>
                  <span className="about-trust-icon"><AboutIcon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-closing-banner">
          <div className="page-width about-closing-inner">
            <div className="about-closing-copy">
              <p className="eyebrow about-dash-label">{aboutPage.closing.eyebrow}</p>
              <h2>{aboutPage.closing.title}</h2>
              <p>{aboutPage.closing.description}</p>
              <Link className="button button-gold" href={aboutPage.closing.href}>
                {aboutPage.closing.action}<AboutIcon name="arrow" />
              </Link>
            </div>
            <AboutPhoto
              alt="Makeup palette, lipstick, and a cream jar on a gold tray"
              className="about-closing-photo"
              imagePath={aboutPage.images.banner}
            />
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
