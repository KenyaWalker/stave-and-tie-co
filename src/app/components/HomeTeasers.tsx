import Image from "next/image";
import Link from "next/link";

export default function HomeTeasers() {
  return (
    <section className="relative w-full bg-espresso text-parchment py-18 lg:py-24">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="display text-[clamp(2rem,4.6vw,3.8rem)] text-cream">
            Western luxury,
            <br />
            <span className="display-italic text-gilt-2">done clean.</span>
          </h2>
          <p className="text-parchment/80 max-w-[44ch] leading-[1.8]">
            The hat visuals are now a central design cue — dark, refined, and high-end.
          </p>
        </div>

        <div className="rule mt-10" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-9">
          <Card
            href="/collection"
            title="The Collection"
            subtitle="Premium custom pieces, each engraved to order."
            src="/photos/img_5662.jpg"
            alt="White and dark hats on dark wood wall mount"
            cta="Browse collection"
          />
          <Card
            href="/atelier"
            title="The Atelier"
            subtitle="Built by hand in Kentucky between firehouse shifts."
            src="/photos/img_5664.jpg"
            alt="White hat on dark wood rack with denim jacket"
            cta="Meet the maker"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ href, title, subtitle, src, alt, cta }: { href: string; title: string; subtitle: string; src: string; alt: string; cta: string }) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden border border-parchment/20">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 92vw"
          className="object-cover brightness-[0.74] contrast-[1.08] saturate-[0.9] transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/88 via-black/30 to-black/15" />
        <div className="absolute left-5 bottom-5 right-5">
          <h3 className="display text-cream text-[clamp(2rem,4vw,3.2rem)]">{title}</h3>
          <p className="mt-2 text-parchment/90 text-[15px]">{subtitle}</p>
          <span className="mt-4 inline-flex items-center gap-2 plate-bright !tracking-[0.22em]">
            {cta} <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
