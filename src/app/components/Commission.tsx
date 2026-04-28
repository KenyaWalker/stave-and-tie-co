const steps = [
  {
    title: "Tell us your idea",
    body: "Share names, dates, logos, or inspiration photos.",
  },
  {
    title: "Approve your proof",
    body: "You review and approve the design before carving starts.",
  },
  {
    title: "Receive your piece",
    body: "Your finished barrel head arrives ready to display.",
  },
];

export default function Commission() {
  return (
    <section className="relative w-full bg-espresso text-parchment pb-24 lg:pb-30">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s) => (
            <div key={s.title}>
              <h3 className="display text-[30px] text-cream">{s.title}</h3>
              <p className="mt-3 text-parchment/78 leading-[1.85] text-[14.5px] max-w-[34ch]">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="rule mt-14" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-8 display text-[clamp(1.8rem,3.8vw,3.3rem)] text-cream !leading-[1.12]">
            Crafted by a local fireman.
            <br />
            <span className="display-italic text-gilt-2">Designed for your story.</span>
          </p>
          <div className="lg:col-span-4 lg:justify-self-end flex flex-col gap-3">
            <a href="mailto:hello@staveandtie.co?subject=Commission%20Inquiry" className="btn-gilt justify-center">
              Begin a Commission <span>→</span>
            </a>
            <a href="https://www.etsy.com" className="text-sm text-parchment/75 hover:text-gilt-2 transition-colors text-center lg:text-right">
              Prefer Etsy? Start there
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
