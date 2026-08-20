import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Globe, Building2 } from 'lucide-react';
import Container from '../Common/Container';

const models = [
  {
    num: '01',
    title: 'Onsite Delivery',
    desc: 'iQuadra employees working at customer premises providing solutions in alignment with the architectural decisions of your full-time associates.',
    icon: MapPin
  },
  {
    num: '02',
    title: 'Onsite & Near Shore',
    desc: 'iQuadra SMEs at client sites discover and document requirements while near-shore associates handle development, QA and deployment.',
    icon: Users
  },
  {
    num: '03',
    title: 'Onsite, Near Shore & Offshore',
    desc: 'Full 24x7 delivery using Agile/XP techniques. Onsite gathers requirements; offshore continues work during off-hours — continuous delivery.',
    icon: Globe
  },
  {
    num: '04',
    title: 'Onsite & Offshore',
    desc: 'Strong onshore leadership with iQuadra\'s near-shore development centers for quality delivery at competitive cost.',
    icon: Building2
  }
];

const EngagementModels = () => {
  return (
    <section className="py-8 lg:py-10 bg-white border-t border-gray-100">
      <Container>
        {/* Header */}
        <div className="mb-8 lg:mb-10 max-w-3xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] font-bold text-primary-green tracking-wider uppercase block mb-4"
          >
            Engagement Models
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-primary-navy tracking-tight leading-[1.2]"
          >
            Flexible delivery options designed to match enterprise needs.
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl flex flex-col h-full border border-gray-100 hover:border-primary-green/30 hover:shadow-enterprise-hover transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-1">
                    <Icon className="w-8 h-8 text-primary-green" strokeWidth={1.5} />
                  </div>
                  <span className="text-3xl font-extrabold text-primary-green">
                    {model.num}
                  </span>
                </div>
                
                <h3 className="text-[17px] font-bold text-primary-navy mb-4">
                  {model.title}
                </h3>
                
                <p className="text-[14px] text-text-secondary leading-relaxed flex-grow">
                  {model.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default EngagementModels;
