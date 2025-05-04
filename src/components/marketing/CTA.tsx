import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '@/lib/utils/motion';
import { Truck, Users } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="relative z-10"
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div variants={textVariant(0.1)}>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to transform</span>
                <span className="block">your logistics experience?</span>
              </h2>
              <p className="mt-4 text-lg text-blue-100 max-w-md">
                Join thousands of customers and drivers already using Portex to simplify their logistics operations.
              </p>
              
              <motion.div 
                variants={fadeIn('up', 0.3)}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link 
                  href="/register" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
                >
                  Sign Up Now
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800"
                >
                  Contact Sales
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeIn('left', 0.4)} className="mt-10 lg:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="bg-blue-800 rounded-xl p-6 text-white"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">For Customers</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Real-time package tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Transparent pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Verified delivery partners</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>24/7 support</span>
                    </li>
                  </ul>
                  <Link 
                    href="/register?type=customer" 
                    className="mt-6 inline-block px-4 py-2 bg-blue-600 rounded-lg text-white text-sm font-medium hover:bg-blue-500"
                  >
                    Sign Up as Customer
                  </Link>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="bg-blue-800 rounded-xl p-6 text-white"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">For Drivers</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Flexible schedule</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Competitive earnings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Weekly payouts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Route optimization</span>
                    </li>
                  </ul>
                  <Link 
                    href="/register?type=driver" 
                    className="mt-6 inline-block px-4 py-2 bg-blue-600 rounded-lg text-white text-sm font-medium hover:bg-blue-500"
                  >
                    Sign Up as Driver
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/4 lg:translate-x-1/4 xl:-translate-y-1/2 opacity-20" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern-squares)" />
        </svg>
      </div>
    </section>
  );
} 