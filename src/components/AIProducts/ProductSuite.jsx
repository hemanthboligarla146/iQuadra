import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, MessageSquare, Box, ShieldCheck, ShoppingBag, ArrowRight } from 'lucide-react';
import Container from '../Common/Container';

const products = [
  {
    name: "iQua.ai",
    category: "Hiring Intelligence",
    description: "AI-powered interviews, assessments and talent intelligence to hire the right people faster.",
    icon: BarChart3,
    colorTheme: "green",
    isPlaceholder: true
  },
  {
    name: "Helix AI",
    category: "Operations Intelligence",
    description: "Optimize cloud cost, security and compliance with AI-driven insights and proactive recommendations.",
    icon: TrendingUp,
    colorTheme: "purple",
    isPlaceholder: true
  },
  {
    name: "Astra Assist",
    category: "Enterprise Assistant",
    description: "Intelligent assistant for enterprises to automate tasks, answer queries and boost productivity.",
    icon: MessageSquare,
    colorTheme: "blue",
    isPlaceholder: true
  },
  {
    name: "iQPredict",
    category: "Predictive Intelligence",
    description: "Advanced predictive analytics to forecast demand, detect risks and uncover growth opportunities.",
    icon: Box,
    colorTheme: "orange",
    isPlaceholder: true
  },
  {
    name: "Guardian AI",
    category: "Security Intelligence",
    description: "AI-driven threat detection, anomaly monitoring and security automation for a stronger digital defense.",
    icon: ShieldCheck,
    colorTheme: "teal",
    isPlaceholder: true
  },
  {
    name: "Retail IQ",
    category: "Retail Intelligence",
    description: "AI solutions for retail planning, pricing, inventory optimization and customer engagement.",
    icon: ShoppingBag,
    colorTheme: "pink",
    isPlaceholder: true
  }
];

const colorClasses = {
  green: {
    bg: "bg-green-100/60",
    text: "text-green-600",
    badgeBg: "bg-green-50",
    badgeText: "text-green-700"
  },
  purple: {
    bg: "bg-purple-100/60",
    text: "text-purple-600",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-700"
  },
  blue: {
    bg: "bg-blue-100/60",
    text: "text-blue-500",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700"
  },
  orange: {
    bg: "bg-orange-100/60",
    text: "text-orange-500",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700"
  },
  teal: {
    bg: "bg-teal-100/60",
    text: "text-teal-600",
    badgeBg: "bg-teal-50",
    badgeText: "text-teal-700"
  },
  pink: {
    bg: "bg-pink-100/60",
    text: "text-pink-500",
    badgeBg: "bg-pink-50",
    badgeText: "text-pink-700"
  }
};

const ProductSuite = () => {
  return (
    <section className="pt-4 lg:pt-8 pb-16 lg:pb-20 bg-white border-t border-gray-100">
      <Container>
        
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-bold text-primary-green tracking-wider uppercase mb-3"
          >
            OUR AI PRODUCT SUITE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] md:text-3xl lg:text-[34px] font-extrabold text-primary-navy tracking-tight"
          >
            Purpose-built AI solutions for every function
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-5">
          {products.map((product, index) => {
            const Icon = product.icon;
            const theme = colorClasses[product.colorTheme];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex flex-col bg-white border border-gray-100 rounded-[16px] p-6 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Hexagon Icon */}
                <div className="flex justify-center mb-5">
                   <div 
                     className={`w-[68px] h-[68px] flex items-center justify-center ${theme.bg} ${theme.text} group-hover:scale-105 transition-transform duration-300`}
                     style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                   >
                     <Icon className="w-7 h-7" strokeWidth={2} />
                   </div>
                </div>
                
                <h3 className="text-[17px] font-[800] text-primary-navy mb-2 text-center">
                  {product.name}
                </h3>
                
                <div className="flex justify-center mb-4">
                  <span className={`inline-block px-3 py-1 ${theme.badgeBg} ${theme.badgeText} text-[10px] font-bold rounded-full uppercase tracking-wider`}>
                    {product.category}
                  </span>
                </div>
                
                <p className="text-[13px] text-text-secondary leading-[1.6] mb-8 text-center flex-grow font-[500]">
                  {product.description}
                </p>
                
                <div className="mt-auto flex justify-start">
                  <a href="#" className="inline-flex items-center text-[13px] font-bold text-primary-green hover:text-green-700 transition-colors">
                    Learn more <ArrowRight className="w-[14px] h-[14px] ml-1.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </Container>
    </section>
  );
};

export default ProductSuite;

