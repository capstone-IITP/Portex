'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Package, Truck, Clock, Settings, LogOut, Home, 
  LineChart, Search, Box, MapPin, Calendar, ChevronRight
} from 'lucide-react';

export default function DashboardPage() {
  // Sample data for deliveries
  const deliveries = [
    { id: 'DEL-2305-8721', destination: 'New York, NY', date: 'May 12, 2023', status: 'Delivered' },
    { id: 'DEL-2306-9034', destination: 'Los Angeles, CA', date: 'June 3, 2023', status: 'In Transit' },
    { id: 'DEL-2307-1528', destination: 'Chicago, IL', date: 'July 8, 2023', status: 'Pending' },
    { id: 'DEL-2308-4219', destination: 'Houston, TX', date: 'Aug 15, 2023', status: 'Delivered' },
    { id: 'DEL-2309-6374', destination: 'Miami, FL', date: 'Sep 22, 2023', status: 'In Transit' },
  ];

  // Status color mapping
  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'In Transit': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">PORTEX</span>
              </Link>
            </div>

            {/* Center Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/dashboard" className="flex items-center space-x-1 text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <Link href="/booking" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
                <Box className="w-4 h-4" />
                <span>Book Delivery</span>
              </Link>
              <Link href="/tracking" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
                <MapPin className="w-4 h-4" />
                <span>Track Status</span>
              </Link>
              <Link href="/settings" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </Link>
            </nav>

            {/* Logout Button */}
            <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
              <LogOut className="w-4 h-4" />
              <span>Log out</span>
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Your deliveries at a glance.</p>
        </div>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Deliveries */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 rounded-lg bg-blue-100 text-blue-600">
                <Package className="w-8 h-8" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Total Deliveries</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">248</p>
                  <p className="ml-2 text-sm text-green-600">+12% ↑</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Active Shipments */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 rounded-lg bg-purple-100 text-purple-600">
                <Truck className="w-8 h-8" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Active Shipments</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">42</p>
                  <p className="ml-2 text-sm text-green-600">+3% ↑</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pending Deliveries */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 rounded-lg bg-green-100 text-green-600">
                <Clock className="w-8 h-8" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Pending Deliveries</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">18</p>
                  <p className="ml-2 text-sm text-red-600">-5% ↓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Delivery Tracking Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Delivery Tracking</h2>
              
              {/* Search Bar */}
              <div className="relative max-w-xs w-full hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search deliveries..."
                />
              </div>
            </div>
          </div>
          
          {/* Delivery Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tracking ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {deliveries.map((delivery) => (
                  <tr key={delivery.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{delivery.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{delivery.destination}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{delivery.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(delivery.status)}`}>
                        {delivery.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/tracking/${delivery.id}`} className="text-blue-600 hover:text-blue-900">
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Table Footer */}
          <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">42</span> deliveries
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">1</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">2</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-md text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need to send something now?</h3>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">Fast, reliable shipping with real-time tracking and guaranteed delivery.</p>
          <Link 
            href="/booking" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white shadow-sm transition-all duration-200 hover:shadow"
          >
            Book New Delivery
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </main>
    </div>
  );
} 