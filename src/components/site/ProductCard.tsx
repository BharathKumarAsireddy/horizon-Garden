import Link from "next/link";
import { ICONS } from "./icons";
import type { products } from "@/lib/site-data";

export default function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  const Icon = ICONS[product.icon];
  const slug = "slug" in product ? product.slug : undefined;

  const body = (
    <>
      <div className="relative aspect-4/3 overflow-hidden bg-[#dfe4d6]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-[#336443] shadow-sm backdrop-blur-sm">
          <Icon size={18} strokeWidth={1.8} />
        </div>
      </div>
      <div className="p-6.5 pt-5">
        <h3 className="m-0 mb-2 text-[1.15rem] font-medium tracking-[-0.01em] text-[#1f2a1d]">
          {product.title}
        </h3>
        <p className="m-0 text-[0.92rem] leading-relaxed text-[#4b5b47]">
          {product.body}
        </p>
      </div>
    </>
  );

  const className =
    "group block h-full overflow-hidden rounded-2xl border border-[#1f2a1d]/7 bg-white transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(31,42,29,0.1)]";

  if (slug) {
    return (
      <Link href={`/products/${slug}`} className={className}>
        {body}
      </Link>
    );
  }

  return <div className={className}>{body}</div>;
}
