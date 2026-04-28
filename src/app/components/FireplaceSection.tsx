import Image from "next/image";
import Link from "next/link";

export default function FireplaceSection() {
  return (
    <section className="grain relative w-full bg-char text-parchment pt-14 lg:pt-20 pb-16 lg:pb-24">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="ornament">
          <span className="ornament-mark">No. II · Our Story</span>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="relative lg:col-span-5 aspect-[4/5] overflow-hidden border border-parchment/15">
            <Image
              src="/photos/firemen.jpg"
              alt="Firefighters with a custom-engraved bourbon barrel head"
              fill
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover brightness-[0.86] contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
            <div className="absolute left-4 bottom-4 plate-bright !tracking-[0.32em] text-gilt-3">
              Kentucky · Firehouse-built
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="plate-bright !tracking-[0.32em]">From the firehouse</p>
            <h2 className="mt-4 display text-cream text-[clamp(2.4rem,5.4vw,4.6rem)] leading-[0.92]">
              Built by hand.
              <br />
              <span className="display-italic text-gilt-2">Honed by fire.</span>
            </h2>
            <p className="mt-6 text-parchment/85 leading-[1.9] max-w-[54ch]">
              Every piece begins in a Kentucky firehouse &mdash; reclaimed white oak, careful
              engraving, a finish you can feel. Crafted by a local fireman, supported by the
              firehouses that shaped him. No two are the same.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/commission" className="btn-gilt">
                Start your commission <span>→</span>
              </Link>
              <Link href="/our-story" className="btn-ghost">
                Meet the maker <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
