import BookingStepLayout from '@/components/booking/BookingStepLayout';
import PackageForm from '@/components/booking/steps/PackageForm';

export default function PackagePage() {
  return (
    <BookingStepLayout currentStep="package">
      <PackageForm />
    </BookingStepLayout>
  );
} 