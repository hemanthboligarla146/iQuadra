import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';

const matrixData = [
  { industry: "Retail & eCommerce", caps: [true, true, false, true, false, true] },
  { industry: "Manufacturing", caps: [true, true, true, true, false, true] },
  { industry: "Card & Payments", caps: [true, true, false, true, true, false] },
  { industry: "Aerospace & Avionics", caps: [true, true, false, false, true, false] },
  { industry: "Pharma & Healthcare", caps: [true, true, true, true, false, false] },
  { industry: "Utilities & Telecom", caps: [true, true, true, true, false, true] },
  { industry: "Contract & Construction", caps: [false, true, true, true, false, false] },
  { industry: "Science & Technology", caps: [true, true, false, true, false, false] },
  { industry: "Automotive & Transportation", caps: [true, true, true, true, true, true] }
];

const capabilities = ["AI", "DATA", "ERP", "CLOUD", "QA", "IoT"];

const CapabilityMatrix = () => {
  return (
    <section className="pt-4 pb-10 lg:pt-6 lg:pb-12 bg-gray-50 border-b border-gray-100 overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-3xl lg:text-4xl font-extrabold text-primary-navy tracking-tight mb-4"
          >
            Capabilities that travel across industries.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed"
          >
            Our core technological practices adapt and scale to meet the specific compliance, performance, and operational needs of each sector.
          </motion.p>
        </div>

        <div className="w-full max-w-5xl mx-auto overflow-x-auto pb-8 hide-scrollbar">
          <div className="min-w-[800px] bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            
            {/* Header Row */}
            <div className="grid grid-cols-[1.5fr_repeat(6,1fr)] bg-primary-navy text-white border-b border-gray-200">
              <div className="p-4 flex items-center font-bold text-[14px] uppercase tracking-wider">
                Industry
              </div>
              {capabilities.map((cap, idx) => (
                <div key={idx} className="p-4 flex items-center justify-center font-bold text-[13px] text-gray-300 tracking-wider">
                  {cap}
                </div>
              ))}
            </div>

            {/* Matrix Rows */}
            <div className="flex flex-col divide-y divide-gray-100">
              {matrixData.map((row, rowIndex) => (
                <motion.div 
                  key={rowIndex}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: rowIndex * 0.05 }}
                  className="grid grid-cols-[1.5fr_repeat(6,1fr)] hover:bg-gray-50 transition-colors group"
                >
                  <div className="p-4 flex items-center font-semibold text-[15px] text-primary-navy group-hover:text-primary-green transition-colors">
                    {row.industry}
                  </div>
                  {row.caps.map((isActive, colIndex) => (
                    <div key={colIndex} className="p-4 flex items-center justify-center border-l border-gray-50">
                      {isActive ? (
                        <div className="w-6 h-6 rounded-md bg-primary-green/10 flex items-center justify-center text-primary-green">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gray-200 opacity-50"></div>
                      )}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>

      </Container>
    </section>
  );
};

export default CapabilityMatrix;
