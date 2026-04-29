"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links: { href: string; label: string }[] = [
  { href: "/shop", label: "Shop" },
  { href: "/our-story", label: "Our Story" },
  { href: "/process", label: "Process" },
  { href: "/commission", label: "Custom Order" },
];

/** Routes that use the solid paper bar + ink nav (editorial-style landing). */
const LIGHT_LANDING_ROUTES = ["/process", "/commission", "/shop", "/our-story"];

export default function Nav() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const lightLanding = LIGHT_LANDING_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`));
  const barSolid = scrolled || lightLanding;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        barSolid
          ? "bg-paper/90 backdrop-blur-md border-b border-ink/10 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12),0_1px_0_rgba(255,255,255,0.6)_inset]"
          : "bg-paper/0 backdrop-blur-0 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <div className="flex items-center justify-between h-[68px] lg:h-[76px]">
          <Link href="/" className="group/logo flex items-center gap-3 min-w-0">
            <span className="relative h-8 w-8 lg:h-9 lg:w-9 rounded-full overflow-hidden border border-ink/15 bg-white/95 shrink-0 shadow-sm transition-[box-shadow,transform] duration-300 group-hover/logo:shadow-[0_0_0_2px_rgba(216,177,90,0.35),0_4px_14px_-4px_rgba(0,0,0,0.2)] group-hover/logo:-translate-y-px motion-reduce:group-hover/logo:transform-none">
              <Image
                src="/brand/logo-5670.jpg"
                alt="The Stave & Tie Co."
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span
              className={`display text-[17px] lg:text-[18px] leading-none truncate transition-colors ${
                barSolid ? "text-ink" : "text-cream"
              }`}
            >
              The Stave &amp; Tie Co.
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative pb-1 text-[12px] tracking-[0.18em] uppercase font-medium transition-colors border-b-2 ${
                    barSolid
                      ? active
                        ? "text-ink border-gilt-2"
                        : "text-ink/70 hover:text-ink border-transparent hover:border-ink/15"
                      : active
                      ? "text-cream border-gilt-2"
                      : "text-cream/80 hover:text-cream border-transparent hover:border-cream/25"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/commission"
            className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap px-4 py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden ${
              barSolid
                ? "border border-ink text-ink hover:bg-ink hover:text-cream hover:shadow-md hover:shadow-ink/15 focus-visible:outline-ink/40"
                : "border border-cream/85 text-cream hover:bg-cream hover:text-ink hover:shadow-lg hover:shadow-black/25 focus-visible:outline-cream/60"
            }`}
          >
            Custom Order
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
