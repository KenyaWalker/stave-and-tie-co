import Image from "next/image";
import Link from "next/link";

export default function HomeTeasers() {
  return (
    <section className="relative w-full bg-espresso text-parchment pt-14 lg:pt-20 pb-14 lg:pb-20">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="display text-[clamp(2rem,4.6vw,3.8rem)] text-cream max-w-[14ch]">
            Western luxury,
            <br />
            <span className="display-italic text-gilt-2">done clean.</span>
          </h2>
          <p className="text-parchment/80 max-w-[44ch] leading-[1.8]">
            Three signature pieces. All hand-engraved, finished, and shipped from Kentucky.
          </p>
        </div>

        <div className="rule mt-10" />

        <Link
          href="/collection"
          className="group mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center"
        >
          <div className="relative aspect-[4/3] lg:aspect-[5/4] lg:col-span-7 overflow-hidden border border-parchment/20">
            <Image
              src="/photos/img_5662.jpg"
              alt="Bourbon barrel head wall art collection"
              fill
              sizes="(min-width: 1024px) 60vw, 92vw"
              className="object-cover brightness-[0.78] contrast-[1.06] saturate-[0.95] transition-transform duration-[1200ms] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-black/15 to-transparent" />
            <div className="absolute left-5 bottom-5 plate-bright !tracking-[0.28em] text-cream/95">
              The Collection
            </div>
          </div>

          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <p className="plate-bright !tracking-[0.28em]">Featured</p>
            <h3 className="mt-4 display text-cream text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.95]">
              Three pieces.
              <br />
              <span className="display-italic text-gilt-2">Each one built by hand.</span>
            </h3>
            <p className="mt-6 text-parchment/85 leading-[1.9] max-w-[46ch]">
              Custom engraved barrel heads. Reclaimed stave coat racks. Bourbon flight boards.
              Premium finish, every time.
            </p>
            <span className="mt-8 btn-gilt !tracking-[0.24em] inline-flex">
              Browse the collection <span>→</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
