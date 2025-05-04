'use client';

import { useRouter } from 'next/navigation';
import { useForm, useWatch } from 'react-hook-form';
import { Package, Upload } from 'lucide-react';
import { useEffect, useState } from 'react';

type FormData = {
  packageType: string;
  otherPackageType: string;
  weight: string;
  length: string;
  width: string;
  height: string;
  isFragile: boolean;
  description: string;
};

const packageTypes = [
  { id: 'document', name: 'Document' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'food', name: 'Food' },
  { id: 'fragile', name: 'Fragile Items' },
  { id: 'other', name: 'Other' },
];

export default function PackageForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      packageType: '',
      otherPackageType: '',
      weight: '',
      length: '',
      width: '',
      height: '',
      isFragile: false,
      description: '',
    },
  });

  const selectedPackageType = useWatch({
    control,
    name: 'packageType',
  });

  const showOtherField = selectedPackageType === 'other';

  const onSubmit = (data: FormData) => {
    // If "Other" is selected, use the otherPackageType value
    if (data.packageType === 'other') {
      data.packageType = data.otherPackageType || 'Other';
    }
    
    // In a real app, you would store this data in state management or server
    console.log('Package form data:', data);
    
    // Navigate to the next step
    router.push('/booking/schedule');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Package Details</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="packageType" className="block text-sm font-medium text-gray-700 mb-1">
            Package Type
          </label>
          <select
            id="packageType"
            className="block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            {...register('packageType', { required: 'Package type is required' })}
          >
            <option value="">Select package type</option>
            {packageTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          {errors.packageType && (
            <p className="mt-1 text-sm text-red-600">{errors.packageType.message}</p>
          )}
        </div>
        
        {/* Show "Other" text field if "Other" is selected */}
        {showOtherField && (
          <div className="mt-4">
            <label htmlFor="otherPackageType" className="block text-sm font-medium text-gray-700 mb-1">
              Please specify package type
            </label>
            <input
              id="otherPackageType"
              type="text"
              className="block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter package type"
              {...register('otherPackageType', { 
                required: showOtherField ? 'Please specify the package type' : false 
              })}
            />
            {errors.otherPackageType && (
              <p className="mt-1 text-sm text-red-600">{errors.otherPackageType.message}</p>
            )}
          </div>
        )}
        
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
            Approximate Weight (kg)
          </label>
          <input
            id="weight"
            type="number"
            min="0"
            max="50"
            step="0.1"
            className="block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter weight in kg"
            {...register('weight', { 
              required: 'Weight is required',
              max: { value: 50, message: 'Weight cannot exceed 50kg' }
            })}
          />
          {errors.weight && (
            <p className="mt-1 text-sm text-red-600">{errors.weight.message}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">
              Length (cm)
            </label>
            <input
              id="length"
              type="number"
              min="0"
              className="block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Length"
              {...register('length')}
            />
          </div>
          
          <div>
            <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
              Width (cm)
            </label>
            <input
              id="width"
              type="number"
              min="0"
              className="block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Width"
              {...register('width')}
            />
          </div>
          
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
              Height (cm)
            </label>
            <input
              id="height"
              type="number"
              min="0"
              className="block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Height"
              {...register('height')}
            />
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="isFragile"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              {...register('isFragile')}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="isFragile" className="font-medium text-gray-700">
              Fragile Item
            </label>
            <p className="text-gray-500">Check this if your package contains fragile items</p>
          </div>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Item Description
          </label>
          <textarea
            id="description"
            rows={3}
            className="block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe your package contents"
            {...register('description', { required: 'Description is required' })}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Item Photo (optional)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => router.push('/booking/address')}
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