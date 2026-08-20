import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AIProductsHero from '../components/AIProducts/AIProductsHero';
import ProductSuite from '../components/AIProducts/ProductSuite';
import ProductValueStrip from '../components/AIProducts/ProductValueStrip';
import BusinessImpact from '../components/AIProducts/BusinessImpact';
import AIFoundation from '../components/AIProducts/AIFoundation';
import AIProductsCTA from '../components/AIProducts/AIProductsCTA';

const AIProducts = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-primary-navy">
      <Navbar />
      
      <main className="pt-[72px]">
        <AIProductsHero />
        <ProductSuite />
        <ProductValueStrip />
        <BusinessImpact />
        <AIFoundation />
        <AIProductsCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AIProducts;
