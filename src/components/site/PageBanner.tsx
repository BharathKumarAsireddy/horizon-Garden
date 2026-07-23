import Reveal from "./Reveal";

export default function PageBanner({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-[#1f2a1d] px-6 pt-36 pb-20 text-center text-white">
      <Reveal>
        <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#85ab8b] uppercase">
          {eyebrow}
        </div>
        <h1 className="mx-auto max-w-[780px] text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] font-normal tracking-[-0.03em] text-white">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-[600px] text-[1.05rem] leading-relaxed text-white/75">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
