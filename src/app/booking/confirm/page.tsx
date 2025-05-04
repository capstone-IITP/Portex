import BookingStepLayout from '@/components/booking/BookingStepLayout';
import BookingConfirmation from '@/components/booking/steps/BookingConfirmation';

export default function ConfirmPage() {
  return (
    <BookingStepLayout currentStep="confirm">
      <BookingConfirmation />
    </BookingStepLayout>
  );
} 