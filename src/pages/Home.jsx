import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import ServicesBar from '../components/ServicesBar/ServicesBar';
import Metrics from '../components/Metrics/Metrics';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import LatestNews from '../components/LatestNews/LatestNews';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';
import Container from '../components/Common/Container';
import SectionWrapper from '../components/Common/SectionWrapper';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesBar />
        <SectionWrapper bg="bg-white">
          <Container className="flex flex-col gap-10 lg:gap-[70px]">
            {/* Metrics Section */}
            <Metrics />
            
            {/* WhatWeDo and LatestNews side-by-side section */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-12 lg:gap-10">
              <div>
                <WhatWeDo />
              </div>
              <div>
                <LatestNews />
              </div>
            </div>
          </Container>
        </SectionWrapper>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
