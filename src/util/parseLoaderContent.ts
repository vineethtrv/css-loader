/**
 * Extracts the `@content: "..."` annotation from a loader CSS string.
 * Some loaders embed display text via a comment so the React component can
 * render it inside the `.loader` span (e.g. text loaders showing "Loading").
 */
export function parseLoaderContent(cssString: string): string {
  if (!cssString.includes('@content')) return '';
  const match = cssString.match(/\/\*\s*@content:\s*"([^"]+)"\s*\*\//);
  return match?.[1] ?? '';
}
