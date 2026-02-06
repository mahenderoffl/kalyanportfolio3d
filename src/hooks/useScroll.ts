import { useCallback } from "react";

export function useSmoothScroll() {
  const scrollTo = useCallback((elementId: string, offset: number = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { scrollTo, scrollToTop };
}

export function useIntersectionObserver(
  callback: (isIntersecting: boolean) => void,
  options?: IntersectionObserverInit
) {
  const observe = useCallback(
    (element: HTMLElement | null) => {
      if (!element) return;

      const observer = new IntersectionObserver(([entry]) => {
        callback(entry.isIntersecting);
      }, options);

      observer.observe(element);

      return () => observer.disconnect();
    },
    [callback, options]
  );

  return observe;
}
