import { ADDRESS, MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

const CARRY = [
  "Landscape Plants",
  "Flowers & Annuals",
  "Topiaries",
  "Mulch & Topsoil",
  "Aggregate & Sand",
];

export default function Footer() {
  return (
    <footer className="bg-[#161f14] px-6 pt-16 pb-8 text-white/75">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-4 text-xl font-semibold tracking-[-0.02em] text-white">
            Horizon Gardens
          </div>
          <p className="m-0 max-w-[320px] text-sm leading-relaxed">
            Pro-grade landscape plants, flowers, mulch, and bulk materials
            from a team that uses them on the job every day. Open to
            homeowners and contractors.
          </p>
        </div>
        <div>
          <div className="mb-4 text-[13px] font-semibold tracking-[0.1em] text-[#85ab8b] uppercase">
            Quick Links
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/75 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-[13px] font-semibold tracking-[0.1em] text-[#85ab8b] uppercase">
            What We Carry
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            {CARRY.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-[13px] font-semibold tracking-[0.1em] text-[#85ab8b] uppercase">
            Contact Us
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-white/75 transition-colors hover:text-white"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 transition-colors hover:text-white"
            >
              {ADDRESS}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-11 max-w-[1200px] border-t border-white/10 pt-6 text-[13px] text-white/50">
        &copy; 2026 Horizon Gardens. All rights reserved.
      </div>
    </footer>
  );
}
