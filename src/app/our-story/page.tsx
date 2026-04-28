import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import MakerStrip from "../components/MakerStrip";
import Process from "../components/Process";

export const metadata: Metadata = {
  title: "Our Story — The Stave & Tie Co.",
  description:
    "Inside the Kentucky workshop of The Stave & Tie Co. — handcrafted bourbon barrel art made between firehouse shifts.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHeader
        title="Our Story"
        italic="where each piece starts"
        body="A focused workshop process with premium finishing standards and local firehouse roots."
      />
      <MakerStrip />
      <Process />

      <section className="relative w-full bg-espresso text-parchment pb-24">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="rule" />
          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="display text-[clamp(2rem,4.4vw,3.8rem)] text-cream">
              Ready for yours?
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
