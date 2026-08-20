import React from 'react';
import { motion } from 'framer-motion';

const models = [
  {
    id: '01',
    title: 'Onsite Delivery',
    desc: 'iQuadra teams work at your location with complete focus on your goals.'
  },
  {
    id: '02',
    title: 'Onsite &\nNearshore',
    desc: 'Onsite leadership with nearshore teams for development and QA.'
  },
  {
    id: '03',
    title: 'Onsite, Nearshore\n& Offshore',
    desc: 'A blended delivery model for scale, speed and cost optimization.'
  },
  {
    id: '04',
    title: 'Onsite &\nOffshore',
    desc: 'Onsite coordination with offshore teams for efficient delivery.'
  }
];

const DeliveryModels = () => {
  return (
    <section className="py-8 px-6 lg:px-12 xl:px-16 h-full flex flex-col justify-between">
      <div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold text-primary-green tracking-widest uppercase mb-12 block"
        >
          ENGAGEMENT MODELS
        </motion.span>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-primary-green">0 {model.id.replace('0', '')}</span>
              </div>
              <h3 className="text-[13px] font-bold text-primary-navy mb-2 leading-tight whitespace-pre-line">
                {model.title}
              </h3>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                {model.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryModels;
