import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative w-full min-h-[92svh] overflow-hidden bg-espresso text-parchment">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero-5641-v4.mp4"
        poster="/video/hero-5641-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-[#1a0d06]/92" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0d06]/65 via-transparent to-[#1a0d06]/45" />
      <div className="absolute inset-0 [background:radial-gradient(120%_80%_at_50%_50%,transparent_45%,#0e0703_120%)]" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 lg:px-12 pt-32 lg:pt-40 pb-20 min-h-[92svh] flex items-end">
        <div className="max-w-3xl">
          <p className="plate-bright !tracking-[0.36em]">The Stave &amp; Tie Co. — Bourbon Barrel Art</p>
          <h1 className="mt-5 display text-[clamp(3rem,9.4vw,7.6rem)] text-cream leading-[0.9]">
            Crafted by a local fireman,
            <br />
            <span className="display-italic text-gilt-2">honed by white oak.</span>
          </h1>
          <p className="mt-6 text-parchment/90 text-[16px] leading-[1.85] max-w-[44ch]">
            Custom-engraved bourbon barrel heads, reclaimed stave coat racks, and bourbon flight boards.
            Hand-finished in Kentucky. No two alike.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/commission" className="btn-gilt">
              Start Your Custom Piece <span>→</span>
            </Link>
            <Link href="/collection" className="btn-ghost">
              View Collection <span>→</span>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4 text-parchment/70">
            <span className="numeral text-2xl">i</span>
            <span className="plate !tracking-[0.36em]">Reclaimed white oak · Hand engraved · Lifetime piece</span>
          </div>
        </div>
      </div>
    </section>
  );
}
