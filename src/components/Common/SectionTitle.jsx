import React from 'react';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-[40px] font-extrabold text-primary-navy leading-[1.1] mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-gray-500 text-lg md:text-[18px] font-medium max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
