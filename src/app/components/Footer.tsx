import Image from "next/image";
import Link from "next/link";
import { ETSY_SHOP_URL } from "../../lib/external-links";

const TEL_HREF = "tel:+18596910852";
const TEL_LABEL = "(859) 691-0852";
const EMAIL = "2justinwalker3@gmail.com";

const navLinks: { href: string; label: string }[] = [
  { href: "/shop", label: "Shop" },
  { href: "/our-story", label: "Our Story" },
  { href: "/process", label: "Process" },
  { href: "/commission", label: "Custom Order" },
];

const social: { href: string; label: string }[] = [
  { href: "https://www.instagram.com/thestaveandtieco/", label: "Instagram" },
  { href: "https://www.facebook.com/TheStaveandTieCo", label: "Facebook" },
  { href: ETSY_SHOP_URL, label: "Etsy" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-transparent bg-paper text-ink">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gilt/35 to-transparent"
        aria-hidden
      />
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-5 py-8 sm:py-9 md:px-8">
        <div className="mx-auto w-full max-w-[40ch] text-center">
          <div className="flex justify-center">
            <Link
              href="/"
              className="relative inline-block transition-opacity hover:opacity-85 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              <span className="absolute right-full top-1/2 mr-2.5 size-8 -translate-y-1/2 overflow-hidden rounded-full border border-ink/12 bg-white">
                <Image
                  src="/brand/logo-5670.jpg"
                  alt=""
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </span>
              <span className="display text-[1.05rem] leading-none sm:text-[1.15rem]">
                The Stave &amp; Tie Co.
              </span>
            </Link>
          </div>

          <p className="mt-4 text-pretty text-[13.5px] font-light leading-[1.65] text-ink/68">
            Custom barrel head art, stave racks, and flight boards made by hand from reclaimed barrel
            wood.
          </p>
        </div>

        <nav className="mt-5 w-full text-center" aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-y-2 text-[13px] [&>li]:flex [&>li]:items-center">
            {navLinks.map((l, i) => (
              <li key={l.href}>
                {i > 0 ? (
                  <span className="mx-2.5 text-ink/25 sm:mx-3" aria-hidden>
                    ·
                  </span>
                ) : null}
                <Link
                  href={l.href}
                  className="whitespace-nowrap px-0.5 text-ink/78 transition-colors hover:text-ink focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-5 flex w-full flex-col items-center justify-center gap-2.5 sm:w-auto sm:flex-row sm:gap-3">
          <a
            href={TEL_HREF}
            aria-label={`Call ${TEL_LABEL}`}
            className="inline-flex w-full min-w-48 max-w-[20rem] items-center justify-center border border-ink px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:w-auto sm:max-w-none"
          >
            Call
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex w-full min-w-48 max-w-[20rem] items-center justify-center border border-ink px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:w-auto sm:max-w-none"
          >
            Email the Shop
          </a>
        </div>

        <nav className="mt-6 flex w-full justify-center" aria-label="Social and marketplace">
          <ul className="flex flex-col items-center gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
            {social.map((s) => (
              <li key={s.label} className="w-full sm:w-auto">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full min-w-48 items-center justify-center border border-ink/35 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-ink/78 transition-colors hover:border-ink hover:bg-ink hover:text-cream focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:min-w-32 sm:max-w-none"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 w-full border-t border-ink/10 pt-5 text-center text-[11px] leading-relaxed text-ink/50">
          <p className="text-pretty">
            Handcrafted in Kentucky · Firefighter-owned · Made one at a time
          </p>
          <p className="mt-3 text-[10px] italic leading-snug text-ink/42">
            A Walker Studio build
          </p>
        </div>
      </div>
    </footer>
  );
}
