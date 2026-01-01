import { FaCheckCircle, FaStar, FaRocket, FaChartLine, FaMobileAlt, FaShoppingCart, FaGoogle, FaHeadset, FaDumbbell, FaCoffee, FaHome } from 'react-icons/fa';

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Animation */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 overflow-hidden">
        {/* Simplified background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, transparent 79px, #ffffff 79px, #ffffff 81px, transparent 81px), linear-gradient(0deg, transparent 79px, #ffffff 79px, #ffffff 81px, transparent 81px)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Build Your Business <span className="text-yellow-300 animate-pulse">Online Presence</span> with NextWebIT
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            We create stunning, fast-loading websites that help local businesses in India grow and succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl">
              🎯 Get Free Website Audit
            </button>
            <button className="bg-transparent border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 hover:scale-105 transform transition-all duration-300">
              👁️ View Our Work
            </button>
          </div>
          <div className="mt-16 grid grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto opacity-80">
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm mt-2">Websites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm mt-2">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">7-10</div>
              <div className="text-sm mt-2">Days Delivery</div>
            </div>
            <div className="hidden md:block text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm mt-2">Support</div>
            </div>
            <div className="hidden md:block text-center">
              <div className="text-3xl font-bold">50%</div>
              <div className="text-sm mt-2">Upfront Cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Animation */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏆 Why Choose NextWebIT?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              We Build <span className="text-blue-600">Websites That Work</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Specializing in affordable, high-quality websites for Indian local businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl mb-6">
                <FaRocket className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Fast Delivery</h3>
              <p className="text-gray-600 mb-6">Get your website live in 7-10 days with our streamlined process. No delays, only results.</p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>See timeline →</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl mb-6">
                <FaChartLine className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Growth</h3>
              <p className="text-gray-600 mb-6">Websites designed to convert visitors into customers. Trackable results that matter.</p>
              <div className="flex items-center text-green-600 font-semibold">
                <span>View results →</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl mb-6">
                <FaMobileAlt className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile-First</h3>
              <p className="text-gray-600 mb-6">70% of searches happen on mobile. Our websites work perfectly on all devices.</p>
              <div className="flex items-center text-purple-600 font-semibold">
                <span>Test responsive →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview with Icons */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🛠️ Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Services <span className="text-blue-600">We Offer</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Everything you need to establish your online presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white border-2 border-blue-100 rounded-xl p-8 hover:border-blue-300 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="text-blue-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaShoppingCart />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">E-commerce Websites</h3>
              <p className="text-gray-600 mb-6">Online stores with secure payments, inventory management, and mobile shopping experience.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center group">
                <span>Learn More</span>
                <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
              </button>
            </div>
            
            <div className="group bg-white border-2 border-blue-100 rounded-xl p-8 hover:border-blue-300 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="text-blue-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Business Websites</h3>
              <p className="text-gray-600 mb-6">Professional websites that showcase your services and attract customers 24/7.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center group">
                <span>Learn More</span>
                <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
              </button>
            </div>
            
            <div className="group bg-white border-2 border-blue-100 rounded-xl p-8 hover:border-blue-300 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="text-blue-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaGoogle />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">SEO Optimization</h3>
              <p className="text-gray-600 mb-6">Rank higher on Google and get found by local customers searching for your services.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center group">
                <span>Learn More</span>
                <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
              </button>
            </div>
            
            <div className="group bg-white border-2 border-blue-100 rounded-xl p-8 hover:border-blue-300 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="text-blue-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Website Maintenance</h3>
              <p className="text-gray-600 mb-6">Regular updates, security patches, and content management to keep your site secure.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center group">
                <span>Learn More</span>
                <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview with Your Actual Projects */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              💬 What Our Clients Say
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Success Stories from <span className="text-yellow-300">Indian Businesses</span>
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Trusted by 50+ local businesses across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transform hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex text-yellow-300 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="group-hover:scale-125 transition-transform duration-300" />
                ))}
              </div>
              <div className="text-4xl text-blue-200 mb-4 opacity-50">"</div>
              <p className="text-lg text-blue-50 italic mb-8 leading-relaxed">"NextWebIT built a fantastic website for our gym. The online class booking system has increased our membership by 40%! Members can now book slots 24/7."</p>
              <div className="flex items-center pt-6 border-t border-white/20">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">Arjun Singh</h4>
                  <p className="text-blue-200 text-sm">FitLife Gym & Fitness</p>
                  <p className="text-blue-300 text-xs mt-1">Gym Website Project</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transform hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex text-yellow-300 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="group-hover:scale-125 transition-transform duration-300" />
                ))}
              </div>
              <div className="text-4xl text-blue-200 mb-4 opacity-50">"</div>
              <p className="text-lg text-blue-50 italic mb-8 leading-relaxed">"Our cafe's online ordering website developed by NextWebIT has boosted our delivery orders by 200%. The menu management system is super easy to use."</p>
              <div className="flex items-center pt-6 border-t border-white/20">
                <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">Priya Patel</h4>
                  <p className="text-blue-200 text-sm">Urban Cafe & Bistro</p>
                  <p className="text-blue-300 text-xs mt-1">Cafe Website Project</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transform hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex text-yellow-300 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="group-hover:scale-125 transition-transform duration-300" />
                ))}
              </div>
              <div className="text-4xl text-blue-200 mb-4 opacity-50">"</div>
              <p className="text-lg text-blue-50 italic mb-8 leading-relaxed">"The real estate website they created for us is professional and user-friendly. We've seen a 50% increase in property inquiries with the virtual tour feature."</p>
              <div className="flex items-center pt-6 border-t border-white/20">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">Rajesh Kumar</h4>
                  <p className="text-blue-200 text-sm">Skyline Realtors</p>
                  <p className="text-blue-300 text-xs mt-1">Real Estate Website</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-blue-200 text-sm">Happy Clients</div>
              </div>
              <div className="h-8 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-blue-200 text-sm">Average Rating</div>
              </div>
              <div className="h-8 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50%</div>
                <div className="text-blue-200 text-sm">Upfront Cost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Animation */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Grow Your <span className="text-yellow-300">Business Online?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Get a free consultation and website proposal. No commitment, just great advice.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500">
                <FaHeadset className="text-4xl text-blue-400 mb-6 mx-auto" />
                <h3 className="text-xl font-bold text-white mb-4">Free Consultation</h3>
                <p className="text-gray-300">30-minute strategy call with our experts</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500">
                <FaCheckCircle className="text-4xl text-green-400 mb-6 mx-auto" />
                <h3 className="text-xl font-bold text-white mb-4">No Upfront Cost</h3>
                <p className="text-gray-300">Pay only after you approve the design</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500">
                <FaGoogle className="text-4xl text-red-400 mb-6 mx-auto" />
                <h3 className="text-xl font-bold text-white mb-4">SEO Ready</h3>
                <p className="text-gray-300">Google-friendly websites from day one</p>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-12 py-5 rounded-xl text-xl font-bold hover:from-yellow-500 hover:to-yellow-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 shadow-lg">
              📞 Book Free Consultation Now
            </button>
            
            <p className="text-gray-400 text-sm mt-8">
              * Limited slots available this week. Book now to secure your free audit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
