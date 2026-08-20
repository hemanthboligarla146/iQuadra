import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Settings, Users, ShoppingCart, ShieldCheck, Target, HeartHandshake, Database, CheckCircle2 } from 'lucide-react';
import Container from '../Common/Container';
import Button from '../Common/Button';

const oracleModules = [
  { name: 'Financials', icon: BarChart3 },
  { name: 'SCM', icon: Database },
  { name: 'HCM', icon: Users },
  { name: 'Procurement', icon: ShoppingCart },
  { name: 'Manufacturing', icon: Settings },
  { name: 'Projects', icon: Target },
  { name: 'CX / CRM', icon: HeartHandshake },
  { name: 'Analytics', icon: BarChart3 },
];

const services = [
  'Oracle Cloud Fusion Implementation',
  'ERP Consulting & Advisory',
  'Custom Enhancements & Integrations',
  'Cloud Migration & Modernization',
  'Managed ERP Services',
  'Oracle Analytics & Reporting',
  'Quality Assurance & Testing'
];

const OracleERP = () => {
  return (
    <section className="py-10 lg:py-12 bg-gray-50/50 border-b border-gray-100">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left: Content */}
          <div className="w-full lg:w-[25%] flex flex-col relative z-10 text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold text-primary-green tracking-widest uppercase mb-4"
            >
              ORACLE CLOUD ERP
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-[34px] font-extrabold text-primary-navy mb-6 leading-[1.2]"
            >
              Transform with Oracle Cloud
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[14px] text-text-secondary leading-relaxed mb-8"
            >
              Complete Oracle Cloud ERP solutions covering all critical business modules and enterprise needs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button variant="outline" className="!py-3 !px-6 text-[13px] font-bold !border-primary-green/30 !text-primary-green hover:!bg-primary-green/5 transition-all duration-300 !rounded-md bg-white">
                Explore Oracle Solutions &rarr;
              </Button>
            </motion.div>
          </div>

          {/* Middle: Radial Oracle Architecture */}
          <div className="w-full lg:w-[45%] relative h-[400px] flex items-center justify-center">
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <circle cx="50%" cy="50%" r="130" stroke="#1B2B4A" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.1" fill="none" />
            </svg>

            {/* Central Node */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative z-20 w-32 h-32 rounded-full bg-white shadow-lg flex flex-col items-center justify-center border border-gray-100"
            >
              <span className="text-red-600 font-extrabold text-[16px] tracking-wide">ORACLE</span>
              <span className="text-primary-navy font-bold text-[12px]">Cloud ERP</span>
            </motion.div>

            {/* Orbiting Modules */}
            {oracleModules.map((module, idx) => {
              const angle = (idx * (360 / oracleModules.length) - 90) * (Math.PI / 180);
              const radius = 130; 
              
              const left = `calc(50% + ${Math.cos(angle) * radius}px)`;
              const top = `calc(50% + ${Math.sin(angle) * radius}px)`;
              
              const Icon = module.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
                  style={{ left, top }}
                >
                  <Icon className="w-5 h-5 text-primary-green" strokeWidth={1.5} />
                  <span className="text-[10px] font-bold text-primary-navy whitespace-nowrap bg-gray-50/80 px-1 rounded backdrop-blur-sm">
                    {module.name}
                  </span>
                </motion.div>
              );
            })}

          </div>

          {/* Right: Services List */}
          <div className="w-full lg:w-[30%] flex flex-col gap-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.05) }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-primary-green shrink-0" strokeWidth={2} />
                <span className="text-[13px] font-semibold text-primary-navy">{service}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default OracleERP;
