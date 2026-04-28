import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-espresso text-cream pt-24 lg:pt-28 pb-24 lg:pb-28">
      <Image
        src="/photos/img_5793.jpg"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover object-[50%_45%] opacity-35"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/85 to-espresso" />
      <div className="absolute inset-0 [background:radial-gradient(110%_70%_at_50%_50%,transparent_45%,#0a0502_115%)]" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 lg:px-12 text-center reveal">
        <p className="plate-bright">Commission</p>
        <h2 className="mt-5 display text-[clamp(3rem,8vw,7rem)] text-cream leading-[0.95]">
          Let&rsquo;s Build
          <br />
          <span className="display-italic text-gilt-2">Yours.</span>
        </h2>
        <p className="mt-7 mx-auto max-w-[52ch] text-cream/82 leading-[1.85] font-light">
          Tell us your station, your name, your story. We&rsquo;ll engrave it into reclaimed
          white oak and finish it by hand.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/commission" className="btn-gilt">
            Start Your Piece <span aria-hidden>→</span>
          </Link>
          <Link href="/collection" className="btn-ghost">
            View Collection <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
