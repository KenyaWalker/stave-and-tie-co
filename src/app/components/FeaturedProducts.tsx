import Image from "next/image";
import Link from "next/link";

type Product = {
  href: string;
  name: string;
  tagline: string;
  price: string;
  src: string;
  alt: string;
};

const products: Product[] = [
  {
    href: "/collection",
    name: "Barrel Head",
    tagline: "Custom-engraved · Reclaimed white oak",
    price: "$159.99",
    src: "/photos/img_5927.jpg",
    alt: "Custom-engraved bourbon barrel head wall art",
  },
  {
    href: "/collection",
    name: "Coat Rack",
    tagline: "Reclaimed bourbon stave · Hand-finished",
    price: "$59.99",
    src: "/photos/img_5664.jpg",
    alt: "Reclaimed bourbon stave coat rack with hats and jacket",
  },
  {
    href: "/collection",
    name: "Flight Board",
    tagline: "Bourbon flight · Made to order",
    price: "$39.99",
    src: "/photos/img_5793.jpg",
    alt: "Custom bourbon flight board",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="relative w-full bg-espresso text-cream pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 reveal">
          <div>
            <p className="plate-bright">Featured Pieces</p>
            <h2 className="mt-4 display text-[clamp(2.4rem,5vw,4.4rem)] text-cream max-w-[18ch]">
              Three signatures.
              <br />
              <span className="display-italic text-gilt-2">Made one at a time.</span>
            </h2>
          </div>
          <Link
            href="/collection"
            className="hidden lg:inline-flex link-rule text-cream/85 text-[12px] tracking-[0.22em] uppercase"
          >
            View All →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group card-lift block bg-char/55 border border-cream/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 31vw, 92vw"
                  className="object-cover brightness-[0.95] transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent" />
              </div>
              <div className="px-5 lg:px-6 py-5 lg:py-6 flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="display text-[26px] lg:text-[30px] text-cream leading-none">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-cream/65 text-[13px] tracking-wide truncate">
                    {p.tagline}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="display text-[20px] lg:text-[22px] text-gilt-2 leading-none">
                    {p.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <Link
            href="/collection"
            className="link-rule text-cream/85 text-[12px] tracking-[0.22em] uppercase"
          >
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}
