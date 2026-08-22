import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ITServices = lazy(() => import('./pages/ITServices'));
const AIProducts = lazy(() => import('./pages/AIProducts'));
const Retail = lazy(() => import('./pages/Retail'));
const Industries = lazy(() => import('./pages/Industries'));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'));
const Login = lazy(() => import('./pages/Login'));
const ContactAI = lazy(() => import('./pages/ContactAI'));
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const WhoWeAre = lazy(() => import('./pages/WhoWeAre'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'));
const Capabilities = lazy(() => import('./pages/Capabilities'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary-green font-bold">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/ai-products" element={<AIProducts />} />
          <Route path="/retail-ai" element={<Retail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:id" element={<IndustryDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-ai" element={<ContactAI />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/capabilities" element={<Capabilities />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
