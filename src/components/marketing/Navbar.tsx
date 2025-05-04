'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Package, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { navVariants } from '@/lib/utils/motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md text-gray-900'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-all">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                PORTEX
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <div className="relative group">
              <button className={`flex items-center space-x-1 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-gray-200 hover:text-white'
              } transition-colors duration-300 font-medium focus:outline-none`}>
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                <div className="py-1">
                  <Link href="/solutions/small-business" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Small Business</Link>
                  <Link href="/solutions/enterprise" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Enterprise</Link>
                  <Link href="/solutions/ecommerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">E-Commerce</Link>
                </div>
              </div>
            </div>
            <Link 
              href="/how-it-works" 
              className={`${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-gray-200 hover:text-white'
              } transition-colors duration-300 font-medium`}
            >
              How It Works
            </Link>
            <Link 
              href="/pricing" 
              className={`${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-gray-200 hover:text-white'
              } transition-colors duration-300 font-medium`}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className={`${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-gray-200 hover:text-white'
              } transition-colors duration-300 font-medium`}
            >
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/auth/login" 
              className={`${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-gray-200 hover:text-white'
              } transition-colors duration-300 font-medium`}
            >
              Log in
            </Link>
            <Link 
              href="/auth/register" 
              className="btn-primary py-2 px-4 text-sm"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-800/20 inline-flex items-center justify-center p-2 rounded-md text-current hover:bg-gray-700/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-blue text-white glass-dark"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2 rounded-md text-base font-medium">
              <span className="block mb-1 text-sm text-blue-200">Solutions</span>
              <div className="pl-2 border-l border-blue-400 space-y-1 text-sm">
                <Link href="/solutions/small-business" className="block py-1 hover:text-blue-200">Small Business</Link>
                <Link href="/solutions/enterprise" className="block py-1 hover:text-blue-200">Enterprise</Link>
                <Link href="/solutions/ecommerce" className="block py-1 hover:text-blue-200">E-Commerce</Link>
              </div>
            </div>
            <Link 
              href="/how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700/40 hover:text-white"
            >
              How It Works
            </Link>
            <Link 
              href="/pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700/40 hover:text-white"
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700/40 hover:text-white"
            >
              About
            </Link>
            <div className="pt-4 pb-3 border-t border-blue-700">
              <Link 
                href="/auth/login" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700/40 hover:text-white"
              >
                Log in
              </Link>
              <Link 
                href="/auth/register" 
                className="block px-3 py-2 mt-2 rounded-md text-base font-medium text-white bg-white/20 hover:bg-white/30 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
} 