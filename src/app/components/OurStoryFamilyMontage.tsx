import Image from "next/image";

const COPY = "A family man, serving the community that raised him.";

/** Podium still + headline on photo only. */
export default function OurStoryFamilyMontage() {
  return (
    <section
      aria-labelledby="our-story-family-line-heading"
      className="relative w-full overflow-hidden border-t border-cream/[0.08] bg-char"
    >
      <h2 id="our-story-family-line-heading" className="sr-only">
        {COPY}
      </h2>

      <div className="relative min-h-[min(38svh,22rem)] w-full md:min-h-[min(40svh,24rem)]">
        <Image
          src="/photos/our-story-family-line.png"
          alt="Speaking at the podium in Lexington Fire Department dress uniform"
          fill
          className="object-cover object-[50%_42%] brightness-[0.88] saturate-[0.97]"
          sizes="100vw"
          priority
        />

        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-espresso/25 via-[35%] to-espresso/88"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#0d0806]/70 to-transparent to-[48%]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-espresso/40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gilt-2/[0.07] mix-blend-soft-light"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#120805]/35" aria-hidden />

        <div className="absolute inset-0 z-10 mx-auto flex max-w-[46rem] items-center justify-center px-4 py-20 sm:px-6 md:px-10">
          <p className="display -translate-y-14 inline-flex max-w-none flex-row flex-nowrap items-baseline justify-center gap-0 whitespace-nowrap text-[clamp(0.85rem,3.85vw,3.35rem)] leading-[1.15] tracking-[-0.03em] [text-shadow:none] shadow-none ring-0 outline-none border-0 sm:tracking-[-0.02em] md:-translate-y-20 lg:-translate-y-28 xl:-translate-y-32">
            <span className="shrink-0 text-cream [text-shadow:none] shadow-none ring-0 outline-none">A family man, </span>
            <span className="display-italic shrink-0 text-gilt-2 [text-shadow:none] shadow-none ring-0 outline-none">serving the community that raised him.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
