import React from 'react';
import { motion } from 'framer-motion';
import { User, Package, Settings, ArrowRight, Brain, TrendingUp } from 'lucide-react';
import Container from '../Common/Container';

const RetailTransformation = () => {
  return (
    <section className="pt-4 lg:pt-6 pb-4 lg:pb-6 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[13px] font-bold text-primary-green tracking-wider uppercase mb-6"
            >
              The Retail Challenge
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[42px] font-[800] text-primary-navy leading-[1.15] tracking-tight mb-6"
            >
              Data is abundant.<br />Intelligence is rare.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[16px] md:text-[18px] text-text-secondary leading-[1.6] mb-8 font-[500]"
            >
              Modern retailers generate enormous amounts of customer, transaction, inventory, and operational data. But raw data doesn't drive growth. 
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[16px] md:text-[18px] text-text-secondary leading-[1.6] font-[500]"
            >
              The true competitive advantage comes from converting that massive data footprint into timely, actionable intelligence that predicts demand, personalizes the shopper journey, and optimizes every store operation.
            </motion.p>
          </div>

          {/* Right Visual Architecture */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md h-[400px] flex items-center justify-between">
              
              {/* Data Sources (Left) */}
              <div className="flex flex-col gap-8 z-10">
                {[
                  { icon: User, label: "Customer", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: Package, label: "Inventory", color: "text-orange-500", bg: "bg-orange-50" },
                  { icon: Settings, label: "Operations", color: "text-purple-600", bg: "bg-purple-50" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className={`w-12 h-12 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center ${item.bg} ${item.color}`}>
                      <item.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Connecting Lines & Particles */}
              <div className="absolute left-16 right-16 top-0 bottom-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 400" preserveAspectRatio="none">
                  {/* Thin lines */}
                  <path d="M0 60 C 100 60, 100 200, 200 200" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                  <path d="M0 200 L 200 200" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                  <path d="M0 340 C 100 340, 100 200, 200 200" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                  
                  {/* Animated particles */}
                  <circle r="3" fill="#16C784">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M0 60 C 100 60, 100 200, 200 200" />
                    <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#16C784">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M0 200 L 200 200" begin="0.6s" />
                    <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.6s" />
                  </circle>
                  <circle r="3" fill="#16C784">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M0 340 C 100 340, 100 200, 200 200" begin="1.2s" />
                    <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1.2s" />
                  </circle>
                </svg>
              </div>

              {/* AI Engine (Center) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-2xl bg-primary-navy shadow-xl flex flex-col items-center justify-center text-white relative overflow-hidden border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-green/20 to-transparent"></div>
                  <Brain className="w-10 h-10 text-primary-green mb-1 relative z-10" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider relative z-10">AI Engine</span>
                </div>
              </motion.div>

              {/* Connecting Line Right */}
              <div className="absolute right-16 top-1/2 w-16 h-[1.5px] bg-gray-200 -translate-y-1/2 pointer-events-none">
                <motion.div 
                  className="w-full h-full bg-primary-green origin-left"
                  animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </div>

              {/* Value (Right) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center gap-2 z-10"
              >
                <div className="w-14 h-14 rounded-full bg-primary-green/10 border border-primary-green/30 flex items-center justify-center text-primary-green">
                  <TrendingUp className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-[11px] font-bold text-primary-navy uppercase text-center leading-tight">Retail<br/>Value</span>
              </motion.div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default RetailTransformation;
