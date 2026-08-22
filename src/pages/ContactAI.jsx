import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageSquare, Bot } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Button from '../components/Common/Button';
import Container from '../components/Common/Container';

const ContactAI = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Agentic Workflows',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Submit logic goes here
    alert("Thanks for reaching out! Our AI team will contact you shortly.");
    
    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      company: '',
      interest: 'Agentic Workflows',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />
      
      <main className="flex-grow pt-[120px] pb-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-green/10 text-primary-green text-[13px] font-[700] tracking-wide mb-6">
                  <Bot className="w-4 h-4" />
                  <span>iQuadra AI Labs</span>
                </div>
                <h1 className="text-[40px] md:text-[56px] font-[800] text-primary-navy tracking-tight leading-[1.1] mb-6">
                  Ready to transform <br className="hidden md:block" />
                  your enterprise with AI?
                </h1>
                <p className="text-[16px] md:text-[18px] text-text-secondary font-[500] max-w-2xl mx-auto">
                  Whether you're looking to implement agentic workflows, deploy private LLMs, or build data platforms, our AI engineering team is ready to help.
                </p>
              </motion.div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              
              {/* Left Column: Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                  <h3 className="text-[20px] font-[700] text-primary-navy mb-6">Get in touch directly</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-[13px] font-[600] text-gray-400 uppercase tracking-wider mb-1">Email</p>
                        <a href="mailto:ai@iquadra.com" className="text-[15px] font-[600] text-primary-navy hover:text-primary-green transition-colors">ai@iquadra.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary-green" />
                      </div>
                      <div>
                        <p className="text-[13px] font-[600] text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                        <a href="tel:+18005550199" className="text-[15px] font-[600] text-primary-navy hover:text-primary-green transition-colors">+1 (800) 555-0199</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-[13px] font-[600] text-gray-400 uppercase tracking-wider mb-1">HQ Location</p>
                        <p className="text-[15px] font-[500] text-primary-navy leading-relaxed">
                          100 Enterprise Way<br />
                          Suite 300<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-navy rounded-[24px] p-8 text-white relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary-green/20 rounded-full blur-3xl pointer-events-none"></div>
                  <MessageSquare className="w-8 h-8 text-primary-green mb-4" />
                  <h3 className="text-[20px] font-[700] mb-3">Enterprise Support</h3>
                  <p className="text-[14px] text-gray-300 font-[400] leading-relaxed mb-6">
                    Already a customer? Our dedicated AI engineering support team is available 24/7 for critical enterprise workloads.
                  </p>
                  <a href="#" className="inline-flex items-center text-[14px] font-[600] text-primary-green hover:text-white transition-colors">
                    Access Support Portal &rarr;
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4A8CFF] to-[#16C784]"></div>
                  
                  <h2 className="text-[24px] font-[800] text-primary-navy mb-6">Request a Consultation</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[13px] font-[700] text-primary-navy ml-1">Full Name *</label>
                        <input 
                          type="text" name="name" required
                          value={formData.name} onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] text-primary-navy focus:bg-white focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all outline-none"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[13px] font-[700] text-primary-navy ml-1">Work Email *</label>
                        <input 
                          type="email" name="email" required
                          value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] text-primary-navy focus:bg-white focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all outline-none"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[13px] font-[700] text-primary-navy ml-1">Company Name</label>
                        <input 
                          type="text" name="company"
                          value={formData.company} onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] text-primary-navy focus:bg-white focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all outline-none"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[13px] font-[700] text-primary-navy ml-1">Area of Interest</label>
                        <select 
                          name="interest"
                          value={formData.interest} onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] text-primary-navy focus:bg-white focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all outline-none appearance-none"
                        >
                          <option>Agentic Workflows</option>
                          <option>Custom LLM Development</option>
                          <option>Data Engineering & AI Readiness</option>
                          <option>Retail AI Solutions</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[13px] font-[700] text-primary-navy ml-1">How can we help? *</label>
                      <textarea 
                        name="message" required rows="4"
                        value={formData.message} onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] text-primary-navy focus:bg-white focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all outline-none resize-none"
                        placeholder="Tell us a bit about your current challenges or AI goals..."
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <Button type="submit" variant="solid" className="w-full flex justify-center items-center py-3.5 text-[15px] shadow-[0_8px_20px_-6px_rgba(22,199,132,0.3)]">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message to AI Team
                      </Button>
                    </div>
                  </form>
                  
                  <p className="text-[12px] text-gray-400 mt-6 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default ContactAI;
