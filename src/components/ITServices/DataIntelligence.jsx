import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, Network, Server, Settings, Cpu, ChevronRight } from 'lucide-react';
import Container from '../Common/Container';

const dataCards = [
  {
    icon: Cpu,
    title: 'Data Sciences',
    desc: 'ML model development, predictive analytics, statistical analysis, feature engineering and model deployment.',
    tags: ['ML', 'AI', 'Analytics']
  },
  {
    icon: Database,
    title: 'Data Engineering',
    desc: 'ETL/ELT pipelines, data warehouses, lakehouse architecture and scalable data platforms.',
    tags: ['ETL/ELT', 'Lakehouse', 'Big Data']
  },
  {
    icon: LineChart,
    title: 'Business intelligence',
    desc: 'BI platforms, dashboards, data integration, data quality and KPI-driven reporting.',
    tags: ['Tableau', 'Power BI', 'BI']
  }
];

const PipelineNode = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center relative z-10 w-16">
    <div className="w-10 h-10 rounded-full border border-primary-green/30 bg-white flex items-center justify-center mb-2 shadow-sm">
      <Icon className="w-4 h-4 text-primary-green" strokeWidth={1.5} />
    </div>
    <span className="text-[10px] font-bold text-primary-navy leading-tight mb-1">{title}</span>
    <span className="text-[8px] text-gray-500 leading-tight">{desc}</span>
  </div>
);

const DataIntelligence = () => {
  return (
    <section className="py-10 lg:py-12 bg-white border-b border-gray-100">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Left: Content & Pipeline */}
          <div className="w-full lg:w-[45%] flex flex-col pr-0 lg:pr-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold text-primary-green tracking-widest uppercase mb-4"
            >
              DATA & INTELLIGENCE
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-[34px] font-extrabold text-primary-navy mb-12 leading-[1.2]"
            >
              Turn data into decisions
            </motion.h2>

            {/* Pipeline Visual */}
            <div className="relative w-full flex items-start justify-between mt-auto pb-4">
              {/* Dashed line connecting nodes */}
              <div className="absolute top-5 left-8 right-8 h-[1px] border-t border-dashed border-gray-300 z-0" />
              
              <PipelineNode icon={Server} title="Sources" desc="Apps, Devices, Databases" />
              <ChevronRight className="w-4 h-4 text-gray-300 absolute top-[14px] left-[18%]" />
              
              <PipelineNode icon={Settings} title="Pipelines" desc="Ingest, Transform, Orchestrate" />
              <ChevronRight className="w-4 h-4 text-gray-300 absolute top-[14px] left-[40%]" />
              
              <PipelineNode icon={Database} title="Data Platform" desc="Lakehouse, Warehouse, Data Quality" />
              <ChevronRight className="w-4 h-4 text-gray-300 absolute top-[14px] left-[65%]" />
              
              <PipelineNode icon={LineChart} title="Analytics" desc="BI, Visualization, ML/AI Models" />
              <ChevronRight className="w-4 h-4 text-gray-300 absolute top-[14px] left-[85%]" />
              
              <PipelineNode icon={Network} title="Decisions" desc="Insights that drive business impact" />
            </div>
          </div>

          {/* Right: Cards */}
          <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataCards.map((card, idx) => {
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
                  <div className="w-12 h-12 rounded-full flex items-center mb-6">
                    <Icon className="w-8 h-8 text-primary-navy" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-[16px] font-bold text-primary-navy mb-4 leading-tight">
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

export default DataIntelligence;
