import React from 'react';

export default function HeroSection() {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <main className="bg-gradient-to-r from-white via-blue-50 to-blue-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="p-10 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Elevate Your Business <span className="text-blue-500">Online</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            We are a full-service digital agency helping brands grow with stunning websites, creative marketing, and smart strategies.
          </p>
          <div className="flex gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg transition"
              onClick={handleContactClick}
            >
              Get Started
            </button>
            <button
              className="bg-white hover:bg-blue-100 text-blue-500 font-bold py-3 px-6 rounded-lg border border-blue-500 transition"
              onClick={() => { window.location.href = '/portfolio'; }}
            >
              View Portfolio
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Agency Team"
            className="rounded-xl shadow-xl w-full max-w-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <span className="text-blue-500 text-4xl mb-4">🚀</span>
            <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-center">We deliver projects on time, every time, so your business never misses a beat.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <span className="text-blue-500 text-4xl mb-4">🎨</span>
            <h3 className="font-bold text-xl mb-2">Creative Design</h3>
            <p className="text-gray-600 text-center">Our designers craft visually stunning and user-friendly experiences for your brand.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <span className="text-blue-500 text-4xl mb-4">💡</span>
            <h3 className="font-bold text-xl mb-2">Smart Strategies</h3>
            <p className="text-gray-600 text-center">We use data-driven strategies to help your business grow and succeed online.</p>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="mt-20 mb-16 px-6 md:px-20 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Grow Your Business?</h2>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
          Contact us today for a free consultation and let’s build something amazing together.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-lg text-lg transition"
          onClick={handleContactClick}
        >
          Contact Us
        </button>
      </section>
    </main>
  );
}
