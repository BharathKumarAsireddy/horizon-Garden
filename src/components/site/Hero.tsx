import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Soft-fades the photo's top and left edges into the blurred backdrop so the
// team shot reads as one continuous background rather than a framed picture.
const PHOTO_MASK = {
  maskImage:
    "linear-gradient(to right, transparent 0%, #000 24%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 18%, #000 34%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, #000 24%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 18%, #000 34%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
} as const;

const MOBILE_PHOTO_MASK = {
  maskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)",
} as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#141c12]"
    >
      {/* Atmosphere: a heavily blurred copy of the team photo fills the whole
          hero in the same greens, dimmed so the copy stays legible. */}
      <div
        aria-hidden
        className="absolute inset-0 scale-110 bg-cover bg-center opacity-70 blur-2xl"
        style={{ backgroundImage: "url(/hero/home-blur.jpg)" }}
      />
      <div aria-hidden className="absolute inset-0 bg-[#10160e]/70" />

      {/* Desktop: the photo is anchored bottom-right and sized so the whole
          crew sits to the right of the copy. */}
      <div
        className="absolute right-0 bottom-0 hidden aspect-[16/9] w-[min(74vw,calc(100svh*1.78))] lg:block"
        style={PHOTO_MASK}
      >
        <Image
          src="/hero/home.jpg"
          alt="The Horizon Gardens team standing together in the nursery yard"
          fill
          preload
          sizes="74vw"
          className="object-cover"
        />
      </div>
      {/* Left-side scrim so the headline has contrast where the photo fades in. */}
      <div
        aria-hidden
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(14,19,12,0.85) 0%, rgba(14,19,12,0.55) 30%, rgba(14,19,12,0) 50%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen w-full flex-col lg:flex-row lg:items-center">
        {/* Mobile/tablet: photo bleeds edge to edge at the top, fading down
            into the copy. */}
        <div
          className="relative aspect-[16/9] w-full lg:hidden"
          style={MOBILE_PHOTO_MASK}
        >
          <Image
            src="/hero/home.jpg"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* HERO COPY */}
        <div className="-mt-6 flex w-full max-w-[720px] flex-1 flex-col justify-center px-6 pb-16 sm:px-12 lg:mt-0 lg:flex-none lg:px-16 lg:py-28">
          <div className="mb-5 flex items-center gap-2.5 text-[12px] lg:whitespace-nowrap font-semibold tracking-[0.14em] text-[#e8895a] uppercase sm:text-[13px]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8895a]" />
            Loxahatchee Groves, FL &bull; Landscape Supply Yard
          </div>

          <h1 className="m-0 text-[clamp(2.3rem,3.3vw,3.6rem)] leading-[1.08] font-normal tracking-[-0.02em] text-[#f4ecd8] [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
            South Florida&rsquo;s
            <br />
            Landscape Supply Yard
          </h1>

          <p className="mt-6 max-w-[460px] text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed font-medium text-[#f4ecd8]/85">
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
