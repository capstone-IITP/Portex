'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeIn, staggerContainer, planetVariants, textVariant } from '@/lib/utils/motion';
import { TruckIcon, PackageIcon, CheckCircleIcon, MapPinIcon } from 'lucide-react';

export default function Hero() {
  // Add parallax scrolling effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-full h-full"
        >
          {/* Improved background blobs with more vibrant colors and animations */}
          <motion.div style={{ y: y1 }} className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></motion.div>
          <motion.div style={{ y: y2 }} className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></motion.div>
          <motion.div style={{ y: y1 }} className="absolute bottom-1/4 right-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></motion.div>
          
          {/* Added new shimmering gradient elements */}
          <div className="absolute top-1/3 left-1/4 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70 animate-gradient"></div>
          <div className="absolute top-2/3 right-1/4 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-70 animate-gradient animation-delay-2000"></div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        {/* Text content */}
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex-1 text-center md:text-left text-white"
        >
          {/* Animated gradient bar that pulses/shimmers */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.8 }}
            className="h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-full mb-8 hidden md:block"
          >
            <motion.div 
              animate={{ 
                x: ['0%', '100%', '0%'],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="w-1/3 h-full bg-white/30 rounded-full blur-sm"
            />
          </motion.div>
          
          <motion.h1 
            variants={textVariant(0.1)}
            className="heading-xl mb-4 relative"
          >
            <span className="block">Move Anything.</span>
            <span className="block">Anywhere.</span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% auto'
              }}
            >
              Instantly.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={textVariant(0.2)}
            className="mt-4 text-xl text-gray-300 max-w-lg"
          >
            Connect with reliable delivery partners through our next-generation logistics platform.
          </motion.p>
          
          <motion.div 
            variants={fadeIn('up', 0.3)}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link 
                href="/register" 
                className="btn-primary relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                  initial={false}
                />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link 
                href="/how-it-works" 
                className="btn-secondary border-white text-white bg-transparent hover:bg-white/10 flex items-center gap-2"
              >
                <span>Learn More</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3L7.295 3.705L10.085 6.5H3V7.5H10.085L7.295 10.295L8 11L12 7L8 3Z" fill="currentColor"/>
                  </svg>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('up', 0.4)}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6"
          >
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full ring-2 ring-white bg-gray-200 flex items-center justify-center text-gray-800 font-bold shadow-lg">J</div>
              <div className="w-10 h-10 rounded-full ring-2 ring-white bg-gray-300 flex items-center justify-center text-gray-800 font-bold shadow-lg">K</div>
              <div className="w-10 h-10 rounded-full ring-2 ring-white bg-gray-400 flex items-center justify-center text-white font-bold shadow-lg">L</div>
              <div className="w-10 h-10 rounded-full ring-2 ring-white bg-blue-500 flex items-center justify-center text-white font-bold shadow-lg">+</div>
            </div>
            <p className="text-sm text-gray-300">
              Trusted by <span className="font-bold">10,000+</span> customers & partners
            </p>
          </motion.div>
        </motion.div>
        
        {/* Delivery-themed illustration/animation */}
        <motion.div 
          variants={planetVariants('right')}
          initial="hidden"
          whileInView="show"
          className="flex-1 mt-10 md:mt-0"
        >
          <div className="relative w-full max-w-md mx-auto h-[400px] flex items-center justify-center">
            {/* Animated tracking map with delivery route */}
            <motion.div 
              style={{ opacity }}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full h-80 bg-indigo-900/50 rounded-2xl flex items-center justify-center p-4 shadow-strong glass overflow-hidden">
                {/* Map background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/20 to-purple-900/20 overflow-hidden">
                  {/* Simulated map grid */}
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border-[0.5px] border-white/5" />
                    ))}
                  </div>
                  
                  {/* Animated tracking route */}
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path 
                        d="M20,80 Q30,70 40,75 T60,60 T80,30" 
                        stroke="url(#route-gradient)" 
                        strokeWidth="2"
                        strokeDasharray="0 1"
                        strokeLinecap="round"
                        fill="transparent"
                      />
                      <defs>
                        <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#60a5fa" />
                          <stop offset="100%" stopColor="#c084fc" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
                
                {/* Origin location pin */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="relative">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-blue-500" />
                  </div>
                </motion.div>
                
                {/* Destination location pin */}
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <div className="relative">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-purple-500" />
                  </div>
                </motion.div>
                
                {/* Moving delivery truck */}
                <motion.div
                  className="absolute z-20"
                  animate={{
                    top: ['80%', '60%', '30%'],
                    left: ['20%', '40%', '80%'],
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'loop',
                    times: [0, 0.5, 1]
                  }}
                >
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <TruckIcon size={24} className="text-blue-600" />
                  </div>
                </motion.div>
                
                {/* Animated elements */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 right-10"
                >
                  <PackageIcon size={24} className="text-indigo-300" />
                </motion.div>
                
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-10 left-10"
                >
                  <CheckCircleIcon size={24} className="text-green-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator with more prominent animation */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 flex flex-col items-center z-20"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="group flex flex-col items-center cursor-pointer"
          onClick={() => {
            // Smooth scroll to next section
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
              featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="text-white mb-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <p className="text-white text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Explore</p>
        </motion.div>
      </motion.div>
    </section>
  );
} 