import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[86svh] overflow-hidden bg-espresso text-cream"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/video/hero-montage.mp4"
        poster="/video/hero-montage-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-[#0a0502]" />
      <div className="absolute inset-0 [background:radial-gradient(120%_85%_at_50%_50%,transparent_30%,#0a0502_120%)]" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 lg:px-12 pt-32 lg:pt-40 pb-20 min-h-[86svh] flex items-end">
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
