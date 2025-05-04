import BookingStepLayout from '@/components/booking/BookingStepLayout';
import SummaryDetails from '@/components/booking/steps/SummaryDetails';

export default function SummaryPage() {
  return (
    <BookingStepLayout currentStep="summary">
      <SummaryDetails />
    </BookingStepLayout>
  );
} 