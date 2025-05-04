'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Download, Share } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';
import QRCode from 'qrcode';

export default function BookingConfirmation() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  
  // Use ref to keep bookingId stable across renders
  const bookingIdRef = useRef<string>('');
  const trackingUrlRef = useRef<string>('');
  
  useEffect(() => {
    // Generate booking ID on client side only
    if (!bookingIdRef.current) {
      bookingIdRef.current = `PX-${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 900) + 100}`;
      trackingUrlRef.current = `https://portex.com/track/${bookingIdRef.current}`;
    }
    
    // Trigger animation after component mount
    setIsLoaded(true);
    
    // Show confetti animation after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 300);
    
    // Generate QR code
    const generateQrCode = async () => {
      try {
        const url = await QRCode.toDataURL(trackingUrlRef.current, {
          width: 150,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#ffffff'
          }
        });
        setQrCodeUrl(url);
      } catch (error) {
        console.error('Failed to generate QR code:', error);
      }
    };
    
    generateQrCode();
    
    return () => clearTimeout(timer);
  }, []);

  // Function to generate a PDF receipt and return it as a blob
  const generatePdfReceipt = async (): Promise<Blob> => {
    // Create new PDF document
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    // Add company logo/header
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Set title
    doc.setFontSize(20);
    doc.setTextColor(44, 62, 80);
    doc.text('PORTEX DELIVERY', pageWidth / 2, 20, { align: 'center' });
    
    // Set receipt title
    doc.setFontSize(16);
    doc.text('DELIVERY RECEIPT', pageWidth / 2, 30, { align: 'center' });
    
    // Add horizontal line
    doc.setDrawColor(41, 128, 185);
    doc.setLineWidth(0.5);
    doc.line(20, 35, pageWidth - 20, 35);
    
    // Add receipt details
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    // Date and receipt number
    const today = new Date();
    doc.setFont("helvetica", 'bold');
    doc.text(`Receipt Date: ${today.toLocaleDateString()}`, 20, 45);
    doc.text(`Booking ID: ${bookingIdRef.current}`, 20, 52);
    
    // Add status with color
    doc.setFont("helvetica", 'bold');
    doc.text('Status:', 20, 62);
    doc.setTextColor(46, 204, 113); // Green color for confirmed status
    doc.text('Confirmed', 45, 62);
    
    // Reset text color
    doc.setTextColor(0, 0, 0);
    
    // Add delivery details section title
    doc.setFontSize(14);
    doc.setFont("helvetica", 'bold');
    doc.text('Delivery Details', 20, 75);
    
    // Add horizontal line
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.line(20, 78, pageWidth - 20, 78);
    
    // Add delivery details
    doc.setFontSize(12);
    doc.setFont("helvetica", 'normal');
    
    // Create a table-like structure
    const detailsY = 85;
    doc.text('Pickup Date:', 20, detailsY);
    doc.text('May 15, 2023', 70, detailsY);
    
    doc.text('Expected Delivery:', 20, detailsY + 8);
    doc.text('May 17, 2023', 70, detailsY + 8);
    
    doc.text('Package Type:', 20, detailsY + 16);
    doc.text('Standard Delivery', 70, detailsY + 16);
    
    doc.text('Weight:', 20, detailsY + 24);
    doc.text('5.2 kg', 70, detailsY + 24);
    
    // Add QR code if available
    if (qrCodeUrl) {
      try {
        doc.addImage(qrCodeUrl, 'PNG', 20, 205, 25, 25);
        doc.setFontSize(8);
        doc.text('Scan to track your delivery', 20, 235);
      } catch (error) {
        console.error('QR code generation failed:', error);
      }
    }
    
    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Thank you for choosing Portex Delivery Services!', pageWidth / 2, 250, { align: 'center' });
    doc.text('For customer support, please contact support@portex.com', pageWidth / 2, 255, { align: 'center' });
    
    // Add horizontal line above footer
    doc.setDrawColor(41, 128, 185);
    doc.setLineWidth(0.5);
    doc.line(20, 245, pageWidth - 20, 245);
    
    // Return the PDF as a blob
    return doc.output('blob');
  };

  // Function to generate and download receipt PDF
  const handleDownloadReceipt = async () => {
    try {
      // Create new PDF document
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Add company logo/header
      const pageWidth = doc.internal.pageSize.getWidth();
      
      // Set title
      doc.setFontSize(20);
      doc.setTextColor(44, 62, 80);
      doc.text('PORTEX DELIVERY', pageWidth / 2, 20, { align: 'center' });
      
      // Set receipt title
      doc.setFontSize(16);
      doc.text('DELIVERY RECEIPT', pageWidth / 2, 30, { align: 'center' });
      
      // Add horizontal line
      doc.setDrawColor(41, 128, 185);
      doc.setLineWidth(0.5);
      doc.line(20, 35, pageWidth - 20, 35);
      
      // Add receipt details
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      
      // Date and receipt number
      const today = new Date();
      doc.setFont("helvetica", 'bold');
      doc.text(`Receipt Date: ${today.toLocaleDateString()}`, 20, 45);
      doc.text(`Booking ID: ${bookingIdRef.current}`, 20, 52);
      
      // Add status with color
      doc.setFont("helvetica", 'bold');
      doc.text('Status:', 20, 62);
      doc.setTextColor(46, 204, 113); // Green color for confirmed status
      doc.text('Confirmed', 45, 62);
      
      // Reset text color
      doc.setTextColor(0, 0, 0);
      
      // Add delivery details section title
      doc.setFontSize(14);
      doc.setFont("helvetica", 'bold');
      doc.text('Delivery Details', 20, 75);
      
      // Add horizontal line
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.2);
      doc.line(20, 78, pageWidth - 20, 78);
      
      // Add delivery details
      doc.setFontSize(12);
      doc.setFont("helvetica", 'normal');
      
      // Create a table-like structure
      const detailsY = 85;
      doc.text('Pickup Date:', 20, detailsY);
      doc.text('May 15, 2023', 70, detailsY);
      
      doc.text('Expected Delivery:', 20, detailsY + 8);
      doc.text('May 17, 2023', 70, detailsY + 8);
      
      doc.text('Package Type:', 20, detailsY + 16);
      doc.text('Standard Delivery', 70, detailsY + 16);
      
      doc.text('Weight:', 20, detailsY + 24);
      doc.text('5.2 kg', 70, detailsY + 24);
      
      // Generate QR code for tracking
      try {
        // Use the already generated QR code if available
        if (qrCodeUrl) {
          doc.addImage(qrCodeUrl, 'PNG', 20, 205, 25, 25);
          doc.setFontSize(8);
          doc.text('Scan to track your delivery', 20, 235);
        }
      } catch (error) {
        console.error('QR code generation failed:', error);
      }
      
      // Add footer
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text('Thank you for choosing Portex Delivery Services!', pageWidth / 2, 250, { align: 'center' });
      doc.text('For customer support, please contact support@portex.com', pageWidth / 2, 255, { align: 'center' });
      
      // Add horizontal line above footer
      doc.setDrawColor(41, 128, 185);
      doc.setLineWidth(0.5);
      doc.line(20, 245, pageWidth - 20, 245);
      
      // Save the PDF
      doc.save(`Portex_Receipt_${bookingIdRef.current}.pdf`);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      alert('Error generating PDF receipt. Please try again.');
    }
  };

  // Function to handle share details
  const handleShareDetails = async () => {
    try {
      // Generate the PDF with QR code
      const pdfBlob = await generatePdfReceipt();
      
      // Create a File object from the blob
      const file = new File(
        [pdfBlob], 
        `Portex_Receipt_${bookingIdRef.current}.pdf`,
        { type: 'application/pdf' }
      );
      
      // Check if Web Share API is available and supports files
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            title: 'Portex Delivery Receipt',
            text: `My Portex delivery receipt for tracking ID: ${bookingIdRef.current}`,
            files: [file]
          });
        } catch (error) {
          console.error('Error sharing:', error);
          // Fallback: show modal instead
          setShowShareModal(true);
        }
      } else {
        // Browser doesn't support Web Share API with files, show modal
        setShowShareModal(true);
      }
    } catch (error) {
      console.error('Error generating PDF for sharing:', error);
      // Fallback to regular sharing if PDF generation fails
      if (navigator.share) {
        navigator.share({
          title: 'Portex Delivery Booking',
          text: `I've scheduled a package delivery with Portex! Tracking ID: ${bookingIdRef.current}`,
          url: window.location.href,
        })
        .catch(error => {
          console.error('Error sharing:', error);
          // Fallback: show modal instead
          setShowShareModal(true);
        });
      } else {
        // Browser doesn't support Web Share API, show modal
        setShowShareModal(true);
      }
    }
  };

  return (
    <div className="p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-white to-blue-50/30 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/0 via-green-500 to-green-400/0"></div>
      
      {/* Decorative background elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-green-200/10 blur-xl -z-10"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-200/10 blur-xl -z-10"></div>
      
      {/* Success animation */}
      <div className={`flex flex-col items-center justify-center mb-10 transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="relative mb-6">
          <div className={`w-24 h-24 rounded-full bg-green-100 flex items-center justify-center transition-all duration-500 ${isLoaded ? 'scale-100' : 'scale-0'}`}>
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          
          {/* Confetti-like particles */}
          {showConfetti && (
            <>
              <span className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-6 -translate-y-6 animate-float-1"></span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-500 rounded-full transform translate-x-6 -translate-y-8 animate-float-2"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-8 translate-y-6 animate-float-3"></span>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full transform translate-x-6 translate-y-8 animate-float-4"></span>
            </>
          )}
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Booking Confirmed!</h2>
        <p className="text-gray-600 text-center max-w-md">
          Your package delivery has been successfully scheduled. We'll take care of it from here!
        </p>
      </div>
      
      {/* Booking details */}
      <div className={`bg-white rounded-lg shadow-md p-6 mb-8 transform transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <h3 className="font-semibold text-gray-900 mb-4 pb-2 border-b">Booking Details</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Booking ID:</span>
            <span className="font-medium text-gray-900">{bookingIdRef.current}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <span className="font-medium text-green-600">Confirmed</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Pickup Date:</span>
            <span className="font-medium text-gray-900">May 15, 2023</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Expected Delivery:</span>
            <span className="font-medium text-gray-900">May 17, 2023</span>
          </div>
          
          {/* QR Code Section - Only show on client side after loaded */}
          {qrCodeUrl && (
            <div className="flex flex-col items-center border-t pt-4 mt-2">
              <p className="text-sm font-medium text-gray-700 mb-2">Scan to track your delivery</p>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <img src={qrCodeUrl} alt="Tracking QR Code" className="w-24 h-24" />
              </div>
              <p className="text-xs text-gray-500 mt-1">{trackingUrlRef.current}</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Action buttons */}
      <div className={`flex flex-wrap gap-4 justify-center transform transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <button 
          onClick={handleDownloadReceipt}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors active:bg-gray-100"
        >
          <Download className="h-4 w-4" />
          <span>Download Receipt</span>
        </button>
        
        <button 
          onClick={handleShareDetails}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors active:bg-gray-100"
        >
          <Share className="h-4 w-4" />
          <span>Share Receipt</span>
        </button>
      </div>
      
      {/* Share modal */}
      {showShareModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Share Receipt</h3>
            <p className="mb-4 text-gray-600">Your browser doesn't support direct file sharing. Please choose one of the following options:</p>
            
            <div className="space-y-3">
              <button 
                onClick={handleDownloadReceipt}
                className="w-full text-left px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Download PDF
              </button>
              
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(`I've scheduled a package delivery with Portex! Tracking ID: ${bookingIdRef.current}\n\nCheck status: ${window.location.href}`);
                  alert('Tracking information copied to clipboard!');
                  setShowShareModal(false);
                }}
                className="w-full text-left px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Copy Tracking Info
              </button>
            </div>
            
            <button 
              onClick={() => setShowShareModal(false)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Return to home */}
      <div className={`mt-8 text-center transform transition-all duration-700 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
          Return to Homepage
        </Link>
      </div>
      
      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(-6px, -6px); }
          50% { transform: translate(-12px, -12px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(6px, -8px); }
          50% { transform: translate(12px, -16px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(-8px, 6px); }
          50% { transform: translate(-16px, 12px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(6px, 8px); }
          50% { transform: translate(12px, 16px); }
        }
        .animate-float-1 {
          animation: float-1 3s infinite ease-in-out;
        }
        .animate-float-2 {
          animation: float-2 3.5s infinite ease-in-out;
        }
        .animate-float-3 {
          animation: float-3 4s infinite ease-in-out;
        }
        .animate-float-4 {
          animation: float-4 3.2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
} 