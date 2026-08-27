import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/site/Nav";
import PageBanner from "@/components/site/PageBanner";
import Reveal from "@/components/site/Reveal";
import TypeCard from "@/components/site/TypeCard";
import FinalCta from "@/components/site/FinalCta";
import Footer from "@/components/site/Footer";
import { rockAggregateTypes, rockBoulderTypes } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Aggregate",
  description:
    "Rocks and boulders — every aggregate type we carry at our Loxahatchee Groves yard.",
};

export default function AggregatePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <PageBanner
        eyebrow="Aggregate"
        title="Rocks & Boulders"
        description="Decorative rock and landscape boulders for pathways, drainage, and hardscape projects of every scale."
      />

      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <Reveal>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#336443] transition-opacity hover:opacity-80"
          >
            <ArrowLeft size={16} />
            Back to All Products
          </Link>
        </Reveal>

        <Reveal className="mx-auto mt-10 mb-10 max-w-[720px]">
          <h2 className="m-0 text-[clamp(1.7rem,3.5vw,2.4rem)] leading-[1.1] font-normal tracking-[-0.02em] text-[#1f2a1d]">
            Rocks & Aggregates
          </h2>
          <p className="mt-3 text-[1rem] leading-relaxed text-[#4b5b47]">
            Bulk and bagged gravel and stone for pathways, drainage beds, and
            ground cover.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4">
          {rockAggregateTypes.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 80}>
              <TypeCard type={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#eef1e7] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mx-auto mb-10 max-w-[720px]">
            <h2 className="m-0 text-[clamp(1.7rem,3.5vw,2.4rem)] leading-[1.1] font-normal tracking-[-0.02em] text-[#1f2a1d]">
              Rock Boulders
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-[#4b5b47]">
              Flagstone, fieldstone, and statement boulders for hardscape
              features, borders, and focal points.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4">
            {rockBoulderTypes.map((t, i) => (
              <Reveal key={t.name} delay={(i % 4) * 80}>
                <TypeCard type={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </div>
  );
}
