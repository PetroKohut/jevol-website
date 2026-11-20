import type { Metadata } from "next";
import Link from "next/link";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeContact } from "@/components/home/HomeContact";
import { ContactPhoto } from "@/components/ContactPhoto";
import { CONTACT_PHOTO_PATH } from "@/lib/images";
import { storageUrl } from "@/lib/storage";

const TITLE = "Контакти JEVOL Україна — обладнання для техогляду";
const DESCRIPTION =
  "Зв'яжіться з JEVOL — офіційним представником обладнання для техогляду в Україні. WhatsApp, Viber, email. Консультація та замовлення обладнання для лабораторій.";
const URL = "https://jevol.com.ua/contact";
// No dedicated contact photo yet — reuse the homepage hero photo as the OG fallback.
const OG_IMAGE = storageUrl("images", "stacionarni-galmivni-stendi/23.webp");

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: URL,
  about: { "@id": "https://jevol.com.ua/#organization" },
};

const ICONS = {
  chat: "M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12Z",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z",
  mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 1 8 6 8-6",
} as const;

const contacts = [
  { label: "WhatsApp", value: "+38 050 470 95 61", href: "https://wa.me/380504709561", icon: "chat" },
  { label: "Viber", value: "+38 050 470 95 61", href: "viber://chat?number=%2B380504709561", icon: "chat" },
  { label: "Телефон", value: "+38 050 470 95 61", href: "tel:+380504709561", icon: "phone" },
  { label: "Email", value: "info.jevol@gmail.com", href: "mailto:info.jevol@gmail.com", icon: "mail" },
] as const;

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-surface font-[family-name:var(--font-manrope)] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHeader />

      <main className="flex-1">
        {/* Header band */}
        <section className="bg-navy text-white">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
            <p className="hero-in text-xs text-slate-400">
              <Link href="/" className="hover:text-white">
                Головна
              </Link>{" "}
              / <span className="text-slate-200">Контакти</span>
            </p>
            <h1 className="hero-in hero-in-2 mt-3 text-[1.9rem] font-extrabold leading-tight tracking-tight sm:text-5xl">
              Контакти
            </h1>
          </div>
        </section>

        {/* Contact cards */}
        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-4 rounded-xl border border-rule bg-surface p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-on-brand">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
                      <path d={ICONS[c.icon]} />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted">
                      {c.label}
                    </span>
                    <span className="mt-0.5 block break-words text-[17px] font-extrabold leading-snug">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            {CONTACT_PHOTO_PATH && (
              <div className="mt-8">
                <ContactPhoto />
              </div>
            )}
          </div>
        </section>

        <HomeContact showContacts={false} />
      </main>

      <HomeFooter />
    </div>
  );
}
