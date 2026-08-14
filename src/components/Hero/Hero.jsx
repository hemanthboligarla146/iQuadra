import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Button from '../Common/Button';

const FloatingCard = ({ id, icon, text, delay, position, isHovered, isActive, onHover, onLeave, onClick }) => {
  const duration = 5 + (delay % 3); // Map delay to a 5-8s duration pseudo-randomly
  return (
    <motion.div
      onMouseEnter={() => onHover(id)}
      onMouseLeave={onLeave}
      onClick={() => onClick(id)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: isActive ? 1.05 : isHovered ? 1.02 : 1, 
        y: (isActive || isHovered) ? -4 : [0, -3, 0],
        boxShadow: isActive 
          ? '0 12px 30px -5px rgba(22, 199, 132, 0.15)' 
          : isHovered 
            ? '0 10px 25px -5px rgba(0, 0, 0, 0.08)' 
            : '0 8px 20px -5px rgba(0,0,0,0.05)'
      }}
      transition={{
        opacity: { duration: 0.8, delay, ease: "easeOut" },
        scale: { type: "spring", stiffness: 300, damping: 20 },
        y: (isActive || isHovered) ? { type: "spring", stiffness: 300, damping: 20 } : { duration: duration, repeat: Infinity, ease: "easeInOut", delay },
        boxShadow: { duration: 0.3 }
      }}
      className={`absolute ${position} flex items-center bg-white px-5 py-3 rounded-full border ${isActive ? 'border-[#16C784]' : isHovered ? 'border-gray-200' : 'border-gray-100'} z-30 cursor-pointer transition-colors duration-300`}
    >
      <div className={`w-10 h-10 rounded-full ${isActive ? 'bg-[#16C784]/10 border-[#16C784]/30' : 'bg-[#f8fafc] border-[#f1f5f9]'} flex items-center justify-center mr-3 shrink-0 transition-colors duration-300`}>
        {icon}
      </div>
      <span className="text-[13.5px] font-[600] text-primary-navy leading-[1.25] whitespace-pre-line">
        {text}
      </span>
    </motion.div>
  );
};

const NODES = [
  { id: 'ai-platforms', side: 'left', y: 100 },
  { id: 'oracle-erp', side: 'left', y: 300 },
  { id: 'data-sciences', side: 'left', y: 500 },
  { id: 'full-stack', side: 'right', y: 100 },
  { id: 'devops', side: 'right', y: 300 },
  { id: 'safe-agile', side: 'right', y: 500 },
];

const Hero = () => {
  const containerRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeNode, setActiveNode] = useState(null);
  const clickTimeoutRef = useRef(null);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    return () => {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const cursorSmoothX = useSpring(cursorX, { damping: 25, stiffness: 700, mass: 0.1 });
  const cursorSmoothY = useSpring(cursorY, { damping: 25, stiffness: 700, mass: 0.1 });

  // Parallax calculations (very subtle: 2-8px)
  const coreX = useTransform(smoothMouseX, [-1, 1], [-2, 2]);
  const coreY = useTransform(smoothMouseY, [-1, 1], [-2, 2]);
  
  const networkX = useTransform(smoothMouseX, [-1, 1], [-5, 5]);
  const networkY = useTransform(smoothMouseY, [-1, 1], [-5, 5]);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Normalize -1 to 1
    const px = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const py = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(px);
    mouseY.set(py);

    // Absolute cursor within container
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    mouseX.set(0);
    mouseY.set(0);
    cursorX.set(-100);
    cursorY.set(-100);
  };

  const handleNodeClick = (id) => {
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    setActiveNode(id);
    // Smooth settle back
    clickTimeoutRef.current = setTimeout(() => {
      setActiveNode(null);
    }, 1200);
  };

  const ambientOpacity = activeNode ? 0.3 : hoveredNode ? 0.6 : 1;
  const cursorOpacity = useTransform(cursorX, (x) => x === -100 ? 0 : 1);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative pt-[30px] pb-[0px] overflow-hidden bg-white ${!isTouchDevice ? '[&_svg]:cursor-none' : ''}`}
    >
      {/* Custom Cursor */}
      {!isTouchDevice && (
        <motion.div
          style={{
            x: cursorSmoothX,
            y: cursorSmoothY,
            translateX: "-50%",
            translateY: "-50%",
            scale: activeNode ? 0.7 : hoveredNode ? 1.3 : 1,
            opacity: cursorOpacity
          }}
          className="pointer-events-none absolute top-0 left-0 z-[100] transition-transform duration-200 drop-shadow-[0_0_8px_rgba(22,199,132,0.8)]"
        >
          <img src="/robo-cursor.png" alt="robot cursor" className="w-20 h-20 object-contain" />
        </motion.div>
      )}

      {/* Background radial glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[800px] h-[800px] bg-[#16C784]/5 rounded-full blur-[100px] -z-10"
      />

      <div className="w-full px-8 md:px-[80px] mx-auto max-w-[1920px] grid grid-cols-1 lg:grid-cols-[minmax(420px,0.85fr)_minmax(700px,1.35fr)] gap-8 items-center relative z-20">
        {/* Left Content */}
        <div className="z-20 relative pt-10 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[48px] lg:text-[60px] font-[800] text-primary-navy leading-[1.05] tracking-tight mb-6">
              AI-First <br />
              Enterprise <br />
              <span className="green-gradient-text">Transformation</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[18px] font-[700] text-primary-navy mb-4 leading-[1.6]">
              AI systems that transform enterprises end to end.
            </h2>
            <p className="text-[16px] font-[500] text-text-secondary mb-8 max-w-[480px] leading-[1.6]">
              From strategy to deployment, iQuadra delivers AI platforms, agentic workflows, Oracle Cloud ERP, Full Stack Java, Data Sciences, DevOps, and SAFe Agile services for enterprises ready to scale.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="solid" className="w-full sm:w-auto h-[48px] text-[15px] font-[600] px-6">
              Talk to Our AI Team &rarr;
            </Button>
            <Button variant="outline" className="w-full sm:w-auto h-[48px] text-[15px] font-[600] px-6">
              Explore IT Services &rarr;
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Complex SVG Graphic */}
        <div className="relative h-[480px] lg:h-[625px] w-full max-w-[900px] mx-auto flex items-center justify-center overflow-visible">
          <div className="relative w-full aspect-square md:aspect-auto md:h-full flex items-center justify-center pointer-events-none [&_>_div]:pointer-events-auto">

            {/* SVG Network Cloud */}
            <motion.svg style={{ x: networkX, y: networkY }} viewBox="0 0 800 600" className="absolute inset-0 w-full h-full object-visible overflow-visible z-0 pointer-events-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="streamGradDenseLeft" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#4A8CFF" stopOpacity="0.8" />
                  <stop offset="25%" stopColor="#4A8CFF" stopOpacity="0.4" />
                  <stop offset="70%" stopColor="#16C784" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#16C784" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="streamGradDenseRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4A8CFF" stopOpacity="0.8" />
                  <stop offset="25%" stopColor="#4A8CFF" stopOpacity="0.4" />
                  <stop offset="70%" stopColor="#16C784" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#16C784" stopOpacity="0" />
                </linearGradient>
                <filter id="glowSubtle">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Ambient Network Container */}
              <motion.g animate={{ opacity: ambientOpacity }} transition={{ duration: 0.5 }}>
                {/* Elliptical Globe Mesh Behind (Longitude lines) */}
                <g opacity="0.25">
                  {[...Array(24)].map((_, i) => {
                    const angle = (i / 24) * Math.PI;
                    const rx = 240 * Math.cos(angle);
                    return (
                      <ellipse
                        key={`sphere-v-${i}`}
                        cx="400" cy="300"
                        rx={Math.abs(rx)} ry="180"
                        fill="none" stroke="#4A8CFF" strokeWidth="0.6"
                        strokeDasharray="2 6"
                      />
                    );
                  })}
                </g>
                {/* Elliptical Globe Mesh Behind (Latitude lines) */}
                <g opacity="0.25">
                  {[...Array(16)].map((_, i) => {
                    const angle = (i / 16) * Math.PI;
                    const ry = 180 * Math.cos(angle);
                    return (
                      <ellipse
                        key={`sphere-h-${i}`}
                        cx="400" cy="300"
                        rx="240" ry={Math.abs(ry)}
                        fill="none" stroke="#4A8CFF" strokeWidth="0.6"
                        strokeDasharray="2 6"
                      />
                    );
                  })}
                </g>

                {/* Left Flare Web - Smooth S-Curve Stream */}
                <g opacity="0.8">
                  {[...Array(150)].map((_, i) => {
                    const progress = i / 149;
                    const startY = 300 + (progress - 0.5) * 160;
                    const endY = 300 + (progress - 0.5) * 440;
                    const cp1x = 280;
                    const cp1y = startY;
                    const cp2x = 100;
                    const cp2y = endY;
                    return (
                      <motion.path
                        key={`left-flare-${i}`}
                        d={`M400,${startY} C${cp1x},${cp1y} ${cp2x},${cp2y} 0,${endY}`}
                        fill="none"
                        stroke="url(#streamGradDenseLeft)"
                        strokeWidth={Math.random() > 0.8 ? "1.5" : "0.5"}
                        initial={{ strokeDasharray: "0 1200", strokeDashoffset: 1200 }}
                        animate={{ strokeDasharray: ["0 1200", "600 1200", "0 1200"], strokeDashoffset: [1200, 600, 0] }}
                        transition={{ duration: 10 + Math.random() * 8, repeat: Infinity, ease: "linear", delay: 2.5 + Math.random() * 2.5 }}
                      />
                    );
                  })}
                </g>

                {/* Right Flare Web - Smooth S-Curve Stream */}
                <g opacity="0.8">
                  {[...Array(150)].map((_, i) => {
                    const progress = i / 149;
                    const startY = 300 + (progress - 0.5) * 160;
                    const endY = 300 + (progress - 0.5) * 440;
                    const cp1x = 520;
                    const cp1y = startY;
                    const cp2x = 700;
                    const cp2y = endY;
                    return (
                      <motion.path
                        key={`right-flare-${i}`}
                        d={`M400,${startY} C${cp1x},${cp1y} ${cp2x},${cp2y} 800,${endY}`}
                        fill="none"
                        stroke="url(#streamGradDenseRight)"
                        strokeWidth={Math.random() > 0.8 ? "1.5" : "0.5"}
                        initial={{ strokeDasharray: "0 1200", strokeDashoffset: -1200 }}
                        animate={{ strokeDasharray: ["0 1200", "600 1200", "0 1200"], strokeDashoffset: [-1200, -600, 0] }}
                        transition={{ duration: 10 + Math.random() * 8, repeat: Infinity, ease: "linear", delay: Math.random() * 2.5 }}
                      />
                    );
                  })}
                </g>

                {/* Dense Woven Background Mesh (Static) */}
                <g opacity="0.25">
                  {[...Array(80)].map((_, i) => {
                    const progress = i / 79;
                    const startY = 300 + (progress - 0.5) * 320;
                    const endY = 300 + (progress - 0.5) * 600;
                    return (
                      <path
                        key={`bg-mesh-l-${i}`}
                        d={`M400,${startY} C300,${startY} 100,${endY} 0,${endY}`}
                        fill="none" stroke="url(#streamGradDenseLeft)" strokeWidth="0.3"
                      />
                    );
                  })}
                  {[...Array(80)].map((_, i) => {
                    const progress = i / 79;
                    const startY = 300 + (progress - 0.5) * 320;
                    const endY = 300 + (progress - 0.5) * 600;
                    return (
                      <path
                        key={`bg-mesh-r-${i}`}
                        d={`M400,${startY} C500,${startY} 700,${endY} 800,${endY}`}
                        fill="none" stroke="url(#streamGradDenseRight)" strokeWidth="0.3"
                      />
                    );
                  })}
                </g>

                {/* Particles Anchored to the S-Curves */}
                <g>
                  {[...Array(120)].map((_, i) => {
                    const isLeft = i % 2 === 0;
                    const progress = Math.random();
                    const startY = 300 + (progress - 0.5) * 160;
                    const endY = 300 + (progress - 0.5) * 440;
                    const t = Math.random() * 0.8 + 0.1;
                    const startX = 400;
                    const cp1x = isLeft ? 280 : 520;
                    const cp1y = startY;
                    const cp2x = isLeft ? 100 : 700;
                    const cp2y = endY;
                    const finalX = isLeft ? 0 : 800;
                    const finalY = endY;
                    const x = Math.pow(1 - t, 3) * startX + 3 * Math.pow(1 - t, 2) * t * cp1x + 3 * (1 - t) * Math.pow(t, 2) * cp2x + Math.pow(t, 3) * finalX;
                    const y = Math.pow(1 - t, 3) * startY + 3 * Math.pow(1 - t, 2) * t * cp1y + 3 * (1 - t) * Math.pow(t, 2) * cp2y + Math.pow(t, 3) * finalY;

                    return (
                      <motion.circle
                        key={`dot-${i}`}
                        cx={x} cy={y} r={Math.random() > 0.8 ? 2.5 : 1.5}
                        fill={Math.random() > 0.65 ? "#16C784" : "#4A8CFF"}
                        filter="url(#glowSubtle)"
                        opacity={0.4 + Math.random() * 0.6}
                        animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.5, 0.8] }}
                        transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, ease: "easeInOut", delay: (isLeft ? 2.5 : 0) + Math.random() * 2.5 }}
                      />
                    );
                  })}
                </g>
              </motion.g>

              {/* 6 Primary Interactive Connection Paths */}
              <g>
                {NODES.map((node) => {
                  const isNodeHovered = hoveredNode === node.id;
                  const isNodeActive = activeNode === node.id;
                  const startX = 400;
                  const startY = 300;
                  const endX = node.side === 'left' ? 0 : 800;
                  const endY = node.y;
                  const cp1x = node.side === 'left' ? 280 : 520;
                  const cp1y = 300;
                  const cp2x = node.side === 'left' ? 100 : 700;
                  const cp2y = endY;
                  
                  const d = `M${startX},${startY} C${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`;
                  const isActiveState = isNodeHovered || isNodeActive;
                  
                  return (
                    <g key={`primary-path-${node.id}`}>
                      {/* Flowing Energy Particle */}
                      <motion.path
                        d={d}
                        fill="none"
                        stroke={isNodeActive ? "#16C784" : "#FFFFFF"}
                        strokeWidth={isNodeActive ? 4 : 2}
                        filter="url(#glowSubtle)"
                        strokeDasharray="20 1200"
                        initial={{ strokeDashoffset: node.side === 'left' ? 1200 : -1200, opacity: 0 }}
                        animate={{
                          strokeDashoffset: isActiveState 
                            ? (node.side === 'left' ? [1200, 0] : [-1200, 0])
                            : (node.side === 'left' ? 1200 : -1200),
                          opacity: isActiveState ? [0, 1, 0] : 0
                        }}
                        transition={{
                          strokeDashoffset: {
                            duration: isNodeActive ? 0.8 : 1.5,
                            repeat: Infinity,
                            ease: "linear"
                          },
                          opacity: {
                            duration: isNodeActive ? 0.8 : 1.5,
                            repeat: Infinity,
                            ease: "linear"
                          }
                        }}
                      />
                    </g>
                  );
                })}
              </g>
            </motion.svg>

            {/* 3D Platform Base */}
            <motion.div style={{ x: networkX, y: networkY }} className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              {/* Top Tier */}
              <div className="relative z-30 flex items-center justify-center">
                <div className="w-[200px] h-[60px] bg-gradient-to-b from-[#f0f8ff] to-[#e6f2ff] rounded-[50%] border border-[#ffffff] shadow-[inset_0_2px_5px_rgba(255,255,255,1)] z-20 relative"></div>
                <div className="absolute top-[30px] w-[200px] h-[40px] bg-gradient-to-r from-[#d0e5ff] via-[#e6f2ff] to-[#d0e5ff] rounded-b-[50%] z-10 border-b border-[#aaccff]"></div>
              </div>
              {/* Middle Tier */}
              <div className="relative z-20 -mt-[45px] flex items-center justify-center">
                <div className="w-[280px] h-[80px] bg-gradient-to-b from-[#eaf4ff] to-[#dcebfc] rounded-[50%] border border-[#ffffff] shadow-[inset_0_2px_5px_rgba(255,255,255,1)] z-20 relative"></div>
                <div className="absolute top-[40px] w-[280px] h-[50px] bg-gradient-to-r from-[#c0dbff] via-[#dcebfc] to-[#c0dbff] rounded-b-[50%] z-10 border-b border-[#aaccff]"></div>
              </div>
              {/* Bottom Tier */}
              <div className="relative z-10 -mt-[55px] flex items-center justify-center">
                <div className="w-[380px] h-[100px] bg-gradient-to-b from-[#e3f0ff] to-[#d1e6fa] rounded-[50%] border border-[#ffffff] shadow-[inset_0_2px_5px_rgba(255,255,255,1)] z-20 relative"></div>
                <div className="absolute top-[50px] w-[380px] h-[60px] bg-gradient-to-r from-[#aed1ff] via-[#d1e6fa] to-[#aed1ff] rounded-b-[50%] z-10 border-b border-[#88bbff] shadow-[0_15px_30px_rgba(0,50,100,0.1)]"></div>
              </div>
            </motion.div>

            {/* Central Circular iQuadra Node */}
            <motion.div 
              style={{ x: coreX, y: coreY }}
              className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[200px] h-[200px]"
            >
              <motion.div
                animate={{ 
                  y: [0, -3, 0],
                  scale: activeNode ? [1, 1.05, 1] : 1,
                  boxShadow: activeNode 
                    ? ['0 10px 40px rgba(22,199,132,0.15)', '0 10px 60px rgba(22,199,132,0.4)', '0 10px 40px rgba(22,199,132,0.15)'] 
                    : '0 10px 40px rgba(22,199,132,0.15)'
                }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.6, ease: "easeOut" },
                  boxShadow: { duration: 0.6, ease: "easeOut" }
                }}
                className="w-full h-full rounded-full p-[2px] bg-gradient-to-br from-[#4A8CFF] to-[#16C784] flex items-center justify-center"
              >
                <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]">
                  <img src="/nav-logo.png" alt="iQuadra" className="relative z-30 h-14 w-auto object-contain" />
                </div>
              </motion.div>
            </motion.div>

            {/* Left Service Cards */}
            <FloatingCard
              id="ai-platforms"
              isHovered={hoveredNode === 'ai-platforms'}
              isActive={activeNode === 'ai-platforms'}
              onHover={setHoveredNode}
              onLeave={() => setHoveredNode(null)}
              onClick={handleNodeClick}
              position="top-[16.6%] -translate-y-1/2 left-[2%]" delay={0.5}
              text={"AI Platforms &\nAgentic Workflows"}
              icon={
                <svg className="w-[18px] h-[18px] text-primary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 0-3 1-3 2.5 0 .5.2 1 .5 1.5-1.5.5-2.5 1.5-2.5 3 0 .8.3 1.5.8 2C7.3 12.8 7 13.8 7 15c0 1.5 1 2.5 2.5 2.5h5c1.5 0 2.5-1 2.5-2.5 0-1.2-.3-2.2-.8-3 .5-.5.8-1.2.8-2 0-1.5-1-2.5-2.5-3 .3-.5.5-1 .5-1.5C15 4 13.5 3 12 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v14.5" />
                  <circle cx="12" cy="9" r="1.5" fill="#16C784" stroke="none" />
                </svg>
              }
            />
            <FloatingCard
              id="oracle-erp"
              isHovered={hoveredNode === 'oracle-erp'}
              isActive={activeNode === 'oracle-erp'}
              onHover={setHoveredNode}
              onLeave={() => setHoveredNode(null)}
              onClick={handleNodeClick}
              position="top-[50%] -translate-y-1/2 -left-[5%]" delay={1.5}
              text={"Oracle Cloud\nERP"}
              icon={
                <svg className="w-[18px] h-[18px] text-primary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  <circle cx="15" cy="12" r="1.5" fill="#16C784" stroke="none" />
                </svg>
              }
            />
            <FloatingCard
              id="data-sciences"
              isHovered={hoveredNode === 'data-sciences'}
              isActive={activeNode === 'data-sciences'}
              onHover={setHoveredNode}
              onLeave={() => setHoveredNode(null)}
              onClick={handleNodeClick}
              position="top-[83.3%] -translate-y-1/2 left-[2%]" delay={2.5}
              text={"Data Sciences &\nAI Engineering"}
              icon={
                <svg className="w-[18px] h-[18px] text-primary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l4-4" stroke="#16C784" />
                </svg>
              }
            />

            {/* Right Service Cards */}
            <FloatingCard
              id="full-stack"
              isHovered={hoveredNode === 'full-stack'}
              isActive={activeNode === 'full-stack'}
              onHover={setHoveredNode}
              onLeave={() => setHoveredNode(null)}
              onClick={handleNodeClick}
              position="top-[16.6%] -translate-y-1/2 right-[2%]" delay={1.0}
              text={"Full Stack Java &\nModern Apps"}
              icon={
                <svg className="w-[18px] h-[18px] text-primary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16" stroke="#16C784" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4 4-4M17 16l4-4-4-4" />
                </svg>
              }
            />
            <FloatingCard
              id="devops"
              isHovered={hoveredNode === 'devops'}
              isActive={activeNode === 'devops'}
              onHover={setHoveredNode}
              onLeave={() => setHoveredNode(null)}
              onClick={handleNodeClick}
              position="top-[50%] -translate-y-1/2 -right-[5%]" delay={2.0}
              text={"DevOps &\nCloud Engineering"}
              icon={
                <svg className="w-[18px] h-[18px] text-primary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 8c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.1 0 2.1-.4 2.8-1.2l6.4-6.4c.7-.8 1.7-1.2 2.8-1.2 2.2 0 4 1.8 4 4s-1.8 4-4 4c-1.1 0-2.1-.4-2.8-1.2l-6.4-6.4C10.1 8.4 9.1 8 8 8z" />
                  <circle cx="16" cy="12" r="1.5" fill="#16C784" stroke="none" />
                </svg>
              }
            />
            <FloatingCard
              id="safe-agile"
              isHovered={hoveredNode === 'safe-agile'}
              isActive={activeNode === 'safe-agile'}
              onHover={setHoveredNode}
              onLeave={() => setHoveredNode(null)}
              onClick={handleNodeClick}
              position="top-[83.3%] -translate-y-1/2 right-[2%]" delay={3.0}
              text={"SAFe Agile &\nQuality Engineering"}
              icon={
                <svg className="w-[18px] h-[18px] text-primary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  <circle cx="12" cy="7" r="1.5" fill="#16C784" stroke="none" />
                </svg>
              }
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
