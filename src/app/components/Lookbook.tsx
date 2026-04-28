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
  pieces: Piece[];
};

const collections: Collection[] = [
  {
    id: "barrel-heads",
    title: "Customizable Bourbon Barrel Heads",
    subtitle: "Full-size engraved barrel heads for homes, weddings, firehouses, and businesses.",
    price: "$159.99",
    cta: "Order barrel head",
    pieces: [
      { name: "Station One", detail: "Firehouse piece", src: "/photos/img_5927.jpg", alt: "Station One firehouse barrel head", focus: "object-[50%_45%]" },
      { name: "The Beshears", detail: "Wedding monogram", src: "/photos/img_5793.jpg", alt: "Beshears monogram barrel head", focus: "object-[50%_45%]" },
      { name: "Powered by Faith", detail: "Custom devotional", src: "/photos/img_6277.jpg", alt: "Powered by Faith barrel head", focus: "object-[50%_52%]" },
      { name: "One Truck", detail: "Engine commission", src: "/photos/img_6306.jpg", alt: "One Truck custom barrel head", focus: "object-[50%_45%]" },
      { name: "West Virginia 302", detail: "Department piece", src: "/photos/img_6011.jpg", alt: "West Virginia department barrel head", focus: "object-[50%_45%]" },
      { name: "Kentucky Wildcats", detail: "Sports commission", src: "/photos/img_6029.jpg", alt: "Kentucky Wildcats barrel head", focus: "object-[50%_45%]" },
      { name: "Reed", detail: "Wedding keepsake", src: "/photos/img_6074.jpg", alt: "Reed wedding barrel head", focus: "object-[50%_45%]" },
      { name: "Fire Commission", detail: "Institutional piece", src: "/photos/img_6009.jpg", alt: "Kentucky Fire Commission barrel head", focus: "object-[50%_45%]" },
      { name: "Customer Delivery", detail: "Local trust", src: "/photos/img_6329.jpg", alt: "Paramedic with delivered custom barrel head", focus: "object-[50%_30%]" },
      { name: "Station 16", detail: "Department delivery", src: "/photos/img_6089.jpg", alt: "Station 16 custom barrel head delivery", focus: "object-[50%_50%]" },
    ],
  },
  {
    id: "coat-racks",
    title: "Handcrafted Bourbon Barrel Stave Coat Racks",
    subtitle: "Wall-mounted stave racks with dark western styling and premium reclaimed wood finish.",
    price: "$59.99",
    cta: "Order coat rack",
    pieces: [
      { name: "Hat Wall Pair", detail: "Dual hat display", src: "/photos/img_5662.jpg", alt: "White and dark hats on handcrafted stave rack", focus: "object-[50%_50%]" },
      { name: "White Hat + Denim", detail: "Lifestyle setup", src: "/photos/img_5664.jpg", alt: "White hat and denim on handcrafted stave rack", focus: "object-[52%_48%]" },
      { name: "Stave Rack Detail", detail: "Rich brown finish", src: "/video/strip-5639-poster.jpg", alt: "Close-up of handcrafted stave coat rack", focus: "object-[50%_48%]" },
      { name: "Mounted in Home", detail: "Premium interior look", src: "/video/hero-5641-poster.jpg", alt: "Coat rack mounted in styled home interior", focus: "object-[50%_44%]" },
    ],
  },
  {
    id: "flight-boards",
    title: "Flight Boards",
    subtitle: "Handcrafted bourbon barrel flight boards for bars, mantels, and gift-ready setups.",
    price: "$39.99",
    cta: "Order flight board",
    pieces: [
      { name: "Bourbon Flight Board", detail: "Core product", src: "/photos/img_6098.jpg", alt: "Handcrafted bourbon barrel flight board", focus: "object-[50%_52%]" },
      { name: "Candle + Flight Setup", detail: "Home bar styling", src: "/photos/img_5671.jpg", alt: "Flight board with candlelit home setup", focus: "object-[50%_48%]" },
      { name: "Bar Detail", detail: "Styled display", src: "/video/fireplace-poster.jpg", alt: "Bourbon bar setup with handcrafted flight board", focus: "object-[50%_60%]" },
      { name: "Whiskey Tasting Scene", detail: "Gift-ready look", src: "/video/hero-poster.jpg", alt: "Whiskey tasting setup with handcrafted board", focus: "object-[50%_58%]" },
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
    <section className="relative w-full bg-espresso text-parchment pb-22 lg:pb-28">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <p className="plate-bright !tracking-[0.22em]">Shop by collection</p>
        <h2 className="mt-4 display text-[clamp(2rem,4.4vw,3.8rem)] text-cream">
          Three product lines.
          <br />
          <span className="display-italic text-gilt-2">Faster path to purchase.</span>
        </h2>

        <div className="rule mt-10" />

        <div className="mt-10 space-y-14 lg:space-y-18">
          {collections.map((collection) => (
            <section key={collection.id} id={collection.id} className="space-y-5">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="display text-[clamp(1.9rem,4vw,3.2rem)] text-cream">{collection.title}</h3>
                    <span className="inline-flex items-center border border-gilt/60 bg-[#1d120a] px-3 py-1 text-[12px] tracking-[0.08em] uppercase text-gilt-2">
                      {collection.price}
                    </span>
                  </div>
                  <p className="mt-2 text-parchment/78 leading-[1.8]">{collection.subtitle}</p>
                </div>

                <div className="flex items-center gap-2.5">
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
                className="no-scrollbar overflow-x-auto snap-x snap-mandatory"
              >
                <div className="flex gap-4 lg:gap-5 min-w-max pb-2">
                  {collection.pieces.map((piece) => (
                    <article
                      key={piece.src + piece.name}
                      className="w-[78vw] sm:w-[44vw] lg:w-[29vw] xl:w-[24vw] shrink-0 snap-start"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden border border-parchment/15 bg-char">
                        <Image
                          src={piece.src}
                          alt={piece.alt}
                          fill
                          sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 29vw, (min-width: 640px) 44vw, 78vw"
                          className={`object-cover transition-transform duration-700 hover:scale-[1.03] ${piece.focus ?? ""}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
                      </div>

                      <div className="mt-3">
                        <h4 className="display text-[30px] text-cream leading-[0.95]">{piece.name}</h4>
                        <p className="mt-1 text-parchment/72 text-[12px] tracking-[0.08em] uppercase">{piece.detail}</p>
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
