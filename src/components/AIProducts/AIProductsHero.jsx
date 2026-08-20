import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';
import Button from '../Common/Button';

const AIProductsHero = () => {
  return (
    <section className="pt-6 lg:pt-8 pb-2 lg:pb-4 bg-white relative overflow-hidden">
      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[13px] font-bold text-primary-green tracking-wider uppercase mb-6"
        >
          AI Products
        </motion.span>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[38px] sm:text-[48px] lg:text-[64px] font-[800] text-primary-navy leading-[1.05] tracking-tight mb-4 max-w-4xl"
        >
          Intelligent products.<br />
          <span className="green-gradient-text box-decoration-clone">Built for real-world impact.</span>
        </motion.h1>
        
        {/* Supporting text */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[16px] md:text-[18px] font-[500] text-text-secondary leading-[1.6] max-w-2xl mb-6"
        >
          Our AI products solve complex business challenges with intelligent automation, deep analytics and domain expertise. Accelerate outcomes with iQuadra's proprietary AI innovations.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button variant="solid" className="w-full sm:w-auto justify-center !py-3.5 !px-8 text-[15px] font-semibold !bg-primary-green hover:!bg-green-600 !text-white border-none shadow-[0_4px_14px_0_rgba(22,199,132,0.39)] !rounded-lg">
            Explore Our Products &rarr;
          </Button>
          <Button variant="outline" className="w-full sm:w-auto justify-center !py-3.5 !px-8 text-[15px] font-semibold !text-primary-navy !border-gray-200 hover:!bg-gray-50 transition-all duration-300 !rounded-lg bg-white">
            Talk to Our AI Team &rarr;
          </Button>
        </motion.div>
        
      </Container>
    </section>
  );
};

export default AIProductsHero;
