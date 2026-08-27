import Image from "next/image";
import {
  ADDRESS,
  FACEBOOK_URL,
  GOOGLE_URL,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/site-data";

const SOCIALS = [
  {
    href: INSTAGRAM_URL,
    label: "Instagram",
    path: "M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.16-.56.55-.9 1.11-1.16 1.77-.25.64-.42 1.37-.47 2.43C2 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.16 1.77.55.56 1.11.9 1.77 1.16.64.25 1.37.42 2.43.47C8.94 22 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47.66-.26 1.22-.6 1.77-1.16.56-.55.9-1.11 1.16-1.77.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.16-1.77 4.9 4.9 0 0 0-1.77-1.16c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.31.88.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.31-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.35a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.31-.88-.35-1.86C3.8 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.98.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.31 1.86-.35C8.01 3.8 8.33 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  },
  {
    href: FACEBOOK_URL,
    label: "Facebook",
    path: "M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.18H7.9v2.96h2.56V21h3.04Z",
  },
  {
    href: GOOGLE_URL,
    label: "Google",
    path: "M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.88h5.4a4.62 4.62 0 0 1-2 3.03v2.5h3.24c1.9-1.75 2.96-4.32 2.96-7.36Z M12 22c2.7 0 4.96-.9 6.62-2.42l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.06v2.59A10 10 0 0 0 12 22Z M6.41 13.92a5.99 5.99 0 0 1 0-3.84V7.49H3.06a10 10 0 0 0 0 9.02l3.35-2.59Z M12 6.04c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.5 9.5 0 0 0 12 2a10 10 0 0 0-8.94 5.49l3.35 2.59C7.2 7.8 9.4 6.04 12 6.04Z",
  },
];

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
          <div className="mb-4 flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt=""
              width={220}
              height={202}
              className="h-12 w-auto"
            />
            <span className="font-display text-xl font-semibold tracking-[-0.02em] text-white">
              Horizon Gardens
            </span>
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
          <div className="mt-5 flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors hover:bg-white/20 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-11 max-w-[1200px] border-t border-white/10 pt-6 text-[13px] text-white/50">
        &copy; 2026 Horizon Gardens. All rights reserved.
      </div>
    </footer>
  );
}
