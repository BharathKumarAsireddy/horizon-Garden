import { ArrowRight } from "lucide-react";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <HeroVideo />
        {/* Cinematic left-to-right scrim: dark behind the copy, fading to
            near-transparent so the video stays the visual subject. A faint
            vertical pass keeps the nav and lower edge legible too. */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(100deg, rgba(17,23,15,0.86) 0%, rgba(17,23,15,0.72) 20%, rgba(17,23,15,0.42) 40%, rgba(17,23,15,0.15) 58%, rgba(17,23,15,0.02) 72%, rgba(17,23,15,0) 88%), linear-gradient(180deg, rgba(10,14,8,0.32) 0%, rgba(10,14,8,0) 18%, rgba(10,14,8,0) 78%, rgba(10,14,8,0.3) 100%)",
          }}
        />
      </div>

      {/* HERO COPY */}
      <div className="relative z-10 flex min-h-screen w-full items-center px-6 py-28 sm:px-12 lg:px-16">
        <div className="w-full max-w-[760px]">
          <div className="mb-5 flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.14em] text-[#e8895a] uppercase [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8895a]" />
            Loxahatchee Groves, FL &bull; Landscape Supply Yard
          </div>

          <h1 className="m-0 text-[clamp(2.3rem,4.6vw,4.1rem)] leading-[1.08] font-normal tracking-[-0.02em] text-[#f4ecd8] [text-shadow:0_4px_28px_rgba(0,0,0,0.5),0_1px_4px_rgba(0,0,0,0.45)]">
            South Florida&rsquo;s
            <br />
            Landscape Supply Yard
          </h1>

          <p className="mt-6 max-w-[480px] text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed font-medium text-[#f4ecd8]/92 [text-shadow:0_1px_10px_rgba(0,0,0,0.45),0_1px_3px_rgba(0,0,0,0.4)]">
            Pro-grade plants, flowers, mulch &amp; landscape materials —
            locally sourced and ready for pickup or delivery. Open to
            everyone.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-[#e8895a] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition-colors hover:bg-[#c96a3a]"
            >
              Visit the Garden
              <ArrowRight size={16} />
            </a>
            <a
              href="#products"
              className="rounded-full bg-[#f4ecd8] px-8 py-4 text-[15px] font-semibold text-[#1f2a1d] shadow-[0_10px_28px_rgba(0,0,0,0.2)] transition-colors hover:bg-white"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
