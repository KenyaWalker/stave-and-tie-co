import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Commission from "../components/Commission";

export const metadata: Metadata = {
  title: "Custom Order | The Stave & Tie Co.",
  description:
    "Start a custom barrel head, bourbon stave coat rack, or flight board made from reclaimed barrel wood.",
};

export default function CommissionPage() {
  return (
    <>
      <PageHeader
        variant="editorial"
        eyebrow="Custom Order"
        title="Start with an idea. We'll help shape the rest."
        body="A custom piece starts with a simple conversation. Tell us what you're imagining — a family name, station logo, wedding date, business mark, badge, phrase, or rough idea — and we'll help turn it into something worth hanging."
        supporting="You'll see a design proof before the work begins, so there are no surprises once your piece is in the wood."
      />
      <Commission />
    </>
  );
}
