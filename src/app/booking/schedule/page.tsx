import BookingStepLayout from '@/components/booking/BookingStepLayout';
import ScheduleForm from '@/components/booking/steps/ScheduleForm';

export default function SchedulePage() {
  return (
    <BookingStepLayout currentStep="schedule">
      <ScheduleForm />
    </BookingStepLayout>
  );
} 