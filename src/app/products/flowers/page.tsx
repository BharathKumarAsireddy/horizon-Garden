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
  title: "Flowers",
  description:
    "Seasonal blooms and year-round color to brighten up any yard, garden bed, or planter.",
};

export default function FlowersPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <PageBanner
        eyebrow="Flowers"
        title="Seasonal Color, Ready to Plant"
        description="Year-round blooms to brighten up any yard, garden bed, or planter."
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
        eyebrow="Why Our Flowers"
        title="A Little Color Goes a Long Way"
        paragraphs={[
          "Flowers do a lot of work for a small footprint — a few beds of seasonal color can change the whole feel of a yard. We rotate our stock so there's always something in bloom.",
          "From mandevilla vines for trellises and mailboxes to bedding flowers for borders and planters, we carry what actually performs in Florida sun.",
        ]}
        image="/products/flower-in-hero.jpg"
        imageAlt="Yellow mandevilla flowers"
        highlights={[
          "Rotated with the growing season",
          "Pollinator-friendly varieties",
          "Great for beds, planters & trellises",
        ]}
        imageFirst
      />

      <MorePlants exclude="flowers" />
      <FinalCta />
      <Footer />
    </div>
  );
}
