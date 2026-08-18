import { Clock, MapPin, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import { ADDRESS, HOURS, MAPS_EMBED_URL, MAPS_URL } from "@/lib/site-data";

export default function VisitUs() {
  return (
    <section id="visit" className="scroll-mt-24 bg-[#161f14] px-6 py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 md:grid-cols-2 md:items-stretch">
        <Reveal>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${ADDRESS} in Google Maps`}
            className="group relative block h-[320px] w-full overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:h-full"
          >
            <iframe
              src={MAPS_EMBED_URL}
              className="pointer-events-none h-full w-full border-0 grayscale-[15%] brightness-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-hidden="true"
              tabIndex={-1}
            />
            <div className="absolute inset-0 flex items-end justify-start bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_45%)] p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e8895a] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                <Navigation size={15} />
                Get Directions
              </span>
            </div>
          </a>
        </Reveal>

        <Reveal delay={90}>
          <div className="flex h-full flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
            <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
              Visit The Yard
            </div>
            <h2 className="m-0 mb-6 text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.1] font-normal tracking-[-0.03em] text-white">
              Opening Hours
            </h2>
            <ul className="m-0 flex flex-col gap-3.5 p-0">
              {HOURS.map((h) => (
                <li
                  key={h.days}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-3.5 last:border-0 last:pb-0"
                >
                  <span className="flex items-center gap-3 text-[0.98rem] font-medium text-white">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#bfe3c4]">
                      <Clock size={16} />
                    </span>
                    {h.days}
                  </span>
                  <span className="text-[0.95rem] text-white/70">
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#bfe3c4] transition-opacity hover:opacity-80"
            >
              <MapPin size={16} />
              {ADDRESS}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
