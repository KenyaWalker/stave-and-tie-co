const steps: { label: string; body: string; icon: React.ReactNode }[] = [
  {
    label: "Design",
    body: "Share your station, name, or sentiment. We shape the concept together before any carving starts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M3 21l3.5-1L20 6.5a2.1 2.1 0 1 0-3-3L3.5 17l-1 4Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 6.5l3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Craft",
    body: "Reclaimed white oak from retired bourbon barrels — engraved by hand in a Kentucky workshop.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M9 3l3 3-7 7-3-3 7-7Z" strokeLinejoin="round" />
        <path d="M14 8l7 7-2 2-7-7" strokeLinejoin="round" />
        <path d="M19 19l-3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Finish",
    body: "Sanded smooth, sealed, and inspected — a finish you can feel as much as see.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" aria-hidden>
        <path d="M4 14c2-1 5-1 8 0s6 1 8 0" strokeLinecap="round" />
        <path d="M4 18c2-1 5-1 8 0s6 1 8 0" strokeLinecap="round" />
        <path d="M9 4l2 6h2l2-6" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Deliver",
    body: "Wrapped, packaged, and shipped from Kentucky — ready to hang the day it arrives.",
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

export default function Process() {
  return (
    <section
      id="process"
      className="relative w-full bg-paper text-ink pt-20 lg:pt-24 pb-20 lg:pb-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 reveal">
          <div>
            <p className="plate-dark">The Process</p>
            <h2 className="mt-4 display text-[clamp(2.2rem,5vw,4.2rem)] text-ink max-w-[18ch]">
              Four steps.
              <br />
              <span className="display-italic text-[#7a5630]">No shortcuts.</span>
            </h2>
          </div>
          <p className="text-ink/65 max-w-[42ch] leading-[1.8] text-[15px]">
            Every commission moves the same way &mdash; from the first conversation to the day it
            arrives at your door.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-10 gap-y-12 reveal">
          {steps.map((step, idx) => (
            <div key={step.label} className="relative">
              <div className="flex items-center gap-4">
                <span className="block h-9 w-9 lg:h-10 lg:w-10 text-[#7a5630]">
                  {step.icon}
                </span>
                <span className="text-[12px] tracking-[0.22em] uppercase text-ink/55">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 display text-[26px] lg:text-[30px] text-ink">{step.label}</h3>
              <p className="mt-3 text-ink/70 text-[14.5px] leading-[1.75] max-w-[28ch]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
