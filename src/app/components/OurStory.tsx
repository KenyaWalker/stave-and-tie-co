import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="grain relative w-full bg-char text-cream pt-20 lg:pt-24 pb-20 lg:pb-24">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="relative aspect-[4/5] overflow-hidden border border-cream/10">
              <Image
                src="/photos/firemen.jpg"
                alt="Firefighters with a custom-engraved bourbon barrel head"
                fill
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover brightness-[0.92] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-6 reveal">
            <p className="plate-bright">Our Story</p>
            <h2 className="mt-4 display text-[clamp(2.4rem,5.4vw,4.6rem)] text-cream">
              Discipline meets
              <br />
              <span className="display-italic text-gilt-2">white oak.</span>
            </h2>
            <div className="mt-7 space-y-5 text-cream/82 text-[16px] lg:text-[17px] leading-[1.85] font-light max-w-[54ch]">
              <p>
                Built in Kentucky between shifts at the firehouse — every piece is shaped,
                engraved, and finished by hand. No production line. No shortcuts.
              </p>
              <p>
                Reclaimed white oak from retired bourbon barrels gives each piece its character.
                The discipline of the job gives it everything else.
              </p>
            </div>
            <Link href="/our-story" className="mt-9 btn-gilt">
              Read Our Story <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
