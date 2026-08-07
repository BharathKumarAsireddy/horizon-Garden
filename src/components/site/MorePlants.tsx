import Link from "next/link";
import Reveal from "./Reveal";
import { plantPhotos } from "@/lib/site-data";

export default function MorePlants({ exclude }: { exclude: string }) {
  const rest = plantPhotos.filter((p) => p.slug !== exclude);

  return (
    <section className="bg-[#eef1e7] px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-10 text-center">
          <h2 className="m-0 text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.1] font-normal tracking-[-0.02em] text-[#1f2a1d]">
            More From The Yard
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <Link
                href={`/products/${p.slug}`}
                className="group relative block aspect-4/3 overflow-hidden rounded-2xl bg-[#dfe4d6]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute right-0 bottom-0 left-0 bg-[linear-gradient(0deg,rgba(31,42,29,0.7),rgba(31,42,29,0))] px-4 py-3.5 text-sm font-medium text-white">
                  {p.title}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
