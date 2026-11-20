import Link from "next/link";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <section className="border-b border-rule bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-3 text-xs text-muted">
        <Link href="/" className="hover:text-ink">
          Головна
        </Link>{" "}
        / <span>Прилади</span> /{" "}
        <span className="font-semibold text-ink">{current}</span>
      </div>
    </section>
  );
}
