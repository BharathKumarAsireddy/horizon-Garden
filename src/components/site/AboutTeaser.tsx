import Link from "next/link";
import Reveal from "./Reveal";

export default function AboutTeaser() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#1f2a1d] px-6 py-20 text-center text-white"
    >
      <Reveal className="mx-auto max-w-[640px]">
        <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
          Our Story
        </div>
        <h2 className="m-0 mb-5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] font-normal tracking-[-0.03em] text-white">
          Built by landscapers, open to everyone
        </h2>
        <p className="m-0 mb-7 text-[1.02rem] leading-relaxed text-white/82">
          Horizon Gardens grew out of a 20+ year Palm Beach County landscape
          company. We stock the same pro-grade plants and materials our own
          crew trusts on the job — open to contractors and homeowners alike.
        </p>
        <Link
          href="/about"
          className="inline-block rounded-full bg-[#e8895a] px-6.5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c96a3a]"
        >
          Learn Our Story
        </Link>
      </Reveal>
    </section>
  );
}
