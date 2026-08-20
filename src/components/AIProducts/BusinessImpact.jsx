import React from 'react';
import { motion } from 'framer-motion';
import { Users, LayoutDashboard, LineChart, ShoppingBag, ShieldCheck } from 'lucide-react';
import Container from '../Common/Container';

const capabilities = [
  {
    title: "Talent & HR",
    desc: "Improve hiring quality, reduce time-to-hire and enhance candidate experience.",
    icon: Users
  },
  {
    title: "Operations",
    desc: "Automate processes, reduce costs and improve operational efficiency.",
    icon: LayoutDashboard
  },
  {
    title: "Finance",
    desc: "Forecast accurately, manage risk and improve financial performance.",
    icon: LineChart
  },
  {
    title: "Retail",
    desc: "Optimize inventory, personalize engagement and drive profitable growth.",
    icon: ShoppingBag
  },
  {
    title: "IT & Security",
    desc: "Strengthen security posture and ensure compliance with AI-powered monitoring.",
    icon: ShieldCheck
  }
];

const BusinessImpact = () => {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] font-bold text-primary-green tracking-wider uppercase mb-4"
          >
            SOLUTIONS THAT DRIVE IMPACT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-primary-navy max-w-3xl leading-[1.2]"
          >
            Deliver measurable outcomes across the enterprise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.1) }}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-5 text-primary-navy border border-gray-100 shadow-sm">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-bold text-primary-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default BusinessImpact;
