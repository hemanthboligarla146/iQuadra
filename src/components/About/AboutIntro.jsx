import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Building2, Lightbulb, Target } from 'lucide-react';
import Container from '../Common/Container';
import SectionWrapper from '../Common/SectionWrapper';

const highlights = [
  {
    icon: Brain,
    title: 'AI-First Mindset',
    desc: 'Embedding intelligence into every architectural decision.'
  },
  {
    icon: Building2,
    title: 'Enterprise Focused',
    desc: 'Scaling solutions securely for complex global organizations.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driven',
    desc: 'Applying cutting-edge technology to solve real problems.'
  },
  {
    icon: Target,
    title: 'Outcome Oriented',
    desc: 'Prioritizing measurable business impact above all else.'
  }
];

const AboutIntro = () => {
  return (
    <SectionWrapper className="pt-16 pb-8 lg:pt-24 lg:pb-12 bg-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-10 lg:mb-12">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col max-w-xl"
          >
            <span className="text-[13px] font-bold text-primary-green tracking-wider uppercase mb-6">
              About iQuadra
            </span>
            <h1 className="text-[38px] sm:text-[48px] lg:text-[60px] font-[800] text-primary-navy leading-[1.05] tracking-tight mb-8">
              Engineering intelligent transformation for a <span className="green-gradient-text">smarter enterprise</span> <span className="green-gradient-text">future.</span>
            </h1>
            <p className="text-[16px] font-[500] text-text-secondary leading-[1.6] max-w-[600px]">
              iQuadra Information Services is an AI-first technology and IT services company helping enterprises modernize through intelligent systems and expert delivery teams.
            </p>
          </motion.div>

          {/* Right: Building Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-[4/3] max-h-[450px] rounded-[24px] overflow-hidden shadow-lg"
          >
            <img
              src="/about-hero-building.jpg"
              alt="iQuadra Corporate Building"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

        </div>

        {/* Four compact capability highlights below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 border-t border-gray-100">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary-bg flex items-center justify-center text-primary-navy group-hover:text-primary-green group-hover:bg-primary-green/10 transition-colors duration-300">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-primary-navy mb-1 leading-tight">{item.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </SectionWrapper>
  );
};

export default AboutIntro;
