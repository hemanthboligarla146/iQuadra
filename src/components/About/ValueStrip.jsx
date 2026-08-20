import React from 'react';
import { motion } from 'framer-motion';
import { Quote, PieChart, Cpu, Globe } from 'lucide-react';
import Container from '../Common/Container';

const ValueStrip = () => {
  return (
    <section className="pt-8 pb-6 lg:pt-10 lg:pb-8 bg-secondary-bg border-y border-gray-100">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1.5fr] gap-12 xl:gap-20 items-center">
          
          {/* Left: Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex items-start"
          >
            <div className="flex-shrink-0 mr-4 md:mr-6 mt-1">
              <span className="text-6xl md:text-[80px] font-serif font-black text-primary-green leading-none">"</span>
            </div>
            <p className="text-xl md:text-2xl lg:text-[26px] font-medium text-primary-navy leading-relaxed">
              We believe AI transformation is an <span className="text-primary-green font-bold">engineering problem</span> as much as a strategy problem — and we show up to do both. Committed to delivering <span className="text-primary-green font-bold">innovative solutions</span> with deep industry expertise.
            </p>
          </motion.div>

          {/* Right: Information Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 xl:pl-10 xl:border-l border-gray-200 w-full"
          >
            <div className="flex-1">
              <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center mb-5">
                <PieChart className="w-5 h-5 text-primary-green" strokeWidth={2} />
              </div>
              <span className="text-2xl lg:text-3xl font-extrabold text-primary-navy tracking-tight block mb-2">
                20%
              </span>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                of our revenue reinvested<br className="hidden xl:block" /> in research & development
              </p>
            </div>
            
            <div className="flex-1 border-t-2 md:border-t-0 md:border-l-2 border-gray-100 pt-6 md:pt-0 md:pl-8">
              <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center mb-5">
                <Cpu className="w-5 h-5 text-primary-green" strokeWidth={2} />
              </div>
              <span className="text-xl lg:text-2xl font-extrabold text-primary-navy tracking-tight block mb-2 mt-[5px]">
                AI + IT
              </span>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Expertise across AI, ERP,<br className="hidden xl:block" /> Cloud, Data and Automation
              </p>
            </div>

            <div className="flex-1 border-t-2 md:border-t-0 md:border-l-2 border-gray-100 pt-6 md:pt-0 md:pl-8">
              <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center mb-5">
                <Globe className="w-5 h-5 text-primary-green" strokeWidth={2} />
              </div>
              <span className="text-xl lg:text-2xl font-extrabold text-primary-navy tracking-tight block mb-2 mt-[5px]">
                Global Delivery
              </span>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Flexible engagement models<br className="hidden xl:block" /> to meet every enterprise need
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default ValueStrip;
