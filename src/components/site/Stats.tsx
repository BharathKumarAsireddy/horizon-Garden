import Reveal from "./Reveal";
import { stats } from "@/lib/site-data";

export default function Stats() {
  return (
    <section className="bg-[#1f2a1d] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="text-center">
            <div className="text-[clamp(2.2rem,5vw,3.4rem)] leading-none font-semibold tracking-[-0.03em] text-white">
              {s.value}
            </div>
            <div className="mt-2.5 text-sm font-medium text-[#85ab8b]">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
