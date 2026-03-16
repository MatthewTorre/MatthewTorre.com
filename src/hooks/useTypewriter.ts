import { useEffect, useState } from 'react';

export function useTypewriter(phrases: string[], typingSpeed = 55, pause = 2200, deletingSpeed = 30) {
  const [display, setDisplay] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    let pauseTimer: ReturnType<typeof setTimeout> | undefined;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) {
          pauseTimer = setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplay(current.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => {
      clearTimeout(timeout);
      clearTimeout(pauseTimer);
    };
  }, [display, isDeleting, phraseIndex, phrases, typingSpeed, pause, deletingSpeed]);

  return display;
}
