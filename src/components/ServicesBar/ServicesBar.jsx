import React from 'react';
import * as Icons from 'lucide-react';
import { servicesData } from '../../data/mockData';

const IconWrapper = ({ iconName }) => {
  const iconMap = {
    'zap': Icons.Zap,
    'git-branch': Icons.GitBranch,
    'cloud': Icons.Cloud,
    'code': Icons.Code,
    'pie-chart': Icons.PieChart,
    'activity': Icons.Activity,
    'check-circle': Icons.CheckCircle,
    'layers': Icons.Layers,
    'users': Icons.Users,
    'shopping-cart': Icons.ShoppingCart,
    'server': Icons.Server,
    'cpu': Icons.Cpu,
    'hexagon': Icons.Hexagon
  };

  const IconComponent = iconMap[iconName] || Icons.Circle;
  const blueIcons = ['cloud', 'code', 'pie-chart', 'activity', 'server'];
  const colorClass = blueIcons.includes(iconName) ? 'text-secondary-blue' : 'text-primary-green';
  
  return <IconComponent className={`w-[18px] h-[18px] ${colorClass} mb-1.5`} strokeWidth={1.5} />;
};

const ServicesBar = () => {
  return (
    <div className="w-full border-y border-gray-100 bg-white py-3 overflow-hidden relative">
      <div className="w-full px-4 md:px-[80px] mx-auto max-w-[1920px] overflow-x-auto hide-scrollbar">
        <div className="flex items-center justify-between w-full min-w-[1000px]">
          {servicesData.map((service, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center justify-center group cursor-pointer px-2 xl:px-4 flex-1">
                <IconWrapper iconName={service.icon} />
                <span className="text-[10px] xl:text-[11px] font-[600] text-gray-500 whitespace-nowrap group-hover:text-primary-green transition-colors tracking-tight">
                  {service.name}
                </span>
              </div>
              {/* Divider except for the last item */}
              {index < servicesData.length - 1 && (
                <div className="w-[1px] h-6 bg-gray-200 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesBar;
