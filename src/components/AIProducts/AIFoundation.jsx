import React from 'react';
import { motion } from 'framer-motion';
import { Check, Brain } from 'lucide-react';
import Container from '../Common/Container';
import imgFoundation from '../../assets/ai_foundation.jpg';

const features = [
  "Advanced machine learning and deep learning",
  "Seamless integration with enterprise systems",
  "Cloud-native and API-first architecture",
  "Continuous learning and improvement",
  "Secure, scalable and highly available",
  "Responsible AI with human-in-the-loop"
];

const AIFoundation = () => {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <Container>
        <div 
          className="rounded-[24px] overflow-hidden flex flex-col lg:flex-row items-center px-8 py-14 lg:px-16 lg:py-20 shadow-2xl relative"
          style={{ backgroundColor: '#021327' }}
        >
          
          {/* Subtle background glow inside the card */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(22, 199, 132, 0.05)' }} />

          {/* Left: AI Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-14 lg:mb-0 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[400px] aspect-square lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(22,199,132,0.15)] group"
            >
              <img 
                src={imgFoundation} 
                alt="AI Foundation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#021327]/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col relative z-10 pl-0 lg:pl-4">
            <span 
              className="text-[13px] font-[700] tracking-[0.02em] uppercase mb-3 text-center lg:text-left"
              style={{ color: '#16C784' }}
            >
              BUILT ON A STRONG AI FOUNDATION
            </span>
            
            <h2 className="text-[28px] md:text-3xl lg:text-[38px] font-[800] text-white mb-10 leading-[1.2] tracking-tight text-center lg:text-left">
              Modern. Scalable. Future-ready.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="shrink-0 mt-[2px]" size={20} color="#16C784" strokeWidth={3} />
                  <span 
                    className="text-[14px] font-[500] leading-[1.5] pr-2"
                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default AIFoundation;
