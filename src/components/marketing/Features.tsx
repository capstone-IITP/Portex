'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { MapPinned, Clock, ShieldCheck, Truck, BarChart4, Headset } from 'lucide-react';
import { fadeIn, staggerContainer, textVariant } from '@/lib/utils/motion';
import { useRef } from 'react';

const features = [
  {
    name: 'Real-time Tracking',
    description: 'Track your deliveries with live GPS updates every step of the way.',
    icon: MapPinned,
    color: 'bg-blue-100 text-blue-600',
    gradient: 'from-blue-500 to-indigo-500',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    shadowColor: 'shadow-blue-500/10',
  },
  {
    name: 'Fast Delivery',
    description: 'Quick pickup and express delivery options to meet your timeline.',
    icon: Clock,
    color: 'bg-indigo-100 text-indigo-600',
    gradient: 'from-indigo-500 to-purple-500',
    lightColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    shadowColor: 'shadow-indigo-500/10',
  },
  {
    name: 'Secure Payments',
    description: 'End-to-end encrypted payment processing for worry-free transactions.',
    icon: ShieldCheck,
    color: 'bg-green-100 text-green-600',
    gradient: 'from-green-500 to-emerald-500',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    shadowColor: 'shadow-green-500/10',
  },
  {
    name: 'Verified Partners',
    description: 'All drivers undergo thorough background checks and training.',
    icon: Truck,
    color: 'bg-yellow-100 text-yellow-600',
    gradient: 'from-yellow-500 to-amber-500',
    lightColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    shadowColor: 'shadow-yellow-500/10',
  },
  {
    name: 'Business Analytics',
    description: 'Comprehensive reporting tools for enterprise logistics management.',
    icon: BarChart4,
    color: 'bg-purple-100 text-purple-600',
    gradient: 'from-purple-500 to-fuchsia-500',
    lightColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    shadowColor: 'shadow-purple-500/10',
  },
  {
    name: '24/7 Support',
    description: 'Our customer support team is available around the clock to assist you.',
    icon: Headset,
    color: 'bg-red-100 text-red-600',
    gradient: 'from-red-500 to-pink-500',
    lightColor: 'bg-red-50',
    borderColor: 'border-red-200',
    shadowColor: 'shadow-red-500/10',
  },
];

// Animation variants for feature cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96], // Custom easing function for smoother motion
    }
  }),
};

// Animation for the floating shapes
const floatingShapesVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: 0.7, 
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F5F5F5]"
    >
      {/* Background decoration elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Decorative shapes */}
          <motion.div 
            variants={floatingShapesVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="absolute top-20 right-[10%] w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <motion.div 
            variants={floatingShapesVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.3 }}
            className="absolute top-40 left-[5%] w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <motion.div 
            variants={floatingShapesVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.6 }}
            className="absolute bottom-40 right-[20%] w-60 h-60 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="text-center mb-20"
        >
          {/* Animated gradient line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : { width: 0 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-full mx-auto mb-6"
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
          
          <motion.p 
            variants={textVariant(0.1)}
            className="text-base font-semibold text-blue-600 uppercase tracking-wide"
          >
            Features
          </motion.p>
          <motion.h2 
            variants={textVariant(0.2)}
            className="heading-lg mt-2 text-gray-900"
          >
            Everything you need for seamless logistics
          </motion.h2>
          <motion.p 
            variants={textVariant(0.3)}
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
          >
            Our platform connects you with reliable delivery partners while providing tools to track, manage, and optimize your shipments.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              className={`relative overflow-hidden p-8 rounded-2xl ${feature.lightColor} border ${feature.borderColor} ${feature.shadowColor} shadow-lg transition-all duration-300 backdrop-blur-sm`}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-transparent via-blue-200/30 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500" />
              
              {/* Top right decorative element */}
              <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-white/40 to-white/10 blur-md" />
              
              {/* Bottom left decorative element */}
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-sm" />
              
              {/* Interactive feature icon with animated background */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="relative z-10 mb-6"
              >
                <div className={`relative ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden shadow-md group`}>
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    whileHover={{ opacity: 1 }}
                  />
                  <feature.icon className="w-8 h-8 relative z-10 text-current group-hover:text-white transition-colors duration-300" />
                  
                  {/* Animated particles around the icon */}
                  <motion.div 
                    className="absolute top-0 right-0 w-2 h-2 rounded-full bg-white"
                    animate={{
                      opacity: [0, 1, 0],
                      y: [0, -10, -5],
                      x: [0, 5, 10],
                      scale: [1, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'loop',
                      delay: index * 0.2,
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Feature content with slightly enhanced typography */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{feature.name}</h3>
              <p className="text-gray-600 relative z-10">{feature.description}</p>
              
              {/* Learn more link with animated arrow */}
              <motion.div 
                className="mt-6 inline-flex items-center text-blue-600 font-medium cursor-pointer relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span>Learn more</span>
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action button */}
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link 
              href="/features" 
              className="btn-primary inline-flex items-center relative overflow-hidden group shadow-lg shadow-blue-500/25"
            >
              <span className="relative z-10">Explore All Features</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                initial={false}
              />
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className="ml-2 relative z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 