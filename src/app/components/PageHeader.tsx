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
      <div
        className={
          editorial
            ? "relative mx-auto max-w-[1480px] px-6 pb-12 pt-24 lg:px-12 lg:pb-14 lg:pt-28"
            : "relative mx-auto max-w-[1480px] px-6 pb-16 pt-28 lg:px-12 lg:pb-20 lg:pt-36"
        }
      >
        <p className={`tracking-[0.22em] ${editorial ? "plate-dark" : "plate-bright"}`}>{eyebrow}</p>
        <h1
          id={titleId}
          className={`max-w-[min(100%,44rem)] text-balance display leading-[0.95] ${
            editorial
              ? "mt-4 text-[clamp(1.85rem,3.6vw,3.15rem)] text-ink lg:mt-4"
              : "mt-5 text-[clamp(2.35rem,7.5vw,5.25rem)] text-cream lg:mt-6"
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
            className={`max-w-[52ch] text-pretty font-light ${
              editorial
                ? "mt-4 text-[14.5px] leading-[1.7] text-ink/72 lg:mt-5"
                : "mt-7 text-[15.5px] leading-[1.9] lg:mt-8 text-parchment/83"
            }`}
          >
            {body}
          </p>
        )}
        {supporting && (
          <p
            className={`max-w-[52ch] text-pretty font-light ${
              editorial
                ? "mt-3 text-[14px] leading-[1.68] text-ink/62"
                : "mt-5 text-[14.5px] leading-[1.85] text-parchment/70"
            }`}
          >
            {supporting}
          </p>
        )}
      </div>
    </section>
  );
}
