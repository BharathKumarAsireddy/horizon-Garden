import Reveal from "./Reveal";
import { areas } from "@/lib/site-data";

export default function ServiceAreas() {
  return (
    <section className="bg-[#1f2a1d] px-6 py-22.5 text-white">
      <div className="mx-auto max-w-[1000px] text-center">
        <Reveal>
          <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
            Serving Palm Beach County
          </div>
          <h2 className="mx-auto mb-5 max-w-[760px] text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-normal tracking-[-0.03em] text-white">
            Our yard is in Loxahatchee Groves — we deliver across the western
            communities and beyond
          </h2>
          <p className="mx-auto mb-10 max-w-[560px] text-[1.02rem] leading-relaxed text-white/75">
            Whether you&rsquo;re off Seminole Pratt Whitney Road or down in
            Greenacres, we&rsquo;ll get your materials to you within 30
            miles.
          </p>
        </Reveal>
        <Reveal delay={90} className="flex flex-wrap justify-center gap-3">
          {areas.map((a) => (
            <span
              key={a}
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/90 transition-colors hover:bg-white/10"
            >
              {a}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
