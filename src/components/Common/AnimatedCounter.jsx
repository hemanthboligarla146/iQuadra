import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.toString().replace(/,/g, ''));
      if (start === end) return;

      const incrementTime = (duration / end) * 1000;
      
      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + suffix);
        if (start === end) {
          clearInterval(timer);
          // Format with commas if needed, though most numbers here are small
          setCount(start.toLocaleString() + suffix);
        }
      }, incrementTime > 10 ? incrementTime : 10); // cap refresh rate

      // If duration logic is too fast/slow, a simple CSS based animation is better but this works for small numbers
      
      // Better Framer Motion approach:
      return () => clearInterval(timer);
    }
  }, [value, suffix, duration, isInView]);

  return (
    <span ref={ref}>
      {count || `0${suffix}`}
    </span>
  );
};

export default AnimatedCounter;
