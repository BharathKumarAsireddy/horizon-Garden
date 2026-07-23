import { Phone } from "lucide-react";
import Reveal from "./Reveal";
import { ADDRESS, MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

export default function FinalCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 mx-auto max-w-[900px] px-6 py-27.5 text-center"
    >
      <Reveal>
        <h2 className="m-0 mb-5.5 text-[clamp(2rem,5vw,3.4rem)] leading-[1.02] font-normal tracking-[-0.035em] text-[#336443]">
          Ready to see what we&rsquo;ve got?
        </h2>
        <p className="mx-auto mb-5 max-w-[560px] text-[1.1rem] leading-relaxed text-[#4b5b47]">
          Stop by the yard at {ADDRESS} — or call and we&rsquo;ll get your
          order ready for pickup or delivery.
        </p>
        <div className="mt-3.5 flex flex-wrap justify-center gap-3.5">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1f2a1d] px-7.5 py-4 text-[15px] font-medium text-white shadow-[0_6px_18px_rgba(31,42,29,0.18)] transition-colors hover:bg-[#2a3827]"
          >
            Visit the Yard
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 rounded-full border border-[#1f2a1d]/12 bg-white px-6.5 py-4 text-[15px] font-medium text-[#1f2a1d] transition-colors hover:bg-[#f4f1e9]"
          >
            <Phone size={16} />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
