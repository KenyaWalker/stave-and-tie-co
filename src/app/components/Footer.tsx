import Image from "next/image";
import Link from "next/link";

const navLinks: { href: string; label: string }[] = [
  { href: "/collection", label: "Shop" },
  { href: "/our-story", label: "Our Story" },
  { href: "/#process", label: "Process" },
  { href: "/commission", label: "Contact" },
];

const social: { href: string; label: string }[] = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Etsy" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#150c06] text-cream/80 border-t border-cream/10">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative h-9 w-9 rounded-full overflow-hidden border border-cream/15 bg-white/95 shrink-0">
                <Image
                  src="/brand/logo-5670.jpg"
                  alt="The Stave & Tie Co."
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
              <span className="display text-[20px] text-cream leading-none">
                The Stave <span className="display-italic text-gilt-2">&amp;</span> Tie Co.
              </span>
            </Link>
            <p className="mt-5 text-cream/65 text-[14px] leading-[1.75] max-w-[34ch]">
              Handcrafted bourbon barrel pieces, made in Kentucky by a working fireman.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="plate-bright">Explore</p>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-cream/75 hover:text-cream text-[14px] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="plate-bright">Contact</p>
            <ul className="mt-5 space-y-2.5 text-[14px]">
              <li>
                <a
                  href="mailto:hello@staveandtie.co"
                  className="text-cream/75 hover:text-cream transition-colors"
                >
                  hello@staveandtie.co
                </a>
              </li>
              <li className="text-cream/60">Lexington, Kentucky</li>
            </ul>
            <div className="mt-6 flex items-center gap-5">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-cream/70 hover:text-cream text-[13px] tracking-[0.18em] uppercase transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 text-cream/55 text-[12px]">
          <span>© {new Date().getFullYear()} The Stave &amp; Tie Co. All rights reserved.</span>
          <span>Made in Kentucky</span>
        </div>
      </div>
    </footer>
  );
}
