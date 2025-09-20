import React, { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

const Typewriter = ({ text, el: El = 'p', className, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isInView && !isStarted) {
      setTimeout(() => {
        setIsStarted(true);
        let i = 0;
        const intervalId = setInterval(() => {
          setDisplayedText(text.substring(0, i + 1));
          i++;
          if (i >= text.length) {
            clearInterval(intervalId);
          }
        }, 50);
        return () => clearInterval(intervalId);
      }, delay);
    }
  }, [isInView, text, delay, isStarted]);

  return (
    <El ref={ref} className={className}>
      {displayedText}
      {isStarted && displayedText.length === text.length ? '' : <span className="blinking-cursor"></span>}
    </El>
  );
};

export default Typewriter;