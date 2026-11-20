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
    <div className={`divide-y ${styles.divide} ${className}`}>
      {items.map((item, index) => (
        <details key={item.question} className="group" open={index === 0}>
          <summary
            className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 pr-10 [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${styles.ringOffset}`}
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
          <p className={`just pb-6 pr-10 text-[15px] leading-relaxed ${styles.answer}`}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
