'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import LottieAnimation from '@/components/ui/LottieAnimation';

export default function HeroNew() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#121C50] to-[#6029B7] text-white min-h-screen px-[5%] py-20 flex items-center">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/20"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left column with text */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
              <span className="block">Anything.</span>
              <span className="block">Anywhere.</span>
              <span className="block">
                <span className="relative">
                  Instantly
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-blue-500"></span>
                </span>
                <span className="text-transparent">.</span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-xl">
              Connect with reliable delivery partners through our next-generation logistics platform.
            </p>
            
            <div className="flex flex-wrap gap-5 mb-10">
              <Link
                href="/auth/login"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 font-medium text-white hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-lg mr-1">📦</span> Book Now
              </Link>
              
              <Link
                href="/auth/register"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 font-medium text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-lg mr-1">🚀</span> Get Started
              </Link>
              
              <button
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 font-medium text-white hover:bg-white/10 transition-all duration-300"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <motion.div 
              className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-2xl backdrop-blur-sm w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex -space-x-2">
                {['J', 'K', 'L'].map((letter, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-medium border-2 border-white/20"
                  >
                    {letter}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-medium border-2 border-white/20">
                  +
                </div>
              </div>
              <p className="text-sm text-gray-200">
                Trusted by <span className="font-bold">10,000+</span> customers & partners
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right column with lottie animation */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ 
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              <div className="relative bg-white/10 backdrop-blur-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/20 transform rotate-1">
                <div className="w-full h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl p-3 sm:p-5 transform -rotate-2 flex items-center justify-center">
                  {/* Lottie animation */}
                  <div className="w-full flex justify-center">
                    <LottieAnimation 
                      src="https://lottie.host/452a0bae-0053-4c98-9b09-8ff85bd28350/hu3mef2hLv.lottie"
                      width="100%"
                      height="400px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => {
            const element = document.getElementById('how-it-works');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm text-gray-300 mb-2 group-hover:text-white transition-colors">Scroll</span>
          <motion.div
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 group-hover:border-white/60 transition-colors"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 