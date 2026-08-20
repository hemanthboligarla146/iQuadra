import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';
import Button from '../Common/Button';
import { ArrowRight, HelpCircle } from 'lucide-react';

const IndustriesCTA = () => {
  return (
    <>
      {/* Don't See Your Industry */}
      <section className="pt-8 pb-6 lg:pt-10 lg:pb-8 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex-1 text-center md:text-left">
              <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center mb-3 mx-auto md:mx-0">
                <HelpCircle className="w-5 h-5 text-primary-green" />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-primary-navy tracking-tight mb-2">
                Your industry may be different. The problem-solving approach isn't.
              </h3>
              <p className="text-[15px] text-text-secondary leading-relaxed max-w-2xl">
                iQuadra works across sectors. If you have a business problem, we likely have the domain expertise and technology capabilities to help solve it.
              </p>
            </div>
            <div className="w-full md:w-auto flex justify-center shrink-0 mt-4 md:mt-0">
              <Button variant="solid" className="w-full md:w-auto justify-center !py-3.5 !px-8 text-[15px] font-semibold !bg-primary-green hover:!bg-green-600 !text-white border-none shadow-[0_4px_14px_0_rgba(22,199,132,0.39)] !rounded-lg whitespace-nowrap">
                Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="pt-2 lg:pt-4 pb-8 lg:pb-12 bg-gray-50">
        <Container>
          <div className="bg-primary-navy rounded-[24px] p-10 md:p-14 lg:p-16 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute -top-[50%] -right-[10%] w-[80%] h-[150%] bg-gradient-to-bl from-primary-green/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6"
              >
                Let's solve your industry's next challenge.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[16px] md:text-[18px] text-gray-300 leading-relaxed mb-10 max-w-2xl"
              >
                Bring us your business challenge and we'll bring the domain expertise, AI and engineering needed to move it forward.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
              >
                <Button variant="solid" className="w-full sm:w-auto justify-center !py-3.5 !px-8 text-[15px] font-semibold !bg-primary-green hover:!bg-green-600 !text-white border-none shadow-[0_4px_14px_0_rgba(22,199,132,0.39)] !rounded-lg whitespace-nowrap">
                  Talk to Our AI Team
                </Button>
                <Button variant="solid" className="w-full sm:w-auto justify-center !py-3.5 !px-8 text-[15px] font-semibold !bg-transparent !text-white !border !border-gray-500 hover:!bg-white/10 hover:!border-gray-300 transition-all duration-300 !rounded-lg !shadow-none whitespace-nowrap">
                  Explore Our Services
                </Button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default IndustriesCTA;
