import { useEffect, useState } from 'react';

interface UseScrollSpyOptions {
  /** Margin around the viewport used as the IntersectionObserver root area. */
  rootMargin?: string;
  /** Threshold(s) at which the observer callback fires. */
  threshold?: number | number[];
}

/**
 * Watches a list of element ids and returns the id of the section currently
 * most visible in the viewport. Useful for highlighting nav items as the user
 * scrolls (a.k.a. scroll spy).
 */
export function useScrollSpy(
  ids: string[],
  {
    rootMargin = '-20% 0px -60% 0px',
    threshold = [0, 0.25, 0.5, 0.75, 1],
  }: UseScrollSpyOptions = {}
): string {
  const [activeId, setActiveId] = useState<string>('');

  // Reduce the (potentially new-on-every-render) array inputs down to stable
  // primitive strings so the effect only re-runs when their *contents* change.
  const idsKey = ids.join('|');
  const thresholdKey = Array.isArray(threshold) ? threshold.join(',') : String(threshold);

  useEffect(() => {
    const idList = idsKey ? idsKey.split('|') : [];
    if (idList.length === 0) return;

    const sections = idList
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const ratios = new Map<string, number>();
    const thresholdValue = thresholdKey.includes(',')
      ? thresholdKey.split(',').map(Number)
      : Number(thresholdKey);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let topId = '';
        let topRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        });
        if (topId) setActiveId(topId);
      },
      { rootMargin, threshold: thresholdValue }
    );

    sections.forEach((section) => observer.observe(section));
    // Default to the first section before any scroll happens.
    setActiveId((prev) => prev || sections[0].id);

    return () => observer.disconnect();
  }, [idsKey, rootMargin, thresholdKey]);

  return activeId;
}
