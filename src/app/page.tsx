import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import HowItWorks from "@/components/site/HowItWorks";
import AboutTeaser from "@/components/site/AboutTeaser";
import ProductsTeaser from "@/components/site/ProductsTeaser";
import GalleryTeaser from "@/components/site/GalleryTeaser";
import Faq from "@/components/site/Faq";
import ContactSection from "@/components/site/ContactSection";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <Stats />
      <HowItWorks />
      <AboutTeaser />
      <ProductsTeaser />
      <GalleryTeaser />
      <Faq />
      <VisitUs />
      <ContactSection />
      <Footer />
    </div>
  );
}
