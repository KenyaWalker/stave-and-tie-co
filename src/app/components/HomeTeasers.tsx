import Image from "next/image";
import Link from "next/link";

export default function HomeTeasers() {
  return (
    <section className="grain relative w-full bg-espresso text-parchment pt-20 lg:pt-28 pb-16 lg:pb-20">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="ornament">
          <span className="ornament-mark">No. I · The Collection</span>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="display text-[clamp(2.4rem,5.6vw,4.6rem)] text-cream max-w-[14ch]">
            Western luxury,
            <br />
            <span className="display-italic text-gilt-2">done in deep walnut.</span>
          </h2>
          <p className="text-parchment/80 max-w-[44ch] leading-[1.85]">
            Three signature pieces. All hand-engraved, finished, and shipped from Kentucky &mdash;
            never on a production line.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7">
          <div className="relative aspect-[3/4] overflow-hidden border border-parchment/15">
            <Image
              src="/photos/img_5662.jpg"
              alt="Reclaimed bourbon stave coat rack with a single white western hat"
              fill
              sizes="(min-width: 640px) 46vw, 92vw"
              className="object-cover brightness-[0.92] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent" />
            <div className="absolute left-4 bottom-4 plate-bright !tracking-[0.32em] text-gilt-3">
              <span className="numeral mr-3">i</span>The Stave Coat Rack
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden border border-parchment/15">
            <Image
              src="/photos/img_5664.jpg"
              alt="Reclaimed bourbon stave coat rack styled with two hats and a denim jacket"
              fill
              sizes="(min-width: 640px) 46vw, 92vw"
              className="object-cover brightness-[0.92] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent" />
            <div className="absolute left-4 bottom-4 plate-bright !tracking-[0.32em] text-gilt-3">
              <span className="numeral mr-3">ii</span>Styled · Two-up
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="plate-bright !tracking-[0.32em]">The Range</p>
            <h3 className="mt-5 display text-cream text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[0.95]">
              Custom barrel heads.
              <br />
              <span className="display-italic text-gilt-2">Stave coat racks. Flight boards.</span>
            </h3>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <Link href="/collection" className="btn-gilt">
              Browse the collection <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
