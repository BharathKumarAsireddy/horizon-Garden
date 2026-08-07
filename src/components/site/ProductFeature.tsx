import { Check } from "lucide-react";
import Reveal from "./Reveal";

export default function ProductFeature({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
  highlights,
  imageFirst = false,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  highlights: string[];
  imageFirst?: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.1fr]">
        <Reveal
          delay={imageFirst ? 90 : 0}
          className={imageFirst ? "md:order-2" : "md:order-1"}
        >
          <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
            {eyebrow}
          </div>
          <h2 className="m-0 mb-6 text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.1] font-normal tracking-[-0.03em] text-[#1f2a1d]">
            {title}
          </h2>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="m-0 mb-4.5 text-[1.02rem] leading-relaxed text-[#4b5b47] last:mb-0"
            >
              {p}
            </p>
          ))}
          <ul className="m-0 mt-6 flex flex-col gap-3 p-0">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-3 text-[0.98rem] font-medium text-[#1f2a1d]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef3ec] text-[#336443]">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal
          delay={imageFirst ? 0 : 90}
          className={imageFirst ? "md:order-1" : "md:order-2"}
        >
          <div className="aspect-4/3 overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(31,42,29,0.14)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
