import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, ArrowRight } from 'lucide-react';
import Container from '../Common/Container';

const CompanyOverview = () => {
  return (
    <section className="py-8 lg:py-10 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: WHO WE ARE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-start gap-6"
          >
            <div className="hidden md:flex mt-1">
               <Users className="w-16 h-16 text-primary-green opacity-80" strokeWidth={1} />
            </div>
            <div>
              <span className="text-[13px] font-bold text-primary-green tracking-wider uppercase block mb-6">
                Who We Are
              </span>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-primary-navy mb-8 leading-[1.2] tracking-tight">
                AI engineers, ERP specialists, architects & product builders.
              </h2>
              <div className="text-[15px] text-text-secondary leading-relaxed space-y-6 mb-8">
                <p>
                  Founded by highly experienced practitioners, iQuadra partners with enterprises to design, build and operate AI-powered systems and enterprise technology solutions.
                </p>
                <p>
                  Our teams combine deep domain knowledge with modern engineering practices to deliver secure, scalable and cost-effective outcomes across AI, ERP, Cloud, data and agile delivery.
                </p>
              </div>
              <button className="flex items-center text-primary-green font-semibold border border-primary-green rounded-full px-6 py-2.5 hover:bg-primary-green hover:text-white transition-colors duration-300">
                Learn more about us <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>

          {/* Right: WHAT WE DO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-start gap-6"
          >
            <div>
              <span className="text-[13px] font-bold text-primary-green tracking-wider uppercase block mb-6">
                What We Do
              </span>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-primary-navy mb-8 leading-[1.2] tracking-tight">
                Strategy + engineering + proprietary AI + enterprise IT.
              </h2>
              <div className="text-[15px] text-text-secondary leading-relaxed space-y-6 mb-8">
                <p>
                  We operate across the full transformation lifecycle — from strategy and roadmap definition through applied engineering, ERP implementation, platform deployment, quality engineering and ongoing optimization.
                </p>
                <p>
                  With our proprietary AI products — iQua.ai and Helix AI — we help organizations automate, optimize and scale with confidence.
                </p>
              </div>
              <button className="flex items-center text-primary-green font-semibold border border-primary-green rounded-full px-6 py-2.5 hover:bg-primary-green hover:text-white transition-colors duration-300">
                Explore our capabilities <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="hidden md:flex mt-1">
               <Settings className="w-16 h-16 text-primary-green opacity-80" strokeWidth={1} />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default CompanyOverview;
