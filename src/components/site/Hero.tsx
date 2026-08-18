import { Phone, ArrowRight } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <HeroVideo />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,241,233,0.42)_0%,rgba(244,241,233,0.36)_20%,rgba(244,241,233,0.24)_45%,rgba(31,42,29,0.18)_68%,rgba(31,42,29,0.52)_100%)]" />
      </div>

      {/* HERO COPY */}
      <div className="relative z-10 flex flex-1 flex-col items-center px-6 pt-32 text-center">
        <h1 className="m-0 max-w-[1000px] text-[clamp(2.1rem,6vw,5.25rem)] leading-[0.98] font-normal tracking-[-0.035em] text-[#1f3a26] text-balance [text-shadow:0_2px_6px_rgba(244,241,233,0.55)]">
          Your South Florida{" "}
          <span className="text-[#3d6b48]">
            landscape<br className="hidden sm:block" /> supply yard
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-[520px] text-[clamp(0.95rem,1.6vw,1.15rem)] leading-relaxed font-medium text-[#16210f] [text-shadow:0_1px_2px_rgba(244,241,233,0.9),0_2px_14px_rgba(244,241,233,0.85)]">
          Pro-grade plants, flowers, mulch, and bulk materials from a team
          that uses them on the job every day. Open to everyone.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <a
            href="#contact"
            className="rounded-full bg-[#1f2a1d] px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_6px_18px_rgba(31,42,29,0.18)] transition-colors hover:bg-[#2a3827]"
          >
            Visit the Garden
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-6 py-3.5 text-[15px] font-medium text-[#1f2a1d] backdrop-blur-md transition-colors hover:bg-white/95"
          >
            <Phone size={16} />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* BOTTOM-LEFT BLOCK */}
      <div className="relative z-10 mt-auto max-w-[400px] px-6 pb-7 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">
        <div className="mb-3 flex items-center gap-2 text-white">
          <Leaf2 />
          <span className="text-sm font-semibold">
            Grown &amp; Sourced Locally
          </span>
        </div>
        <p className="mb-5.5 max-w-[320px] text-[13px] leading-relaxed text-white/90">
          We stock the same pro-grade plants, mulch, and materials our own
          crew trusts on the job — ready for pickup or delivery across Palm
          Beach County.
        </p>
        <div className="flex flex-wrap items-center gap-4.5">
          <a
            href="#products"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1f2a1d] shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-colors hover:bg-white/90"
          >
            Browse Products
          </a>
          <a
            href="#how"
            className="text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Know More.
          </a>
        </div>
      </div>

      {/* BOTTOM-RIGHT */}
      <a
        href="#about"
        className="absolute right-6 bottom-7 z-10 hidden items-center gap-2 text-sm text-white/90 sm:flex"
      >
        <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <ArrowRight size={13} strokeWidth={2.5} />
        </span>
        <span className="font-medium">Our story</span>
        <span className="text-white/60">20+ yrs</span>
      </a>
    </section>
  );
}

function Leaf2() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
