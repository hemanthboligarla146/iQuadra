import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Database, Cloud } from 'lucide-react';
import Container from '../Common/Container';

const techPillars = [
  {
    title: "AI Models",
    icon: BrainCircuit,
    techs: ["OpenAI", "Anthropic Claude", "Llama"],
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-100"
  },
  {
    title: "ML / Data",
    icon: Database,
    techs: ["AWS SageMaker", "Databricks", "Snowflake"],
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50 border-purple-100"
  },
  {
    title: "Cloud / Integration",
    icon: Cloud,
    techs: ["Azure OpenAI", "Apache Kafka", "LangChain"],
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50 border-orange-100"
  }
];

const RetailTechFoundation = () => {
  return (
    <section className="pt-4 lg:pt-8 pb-4 lg:pb-8 bg-white">
      <Container>
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] font-bold text-primary-green tracking-wider uppercase mb-4"
          >
            TECHNOLOGY FOUNDATION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] md:text-3xl lg:text-[38px] font-extrabold text-primary-navy tracking-tight"
          >
            Built on enterprise-grade intelligence
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          {techPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex-1 w-full flex flex-col bg-gray-50 rounded-2xl border border-gray-100 p-8 shadow-sm relative overflow-hidden group"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-primary-green transition-colors duration-300" />
              
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm ${pillar.bgColor} ${pillar.iconColor}`}>
                  <pillar.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-[18px] font-bold text-primary-navy">{pillar.title}</h3>
              </div>

              <div className="flex flex-col gap-3">
                {pillar.techs.map((tech, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm group-hover:border-primary-green/20 transition-colors">
                    <span className="text-[14px] font-[600] text-primary-navy">{tech}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-green/50"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default RetailTechFoundation;
