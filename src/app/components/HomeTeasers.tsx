import Image from "next/image";
import Link from "next/link";

const tiles: { src: string; alt: string; label: string; span?: string }[] = [
  {
    src: "/photos/img_5662.jpg",
    alt: "Reclaimed bourbon stave coat rack with a single white western hat",
    label: "The Stave Coat Rack",
    span: "lg:col-span-2",
  },
  {
    src: "/photos/img_5664.jpg",
    alt: "Stave coat rack styled with two hats and a denim jacket",
    label: "Styled · Two-up",
    span: "lg:col-span-2",
  },
  {
    src: "/photos/img_5927.jpg",
    alt: "Station One — The Big House — Lexington, KY barrel head",
    label: "Station One · Lexington",
  },
  {
    src: "/photos/img_6089.jpg",
    alt: "Kentucky Fire Commission barrel head",
    label: "Kentucky Fire Commission",
  },
  {
    src: "/photos/img_6306.jpg",
    alt: "W.V. 302 sawmill-style barrel head",
    label: "W.V. 302 · Est. 2017",
  },
  {
    src: "/photos/img_6329.jpg",
    alt: "Boyd County Emergency Medical Services barrel head",
    label: "Boyd County EMS",
  },
];

export default function HomeTeasers() {
  return (
    <section className="grain relative w-full bg-espresso text-parchment pt-14 lg:pt-20 pb-14 lg:pb-20">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="ornament">
          <span className="ornament-mark">No. I · The Work</span>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] text-cream max-w-[16ch]">
            Western luxury,
            <br />
            <span className="display-italic text-gilt-2">station by station.</span>
          </h2>
          <p className="text-parchment/80 max-w-[44ch] leading-[1.8]">
            Hand-engraved barrel heads, reclaimed stave coat racks, and bourbon flight boards &mdash;
            built one at a time in Kentucky.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {tiles.map((tile) => (
            <figure
              key={tile.src}
              className={`group relative aspect-[3/4] overflow-hidden border border-parchment/15 ${tile.span ?? ""}`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(min-width: 1024px) 24vw, 47vw"
                className="object-cover brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <figcaption className="absolute left-3 bottom-3 right-3 plate-bright !tracking-[0.26em] text-gilt-3 text-[0.6rem] leading-tight">
                {tile.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/collection" className="btn-gilt">
            Browse the collection <span>→</span>
          </Link>
          <Link href="/commission" className="btn-ghost">
            Commission a piece <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
