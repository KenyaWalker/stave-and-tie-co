import Image from "next/image";
import Link from "next/link";
import OurStoryFamilyMontage from "./OurStoryFamilyMontage";

export default function OurStoryPageBody() {
  return (
    <article className="grain relative bg-espresso text-parchment">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_45%_at_50%_-5%,rgba(216,177,90,0.085),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_100%_60%,rgba(62,38,22,0.35),transparent_50%)]" />

      <div className="relative">
        <section className="reveal mx-auto max-w-[1480px] px-6 pb-14 pt-10 md:px-8 md:pb-16 md:pt-11 lg:px-12 lg:pb-20 lg:pt-14">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-x-12 lg:gap-y-10 xl:gap-x-16">
            <div className="mx-auto w-full max-w-[900px] lg:mx-0 lg:max-w-none lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] w-full max-h-[min(92svh,960px)] overflow-hidden rounded-sm bg-char/25 shadow-[0_12px_48px_-16px_rgba(0,0,0,0.55)] ring-1 ring-cream/[0.06] lg:aspect-[3/4] lg:max-h-[min(calc(100vh-7rem),960px)]">
                <Image
                  src="/photos/our-story-hero.jpg"
                  alt="Lexington crew at the firehouse with Ladder 6"
                  fill
                  className="origin-center scale-[0.95] object-cover object-[50%_48%]"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
              </div>
            </div>

            <div className="flex min-w-0 flex-col items-center justify-center text-center lg:pt-2">
              <div className="mx-auto w-full max-w-[40ch] space-y-5">
                <p className="text-pretty text-[14px] font-light leading-[1.8] text-parchment/82 sm:text-[15px]">
                  As a firefighter and paramedic, he knows what it means to make something count. At the
                  bench, that same care goes into every barrel head, stave rack, and flight board.
                </p>
                <p className="text-pretty text-[13.5px] font-light leading-[1.75] text-parchment/75 sm:text-[14px]">
                  Made from reclaimed barrel wood. Built one at a time. Finished like it matters.
                </p>
                <figure className="mx-auto max-w-[36ch] border-t border-b border-gilt-2/25 py-5">
                  <blockquote className="display-italic text-[0.95rem] leading-snug text-cream/90 sm:text-[1.05rem]">
                    &ldquo;If it carries your name, your station, your family, or your story, it deserves to
                    be made with care.&rdquo;
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <OurStoryFamilyMontage />

        <section className="reveal relative border-t border-cream/[0.09] bg-char/40 px-6 py-14 md:px-8 md:py-16 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1480px]">
            <p className="plate-bright tracking-[0.22em]">The Bench</p>
            <h2 className="mt-4 display text-[clamp(1.5rem,3.2vw,2.15rem)] leading-[1.12] text-cream text-balance max-w-[20ch] md:max-w-none">
              Retired barrel heads, oak and honest work.
            </h2>
            <p className="mt-6 max-w-[65ch] text-pretty text-[15px] font-light leading-[1.7] text-parchment/82 lg:text-[16px]">
              Bourbon barrel heads from Kentucky—white oak that aged with the spirit, real char, and a patina
              you can&apos;t buy new.
            </p>

            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-8 lg:mt-12 lg:gap-x-16">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.26em] text-gilt-2">At a glance</h3>
                <ul className="mt-4 space-y-2.5 text-[14px] font-light leading-[1.65] text-parchment/80 lg:text-[15px]">
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gilt-2/80" aria-hidden />
                    <span>
                      <strong className="font-medium text-cream/95">Material.</strong> Solid white oak, dried,
                      original metal hoop.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gilt-2/80" aria-hidden />
                    <span>
                      <strong className="font-medium text-cream/95">Size.</strong> ~23&quot; diameter—full
                      barrel head.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gilt-2/80" aria-hidden />
                    <span>
                      <strong className="font-medium text-cream/95">Engraving.</strong> Deep precision carve so
                      your layout stays sharp and permanent.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.26em] text-gilt-2">
                  Customization &amp; finish
                </h3>
                <p className="mt-4 text-[14px] font-light leading-[1.65] text-parchment/80 lg:text-[15px]">
                  Monograms to full logos—personal work meant to stay on the wall.
                </p>
                <ul className="mt-3 space-y-2.5 text-[14px] font-light leading-[1.65] text-parchment/80 lg:text-[15px]">
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gilt-2/80" aria-hidden />
                    <span>
                      <strong className="font-medium text-cream/95">Proofs.</strong> Approve a digital layout
                      on detailed work before carving.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gilt-2/80" aria-hidden />
                    <span>
                      <strong className="font-medium text-cream/95">Seal.</strong> Cleaned, sanded, clear
                      coat—char and color protected.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-cream/10 pt-9 md:mt-12 md:pt-10">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.26em] text-gilt-2">
                Often ordered for
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-5 lg:gap-x-6 text-[14px] font-light leading-[1.6] text-parchment/80 lg:text-[15px]">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gilt-2/80" aria-hidden />
                  <span>Weddings, guest books, registry</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gilt-2/80" aria-hidden />
                  <span>Home bars &amp; bourbon rooms</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gilt-2/80" aria-hidden />
                  <span>Retirement, groomsmen, milestones</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gilt-2/80" aria-hidden />
                  <span>Business &amp; distillery signage</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gilt-2/80" aria-hidden />
                  <span>Housewarmings</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="reveal relative overflow-hidden border-t border-cream/[0.1] bg-[#120a06] px-6 py-16 text-center text-cream md:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(244,234,212,0.14)_2px,rgba(244,234,212,0.14)_3px)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-[22rem] w-[min(90vw,42rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(216,177,90,0.12),transparent)] blur-2xl"
            aria-hidden
          />
          <div className="relative z-1 mx-auto max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-gilt-2/90">Custom Order</p>
            <h2 className="mt-6 display text-[clamp(1.75rem,4vw,3rem)] leading-tight text-cream md:tracking-tight">
              Bring your story to the wood.
            </h2>
            <p className="mt-7 text-pretty text-[17px] font-light leading-[1.88] text-cream/[0.72]">
              Share the name, logo, date, phrase, badge, photo, or idea you have in mind. We&apos;ll help
              shape it into a custom piece made with care from the first sketch to the final finish.
            </p>
            <div className="mt-11 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
              <Link
                href="/commission"
                className="btn-gilt min-w-56 justify-center rounded-[2px] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-gilt-2/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120a06] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Start a Custom Piece <span aria-hidden>→</span>
              </Link>
              <Link
                href="/shop"
                className="rounded-sm px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gilt-2/92 underline-offset-[5px] transition-colors hover:text-gilt-2 hover:underline focus-visible:ring-2 focus-visible:ring-gilt-2/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120a06]"
              >
                View the Shop
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
