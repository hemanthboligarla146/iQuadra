import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/Common/Container';
import { Settings, Cpu, Cloud, Database, ShieldCheck, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const capabilities = [
  {
    title: 'Enterprise AI & Agentic Systems',
    desc: 'Custom development of autonomous AI agents capable of reasoning, planning, and executing multi-step workflows across your business systems.',
    icon: Cpu,
    color: 'text-green-500',
    bg: 'bg-green-50'
  },
  {
    title: 'Oracle Cloud ERP Implementation',
    desc: 'End-to-end modernization of legacy systems. We architect, implement, and optimize scalable Oracle Cloud ERP solutions tailored to your operations.',
    icon: Settings,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Cloud Native Engineering',
    desc: 'Architecting secure, resilient, and cost-optimized cloud infrastructure on AWS, Azure, and GCP. Migration strategies that minimize downtime.',
    icon: Cloud,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    title: 'Data & Analytics Platforms',
    desc: 'Building robust, AI-ready data foundations. We unify siloed data streams into single sources of truth for predictive analytics and real-time dashboards.',
    icon: Database,
    color: 'text-teal-500',
    bg: 'bg-teal-50'
  },
  {
    title: 'Quality Engineering & Automation',
    desc: 'Integrating continuous testing into CI/CD pipelines. We ensure software reliability and performance through advanced automated testing frameworks.',
    icon: ShieldCheck,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    title: 'Retail Supply Chain Optimization',
    desc: 'Applying predictive algorithms to optimize pricing, route inventory intelligently, and deliver hyper-personalized omnichannel customer experiences.',
    icon: Box,
    color: 'text-pink-500',
    bg: 'bg-pink-50'
  }
];

const Capabilities = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />
      
      <main className="flex-grow pt-[120px] pb-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-16 text-center">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[12px] font-bold text-primary-green tracking-wider uppercase mb-3 block"
              >
                OUR CORE CAPABILITIES
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] font-[800] text-primary-navy tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
              >
                Engineered to scale, built to <span className="text-primary-green">perform.</span>
              </motion.h1>
              <p className="text-[16px] md:text-[18px] text-text-secondary font-[500] max-w-3xl mx-auto">
                Explore our comprehensive suite of enterprise capabilities. From deep tech modernization to applied artificial intelligence, we partner with organizations to solve their most complex challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {capabilities.map((cap, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-primary-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className={`w-14 h-14 rounded-2xl ${cap.bg} flex items-center justify-center ${cap.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <cap.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-[20px] font-[800] text-primary-navy mb-4">{cap.title}</h3>
                  <p className="text-[15px] text-text-secondary leading-relaxed flex-grow">{cap.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button 
                onClick={() => navigate('/contact-ai')} 
                className="bg-primary-green text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-green-500/20 hover:bg-green-600 transition-colors inline-flex items-center"
              >
                Discuss your specific needs
              </button>
            </div>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Capabilities;
