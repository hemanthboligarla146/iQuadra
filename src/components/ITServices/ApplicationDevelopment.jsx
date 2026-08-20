import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code2, MonitorSmartphone } from 'lucide-react';
import Container from '../Common/Container';

const cards = [
  {
    icon: Server,
    title: 'Full Stack\nJava Development',
    desc: 'Spring Boot, Spring Cloud, Microservices, REST/SOAP APIs, JEE and enterprise applications.',
    tags: ['Spring Boot', 'Microservices', 'APIs']
  },
  {
    icon: Code2,
    title: 'Python\nTech Stack',
    desc: 'Python applications, automation, Django, FastAPI, Flask and integration with AI/data platforms.',
    tags: ['Django', 'FastAPI', 'Flask']
  },
  {
    icon: MonitorSmartphone,
    title: 'Mobile &\nWeb Apps',
    desc: 'Custom web portals, eCommerce platforms, mobile apps and CMS modernization.',
    tags: ['React', 'Node.js', 'Mobile']
  }
];

const ApplicationDevelopment = () => {
  return (
    <section className="py-10 lg:py-12 bg-gray-50/50 border-b border-gray-100">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Left: Content & Visual */}
          <div className="w-full lg:w-1/3 flex flex-col pr-0 lg:pr-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold text-primary-green tracking-widest uppercase mb-4"
            >
              APPLICATION & CLOUD DEVELOPMENT
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-[34px] font-extrabold text-primary-navy mb-10 leading-[1.2]"
            >
              Build robust, scalable and future-ready applications
            </motion.h2>

            {/* CSS Illustration Placeholder (Laptop & Cloud) */}
            <div className="relative w-full h-[200px] flex items-center justify-start mt-auto">
              <div className="absolute w-24 h-16 bg-blue-100 rounded-2xl -skew-x-12 translate-x-8 -translate-y-8 blur-sm" />
              <div className="w-48 h-32 bg-gray-200 border border-gray-300 rounded-t-xl shadow-md relative z-10 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-gray-800 border border-gray-700 rounded-md flex items-center justify-center text-primary-green font-mono text-xl drop-shadow-[0_0_8px_rgba(22,199,132,0.5)]">
                  &lt;/&gt;
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-4 bg-gray-300 rounded-b-xl shadow-lg border-t border-gray-400 flex justify-center pt-0.5">
                  <div className="w-8 h-1 bg-gray-400 rounded-full" />
                </div>
              </div>
              {/* Stacked blocks */}
              <div className="absolute right-8 bottom-4 flex flex-col gap-1 z-20">
                <div className="w-16 h-4 bg-blue-400 skew-x-[30deg] border border-blue-500 shadow-sm" />
                <div className="w-16 h-4 bg-blue-300 skew-x-[30deg] border border-blue-400 shadow-sm" />
                <div className="w-16 h-4 bg-blue-200 skew-x-[30deg] border border-blue-300 shadow-sm" />
              </div>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary-green" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-[16px] font-bold text-primary-navy mb-4 leading-tight whitespace-pre-line">
                    {card.title}
                  </h3>
                  
                  <p className="text-[13px] text-text-secondary leading-relaxed mb-8 flex-grow">
                    {card.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-medium px-2 py-1 bg-gray-50 border border-gray-100 rounded text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ApplicationDevelopment;
