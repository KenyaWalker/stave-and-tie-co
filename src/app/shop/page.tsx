import type { Metadata } from "next";
import Link from "next/link";
import Lookbook from "../components/Lookbook";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Shop | The Stave & Tie Co.",
  description:
    "Browse custom barrel head art, bourbon stave coat racks, and flight boards handcrafted from reclaimed barrel wood.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        variant="editorial"
        eyebrow="Shop the Work"
        title="Real pieces. Real wood. Made one at a time."
        body="Browse barrel heads, stave racks, and flight boards from the bench — real pieces for homes, gifts, and gatherings. Every photo is shop work, not stock; use them as starting points for your own custom order."
      />
      <Lookbook />

      <section className="relative w-full border-t border-parchment/10 bg-char pb-20 pt-14 text-parchment lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
            <div className="max-w-[42ch]">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-gilt-2">Next Step</p>
              <h2 className="mt-3 text-balance display text-[clamp(1.85rem,3.8vw,3.15rem)] leading-[0.98] text-cream">
                Have an idea in mind?
              </h2>
              <p className="mt-4 text-pretty text-[15px] font-light leading-[1.85] text-parchment/75">
                Send the names, dates, logos, or details you want included. We&apos;ll help turn the idea
                into a clean design before the work begins.
              </p>
            </div>
            <Link href="/commission" className="btn-gilt w-full shrink-0 justify-center sm:w-fit">
              Custom Order <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
