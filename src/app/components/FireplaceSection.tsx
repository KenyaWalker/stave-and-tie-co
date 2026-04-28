import Image from "next/image";
import Link from "next/link";

export default function FireplaceSection() {
  return (
    <>
      <section className="grain relative w-full bg-char text-parchment pt-20 lg:pt-28 pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="ornament">
            <span className="ornament-mark">No. II · Our Story</span>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="relative lg:col-span-7 aspect-[4/5] overflow-hidden border border-parchment/15">
              <Image
                src="/photos/firemen.jpg"
                alt="Firefighters with a custom-engraved bourbon barrel head"
                fill
                sizes="(min-width: 1024px) 58vw, 92vw"
                className="object-cover brightness-[0.86] contrast-[1.08] saturate-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <div className="absolute left-5 bottom-5 plate-bright !tracking-[0.32em] text-gilt-3">
                <span className="numeral mr-3">ii</span>Kentucky · Firehouse-built
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="plate-bright !tracking-[0.32em]">Our Story</p>
              <h2 className="mt-5 display text-cream text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[0.92]">
                Built by hand.
                <br />
                <span className="display-italic text-gilt-2">Honed by fire.</span>
              </h2>
              <p className="mt-7 text-parchment/85 leading-[1.95] max-w-[46ch]">
                Every piece begins in a firehouse &mdash; reclaimed white oak, careful engraving,
                a finish you can feel. No two are the same.
              </p>
              <p className="mt-4 text-parchment/70 leading-[1.9] max-w-[46ch]">
                Crafted by a local fireman. Supported by the firehouses that shaped him.
              </p>
              <Link href="/our-story" className="mt-9 btn-gilt inline-flex">
                Meet the maker <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-char">
        <div className="relative h-[340px] md:h-[500px] lg:h-[640px] overflow-hidden">
          <Image
            src="/photos/img_5793.jpg"
            alt="Custom engraved bourbon barrel head wall art"
            fill
            sizes="100vw"
            className="object-cover object-[50%_42%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0703]/80 via-[#0e0703]/15 to-[#0e0703]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0703]/55 via-transparent to-[#0e0703]/45" />
          <div className="absolute inset-0 [background:radial-gradient(110%_70%_at_50%_50%,transparent_45%,#0a0502_115%)]" />

          <div className="absolute left-6 lg:left-12 bottom-6 lg:bottom-10 plate-bright !tracking-[0.36em] text-gilt-3/85">
            <span className="numeral mr-3">iii</span>Reclaimed White Oak · Engraved by Hand
          </div>
        </div>
      </section>

      <section className="grain relative w-full bg-espresso text-parchment pt-24 lg:pt-32 pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 text-center">
          <p className="plate-bright !tracking-[0.36em]">Begin</p>
          <h2 className="mt-6 display text-cream text-[clamp(2.6rem,6vw,5.6rem)] leading-[0.92] max-w-[18ch] mx-auto">
            From the firehouse
            <br />
            <span className="display-italic text-gilt-2">to your wall.</span>
          </h2>
          <p className="mt-7 mx-auto max-w-[54ch] text-parchment/82 leading-[1.95]">
            Tell us your piece &mdash; a name, a station, a story, or a sentiment.
            We&rsquo;ll engrave it into reclaimed white oak and finish it by hand.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
            <Link href="/commission" className="btn-gilt">
              Start your commission <span>→</span>
            </Link>
            <Link href="/collection" className="btn-ghost">
              Browse the collection <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
