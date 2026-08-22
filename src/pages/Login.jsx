import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ChevronRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Common/Button';
import loginBg from '../assets/login_bg.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, handle authentication here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden p-4"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-primary-navy/40 pointer-events-none"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

      {/* Main Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[440px] relative z-10"
      >
        <div className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] rounded-[24px] p-8 sm:p-10 relative overflow-hidden">
          
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#16C784]/50 to-transparent"></div>

          {/* Logo */}
          <div className="flex justify-center mb-6 cursor-pointer" onClick={() => navigate('/')}>
            <img src="/nav-logo.png" alt="iQuadra" className="h-[42px] w-auto object-contain" />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-[26px] font-[800] text-primary-navy tracking-tight mb-2">Employee Portal</h1>
            <p className="text-[14px] text-text-secondary font-[500]">Enter your iQuadra credentials to securely access your workspace.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-[700] text-primary-navy ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-green transition-colors">
                  <Mail className="h-[18px] w-[18px]" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] text-primary-navy focus:bg-white focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all outline-none"
                  placeholder="name@iquadra.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between ml-1">
                <label className="text-[13px] font-[700] text-primary-navy">Password</label>
                <a href="#" className="text-[13px] font-[600] text-primary-green hover:underline">Forgot password?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-green transition-colors">
                  <Lock className="h-[18px] w-[18px]" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] text-primary-navy focus:bg-white focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center pt-1 pb-2">
              <label className="flex items-center cursor-pointer group">
                <div className={`w-[18px] h-[18px] flex items-center justify-center rounded-[4px] border ${rememberMe ? 'bg-primary-green border-primary-green' : 'bg-white border-gray-300 group-hover:border-primary-green'} transition-colors mr-2.5`}>
                  {rememberMe && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                </div>
                <span className="text-[14px] font-[500] text-text-secondary select-none">Remember me for 30 days</span>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
              </label>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              variant="solid" 
              className="w-full flex items-center justify-center !py-3.5 text-[15px] font-[600] shadow-[0_8px_20px_-6px_rgba(22,199,132,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(22,199,132,0.5)] transition-all duration-300"
            >
              Sign In Securely
              <ChevronRight className="w-4 h-4 ml-1.5" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center py-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-[12px] font-[600] uppercase tracking-wider">Or continue with</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* SSO Options */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-colors">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-[13px] font-[600] text-primary-navy">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-colors">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 21 21">
                <path fill="#f25022" d="M1 1h9v9H1z"/>
                <path fill="#00a4ef" d="M1 11h9v9H1z"/>
                <path fill="#7fba00" d="M11 1h9v9h-9z"/>
                <path fill="#ffb900" d="M11 11h9v9h-9z"/>
              </svg>
              <span className="text-[13px] font-[600] text-primary-navy">Microsoft</span>
            </button>
          </div>

        </div>

        {/* Footer text */}
        <div className="text-center mt-6">
          <p className="text-[12px] font-[500] text-gray-400">
            Secure connection <Lock className="inline w-3 h-3 ml-0.5" /> • Requires iQuadra VPN for some resources
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
