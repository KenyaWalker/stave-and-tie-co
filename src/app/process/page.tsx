import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import Process from "../components/Process";
import TrustBar from "../components/TrustBar";

export const metadata: Metadata = {
  title: "Process | The Stave & Tie Co.",
  description:
    "See how custom barrel head art, stave racks, and flight boards are designed, engraved, finished, and shipped.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        variant="editorial"
        eyebrow="The Process"
        title="From idea to finished piece."
        body="A simple, personal process from first sketch to final delivery — so you know exactly what is being made before the work begins."
      />
      <Process showBandHeader={false} variant="workshop" />
      <TrustBar />
      <section className="relative w-full overflow-hidden border-t border-cream/10 bg-espresso pb-20 pt-14 text-cream lg:pb-24 lg:pt-16">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_85%_100%_at_50%_100%,rgba(216,177,90,0.07),transparent_65%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-[1480px] flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end lg:px-12">
          <div className="max-w-[42ch]">
            <p className="plate-bright text-parchment/85">After This</p>
            <h2 className="mt-3 text-balance display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[0.98] text-cream">
              Say the word and we&apos;ll start the sketch.
            </h2>
            <p className="mt-3 text-pretty text-[14.5px] leading-[1.75] text-cream/75">
              The first step is simple. Tell us what you want included, and we&apos;ll help shape the
              idea before the work begins.
            </p>
          </div>
          <Link href="/commission" className="btn-gilt w-full shrink-0 justify-center sm:w-fit">
            Custom Order <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
