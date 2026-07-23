"use client";

import { useState, type FormEvent } from "react";
import { products } from "@/lib/site-data";

const inputClasses =
  "w-full rounded-xl border border-[#1f2a1d]/12 bg-[#f4f1e9] px-4 py-3 text-[0.95rem] text-[#1f2a1d] placeholder:text-[#4b5b47]/50 outline-none transition-colors focus:border-[#336443] focus:bg-white";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#1f2a1d]/7 bg-white p-8.5 text-center shadow-[0_10px_30px_rgba(31,42,29,0.06)]">
        <h3 className="m-0 mb-2 text-[1.3rem] font-medium text-[#1f2a1d]">
          Thanks — we got it!
        </h3>
        <p className="m-0 text-[0.98rem] leading-relaxed text-[#4b5b47]">
          Someone from the yard will reach out shortly. Need it sooner? Just
          call us directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#1f2a1d]/7 bg-white p-8.5 shadow-[0_10px_30px_rgba(31,42,29,0.06)]"
    >
      <h3 className="m-0 mb-6 text-[1.2rem] font-medium text-[#1f2a1d]">
        Send us an inquiry
      </h3>
      <div className="flex flex-col gap-4.5">
        <div>
          <label
            htmlFor="cf-name"
            className="mb-1.5 block text-sm font-medium text-[#2d3a2a]"
          >
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="cf-phone"
            className="mb-1.5 block text-sm font-medium text-[#2d3a2a]"
          >
            Phone
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            placeholder="(561) 000-0000"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="cf-email"
            className="mb-1.5 block text-sm font-medium text-[#2d3a2a]"
          >
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="cf-product"
            className="mb-1.5 block text-sm font-medium text-[#2d3a2a]"
          >
            Product Looking For
          </label>
          <select
            id="cf-product"
            name="product"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Select a product
            </option>
            {products.map((p) => (
              <option key={p.title} value={p.title}>
                {p.title}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-1.5 w-full rounded-full bg-[#1f2a1d] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#2a3827]"
        >
          Send Inquiry
        </button>
      </div>
    </form>
  );
}
