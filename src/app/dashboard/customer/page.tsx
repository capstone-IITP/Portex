import { PackageCheck, Package, Clock, Truck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// Sample data for active deliveries
const activeDeliveries = [
  {
    id: 'DEL-1234567',
    pickupAddress: '123 Main St, New York, NY',
    dropoffAddress: '456 Market St, Brooklyn, NY',
    status: 'In Transit',
    driver: 'John Doe',
    estimatedDelivery: '10:30 AM',
  },
  {
    id: 'DEL-7654321',
    pickupAddress: '789 Broadway, New York, NY',
    dropoffAddress: '321 Fifth Ave, Queens, NY',
    status: 'Pickup Scheduled',
    driver: 'Pending Assignment',
    estimatedDelivery: '2:15 PM',
  },
];

// Sample data for analytics
const analytics = [
  { 
    title: 'Completed Deliveries',
    value: 24,
    change: '+12%',
    icon: PackageCheck,
    color: 'bg-green-500',
  },
  { 
    title: 'Active Deliveries',
    value: 2,
    change: '0%',
    icon: Truck,
    color: 'bg-blue-500',
  },
  { 
    title: 'Pending Deliveries',
    value: 1,
    change: '-5%',
    icon: Clock,
    color: 'bg-yellow-500',
  },
  { 
    title: 'Total Packages',
    value: 27,
    change: '+8%',
    icon: Package,
    color: 'bg-purple-500',
  },
];

// Recent activity data
const recentActivity = [
  { 
    id: 1, 
    action: 'Delivery completed', 
    detail: 'Package DEL-9876543 was delivered successfully',
    time: '2 hours ago',
  },
  { 
    id: 2, 
    action: 'New booking', 
    detail: 'You booked a new delivery DEL-1234567',
    time: '5 hours ago',
  },
  { 
    id: 3, 
    action: 'Driver assigned', 
    detail: 'John Doe was assigned to your delivery',
    time: '5 hours ago',
  },
  { 
    id: 4, 
    action: 'Payment processed', 
    detail: 'Payment of $24.99 was processed for delivery DEL-1234567',
    time: '5 hours ago',
  },
];

export default function CustomerDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      {/* Analytics Cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {analytics.map((item) => (
          <div key={item.title} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-md p-3 ${item.color}`}>
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.title}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{item.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span className={`mr-2 ${item.change.startsWith('+') ? 'text-green-600' : item.change === '0%' ? 'text-gray-500' : 'text-red-600'}`}>
                  {item.change}
                </span>
                <span className="text-gray-500">from last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Active Deliveries */}
      <h2 className="mt-8 text-lg font-medium text-gray-900">Active Deliveries</h2>
      <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {activeDeliveries.map((delivery) => (
            <li key={delivery.id}>
              <Link 
                href={`/dashboard/customer/deliveries/${delivery.id}`} 
                className="block hover:bg-gray-50"
              >
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-blue-600 truncate">{delivery.id}</p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          delivery.status === 'In Transit' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {delivery.status}
                        </p>
                      </div>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <ArrowUpRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        From: {delivery.pickupAddress}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        To: {delivery.dropoffAddress}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>
                        ETA: {delivery.estimatedDelivery} • Driver: {delivery.driver}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="bg-white px-4 py-3 border-t border-gray-200 text-center sm:px-6">
          <Link 
            href="/dashboard/customer/book"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Book New Delivery
          </Link>
        </div>
      </div>
      
      {/* Recent Activity */}
      <h2 className="mt-8 text-lg font-medium text-gray-900">Recent Activity</h2>
      <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {recentActivity.map((activity) => (
            <li key={activity.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">{activity.action}</p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500">{activity.detail}</p>
            </li>
          ))}
        </ul>
        <div className="bg-white px-4 py-3 border-t border-gray-200 text-right sm:px-6">
          <Link 
            href="/dashboard/customer/activity"
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View All Activity
          </Link>
        </div>
      </div>
    </div>
  );
} 