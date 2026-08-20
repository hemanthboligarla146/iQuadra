import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';

const outcomes = [
  {
    metric: "35%",
    label: "inventory waste reduction",
    desc: "Through precise demand forecasting and dynamic SKU routing."
  },
  {
    metric: "22%",
    label: "revenue from personalization",
    desc: "By delivering 1:1 tailored experiences across all channels."
  },
  {
    metric: "89%",
    label: "forecast accuracy improvement",
    desc: "Using advanced machine learning models on external data signals."
  },
  {
    metric: "60%",
    label: "store operations automation",
    desc: "Reducing manual task allocation and compliance tracking overhead."
  }
];

const RetailOutcomes = () => {
  return (
    <section className="pt-12 lg:pt-16 pb-10 lg:pb-16 bg-gradient-to-br from-[#f0f9ff] to-[#f0fdf4]">
      <Container>
        
        <div className="flex flex-col items-center text-center mb-20 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] font-bold text-primary-green tracking-wider uppercase mb-4"
          >
            BUSINESS OUTCOMES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-4xl lg:text-[44px] font-extrabold text-primary-navy tracking-tight leading-[1.15]"
          >
            From retail data to measurable decisions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left relative"
            >
              <div className="text-[48px] lg:text-[56px] font-[800] text-primary-green leading-none mb-4 tracking-tighter drop-shadow-sm">
                {item.metric}
              </div>
              <h4 className="text-[16px] lg:text-[18px] font-bold text-primary-navy mb-3 leading-tight uppercase tracking-wide">
                {item.label}
              </h4>
              <p className="text-[14px] lg:text-[15px] text-text-secondary leading-relaxed font-[500]">
                {item.desc}
              </p>
              
              {/* Subtle divider for mobile/tablet between items (except last) */}
              {index < outcomes.length - 1 && (
                <div className="w-12 h-[1px] bg-gray-200 mt-8 lg:hidden"></div>
              )}
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default RetailOutcomes;
