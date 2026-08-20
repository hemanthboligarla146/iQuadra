import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud } from 'lucide-react';
import Container from '../Common/Container';
import Button from '../Common/Button';

// Exact SVGs to match the image


const TechNode = ({ icon: Icon, iconSrc, label, className }) => (
  <div className={`absolute z-10 ${className}`}>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex items-center gap-1.5 md:gap-2.5 bg-white px-2.5 py-1.5 md:px-4 md:py-2.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 shrink-0 -translate-x-1/2 -translate-y-1/2"
    >
      {iconSrc ? (
        <img src={iconSrc} alt={label} className="w-4 h-4 md:w-5 md:h-5 object-contain shrink-0" />
      ) : (
        <Icon className="shrink-0 w-4 h-4 md:w-5 md:h-5" />
      )}
      <span className="text-[11px] md:text-[14px] font-bold text-primary-navy whitespace-nowrap">{label}</span>
    </motion.div>
  </div>
);

const ITServicesHero = () => {
  return (
    <section className="pt-12 pb-8 lg:pt-16 lg:pb-10 bg-[#fafafa] relative overflow-hidden border-b border-gray-100">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full">
          
          {/* Left: Content */}
          <div className="w-full lg:w-[50%] flex flex-col relative z-10 text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[12px] font-bold text-primary-green tracking-widest uppercase mb-6"
            >
              IT SERVICES
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[36px] sm:text-[44px] lg:text-[56px] font-[800] text-primary-navy leading-[1.1] tracking-tight mb-8 max-w-[700px]"
            >
              Enterprise technology, engineered to move <span className="green-gradient-text">business forward.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[15px] sm:text-[16px] font-[500] text-text-secondary leading-[1.6] mb-12 max-w-[550px]"
            >
              From application engineering and data platforms to Oracle Cloud ERP, DevOps, quality engineering and agile delivery, iQuadra helps enterprises modernize, scale and operate with confidence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="solid" className="!py-3.5 !px-8 text-[14px] font-semibold !bg-primary-green hover:!bg-green-600 !text-white border-none shadow-[0_4px_14px_0_rgba(22,199,132,0.39)] !rounded-md">
                Talk to Our IT Team &rarr;
              </Button>
              <Button variant="outline" className="!py-3.5 !px-8 text-[14px] font-semibold !border-primary-green/40 !text-primary-green hover:!bg-primary-green/5 transition-all duration-300 !rounded-md bg-white">
                Explore Our Capabilities &rarr;
              </Button>
            </motion.div>
          </div>

          {/* Right: Architecture Visual */}
          <div className="w-full lg:w-[50%] flex items-center justify-center p-2 sm:p-4">
            
            {/* Bulletproof Aspect Ratio Container (800x650) -> paddingBottom: 650/800 = 81.25% */}
            <div className="relative w-full max-w-[800px]" style={{ paddingBottom: '81.25%' }}>
              <div className="absolute inset-0">
                
                {/* SVG Base layer for connecting lines and dashed ring */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 650" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                  
                  {/* Connecting Lines mapped perfectly to the fixed 800x650 coordinates */}
                  <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} d="M 120 325 L 400 325" stroke="#bfdbfe" strokeWidth="1.5" fill="none" />
                  <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} d="M 680 325 L 400 325" stroke="#bfdbfe" strokeWidth="1.5" fill="none" />
                  
                  {/* Smooth Bezier curves for the corner nodes */}
                  <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} d="M 160 97.5 C 280 97.5, 320 325, 400 325" stroke="#bfdbfe" strokeWidth="1.5" fill="none" />
                  <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} d="M 640 97.5 C 520 97.5, 480 325, 400 325" stroke="#bfdbfe" strokeWidth="1.5" fill="none" />
                  
                  <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} d="M 160 552.5 C 280 552.5, 320 325, 400 325" stroke="#bfdbfe" strokeWidth="1.5" fill="none" />
                  <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} d="M 640 552.5 C 520 552.5, 480 325, 400 325" stroke="#bfdbfe" strokeWidth="1.5" fill="none" />

                  {/* Exact Dashed Ring drawn with native SVG to avoid CSS distortion */}
                  <g className="animate-[spin_60s_linear_infinite]" style={{ transformOrigin: '400px 325px' }}>
                    <circle cx="400" cy="325" r="140" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="8 8" fill="none" opacity="0.8" />
                    <rect x="396" y="181" width="8" height="8" fill="#16c784" transform="rotate(45 400 185)" />
                    <rect x="396" y="461" width="8" height="8" fill="#16c784" transform="rotate(45 400 465)" />
                    <rect x="256" y="321" width="8" height="8" fill="#16c784" transform="rotate(45 260 325)" />
                    <rect x="536" y="321" width="8" height="8" fill="#16c784" transform="rotate(45 540 325)" />
                  </g>
                </svg>

                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] shrink-0 bg-primary-navy rounded-full shadow-[0_0_50px_rgba(27,43,74,0.3)] flex flex-col items-center justify-center p-4 border-[6px] border-white"
                  >
                    <div className="flex items-center gap-0.5 mb-1 relative w-full justify-center">
                      <span className="text-white font-extrabold text-[15px] md:text-[18px] tracking-wide shrink-0">iQuadra</span>
                      <div className="w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full bg-primary-green absolute -right-2 md:-right-3 top-1 md:top-1.5" />
                    </div>
                    <span className="text-[10px] md:text-[12px] font-medium text-gray-300 text-center leading-[1.3] shrink-0">Technology<br/>Engine</span>
                  </motion.div>
                </div>

                {/* Surrounding Nodes using exact percentage styles matching the 800x650 grid */}
                <TechNode iconSrc="/tech-icons/icon2.png" label="Java" className="top-[15%] left-[20%]" />
                <TechNode iconSrc="/tech-icons/icon1.png" label="Python" className="top-[50%] left-[15%]" />
                <TechNode iconSrc="/tech-icons/icon3.png" label="Data" className="top-[85%] left-[20%]" />
                
                <TechNode iconSrc="/tech-icons/icon4.png" label="Cloud" className="top-[15%] left-[80%]" />
                <TechNode iconSrc="/tech-icons/icon5.png" label="Oracle" className="top-[50%] left-[85%]" />
                <TechNode iconSrc="/tech-icons/icon6.png" label="DevOps" className="top-[85%] left-[80%]" />
                
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ITServicesHero;
