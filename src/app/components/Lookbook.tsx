"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Piece = {
  name: string;
  detail: string;
  src: string;
  alt: string;
  focus?: string;
};

type Collection = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  cta: string;
  supportingNote: string;
  pieces: Piece[];
};

const collections: Collection[] = [
  {
    id: "barrel-heads",
    title: "Custom Barrel Head Art",
    subtitle:
      "Full-size reclaimed barrel heads engraved with family names, station logos, wedding details, business marks, military pieces, sports artwork, or personal designs.",
    price: "Starting at $125",
    cta: "Start a Barrel Head",
    supportingNote:
      "Best for statement wall art, firehouse gifts, home bars, wedding keepsakes, and custom family pieces.",
    pieces: [
      {
        name: "Station One",
        detail: "Firehouse piece",
        src: "/photos/img_5927.jpg",
        alt: "Station One firehouse barrel head",
        focus: "object-[50%_48%]",
      },
      {
        name: "The Beshears",
        detail: "Wedding monogram",
        src: "/photos/img_5793.jpg",
        alt: "Beshears monogram barrel head",
        focus: "object-[50%_50%]",
      },
      {
        name: "Powered by Faith",
        detail: "Custom devotional",
        src: "/photos/img_6277.jpg",
        alt: "Powered by Faith barrel head",
        focus: "object-[50%_52%]",
      },
      {
        name: "One Truck",
        detail: "Engine house",
        src: "/photos/img_6306.jpg",
        alt: "One Truck custom barrel head",
        focus: "object-[50%_48%]",
      },
      {
        name: "West Virginia 302",
        detail: "Department piece",
        src: "/photos/img_6011.jpg",
        alt: "West Virginia department barrel head",
        focus: "object-[50%_50%]",
      },
      {
        name: "Kentucky Wildcats",
        detail: "Sports artwork",
        src: "/photos/img_6029.jpg",
        alt: "Kentucky Wildcats barrel head",
        focus: "object-[50%_50%]",
      },
      {
        name: "Reed",
        detail: "Wedding keepsake",
        src: "/photos/img_6074.jpg",
        alt: "Reed wedding barrel head",
        focus: "object-[50%_50%]",
      },
      {
        name: "Agency seal",
        detail: "Institutional barrel head",
        src: "/photos/img_6009.jpg",
        alt: "Institutional seal engraved on bourbon barrel head",
        focus: "object-[50%_48%]",
      },
      {
        name: "Crew hand-off",
        detail: "Delivered barrel head",
        src: "/photos/img_6329.jpg",
        alt: "Paramedic with delivered custom barrel head",
        focus: "object-[50%_42%]",
      },
      {
        name: "Station 16",
        detail: "Department delivery",
        src: "/photos/img_6089.jpg",
        alt: "Station 16 custom barrel head delivery",
        focus: "object-[50%_50%]",
      },
    ],
  },
  {
    id: "coat-racks",
    title: "Bourbon Stave Coat Racks",
    subtitle:
      "Wall-mounted coat racks made from reclaimed bourbon barrel staves, finished with warm grain, dark character, and practical everyday use.",
    price: "Starting at $59.99",
    cta: "Start a Stave Rack",
    supportingNote: "Best for entryways, mudrooms, offices, cabins, garages, and bourbon rooms.",
    pieces: [
      {
        name: "Two-post rack",
        detail: "Wall-mounted oak",
        src: "/photos/img_5662.jpg",
        alt: "Handcrafted bourbon stave coat rack with two pegs on a wall",
        focus: "object-[50%_50%]",
      },
      {
        name: "Stave pegs",
        detail: "Hall install",
        src: "/photos/img_5664.jpg",
        alt: "Reclaimed stave rack mounted in a home interior",
        focus: "object-[52%_48%]",
      },
      {
        name: "Installed rack",
        detail: "Customer space",
        src: "/video/hero-5641-poster.jpg",
        alt: "Stave coat rack installed in a customer home",
        focus: "object-[50%_46%]",
      },
    ],
  },
  {
    id: "flight-boards",
    title: "Bourbon Flight Boards",
    subtitle:
      "Handcrafted tasting boards made for bourbon pours, home bars, gifts, mantels, and gatherings with people who appreciate a good pour.",
    price: "Starting at $39.99",
    cta: "Start a Flight Board",
    supportingNote:
      "Best for bourbon lovers, groomsmen gifts, Father’s Day, housewarming gifts, and home bar setups.",
    pieces: [
      {
        name: "Bourbon Flight Board",
        detail: "Tasting lineup",
        src: "/photos/flight-board-bottles.png",
        alt: "Barrel stave flight board with Glencairn glasses and bourbon bottles",
        focus: "object-[50%_50%]",
      },
    ],
  },
];

export default function Lookbook() {
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  const scroll = (id: string, dir: "prev" | "next") => {
    const node = refs.current[id];
    if (!node) return;
    const amount = node.clientWidth * 0.86;
    node.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section
      aria-label="Shop gallery"
      className="relative w-full overflow-hidden bg-espresso pb-20 text-parchment lg:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(55vh,480px)] bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(216,177,90,0.08),transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1480px] px-6 pb-10 pt-10 lg:px-12 lg:pb-11 lg:pt-12">
        <div className="rule-warm mx-auto max-w-[min(100%,64rem)] opacity-90" />

        <div className="mt-12 space-y-16 lg:mt-14 lg:space-y-20">
          {collections.map((collection) => (
            <section key={collection.id} id={collection.id} className="space-y-5">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="display text-[clamp(1.45rem,3.1vw,2.35rem)] leading-[1.08] text-cream">
                      {collection.title}
                    </h3>
                    <span className="inline-flex items-center border border-gilt/60 bg-[#1d120a] px-3 py-1 text-[12px] tracking-[0.08em] uppercase text-gilt-2">
                      {collection.price}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] font-light leading-[1.72] text-parchment/72 lg:text-[14px]">{collection.subtitle}</p>
                  <p className="mt-4 max-w-[52ch] text-[13px] font-light leading-[1.65] text-parchment/60">
                    {collection.supportingNote}
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => scroll(collection.id, "prev")}
                    className="btn-ghost !px-3.5 !py-2 !text-[10px]"
                    aria-label={`Scroll ${collection.title} previous`}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => scroll(collection.id, "next")}
                    className="btn-ghost !px-3.5 !py-2 !text-[10px]"
                    aria-label={`Scroll ${collection.title} next`}
                  >
                    →
                  </button>
                  <Link href="/commission" className="btn-gilt !text-[10px] !px-4 !py-2.5">
                    {collection.cta}
                  </Link>
                </div>
              </div>

              <div
                ref={(el) => {
                  refs.current[collection.id] = el;
                }}
                className="no-scrollbar -mx-1 overflow-x-auto snap-x snap-mandatory px-1 sm:mx-0 sm:px-0"
              >
                <div className="flex gap-4 lg:gap-5 min-w-max pb-2">
                  {collection.pieces.map((piece) => (
                    <article
                      key={piece.src + piece.name}
                      className="w-[78vw] sm:w-[44vw] lg:w-[29vw] xl:w-[24vw] shrink-0 snap-start"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-parchment/15 bg-char shadow-[0_8px_28px_-12px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.04]">
                        <Image
                          src={piece.src}
                          alt={piece.alt}
                          fill
                          sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 29vw, (min-width: 640px) 44vw, 78vw"
                          className={`object-cover origin-center scale-[0.93] transition-transform duration-700 hover:scale-[0.97] ${piece.focus ?? ""}`}
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent"
                          aria-hidden
                        />
                      </div>

                      <div className="mt-3 space-y-1">
                        <h4 className="display text-[1.2rem] leading-tight text-cream sm:text-[1.35rem]">
                          {piece.name}
                        </h4>
                        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-parchment/65">
                          {piece.detail}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
