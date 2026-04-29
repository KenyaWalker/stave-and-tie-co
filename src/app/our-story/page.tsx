import type { Metadata } from "next";
import OurStoryPageBody from "../components/OurStoryPageBody";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Our Story | The Stave & Tie Co.",
  description:
    "The story behind The Stave & Tie Co., a firefighter-owned shop making custom barrel head art, stave racks, and flight boards by hand.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHeader
        variant="editorial"
        eyebrow="Our Story"
        title="Reclaimed oak, refined by hand."
        body="Custom heads, racks, and flight boards crafted from barrel wood — carefully designed, carved, sealed, and finished with care, patience, and pride."
        supporting="The Stave & Tie Co. is built from two things: a love for working with his hands, and a life spent serving his community."
      />
      <OurStoryPageBody />
    </>
  );
}
