export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-800 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center border-2 border-black">
              <span className="text-white font-bold text-xl">EH</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Emparet Herbs</h1>
              <p className="text-green-200 text-sm">Premium Kenyan Herbs & Spices</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-white hover:text-green-200 transition">Home</a>
            <a href="#about" className="text-white hover:text-green-200 transition">About</a>
            <a href="#products" className="text-white hover:text-green-200 transition">Products</a>
            <a href="#contact" className="text-white hover:text-green-200 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 py-20 md:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-red-600 text-white rounded-full font-semibold">
              🇰🇪 Proudly Kenyan
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Fresh from Our Kenyan Soil
            </h2>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Experience the authentic taste of Kenya with our premium herbs and spices, 
              cultivated with care in the heart of Africa's fertile lands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
              >
                View Our Products
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-50 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Our Story
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Emparet Herbs was born from a passion for Kenya's rich agricultural heritage. 
                Located in the fertile highlands of Kenya, our farm has been cultivating 
                premium herbs and spices for generations.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We believe in sustainable farming practices that honor our land and 
                provide our customers with the highest quality, natural products. 
                Every leaf is hand-picked with care, ensuring the freshest taste reaches your kitchen.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">100%</div>
                  <div className="text-gray-600">Organic</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">50+</div>
                  <div className="text-gray-600">Herb Varieties</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 border-4 border-green-300">
              <div className="text-center">
                <div className="text-6xl mb-4">🌿</div>
                <h4 className="text-2xl font-bold text-green-800 mb-2">Grown with Love</h4>
                <p className="text-gray-700">
                  Our herbs are nurtured with traditional Kenyan farming wisdom, 
                  combined with modern sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Our Products
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our range of premium Kenyan herbs and spices, 
              each carefully cultivated to bring the authentic taste of Kenya to your table.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-6xl">🌱</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-green-800 mb-2">Fresh Basil</h4>
                <p className="text-gray-600 mb-4">
                  Aromatic Kenyan basil, perfect for your culinary creations. 
                  Freshly harvested daily.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-700">KES 200</span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-6xl">🍃</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-green-800 mb-2">Rosemary</h4>
                <p className="text-gray-600 mb-4">
                  Fragrant rosemary grown in Kenya's highlands. 
                  Adds depth to any dish.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-700">KES 250</span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <span className="text-6xl">🌶️</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-green-800 mb-2">Chili Peppers</h4>
                <p className="text-gray-600 mb-4">
                  Spicy Kenyan chilies with authentic heat. 
                  Perfect for adding that extra kick.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-700">KES 150</span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h3>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Ready to experience the best of Kenyan herbs? Contact us today!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="text-white space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">📍 Location</h4>
                <p className="text-green-100">
                  Emparet Herbs Farm<br />
                  Nairobi, Kenya<br />
                  East Africa
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">📞 Phone</h4>
                <p className="text-green-100">+254 700 000 000</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">✉️ Email</h4>
                <p className="text-green-100">info@emparetherbs.co.ke</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">⏰ Hours</h4>
                <p className="text-green-100">
                  Monday - Saturday: 8:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold">Emparet Herbs</h4>
              <p className="text-gray-400">Premium Kenyan Herbs & Spices</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
            <p>© 2024 Emparet Herbs. All rights reserved. | 🇰🇪 Made with pride in Kenya</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
