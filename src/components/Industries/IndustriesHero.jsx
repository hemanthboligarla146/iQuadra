import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Container from '../Common/Container';
import Button from '../Common/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const IndustriesHero = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    const element = document.getElementById('industry-view');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 72; // Account for fixed navbar
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-8 lg:pt-10 pb-8 lg:pb-10 bg-white relative overflow-hidden">
      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[13px] font-bold text-primary-green tracking-wider uppercase mb-6"
        >
          INDUSTRIES
        </motion.span>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[36px] md:text-5xl lg:text-6xl font-extrabold text-primary-navy tracking-tight leading-[1.1] mb-4 max-w-4xl"
        >
          Technology built around the industries you know.
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[17px] md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-6"
        >
          iQuadra combines domain expertise, AI and enterprise technology to solve the operational and transformation challenges unique to every industry.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto"
        >
          <Button onClick={handleExploreClick} variant="solid" className="w-full sm:w-auto justify-center !py-3.5 !px-8 text-[15px] font-semibold !bg-primary-green hover:!bg-green-600 !text-white border-none shadow-[0_4px_14px_0_rgba(22,199,132,0.39)] !rounded-lg">
            Explore Industries &rarr;
          </Button>
          <Button onClick={() => navigate('/contact-ai')} variant="outline" className="w-full sm:w-auto justify-center !py-3.5 !px-8 text-[15px] font-semibold !text-primary-navy !border-gray-200 hover:!bg-gray-50 transition-all duration-300 !rounded-lg bg-white">
            Talk to Our AI Team &rarr;
          </Button>
        </motion.div>

        {/* Flow Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 px-4"
        >
          <div className="flex flex-col items-center">
            <span className="text-[14px] font-bold text-primary-navy mb-2">INDUSTRY KNOWLEDGE</span>
            <div className="h-1 w-12 bg-primary-green rounded-full opacity-50"></div>
          </div>
          
          <div className="hidden md:flex text-gray-300">
            <ArrowRight className="w-5 h-5" />
          </div>
          <div className="flex md:hidden text-gray-300 my-2">
            <ChevronDown className="w-5 h-5" />
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[14px] font-bold text-primary-navy mb-2">AI + DATA + ENGINEERING</span>
            <div className="h-1 w-12 bg-blue-500 rounded-full opacity-50"></div>
          </div>

          <div className="hidden md:flex text-gray-300">
            <ArrowRight className="w-5 h-5" />
          </div>
          <div className="flex md:hidden text-gray-300 my-2">
            <ChevronDown className="w-5 h-5" />
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[14px] font-bold text-primary-navy mb-2">BUSINESS OUTCOMES</span>
            <div className="h-1 w-12 bg-purple-500 rounded-full opacity-50"></div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};

export default IndustriesHero;
