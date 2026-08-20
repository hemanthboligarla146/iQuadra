import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Server } from 'lucide-react';
import Card from '../Common/Card';

const WhatWeDo = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h2 className="text-[28px] font-[700] text-primary-navy mb-2 tracking-tight">What We Do</h2>
        <p className="text-text-secondary font-[500] text-[15px]">Two powerful verticals. One trusted partner.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
        {/* Card 1 */}
        <Card className="flex flex-col border border-gray-100 bg-white shadow-sm hover:shadow-enterprise-hover transition-shadow duration-300 p-8 h-auto rounded-[20px]">
          <div className="w-[48px] h-[48px] rounded-xl bg-primary-green/10 flex items-center justify-center mb-6">
            <Bot className="w-6 h-6 text-primary-green" strokeWidth={2} />
          </div>
          <h3 className="text-[18px] font-[700] text-primary-navy mb-4 leading-snug">AI & Intelligent Automation</h3>
          <p className="text-[15px] font-[400] text-text-secondary leading-[1.6] mb-8 flex-grow">
            We design and deliver AI platforms, agentic workflows, Retail AI, and our proprietary products — iQua.ai and Helix AI — for enterprise organizations ready to operationalize AI at scale.
          </p>
          <Link to="/ai-products" className="text-primary-green font-[600] text-[15px] flex items-center hover:underline mt-auto">
            Explore AI Products &rarr;
          </Link>
        </Card>

        {/* Card 2 */}
        <Card className="flex flex-col border border-gray-100 bg-secondary-bg shadow-sm hover:shadow-enterprise-hover transition-shadow duration-300 p-8 h-auto rounded-[20px]">
          <div className="w-[48px] h-[48px] rounded-xl bg-secondary-blue/10 flex items-center justify-center mb-6">
            <Server className="w-6 h-6 text-secondary-blue" strokeWidth={2} />
          </div>
          <h3 className="text-[18px] font-[700] text-primary-navy mb-4 leading-snug">Enterprise IT Services</h3>
          <p className="text-[15px] font-[400] text-text-secondary leading-[1.6] mb-8 flex-grow">
            From Full Stack Java and Python to Oracle Cloud ERP, DevOps, Data Engineering, Quality Engineering, and SAFe Agile — iQuadra's IT services keep your enterprise moving.
          </p>
          <Link to="/it-services" className="text-secondary-blue font-[600] text-[15px] flex items-center hover:underline mt-auto">
            Explore IT Services &rarr;
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default WhatWeDo;
