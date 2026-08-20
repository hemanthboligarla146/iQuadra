import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Store, Globe, CreditCard, Tag, Database, Activity, GitMerge } from 'lucide-react';
import Container from '../Common/Container';

const channels = [
  { name: "E-commerce", icon: Globe, color: "text-blue-500" },
  { name: "Store", icon: Store, color: "text-orange-500" },
  { name: "Mobile App", icon: Smartphone, color: "text-purple-500" },
  { name: "Loyalty", icon: Tag, color: "text-pink-500" },
  { name: "POS", icon: CreditCard, color: "text-teal-500" },
];

const cards = [
  {
    title: "Data Integration",
    desc: "Seamlessly ingest unstructured and structured data from across the enterprise.",
    icon: GitMerge,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Data Quality",
    desc: "Automated cleansing, deduplication and resolution of customer identities.",
    icon: Database,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Real-Time Intelligence",
    desc: "Deliver up-to-the-second insights for instant personalization.",
    icon: Activity,
    color: "text-orange-500",
    bg: "bg-orange-50"
  }
];

const CustomerIntelligence = () => {
  return (
    <section className="pt-4 lg:pt-8 pb-10 lg:pb-16 bg-gray-50 border-t border-gray-100">
      <Container>
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-3xl lg:text-[38px] font-extrabold text-primary-navy tracking-tight"
          >
            One customer. One intelligent view.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-[16px] md:text-[18px] text-text-secondary max-w-3xl leading-[1.6] font-[500]"
          >
            Break down operational silos to create a true Golden Record. We unify fragmented touchpoints into a centralized Customer Master Data layer, powering real-time personalization across every channel.
          </motion.p>
        </div>

        {/* 360 Visual */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            
            {/* Left: Sources */}
            <div className="flex flex-wrap md:flex-col justify-center gap-3 md:gap-4 z-10 w-full md:w-auto">
              {channels.map((chan, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-gray-100 w-auto md:w-40"
                >
                  <chan.icon className={`w-4 h-4 ${chan.color}`} strokeWidth={2} />
                  <span className="text-[12px] font-bold text-primary-navy">{chan.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Center: AI Engine */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative z-10 flex flex-col items-center flex-grow py-8 md:py-0"
            >
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1.5px] bg-gradient-to-r from-gray-200 via-primary-green to-gray-200 -translate-y-1/2 -z-10" />
              
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary-navy shadow-xl flex flex-col items-center justify-center p-6 border-4 border-white relative">
                <div className="absolute inset-0 rounded-full border border-primary-green/30 animate-pulse"></div>
                <Database className="w-8 h-8 md:w-10 md:h-10 text-white mb-2" strokeWidth={1.5} />
                <span className="text-[12px] md:text-[14px] font-bold text-white text-center leading-tight">Customer<br/>Data Layer</span>
                <span className="text-[9px] md:text-[10px] text-primary-green uppercase tracking-wider mt-2 font-bold">+ AI</span>
              </div>
            </motion.div>

            {/* Right: Outcomes */}
            <div className="flex flex-col gap-4 z-10 w-full md:w-auto items-center md:items-stretch">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-primary-green text-white px-6 py-4 rounded-xl shadow-md font-bold text-[14px] text-center w-full md:w-48"
              >
                Personalization
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="bg-white border border-gray-200 text-primary-navy px-6 py-4 rounded-xl shadow-sm font-bold text-[14px] text-center w-full md:w-48"
              >
                Retail Analytics
              </motion.div>
            </div>

          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-gray-100 shadow-sm ${card.bg} ${card.color}`}>
                <card.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-bold text-primary-navy mb-2">
                {card.title}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default CustomerIntelligence;
