export interface LoadedStyle {
  styles: CSSModuleClasses;
  raw: string;
  fileName: string;
}

export function getDynamicStyle(
  styleModules: Record<string, () => Promise<unknown>>,
  rawModules: Record<string, () => Promise<unknown>>
) {
  const loadStyleFiles = async (): Promise<LoadedStyle[]> => {
    const entries = Object.keys(styleModules)
      .sort()
      .map(async (path) => {
        const [stylesMod, rawMod] = await Promise.all([styleModules[path](), rawModules[path]()]);

        return {
          styles: (stylesMod as { default: CSSModuleClasses }).default,
          raw: rawMod as string,
          fileName: path.replace(/.*\//, ''), // Extract file name from path
        };
      });

    return Promise.all(entries);
  };

  let cached: Promise<LoadedStyle[]> | null = null;
  return function loadDynamicStyles() {
    if (!cached) cached = loadStyleFiles();
    return cached;
  };
}
