import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Commission from "../components/Commission";

export const metadata: Metadata = {
  title: "Commission — The Stave & Tie Co.",
  description:
    "Start your custom engraved bourbon barrel wall art commission with The Stave & Tie Co.",
};

export default function CommissionPage() {
  return (
    <>
      <PageHeader
        title="Commission a Piece"
        italic="premium custom, made local"
        body="From first conversation to final delivery, your piece is built by hand in Kentucky and finished to last."
      />
      <Commission />
    </>
  );
}
