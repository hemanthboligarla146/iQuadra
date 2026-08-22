import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { newsData } from '../data/mockData';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/Common/Container';
import Button from '../components/Common/Button';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const news = newsData.find(n => n.id === id);

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f8fafc]">
        <Navbar />
        <main className="flex-grow pt-[120px] pb-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-[32px] font-[800] text-primary-navy mb-4">News Not Found</h1>
            <p className="text-text-secondary mb-8">The article you are looking for does not exist.</p>
            <Button onClick={() => navigate('/news')} variant="solid">Back to News</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />
      
      <main className="flex-grow pt-[120px] pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            
            <button 
              onClick={() => navigate('/news')}
              className="flex items-center text-[14px] font-[600] text-text-secondary hover:text-primary-green transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all news
            </button>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[24px] p-8 md:p-12 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-[12px] font-[700] tracking-wider uppercase px-3 py-1 rounded-full ${
                  news.category === 'PRODUCT' ? 'bg-primary-green/10 text-primary-green' : 'bg-gray-100 text-text-secondary'
                }`}>
                  {news.category}
                </span>
                <span className="text-[14px] font-[500] text-gray-400">
                  {news.date}
                </span>
              </div>

              <h1 className="text-[32px] md:text-[40px] font-[800] text-primary-navy leading-[1.2] mb-8 tracking-tight">
                {news.title}
              </h1>

              {/* Banner Image / Graphic */}
              <div className="w-full h-[240px] md:h-[320px] rounded-2xl bg-primary-navy flex items-center justify-center overflow-hidden border border-gray-100 mb-10 relative">
                {news.category === 'NEWS' && (
                  <div className="text-white text-[32px] font-bold px-4 text-center leading-tight">HelixCloud.ai</div>
                )}
                {news.category === 'PRODUCT' && (
                  <div className="bg-white w-full h-full flex items-center justify-center">
                    <span className="text-primary-navy font-black text-[48px] tracking-tight">iQua.ai</span>
                  </div>
                )}
                {news.category === 'AWARD' && (
                  <div className="bg-black w-full h-full flex items-center justify-center">
                    <span className="text-[#FFD700] text-[32px] font-bold px-4 text-center leading-tight">Fluxx AWARDS</span>
                  </div>
                )}
              </div>

              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-[16px] md:text-[18px] leading-relaxed text-text-secondary font-[400]">
                  {news.content}
                </p>
                {/* Additional placeholder content just to make it look like a full article */}
                <p className="text-[16px] md:text-[18px] leading-relaxed text-text-secondary font-[400] mt-6">
                  "This marks a significant milestone in our journey to redefine how enterprises adopt artificial intelligence," said the leadership team at iQuadra. "By bringing these powerful capabilities under one roof, we are delivering unprecedented value and agility to our customers."
                </p>
                <p className="text-[16px] md:text-[18px] leading-relaxed text-text-secondary font-[400] mt-6">
                  Looking ahead, iQuadra plans to integrate these new advancements deeply into its existing ecosystem, ensuring seamless transitions and immediate ROI for all enterprise partners.
                </p>
              </div>

            </motion.div>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;
