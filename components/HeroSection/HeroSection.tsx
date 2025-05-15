"use client"
import { useState, useEffect } from 'react';
import { ArrowRight, Globe, TrendingUp, Shield } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';
export default function Hero() {
  const [email, setEmail] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  
  // Images for background transitions
  const backgroundImages = [
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070", // Shipping port
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070", // Global trade
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"     // Corporate business
  ];

  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission - would connect to your API
    console.log('Consultation requested with:', email);
    setEmail('');
    // You would typically add form validation and submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative flex-grow bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Background image with overlay - changes on scroll */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${backgroundImages[activeImage]}')`,
            backgroundBlendMode: "overlay",
            opacity: 0.4
          }}
        />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-black/50 z-1"></div>
                
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left column - Text content */}
            <div className="text-white space-y-8">
              <div className="inline-block px-4 py-1 bg-blue-600/70 backdrop-blur-sm rounded-full mb-3 shadow-lg transform hover:scale-105 transition-all">
                <p className="text-sm font-medium tracking-wider">EXIM ADVISORY</p>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Global Trade Solutions That <span className="text-yellow-400 text-shadow">Expand Your Reach</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-xl leading-relaxed">
                Expert guidance to navigate international markets and optimize your import/export operations.
              </p>
              
              <div className="flex flex-wrap gap-8 pt-6">
                <div className="flex items-center group">
                  <div className="bg-blue-500/50 backdrop-blur-sm p-3 rounded-full mr-4 shadow-md group-hover:bg-blue-400/70 transition-all">
                    <Globe className="h-6 w-6 text-blue-100" />
                  </div>
                  <p className="font-medium text-lg">Global Network</p>
                </div>
                <div className="flex items-center group">
                  <div className="bg-blue-500/50 backdrop-blur-sm p-3 rounded-full mr-4 shadow-md group-hover:bg-blue-400/70 transition-all">
                    <TrendingUp className="h-6 w-6 text-blue-100" />
                  </div>
                  <p className="font-medium text-lg">Enhanced ROI</p>
                </div>
                <div className="flex items-center group">
                  <div className="bg-blue-500/50 backdrop-blur-sm p-3 rounded-full mr-4 shadow-md group-hover:bg-blue-400/70 transition-all">
                    <Shield className="h-6 w-6 text-blue-100" />
                  </div>
                  <p className="font-medium text-lg">Compliance Assured</p>
                </div>
              </div>
            </div>
            
            {/* Right column - CTA form */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Expert Consultation</h3>
              <p className="text-gray-600 mb-6">Discover how we can help your business expand globally with our tailored export/import solutions.</p>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm"
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md"
                >
                  Request Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm text-center font-medium">
                  Trusted by 500+ companies worldwide
                </p>
                <div className="flex justify-center gap-8 mt-4">
                  {/* These would be replaced with your actual client logos */}
                  <div className="flex items-center justify-center gap-8">
                    <div className="w-32 h-16 relative">
                      <Image 
                        src="/client-logo/reliance.png"
                        alt="Reliance Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="w-32 h-16 relative">
                      <Image 
                        src="/client-logo/ss.png"
                        alt="Asian Paints Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="w-32 h-16 relative">
                      <Image 
                        src="/client-logo/schneider.png"
                        alt="Radisson Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
     
      </div>
      
      {/* Add this style for text shadow */}
      <style jsx global>{`
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(15px);
          }
        }
      `}</style>
    </div>
  );
}