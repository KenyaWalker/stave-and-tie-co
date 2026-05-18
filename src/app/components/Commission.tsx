import { ETSY_SHOP_URL } from "../../lib/external-links";
import { hasStripeDepositLink, STRIPE_DEPOSIT_URL } from "../../lib/payments";

const howItWorks = [
  {
    title: "Tell Us What You Want",
    body: "Send names, dates, logos, reference photos, or even a rough idea. A few details are enough to get started.",
  },
  {
    title: "Review Your Proof",
    body: "We create a layout for approval before engraving begins. You will have a chance to confirm the design first.",
  },
  {
    title: "We Build It",
    body: "Once approved, your piece is engraved, sanded, sealed, and finished by hand.",
  },
  {
    title: "It Comes Home",
    body: "Your finished piece is packed with care and sent ready to display, gift, or use.",
  },
];

export default function Commission() {
  return (
    <>
      <section
        aria-labelledby="custom-order-steps-heading"
        className="grain relative w-full overflow-hidden border-t border-cream/10 bg-char text-parchment"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_90%_100%_at_50%_0%,rgba(216,177,90,0.09),transparent_65%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1480px] px-6 pb-16 pt-12 lg:px-12 lg:pb-20 lg:pt-14">
          <h2 id="custom-order-steps-heading" className="sr-only">
            How a custom order works
          </h2>

          <p className="plate-bright tracking-[0.22em]">How a custom order works</p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:mt-14 lg:grid-cols-4 lg:gap-8">
            {howItWorks.map((s) => (
              <div
                key={s.title}
                className="rounded-sm border border-cream/10 bg-espresso/30 px-4 py-6 shadow-[0_12px_36px_-24px_rgba(0,0,0,0.5)] lg:px-5 lg:py-7"
              >
                <h3 className="display text-[1.15rem] leading-tight text-cream lg:text-[1.28rem]">{s.title}</h3>
                <p className="mt-3 max-w-[36ch] text-[14px] font-light leading-[1.75] text-parchment/78 lg:text-[14.5px]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full border-t border-ink/10 bg-paper py-14 text-ink md:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(142,94,44,0.06),transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="max-w-[48ch]">
            <h3 className="display text-[clamp(1.25rem,2.5vw,1.75rem)] leading-tight text-ink">
              Not sure what to include?
            </h3>
            <p className="mt-4 text-[15px] font-light leading-[1.82] text-ink/70">
              Start with anything that matters: a last name, station number, wedding date, badge, family motto,
              business logo, team, scripture, memorial detail, or favorite phrase. Rough ideas are welcome.
            </p>
          </div>

          <div className="rule my-12 max-w-2xl opacity-40" />

          <div className="max-w-[48ch]">
            <p className="text-[14.5px] font-light leading-[1.82] text-ink/68">
              After your proof is approved, we&apos;ll send a secure checkout link for the deposit. Prefer Etsy?
              You can order there too — same maker, same wood, same care.
            </p>
            <a
              href={ETSY_SHOP_URL}
              className="mt-4 inline-block text-[12px] font-medium uppercase tracking-[0.18em] text-bronze underline-offset-4 transition-colors hover:text-bourbon hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Etsy
            </a>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden border-t border-cream/10 bg-espresso py-16 text-cream md:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_90%_80%_at_50%_100%,rgba(216,177,90,0.06),transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1480px] px-6 text-center lg:px-12 lg:text-left">
          <h3 className="display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight text-cream">Let&apos;s build yours.</h3>
          <p className="mx-auto mt-5 max-w-[48ch] text-pretty text-[15px] font-light leading-[1.85] text-cream/80 lg:mx-0">
            Send the idea when you&apos;re ready. We&apos;ll help make it clean, personal, and built to last.
          </p>
          <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="mailto:thestaveandtieco@gmail.com?subject=Custom%20Order%20Inquiry" className="btn-gilt justify-center sm:min-w-56">
              Start a Custom Piece <span aria-hidden>→</span>
            </a>
            {hasStripeDepositLink ? (
              <a
                href={STRIPE_DEPOSIT_URL}
                className="justify-center border border-parchment/35 bg-transparent px-5 py-3 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-cream/90 transition-colors hover:border-gilt-2/60 hover:text-gilt-2 sm:inline-flex sm:min-w-56"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pay deposit (Stripe) <span aria-hidden>→</span>
              </a>
            ) : null}
            <a
              href="/shop"
              className="btn-ghost justify-center border border-cream/30 text-cream sm:min-w-56"
            >
              Shop Examples <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
