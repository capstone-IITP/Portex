'use client';

import { Weight, Package, Ban, Archive } from 'lucide-react';
import { useState, useEffect } from 'react';

type ReminderItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const reminderItems: ReminderItem[] = [
  {
    icon: Weight,
    title: 'Package Weight',
    description: 'Limit 50kg',
  },
  {
    icon: Package,
    title: 'Packaging',
    description: 'Users must pack items; no packaging service provided',
  },
  {
    icon: Ban,
    title: 'Restricted Items',
    description: 'No illegal/prohibited goods',
  },
  {
    icon: Archive,
    title: 'Multiple Packages',
    description: 'Only one package per order allowed',
  },
];

export default function BookingSidebar() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsLoaded(true);
    
    // Auto-trigger hover effect on each item sequentially
    const interval = setInterval(() => {
      setActiveItem((prev) => {
        if (prev === null || prev >= reminderItems.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
      {/* Background gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/0 via-blue-600 to-blue-400/0"></div>
      
      {/* Decorative floating circles */}
      <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-blue-100/40 blur-md"></div>
      <div className="absolute top-1/3 -left-4 w-12 h-12 rounded-full bg-purple-100/40 blur-md"></div>
      
      <h2 className={`text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100/80 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        Things to Keep in Mind
      </h2>
      
      <div className="space-y-4">
        {reminderItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex relative transition-all duration-500 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            } ${activeItem === index ? 'scale-105' : ''}`}
            style={{ transitionDelay: `${150 + index * 100}ms` }}
            onMouseEnter={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <div className={`mr-3 flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${
              activeItem === index 
                ? 'bg-blue-100 text-blue-700 shadow-md' 
                : 'bg-gray-50 text-blue-600'
            }`}>
              <item.icon className={`h-5 w-5 transition-all duration-300 transform ${
                activeItem === index ? 'scale-110' : ''
              }`} />
            </div>
            <div>
              <h3 className={`text-sm font-medium transition-colors duration-300 ${
                activeItem === index ? 'text-blue-700' : 'text-gray-900'
              }`}>
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 transition-colors duration-300">
                {item.description}
              </p>
            </div>
            
            {/* Highlight effect when active */}
            {activeItem === index && (
              <div className="absolute inset-0 border border-blue-200 rounded-md opacity-30 pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>

      {/* Support section that fades in last */}
      <div className={`mt-6 pt-4 border-t border-gray-100 transition-all duration-700 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`} style={{ transitionDelay: '600ms' }}>
        <p className="text-sm text-gray-600 flex items-center">
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </span>
          Need help with your booking? Contact our support team at 
          <a href="mailto:support@portex.com" className="text-blue-600 hover:text-blue-800 transition-colors ml-1">
            support@portex.com
          </a>
        </p>
      </div>
    </div>
  );
} 