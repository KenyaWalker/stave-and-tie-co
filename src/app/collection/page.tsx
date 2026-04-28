import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import Lookbook from "../components/Lookbook";

export const metadata: Metadata = {
  title: "Collection — The Stave & Tie Co.",
  description:
    "Browse custom engraved bourbon barrel wall art from The Stave & Tie Co. in Kentucky.",
};

export default function CollectionPage() {
  return (
    <>
      <PageHeader
        title="The Collection"
        italic="custom work gallery"
        body="A curated set of recent commissions across weddings, firehouses, and custom home decor."
      />
      <Lookbook />

      <section className="relative w-full bg-espresso text-parchment pb-24">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="rule" />
          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="display text-[clamp(2rem,4.4vw,3.8rem)] text-cream">
              Want your own design?
            </h2>
            <Link href="/commission" className="btn-gilt w-fit">
              Start a commission <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
