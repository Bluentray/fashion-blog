import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[70vh] mt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Fashion hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
            Embrace Your Unique Beauty
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Discover the latest in fashion, beauty, and self-empowerment
          </p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}