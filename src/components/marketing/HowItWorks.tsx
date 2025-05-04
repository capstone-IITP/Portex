'use client';

import { motion, useInView } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '@/lib/utils/motion';
import { BookOpen, UserCheck, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  {
    title: 'Book Your Delivery',
    description: 'Enter pickup and drop-off locations, choose vehicle type, and get an instant quote.',
    icon: BookOpen,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    gradient: 'from-blue-500 to-indigo-600',
    shadowColor: 'shadow-blue-500/15',
    borderColor: 'border-blue-200',
    number: '1',
  },
  {
    title: 'Match with a Driver',
    description: 'Our system matches you with the closest available verified driver.',
    icon: UserCheck,
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    gradient: 'from-indigo-500 to-purple-600',
    shadowColor: 'shadow-indigo-500/15',
    borderColor: 'border-indigo-200',
    number: '2',
  },
  {
    title: 'Track in Real-Time',
    description: 'Follow your delivery on the map with live updates every step of the way.',
    icon: MapPin,
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-600',
    shadowColor: 'shadow-purple-500/15',
    borderColor: 'border-purple-200',
    number: '3',
  },
  {
    title: 'Delivery Confirmation',
    description: 'Receive photo proof of delivery and rate your experience.',
    icon: CheckCircle,
    color: 'bg-pink-50',
    iconColor: 'text-pink-600',
    gradient: 'from-pink-500 to-rose-600',
    shadowColor: 'shadow-pink-500/15',
    borderColor: 'border-pink-200',
    number: '4',
  },
];

// Animation variants for steps
const stepCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 * custom,
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96], 
    }
  }),
  hover: { 
    y: -10, 
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  }
};

// Animation for connecting lines
const lineVariants = {
  hidden: { width: '0%', opacity: 0 },
  visible: {
    width: '100%',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.5
    }
  },
};

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] to-[#F5F5F5]"></div>
      
      {/* Background decorative elements with enhanced blur effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        />
        
        {/* Subtle animated patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </motion.div>
      
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
            How It Works
          </motion.p>
          <motion.h2 
            variants={textVariant(0.2)}
            className="heading-lg mt-2 text-gray-900"
          >
            Simple, fast, and reliable delivery in 4 steps
          </motion.h2>
          <motion.p 
            variants={textVariant(0.3)}
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
          >
            Our streamlined process makes it easy to get your items delivered quickly and securely.
          </motion.p>
        </motion.div>

        <div className="relative mb-24">
          {/* Hidden animated connecting line on medium and up screens */}
          <div className="hidden md:block">
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
              <motion.div
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="h-1 bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 rounded-full relative overflow-hidden"
              >
                {/* Animated pulse effect on the line */}
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Responsive card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                custom={index}
                variants={stepCardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                className="relative"
              >
                <motion.div 
                  className={`h-full flex flex-col items-center p-8 rounded-xl ${step.color} border ${step.borderColor} ${step.shadowColor} shadow-lg backdrop-blur-sm transition-all duration-300`}
                >
                  {/* Animated gradient border effect */}
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-transparent via-blue-200/30 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500" />
                  
                  {/* Step number with enhanced visual */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.8, duration: 0.4, type: "spring" }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10"
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* Icon with increased spacing and enhanced hover effect */}
                  <div className="mb-8">
                    <motion.div 
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { type: 'spring', stiffness: 300, damping: 8 } 
                      }}
                      className={`relative z-10 w-20 h-20 rounded-full border-2 ${step.borderColor} flex items-center justify-center group overflow-hidden shadow-inner`}
                    >
                      {/* Animated gradient background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        whileHover={{ opacity: 1 }}
                      />
                      
                      {/* Animated icon */}
                      <motion.div
                        animate={isInView ? { 
                          scale: [0.8, 1.2, 1],
                          rotate: [0, -10, 0],
                          opacity: [0, 1, 1]
                        } : {}}
                        transition={{ 
                          duration: 1,
                          delay: index * 0.2 + 0.4,
                          ease: "easeOut"
                        }}
                        className="relative z-10"
                      >
                        <step.icon className={`${step.iconColor} group-hover:text-white relative z-10 w-8 h-8 transition-all duration-300 group-hover:scale-110`} />
                      </motion.div>
                      
                      {/* Particle animations */}
                      <motion.div 
                        className="absolute top-0 right-0 w-2 h-2 rounded-full bg-white/50"
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
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Content with improved typography */}
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-xl font-bold text-gray-900 mb-3"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    className="text-center text-gray-600"
                  >
                    {step.description}
                  </motion.p>
                  
                  {/* Subtle directional arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      >
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Demo video or image section with enhanced styling */}
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-24 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            className="max-w-3xl mx-auto glass p-3 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-indigo-900/50"></div>
              
              {/* Animated play button */}
              <motion.div 
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.5)'
                }}
                className="relative w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={{
                    scale: [1, 1.5, 1.8],
                    opacity: [0.8, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </motion.div>
              <span className="sr-only">Watch Demo</span>
            </motion.div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.5 }}
            className="mt-5 text-gray-500 font-medium"
          >
            Watch how it works in action
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}