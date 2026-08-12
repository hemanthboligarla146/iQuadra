import React from 'react';
import { Send, User, Briefcase } from 'lucide-react';
import Container from '../Common/Container';
import SectionWrapper from '../Common/SectionWrapper';
import Card from '../Common/Card';
import Button from '../Common/Button';

const CTA = () => {
  return (
    <SectionWrapper bg="bg-secondary-bg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-6">
          
          {/* Card 1: Ready to build */}
          <Card className="h-full flex flex-col justify-between border-transparent p-8 rounded-[20px] bg-white">
            <div className="flex gap-5 items-start mb-8">
              <div className="w-[52px] h-[52px] rounded-full bg-primary-green/10 flex-shrink-0 flex items-center justify-center">
                <Send className="w-6 h-6 text-primary-green" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[24px] font-[700] text-primary-navy mb-2 tracking-tight">Ready to build what's next?</h3>
                <p className="text-[15px] text-text-secondary font-[400] leading-relaxed">
                  Meet our team and start a conversation about your AI and IT transformation goals.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-auto">
              <Button variant="solid" className="py-2.5 px-6 text-[15px]">
                Talk to Our AI Team &rarr;
              </Button>
              <Button variant="outline" className="py-2.5 px-6 text-[15px]">
                Explore IT Services &rarr;
              </Button>
            </div>
          </Card>

          {/* Card 2: Employee Portal */}
          <Card className="h-full flex flex-col justify-between border-transparent p-8 rounded-[20px] bg-white">
            <div className="flex gap-4 items-start mb-6">
              <div className="w-[52px] h-[52px] rounded-full bg-secondary-blue/10 flex-shrink-0 flex items-center justify-center">
                <User className="w-6 h-6 text-secondary-blue" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[20px] font-[700] text-primary-navy mb-2 tracking-tight">Employee Portal</h3>
                <p className="text-[14px] font-[700] text-primary-navy mb-1">iQuadra team member?</p>
                <p className="text-[14px] text-text-secondary font-[400] leading-relaxed">
                  Log in with your @iquadra.com credentials. Employees go to iQuadra.net via SSO. HR, Media, and Admin access their dashboard here.
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <button className="flex items-center text-[15px] font-[600] text-secondary-blue border border-secondary-blue rounded-full px-6 py-2.5 hover:bg-secondary-blue hover:text-white transition-colors w-fit">
                Staff Login &rarr;
              </button>
            </div>
          </Card>

          {/* Card 3: Open Positions */}
          <Card className="h-full flex flex-col justify-between border-transparent p-8 rounded-[20px] bg-white">
            <div className="flex gap-4 items-start mb-6">
              <div className="w-[52px] h-[52px] rounded-full bg-accent-orange/10 flex-shrink-0 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent-orange" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[20px] font-[700] text-primary-navy mb-2 tracking-tight">Open Positions</h3>
                <p className="text-[14px] text-text-secondary font-[400] leading-relaxed">
                  We have 3 open roles across AI, ERP, data, cloud, and agile practices.
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <button className="flex items-center text-[15px] font-[600] text-accent-orange border border-accent-orange rounded-full px-6 py-2.5 hover:bg-accent-orange hover:text-white transition-colors w-fit">
                View Careers &rarr;
              </button>
            </div>
          </Card>

        </div>
      </Container>
    </SectionWrapper>
  );
};

export default CTA;
