"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links: { href: string; label: string }[] = [
  { href: "/collection", label: "Shop" },
  { href: "/our-story", label: "Our Story" },
  { href: "/#process", label: "Process" },
  { href: "/commission", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-ink/8"
          : "bg-paper/0 backdrop-blur-0 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <div className="flex items-center justify-between h-[68px] lg:h-[76px]">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <span className="relative h-8 w-8 lg:h-9 lg:w-9 rounded-full overflow-hidden border border-ink/15 bg-white/95 shrink-0">
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
                scrolled ? "text-ink" : "text-cream"
              }`}
            >
              The Stave <span className="display-italic text-gilt-2">&amp;</span> Tie Co.
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((l) => {
              const active = l.href.startsWith("/#")
                ? false
                : l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-[12px] tracking-[0.18em] uppercase font-medium transition-colors ${
                    scrolled
                      ? active
                        ? "text-ink"
                        : "text-ink/70 hover:text-ink"
                      : active
                      ? "text-cream"
                      : "text-cream/80 hover:text-cream"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/commission"
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors ${
              scrolled
                ? "border border-ink text-ink hover:bg-ink hover:text-cream"
                : "border border-cream/85 text-cream hover:bg-cream hover:text-ink"
            }`}
          >
            Start Your Piece
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
