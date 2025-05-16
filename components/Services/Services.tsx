// services.tsx
import { FC } from 'react';
import {  Box, FileText, Shield, Settings, Award, FlaskConical, Pill, Star, Truck, Package } from 'lucide-react';

// Easy to manage service data at the top of the file
const servicesData = [
  {
    id: 1,
    title: 'Duty Free Import Authorization (DFIA) License',
    description: 'DFIA is a critical regulatory mechanism that allows eligible importers to bring goods into the country without paying customs duties, provided they meet specific export obligations.',
    icon: <Box className="w-8 h-8" />,
    color: 'bg-blue-600',
    link: '/duty-free-import-authorization-dfia-license'
  },
  {
    id: 2,
    title: 'Custom Duty Drawback Compliance',
    description: 'Duty Drawback Advisory and Claim Processing is a specialized service designed to assist importers and manufacturers in recovering the customs duties paid on imported materials.',
    icon: <FileText className="w-8 h-8" />,
    color: 'bg-emerald-600',
    link: '/custom-duty-drawback-services'
  },
  {
    id: 3,
    title: 'Special Valuation Branch (SVB) Consultant',
    description: 'Special Valuation Branch (SVB) Support is a specialized advisory and facilitation service provided to help businesses navigate complex valuation issues with customs authorities.',
    icon: <Shield className="w-8 h-8" />,
    color: 'bg-purple-600',
    link: '/special-valuation-branch-svb-customs-registration'
  },
  {
    id: 4,
    title: 'Valuation Of Customs Consultant',
    description: 'Custom Valuation & Classification Advisory is a specialized regulatory service designed to assist businesses in accurately determining the customs value of imported goods.',
    icon: <Settings className="w-8 h-8" />,
    color: 'bg-amber-500',
    link: '/custom-valuation-of-imported-export-goods'
  },
  {
    id: 5,
    title: 'BIS Certification',
    description: 'The Bureau of Indian Standards (BIS) Certification is a pivotal mechanism ensuring that products, systems, and services in India adhere to established national standards.',
    icon: <Award className="w-8 h-8" />,
    color: 'bg-indigo-600',
    link: '/bis-bureau-of-indian-standards-certification'
  },
  {
    id: 6,
    title: 'AERB Certificate Registration Online',
    description: 'The Atomic Energy Regulatory Board (AERB) is India\'s statutory authority responsible for regulating the use of ionizing radiation and nuclear energy applications.',
    icon: <FlaskConical className="w-8 h-8" />,
    color: 'bg-red-600',
    link: '/aerb-certificate-registration-online'
  },
  {
    id: 7,
    title: 'CDSCO Import License Registration Consultant',
    description: 'The Central Drugs Standard Control Organization (CDSCO) is India\'s apex drug regulatory body responsible for overseeing the import, manufacture, and sale of drugs and medical devices.',
    icon: <Pill className="w-8 h-8" />,
    color: 'bg-green-600',
    link: '/cdsco-certificate-import-license-registration'
  },
  {
    id: 8,
    title: 'Star Export House Certificate Registration',
    description: 'Star Export House Certification is a prestigious recognition awarded by the Government of India to exporters that consistently demonstrate excellence in international trade.',
    icon: <Star className="w-8 h-8" />,
    color: 'bg-yellow-600',
    link: '/star-export-house-certificate-registration'
  },
  {
    id: 9,
    title: 'AEO Certificate Registration',
    description: 'The Authorized Economic Operator (AEO) Registration is a globally recognized certification that underscores a company\'s commitment to secure and streamlined international trade.',
    icon: <Package className="w-8 h-8" />,
    color: 'bg-teal-600',
    link: '/aeo-registration-certificate'
  },
  {
    id: 10,
    title: 'TMA Transport and Marketing Assistance',
    description: 'TMA (Transport and Marketing Assistance) Scheme is a pivotal export promotion initiative established by the Government of India to support exporters in specialized markets.',
    icon: <Truck className="w-8 h-8" />,
    color: 'bg-cyan-600',
    link: '/tma-transport-and-marketing-assistance'
  },
];

const Services: FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-lg font-semibold text-blue-600 uppercase tracking-wide">What We Do</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Our Services</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We provide specialized consulting services to help businesses navigate complex customs and international trade requirements in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 overflow-hidden"
            >
              {/* <div className={`${service.color} h-2 w-full`}></div> */}
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center mb-5">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mr-4 text-black `}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 flex-grow mb-5 text-sm md:text-base">
                  {service.description}
                </p>
                
                {/* <a
                  href={service.link}
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 group text-sm"
                >
                  Read More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a> */}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;