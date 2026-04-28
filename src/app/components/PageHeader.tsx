type Props = {
  title: string;
  italic?: string;
  body?: string;
};

export default function PageHeader({ title, italic, body }: Props) {
  return (
    <section className="relative w-full bg-espresso text-parchment pt-32 lg:pt-40 pb-14 lg:pb-18">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <p className="plate-bright !tracking-[0.22em]">The Stave &amp; Tie Co.</p>
        <h1 className="mt-6 display text-[clamp(2.7rem,8vw,6.5rem)] text-cream leading-[0.92]">
          {title}
          {italic && (
            <>
              {" "}
              <span className="display-italic text-gilt-2">{italic}</span>
            </>
          )}
        </h1>

        {body && (
          <p className="mt-6 max-w-[62ch] text-parchment/82 text-[15.5px] leading-[1.85]">{body}</p>
        )}
      </div>
    </section>
  );
}
