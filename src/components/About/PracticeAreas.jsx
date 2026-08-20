import React from 'react';
import { motion } from 'framer-motion';
import { Map, Settings, Cloud, ShoppingBag, Users, LineChart, ArrowRight } from 'lucide-react';
import Container from '../Common/Container';

const practices = [
  {
    title: 'AI Strategy & Roadmapping',
    desc: 'Enterprise AI readiness assessments and multi-year transformation roadmaps.',
    icon: Map,
    color: 'text-teal-500',
    bg: 'bg-teal-50'
  },
  {
    title: 'Agentic Systems & Automation',
    desc: 'Building autonomous AI agents and multi-step workflow orchestration.',
    icon: Settings,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    title: 'Cloud & Data Engineering',
    desc: 'Modern data foundations on AWS, Azure, GCP with AI-ready architecture.',
    icon: Cloud,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Agentic AI for Retail',
    desc: 'Demand forecasting, personalization and inventory intelligence.',
    icon: ShoppingBag,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    title: 'Hiring Intelligence (iQua.ai)',
    desc: 'AI-powered virtual interviews, assessment and talent intelligence platform.',
    icon: Users,
    color: 'text-teal-500',
    bg: 'bg-teal-50'
  },
  {
    title: 'Operations Intelligence (Helix AI)',
    desc: 'Cloud cost, security and compliance optimization through AI-powered insights.',
    icon: LineChart,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }
];

const PracticeAreas = () => {
  return (
    <section className="pt-16 pb-8 lg:pt-20 lg:pb-10 bg-secondary-bg">
      <Container>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] font-bold text-primary-green tracking-wider uppercase block mb-4"
          >
            Our Practice Areas
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-primary-navy leading-[1.2]"
          >
            Capabilities that accelerate transformation and unlock value.
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-enterprise-hover transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Accent Line on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary-green scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />

                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1 ${practice.bg}`}>
                  <Icon className={`w-6 h-6 ${practice.color}`} strokeWidth={1.5} />
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[17px] font-bold text-primary-navy pr-4">
                    {practice.title}
                  </h3>
                </div>
                
                <div className="flex flex-col flex-grow justify-between">
                  <p className="text-text-secondary leading-relaxed text-[14px] mb-4">
                    {practice.desc}
                  </p>
                  <div className="flex justify-end">
                    <ArrowRight className={`w-5 h-5 ${practice.color} opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default PracticeAreas;
