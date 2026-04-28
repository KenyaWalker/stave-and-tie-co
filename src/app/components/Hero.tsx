import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="grid min-h-dvh w-full grid-cols-1 bg-[#0a0705] text-cream lg:grid-cols-[minmax(0,1fr)_minmax(300px,26rem)]"
    >
      {/* Wood / video — anchored to bottom so the lower frame isn’t cropped away */}
      <div className="relative h-[min(58dvh,520px)] overflow-hidden bg-[#0c0805] lg:h-auto lg:min-h-dvh">
        <video
          className="absolute inset-0 h-full w-full object-cover object-bottom"
          src="/video/hero-5639.mp4"
          poster="/video/hero-5639-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        {/* Theatrical depth: warm shadow pool at bottom, subtle top falloff */}
        <div className="pointer-events-none absolute inset-0 bg-[#1f140c]/22 mix-blend-multiply" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0705]/50 via-transparent to-[#070504]/55" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#120c08]/45 lg:to-[#0a0705]/55" />
      </div>

      {/* Copy panel — deep walnut, reads as one piece with the video */}
      <div className="grain relative flex flex-col justify-center border-[#2a2118]/80 bg-[#0e0906] px-6 py-14 sm:px-8 lg:min-h-dvh lg:border-l lg:border-t-0 lg:px-10 lg:pb-20 lg:pt-32 xl:px-12">
        <div className="reveal">
          <p className="plate-bright">Kentucky · Made by a Working Fireman</p>
          <h1 className="mt-4 display text-[clamp(2.5rem,4.2vw,3.85rem)] text-cream leading-[0.94] xl:text-[clamp(2.6rem,3.6vw,4rem)]">
            Built With Purpose.
          </h1>
          <p className="mt-5 text-cream/85 text-[15px] leading-[1.7] font-light lg:text-[16px]">
            Handcrafted bourbon barrel pieces, made in Kentucky by a working fireman.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/commission" className="btn-gilt justify-center sm:justify-start">
              Start Your Piece <span aria-hidden>→</span>
            </Link>
            <Link href="/collection" className="btn-ghost justify-center sm:justify-start">
              View Collection <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
