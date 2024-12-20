import React from 'react';
import { Search, Menu, User, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 md:hidden" />
            <a href="/" className="ml-4 md:ml-0">
              <h1 className="text-2xl font-serif text-rose-600">FemmeFinesse</h1>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-rose-600">Fashion</a>
            <a href="#" className="text-gray-700 hover:text-rose-600">Beauty</a>
            <a href="#" className="text-gray-700 hover:text-rose-600">Lifestyle</a>
            <a href="#" className="text-gray-700 hover:text-rose-600">Empowerment</a>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600" />
            <User className="h-5 w-5 text-gray-600" />
            <ShoppingBag className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}