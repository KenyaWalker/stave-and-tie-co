import Image from "next/image";
import Link from "next/link";

type Product = {
  href: string;
  cta: string;
  name: string;
  body: string;
  price: string;
  src: string;
  alt: string;
};

const products: Product[] = [
  {
    href: "/commission",
    cta: "Start a Barrel Head",
    name: "Custom Barrel Head",
    body: "Full-size barrel head art personalized with names, logos, dates, badges, or meaningful details.",
    price: "Starting at $125",
    src: "/photos/img_5927.jpg",
    alt: "Custom engraved bourbon barrel head wall art",
  },
  {
    href: "/commission",
    cta: "Start a Stave Rack",
    name: "Bourbon Stave Coat Rack",
    body: "A reclaimed stave turned into a warm, functional wall piece with rich grain and everyday use.",
    price: "Starting at $59.99",
    src: "/photos/img_5664.jpg",
    alt: "Reclaimed bourbon stave coat rack on a wall",
  },
  {
    href: "/commission",
    cta: "Start a Flight Board",
    name: "Bourbon Flight Board",
    body: "A handcrafted tasting board made for home bars, gifts, gatherings, and slow pours.",
    price: "Starting at $39.99",
    src: "/photos/composite-split/flight-board-staves.jpg",
    alt: "Handcrafted bourbon barrel stave flight board with metal end caps",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="relative w-full overflow-hidden bg-espresso text-cream pb-20 pt-10 lg:pb-24 lg:pt-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(60%,420px)] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(216,177,90,0.07),transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 reveal">
          <div className="max-w-[50ch]">
            <p className="plate-bright">Featured Work</p>
            <h2 className="mt-4 display text-[clamp(1.85rem,3.6vw,3.25rem)] text-cream max-w-[22ch] text-balance leading-[0.98]">
              Custom pieces with weight, warmth, and story.
            </h2>
            <p className="mt-4 text-[13px] font-light leading-[1.72] text-parchment/72 max-w-[48ch] lg:text-[14px]">
              From family names and firehouse logos to wedding gifts, home bars, and bourbon rooms,
              every piece starts with reclaimed barrel wood and ends with something made just for you.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden lg:inline-flex link-rule text-cream/85 text-[12px] tracking-[0.22em] uppercase"
          >
            View the Shop →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {products.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-sm border border-cream/10 bg-char/55 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4)] card-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-inset ring-white/5">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 31vw, 92vw"
                  className="object-cover brightness-[0.95] transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col flex-1 px-5 py-5 lg:px-6 lg:py-6">
                <h3 className="display text-[1.35rem] leading-tight text-cream lg:text-[1.5rem]">{p.name}</h3>
                <p className="mt-3 flex-1 text-[13.5px] font-light leading-[1.65] text-parchment/70">
                  {p.body}
                </p>
                <p className="mt-4 display text-[1.1rem] text-gilt-2">{p.price}</p>
                <Link href={p.href} className="btn-gilt mt-5 justify-center w-full text-[11px] tracking-[0.18em]">
                  {p.cta} <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <Link href="/shop" className="link-rule text-cream/85 text-[12px] tracking-[0.22em] uppercase">
            View the Shop →
          </Link>
        </div>
      </div>
    </section>
  );
}
