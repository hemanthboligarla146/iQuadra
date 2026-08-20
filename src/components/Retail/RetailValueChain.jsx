import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, LineChart, Calendar, ShoppingCart, Truck, Activity } from 'lucide-react';
import Container from '../Common/Container';

const stages = [
  { id: 'discover', label: 'Discover', icon: Search, desc: 'Analyze market trends and competitor signals.' },
  { id: 'customer', label: 'Customer', icon: User, desc: 'Build 360° profiles and behavior graphs.' },
  { id: 'predict', label: 'Predict', icon: LineChart, desc: 'Forecast demand down to the SKU-store level.' },
  { id: 'plan', label: 'Plan', icon: Calendar, desc: 'Optimize assortment and space planning.' },
  { id: 'sell', label: 'Sell', icon: ShoppingCart, desc: 'Deliver hyper-personalized pricing and offers.' },
  { id: 'fulfill', label: 'Fulfill', icon: Truck, desc: 'Route inventory intelligently to prevent stockouts.' },
  { id: 'optimize', label: 'Optimize', icon: Activity, desc: 'Continuously learn and adjust operations.' },
];

const RetailValueChain = () => {
  const [activeStage, setActiveStage] = useState(stages[0].id);

  return (
    <section className="pt-4 lg:pt-8 pb-10 lg:pb-16 bg-white border-t border-gray-100">
      <Container>
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-3xl lg:text-[38px] font-extrabold text-primary-navy tracking-tight"
          >
            The Intelligent Retail Value Chain
          </motion.h2>
          <p className="mt-4 text-[16px] text-text-secondary">Hover over a stage to see how AI transforms the retail lifecycle.</p>
        </div>

        {/* Desktop Horizontal Flow */}
        <div className="hidden lg:flex flex-col items-center max-w-6xl mx-auto">
          <div className="flex items-center justify-between w-full relative pt-4 pb-8 px-4">
            {/* Connecting background line */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-100 -translate-y-1/2 z-0" />
            
            {stages.map((stage, idx) => {
              const isActive = activeStage === stage.id;
              const isPast = stages.findIndex(s => s.id === activeStage) > idx;
              
              return (
                <div 
                  key={stage.id} 
                  className="relative z-10 flex flex-col items-center cursor-pointer group"
                  onMouseEnter={() => setActiveStage(stage.id)}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${isActive ? 'bg-primary-green border-green-100 text-white scale-110 shadow-lg' : isPast ? 'bg-primary-navy border-gray-50 text-white' : 'bg-white border-gray-100 text-gray-400 group-hover:border-primary-green/30'}`}>
                    <stage.icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
                  </div>
                  <span className={`absolute -bottom-8 whitespace-nowrap text-[13px] font-bold transition-colors ${isActive ? 'text-primary-green' : 'text-primary-navy'}`}>
                    {stage.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Description Display */}
          <div className="mt-16 bg-primary-navy rounded-2xl p-8 max-w-2xl w-full text-center min-h-[120px] flex items-center justify-center shadow-xl relative overflow-hidden">
            {/* Subtle green glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary-green/20 rounded-full blur-[50px] pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <h4 className="text-[18px] font-bold text-white mb-2">{stages.find(s => s.id === activeStage)?.label} Stage</h4>
                <p className="text-[15px] text-gray-300 leading-relaxed">
                  {stages.find(s => s.id === activeStage)?.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Flow */}
        <div className="flex lg:hidden flex-col gap-4 max-w-md mx-auto">
          {stages.map((stage, idx) => (
            <div key={stage.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-primary-green shadow-sm border border-gray-100">
                <stage.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[16px] font-bold text-primary-navy mb-1">{stage.label}</h4>
                <p className="text-[14px] text-text-secondary leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default RetailValueChain;
