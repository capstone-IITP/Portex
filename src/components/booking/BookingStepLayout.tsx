import { ReactNode } from 'react';
import BookingStepper from './BookingStepper';
import BookingSidebar from './BookingSidebar';

type BookingStepLayoutProps = {
  children: ReactNode;
  currentStep: string;
};

export default function BookingStepLayout({
  children,
  currentStep,
}: BookingStepLayoutProps) {
  return (
    <div>
      <BookingStepper currentStep={currentStep} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1 order-2 lg:order-1">
          <BookingSidebar />
        </div>
        <div className="col-span-1 lg:col-span-2 order-1 lg:order-2">
          <div className="bg-white rounded-lg shadow">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 