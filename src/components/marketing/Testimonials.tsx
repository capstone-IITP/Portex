'use client';

import { motion, useInView } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '@/lib/utils/motion';
import { Star, Quote } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    content: 'Portex has completely revolutionized our logistics operations. The real-time tracking and transparent pricing save us countless hours managing deliveries.',
    name: 'Sarah Johnson',
    title: 'Operations Manager, TechCorp Inc.',
    initials: 'SJ',
    bgColor: 'bg-blue-600',
    bgGradient: 'from-blue-500 to-indigo-600',
    rating: 5,
    image: '/avatars/avatar-1.jpg',
  },
  {
    id: 2,
    content: 'As a driver, the Portex platform has been a game-changer. The app is intuitive, payments are prompt, and the support team is always responsive.',
    name: 'Marcus Chen',
    title: 'Delivery Partner, 4+ years',
    initials: 'MC',
    bgColor: 'bg-purple-600',
    bgGradient: 'from-purple-500 to-pink-600',
    rating: 5,
    image: '/avatars/avatar-2.jpg',
  },
  {
    id: 3,
    content: 'The ease of scheduling deliveries and the ability to track them in real-time has made my e-commerce business so much more efficient. Highly recommend!',
    name: 'Emma Rodriguez',
    title: 'Founder, HandmadeHaven',
    initials: 'ER',
    bgColor: 'bg-indigo-600',
    bgGradient: 'from-indigo-500 to-purple-600',
    rating: 4,
    image: '/avatars/avatar-3.jpg',
  },
];

// Animation variants for staggered items
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9,
    boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

// Floating quote animation
const quoteVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: 0.15, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F5F5F5]"
    >
      {/* Background decoration elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Large floating quotes in background */}
          <motion.div
            variants={quoteVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="absolute top-20 left-[15%] opacity-10"
          >
            <Quote size={120} className="text-blue-200 opacity-40" />
          </motion.div>
          
          <motion.div
            variants={quoteVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.3 }}
            className="absolute bottom-40 right-[10%] opacity-10"
          >
            <Quote size={100} className="text-indigo-200 opacity-40" />
          </motion.div>
          
          {/* Subtle gradient shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100/20 to-indigo-100/20 blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-100/20 to-pink-100/20 blur-3xl"
          />
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
            className="h-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 rounded-full mx-auto mb-6"
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
            className="text-base font-semibold text-purple-600 uppercase tracking-wide"
          >
            Testimonials
          </motion.p>
          <motion.h2 
            variants={textVariant(0.2)}
            className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
          >
            What our users are saying
          </motion.h2>
          <motion.p 
            variants={textVariant(0.3)}
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
          >
            Don't just take our word for it - hear from some of our satisfied customers and delivery partners.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              {/* Gradient top border */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${testimonial.bgGradient}`}></div>
              
              <div className="p-6 relative">
                {/* Small decorative quote icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote size={24} />
                </div>
                
                {/* Rating stars with animation */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i + 0.5 }}
                    >
                      <Star 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Testimonial content with quotation marks */}
                <div className="relative">
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                </div>
                
                {/* User info with improved layout */}
                <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                  <div className="flex-shrink-0 mr-4">
                    <div className={`relative w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-bold shadow-md overflow-hidden`}>
                      {testimonial.initials}
                      
                      {/* Shimmering effect on avatar */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 1.5,
                          delay: index * 0.3
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced rating showcase */}
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-lg"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl font-bold mr-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            >
              4.9
            </motion.div>
            
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </div>
            
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="ml-3 text-gray-700 font-medium"
            >
              from <span className="font-bold">10,000+</span> reviews
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 