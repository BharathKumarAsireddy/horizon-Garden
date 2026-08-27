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
  title: "Topiaries",
  description:
    "Shaped and sculpted topiaries that add instant character to entryways, patios, and gardens.",
};

export default function TopiariesPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <PageBanner
        eyebrow="Topiaries"
        title="Shaped Statement Pieces"
        description="Sculpted topiaries that add instant character to entryways, patios, and gardens."
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
        eyebrow="Why Our Topiaries"
        title="Instant Character, No Guesswork"
        paragraphs={[
          "A well-placed topiary does more for curb appeal than almost anything else in the yard — clean, sculpted shapes that frame an entryway or anchor a patio.",
          "We carry shaped ficus and other classic topiary varieties, pruned and ready to drop straight into your landscape.",
        ]}
        image="https://horizongardensinc.com/wp-content/uploads/2026/04/plant-variegated-ficus.webp"
        imageAlt="Variegated ficus topiary"
        highlights={[
          "Pruned & shaped, ready to plant",
          "Ideal for entryways & patios",
          "Low-maintenance once established",
        ]}
        imageFirst
      />

      <MorePlants exclude="topiaries" />
      <FinalCta />
      <Footer />
    </div>
  );
}
