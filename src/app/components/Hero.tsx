import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="grid w-full min-h-0 grid-cols-1 gap-0 overflow-hidden bg-[#0d0907] text-cream lg:min-h-[min(52dvh,28rem)] lg:grid-cols-[minmax(0,1fr)_minmax(300px,26rem)]"
    >
      <div className="relative min-h-[min(38dvh,19rem)] min-w-0 w-full max-w-none overflow-hidden bg-[#050403] lg:min-h-[min(52dvh,28rem)] shadow-[12px_0_48px_-24px_rgba(0,0,0,0.65)]">
        <video
          className="absolute inset-0 box-border h-full w-full min-h-full min-w-full max-w-none border-0 object-cover object-center outline-none ring-0"
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#1a0e0a]/15 to-[#0d0907]/75" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-px bg-gradient-to-b from-transparent via-cream/25 to-transparent lg:block" aria-hidden />
      </div>

      <div className="grain relative flex min-w-0 flex-col justify-start border-0 border-t border-[#2a1814]/80 bg-[linear-gradient(180deg,rgba(216,177,90,0.05)_0%,transparent_42%),#120d0b] px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[min(52dvh,28rem)] lg:justify-center lg:border-l lg:border-t-0 lg:border-[#2a1814]/60 lg:px-10 lg:py-12 lg:pt-[max(5.5rem,calc(4.5rem+env(safe-area-inset-top)))] xl:px-12 lg:shadow-[-16px_0_40px_-28px_rgba(0,0,0,0.45)]">
        <div className="reveal">
          <p className="plate-bright">The Stave &amp; Tie Co.</p>
          <h1 className="mt-3 display text-[clamp(2.35rem,4.3vw,3.65rem)] text-cream leading-[0.94] xl:text-[clamp(2.45rem,3.8vw,3.85rem)]">
            Reclaimed Oak, Made Personal
          </h1>
          <p className="mt-4 max-w-[42ch] text-[15px] font-light leading-[1.75] text-cream/88 lg:mt-4 lg:text-[16px]">
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
          <p className="mt-6">
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
