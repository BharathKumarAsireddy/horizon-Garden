import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/site/Nav";
import PageBanner from "@/components/site/PageBanner";
import Reveal from "@/components/site/Reveal";
import ProductFeature from "@/components/site/ProductFeature";
import MorePlants from "@/components/site/MorePlants";
import FinalCta from "@/components/site/FinalCta";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Landscape Plants",
  description:
    "Hardy, sun-ready landscape plants picked for South Florida's heat, humidity, and sandy soil.",
};

export default function LandscapePlantsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <PageBanner
        eyebrow="Landscape Plants"
        title="Hardy Plants Built for South Florida"
        description="Picked for beauty and staying power in Palm Beach County's heat, humidity, and sandy soil."
      />

      <div className="mx-auto max-w-[1200px] px-6 pt-16">
        <Reveal>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#336443] transition-opacity hover:opacity-80"
          >
            <ArrowLeft size={16} />
            Back to All Products
          </Link>
        </Reveal>
      </div>

      <ProductFeature
        eyebrow="Why Our Plants"
        title="Chosen for What Actually Survives Here"
        paragraphs={[
          "Every plant in our yard is chosen for one reason: it holds up here. Palm Beach County's heat, humidity, and sandy soil aren't kind to plants that weren't bred for it — so we don't stock what won't last.",
          "Our own crews plant these same varieties on landscaping jobs across the county every week, which means we already know how they perform in full sun, part shade, wet season, and dry season alike.",
        ]}
        image="/products/landscape-plant.jpg"
        imageAlt="Yucca landscape plant in the Horizon Gardens yard"
        highlights={[
          "Bred for heat, humidity & sandy soil",
          "The same stock our own crews install",
          "Sizes for entryways, beds & foundations",
        ]}
      />

      <MorePlants exclude="landscape-plants" />
      <FinalCta />
      <Footer />
    </div>
  );
}
