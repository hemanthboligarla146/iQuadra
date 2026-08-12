import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cloud, Users, FlaskConical } from 'lucide-react';
import Card from '../Common/Card';
import AnimatedCounter from '../Common/AnimatedCounter';

const metricsList = [
  { value: 70, suffix: "%", label: "Reduction in screening time", icon: Bot, color: "text-primary-green", bg: "bg-primary-green/10" },
  { value: 28, suffix: "%", label: "Average cloud cost reduction", icon: Cloud, color: "text-secondary-blue", bg: "bg-secondary-blue/10" },
  { value: 500, suffix: "+", label: "Enterprise clients served", icon: Users, color: "text-accent-orange", bg: "bg-accent-orange/10" },
  { value: 20, suffix: "%", label: "Revenue invested in R&D", icon: FlaskConical, color: "text-accent-purple", bg: "bg-accent-purple/10" },
];

const Metrics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {metricsList.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex"
          >
            <Card className="flex items-center w-full px-6 py-6 h-[100px] border border-gray-100 shadow-sm hover:shadow-enterprise-hover rounded-[20px]">
              <div className="flex-shrink-0 mr-5">
                <div className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center ${metric.bg}`}>
                  <Icon className={`w-6 h-6 ${metric.color}`} strokeWidth={2} />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[28px] font-[800] text-primary-navy leading-[1] mb-1">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </h3>
                <p className="text-[13px] font-[600] text-primary-navy leading-[1.3]">
                  {metric.label}
                </p>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Metrics;
