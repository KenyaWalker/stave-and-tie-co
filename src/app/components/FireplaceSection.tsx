import Image from "next/image";

const supportPhotos = [
  { src: "/photos/firemen.jpg", alt: "Firefighters with a completed custom barrel head", caption: "Crafted by a local fireman" },
  { src: "/photos/img_6089.jpg", alt: "Fire station custom piece delivered", caption: "Supported by local firehouses" },
  { src: "/photos/img_6329.jpg", alt: "Paramedic holding a custom EMS barrel head", caption: "Trusted by first responders" },
];

export default function FireplaceSection() {
  return (
    <section className="relative w-full bg-char text-parchment pt-8 lg:pt-10 pb-14 lg:pb-16">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <h2 className="display text-[clamp(1.9rem,4vw,3.5rem)] text-cream max-w-[18ch]">
          Firehouse-built quality,
          <br />
          <span className="display-italic text-gilt-2">styled for high-end homes.</span>
        </h2>
      </div>

      <div className="mt-8 relative left-1/2 -translate-x-1/2 w-screen bg-[#4a2817] overflow-hidden">
        <div className="relative h-[230px] md:h-[290px] lg:h-[360px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/video/hero-5641-v4.mp4"
            poster="/video/hero-5641-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a150c]/35 via-transparent to-[#2a150c]/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4a2817]/30 via-transparent to-[#4a2817]/32" />
        </div>
      </div>

      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
          {supportPhotos.map((photo) => (
            <figure key={photo.src} className="border border-parchment/15 bg-espresso/45 p-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 31vw, 92vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
              <figcaption className="mt-2 text-sm text-parchment/85">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
