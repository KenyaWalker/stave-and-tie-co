const items: { title: string; body: string; icon: React.ReactNode }[] = [
  {
    title: "Real Barrel Wood",
    body: "Reclaimed oak with grain, char, rings, and character you can see.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <ellipse cx="12" cy="12" rx="6" ry="9" />
        <path d="M6 9c4 1.2 8 1.2 12 0M6 15c4 1.2 8 1.2 12 0" />
      </svg>
    ),
  },
  {
    title: "Made to Order",
    body: "Every piece is created around your names, dates, logos, or story.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M4 7l8-4 8 4v10l-8 4-8-4V7Z" strokeLinejoin="round" />
        <path d="M4 7l8 4 8-4M12 21V11" />
      </svg>
    ),
  },
  {
    title: "One Maker's Standard",
    body: "Designed, engraved, finished, and checked with care before it leaves the bench.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path
          d="M4 20h13M7 20V11l8-8 3 3-8 8H7Z"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Ready to Display",
    body: "Finished pieces arrive sealed, polished, and ready for the room they were made for.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="What stays true in every piece"
      className="relative w-full overflow-hidden border-t border-ink/10 bg-paper py-14 text-ink lg:py-16"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(142,94,44,0.06),transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12">
        <h2 className="display max-w-[40ch] text-[clamp(1.65rem,3vw,2.35rem)] leading-snug text-ink">
          What stays true in every piece.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:mt-14 lg:grid-cols-4 lg:gap-x-10">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-start gap-4">
              <span className="block h-8 w-8 text-bronze lg:h-9 lg:w-9">{item.icon}</span>
              <div>
                <h3 className="display text-[17px] leading-snug text-ink lg:text-[19px]">{item.title}</h3>
                <p className="mt-2.5 max-w-[28ch] text-[13.5px] leading-[1.65] text-ink/65">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
