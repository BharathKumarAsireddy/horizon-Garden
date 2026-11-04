import { ArrowRight, ChevronDown, Leaf, Sprout, Truck } from "lucide-react";
import Image from "next/image";

const HIGHLIGHTS = [
  { icon: Sprout, label: "Pro-grade plants & palms" },
  { icon: Truck, label: "Pickup or delivery" },
  { icon: Leaf, label: "Open to everyone" },
] as const;

// Staggers each block of hero copy so it rises in after the one before it.
const rise = (delayMs: number) => ({ animationDelay: `${delayMs}ms` });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#141c12]"
    >
      {/* The nursery yard, full bleed, with a slow push-in on load. */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <Image
          src="/hero/yard.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          quality={85}
          className="animate-hero-zoom object-cover object-[62%_center]"
        />
      </div>

      {/* Scrims: darken the left for the headline, the top for the nav and
          the bottom for the highlights strip, while the palms and sky on the
          right stay bright. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: [
            "linear-gradient(180deg, rgba(12,18,10,0.4) 0%, rgba(12,18,10,0) 18%)",
            "linear-gradient(0deg, rgba(12,18,10,0.8) 0%, rgba(12,18,10,0.25) 24%, rgba(12,18,10,0) 42%)",
            "linear-gradient(90deg, rgba(12,18,10,0.78) 0%, rgba(12,18,10,0.5) 32%, rgba(12,18,10,0.06) 58%, rgba(12,18,10,0) 70%)",
          ].join(", "),
        }}
      />
      {/* On phones the copy spans the full width, so dim the whole photo a bit. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[#0c120a]/35 sm:hidden"
      />
      {/* Warm sunlit tint so the greens feel golden rather than flat. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 78% 18%, rgba(255,214,150,0.45) 0%, rgba(255,214,150,0) 55%)",
        }}
      />

      {/* HERO COPY */}
      <div className="flex w-full flex-1 items-end pt-32 pb-10 sm:items-center sm:pb-16">
        <div className="w-full max-w-[760px] px-6 sm:px-12 lg:px-16">
          <div
            className="animate-hero-rise mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.14em] text-[#f4ecd8] uppercase backdrop-blur-md sm:text-[12px]"
            style={rise(150)}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e8895a] opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e8895a]" />
            </span>
            Loxahatchee Groves, FL
          </div>

          <h1
            className="animate-hero-rise m-0 text-[clamp(2.6rem,5.2vw,4.75rem)] leading-[1.02] font-normal tracking-[-0.025em] text-[#f7f1e1] [text-shadow:0_4px_30px_rgba(0,0,0,0.45)]"
            style={rise(300)}
          >
            South Florida&rsquo;s
            <br />
            <span className="text-[#f4c79a] italic">Landscape Supply</span>{" "}
            Yard
          </h1>

          <p
            className="animate-hero-rise mt-6 max-w-[500px] text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed font-medium text-[#f4ecd8]/90 [text-shadow:0_2px_14px_rgba(0,0,0,0.4)]"
            style={rise(450)}
          >
            Pro-grade plants, flowers, mulch &amp; landscape materials —
            locally sourced and ready for pickup or delivery. Open to
            everyone.
          </p>

          <div
            className="animate-hero-rise mt-9 flex flex-wrap items-center gap-4"
            style={rise(600)}
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-[#e8895a] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_12px_32px_rgba(232,137,90,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#d9763f] hover:shadow-[0_16px_40px_rgba(232,137,90,0.45)]"
            >
              Visit the Garden
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#products"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-[15px] font-semibold text-[#f7f1e1] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>

      {/* Highlights strip along the bottom edge. */}
      <div
        className="animate-hero-rise relative w-full border-t border-white/15 bg-[#0e140c]/35 backdrop-blur-md"
        style={rise(800)}
      >
        <div className="flex w-full items-center justify-between gap-6 px-6 py-5 sm:px-12 lg:px-16">
          <ul className="m-0 flex flex-wrap items-center gap-x-8 gap-y-3 p-0">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex list-none items-center gap-2.5 text-[13px] font-medium text-[#f4ecd8]/90 sm:text-[14px]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8895a]/20 text-[#f4c79a]">
                  <Icon size={15} />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <a
            href="#about"
            aria-label="Scroll to learn more"
            className="hidden shrink-0 items-center gap-2 text-[13px] font-medium !text-[#f4ecd8]/80 transition-colors hover:!text-white md:flex"
          >
            Explore
            <ChevronDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
