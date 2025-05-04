import { redirect } from 'next/navigation';

export default function BookingPage() {
  // Redirect to the first step of the booking process
  redirect('/booking/address');
} 