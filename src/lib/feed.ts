// Shared feed helpers.

// Feed size escape hatch: 0 = show ALL posts on one continuous page
// (current shipped behaviour — user preferred the un-paginated view).
// Set to e.g. 50 to cap the home grid at 50 tiles later — one-line change.
export const PAGE_SIZE = 0;

export const fmtDate = (d: Date): string =>
  d.toISOString().slice(0, 10).replace(/-/g, ".");

/** Strip markdown to a plain one-line excerpt for the cover label. */
export function excerpt(body: string, n = 130): string {
  const text = body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*`_~|>-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > n ? text.slice(0, n).trimEnd() + "…" : text;
}
