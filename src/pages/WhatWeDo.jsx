import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/Common/Container';
import { Settings, Cpu, Cloud, Database, ArrowLeft } from 'lucide-react';

const WhatWeDo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />
      
      <main className="flex-grow pt-[120px] pb-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-[14px] font-[600] text-text-secondary hover:text-primary-green transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>

            <div className="mb-12 text-center">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[12px] font-bold text-primary-green tracking-wider uppercase mb-3 block"
              >
                WHAT WE DO
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] font-[800] text-primary-navy tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
              >
                Strategy + engineering + proprietary AI + enterprise IT.
              </motion.h1>
              <p className="text-[16px] md:text-[18px] text-text-secondary font-[500] max-w-2xl mx-auto">
                We operate across the full transformation lifecycle — from strategy and roadmap definition through applied engineering, ERP implementation, platform deployment, quality engineering and ongoing optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Proprietary AI Products', icon: Cpu, desc: 'Deploying iQua.ai and Helix AI to automate, optimize and scale operations with confidence.' },
                { title: 'Enterprise IT & ERP', icon: Settings, desc: 'Modernizing legacy systems and implementing scalable Oracle ERP solutions.' },
                { title: 'Cloud Engineering', icon: Cloud, desc: 'Architecting secure, resilient, and cost-optimized cloud infrastructure.' },
                { title: 'Data Sciences', icon: Database, desc: 'Building intelligent data platforms that power predictive analytics.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center text-primary-green mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[20px] font-[700] text-primary-navy mb-3">{item.title}</h3>
                  <p className="text-[15px] text-text-secondary leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
