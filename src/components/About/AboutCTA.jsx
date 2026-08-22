import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Container from '../Common/Container';
import Button from '../Common/Button';

const AboutCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-2 pb-0 lg:pt-4 lg:pb-2 bg-white">
      <Container>
        <div className="bg-primary-navy rounded-[24px] p-10 md:p-14 lg:p-16 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-primary-green/10 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Dot Pattern */}
          <div className="absolute top-0 right-0 bottom-0 w-1/3 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#16c784 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10 w-full">
            
            {/* Left: Text */}
            <div className="flex flex-col text-left max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white mb-4 tracking-tight leading-[1.2]"
              >
                Let's build what's next.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[15px] md:text-[16px] text-gray-300 leading-relaxed max-w-xl pr-4"
              >
                Meet our team, explore capabilities, and start a conversation about your transformation goals.
              </motion.p>
            </div>
            
            {/* Right: Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 shrink-0"
            >
              <Button onClick={() => navigate('/contact-ai')} variant="solid" className="!py-3.5 !px-8 text-[15px] font-semibold w-full sm:w-auto justify-center !bg-primary-green hover:!bg-green-600 !text-white border-none shadow-[0_4px_14px_0_rgba(22,199,132,0.39)] !rounded-lg">
                Talk to Our AI Team &rarr;
              </Button>
              <Button onClick={() => navigate('/ai-products')} variant="outline" className="!py-3.5 !px-8 text-[15px] font-semibold w-full sm:w-auto justify-center !bg-transparent !border-white/30 !text-white hover:!bg-white/10 hover:!border-white transition-all duration-300 !rounded-lg">
                Explore AI Products &rarr;
              </Button>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutCTA;
