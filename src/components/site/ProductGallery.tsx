import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import GalleryGrid from "./GalleryGrid";
import type { GalleryImage } from "@/lib/gallery";

export default function ProductGallery({
  title,
  images,
}: {
  title: string;
  images: GalleryImage[];
}) {
  return (
    <section className="bg-[#1f2a1d] px-6 py-20 text-white">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[560px]">
            <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
              From the Yard
            </div>
            <h2 className="m-0 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-normal tracking-[-0.03em] text-white">
              {title}
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#a8cfae] transition-opacity hover:opacity-80"
          >
            View full gallery
            <ArrowRight size={16} />
          </Link>
        </Reveal>
        <GalleryGrid images={images} />
      </div>
    </section>
  );
}
