import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Code, CheckSquare, Rocket, RefreshCw, ArrowRight } from 'lucide-react';

const steps = [
  { icon: FileText, title: 'Plan', desc: 'Requirements &\nPlanning' },
  { icon: Code, title: 'Build', desc: 'Development &\nAutomation' },
  { icon: CheckSquare, title: 'Test', desc: 'Functional, Performance\n& Safety Testing' },
  { icon: Rocket, title: 'Release', desc: 'Continuous Integration\n& Delivery' },
  { icon: RefreshCw, title: 'Improve', desc: 'Feedback & Continuous\nImprovement' }
];

const tags = ['Functional Testing', 'Performance Testing', 'Safety-Critical QA', 'Automation', 'SAFe Agile'];

const QualityAgile = () => {
  return (
    <section className="py-8 px-6 lg:px-12 xl:px-16 bg-white h-full flex flex-col justify-between">
      <div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold text-primary-green tracking-widest uppercase mb-4 block"
        >
          QUALITY ENGINEERING & AGILE DELIVERY
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl lg:text-[28px] font-extrabold text-primary-navy mb-12 leading-tight"
        >
          Quality built-in. Value delivered continuously.
        </motion.h2>

        {/* Timeline Visual */}
        <div className="flex items-start justify-between relative mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center relative z-10 w-20">
                  <div className="w-10 h-10 rounded-full border border-primary-green/30 bg-white flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-primary-navy" strokeWidth={1.5} />
                  </div>
                  <span className="text-[12px] font-bold text-primary-navy leading-tight mb-1">{step.title}</span>
                  <span className="text-[9px] text-gray-500 leading-tight whitespace-pre-line">{step.desc}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex-grow flex items-center justify-center mt-5">
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, idx) => (
          <span key={idx} className="text-[10px] font-medium px-3 py-1.5 bg-gray-50 border border-gray-100 rounded text-gray-600">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default QualityAgile;
