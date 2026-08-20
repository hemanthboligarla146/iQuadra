import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import RetailHero from '../components/Retail/RetailHero';
import RetailTransformation from '../components/Retail/RetailTransformation';
import RetailCapabilities from '../components/Retail/RetailCapabilities';
import CustomerIntelligence from '../components/Retail/CustomerIntelligence';
import RetailValueChain from '../components/Retail/RetailValueChain';
import RetailOutcomes from '../components/Retail/RetailOutcomes';
import RetailTechFoundation from '../components/Retail/RetailTechFoundation';
import RetailCTA from '../components/Retail/RetailCTA';

const Retail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <RetailHero />
        <RetailTransformation />
        <RetailCapabilities />
        <CustomerIntelligence />
        <RetailValueChain />
        <RetailOutcomes />
        <RetailTechFoundation />
        <RetailCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Retail;
