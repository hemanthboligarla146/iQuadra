import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';

const values = [
  {
    num: "01",
    title: "PROPRIETARY AI",
    desc: "Independently built products with domain expertise"
  },
  {
    num: "02",
    title: "ENTERPRISE READY",
    desc: "Scalable, secure and built for real-world impact"
  },
  {
    num: "03",
    title: "AI + HUMAN",
    desc: "Intelligent automation with human oversight"
  },
  {
    num: "04",
    title: "TRUSTED & SECURE",
    desc: "Built with privacy, security and compliance at the core"
  }
];

const ProductValueStrip = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#f0f9ff] to-[#f0fdf4]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col relative px-4 lg:px-8 text-center sm:text-left"
            >
              <span className="text-[32px] font-bold text-primary-navy/20 mb-2 font-mono leading-none">
                {item.num}
              </span>
              <h3 className="text-[14px] font-bold text-primary-navy tracking-widest uppercase mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {item.desc}
              </p>
              
              {/* Vertical divider for desktop (hide on last item) */}
              {index < values.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-primary-navy/10" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductValueStrip;
