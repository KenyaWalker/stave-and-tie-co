const steps: { label: string; body: string; icon: React.ReactNode }[] = [
  {
    label: "Share the Idea",
    body: "Send the name, date, logo, badge, phrase, reference photo, or rough concept you have in mind. It does not need to be perfect. A few details are enough to start.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M3 21l3.5-1L20 6.5a2.1 2.1 0 1 0-3-3L3.5 17l-1 4Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 6.5l3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Approve the Design",
    body: "We turn your idea into a clean layout and send it over before engraving begins. You will know what the piece is going to look like before it touches the wood.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M9 3l3 3-7 7-3-3 7-7Z" strokeLinejoin="round" />
        <path d="M14 8l7 7-2 2-7-7" strokeLinejoin="round" />
        <path d="M19 19l-3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Made by Hand",
    body: "Your piece is engraved, sanded, sealed, and finished using reclaimed barrel wood with natural grain, character, warmth, and age.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M4 14c2-1 5-1 8 0s6 1 8 0" strokeLinecap="round" />
        <path d="M4 18c2-1 5-1 8 0s6 1 8 0" strokeLinecap="round" />
        <path d="M9 4l2 6h2l2-6" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Ready for Home",
    body: "Once finished, it is packed with care and sent ready to hang, gift, pour from, or put to use.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M3 7h11v9H3z" strokeLinejoin="round" />
        <path d="M14 10h4l3 3v3h-7" strokeLinejoin="round" />
        <circle cx="7" cy="17.5" r="1.5" />
        <circle cx="17.5" cy="17.5" r="1.5" />
      </svg>
    ),
  },
];

type ProcessProps = {
  showBandHeader?: boolean;
  /** "editorial" = paper/ink (e.g. home). "workshop" = char/cream (e.g. process page steps). */
  variant?: "editorial" | "workshop";
};

export default function Process({ showBandHeader = true, variant = "editorial" }: ProcessProps) {
  const workshop = variant === "workshop";

  return (
    <section
      className={`relative w-full overflow-hidden ${
        workshop
          ? "border-t border-cream/10 bg-char text-parchment pb-12 lg:pb-14"
          : "bg-paper pb-10 text-ink lg:pb-12"
      } ${showBandHeader ? "pt-10 lg:pt-12" : workshop ? "pt-10 lg:pt-12" : "pt-8 lg:pt-11"}`}
    >
      {workshop ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_90%_100%_at_50%_0%,rgba(216,177,90,0.08),transparent_65%)]"
          aria-hidden
        />
      ) : null}
      <div className={`relative mx-auto max-w-[1480px] px-5 lg:px-10 ${workshop ? "lg:px-12" : ""}`}>
        {showBandHeader && (
          <div className="reveal flex flex-col gap-2 border-b border-ink/10 pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <p className="plate-dark">The Process</p>
              <h2 className="mt-1.5 display max-w-[26ch] text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[0.98] text-ink">
                Four steps. <span className="display-italic text-[#7a5630]">No shortcuts.</span>
              </h2>
            </div>
            <p className="max-w-[36ch] shrink-0 text-[13px] leading-[1.55] text-ink/62">
              One lane from first talk to delivery — same wood, same bench.
            </p>
          </div>
        )}

        <div
          className={`reveal grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 sm:gap-y-7 lg:gap-x-12 ${
            showBandHeader ? "mt-5 lg:mt-6" : "mt-0"
          }`}
        >
          {steps.map((step) => (
            <div
              key={step.label}
              className={
                workshop
                  ? "flex flex-row gap-3 rounded-sm border border-cream/10 bg-espresso/25 px-4 py-5 sm:gap-4 lg:gap-4 lg:px-5 lg:py-6"
                  : "flex flex-row gap-3 lg:gap-4"
              }
            >
              <div className="flex shrink-0 flex-col items-center gap-1.5 pt-0.5">
                <span
                  className={`block h-8 w-8 lg:h-9 lg:w-9 ${
                    workshop ? "text-gilt-2" : "text-[#7a5630]"
                  }`}
                >
                  {step.icon}
                </span>
              </div>
              <div className="min-w-0">
                <h3
                  className={`display text-[1.15rem] leading-none lg:text-[1.35rem] ${
                    workshop ? "text-cream" : "text-ink"
                  }`}
                >
                  {step.label}
                </h3>
                <p
                  className={`mt-2 text-[13px] leading-[1.6] lg:text-[13.5px] ${
                    workshop ? "text-parchment/78" : "text-ink/68"
                  }`}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
