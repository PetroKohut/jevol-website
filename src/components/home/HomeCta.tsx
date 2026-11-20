// "Need a consultation?" band shown above the contact form (homepage and product pages).
export function HomeCta() {
  return (
    <section className="border-t-2 border-brand bg-mist text-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-8 sm:py-12 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[2.25rem]">
            Потрібна консультація щодо оснащення лабораторії?
          </h2>
          <p className="mt-2 text-muted">
            Наші спеціалісти допоможуть підібрати оптимальне обладнання для
            ваших завдань.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="btn-lift inline-flex h-12 items-center gap-2 rounded-md bg-brand px-6 text-sm font-bold text-on-brand transition-colors hover:bg-brand-dark"
          >
            Зв&apos;язатися з нами <span aria-hidden>→</span>
          </a>
          <a href="tel:+380504709561" className="text-lg font-bold hover:underline">
            +38 050 470 95 61
          </a>
        </div>
      </div>
    </section>
  );
}
