import React from 'react';

export default function Newsletter() {
  return (
    <section className="bg-rose-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif text-gray-900 mb-4">
          Join Our Community
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest fashion trends, beauty tips, and empowering stories delivered straight to your inbox.
        </p>
        
        <form className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <button
            type="submit"
            className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}