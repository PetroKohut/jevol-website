"use client";

import { useRef, useState, type FormEvent } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

type Status = "idle" | "submitting" | "success" | "error";

const DEFAULT_ERROR = "Сталася помилка. Спробуйте ще раз.";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const ICON = {
  user: "M20 21v-1a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v1M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z",
  mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 1 8 6 8-6",
  message: "M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12Z",
} as const;

function FieldIcon({ name, top = "top-1/2 -translate-y-1/2" }: { name: keyof typeof ICON; top?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`pointer-events-none absolute left-4 h-5 w-5 text-muted transition-colors peer-focus:text-brand-ink ${top}`}
    >
      <path d={ICON[name]} />
    </svg>
  );
}

export function ContactForm({
  theme = "light",
  variant = "default",
}: {
  theme?: "light" | "dark";
  variant?: "default" | "home";
} = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  function resetTurnstile() {
    turnstileRef.current?.reset();
    setTurnstileToken(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          // Honeypot — left blank by real users, hidden from view.
          company: data.get("company"),
          turnstileToken,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        setErrorMessage(result?.error || DEFAULT_ERROR);
        setStatus("error");
        resetTurnstile();
        return;
      }

      setStatus("success");
      form.reset();
      resetTurnstile();
    } catch {
      setErrorMessage(DEFAULT_ERROR);
      setStatus("error");
      resetTurnstile();
    }
  }

  if (status === "success" && variant === "home") {
    return (
      <div className="flex items-start gap-4 rounded-xl bg-brand/10 p-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-on-brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
            <path d="m5 12 5 5 9-10" />
          </svg>
        </span>
        <p className="text-lg font-bold leading-snug text-ink">
          Дякуємо! Ми зв&apos;яжемось з вами найближчим часом.
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <p className="text-base font-semibold text-zinc-900">
        Дякуємо! Ми зв&apos;яжемось з вами найближчим часом.
      </p>
    );
  }

  const inputClass =
    "h-12 w-full rounded-lg border-2 border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none transition-colors focus:border-orange-500";

  // Turnstile is optional in environments where the site key isn't
  // configured (e.g. local dev without Cloudflare set up) — the widget is
  // simply skipped and the submit button isn't gated by it.
  const turnstileRequired = Boolean(TURNSTILE_SITE_KEY);
  const canSubmit =
    status !== "submitting" && (!turnstileRequired || Boolean(turnstileToken));

  if (variant === "home") {
    const field =
      "peer h-14 w-full rounded-xl border border-rule bg-surface pb-1 pl-12 pr-4 pt-5 text-[15px] text-ink outline-none transition placeholder-transparent focus:border-brand focus:ring-4 focus:ring-brand/15";
    const label =
      "pointer-events-none absolute left-12 top-4 origin-left text-[15px] text-muted transition-all duration-200 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-brand-ink peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs";
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <input id="cf-name" name="name" type="text" required placeholder=" " className={field} />
          <FieldIcon name="user" />
          <label htmlFor="cf-name" className={label}>Ваше Ім&apos;я</label>
        </div>
        <div className="relative">
          <input id="cf-phone" name="phone" type="tel" placeholder=" " className={field} />
          <FieldIcon name="phone" />
          <label htmlFor="cf-phone" className={label}>+380 XX XXX XX XX</label>
        </div>
        <div className="relative">
          <input id="cf-email" name="email" type="email" required placeholder=" " className={field} />
          <FieldIcon name="mail" />
          <label htmlFor="cf-email" className={label}>Email</label>
        </div>
        <div className="relative">
          <textarea
            id="cf-message"
            name="message"
            required
            placeholder=" "
            rows={4}
            className={`${field} h-auto resize-y pt-6`}
          />
          <FieldIcon name="message" top="top-4" />
          <label htmlFor="cf-message" className={label}>Ваше питання:</label>
        </div>
        <input
          type="text"
          name="company"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />
        <label className="flex items-start gap-3 text-sm text-muted">
          <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 rounded" />
          Погоджуюсь з обробкою персональних даних
        </label>
        {turnstileRequired && (
          <Turnstile
            ref={turnstileRef}
            siteKey={TURNSTILE_SITE_KEY!}
            options={{ theme, language: "uk" }}
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setTurnstileToken(null)}
            onExpire={() => setTurnstileToken(null)}
          />
        )}
        <button
          type="submit"
          disabled={!canSubmit}
          className="btn-lift inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-sm font-bold uppercase tracking-wide text-on-brand transition-colors hover:bg-brand-dark disabled:opacity-50 sm:w-fit sm:px-8"
        >
          {status === "submitting" ? "Надсилання…" : "Відправити"}
          <span aria-hidden>→</span>
        </button>
        {status === "error" && (
          <p className="text-sm font-semibold text-red-600">{errorMessage}</p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="name" type="text" required placeholder="Ваше Ім'я" className={inputClass} />
      <input
        name="phone"
        type="tel"
        placeholder="+380 XX XXX XX XX"
        className={inputClass}
      />
      <input name="email" type="email" required placeholder="Email" className={inputClass} />
      <textarea
        name="message"
        required
        placeholder="Ваше питання:"
        rows={4}
        className="w-full rounded-lg border-2 border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:border-orange-500"
      />
      <input
        type="text"
        name="company"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <label className="flex items-start gap-2 text-xs text-zinc-500">
        <input type="checkbox" name="consent" required className="mt-0.5" />
        Погоджуюсь з обробкою персональних даних
      </label>
      {turnstileRequired && (
        <Turnstile
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY!}
          options={{ theme, language: "uk" }}
          onSuccess={(token) => setTurnstileToken(token)}
          onError={() => setTurnstileToken(null)}
          onExpire={() => setTurnstileToken(null)}
        />
      )}
      <button
        type="submit"
        disabled={!canSubmit}
        className="h-12 w-full rounded-md bg-orange-500 text-sm font-bold uppercase tracking-wide text-zinc-950 transition-colors hover:bg-orange-400 disabled:opacity-50 sm:w-48"
      >
        {status === "submitting" ? "Надсилання…" : "Відправити"}
      </button>
      {status === "error" && (
        <p className="text-sm font-semibold text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
