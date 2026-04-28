"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/atelier", label: "Atelier" },
  { href: "/collection", label: "Collection" },
  { href: "/commission", label: "Commission" },
];

export default function Nav() {
  const pathname = usePathname() || "/";

  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-4 lg:pt-6">
        <div className="flex items-center justify-between rounded-[2px] border border-black/10 bg-cream/90 px-4 py-3 lg:px-5 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <span className="relative h-9 w-9 rounded-full overflow-hidden border border-[#8e6a3d]/35 bg-white/90 shrink-0">
              <Image
                src="/brand/logo-5670.jpg"
                alt="The Stave & Tie Co. logo"
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="display text-[#1a120b] text-[18px] leading-none truncate">
              The Stave <span className="display-italic text-[#a77d46]">&amp;</span> Tie Co.
            </span>
          </Link>

          <div className="flex items-center gap-4 lg:gap-8">
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {links.slice(0, 2).map((l) => {
                const active = pathname.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`plate !tracking-[0.26em] transition-colors ${
                      active ? "!text-[#7a5630]" : "!text-[#302015] hover:!text-[#7a5630]"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/commission"
              className="inline-flex items-center gap-2 border border-[#6f4c2a] px-3.5 py-2.5 text-[10px] tracking-[0.22em] uppercase text-[#3a2616] hover:bg-[#6f4c2a] hover:text-[#f3ead4] transition-colors"
            >
              Start Your Piece
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
