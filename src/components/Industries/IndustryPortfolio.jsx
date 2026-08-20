import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';
import Button from '../Common/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const IndustryPortfolio = ({ industries }) => {
  if (!industries || industries.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-3xl lg:text-4xl font-extrabold text-primary-navy tracking-tight mb-4"
          >
            Domain expertise across the enterprise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed"
          >
            Explore how we apply specialized industry knowledge to solve unique challenges.
          </motion.p>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {industries.map((industry, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                {/* Left (or Right) Side - Identity */}
                <div className="w-full lg:w-5/12 flex flex-col relative">
                  <div className={`absolute -top-12 ${isEven ? '-left-8' : '-right-8'} text-[140px] font-black text-gray-50 leading-none select-none z-0`}>
                    {industry.number}
                  </div>
                  
                  <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm ${industry.bgColor} ${industry.color}`}>
                    <industry.icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="relative z-10 text-[28px] md:text-4xl font-extrabold text-primary-navy tracking-tight leading-tight mb-4">
                    {industry.name}
                  </h3>
                </div>

                {/* Right (or Left) Side - Content */}
                <div className="w-full lg:w-7/12 flex flex-col">
                  <p className="text-[18px] md:text-[20px] text-text-secondary leading-relaxed mb-8">
                    {industry.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {industry.tags.map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-primary-green" />
                        <span className="text-[13px] font-bold text-primary-navy tracking-wide">{tag}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-fit group">
                    View Solutions <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default IndustryPortfolio;
