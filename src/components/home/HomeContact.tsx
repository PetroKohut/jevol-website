import { ContactForm } from "@/components/ContactForm";

export function HomeContact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10 lg:py-12">
        <div className="grid overflow-hidden rounded-2xl bg-surface shadow-xl lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-brand p-6 text-on-brand sm:p-10">
            <span aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
            <span aria-hidden className="pointer-events-none absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-white/[0.07]" />
            <h2 className="relative text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[2.25rem]">
              Заповніть форму зворотного зв&apos;язку
            </h2>
            <p className="relative mt-4 text-base text-on-brand/90">
              Ми зв&apos;яжемось з вами для консультації
            </p>
            <div className="relative mt-6 grid gap-4 sm:mt-10">
              <a
                href="mailto:info.jevol@gmail.com"
                className="flex w-fit items-center gap-3 font-semibold transition-opacity hover:opacity-80"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                    <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 1 8 6 8-6" />
                  </svg>
                </span>
                <span className="break-all">info.jevol@gmail.com</span>
              </a>
              <a
                href="https://wa.me/380504709561"
                className="btn-lift inline-flex h-12 w-fit items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-brand-ink transition-colors hover:bg-white/90"
              >
                Написати нам у WhatsApp
              </a>
            </div>
          </div>
          <div className="p-5 sm:p-10">
            <ContactForm variant="home" />
          </div>
        </div>
      </div>
    </section>
  );
}
