import BookingStepLayout from '@/components/booking/BookingStepLayout';
import AddressForm from '@/components/booking/steps/AddressForm';

export default function AddressPage() {
  return (
    <BookingStepLayout currentStep="address">
      <AddressForm />
    </BookingStepLayout>
  );
} 