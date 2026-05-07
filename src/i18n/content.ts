/**
 * Strip the trailing `.<lang>.md` (or `.md`) from a content entry id to get
 * a clean URL slug. e.g. "attention-restoration-theory.cs.md" -> "attention-restoration-theory"
 */
export function stripLangSuffix(id: string): string {
  return id.replace(/\.(md|mdx)$/, '').replace(/\.(en|cs)$/, '');
}
