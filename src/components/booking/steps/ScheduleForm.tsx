'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Rocket, AlarmClock } from 'lucide-react';

type FormData = {
  deliveryType: 'instant' | 'scheduled';
  deliveryDate: string;
  deliveryTime: string;
  notes: string;
};

export default function ScheduleForm() {
  const router = useRouter();
  const [deliveryType, setDeliveryType] = useState<'instant' | 'scheduled'>('instant');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      deliveryType: 'instant',
      deliveryDate: '',
      deliveryTime: '',
      notes: '',
    },
  });

  // Watch for delivery type changes
  const watchDeliveryType = watch('deliveryType');

  const onSubmit = (data: FormData) => {
    // In a real app, you would store this data in state management or server
    console.log('Schedule form data:', data);
    
    // Navigate to the next step
    router.push('/booking/summary');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Schedule Delivery</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Delivery Type
          </label>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="instant"
                  value="instant"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  {...register('deliveryType')}
                  defaultChecked
                  onChange={() => setDeliveryType('instant')}
                />
                <div className="flex flex-col">
                  <span className="block text-sm font-medium text-gray-900">Instant Delivery</span>
                  <span className="mt-1 flex items-center text-sm text-gray-500">
                    <Rocket className="mr-1 h-4 w-4 text-gray-400" />
                    As soon as possible
                  </span>
                </div>
              </label>
            </div>
            
            <div className="relative rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="scheduled"
                  value="scheduled"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  {...register('deliveryType')}
                  onChange={() => setDeliveryType('scheduled')}
                />
                <div className="flex flex-col">
                  <span className="block text-sm font-medium text-gray-900">Scheduled Delivery</span>
                  <span className="mt-1 flex items-center text-sm text-gray-500">
                    <AlarmClock className="mr-1 h-4 w-4 text-gray-400" />
                    Choose date & time
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
        
        {deliveryType === 'scheduled' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="deliveryDate"
                  type="date"
                  className="block w-full pl-10 pr-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  {...register('deliveryDate', { 
                    required: watchDeliveryType === 'scheduled' ? 'Delivery date is required' : false 
                  })}
                />
              </div>
              {errors.deliveryDate && (
                <p className="mt-1 text-sm text-red-600">{errors.deliveryDate.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Time
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="deliveryTime"
                  type="time"
                  className="block w-full pl-10 pr-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  {...register('deliveryTime', { 
                    required: watchDeliveryType === 'scheduled' ? 'Delivery time is required' : false 
                  })}
                />
              </div>
              {errors.deliveryTime && (
                <p className="mt-1 text-sm text-red-600">{errors.deliveryTime.message}</p>
              )}
            </div>
          </div>
        )}
        
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Notes for Driver (optional)
          </label>
          <textarea
            id="notes"
            rows={3}
            className="block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Any special instructions for the driver"
            {...register('notes')}
          />
        </div>
        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => router.push('/booking/package')}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
} 