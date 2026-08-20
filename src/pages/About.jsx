import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AboutIntro from '../components/About/AboutIntro';
import ValueStrip from '../components/About/ValueStrip';
import CompanyOverview from '../components/About/CompanyOverview';
import SutrasSection from '../components/About/SutrasSection';
import PracticeAreas from '../components/About/PracticeAreas';
import EngagementModels from '../components/About/EngagementModels';
import AboutCTA from '../components/About/AboutCTA';

const About = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow pt-[72px]">
        {/* About Sections strictly following the new design hierarchy */}
        <AboutIntro />
        <ValueStrip />
        <CompanyOverview />
        <SutrasSection />
        <PracticeAreas />
        <EngagementModels />
        <AboutCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
