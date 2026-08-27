import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import PageBanner from "@/components/site/PageBanner";
import ProductCatalog from "@/components/site/ProductCatalog";
import QualityPromise from "@/components/site/QualityPromise";
import MulchVarieties from "@/components/site/MulchVarieties";
import HowItWorks from "@/components/site/HowItWorks";
import FinalCta from "@/components/site/FinalCta";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Landscape plants, flowers, topiaries, mulch, topsoil, aggregate, and sand — pro-grade materials stocked at our Loxahatchee Groves yard.",
};

export default function ProductsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <PageBanner
        eyebrow="Our Products"
        title="Everything for your next project, all in one yard"
        description="Pro-grade plants, mulch, and bulk materials — stocked the same way our own crew uses them on the job."
      />
      <ProductCatalog />
      <QualityPromise />
      <MulchVarieties />
      <HowItWorks />
      <FinalCta />
      <Footer />
    </div>
  );
}
