import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true, onClick }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8, transition: { duration: 0.3, ease: 'easeOut' } } : {}}
      className={`bg-white rounded-xl shadow-enterprise ${hoverEffect ? 'hover:shadow-enterprise-hover cursor-pointer' : ''} p-8 ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;
