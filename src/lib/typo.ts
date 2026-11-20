// Typographic non-breaking spaces (the visible text is unchanged):
// - thousands groups ("200 000"), - standards before their number ("ДСТУ 3649"),
// - one-letter Ukrainian prepositions/conjunctions stay with the next word.
export function typo(text: string): string {
  return text
    .replace(/(\d) (?=\d{3}\b)/g, "$1 ")
    .replace(/\b(ДСТУ|ISO\/IEC|ISO|JVE|JVS|JVH|JEVOL) (?=[\dA-Z-]*\d)/g, "$1 ")
    .replace(/(^|[\s(])([ВвУуЗзІіАаЙйОоЯяЄє]) /g, "$1$2 ")
    .replace(/ (—|–) /g, " $1 ");
}
