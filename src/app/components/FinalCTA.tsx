import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="home-final-cta"
      className="relative w-full overflow-hidden bg-espresso text-cream pt-24 lg:pt-28 pb-24 lg:pb-28"
    >
      <Image
        src="/photos/img_5793.jpg"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover object-[50%_45%] opacity-40 contrast-[1.05] saturate-[1.05]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/82 via-espresso/88 to-espresso" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_20%,rgba(216,177,90,0.06),transparent_55%)]" aria-hidden />
      <div className="absolute inset-0 [background:radial-gradient(110%_70%_at_50%_50%,transparent_45%,#0a0502_115%)]" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 lg:px-12 text-center reveal">
        <p className="plate-bright">Custom Order</p>
        <h2
          id="home-final-cta"
          className="mt-5 text-balance display text-[clamp(2.5rem,7vw,5.5rem)] text-cream leading-[0.96]"
        >
          Let&rsquo;s make something worth keeping.
        </h2>
        <p className="mt-7 mx-auto max-w-[52ch] text-pretty text-[15px] font-light leading-[1.85] text-cream/84">
          Tell us what you want in the wood — a family name, station logo, wedding date, business mark,
          badge, phrase, or memory. We&rsquo;ll help shape it into a custom piece that feels personal from
          the first sketch to the final seal.
        </p>
        <div className="mt-10 flex flex-col flex-wrap items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link href="/commission" className="btn-gilt justify-center sm:min-w-60">
            Begin Your Custom Order <span aria-hidden>→</span>
          </Link>
          <Link href="/shop" className="btn-ghost justify-center border-cream/45 text-cream sm:min-w-60">
            Shop Examples <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
