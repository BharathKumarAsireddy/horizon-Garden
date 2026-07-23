import Reveal from "./Reveal";

export default function QualityPromise() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 pt-25">
      <Reveal className="rounded-[28px] bg-[#336443] p-13 px-11 text-center text-white">
        <div className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-[#c7dcc9] uppercase">
          Our Quality Promise
        </div>
        <h2 className="mx-auto max-w-[720px] text-[clamp(1.6rem,3.5vw,2.4rem)] leading-[1.2] font-normal tracking-[-0.02em] text-white">
          If a plant doesn&rsquo;t look right when you get it home, bring it
          back. We stand behind every product that leaves this yard.
        </h2>
      </Reveal>
    </section>
  );
}
