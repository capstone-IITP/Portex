'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Package, ChevronDown, LogOut, User } from 'lucide-react';

export default function BookingPageNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        // Add logout functionality here
        console.log('Logging out...');
        // Redirect to login page or homepage after logout
        window.location.href = '/';
    };

    return (
        <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : 'border-b border-gray-200'} transition-shadow duration-300`}>
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

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
                                <span>Solutions</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Small Business</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Enterprise</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">E-Commerce</Link>
                            </div>
                        </div>

                        <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                            How It Works
                        </Link>

                        <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                            Pricing
                        </Link>

                        <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                            About
                        </Link>
                    </nav>

                    {/* Profile Dropdown (Desktop) */}
                    <div className="hidden md:block relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <User className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="font-medium">Profile</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Dashboard
                                </Link>
                                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    My Profile
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
                                >
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <div className="px-3 py-2 text-base font-medium text-gray-600">
                            <span className="block mb-1">Solutions</span>
                            <div className="pl-4 border-l border-gray-300 mt-2 space-y-2">
                                <Link href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                                    Small Business
                                </Link>
                                <Link href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                                    Enterprise
                                </Link>
                                <Link href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                                    E-Commerce
                                </Link>
                            </div>
                        </div>

                        <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
                            How It Works
                        </Link>

                        <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
                            Pricing
                        </Link>

                        <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
                            About
                        </Link>

                        {/* Profile Section (Mobile) */}
                        <div className="pt-4 pb-3 border-t border-gray-200 mt-2">
                            <div className="px-3 py-2">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                        <User className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <span className="text-base font-medium">Profile</span>
                                </div>
                                <div className="pl-4 border-l border-gray-300 space-y-2">
                                    <Link href="/dashboard" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                                        Dashboard
                                    </Link>
                                    <Link href="/profile" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                                        My Profile
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left py-1 text-sm text-red-600 hover:text-red-700 flex items-center"
                                    >
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
} 