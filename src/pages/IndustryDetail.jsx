import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/Common/Container';
import Button from '../components/Common/Button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { industriesData } from '../components/Industries/industriesData';

const IndustryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const industry = industriesData.find(i => i.id === id);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const Icon = industry.icon;

  return (
    <div className="min-h-screen flex flex-col bg-white font-outfit">
      <Navbar />
      
      <main className="flex-grow pt-[100px] pb-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            
            {/* Back Button */}
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-[14px] font-[600] text-text-secondary hover:text-primary-green transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Industries
            </button>

            {/* Header Content */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${industry.bgColor}`}>
                  <Icon className={`w-6 h-6 ${industry.color}`} />
                </div>
                <span className="text-[13px] font-bold text-primary-green tracking-wider uppercase">
                  Industry Solution
                </span>
              </div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[36px] md:text-[48px] lg:text-[56px] font-[800] text-primary-navy tracking-tight leading-[1.1] mb-6"
              >
                {industry.name}
              </motion.h1>
            </div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-lg border border-gray-100"
            >
              <img 
                src={industry.image} 
                alt={industry.name} 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            {/* Content Split */}
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
              
              {/* Main Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full md:w-2/3"
              >
                <h3 className="text-[22px] md:text-[24px] font-bold text-primary-navy mb-6 leading-snug">
                  {industry.description}
                </h3>
                <p className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed mb-8">
                  {industry.extraContent}
                </p>
                <div className="w-16 h-1 bg-primary-green rounded-full mb-8"></div>
                
                <h4 className="text-[18px] font-bold text-primary-navy mb-4">Core Capabilities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {industry.tags.map((tag, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${industry.color} flex-shrink-0`} />
                      <span className="text-[16px] font-medium text-text-secondary">{tag}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h4 className="text-[20px] font-bold text-primary-navy mb-4">Ready to transform your operations?</h4>
                  <p className="text-text-secondary mb-6">Our domain experts are ready to discuss your specific technological challenges and build a roadmap for success.</p>
                  <Button onClick={() => navigate('/contact-ai')} variant="solid" className="!py-3 !px-6 text-[15px] font-semibold !bg-primary-green hover:!bg-green-600 !text-white border-none shadow-[0_4px_14px_0_rgba(22,199,132,0.39)] !rounded-lg">
                    Schedule a Consultation
                  </Button>
                </div>
              </motion.div>
              
              {/* Sidebar / Quick Facts (Optional expansion area) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full md:w-1/3"
              >
                <div className="bg-primary-navy rounded-2xl p-8 text-white sticky top-24">
                  <h4 className="text-[18px] font-bold mb-6">Why iQuadra for {industry.name}?</h4>
                  <ul className="space-y-6">
                    <li>
                      <h5 className="font-semibold text-primary-green mb-2">Deep Domain Expertise</h5>
                      <p className="text-sm text-gray-300 leading-relaxed">We understand the specific regulatory, operational, and competitive landscapes of your sector.</p>
                    </li>
                    <li>
                      <h5 className="font-semibold text-primary-green mb-2">Enterprise Scale</h5>
                      <p className="text-sm text-gray-300 leading-relaxed">Proven experience deploying and managing mission-critical infrastructure for large organizations.</p>
                    </li>
                    <li>
                      <h5 className="font-semibold text-primary-green mb-2">AI-Native Approach</h5>
                      <p className="text-sm text-gray-300 leading-relaxed">We don't just bolt on AI; we architect core systems from the ground up to leverage artificial intelligence.</p>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
            </div>
            
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default IndustryDetail;
