import Link from "next/link";
import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { products } from "@/lib/site-data";

const FEATURED = ["Landscape Plants", "Flowers", "Mulch", "Aggregate"];

export default function ProductsTeaser() {
  const featured = FEATURED.map((title) =>
    products.find((p) => p.title === title)
  ).filter((p): p is (typeof products)[number] => p !== undefined);

  return (
    <section id="products" className="scroll-mt-24 bg-[#eef1e7] px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto mb-12 max-w-[640px] text-center">
          <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
            What We Carry
          </div>
          <h2 className="m-0 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-normal tracking-[-0.03em] text-[#1f2a1d]">
            Everything for your next project
          </h2>
          <p className="mt-4.5 text-[1.05rem] leading-relaxed text-[#4b5b47]">
            Plants, mulch, aggregate, and more — all in one yard.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4.5 md:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-block rounded-full bg-[#1f2a1d] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#2a3827]"
          >
            View All Products
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
