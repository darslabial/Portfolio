import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to the returned container ref
 * or elements with the .reveal-on-scroll class, toggling .is-visible
 * when they enter the viewport.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Respect user motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-on-scroll, .section-wrapper').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (options.once === false) {
          entry.target.classList.remove('is-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: options.rootMargin || '0px 0px -60px 0px',
      threshold: options.threshold || 0.08
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const root = containerRef.current || document;
    const elements = root.querySelectorAll
      ? root.querySelectorAll('.reveal-on-scroll, .section-wrapper')
      : [];

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [options.rootMargin, options.threshold, options.once]);

  return containerRef;
}

export default useScrollReveal;
