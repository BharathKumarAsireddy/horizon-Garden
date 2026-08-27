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
  title: "Annuals",
  description:
    "Fresh annuals that bring fast, vibrant color to your landscape — rotated with the seasons.",
};

export default function AnnualsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <PageBanner
        eyebrow="Annuals"
        title="Fast, Vibrant Color for Every Season"
        description="Rotated with the seasons, so there's always fresh color ready to plant."
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
        eyebrow="Why Our Annuals"
        title="The Quickest Way to Refresh a Bed"
        paragraphs={[
          "Annuals are the quickest way to refresh a garden bed or planter — fast-growing, budget-friendly, and available in colors that rotate with the calendar.",
          "We restock regularly so you're never stuck choosing between last season's leftovers.",
        ]}
        image="https://horizongardensinc.com/wp-content/uploads/2026/04/plant-rattlesnake-calathea.webp"
        imageAlt="Rattlesnake calathea annual"
        highlights={[
          "Restocked every season",
          "Budget-friendly color",
          "Great for beds, borders & containers",
        ]}
      />

      <MorePlants exclude="annuals" />
      <FinalCta />
      <Footer />
    </div>
  );
}
