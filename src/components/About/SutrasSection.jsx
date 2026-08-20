import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Sparkles, Rocket, Layers } from 'lucide-react';
import Container from '../Common/Container';

const sutras = [
  {
    num: '01',
    title: 'Insight',
    desc: 'Understand the business and become subject matter experts to deliver meaningful and measurable outcomes.',
    icon: Lightbulb,
    color: 'text-teal-400',
    bg: 'bg-teal-500/20'
  },
  {
    num: '02',
    title: 'Imagination',
    desc: 'Go beyond conventional thinking to explore better possibilities and create unexpected value.',
    icon: Sparkles,
    color: 'text-purple-400',
    bg: 'bg-purple-500/20'
  },
  {
    num: '03',
    title: 'Innovation',
    desc: 'Leverage modern technology, AI and open-source to build practical, future-ready solutions.',
    icon: Rocket,
    color: 'text-blue-400',
    bg: 'bg-blue-500/20'
  },
  {
    num: '04',
    title: 'Integration',
    desc: 'Combine expertise, architecture and execution to deliver reliable, secure and scalable enterprise solutions.',
    icon: Layers,
    color: 'text-orange-400',
    bg: 'bg-orange-500/20'
  }
];

const SutrasSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-primary-navy relative overflow-hidden text-white">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-[100px] pointer-events-none" />
      
      <Container className="relative z-10">
        
        {/* Header */}
        <div className="mb-16 lg:mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] font-bold text-primary-green tracking-wider uppercase block mb-4"
          >
            The Sutras of iQuadra
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white w-full max-w-5xl leading-[1.2]"
          >
            Four principles guiding every engagement and client relationship.
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {sutras.map((sutra, index) => {
            const Icon = sutra.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#0b1426] border border-white/10 p-8 rounded-2xl flex flex-col h-full hover:-translate-y-1.5 transition-all duration-300 hover:border-white/20"
              >
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${sutra.bg}`}>
                    <Icon className={`w-6 h-6 ${sutra.color}`} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {sutra.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-[14px] flex-grow mb-6">
                  {sutra.desc}
                </p>

                <div className="flex justify-end mt-auto">
                  <span className={`text-[15px] font-bold ${sutra.color}`}>
                    {sutra.num}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default SutrasSection;
