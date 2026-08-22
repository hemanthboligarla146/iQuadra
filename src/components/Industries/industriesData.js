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
    image: imgRetail,
    link: "/industries/retail",
    extraContent: "Our Retail & eCommerce practice combines our Helix AI operations suite and Agentic systems to deliver hyper-personalized experiences. We integrate complex supply chains with smart inventory forecasting algorithms, ensuring you have the right products at the right time, minimizing stockouts and maximizing margins."
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
    image: imgManufacturing,
    link: "/industries/manufacturing",
    extraContent: "We empower modern manufacturers by integrating edge IoT devices with Oracle Supply Chain Management. Our quality engineering frameworks automate defect detection on the assembly line, significantly reducing waste and ensuring your operations run at peak efficiency with predictive maintenance models."
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
    image: imgPayments,
    link: "/industries/payments",
    extraContent: "iQuadra's fintech engineering team specializes in high-throughput, low-latency payment gateways. We implement advanced AI fraud detection systems that analyze transaction patterns in real-time, reducing false positives while maintaining absolute security and regulatory compliance."
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
    image: imgAerospace,
    link: "/industries/aerospace",
    extraContent: "Our aerospace practice provides rigorous, safety-critical software engineering. We strictly adhere to DO-178C and ARP4754 standards, offering comprehensive verification and validation (V&V) services for embedded avionics systems, ensuring absolute reliability for mission-critical flight software."
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
    image: imgHealthcare,
    link: "/industries/healthcare",
    extraContent: "We transform healthcare operations by modernizing legacy systems into HIPAA-compliant, cloud-native architectures. Our AI-driven workflows streamline patient onboarding, automate claims processing, and provide predictive analytics for hospital resource management, ultimately improving patient care."
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
    image: imgUtilities,
    link: "/industries/utilities",
    extraContent: "Drive the transition to smart grids with our massive-scale IoT data engineering. We ingest millions of telemetry data points to provide real-time operational analytics, predict infrastructure failures before they happen, and integrate seamlessly with Oracle Utilities for complete operational visibility."
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
    image: imgConstruction,
    link: "/industries/construction",
    extraContent: "Manage massive, multi-year construction projects with confidence. We implement Oracle Fusion Projects and advanced Contract Lifecycle Management systems to track costs, optimize subcontractor workflows, and ensure on-time delivery while maintaining strict margin control."
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
    image: imgScience,
    link: "/industries/science",
    extraContent: "Accelerate your R&D pipelines. We architect scalable Laboratory Information Management Systems (LIMS) and apply deep learning algorithms to vast scientific datasets, automating data extraction and accelerating the discovery phase of new scientific breakthroughs."
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
    image: imgAutomotive,
    link: "/industries/automotive",
    extraContent: "Next-generation automotive engineering requires robust data backbones. We build AI-powered fleet management platforms that process real-time telematics for predictive maintenance, while integrating factory-floor Oracle ERP systems for seamless just-in-time manufacturing."
  }
];
