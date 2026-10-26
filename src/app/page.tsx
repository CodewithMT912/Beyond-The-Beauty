import {
  AnnouncementBar,
  Footer,
  Navbar,
} from "@/components/site-shell";
import {
  BrandStrip,
  CategoryCards,
  Hero,
  Newsletter,
  OfferBanner,
  ProductSection,
  WhyChooseUs,
} from "@/components/homepage-sections";
import { bestSellers, newArrivals } from "@/data/homepage";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <div className="homepage-section-spacing"><CategoryCards /></div>
        <div className="homepage-section-spacing">
          <ProductSection
            title="Best Sellers"
            subtitle="Loved by many, chosen for you"
            products={bestSellers}
            linkText="View All Best Sellers"
          />
        </div>
        <div className="homepage-section-spacing"><BrandStrip /></div>
        <div className="homepage-section-spacing"><OfferBanner /></div>
        <div className="homepage-section-spacing">
          <ProductSection
            title="New Arrivals"
            subtitle="Be the first to try"
            products={newArrivals}
            linkText="View All New Arrivals"
            isNew
          />
        </div>
        <div className="homepage-section-spacing"><WhyChooseUs /></div>
        <div className="homepage-section-spacing"><Newsletter /></div>
      </main>
      <Footer />
    </>
  );
}
