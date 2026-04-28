import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[88svh] overflow-hidden bg-espresso text-cream"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        src="/video/hero-5641-v5.mp4"
        poster="/video/hero-5641-v5-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-[#0e0703]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0703]/55 via-transparent to-[#0e0703]/40" />
      <div className="absolute inset-0 [background:radial-gradient(110%_75%_at_50%_50%,transparent_45%,#0a0502_115%)]" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 lg:px-12 pt-32 lg:pt-40 pb-20 min-h-[88svh] flex items-end">
        <div className="max-w-3xl reveal">
          <p className="plate-bright">Kentucky · Made by a Working Fireman</p>
          <h1 className="mt-5 display text-[clamp(3rem,8.6vw,7.4rem)] text-cream">
            Built With
            <br />
            <span className="display-italic text-gilt-2">Purpose.</span>
          </h1>
          <p className="mt-6 text-cream/85 text-[16px] lg:text-[17px] leading-[1.75] max-w-[48ch] font-light">
            Handcrafted bourbon barrel pieces, made in Kentucky by a working fireman.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/commission" className="btn-gilt">
              Start Your Piece <span aria-hidden>→</span>
            </Link>
            <Link href="/collection" className="btn-ghost">
              View Collection <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 text-cream/60">
        <span className="block h-[18px] w-px bg-cream/40" />
        <span className="text-[10px] tracking-[0.32em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
