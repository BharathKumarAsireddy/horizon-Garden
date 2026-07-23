import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { productCategories, products } from "@/lib/site-data";

export default function ProductCatalog() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-25">
      {productCategories.map((category, gi) => {
        const items = products.filter((p) => p.category === category.name);
        return (
          <div key={category.name} className={gi > 0 ? "mt-20" : ""}>
            <Reveal className="mb-10 max-w-[640px]">
              <h2 className="m-0 text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.1] font-normal tracking-[-0.02em] text-[#1f2a1d]">
                {category.name}
              </h2>
              <p className="mt-3 text-[1rem] leading-relaxed text-[#4b5b47]">
                {category.blurb}
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-4.5 md:grid-cols-3">
              {items.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 90}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
