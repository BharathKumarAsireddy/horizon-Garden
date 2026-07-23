"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import { useActiveSection } from "./useActiveSection";

const LINKS = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/about", id: "about", label: "About" },
  { href: "/products", id: "products", label: "Products" },
  { href: "/#testimonials", id: "testimonials", label: "Testimonials" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

const LINK_IDS = LINKS.map((l) => l.id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const scrollActive = useActiveSection(LINK_IDS);
  const active =
    pathname === "/about"
      ? "about"
      : pathname === "/products"
      ? "products"
      : scrollActive;
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Non-home pages have no video hero behind the nav, so keep it solid always.
  const solid = scrolled || pathname !== "/";

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300"
        style={{
          backgroundColor: solid ? "rgba(244,241,233,0.85)" : "transparent",
          backdropFilter: solid ? "blur(12px)" : "none",
          boxShadow: solid ? "0 4px 20px rgba(31,42,29,0.08)" : "none",
        }}
      >
        <nav className="flex items-center justify-between px-6 py-5">
          <Link
            href="/#home"
            className="flex items-baseline gap-0.5 text-[#1f2a1d]"
          >
            <span className="text-[22px] font-semibold tracking-[-0.02em]">
              Horizon Gardens
            </span>
            <sup className="text-[11px] font-medium">&reg;</sup>
          </Link>

          <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/60 bg-white/70 py-[5px] pr-[6px] pl-6 shadow-[0_4px_14px_rgba(31,42,29,0.08)] backdrop-blur-md">
            {LINKS.map((l) => {
              const isActive = active === l.id;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "font-semibold text-[#1f2a1d]"
                      : "font-medium text-[#4b5b47] hover:text-[#1f2a1d]"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-[#336443]" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              className="ml-2 rounded-full bg-[#1f2a1d] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2a3827]"
            >
              Visit the Yard
            </Link>
          </div>

          <div className="flex items-center gap-4 text-[#2d3a2a]">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#2d3a2a] transition-opacity hover:opacity-80"
            >
              <Phone size={16} />
              {PHONE_DISPLAY}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/60 bg-white/70 text-[#1f2a1d] backdrop-blur-md lg:hidden"
            >
              <Menu
                size={20}
                className="absolute transition-all duration-300"
                style={{
                  opacity: open ? 0 : 1,
                  transform: `rotate(${open ? 90 : 0}deg) scale(${
                    open ? 0.5 : 1
                  })`,
                }}
              />
              <X
                size={20}
                className="absolute transition-all duration-300"
                style={{
                  opacity: open ? 1 : 0,
                  transform: `rotate(${open ? 0 : -90}deg) scale(${
                    open ? 1 : 0.5
                  })`,
                }}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        onClick={close}
        className="fixed inset-0 z-40 bg-[#1f2a1d]/40 backdrop-blur-sm transition-opacity duration-300"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />
      <div
        className="fixed top-0 right-0 bottom-0 z-41 w-[85%] max-w-[380px] bg-white/97 shadow-[-10px_0_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-transform duration-500"
        style={{
          transform: `translateX(${open ? "0" : "100%"})`,
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="flex h-full flex-col px-8 pt-24 pb-8">
          <div className="flex flex-col gap-0.5">
            {LINKS.map((l) => {
              const isActive = active === l.id;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className={`border-b border-[#1f2a1d]/10 py-4 text-[26px] font-semibold ${
                    isActive ? "text-[#336443]" : "text-[#1f2a1d]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col gap-3.5">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={close}
              className="flex items-center gap-2 text-[15px] font-medium text-[#2d3a2a]"
            >
              <Phone size={16} />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/#contact"
              onClick={close}
              className="mt-1.5 rounded-full bg-[#1f2a1d] px-5 py-3.5 text-center text-[15px] font-semibold text-white"
            >
              Visit the Yard
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
