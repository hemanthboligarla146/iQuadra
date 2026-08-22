import React from 'react';
import { motion } from 'framer-motion';
import { newsData } from '../../data/mockData';
import { useNavigate } from 'react-router-dom';
import Card from '../Common/Card';

const LatestNews = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-2">
        <h2 className="text-[28px] font-[700] text-primary-navy tracking-tight">Latest from iQuadra</h2>
        <button onClick={() => navigate('/news')} className="text-[14px] font-[600] text-primary-green hover:underline flex items-center">
          View All News &rarr;
        </button>
      </div>

      <div className="flex flex-col gap-4 flex-grow">
        {newsData.map((news, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => navigate(`/news/${news.id}`)}
            className="group cursor-pointer h-full"
          >
            <Card className="!p-5 border border-gray-100 shadow-sm flex flex-row items-center gap-5 h-[120px] rounded-[16px]" hoverEffect={false}>
              {/* Thumbnail */}
              <div className="w-[100px] h-[80px] rounded-lg bg-primary-navy flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-100">
                {news.category === 'NEWS' && (
                  <div className="text-white text-[12px] font-bold px-2 text-center leading-tight">HelixCloud<br/>.ai</div>
                )}
                {news.category === 'PRODUCT' && (
                  <div className="bg-white w-full h-full flex items-center justify-center">
                    <span className="text-primary-navy font-black text-[16px] tracking-tight">iQua.ai</span>
                  </div>
                )}
                {news.category === 'AWARD' && (
                  <div className="bg-black w-full h-full flex items-center justify-center">
                    <span className="text-[#FFD700] text-[12px] font-bold px-2 text-center leading-tight">Fluxx<br/>AWARDS</span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col justify-center overflow-hidden">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[11px] font-[700] tracking-wider uppercase ${
                    news.category === 'PRODUCT' ? 'text-primary-green' : 'text-text-secondary'
                  }`}>
                    {news.category}
                  </span>
                  {news.featured && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="text-[11px] text-text-secondary font-[700] uppercase tracking-wider">Featured</span>
                    </>
                  )}
                </div>
                <h4 className="text-[15px] font-[700] text-primary-navy leading-snug mb-1 group-hover:text-primary-green transition-colors line-clamp-2 truncate whitespace-normal">
                  {news.title}
                </h4>
                <p className="text-[12px] font-[500] text-text-secondary">
                  {news.date}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
