"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";



const WhoWeAreSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

 

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements - improved with more subtle gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-50 to-transparent rounded-full opacity-60 blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tl from-blue-50 to-transparent rounded-full opacity-70 blur-3xl translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-purple-50 to-transparent rounded-full opacity-40 blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 text-sm font-semibold text-indigo-700 bg-indigo-50 rounded-full mb-5 shadow-sm">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
                Who We Are
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
              Since our foundation in 1995, Exim Advisory has evolved into a trusted leader in
              export and import advisory services. With over 3 decades of dedicated expertise,
              we specialize in streamlining international trade from initiating transactions to
              ensuring rigorous compliance.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
              Led by Chartered Accountant Niten Agarwal, our team combines deep market insight
              with cutting-edge technology to deliver precision, efficiency, and unmatched reliability.
            </motion.p>

            {/* <motion.div variants={itemVariants} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Presence</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our extensive network spans key business hubs across India with head office in
                Noida and branches in Delhi, Mumbai, Gurugram, Chennai, Bengaluru, and Pune
                and international offices in Singapore and Canada. This global footprint enables
                us to offer tailored solutions that meet the unique challenges of today's dynamic
                trade landscape.
              </p>
            </motion.div> */}

            <motion.div variants={itemVariants}>
              <button className="mt-4 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group">
                Read More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right images and stats column - improved positioning and styling */}
          <div className="relative h-full flex items-center justify-center">
            <motion.div 
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-lg mx-auto"
            >
              <Image
                src="/who/who.png"
                alt="Exim Advisory Team"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </motion.div>

           

        
          </div>
        </div>


      </div>
    </section>
  );
};

export default WhoWeAreSection;