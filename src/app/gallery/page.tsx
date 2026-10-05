import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import PageBanner from "@/components/site/PageBanner";
import GalleryGrid from "@/components/site/GalleryGrid";
import FinalCta from "@/components/site/FinalCta";
import Footer from "@/components/site/Footer";
import { galleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a look around the Horizon Gardens yard in Loxahatchee Groves, FL — flowers, annuals, topiaries, landscape plants and more.",
};

export default function GalleryPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <PageBanner
        eyebrow="Gallery"
        title="A look around the yard"
        description="Flowers, annuals, topiaries and landscape plants — photographed right here at Horizon Gardens."
      />
      <section className="bg-[#eef1e7] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
      <FinalCta />
      <Footer />
    </div>
  );
}
