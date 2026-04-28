import Image from "next/image";
import Link from "next/link";

export default function FireplaceSection() {
  return (
    <>
      <section className="relative w-full bg-char text-parchment pt-20 lg:pt-28 pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="relative lg:col-span-7 aspect-[4/5] overflow-hidden border border-parchment/15">
              <Image
                src="/photos/firemen.jpg"
                alt="Firefighters with a custom-engraved bourbon barrel head"
                fill
                sizes="(min-width: 1024px) 58vw, 92vw"
                className="object-cover brightness-[0.84] contrast-[1.06] saturate-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute left-5 bottom-5 plate-bright !tracking-[0.28em] text-cream/95">
                Kentucky · Firehouse-built
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="plate-bright !tracking-[0.28em]">Our Story</p>
              <h2 className="mt-4 display text-cream text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.95]">
                Built by hand.
                <br />
                <span className="display-italic text-gilt-2">Honed by fire.</span>
              </h2>
              <p className="mt-6 text-parchment/85 leading-[1.9] max-w-[46ch]">
                Every piece begins in a firehouse — reclaimed white oak, careful engraving,
                a finish you can feel. No two are the same.
              </p>
              <p className="mt-4 text-parchment/70 leading-[1.85] max-w-[46ch]">
                Crafted by a local fireman. Supported by the firehouses that shaped him.
              </p>
              <Link href="/our-story" className="mt-8 btn-gilt !tracking-[0.24em] inline-flex">
                Meet the maker <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-char">
        <div className="relative h-[320px] md:h-[480px] lg:h-[620px] overflow-hidden">
          <Image
            src="/photos/img_5793.jpg"
            alt="Custom engraved bourbon barrel head wall art"
            fill
            sizes="100vw"
            className="object-cover object-[50%_42%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0805]/70 via-[#0c0805]/15 to-[#0c0805]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0805]/50 via-transparent to-[#0c0805]/40" />
        </div>
      </section>

      <section className="relative w-full bg-espresso text-parchment pt-20 lg:pt-28 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 text-center">
          <p className="plate-bright !tracking-[0.32em]">Begin</p>
          <h2 className="mt-5 display text-cream text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.95] max-w-[18ch] mx-auto">
            From the firehouse
            <br />
            <span className="display-italic text-gilt-2">to your wall.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-[52ch] text-parchment/80 leading-[1.9]">
            Tell us your piece — name, station, story, or sentiment. We&rsquo;ll engrave it into
            reclaimed white oak and finish it by hand.
          </p>
          <div className="mt-9 flex flex-wrap justify-center items-center gap-3">
            <Link href="/commission" className="btn-gilt !tracking-[0.24em]">
              Start your commission <span>→</span>
            </Link>
            <Link href="/collection" className="btn-ghost !tracking-[0.24em]">
              Browse the collection <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
