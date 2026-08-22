import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { newsData } from '../data/mockData';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/Common/Container';

const News = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />
      
      <main className="flex-grow pt-[120px] pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-12">
              <h1 className="text-[40px] md:text-[56px] font-[800] text-primary-navy tracking-tight leading-[1.1] mb-6">
                News & Announcements
              </h1>
              <p className="text-[16px] md:text-[18px] text-text-secondary font-[500] max-w-2xl">
                Stay updated with the latest product releases, company news, and awards from iQuadra.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {newsData.map((news) => (
                <motion.div 
                  key={news.id}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onClick={() => navigate(`/news/${news.id}`)}
                  className="bg-white border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 rounded-[20px] cursor-pointer transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="w-full sm:w-[160px] h-[120px] rounded-xl bg-primary-navy flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-100 relative">
                    {news.category === 'NEWS' && (
                      <div className="text-white text-[16px] font-bold px-4 text-center leading-tight">HelixCloud<br/>.ai</div>
                    )}
                    {news.category === 'PRODUCT' && (
                      <div className="bg-white w-full h-full flex items-center justify-center">
                        <span className="text-primary-navy font-black text-[22px] tracking-tight">iQua.ai</span>
                      </div>
                    )}
                    {news.category === 'AWARD' && (
                      <div className="bg-black w-full h-full flex items-center justify-center">
                        <span className="text-[#FFD700] text-[16px] font-bold px-4 text-center leading-tight">Fluxx<br/>AWARDS</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-[12px] font-[700] tracking-wider uppercase px-2.5 py-1 rounded-full ${
                        news.category === 'PRODUCT' ? 'bg-primary-green/10 text-primary-green' : 'bg-gray-100 text-text-secondary'
                      }`}>
                        {news.category}
                      </span>
                      {news.featured && (
                        <span className="text-[12px] text-primary-navy font-[700] uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 className="text-[20px] font-[700] text-primary-navy leading-snug mb-3 hover:text-primary-green transition-colors">
                      {news.title}
                    </h2>
                    <p className="text-[14px] font-[500] text-text-secondary">
                      {news.date}
                    </p>
                  </div>
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

export default News;
