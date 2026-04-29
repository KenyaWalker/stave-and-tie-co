import Link from "next/link";

/** Stacked hero: flex column (video block, then copy) — never side-by-side. */
export default function Hero() {
  return (
    <section
      id="top"
      className="flex w-full flex-col gap-0 overflow-hidden bg-espresso text-cream"
    >
      <div className="relative min-h-[min(38dvh,19rem)] w-full min-w-0 overflow-hidden bg-[#050403] sm:min-h-[min(42dvh,24rem)] md:min-h-[min(45dvh,26rem)]">
        <video
          className="absolute inset-0 h-full w-full border-0 object-cover object-center outline-none ring-0"
          src="/video/hero-5639.mp4"
          poster="/video/hero-5639-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[#4a241c]/26 mix-blend-multiply" />
        <div className="pointer-events-none absolute inset-0 bg-[#3d1f18]/18 mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#341815]/42 via-transparent to-[#140a08]/48" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0907]/50 via-transparent to-transparent" />
      </div>

      <div className="grain relative border-t border-cream/10 bg-[linear-gradient(180deg,rgba(216,177,90,0.04)_0%,transparent_38%),#1f130a] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-11">
        <div className="reveal mx-auto w-full max-w-[1480px]">
          <p className="plate-bright text-left">The Stave &amp; Tie Co.</p>
          <h1 className="mt-3 display text-left text-[clamp(2.35rem,4.3vw,3.65rem)] leading-[0.94] text-balance text-cream xl:text-[clamp(2.45rem,3.8vw,3.85rem)]">
            Reclaimed Oak, Made Personal
          </h1>
          <p className="mt-4 max-w-[52ch] text-left text-[15px] font-light leading-[1.75] text-cream/88 lg:text-[16px]">
            Custom barrel head art, stave coat racks, and bourbon flight boards handcrafted with care,
            character, and a finish made to last.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/our-story" className="btn-gilt justify-center sm:justify-start">
              Learn Our Story <span aria-hidden>→</span>
            </Link>
            <Link href="/shop" className="btn-ghost justify-center sm:justify-start">
              Explore the Shop <span aria-hidden>→</span>
            </Link>
          </div>
          <p className="mt-6 text-left">
            <Link
              href="/commission"
              className="link-rule font-medium text-cream/80 text-[11px] tracking-[0.22em] uppercase hover:text-gilt-2"
            >
              Custom Order <span aria-hidden>→</span>
            </Link>
            <span className="mt-2 block max-w-[38ch] text-[13px] font-light leading-[1.65] text-cream/55 sm:mt-1 sm:inline sm:ml-3 sm:max-w-none sm:text-[13px]">
              when you&apos;re ready for a one-of-a-kind piece.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
