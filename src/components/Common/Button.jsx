import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'solid', 
  className = '', 
  onClick, 
  disabled = false,
  icon = null
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-shadow duration-300 ease-in-out px-6 py-3 text-[16px]";
  
  const variants = {
    solid: "bg-primary-green text-white shadow-md hover:shadow-lg",
    outline: "bg-transparent text-primary-navy border border-gray-300 hover:border-primary-green hover:text-primary-green bg-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

export default Button;
