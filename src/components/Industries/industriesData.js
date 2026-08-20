import { ShoppingBag, Factory, CreditCard, Plane, HeartPulse, Zap, Building2, FlaskConical, Car } from 'lucide-react';
import imgRetail from '../../assets/industries/industry_retail_1787137258892.jpg';
import imgManufacturing from '../../assets/industries/industry_manufacturing_1787136634373.jpg';
import imgPayments from '../../assets/industries/industry_payments_1787136773355.jpg';
import imgAerospace from '../../assets/industries/industry_aerospace_1787136787392.jpg';
import imgHealthcare from '../../assets/industries/industry_healthcare_1787136902089.jpg';
import imgUtilities from '../../assets/industries/industry_utilities_1787136920166.jpg';
import imgConstruction from '../../assets/industries/industry_construction_1787136933146.jpg';
import imgScience from '../../assets/industries/industry_science_1787137092958.jpg';
import imgAutomotive from '../../assets/industries/industry_automotive_1787137191382.jpg';


export const industriesData = [
  {
    id: "retail",
    number: "01",
    name: "Retail & eCommerce",
    icon: ShoppingBag,
    description: "Helping retailers turn customer, commerce and operational data into intelligent decisions across demand, personalization, inventory and omnichannel experiences.",
    tags: ["Agentic AI", "Personalization", "Inventory AI"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    image: imgRetail
  },
  {
    id: "manufacturing",
    number: "02",
    name: "Manufacturing",
    icon: Factory,
    description: "Oracle ERP implementation, supply chain optimization, quality engineering and IoT-driven operational intelligence for modern manufacturing floors.",
    tags: ["Oracle SCM", "IoT", "Quality Engineering"],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    image: imgManufacturing
  },
  {
    id: "payments",
    number: "03",
    name: "Card & Payments",
    icon: CreditCard,
    description: "Payment platform engineering, fraud detection, quality assurance and API integration for complex, high-volume fintech ecosystems.",
    tags: ["Payments QA", "Fraud AI", "APIs"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    image: imgPayments
  },
  {
    id: "aerospace",
    number: "04",
    name: "Aerospace & Avionics",
    icon: Plane,
    description: "Safety-critical engineering, embedded systems and rigorous verification/validation for highly regulated avionics environments.",
    tags: ["DO-178B", "ARP4754", "V&V"],
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    image: imgAerospace
  },
  {
    id: "healthcare",
    number: "05",
    name: "Pharma & Healthcare",
    icon: HeartPulse,
    description: "Healthcare inventory management, Oracle ERP, HIPAA-focused compliance and AI-powered workflow optimization for better patient outcomes.",
    tags: ["HIPAA", "Oracle HCM", "Compliance AI"],
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    image: imgHealthcare
  },
  {
    id: "utilities",
    number: "06",
    name: "Utilities & Telecom",
    icon: Zap,
    description: "Smart-grid intelligence, massive IoT scale, operational analytics and Oracle Cloud ERP for modern utility infrastructures.",
    tags: ["Smart Grid", "IoT", "Oracle"],
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    image: imgUtilities
  },
  {
    id: "construction",
    number: "07",
    name: "Contract & Construction",
    icon: Building2,
    description: "Project management, Oracle Fusion Projects, contract lifecycle management and comprehensive workforce management solutions.",
    tags: ["Oracle Projects", "CLM", "Workforce Management"],
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    image: imgConstruction
  },
  {
    id: "science",
    number: "08",
    name: "Science & Technology",
    icon: FlaskConical,
    description: "R&D systems, laboratory information management (LIMS), scientific data engineering and AI-driven research analytics.",
    tags: ["LIMS", "R&D AI", "Data Engineering"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    image: imgScience
  },
  {
    id: "automotive",
    number: "09",
    name: "Automotive & Transportation",
    icon: Car,
    description: "Embedded automotive quality, Oracle ERP, AI-powered fleet management and predictive maintenance for connected vehicles.",
    tags: ["Embedded Systems", "Fleet AI", "Oracle"],
    color: "text-red-600",
    bgColor: "bg-red-50",
    image: imgAutomotive
  }
];
