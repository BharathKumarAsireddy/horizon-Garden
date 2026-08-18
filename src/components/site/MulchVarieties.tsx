import Link from "next/link";
import Reveal from "./Reveal";
import { mulchVarieties } from "@/lib/site-data";

export default function MulchVarieties() {
  return (
    <section className="bg-[#eef1e7] px-6 py-25">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
          <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
            Mulch Varieties
          </div>
          <h2 className="m-0 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-normal tracking-[-0.03em] text-[#1f2a1d]">
            Six finishes, one yard
          </h2>
          <p className="mt-4.5 text-[1.05rem] leading-relaxed text-[#4b5b47]">
            From natural wood chips to deep reds — all in stock, by the bag
            or by the yard.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-3">
          {mulchVarieties.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 90}>
              <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-[#dfe4d6]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute right-0 bottom-0 left-0 bg-[linear-gradient(0deg,rgba(31,42,29,0.65),rgba(31,42,29,0))] px-4 py-3.5 text-sm font-medium text-white">
                  {g.alt}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            href="/products/mulch"
            className="inline-block rounded-full bg-[#e8895a] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#c96a3a]"
          >
            View All Mulch Types
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
