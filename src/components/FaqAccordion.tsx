type FaqItem = { question: string; answer: string };

type Theme = "dark" | "light";

// Both theme names map to the same token-based look now (light surfaces).
const STYLE = {
  divide: "divide-rule",
  question: "text-ink",
  questionHover: "group-hover:text-brand-ink",
  answer: "text-muted",
  icon: "bg-brand",
  ringOffset: "focus-visible:ring-offset-surface",
};
const THEME_STYLES: Record<Theme, typeof STYLE> = { dark: STYLE, light: STYLE };

// Native <details>/<summary> — no JS needed, answers stay in the
// server-rendered HTML, and multiple items can be open at once.
export function FaqAccordion({
  items,
  theme = "dark",
  className = "",
}: {
  items: FaqItem[];
  theme?: Theme;
  className?: string;
}) {
  const styles = THEME_STYLES[theme];

  return (
    <div className={`grid gap-2.5 ${className}`}>
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-xl border border-rule bg-surface/60 transition-colors open:border-brand/40 open:border-l-4 open:border-l-brand open:bg-brand/[0.08] hover:border-brand/40"
          open={index === 0}
        >
          <summary
            className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${styles.ringOffset}`}
          >
            <span
              className={`text-[17px] font-extrabold leading-snug transition-colors duration-200 ${styles.question} ${styles.questionHover}`}
            >
              {item.question}
            </span>
            <span
              aria-hidden
              className="pointer-events-none relative flex h-5 w-5 shrink-0 items-center justify-center"
            >
              <span className={`absolute h-0.5 w-4 rounded-full ${styles.icon}`} />
              <span
                className={`absolute h-0.5 w-4 rotate-90 rounded-full ${styles.icon} transition-transform duration-200 ease-out group-open:rotate-0 motion-reduce:transition-none`}
              />
            </span>
          </summary>
          <p className={`just px-5 pb-5 text-[15px] leading-relaxed ${styles.answer}`}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
