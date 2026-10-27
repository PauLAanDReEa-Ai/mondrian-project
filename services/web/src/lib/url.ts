/**
 * Base-aware URL helper for GitHub project Pages.
 * @param path Absolute-from-root path, e.g. `/contribute/` or `contribute`
 * @param base Astro `import.meta.env.BASE_URL` (trailing slash)
 */
export function withBase(path: string, base: string = "/"): string {
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  const p = path.startsWith("/") ? path : `/${path}`;
  if (!b || b === "") return p;
  return `${b}${p}`;
}
