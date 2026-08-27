import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import PageBanner from "@/components/site/PageBanner";
import AboutStory from "@/components/site/AboutStory";
import Stats from "@/components/site/Stats";
import WhyUs from "@/components/site/WhyUs";
import ServiceAreas from "@/components/site/ServiceAreas";
import Testimonials from "@/components/site/Testimonials";
import FinalCta from "@/components/site/FinalCta";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Horizon Gardens grew out of a 20+ year Palm Beach County landscape company. Meet the team behind the yard in Loxahatchee Groves, FL.",
};

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <PageBanner
        eyebrow="About Us"
        title="Built by landscapers, open to everyone"
        description="20+ years working the ground in Palm Beach County — now stocking the yard we always wished existed."
      />
      <AboutStory />
      <Stats />
      <WhyUs />
      <ServiceAreas />
      <Testimonials />
      <FinalCta />
      <Footer />
    </div>
  );
}
