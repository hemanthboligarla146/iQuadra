import React from 'react';
import { Link } from 'react-router-dom';
import { Send, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Container from '../Common/Container';

const Footer = () => {
  return (
    <footer className="bg-white pt-[24px] lg:pt-[32px] pb-6 border-t border-gray-100">
      <Container>
        {/* 6 Column Desktop Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1.5fr] gap-8 lg:gap-4 mb-[40px]">

          {/* Column 1: iQuadra Brand */}
          <div className="pr-4">
            <div className="mb-4 flex flex-col">
              <span className="text-[24px] font-extrabold text-primary-navy tracking-tight leading-none">iQuadra</span>
              <span className="text-[9px] text-text-secondary font-bold uppercase tracking-wider mt-1">AI. Anywhere. Everywhere.</span>
            </div>
            <p className="text-[12px] text-text-secondary font-[400] leading-[1.6] mb-5 max-w-[240px]">
              An AI-first technology company and IT services firm helping enterprises modernize through intelligent systems and expert delivery teams.
            </p>
            <div className="flex items-center text-[12px] text-text-secondary font-[400] mb-5">
              <MapPin className="w-4 h-4 mr-2" />
              Atlanta, GA, USA
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" onClick={(e) => e.preventDefault()} className="w-6 h-6 flex items-center justify-center text-primary-navy hover:text-primary-green transition-colors"><FaLinkedinIn className="w-4 h-4" /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-6 h-6 flex items-center justify-center text-primary-navy hover:text-primary-green transition-colors"><FaTwitter className="w-4 h-4" /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-6 h-6 flex items-center justify-center text-primary-navy hover:text-primary-green transition-colors"><FaYoutube className="w-4 h-4" /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-6 h-6 flex items-center justify-center text-primary-navy hover:text-primary-green transition-colors"><FaInstagram className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Column 2: AI Products */}
          <div>
            <h4 className="text-[14px] font-[700] text-primary-navy mb-4">AI Products</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-products" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">iQua.ai</Link></li>
              <li><Link to="/ai-products" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Helix AI</Link></li>
              <li><Link to="/ai-products" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Astra Assist</Link></li>
              <li><Link to="/ai-products" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">iQPredict</Link></li>
              <li><Link to="/ai-products" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Guardian AI</Link></li>
              <li><Link to="/ai-products" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Retail IQ</Link></li>
            </ul>
          </div>

          {/* Column 3: IT Services */}
          <div>
            <h4 className="text-[14px] font-[700] text-primary-navy mb-4">IT Services</h4>
            <ul className="space-y-2">
              <li><Link to="/it-services#application-development" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Application Development</Link></li>
              <li><Link to="/it-services#data-intelligence" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Data Intelligence</Link></li>
              <li><Link to="/it-services#oracle-erp" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Oracle Cloud ERP</Link></li>
              <li><Link to="/it-services#cloud-devops" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Cloud & DevOps</Link></li>
              <li><Link to="/it-services#quality-agile" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Quality & Agile</Link></li>
              <li><Link to="/it-services#staff-augmentation" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Staff Augmentation</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-[14px] font-[700] text-primary-navy mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">About iQuadra</Link></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Careers page coming soon!'); }} className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Careers</a></li>
              <li><Link to="/industries" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Industries</Link></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Careers page coming soon!'); }} className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Contact</a></li>
              <li><Link to="/login" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Employee Portal</Link></li>
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div>
            <h4 className="text-[14px] font-[700] text-primary-navy mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/news" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">News & Announcements</Link></li>
              <li><Link to="/news" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Blog</Link></li>
              <li><Link to="/news" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Case Studies</Link></li>
              <li><Link to="/news" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Whitepapers</Link></li>
              <li><Link to="/news" className="text-[12px] text-text-secondary hover:text-primary-green transition-colors hover:underline">Events</Link></li>
            </ul>
          </div>

          {/* Column 6: Stay Connected */}
          <div>
            <h4 className="text-[14px] font-[700] text-primary-navy mb-4">Stay Connected</h4>
            <p className="text-[12px] text-text-secondary font-[400] mb-4">
              Subscribe to our updates and insights.
            </p>
            <div className="flex items-center mb-6 border border-gray-200 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white px-3 py-2 text-[12px] focus:outline-none focus:border-primary-green"
              />
              <button className="bg-primary-green text-white px-4 py-2 hover:bg-green-600 transition-colors flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-4 border-t border-gray-100 text-[11px] font-[500] text-text-secondary">
          <p>© 2026 iQuadra, Inc. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary-green transition-colors">Privacy Policy</a>
            <span className="text-gray-300 px-3">|</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary-green transition-colors">Terms of Use</a>
            <span className="text-gray-300 px-3">|</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary-green transition-colors">Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
