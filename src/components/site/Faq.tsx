"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "@/lib/site-data";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-24 mx-auto max-w-[1000px] px-6 py-25">
      <Reveal className="mb-11 text-center">
        <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
          FAQs
        </div>
        <h2 className="m-0 text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.05] font-normal tracking-[-0.03em] text-[#1f2a1d]">
          Common questions
        </h2>
      </Reveal>
      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => {
          const isOpen = openFaq === i;
          return (
            <button
              key={f.q}
              onClick={() => setOpenFaq(isOpen ? -1 : i)}
              className="w-full rounded-2xl border border-[#1f2a1d]/8 bg-white px-6.5 py-5.5 text-left transition-shadow hover:shadow-[0_8px_22px_rgba(31,42,29,0.07)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[1.05rem] font-medium text-[#1f2a1d]">
                  {f.q}
                </span>
                <span
                  className="inline-flex shrink-0 transition-transform duration-300"
                  style={{ transform: `rotate(${isOpen ? 45 : 0}deg)` }}
                >
                  <Plus size={20} color="#336443" strokeWidth={2} />
                </span>
              </div>
              <div
                className="overflow-hidden transition-[max-height,opacity] duration-350 ease-out"
                style={{
                  maxHeight: isOpen ? 300 : 0,
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="m-0 mt-3.5 text-[0.98rem] leading-relaxed text-[#4b5b47]">
                  {f.a}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
