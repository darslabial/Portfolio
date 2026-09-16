import React, { useState, useEffect } from 'react';

/**
 * TypewriterText
 * Smooth character-by-character typewriter effect with natural pause,
 * backspacing, and a glowing blinking terminal cursor.
 */
export default function TypewriterText({
  phrases = [],
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseDelay = 1800,
  cursorChar = '▍',
  style = {}
}) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const currentPhrase = phrases[currentPhraseIndex];
    let timer;

    if (!isDeleting) {
      // Typing mode
      if (displayedText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        }, typingSpeed + (Math.random() * 20 - 10)); // Natural slight typing jitter
      } else {
        // Finished typing full phrase, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else {
      // Deleting mode
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDelay]);

  return (
    <span
      className="typewriter-container"
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        whiteSpace: 'pre-wrap',
        ...style
      }}
    >
      <span className="typewriter-text">{displayedText}</span>
      <span
        className="typewriter-cursor"
        aria-hidden="true"
        style={{
          display: 'inline-block',
          marginLeft: '2px',
          color: 'var(--accent-rose, #ff4d7a)',
          textShadow: '0 0 10px rgba(255, 77, 122, 0.8), 0 0 4px #ffd166',
          animation: 'cursorBlink 0.9s infinite',
          fontWeight: 300,
          userSelect: 'none'
        }}
      >
        {cursorChar}
      </span>
    </span>
  );
}
