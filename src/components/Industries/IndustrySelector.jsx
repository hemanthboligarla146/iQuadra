import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';

const IndustrySelector = ({ industries, activeId, onChange }) => {
  return (
    <section className="py-6 lg:py-8 bg-gray-50 border-y border-gray-100 sticky top-[72px] z-40 shadow-sm">
      <Container>
        <div className="flex overflow-x-auto hide-scrollbar gap-2 lg:gap-4 pb-2 lg:pb-0 items-center justify-start">
          {industries.map((industry) => {
            const isActive = industry.id === activeId;
            return (
              <button
                key={industry.id}
                onClick={() => onChange(industry.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-full transition-all duration-300 border ${
                  isActive 
                    ? 'bg-primary-navy border-primary-navy text-white shadow-md' 
                    : 'bg-white border-gray-200 text-text-secondary hover:border-primary-green hover:text-primary-navy'
                }`}
              >
                <industry.icon 
                  className={`w-4 h-4 mr-2 transition-colors duration-300 ${isActive ? 'text-white' : industry.color}`} 
                  strokeWidth={2.5}
                />
                <span className="text-[14px] font-semibold tracking-wide whitespace-nowrap">
                  {industry.name}
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default IndustrySelector;
