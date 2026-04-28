const steps = [
  {
    title: "Conversation",
    body: "Share your idea, names, and details. We shape the concept together before any carving starts.",
  },
  {
    title: "Digital proof",
    body: "You approve the design on your exact barrel layout before production begins.",
  },
  {
    title: "Carve and finish",
    body: "Deep engraving, clean sanding, protective seal, and final quality check before delivery.",
  },
];

export default function Process() {
  return (
    <section className="relative w-full bg-char text-parchment py-20 lg:py-24">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <h2 className="display text-[clamp(2rem,4.4vw,3.8rem)] text-cream">
          Three steps.
          <br />
          <span className="display-italic text-gilt-2">One heirloom result.</span>
        </h2>

        <div className="rule mt-10" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {steps.map((step) => (
            <div key={step.title}>
              <h3 className="display text-[29px] text-cream">{step.title}</h3>
              <p className="mt-4 text-parchment/78 text-[14.5px] leading-[1.85] max-w-[36ch]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
