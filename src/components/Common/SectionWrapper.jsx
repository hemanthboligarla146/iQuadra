import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className = '', id = '', bg = 'bg-white' }) => {
  return (
    <section id={id} className={`py-[40px] lg:py-[50px] overflow-hidden ${bg} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
