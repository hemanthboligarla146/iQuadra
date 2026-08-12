import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Lock } from 'lucide-react';
import Button from '../Common/Button';

const NavItem = ({ label, hasDropdown, isActive }) => (
  <div className="group cursor-pointer flex flex-col justify-center h-full px-2">
    <div className="relative inline-flex items-center">
      <span className={`text-[15px] font-[600] whitespace-nowrap transition-colors duration-200 flex items-center gap-1.5 ${isActive ? 'text-primary-green' : 'text-primary-navy hover:text-primary-green'
        }`}>
        {label}
        {hasDropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
      </span>
      {/* Hover Underline directly below text */}
      <div className="absolute -bottom-[8px] left-0 w-full h-[2px] overflow-hidden">
        <span className={`block w-full h-full bg-primary-green transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`} />
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[72px] flex items-center border-b border-gray-100 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
          }`}
      >
        <div className="w-full px-4 lg:px-8 xl:px-12 h-full flex items-center justify-between mx-auto">
          {/* Logo */}
          <div className="flex items-center h-full flex-shrink-0">
            <a href="#" className="flex flex-col">
              <span className="text-[35px] font-[900] text-primary-navy tracking-tight leading-none relative">
                iQuadra
                <svg className="absolute -top-1.5 -right-3.5 w-4 h-4 text-primary-green fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5,21.5 L21.5,2.5 L14.5,21.5 L10.5,13.5 Z" />
                </svg>
              </span>
              <span className="text-[10px] text-gray-500 font-[600] tracking-wide mt-0.5">AI. Anywhere. Everywhere.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center h-full flex-grow mx-4 xl:mx-8 space-x-3 xl:space-x-6">
            <NavItem label="Home" isActive={true} />
            <NavItem label="About" />
            <NavItem label="IT Services" hasDropdown />
            <NavItem label="AI Products" hasDropdown />
            <NavItem label="Retail AI" />
            <NavItem label="Industries" hasDropdown />
            <NavItem label="Careers" />
            <NavItem label="Contact" />
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <a href="#" className="flex items-center text-[14px] font-[600] text-primary-navy bg-white border border-primary-green/30 rounded-lg px-4 py-2 hover:border-primary-green hover:bg-primary-green/5 transition-colors">
              <Lock className="w-[16px] h-[16px] mr-2 text-primary-navy" strokeWidth={2} />
              Employee Login
            </a>
            <Button variant="solid" className="py-1 px-6 text-[15px] font-[600] rounded-lg bg-primary-green hover:bg-green-600 shadow-[0_4px_14px_0_rgba(22,199,132,0.39)]">
              Talk to Our AI Team &rarr;
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary-navy"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-[24px] h-[24px]" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary-navy/40 z-[60] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-[400px] bg-white z-[70] shadow-2xl p-6 lg:hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-[28px] font-extrabold text-primary-navy">iQuadra</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-text-secondary" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                <a href="#" className="text-[18px] font-[600] text-primary-green">Home</a>
                <a href="#" className="text-[18px] font-[500] text-primary-navy">About</a>
                <a href="#" className="text-[18px] font-[500] text-primary-navy">IT Services</a>
                <a href="#" className="text-[18px] font-[500] text-primary-navy">AI Products</a>
                <a href="#" className="text-[18px] font-[500] text-primary-navy">Industries</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
