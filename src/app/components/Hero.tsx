import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative w-full min-h-[88svh] overflow-hidden bg-espresso text-parchment">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/strip-5639-v4.mp4"
        poster="/video/strip-5639-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-[#160d07]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#160d07]/55 via-transparent to-[#160d07]/35" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 lg:px-12 pt-34 lg:pt-38 pb-16 min-h-[88svh] flex items-end">
        <div className="max-w-2xl">
          <p className="plate-bright !tracking-[0.26em]">Kentucky handcrafted bourbon barrel art</p>
          <h1 className="mt-4 display text-[clamp(2.8rem,8.3vw,6.8rem)] text-cream leading-[0.93]">
            Crafted by a local fireman.
          </h1>
          <p className="mt-5 text-parchment/88 text-[16px] leading-[1.8] max-w-[40ch]">
            Custom engraved wall pieces built from reclaimed white oak. Premium finish,
            clean design, and real firehouse roots.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/commission" className="btn-gilt !tracking-[0.24em]">
              Start Your Custom Piece <span>→</span>
            </Link>
            <Link href="/collection" className="btn-ghost !tracking-[0.24em]">
              View Collection <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
