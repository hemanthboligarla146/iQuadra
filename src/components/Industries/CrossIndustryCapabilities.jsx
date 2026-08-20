import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';
import { BrainCircuit, Database, Server, Settings } from 'lucide-react';

const cards = [
  {
    title: "AI & Automation",
    desc: "Intelligent workflows and AI-driven decision support systems tailored for industry-specific data.",
    icon: BrainCircuit,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Enterprise Systems",
    desc: "ERP, cloud architecture and enterprise application modernization (Oracle, AWS, Azure).",
    icon: Server,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Data & Analytics",
    desc: "Data platforms, engineering pipelines and operational intelligence for real-time visibility.",
    icon: Database,
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    title: "Quality & Engineering",
    desc: "Quality engineering, continuous testing and safety-critical delivery frameworks.",
    icon: Settings,
    color: "text-green-600",
    bg: "bg-green-50"
  }
];

const CrossIndustryCapabilities = () => {
  return (
    <section className="pt-10 pb-4 lg:pt-16 lg:pb-8 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[24px] bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-gray-100 ${card.bg} ${card.color}`}>
                <card.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] font-bold text-primary-navy mb-4 group-hover:text-primary-green transition-colors">
                {card.title}
              </h3>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CrossIndustryCapabilities;
