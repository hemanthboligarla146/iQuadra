import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Lock } from 'lucide-react';
import Button from '../Common/Button';

const NavItem = ({ label, hasDropdown, isActive, href, dropdownItems }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const handleDropdownClick = (e, itemHref) => {
    if (itemHref.includes('#')) {
      const [path, hash] = itemHref.split('#');
      if (path === location.pathname || path === '') {
        const element = document.getElementById(hash);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 72; // 72px for navbar
          window.scrollTo({ top: y, behavior: 'smooth' });
          setIsHovered(false);
        }
      }
    }
  };

  return (
    <div 
      className="relative flex flex-col justify-center h-full px-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={href || '#'} className="group relative inline-flex items-center h-full">
        <span className={`text-[15px] font-[600] whitespace-nowrap transition-colors duration-200 flex items-center gap-1.5 ${isActive ? 'text-primary-green' : 'text-primary-navy hover:text-primary-green'}`}>
          {label}
          {hasDropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
        </span>
        {/* Hover Underline directly below text */}
        <div className="absolute bottom-[20px] left-0 w-full h-[2px] overflow-hidden">
          <span className={`block w-full h-full bg-primary-green transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
        </div>
      </Link>

      {hasDropdown && dropdownItems && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[280px] bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-xl p-3 flex flex-col gap-1 z-[100]"
            >
              {dropdownItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  onClick={(e) => handleDropdownClick(e, item.href)}
                  className="px-4 py-2.5 text-[13px] font-medium text-text-secondary hover:text-primary-green hover:bg-gray-50 rounded-lg transition-colors text-left flex items-center"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const itServicesDropdown = [
  { label: 'Application & Cloud Development', href: '/it-services#application-development' },
  { label: 'Data & Intelligence', href: '/it-services#data-intelligence' },
  { label: 'Oracle Cloud ERP', href: '/it-services#oracle-erp' },
  { label: 'Cloud & DevOps Engineering', href: '/it-services#cloud-devops' },
  { label: 'Quality Engineering & Agile', href: '/it-services#quality-agile' },
  { label: 'Staff Augmentation', href: '/it-services#staff-augmentation' }
];

const industriesDropdown = [
  { label: 'Retail & eCommerce', href: '/industries#retail' },
  { label: 'Manufacturing', href: '/industries#manufacturing' },
  { label: 'Card & Payments', href: '/industries#payments' },
  { label: 'Aerospace & Avionics', href: '/industries#aerospace' },
  { label: 'Pharma & Healthcare', href: '/industries#healthcare' },
  { label: 'Utilities & Telecom', href: '/industries#utilities' },
  { label: 'Contract & Construction', href: '/industries#construction' },
  { label: 'Science & Technology', href: '/industries#science' },
  { label: 'Automotive & Transportation', href: '/industries#automotive' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
            <a href="#" className="flex items-center">
              <img src="/nav-logo.png" alt="iQuadra" className="h-[66px] w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center h-full flex-grow mx-4 xl:mx-8 space-x-3 xl:space-x-6">
            <NavItem label="Home" href="/" isActive={location.pathname === '/'} />
            <NavItem label="About" href="/about" isActive={location.pathname === '/about'} />
            <NavItem label="IT Services" href="/it-services" isActive={location.pathname === '/it-services'} hasDropdown dropdownItems={itServicesDropdown} />
            <NavItem label="AI Products" href="/ai-products" isActive={location.pathname === '/ai-products'} />
            <NavItem label="Retail AI" href="/retail-ai" isActive={location.pathname === '/retail-ai'} />
            <NavItem label="Industries" href="/industries" isActive={location.pathname === '/industries'} hasDropdown dropdownItems={industriesDropdown} />
            <NavItem label="Careers" />
            <NavItem label="Contact" />
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-[16px] flex-shrink-0">
            <a href="#" className="flex items-center text-[14px] font-[600] text-primary-navy bg-white border border-primary-green/30 rounded-lg px-4 py-2 hover:border-primary-green hover:bg-primary-green/5 transition-colors">
              <Lock className="w-[16px] h-[16px] mr-2 text-primary-navy" strokeWidth={2} />
              Employee Login
            </a>
            <Button
              variant="solid"
              className="
                !h-[40px]
                !min-h-[40px]
                !px-[17px]
                !py-0
                !text-[12px]
                !font-[600]
                !leading-none
                !rounded-[7px]
                bg-primary-green
                hover:bg-green-600
                shadow-[0_3px_10px_rgba(22,199,132,0.25)]
                whitespace-nowrap
                flex
                items-center
                justify-center
              "
            >
              Talk to Our AI Team →
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
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`text-[18px] ${location.pathname === '/' ? 'font-[600] text-primary-green' : 'font-[500] text-primary-navy'}`}>Home</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`text-[18px] ${location.pathname === '/about' ? 'font-[600] text-primary-green' : 'font-[500] text-primary-navy'}`}>About</Link>
                <Link to="/it-services" onClick={() => setMobileMenuOpen(false)} className={`text-[18px] ${location.pathname === '/it-services' ? 'font-[600] text-primary-green' : 'font-[500] text-primary-navy'}`}>IT Services</Link>
                <Link to="/ai-products" onClick={() => setMobileMenuOpen(false)} className={`text-[18px] ${location.pathname === '/ai-products' ? 'font-[600] text-primary-green' : 'font-[500] text-primary-navy'}`}>AI Products</Link>
                <Link to="/retail-ai" onClick={() => setMobileMenuOpen(false)} className={`text-[18px] ${location.pathname === '/retail-ai' ? 'font-[600] text-primary-green' : 'font-[500] text-primary-navy'}`}>Retail AI</Link>
                <Link to="/industries" onClick={() => setMobileMenuOpen(false)} className={`text-[18px] ${location.pathname === '/industries' ? 'font-[600] text-primary-green' : 'font-[500] text-primary-navy'}`}>Industries</Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
