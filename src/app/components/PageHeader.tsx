type Props = {
  /** Small caps line above the headline. */
  eyebrow?: string;
  title: string;
  italic?: string;
  body?: string;
  supporting?: string;
  /** "hero" = dark espresso banner (default). "editorial" = paper/ink, single flat plane. */
  variant?: "hero" | "editorial";
};

function pageTitleId(title: string) {
  const slug = title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `page-${slug || "heading"}`;
}

export default function PageHeader({
  eyebrow = "The Stave & Tie Co.",
  title,
  italic,
  body,
  supporting,
  variant = "hero",
}: Props) {
  const titleId = pageTitleId(title);
  const editorial = variant === "editorial";

  return (
    <section
      aria-labelledby={titleId}
      className={
        editorial
          ? "relative w-full border-b border-ink/10 bg-paper text-ink shadow-[0_12px_40px_-24px_rgba(0,0,0,0.08)]"
          : "relative w-full overflow-hidden border-b border-parchment/10 bg-espresso text-parchment"
      }
    >
      {!editorial ? (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_70%_at_50%_-25%,rgba(216,177,90,0.07),transparent_52%)]"
          aria-hidden
        />
      ) : null}
      <div className="relative mx-auto max-w-[1480px] px-6 pb-16 pt-28 lg:px-12 lg:pb-20 lg:pt-36">
        <p className={`tracking-[0.22em] ${editorial ? "plate-dark" : "plate-bright"}`}>{eyebrow}</p>
        <h1
          id={titleId}
          className={`mt-5 max-w-[min(100%,44rem)] text-balance display text-[clamp(2.35rem,7.5vw,5.25rem)] leading-[0.95] lg:mt-6 ${
            editorial ? "text-ink" : "text-cream"
          }`}
        >
          {title}
          {italic && (
            <>
              {" "}
              <span className={`display-italic ${editorial ? "text-bronze" : "text-gilt-2"}`}>{italic}</span>
            </>
          )}
        </h1>

        {body && (
          <p
            className={`mt-7 max-w-[52ch] text-pretty text-[15.5px] font-light leading-[1.9] lg:mt-8 ${
              editorial ? "text-ink/72" : "text-parchment/83"
            }`}
          >
            {body}
          </p>
        )}
        {supporting && (
          <p
            className={`mt-5 max-w-[52ch] text-pretty text-[14.5px] font-light leading-[1.85] ${
              editorial ? "text-ink/65" : "text-parchment/70"
            }`}
          >
            {supporting}
          </p>
        )}
      </div>
    </section>
  );
}
