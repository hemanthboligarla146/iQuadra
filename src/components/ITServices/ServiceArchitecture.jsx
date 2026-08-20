import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, ShieldCheck } from 'lucide-react';
import Container from '../Common/Container';

const OracleIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M16.9,6H7.1C4.3,6,2,8.3,2,11.1v1.8C2,15.7,4.3,18,7.1,18h9.8c2.8,0,5.1-2.3,5.1-5.1v-1.8C22,8.3,19.7,6,16.9,6z M19.4,12.9 c0,1.4-1.1,2.5-2.5,2.5H7.1c-1.4,0-2.5-1.1-2.5-2.5v-1.8c0-1.4,1.1-2.5,2.5-2.5h9.8c1.4,0,2.5,1.1,2.5,2.5V12.9z" fill="currentColor"/>
  </svg>
);

const capabilities = [
  {
    id: '01',
    icon: Code2,
    title: 'Application &\nCloud Development',
    desc: 'Modern applications and platforms that accelerate business outcomes.',
    tags: ['Java', 'Python', 'Web', 'Mobile']
  },
  {
    id: '02',
    icon: Database,
    title: 'Data &\nIntelligence',
    desc: 'Unlock actionable insights with data engineering, analytics and BI.',
    tags: ['AI/ML', 'Data Engineering', 'BI']
  },
  {
    id: '03',
    icon: OracleIcon,
    iconColor: 'text-red-600',
    title: 'Oracle Cloud\nERP',
    desc: 'End-to-end Oracle Cloud solutions to streamline processes and drive growth.',
    tags: ['ERP', 'Fusion', 'Analytics']
  },
  {
    id: '04',
    icon: Cloud,
    title: 'Cloud, DevOps &\nInfrastructure',
    desc: 'Scalable cloud platforms with automated delivery and reliable operations.',
    tags: ['AWS', 'Azure', 'DevOps']
  },
  {
    id: '05',
    icon: ShieldCheck,
    title: 'Quality Engineering\n& Agile Delivery',
    desc: 'Assured quality and agile excellence for predictable, continuous delivery.',
    tags: ['QA', 'Automation', 'SAFe']
  }
];

const ServiceArchitecture = () => {
  return (
    <section className="pt-6 pb-10 lg:pt-8 lg:pb-12 bg-white border-b border-gray-100">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-[13px] font-bold text-primary-navy tracking-widest uppercase">
            Technology capabilities built around your enterprise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-[12px] font-bold text-gray-400">{cap.id}</span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>
                
                <Icon className={`w-10 h-10 mb-6 ${cap.iconColor || 'text-primary-green'}`} strokeWidth={1.5} />
                
                <h3 className="text-[15px] font-bold text-primary-navy mb-4 leading-tight whitespace-pre-line">
                  {cap.title}
                </h3>
                
                <p className="text-[13px] text-text-secondary leading-relaxed mb-6 flex-grow">
                  {cap.desc}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {cap.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-medium px-2 py-1 bg-gray-50 border border-gray-100 rounded text-gray-500 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServiceArchitecture;
