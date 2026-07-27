import { useLayoutEffect } from "react";

/**
 * Fades `[data-reveal]` elements in as they scroll into view.
 *
 * The hidden state lives behind a `reveal-ready` class that this hook adds, so
 * the page renders fully visible when JS is unavailable or motion is reduced.
 */
export function useReveal() {
  useLayoutEffect(() => {
    const root = document.documentElement;

    // Bail out (leaving everything visible) when the effect is unwanted or
    // unsupported, rather than hiding content we could never reveal.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!elements.length) return;

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -30px 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);
}
