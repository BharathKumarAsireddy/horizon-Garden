import Reveal from "./Reveal";
import { testimonials } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section className="bg-[#eef1e7] px-6 py-25">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto mb-15 max-w-[640px] text-center">
          <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
            Testimonials
          </div>
          <h2 className="m-0 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-normal tracking-[-0.03em] text-[#1f2a1d]">
            What our customers say
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div className="flex h-full flex-col rounded-3xl border border-[#1f2a1d]/7 bg-white p-8.5 px-7.5">
                <div className="mb-4.5 text-base tracking-[2px] text-[#e0a92b]">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="m-0 mb-6 flex-1 text-[1.02rem] leading-relaxed text-[#2d3a2a]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-[0.98rem] font-semibold text-[#1f2a1d]">
                    {t.name}
                  </div>
                  <div className="mt-0.5 text-[0.88rem] text-[#85ab8b]">
                    {t.city}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
