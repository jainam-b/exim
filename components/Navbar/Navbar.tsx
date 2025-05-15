"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, MessageSquare } from 'lucide-react';

const NavbarWithForm: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    state: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'} bg-transparent`}>
      <div className="container mx-auto px-4">
        {!isScrolled ? (
          // Regular Navbar
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2">
                <Image 
                  src="/logo/logo.png" 
                  alt="Corpbiz Logo" 
                  width={300} 
                  height={300}
                  className="h-20 w-auto"
                />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:9121230280" className="flex items-center text-amber-500">
                <Phone size={18} className="mr-1" />
                <span>9121230280</span>
              </a>
              <a href="https://wa.me/9289379709" className="flex items-center text-amber-500">
                <MessageSquare size={18} className="mr-1" />
                <span>9289379709</span>
              </a>
              <button className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-blue-100 transition-colors">
                Book an Appointment
              </button>
            </div>
          </div>
        ) : (
          // Form Navbar
          <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-between gap-2 bg-black/50 shadow-md rounded-lg px-4">
            <div className="mr-4">
              <Image 
                src="/logo/logo.png" 
                alt="Corpbiz Logo" 
                width={300} 
                height={300}
                className="h-20 w-auto"
              />
            </div>
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            <div className="flex">
              <div className="flex items-center px-3 py-2 bg-black rounded-l border border-r-0 border-gray-300">
                {/* <Image src="/india-flag.png" alt="India" width={20} height={15} /> */}
                <span className="ml-1">+91</span>
              </div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="px-3 py-2 rounded-r border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select State</option>
              <option value="delhi">Delhi</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="karnataka">Karnataka</option>
              <option value="tamilnadu">Tamil Nadu</option>
              {/* Add more states as needed */}
            </select>
            
            <button
              type="submit"
              className="bg-amber-500 text-white px-6 py-2 rounded font-semibold hover:bg-amber-600 transition-colors"
            >
              GET STARTED
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NavbarWithForm;