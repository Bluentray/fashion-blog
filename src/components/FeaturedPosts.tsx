import React from 'react';

const posts = [
  {
    id: 1,
    title: "Spring Fashion Trends 2024",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    excerpt: "Discover the must-have pieces for your spring wardrobe..."
  },
  {
    id: 2,
    title: "Clean Beauty Revolution",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    excerpt: "Your guide to sustainable and clean beauty products..."
  },
  {
    id: 3,
    title: "Women Who Lead",
    category: "Empowerment",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    excerpt: "Inspiring stories of women breaking barriers..."
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-gray-900 mb-8">Featured Stories</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-rose-600 font-medium">
                  {post.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-rose-600 hover:text-rose-700"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}