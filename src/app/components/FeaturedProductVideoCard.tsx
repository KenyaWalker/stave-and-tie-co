"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export type VideoProduct = {
  href: string;
  name: string;
  tagline: string;
  price: string;
  src: string;
  alt: string;
  videoSrc: string;
};

export default function FeaturedProductVideoCard({ product }: { product: VideoProduct }) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dialogId = useId();
  const titleId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const v = videoRef.current;
    void v?.play().catch(() => {});
    return () => {
      v?.pause();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={dialogId}
        className="group card-lift block w-full cursor-pointer border border-cream/10 bg-char/55 text-left transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gilt-2/50"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={product.src}
            alt={product.alt}
            fill
            sizes="(min-width: 768px) 31vw, 92vw"
            className="object-cover brightness-[0.95] transition-transform duration-[1200ms] group-hover:scale-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent" />
          <span className="pointer-events-none absolute bottom-3 left-3 rounded-sm bg-espresso/75 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cream/90 backdrop-blur-sm">
            Tap to watch
          </span>
        </div>
        <div className="flex items-end justify-between gap-4 px-5 py-5 lg:px-6 lg:py-6">
          <div className="min-w-0">
            <h3 className="display text-[26px] leading-none text-cream lg:text-[30px]">{product.name}</h3>
            <p className="mt-2 truncate text-[13px] tracking-wide text-cream/65">{product.tagline}</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="display text-[20px] leading-none text-gilt-2 lg:text-[22px]">{product.price}</p>
          </div>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          id={dialogId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-espresso/88 backdrop-blur-sm"
            aria-label="Close video"
            onClick={close}
          />
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-sm border border-cream/15 bg-char shadow-2xl shadow-black/60">
            <div className="flex items-center justify-between gap-3 border-b border-cream/10 px-4 py-3">
              <p id={titleId} className="display text-[18px] text-cream sm:text-[20px]">
                {product.name}
              </p>
              <button
                type="button"
                onClick={close}
                className="shrink-0 rounded-sm px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cream/75 transition-colors hover:bg-cream/10 hover:text-cream"
              >
                Close
              </button>
            </div>
            <div className="relative aspect-video w-full bg-ink">
              <video
                ref={videoRef}
                className="h-full w-full object-contain"
                src={product.videoSrc}
                controls
                playsInline
                preload="metadata"
              />
            </div>
            <div className="flex flex-col gap-2 border-t border-cream/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] text-cream/60">Shot in the shop — finish and grain vary by barrel.</p>
              <Link
                href={product.href}
                className="btn-gilt shrink-0 justify-center py-2.5 text-center text-[12px] sm:inline-flex sm:py-2"
                onClick={close}
              >
                View in shop <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
