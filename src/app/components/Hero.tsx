import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-dvh overflow-hidden bg-espresso text-cream"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
        src="/video/hero-5639.mp4"
        poster="/video/hero-5639-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />

      {/* Legibility band behind headline only — leaves wood clear below */}
      <div className="absolute inset-x-0 top-0 h-[min(46%,380px)] bg-gradient-to-b from-[#0c0805]/82 via-[#0c0805]/45 to-transparent pointer-events-none" />
      {/* Light vignette on sides; barely any crush at bottom so wood stays the hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0502]/40 via-transparent to-[#0a0502]/35 pointer-events-none" />
      <div className="absolute inset-0 [background:radial-gradient(100%_70%_at_50%_55%,transparent_42%,#0a0502/45_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 lg:px-12 pt-28 lg:pt-32 pb-12 min-h-dvh flex flex-col items-start">
        <div className="max-w-[820px] reveal">
          <p className="plate-bright">Kentucky · Made by a Working Fireman</p>
          <h1 className="mt-4 display text-[clamp(2.8rem,8vw,6.5rem)] text-cream leading-[0.92]">
            Built With Purpose.
          </h1>
          <p className="mt-5 text-cream/88 text-[16px] lg:text-[17px] leading-[1.65] max-w-[48ch] font-light">
            Handcrafted bourbon barrel pieces, made in Kentucky by a working fireman.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
