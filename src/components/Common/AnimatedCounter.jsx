import React from 'react';

const AnimatedCounter = ({ value, suffix = '' }) => {
  return (
    <span>
      {value}{suffix}
    </span>
  );
};

export default AnimatedCounter;
