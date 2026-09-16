import React, { useState, useEffect } from 'react';

/**
 * ScrollProgressBar
 * A glowing indicator at the top of the viewport tracking document scroll progress.
 */
export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 9999,
        background: 'rgba(24, 6, 13, 0.4)',
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          width: `${scrollProgress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #e62857 0%, #ff4d7a 50%, #ffd166 100%)',
          boxShadow: '0 0 12px rgba(255, 77, 122, 0.8), 0 0 6px rgba(255, 209, 102, 0.9)',
          transition: 'width 0.12s cubic-bezier(0.1, 0.9, 0.2, 1)'
        }}
      />
    </div>
  );
}
