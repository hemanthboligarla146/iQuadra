import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ITServicesHero from '../components/ITServices/ITServicesHero';
import ServiceArchitecture from '../components/ITServices/ServiceArchitecture';
import ApplicationDevelopment from '../components/ITServices/ApplicationDevelopment';
import DataIntelligence from '../components/ITServices/DataIntelligence';
import OracleERP from '../components/ITServices/OracleERP';
import CloudDevOps from '../components/ITServices/CloudDevOps';
import QualityAgile from '../components/ITServices/QualityAgile';
import StaffAugmentation from '../components/ITServices/StaffAugmentation';
import DeliveryModels from '../components/ITServices/DeliveryModels';
import ITServicesCTA from '../components/ITServices/ITServicesCTA';

const ITServices = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow pt-[72px]">
        <ITServicesHero />
        <ServiceArchitecture />
        <div id="application-development"><ApplicationDevelopment /></div>
        <div id="data-intelligence"><DataIntelligence /></div>
        <div id="oracle-erp"><OracleERP /></div>
        <div id="cloud-devops"><CloudDevOps /></div>
        
        {/* Quality & Agile + Staff Augmentation Split Container */}
        <section className="flex flex-col 2xl:flex-row w-full border-b border-gray-100">
          <div id="quality-agile" className="w-full 2xl:w-1/2 border-r border-gray-100">
            <QualityAgile />
          </div>
          <div id="staff-augmentation" className="w-full 2xl:w-1/2">
            <StaffAugmentation />
          </div>
        </section>

        {/* Delivery Models + CTA Split Container */}
        <section className="flex flex-col 2xl:flex-row w-full">
          <div className="w-full 2xl:w-1/2 border-r border-gray-100 bg-gray-50/30">
            <DeliveryModels />
          </div>
          <div className="w-full 2xl:w-1/2 bg-gray-50/30">
            <ITServicesCTA />
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
};

export default ITServices;
