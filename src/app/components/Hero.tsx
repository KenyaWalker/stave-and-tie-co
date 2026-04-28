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

      {/* Legibility: top-right only — left side stays open for the wood */}
      <div className="pointer-events-none absolute top-0 right-0 h-[min(52dvh,480px)] w-[min(92vw,720px)] bg-gradient-to-bl from-[#0c0805]/88 via-[#0c0805]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0502]/35 via-transparent to-[#0a0502]/25" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(100%_70%_at_35%_55%,transparent_38%,#0a0502/40_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1480px] flex-col items-end px-6 pt-28 pb-12 lg:px-12 lg:pt-32">
        <div className="max-w-[540px] text-right reveal lg:max-w-[600px]">
          <p className="plate-bright">Kentucky · Made by a Working Fireman</p>
          <h1 className="mt-4 display text-[clamp(2.8rem,8vw,6.5rem)] text-cream leading-[0.92]">
            Built With Purpose.
          </h1>
          <p className="mt-5 text-cream/88 text-[16px] lg:text-[17px] leading-[1.65] font-light lg:ml-auto lg:max-w-[48ch]">
            Handcrafted bourbon barrel pieces, made in Kentucky by a working fireman.
          </p>

          <div className="mt-8 flex flex-wrap justify-end gap-3">
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
