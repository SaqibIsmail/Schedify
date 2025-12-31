import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl tracking-tight text-gray-900">
              Schedify
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#home"
              className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
            >
              Home
            </a>
            <a
              href="#employees"
              className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
            >
              Employees
            </a>
            <a
              href="#schedule"
              className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
            >
              Schedule
            </a>
          </div>

          {/* Admin Button */}
          <div className="flex items-center">
            <a
              href="#admin"
              className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
              title="Admin"
            >
              <User className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}