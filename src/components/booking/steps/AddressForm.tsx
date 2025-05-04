'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { MapPin } from 'lucide-react';

type FormData = {
  pickupAddress: string;
  deliveryAddress: string;
};

export default function AddressForm() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      pickupAddress: '',
      deliveryAddress: '',
    },
  });

  useEffect(() => {
    // Trigger animation after component mount
    setIsLoaded(true);
  }, []);

  const onSubmit = (data: FormData) => {
    // In a real app, you would store this data in state management or server
    console.log('Address form data:', data);
    
    // Navigate to the next step
    router.push('/booking/package');
  };

  return (
    <div className="p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/0 via-blue-600 to-blue-400/0"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-200/10 blur-xl -z-10"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-purple-200/10 blur-xl -z-10"></div>
      
      <h2 className={`text-xl font-semibold text-gray-900 mb-6 border-b pb-2 border-blue-200/50 transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        Enter Address Details
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className={`transform transition-all duration-700 delay-150 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <label htmlFor="pickupAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Address
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
            </div>
            <input
              id="pickupAddress"
              type="text"
              className="block w-full pl-10 pr-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-md group-hover:border-blue-300"
              placeholder="Enter pickup address"
              {...register('pickupAddress', { required: 'Pickup address is required' })}
            />
            <div className="absolute inset-0 border border-blue-200 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 shadow-lg"></div>
          </div>
          {errors.pickupAddress && (
            <p className="mt-1 text-sm text-red-600 animate-shake">{errors.pickupAddress.message}</p>
          )}
        </div>
        
        <div className={`transform transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Delivery Address
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
            </div>
            <input
              id="deliveryAddress"
              type="text"
              className="block w-full pl-10 pr-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-md group-hover:border-blue-300"
              placeholder="Enter delivery address"
              {...register('deliveryAddress', { required: 'Delivery address is required' })}
            />
            <div className="absolute inset-0 border border-blue-200 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 shadow-lg"></div>
          </div>
          {errors.deliveryAddress && (
            <p className="mt-1 text-sm text-red-600 animate-shake">{errors.deliveryAddress.message}</p>
          )}
        </div>
        
        <div className={`flex justify-end transform transition-all duration-700 delay-450 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button
            type="submit"
            className="relative inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <span>Next</span>
            <span className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent to-blue-500/20 skew-x-[30deg] transform -translate-x-20 opacity-30 group-hover:translate-x-0 transition-transform"></span>
          </button>
        </div>
      </form>
      
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
} 