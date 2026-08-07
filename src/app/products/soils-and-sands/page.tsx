import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/site/Nav";
import PageBanner from "@/components/site/PageBanner";
import Reveal from "@/components/site/Reveal";
import TypeCard from "@/components/site/TypeCard";
import FinalCta from "@/components/site/FinalCta";
import Footer from "@/components/site/Footer";
import { soilTypes, sandTypes } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Soils & Sands | Horizon Gardens",
  description:
    "Topsoil, compost blends, and specialty sands — every soil and sand type we carry at our Loxahatchee Groves yard.",
};

export default function SoilsAndSandsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <PageBanner
        eyebrow="Soils & Sands"
        title="Soils & Sands"
        description="From screened topsoil and composted blends to masonry and specialty sands — the base materials every planting bed, lawn, and hardscape project starts with."
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
            Soils
          </h2>
          <p className="mt-3 text-[1rem] leading-relaxed text-[#4b5b47]">
            Screened topsoil, composted blends, and specialty mixes for
            beds, lawns, potting, and propagation. Ask our team which blend
            fits your project.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4">
          {soilTypes.map((t, i) => (
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
              Sands
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-[#4b5b47]">
              Fill sand, masonry sand, and reclaimed base materials for
              construction, drainage, and hardscape work.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4">
            {sandTypes.map((t, i) => (
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
