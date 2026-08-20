import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';

const IndustryArchitecture = () => {
  return (
    <section className="py-10 lg:py-12 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-3xl lg:text-4xl font-extrabold text-primary-navy tracking-tight mb-4"
          >
            One technology foundation.<br/>Different industry intelligence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed"
          >
            Our core approach remains the same across sectors: we anchor technology implementation in deep domain knowledge to drive specific business outcomes.
          </motion.p>
        </div>

        {/* Central Architecture Visual */}
        <div className="relative w-full max-w-5xl mx-auto h-[450px] md:h-[400px] flex items-center justify-center">
          
          {/* Background Connecting Line */}
          <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-gray-200 -translate-y-1/2 hidden md:block z-0"></div>
          
          {/* Floating Labels (Decorative) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-[15%] md:top-[12%] left-[15%] md:left-[22%] px-3 py-1 bg-white border border-gray-100 rounded-md text-[12px] font-bold text-gray-500 shadow-sm z-30"
          >
            AI Models
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[15%] md:bottom-[12%] left-[20%] md:left-[30%] px-3 py-1 bg-white border border-gray-100 rounded-md text-[12px] font-bold text-gray-500 shadow-sm z-30"
          >
            Cloud Infrastructure
          </motion.div>
          <motion.div 
            animate={{ y: [0, -8, 0] }} 
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[20%] md:top-[15%] right-[20%] md:right-[28%] px-3 py-1 bg-white border border-gray-100 rounded-md text-[12px] font-bold text-gray-500 shadow-sm z-30"
          >
            Data Engineering
          </motion.div>
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-[10%] md:bottom-[15%] right-[15%] md:right-[22%] px-3 py-1 bg-white border border-gray-100 rounded-md text-[12px] font-bold text-gray-500 shadow-sm z-30"
          >
            Enterprise ERP
          </motion.div>

          {/* Core Flow */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-20 gap-8 md:gap-0">
            
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-48 h-48 rounded-full bg-white border border-gray-100 shadow-xl flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                <span className="text-blue-600 font-bold text-[14px]">01</span>
              </div>
              <h4 className="font-extrabold text-primary-navy text-[15px] leading-tight">INDUSTRY<br/>DOMAIN</h4>
            </motion.div>

            {/* Step 2 (Center) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-56 h-56 rounded-full bg-blue-900 border-4 border-blue-800 shadow-2xl flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
            >
              {/* Subtle green glow inside */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-green/30 rounded-full blur-[30px]"></div>
              
              <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                <span className="text-primary-green font-bold text-[14px]">02</span>
              </div>
              <h4 className="relative z-10 font-extrabold text-white text-[16px] leading-tight">AI + DATA +<br/>ENGINEERING</h4>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-48 h-48 rounded-full bg-white border border-gray-100 shadow-xl flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-3">
                <span className="text-purple-600 font-bold text-[14px]">03</span>
              </div>
              <h4 className="font-extrabold text-primary-navy text-[15px] leading-tight">BUSINESS<br/>OUTCOME</h4>
            </motion.div>

          </div>
        </div>

      </Container>
    </section>
  );
};

export default IndustryArchitecture;
