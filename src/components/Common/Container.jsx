import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`w-full px-8 md:px-[80px] mx-auto max-w-[1920px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
