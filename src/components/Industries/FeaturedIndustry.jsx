import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../Common/Container';
import Button from '../Common/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const FeaturedIndustry = ({ industry }) => {
  if (!industry) return null;

  return (
    <section className="pt-6 pb-4 lg:pt-8 lg:pb-6 bg-white overflow-hidden min-h-[350px]">
      <Container>
        <AnimatePresence mode="wait">
          <motion.div
            key={industry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12"
          >
            {/* Left: Image and Title */}
            <div className="w-full lg:w-5/12 flex flex-col items-start relative">
              <div className="w-full rounded-2xl overflow-hidden shadow-md mb-6 relative bg-gray-50 border border-gray-100">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-auto aspect-[4/3] object-cover relative z-10" 
                />
              </div>
              <h2 className="relative z-10 text-[28px] md:text-[34px] font-extrabold text-primary-navy tracking-tight leading-tight mb-4">
                {industry.name}
              </h2>
            </div>

            {/* Right: Editorial Content */}
            <div className="w-full lg:w-7/12 flex flex-col items-start">
              <h3 className="text-[17px] md:text-[19px] font-medium text-primary-navy mb-6 leading-relaxed">
                {industry.description}
              </h3>
              
              <div className="w-16 h-1 bg-primary-green rounded-full mb-8"></div>
              
              <div className="mb-10 w-full">
                <h4 className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-4">Core Capabilities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {industry.tags.map((tag, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0" />
                      <span className="text-[16px] font-medium text-text-secondary">{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" className="group">
                Explore {industry.name} Solutions 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default FeaturedIndustry;
