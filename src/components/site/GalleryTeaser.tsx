import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { galleryPhotos } from "@/lib/gallery";

const featured = galleryPhotos([4, 19, 25, 46, 22, 36, 10, 48]);

export default function GalleryTeaser() {

  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-[#1f2a1d] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[560px]">
            <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
              Gallery
            </div>
            <h2 className="m-0 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-normal tracking-[-0.03em] text-white">
              A look around the yard
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
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {featured.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 90}>
              <Link
                href="/gallery"
                className="group relative block aspect-[2/3] overflow-hidden rounded-2xl bg-white/5"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
