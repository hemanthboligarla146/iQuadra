import React from 'react';
import { motion } from 'framer-motion';
import { Users, Plus } from 'lucide-react';

const tags = [
  'Java', 'Python', 'Cloud', 'Data Engineering', 'DevOps', 'QA/Automation',
  'Oracle Cloud', 'Data Science/ML', 'React & Mobile', 'Scrum Masters', 'POs', 'Agile Coaches'
];

const StaffAugmentation = () => {
  return (
    <section className="py-8 px-6 lg:px-12 xl:px-16 bg-white h-full flex flex-col justify-between">
      <div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold text-primary-green tracking-widest uppercase mb-4 block"
        >
          STAFF AUGMENTATION
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl lg:text-[28px] font-extrabold text-primary-navy mb-12 leading-tight"
        >
          Right skills. Right time. Right impact.
        </motion.h2>

        {/* Team Visual */}
        <div className="flex items-center justify-center gap-8 mb-12">
          
          {/* Client Team */}
          <div className="flex flex-col items-center">
            <span className="text-[12px] font-bold text-primary-navy mb-3">Client Team</span>
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                  <Users className="w-4 h-4 text-gray-500" />
                </div>
              ))}
            </div>
          </div>

          <Plus className="w-5 h-5 text-gray-400 mt-6" strokeWidth={3} />

          {/* iQuadra Specialists */}
          <div className="flex flex-col items-center">
            <span className="text-[12px] font-bold text-primary-navy mb-3">iQuadra Specialists</span>
            <div className="flex -space-x-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary-navy" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Tags Grid */}
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

export default StaffAugmentation;
