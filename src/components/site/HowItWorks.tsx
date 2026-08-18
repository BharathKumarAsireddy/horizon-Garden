import Reveal from "./Reveal";
import { steps } from "@/lib/site-data";

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 mx-auto max-w-[1200px] px-6 py-25">
      <Reveal className="mx-auto mb-16 max-w-[640px] text-center">
        <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
          How It Works
        </div>
        <h2 className="m-0 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-normal tracking-[-0.03em] text-[#1f2a1d]">
          Order your materials in three simple steps.
        </h2>
        <p className="mt-4.5 text-[1.05rem] leading-relaxed text-[#4b5b47]">
          Getting your landscape materials is simple.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((st, i) => (
          <Reveal key={st.n} delay={i * 90}>
            <div className="h-full rounded-3xl border border-[#1f2a1d]/8 bg-white p-9 px-8 shadow-[0_10px_30px_rgba(31,42,29,0.05)]">
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#eef3ec] text-[22px] font-semibold text-[#336443]">
                {st.n}
              </div>
              <h3 className="mt-6 mb-3 text-[1.4rem] font-medium tracking-[-0.02em] text-[#1f2a1d]">
                {st.title}
              </h3>
              <p className="m-0 text-[0.98rem] leading-relaxed text-[#4b5b47]">
                {st.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
