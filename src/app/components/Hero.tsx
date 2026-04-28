import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[94svh] overflow-hidden bg-espresso text-cream"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover scale-110 blur-3xl opacity-55"
        src="/video/hero-5639.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />

      <video
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full w-auto"
        src="/video/hero-5639.mp4"
        poster="/video/hero-5639-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502]/92 via-[#0a0502]/15 to-[#0a0502]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0502]/65 via-transparent to-[#0a0502]/35" />
      <div className="absolute inset-0 [background:radial-gradient(120%_85%_at_50%_50%,transparent_30%,#0a0502_120%)]" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 lg:px-12 pt-32 lg:pt-40 pb-20 min-h-[94svh] flex items-end">
        <div className="max-w-[820px] reveal">
          <p className="plate-bright">Kentucky · Made by a Working Fireman</p>
          <h1 className="mt-5 display text-[clamp(3.4rem,9.4vw,8rem)] text-cream leading-[0.92]">
            Built With Purpose.
          </h1>
          <p className="mt-7 text-cream/85 text-[16px] lg:text-[18px] leading-[1.7] max-w-[52ch] font-light">
            Handcrafted bourbon barrel pieces, made in Kentucky by a working fireman.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/commission" className="btn-gilt">
              Start Your Piece <span aria-hidden>→</span>
            </Link>
            <Link href="/collection" className="btn-ghost">
              View Collection <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
