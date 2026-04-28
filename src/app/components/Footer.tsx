import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-char text-parchment border-t border-parchment/15">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div>
            <span className="display text-[26px] !leading-none text-cream">
              The Stave <span className="display-italic text-gilt-2">&amp;</span> Tie Co.
            </span>
            <p className="mt-3 text-parchment/75 text-[14px] leading-[1.7] max-w-[34ch]">
              Handmade custom bourbon barrel wall art from Kentucky.
            </p>
          </div>

          <div className="md:justify-self-center md:text-center">
            <span className="plate-bright">Lexington, Kentucky</span>
            <p className="mt-2 text-parchment/70 text-sm">Workshop visits by appointment</p>
          </div>

          <div className="md:justify-self-end flex flex-col gap-2 md:items-end">
            <a href="mailto:hello@staveandtie.co" className="plate link-rule !text-parchment">
              hello@staveandtie.co
            </a>
            <div className="flex items-center gap-4 text-sm text-parchment/75">
              <a href="#" className="link-rule">Etsy</a>
              <a href="#" className="link-rule">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-3 text-parchment/60 text-xs">
          <span>© {new Date().getFullYear()} The Stave &amp; Tie Co.</span>
          <div className="flex items-center gap-5">
            <Link href="/our-story" className="link-rule">Our Story</Link>
            <Link href="/collection" className="link-rule">Collection</Link>
            <Link href="/commission" className="link-rule">Commission</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
