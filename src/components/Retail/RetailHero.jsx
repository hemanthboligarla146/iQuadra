import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Database, Brain, Workflow, Target, ArrowRight } from 'lucide-react';
import Container from '../Common/Container';
import Button from '../Common/Button';

const FlowItem = ({ icon: Icon, label, delay, iconColor = "text-primary-navy", bgColor = "bg-gray-50" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center gap-2"
  >
    <div className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center shadow-sm ${bgColor} ${iconColor}`}>
      <Icon className="w-5 h-5" strokeWidth={1.5} />
    </div>
    <span className="text-[11px] font-[600] text-text-secondary uppercase tracking-wider">{label}</span>
  </motion.div>
);

const FlowArrow = ({ delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="hidden sm:flex text-gray-300 mx-2"
  >
    <ArrowRight className="w-4 h-4" />
  </motion.div>
);

const RetailHero = () => {
  return (
    <section className="pt-20 lg:pt-24 pb-6 lg:pb-8 bg-white relative overflow-hidden">
      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {['Retail Practice', 'Agentic AI', 'Enterprise'].map((pill, idx) => (
            <div 
              key={idx} 
              className="px-5 py-2 rounded-full bg-[#0A192F] border border-primary-green text-primary-green text-[14px] font-[600] tracking-wide shadow-sm"
            >
              {pill}
            </div>
          ))}
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[38px] sm:text-[48px] lg:text-[60px] font-[800] text-primary-navy leading-[1.05] tracking-tight mb-6 max-w-4xl"
        >
          Intelligence that turns every retail decision into an opportunity.
        </motion.h1>
        
        {/* Supporting text */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[16px] md:text-[18px] font-[500] text-text-secondary leading-[1.6] max-w-2xl mb-10"
        >
          iQuadra combines AI, data, and enterprise technology to help retailers predict demand, personalize experiences, and operate smarter.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
        >
          <Button variant="solid" className="w-full sm:w-auto justify-center !py-3.5 !px-8 text-[15px] font-semibold !bg-primary-green hover:!bg-green-600 !text-white border-none shadow-[0_4px_14px_0_rgba(22,199,132,0.39)] !rounded-lg">
            Talk to Our Retail AI Team &rarr;
          </Button>
          <Button variant="outline" className="w-full sm:w-auto justify-center !py-3.5 !px-8 text-[15px] font-semibold !text-primary-navy !border-gray-200 hover:!bg-gray-50 transition-all duration-300 !rounded-lg bg-white">
            Explore Retail Capabilities &rarr;
          </Button>
        </motion.div>

        {/* Intelligence Flow Visual */}
        <div className="w-full max-w-3xl flex flex-wrap justify-center sm:flex-nowrap items-center gap-y-6">
          <FlowItem icon={UserCircle} label="Customer" delay={0.4} iconColor="text-blue-600" bgColor="bg-blue-50" />
          <FlowArrow delay={0.5} />
          <FlowItem icon={Database} label="Data" delay={0.5} iconColor="text-purple-600" bgColor="bg-purple-50" />
          <FlowArrow delay={0.6} />
          <FlowItem icon={Brain} label="AI Intelligence" delay={0.6} iconColor="text-primary-green" bgColor="bg-green-50" />
          <FlowArrow delay={0.7} />
          <FlowItem icon={Workflow} label="Decision" delay={0.7} iconColor="text-orange-500" bgColor="bg-orange-50" />
          <FlowArrow delay={0.8} />
          <FlowItem icon={Target} label="Outcome" delay={0.8} iconColor="text-pink-500" bgColor="bg-pink-50" />
        </div>
        
      </Container>
    </section>
  );
};

export default RetailHero;
