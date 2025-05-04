'use client';

import { useState } from 'react';
import { MapPin, Truck, Package, Clock, ArrowRight, Calendar, DollarSign } from 'lucide-react';

// Mock vehicle types
const vehicleTypes = [
  { 
    id: 'car',
    name: 'Car',
    description: 'For small packages', 
    capacity: 'Up to 20kg',
    basePrice: 9.99,
    icon: <Package className="h-6 w-6" />,
  },
  { 
    id: 'bike',
    name: 'Bike',
    description: 'Fast city delivery', 
    capacity: 'Up to 5kg',
    basePrice: 4.99,
    icon: <Clock className="h-6 w-6" />,
  },
  { 
    id: 'van',
    name: 'Van',
    description: 'For larger items', 
    capacity: 'Up to 200kg',
    basePrice: 19.99,
    icon: <Truck className="h-6 w-6" />,
  },
];

export default function BookDelivery() {
  const [selectedVehicle, setSelectedVehicle] = useState('car');
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  
  // Calculate estimated price based on selected vehicle
  const selectedVehicleInfo = vehicleTypes.find(v => v.id === selectedVehicle);
  const basePrice = selectedVehicleInfo?.basePrice || 0;
  const estimatedPrice = basePrice + 2.99; // Add delivery fee
  
  // Mock function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      // In a real app, this would send the data to the server
      alert('Booking submitted!');
    }
  };
  
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Book a Delivery</h1>
      
      {/* Steps indicator */}
      <div className="mt-6">
        <div className="flex items-center">
          <div className={`flex items-center justify-center h-12 w-12 rounded-full ${currentStep === 1 ? 'bg-blue-600' : 'bg-green-500'} text-white`}>
            <MapPin className="h-6 w-6" />
          </div>
          <div className={`flex-1 h-1 mx-2 ${currentStep === 1 ? 'bg-gray-300' : 'bg-green-500'}`}></div>
          <div className={`flex items-center justify-center h-12 w-12 rounded-full ${currentStep === 1 ? 'bg-gray-300' : 'bg-blue-600'} text-white`}>
            <Truck className="h-6 w-6" />
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm font-medium text-gray-700">Location Details</span>
          <span className="text-sm font-medium text-gray-700">Delivery Options</span>
        </div>
      </div>
      
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 ? (
            /* Step 1: Location Details */
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Pickup and Delivery Location</h2>
              
              {/* Map placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-gray-500">Map will be displayed here</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">Pickup Address</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      name="pickup"
                      id="pickup"
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter pickup address"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700">Dropoff Address</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      name="dropoff"
                      id="dropoff"
                      value={dropoffAddress}
                      onChange={(e) => setDropoffAddress(e.target.value)}
                      className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter dropoff address"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Step 2: Delivery Options */
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Delivery Options</h2>
              
              <div className="space-y-6">
                {/* Vehicle selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Vehicle Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {vehicleTypes.map((vehicle) => (
                      <div
                        key={vehicle.id}
                        className={`relative rounded-lg border px-6 py-4 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 cursor-pointer ${
                          selectedVehicle === vehicle.id ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-300'
                        }`}
                        onClick={() => setSelectedVehicle(vehicle.id)}
                      >
                        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                          selectedVehicle === vehicle.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {vehicle.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{vehicle.name}</p>
                          <p className="text-sm text-gray-500">{vehicle.description}</p>
                          <p className="text-sm font-semibold text-gray-900 mt-1">${vehicle.basePrice.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Additional options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="delivery-time" className="block text-sm font-medium text-gray-700">Delivery Time</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <select
                        id="delivery-time"
                        name="delivery-time"
                        className="block w-full pl-10 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="asap">As soon as possible</option>
                        <option value="1hr">Within 1 hour</option>
                        <option value="2hr">Within 2 hours</option>
                        <option value="4hr">Within 4 hours</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="package-size" className="block text-sm font-medium text-gray-700">Package Size</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Package className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <select
                        id="package-size"
                        name="package-size"
                        className="block w-full pl-10 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="small">Small (up to 5kg)</option>
                        <option value="medium">Medium (up to 20kg)</option>
                        <option value="large">Large (up to 50kg)</option>
                        <option value="xlarge">Extra Large (up to 100kg)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Order summary */}
                <div className="mt-8 bg-gray-50 p-4 rounded-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Base Price</span>
                      <span className="text-gray-900">${basePrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Delivery Fee</span>
                      <span className="text-gray-900">$2.99</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between font-medium">
                        <span className="text-gray-900">Total</span>
                        <span className="text-blue-600">${estimatedPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Complete Booking
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 