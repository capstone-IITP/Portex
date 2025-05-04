'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Package, Calendar, CreditCard, Tag, Check } from 'lucide-react';

// Mock data - in a real app this would come from state management or server
const bookingData = {
  pickup: '123 Main St, New York, NY 10001',
  delivery: '456 Park Ave, New York, NY 10022',
  packageType: 'Electronics',
  weight: '5.2 kg',
  dimensions: '30cm x 20cm x 15cm',
  isFragile: true,
  deliveryType: 'Scheduled',
  deliveryDate: '2023-09-15',
  deliveryTime: '14:00',
  fare: '$24.99',
};

export default function SummaryDetails() {
  const router = useRouter();
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('credit_card');
  const [promoCode, setPromoCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirmBooking = () => {
    // Show processing state
    setIsProcessing(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Navigate to confirmation page
      router.push('/booking/confirm');
    }, 1000);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Booking Summary</h2>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Address Details</h3>
          <div className="space-y-3">
            <div className="flex">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm font-medium text-gray-700">Pickup Address</p>
                <p className="text-sm text-gray-500">{bookingData.pickup}</p>
              </div>
            </div>
            <div className="flex">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm font-medium text-gray-700">Delivery Address</p>
                <p className="text-sm text-gray-500">{bookingData.delivery}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Package Details</h3>
          <div className="space-y-3">
            <div className="flex">
              <Package className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm font-medium text-gray-700">Package Type</p>
                <p className="text-sm text-gray-500">{bookingData.packageType}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Package className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm font-medium text-gray-700">Package Specifications</p>
                <p className="text-sm text-gray-500">Weight: {bookingData.weight}</p>
                <p className="text-sm text-gray-500">Dimensions: {bookingData.dimensions}</p>
                <p className="text-sm text-gray-500">
                  {bookingData.isFragile ? 'Fragile: Yes' : 'Fragile: No'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Delivery Schedule</h3>
          <div className="flex">
            <Calendar className="h-5 w-5 text-gray-400 mr-2" />
            <div>
              <p className="text-sm font-medium text-gray-700">{bookingData.deliveryType}</p>
              <p className="text-sm text-gray-500">
                {bookingData.deliveryType === 'Instant' 
                  ? 'As soon as possible' 
                  : `${bookingData.deliveryDate} at ${bookingData.deliveryTime}`}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Fare Details</h3>
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Delivery Charge</p>
            <p className="text-sm text-gray-900">{bookingData.fare}</p>
          </div>
          
          <div className="pt-3 mb-3 border-t border-gray-200">
            <div className="flex items-center">
              <Tag className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter promo code"
                className="block w-full sm:w-64 px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                type="button"
                className="ml-2 inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Apply
              </button>
            </div>
          </div>
          
          <div className="pt-3 border-t border-gray-200">
            <div className="flex justify-between">
              <p className="text-base font-medium text-gray-900">Total Amount</p>
              <p className="text-base font-medium text-gray-900">{bookingData.fare}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Payment Method</h3>
          <div className="space-y-3">
            <div className="relative rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  value="credit_card"
                  checked={selectedPayment === 'credit_card'}
                  onChange={() => setSelectedPayment('credit_card')}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-900">Credit/Debit Card</span>
                </div>
              </label>
            </div>
            
            <div className="relative rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  value="cash"
                  checked={selectedPayment === 'cash'}
                  onChange={() => setSelectedPayment('cash')}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <div className="flex items-center">
                  <span className="inline-block h-5 w-5 mr-2 text-center font-bold text-gray-400">$</span>
                  <span className="text-sm font-medium text-gray-900">Cash on Delivery</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              checked={isTermsAccepted}
              onChange={() => setIsTermsAccepted(!isTermsAccepted)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-medium text-gray-700">
              I agree to the Terms and Conditions
            </label>
            <p className="text-gray-500">By proceeding, you agree to our terms of service and privacy policy.</p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleConfirmBooking}
            disabled={!isTermsAccepted || isProcessing}
            className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
              ${isTermsAccepted ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative
              transition-all duration-200`}
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Confirm & Pay'
            )}
          </button>
        </div>
      </div>
    </div>
  );
} 