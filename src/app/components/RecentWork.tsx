import Image from "next/image";
import Link from "next/link";

const commissions: { src: string; alt: string; label: string }[] = [
  { src: "/photos/img_5927.jpg", alt: "Station One — The Big House — Lexington, KY barrel head", label: "Station One · Lexington, KY" },
  { src: "/photos/img_6089.jpg", alt: "Kentucky Fire Commission — Fleet Facilities barrel head", label: "Kentucky Fire Commission" },
  { src: "/photos/img_6306.jpg", alt: "W.V. 302 sawmill-style barrel head", label: "W.V. 302 · Est. 2017" },
  { src: "/photos/img_6329.jpg", alt: "Boyd County Emergency Medical Services barrel head", label: "Boyd County EMS" },
  { src: "/photos/img_5977.jpg", alt: "Custom firehouse barrel head commission", label: "Firehouse Commission" },
  { src: "/photos/img_6011.jpg", alt: "Custom firefighter memorial barrel head", label: "Memorial Piece" },
  { src: "/photos/img_6009.jpg", alt: "Custom station crew barrel head", label: "Station Crew" },
  { src: "/photos/firemen.jpg", alt: "Firefighters with their custom-engraved barrel head", label: "Delivered" },
];

export default function RecentWork() {
  return (
    <section className="grain relative w-full bg-char text-parchment pt-20 lg:pt-28 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="ornament">
          <span className="ornament-mark">No. II · Recent Commissions</span>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="display text-[clamp(2.4rem,5.6vw,4.6rem)] text-cream max-w-[16ch]">
            Built for firehouses,
            <br />
            <span className="display-italic text-gilt-2">station by station.</span>
          </h2>
          <p className="text-parchment/80 max-w-[46ch] leading-[1.85]">
            Each piece is hand-engraved to honor a station, a crew, or a fallen brother.
            No clip art, no shortcuts, no two alike.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {commissions.map((piece, idx) => (
            <figure
              key={piece.src}
              className="group relative aspect-[3/4] overflow-hidden border border-parchment/12"
            >
              <Image
                src={piece.src}
                alt={piece.alt}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 768px) 31vw, 47vw"
                className="object-cover brightness-[0.9] contrast-[1.05] transition-transform duration-[1200ms] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <figcaption className="absolute left-3 bottom-3 right-3 flex items-end gap-2">
                <span className="numeral text-[1.05rem] leading-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="plate-bright !tracking-[0.26em] text-gilt-3 text-[0.6rem] leading-tight">
                  {piece.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-parchment/70 max-w-[46ch] leading-[1.85] text-[14px]">
            Every commission begins with your story &mdash; a station, a name, a sentiment.
          </p>
          <Link href="/commission" className="btn-gilt self-start">
            Commission your piece <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
