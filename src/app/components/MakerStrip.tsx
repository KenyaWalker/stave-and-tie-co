import Image from "next/image";

export default function MakerStrip() {
  return (
    <section className="relative w-full bg-espresso text-parchment pb-22 lg:pb-28">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <figure className="lg:col-span-7">
            <div className="relative w-full aspect-[4/5] overflow-hidden border border-parchment/15 bg-char">
              <Image
                src="/photos/firemen.jpg"
                alt="Three Lexington firefighters with a custom-engraved bourbon barrel head"
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/58 via-transparent to-transparent" />
            </div>
          </figure>

          <div className="lg:col-span-5 lg:pt-5">
            <p className="plate-bright !tracking-[0.22em]">The maker story</p>
            <p className="mt-5 display text-[clamp(1.7rem,2.8vw,2.5rem)] !leading-[1.16] text-cream">
              A local fireman with a craftsman&rsquo;s discipline.
            </p>
            <p className="mt-6 text-parchment/82 text-[15px] leading-[1.85] max-w-[44ch]">
              Every piece is carved between firehouse shifts in a small Kentucky workshop.
              No shortcuts. No rushed cuts. Just real material and careful finishing.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-5 max-w-md">
              <Spec value="23”" label="Full barrel size" />
              <Spec value="Oak" label="Reclaimed white oak" />
              <Spec value="1/1" label="Custom made" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="display text-[32px] text-gilt-2 leading-none">{value}</div>
      <div className="mt-2 text-[12px] tracking-[0.08em] uppercase text-parchment/78">{label}</div>
    </div>
  );
}
