import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedPosts />
        <Newsletter />
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">FemmeFinesse</h3>
              <p className="text-gray-400">
                Empowering women through fashion, beauty, and lifestyle content.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-rose-400">Fashion</a></li>
                <li><a href="#" className="hover:text-rose-400">Beauty</a></li>
                <li><a href="#" className="hover:text-rose-400">Lifestyle</a></li>
                <li><a href="#" className="hover:text-rose-400">Empowerment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-rose-400">About Us</a></li>
                <li><a href="#" className="hover:text-rose-400">Contact</a></li>
                <li><a href="#" className="hover:text-rose-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-rose-400">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-rose-400">Instagram</a></li>
                <li><a href="#" className="hover:text-rose-400">Pinterest</a></li>
                <li><a href="#" className="hover:text-rose-400">Twitter</a></li>
                <li><a href="#" className="hover:text-rose-400">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 FemmeFinesse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;