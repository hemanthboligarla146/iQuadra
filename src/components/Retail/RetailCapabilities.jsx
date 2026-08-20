import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, UserCheck, Box, Settings, MessageSquare, PieChart, ArrowRight } from 'lucide-react';
import Container from '../Common/Container';

const capabilities = [
  {
    title: "Demand Intelligence",
    description: "Forecast consumer demand with pinpoint accuracy using historical data, market trends, and real-time external signals.",
    icon: LineChart
  },
  {
    title: "Hyper-Personalization",
    description: "Deliver 1:1 tailored experiences across every touchpoint, from targeted promotions to dynamic pricing and layout.",
    icon: UserCheck
  },
  {
    title: "Inventory Intelligence",
    description: "Prevent stockouts and reduce waste by intelligently routing inventory to the right locations at the precise moment.",
    icon: Box
  },
  {
    title: "Store Operations AI",
    description: "Automate task allocation, optimize staff scheduling, and monitor store compliance using computer vision and ML.",
    icon: Settings
  },
  {
    title: "Conversational Commerce",
    description: "Deploy advanced AI agents to assist shoppers, process orders, and handle customer service naturally.",
    icon: MessageSquare
  },
  {
    title: "Retail Analytics Hub",
    description: "Unify siloed data streams into a single pane of glass for predictive analytics and real-time executive dashboards.",
    icon: PieChart
  }
];

const RetailCapabilities = () => {
  return (
    <section className="pt-4 lg:pt-8 pb-4 lg:pb-8 bg-white border-t border-gray-100">
      <Container>
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-3xl lg:text-[38px] font-extrabold text-primary-navy tracking-tight"
          >
            AI-powered capabilities for modern retail
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-white border border-gray-100 rounded-[20px] p-8 shadow-sm hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-primary-navy mb-6 group-hover:bg-primary-green/10 group-hover:text-primary-green transition-colors duration-300">
                <cap.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-[20px] font-bold text-primary-navy mb-3">
                {cap.title}
              </h3>
              
              <p className="text-[15px] text-text-secondary leading-relaxed mb-8 flex-grow">
                {cap.description}
              </p>
              
              <div className="mt-auto flex justify-start">
                <div className="inline-flex items-center text-[13px] font-bold text-primary-green group-hover:text-green-700 transition-colors cursor-pointer">
                  Learn more <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </Container>
    </section>
  );
};

export default RetailCapabilities;
