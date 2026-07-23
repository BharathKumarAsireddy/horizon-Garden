import Reveal from "./Reveal";
import { testimonials } from "@/lib/site-data";

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="flex w-[340px] shrink-0 flex-col rounded-3xl border border-white/10 bg-white p-8 px-7">
      <div className="mb-4.5 text-base tracking-[2px] text-[#e0a92b]">
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </div>
      <p className="m-0 mb-6 flex-1 text-[1rem] leading-relaxed text-[#2d3a2a]">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div>
        <div className="text-[0.98rem] font-semibold text-[#1f2a1d]">
          {t.name}
        </div>
        <div className="mt-0.5 text-[0.88rem] text-[#85ab8b]">{t.city}</div>
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  const track = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 overflow-hidden bg-[#1f2a1d] py-20 text-white"
    >
      <Reveal className="mx-auto mb-12 max-w-[640px] px-6 text-center">
        <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
          Testimonials
        </div>
        <h2 className="m-0 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-normal tracking-[-0.03em] text-white">
          What our customers say
        </h2>
      </Reveal>
      <div className="w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-5">
          {track.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
