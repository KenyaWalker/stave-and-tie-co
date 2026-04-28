import Image from "next/image";

type Piece = {
  name: string;
  detail: string;
  src: string;
  alt: string;
};

const featured: Piece[] = [
  { name: "The Beshears", detail: "Wedding monogram", src: "/photos/img_5793.jpg", alt: "Beshears monogram barrel head" },
  { name: "Station One", detail: "Firehouse piece", src: "/photos/img_5927.jpg", alt: "Station One firehouse barrel head" },
  { name: "Powered by Faith", detail: "Custom devotional", src: "/photos/img_6277.jpg", alt: "Powered by Faith barrel head" },
  { name: "One Truck", detail: "Engine commission", src: "/photos/img_6306.jpg", alt: "One Truck custom barrel head" },
  { name: "West Virginia 302", detail: "Department piece", src: "/photos/img_6011.jpg", alt: "302 fire department barrel head" },
  { name: "Kentucky Wildcats", detail: "Sports commission", src: "/photos/img_6029.jpg", alt: "Kentucky Wildcats barrel head" },
];

export default function Lookbook() {
  return (
    <section className="relative w-full bg-espresso text-parchment pb-24 lg:pb-30">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {featured.map((piece) => (
            <article key={piece.src} className="group">
              <div className="relative aspect-[4/5] overflow-hidden border border-parchment/15 bg-char">
                <Image
                  src={piece.src}
                  alt={piece.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 92vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="display text-[30px] text-cream">{piece.name}</h3>
                <p className="mt-1 text-parchment/72 text-[13px] tracking-[0.08em] uppercase">{piece.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
