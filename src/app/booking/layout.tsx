import { ReactNode } from 'react';
import BookingPageNavbar from '@/components/booking/BookingPageNavbar';

export default function BookingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <BookingPageNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Delivery</h1>
        {children}
      </div>
    </div>
  );
} 