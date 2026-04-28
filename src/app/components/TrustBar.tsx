const items: { title: string; body: string; icon: React.ReactNode }[] = [
  {
    title: "Crafted by a Working Fireman",
    body: "Built between shifts. Real discipline, real hands.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M5 17V11a7 7 0 0 1 14 0v6" strokeLinecap="round" />
        <path d="M3 17h18" strokeLinecap="round" />
        <path d="M12 4v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Authentic Bourbon Barrels",
    body: "Reclaimed white oak from retired barrels.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <ellipse cx="12" cy="12" rx="6" ry="9" />
        <path d="M6 9c4 1.2 8 1.2 12 0M6 15c4 1.2 8 1.2 12 0" />
      </svg>
    ),
  },
  {
    title: "Made in Kentucky",
    body: "Designed, carved, and finished here.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Each Piece Made to Order",
    body: "No two alike. Yours, only yours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M4 7l8-4 8 4v10l-8 4-8-4V7Z" strokeLinejoin="round" />
        <path d="M4 7l8 4 8-4M12 21V11" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="grain relative w-full bg-espresso text-cream py-16 lg:py-20 border-y border-cream/10">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-10 gap-y-10">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-start gap-4">
              <span className="block h-8 w-8 lg:h-9 lg:w-9 text-gilt-2">{item.icon}</span>
              <div>
                <h3 className="display text-[18px] lg:text-[20px] text-cream leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-cream/65 text-[13.5px] leading-[1.6] max-w-[26ch]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
