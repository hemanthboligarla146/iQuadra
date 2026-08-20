import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import IndustriesHero from '../components/Industries/IndustriesHero';
import IndustrySelector from '../components/Industries/IndustrySelector';
import FeaturedIndustry from '../components/Industries/FeaturedIndustry';
import IndustryArchitecture from '../components/Industries/IndustryArchitecture';
import CapabilityMatrix from '../components/Industries/CapabilityMatrix';
import CrossIndustryCapabilities from '../components/Industries/CrossIndustryCapabilities';
import IndustriesCTA from '../components/Industries/IndustriesCTA';
import { industriesData } from '../components/Industries/industriesData';

const Industries = () => {
  const location = useLocation();
  const [activeIndustryId, setActiveIndustryId] = useState(() => {
    const hashId = location.hash.replace('#', '');
    return industriesData.some(i => i.id === hashId) ? hashId : industriesData[0].id;
  });

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (industriesData.some(i => i.id === id)) {
        setActiveIndustryId(id);
      }
      // Scroll to the selector regardless of whether it's a valid ID (it might be a section ID)
      const element = document.getElementById('industry-view') || document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const activeIndustry = industriesData.find(i => i.id === activeIndustryId) || industriesData[0];

  return (
    <div className="font-outfit text-primary-navy bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <IndustriesHero />
        
        <div id="industry-view">
          <IndustrySelector 
            industries={industriesData} 
            activeId={activeIndustryId} 
            onChange={setActiveIndustryId} 
          />
        </div>
        
        <FeaturedIndustry industry={activeIndustry} />
        
        <IndustryArchitecture />
        
        <CapabilityMatrix />
        
        <CrossIndustryCapabilities />
        
        <IndustriesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
