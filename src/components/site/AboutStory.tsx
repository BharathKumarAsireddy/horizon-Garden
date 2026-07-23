import Reveal from "./Reveal";
import { ADDRESS } from "@/lib/site-data";

export default function AboutStory() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-25">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
            Our Story
          </div>
          <h2 className="m-0 mb-6 text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] font-normal tracking-[-0.03em] text-[#1f2a1d]">
            Built by landscapers, open to everyone
          </h2>
          <p className="m-0 mb-4.5 text-[1.02rem] leading-relaxed text-[#4b5b47]">
            Horizon Gardens grew out of New Horizons of the Palm Beaches, a
            landscape and irrigation company that&rsquo;s been working across
            Palm Beach County for over 20 years. We got tired of settling for
            whatever the big box stores had in stock — so we built the
            supply yard we always wished existed.
          </p>
          <p className="m-0 mb-4.5 text-[1.02rem] leading-relaxed text-[#4b5b47]">
            Every plant, bag of mulch, and yard of topsoil that leaves our
            lot at {ADDRESS} is something our own crews already trust on
            their job sites. We&rsquo;re not guessing at what works in South
            Florida&rsquo;s heat, humidity, and sandy soil — we&rsquo;re
            planting it ourselves.
          </p>
          <p className="m-0 text-[1.02rem] leading-relaxed text-[#4b5b47]">
            Today, we&rsquo;re open to everyone: contractors and landscapers
            who need a supplier they can count on, and homeowners who just
            want their yard to look great. Same materials, same quality
            promise, same team — no matter who&rsquo;s asking.
          </p>
        </Reveal>
        <Reveal delay={90}>
          <div className="aspect-4/3 overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(31,42,29,0.18)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://horizongardensinc.com/wp-content/uploads/2026/04/storefront-entrance-sign.webp"
              alt="Horizon Gardens storefront entrance"
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
