import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/Common/Container';

const WhoWeAre = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />
      
      <main className="flex-grow pt-[120px] pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-[14px] font-[600] text-text-secondary hover:text-primary-green transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>

            <div className="mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[12px] font-bold text-primary-green tracking-wider uppercase mb-3 block"
              >
                WHO WE ARE
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[40px] md:text-[56px] font-[800] text-primary-navy tracking-tight leading-[1.1] mb-6"
              >
                AI engineers, ERP specialists, architects & product builders.
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[24px] p-8 md:p-12 border border-gray-100 shadow-sm prose prose-lg prose-slate max-w-none"
            >
              <h3 className="text-[24px] font-[700] text-primary-navy mb-4">Our History & Mission</h3>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-text-secondary font-[400] mb-8">
                Founded by highly experienced practitioners, iQuadra partners with enterprises to design, build and operate AI-powered systems and enterprise technology solutions. We believe that the next wave of enterprise transformation requires a seamless blend of deep domain expertise and cutting-edge engineering.
              </p>
              
              <h3 className="text-[24px] font-[700] text-primary-navy mb-4">Our Core Team</h3>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-text-secondary font-[400] mb-8">
                Our teams combine deep domain knowledge with modern engineering practices to deliver secure, scalable and cost-effective outcomes across AI, ERP, Cloud, data and agile delivery. We are technologists at heart, obsessed with solving complex enterprise challenges.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                  <h4 className="text-[18px] font-[700] text-primary-navy mb-2">Leadership</h4>
                  <p className="text-[15px] text-text-secondary">Driven by veterans from top-tier tech and consulting firms.</p>
                </div>
                <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                  <h4 className="text-[18px] font-[700] text-primary-navy mb-2">Engineering</h4>
                  <p className="text-[15px] text-text-secondary">A global team of elite software engineers and AI researchers.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
