import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ITServices = lazy(() => import('./pages/ITServices'));
const AIProducts = lazy(() => import('./pages/AIProducts'));
const Retail = lazy(() => import('./pages/Retail'));
const Industries = lazy(() => import('./pages/Industries'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary-green font-bold">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/ai-products" element={<AIProducts />} />
          <Route path="/retail-ai" element={<Retail />} />
          <Route path="/industries" element={<Industries />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
