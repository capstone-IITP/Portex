'use client';

import { cn } from '@/lib/utils';
import { Check, MapPin, Package, Calendar, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';

type Step = {
  id: string;
  name: string;
  href: string;
  icon: React.ElementType;
};

const steps: Step[] = [
  { id: 'address', name: 'Address', href: '/booking/address', icon: MapPin },
  { id: 'package', name: 'Package', href: '/booking/package', icon: Package },
  { id: 'schedule', name: 'Schedule', href: '/booking/schedule', icon: Calendar },
  { id: 'summary', name: 'Summary', href: '/booking/summary', icon: FileText },
  { id: 'confirm', name: 'Confirm', href: '/booking/confirm', icon: CheckCircle },
];

type BookingStepperProps = {
  currentStep: string;
};

export default function BookingStepper({ currentStep }: BookingStepperProps) {
  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <nav className="mb-8 relative">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/20 to-blue-100/30 rounded-lg -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/0 via-blue-600 to-blue-400/0 rounded-t-lg"></div>
      
      <ol className="flex items-center justify-around p-4">
        {steps.map((step, stepIdx) => {
          const isCompleted = stepIdx < currentStepIndex;
          const isCurrent = step.id === currentStep;
          const isConfirmStep = step.id === 'confirm';
          
          return (
            <li key={step.id} className="flex flex-col items-center">
              <div
                className={cn(
                  "h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 transform hover:scale-110 mb-2",
                  isCompleted 
                    ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-300/50" 
                    : isCurrent 
                      ? isConfirmStep
                        ? "bg-gradient-to-br from-green-500 to-green-600 shadow-green-300/50"
                        : "bg-gradient-to-br from-white to-blue-50 border-2 border-blue-600 shadow-blue-200/50 animate-pulse" 
                      : "bg-gray-100 hover:bg-gray-50"
                )}
              >
                {isCompleted ? (
                  <Check className="h-6 w-6 text-white animate-fadeIn" />
                ) : (
                  <step.icon
                    className={cn(
                      "h-6 w-6 transition-all duration-300",
                      isCurrent 
                        ? isConfirmStep 
                          ? "text-white animate-bounce-small" 
                          : "text-blue-600 animate-bounce-small" 
                        : "text-gray-400"
                    )}
                  />
                )}
                
                {/* Pulsing ring animation for current step */}
                {isCurrent && (
                  <span className={cn(
                    "absolute top-0 right-0 -mr-1 -mt-1 rounded-full h-3 w-3 animate-ping",
                    isConfirmStep ? "bg-green-500" : "bg-blue-500"
                  )}></span>
                )}
              </div>
              <span
                className={cn(
                  "text-sm font-medium transition-all duration-300 text-center",
                  isCurrent 
                    ? isConfirmStep 
                      ? "text-green-600 font-bold" 
                      : "text-blue-600 font-bold" 
                    : isCompleted 
                      ? "text-gray-900" 
                      : "text-gray-500"
                )}
              >
                {step.name}
              </span>
            </li>
          );
        })}
      </ol>
      
      <style jsx global>{`
        @keyframes bounce-small {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-bounce-small {
          animation: bounce-small 2s infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </nav>
  );
} 