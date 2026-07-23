import Reveal from "./Reveal";
import { ICONS } from "./icons";
import { why } from "@/lib/site-data";

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-25">
      <Reveal className="mx-auto mb-15 max-w-[640px] text-center">
        <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
          Why Horizon Gardens
        </div>
        <h2 className="m-0 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-normal tracking-[-0.03em] text-[#1f2a1d]">
          Not just a garden center
        </h2>
        <p className="mt-4.5 text-[1.05rem] leading-relaxed text-[#4b5b47]">
          We&rsquo;re the crew that uses this stuff every day.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {why.map((w, i) => {
          const Icon = ICONS[w.icon];
          return (
            <Reveal key={w.title} delay={(i % 2) * 90}>
              <div className="flex h-full items-start gap-5 rounded-2xl border border-[#1f2a1d]/7 bg-white p-7.5 px-7">
                <div className="flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-xl bg-[#eef3ec] text-[#336443]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="m-0 mb-2 text-[1.2rem] font-medium tracking-[-0.01em] text-[#1f2a1d]">
                    {w.title}
                  </h3>
                  <p className="m-0 text-[0.96rem] leading-relaxed text-[#4b5b47]">
                    {w.body}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
