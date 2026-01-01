import { 
  FaWhatsapp, FaCheckCircle, FaLightbulb, FaUsers, FaRocket, 
  FaHandshake, FaChartLine, FaCogs, FaCoffee, FaDumbbell, 
  FaHome, FaStore, FaLaptopCode, FaGlobe, FaPhone, 
  FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaCut, 
  FaShoppingBag, FaGraduationCap, FaCar, FaHospital,
  FaHotel, FaWrench, FaBookOpen
} from 'react-icons/fa';
import Link from 'next/link';

export default function About() {
  const whatsappNumber = "+914374377473";
  const whatsappMessage = "Hello NextWebIT, I'm interested in your website services!";

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.3) 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building Digital India, <span className="text-yellow-300">One Local Business at a Time</span>
            </h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              We personally visit your business, understand your needs, and build professional websites that actually work for your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp className="text-2xl" />
                Schedule Store Visit
              </a>
              <button className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300">
                View Our Sample Websites
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FaStore className="mr-2" />
                Physical Store Focus
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                We Visit Your <span className="text-red-500">Business in Person</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Unlike other agencies that work remotely, we believe in understanding your business personally. We visit your shop, restaurant, or office to truly grasp your needs and create a website that reflects your actual business.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Personal Store Visits</h4>
                    <p className="text-gray-600">We come to your location, understand your business environment, and take photos/videos for your website.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <FaHandshake className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Face-to-Face Requirements</h4>
                    <p className="text-gray-600">We discuss your needs in person, show you sample websites, and finalize everything together.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-xl mr-4">
                    <FaPhone className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Minimal Phone Calls</h4>
                    <p className="text-gray-600">We handle everything during our visit. Only WhatsApp/text communication after setup if needed.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <div className="text-5xl mb-6">🏪</div>
              <h3 className="text-2xl font-bold mb-6">Why We Visit Your Store</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-blue-200" />
                  <span>Better understanding of your business</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-blue-200" />
                  <span>Capture authentic photos & videos</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-blue-200" />
                  <span>Discuss requirements face-to-face</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-blue-200" />
                  <span>Show you sample websites in person</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-blue-200" />
                  <span>Build trust and transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaMoneyBillWave className="mr-2" />
              Transparent Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Simple & <span className="text-green-500">Clear Pricing</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              No hidden costs, no surprises. Just straightforward pricing with clear deliverables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-2 border-green-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                50%
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">50% Advance Payment</h3>
              <p className="text-gray-600 mb-6">We start work after 50% advance payment. Shows commitment from both sides.</p>
              <div className="text-green-600 font-semibold">Secure & Fair →</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-2 border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                🎁
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Free Domain (1 Year)</h3>
              <p className="text-gray-600 mb-6">We buy and provide domain name free for first year. You renew after that.</p>
              <div className="text-blue-600 font-semibold">First Year Free →</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-2 border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                🔄
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Annual Renewal</h3>
              <p className="text-gray-600 mb-6">Website hosting & maintenance renewed annually. Simple yearly payment.</p>
              <div className="text-purple-600 font-semibold">Yearly Renewal →</div>
            </div>
          </div>
        </div>
      </section>

      {/* UPDATED: Our Process */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-yellow-300">5-Step</span> Process
            </h2>
            <p className="text-blue-200 max-w-3xl mx-auto text-lg">
              Personal, transparent, and designed for local businesses like yours
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <div className="absolute top-10 left-1/2 transform translate-x-20 w-24 h-1 bg-yellow-400 hidden lg:block"></div>
              <h3 className="text-xl font-bold mb-4">Store Visit & Discussion</h3>
              <p className="text-blue-200 text-sm">
                We visit your business in person, understand your requirements, and show you sample website themes.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <div className="absolute top-10 left-1/2 transform translate-x-20 w-24 h-1 bg-yellow-400 hidden lg:block"></div>
              <h3 className="text-xl font-bold mb-4">Theme Selection & 50% Payment</h3>
              <p className="text-blue-200 text-sm">
                You choose a theme from our samples, and we start work after 50% advance payment.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <div className="absolute top-10 left-1/2 transform translate-x-20 w-24 h-1 bg-yellow-400 hidden lg:block"></div>
              <h3 className="text-xl font-bold mb-4">Website Development</h3>
              <p className="text-blue-200 text-sm">
                We build your website with all features, mobile optimization, and your business content.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <div className="absolute top-10 left-1/2 transform translate-x-20 w-24 h-1 bg-yellow-400 hidden lg:block"></div>
              <h3 className="text-xl font-bold mb-4">Deployment & Domain Setup</h3>
              <p className="text-blue-200 text-sm">
                We deploy your website and provide free domain for first year. 50% balance payment.
              </p>
            </div>
            
            {/* Step 5 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-6">
                5
              </div>
              <h3 className="text-xl font-bold mb-4">Annual Renewal</h3>
              <p className="text-blue-200 text-sm">
                After one year, you renew website hosting & domain annually if you want to continue.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">Payment Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-white/20 rounded-xl">
                <div className="text-3xl font-bold">50%</div>
                <div className="text-sm mt-2">Advance Payment</div>
                <p className="text-blue-200 text-xs mt-2">To start website development</p>
              </div>
              <div className="text-center p-6 border border-white/20 rounded-xl">
                <div className="text-3xl font-bold">50%</div>
                <div className="text-sm mt-2">On Completion</div>
                <p className="text-blue-200 text-xs mt-2">Before website launch</p>
              </div>
              <div className="text-center p-6 border border-white/20 rounded-xl">
                <div className="text-3xl font-bold">Yearly</div>
                <div className="text-sm mt-2">Renewal Fee</div>
                <p className="text-blue-200 text-xs mt-2">For hosting & domain after 1st year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDED: Business We Work With Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaUsers className="mr-2" />
              Business We Work With
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Serving <span className="text-orange-500">All Types</span> of Local Businesses
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We build websites for all kinds of local businesses across India. Here are just some examples:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center justify-center">
              <div className="text-3xl text-blue-600 mb-4 flex justify-center">
                <FaDumbbell />
              </div>
              <h3 className="font-bold text-gray-800">Gyms & Fitness</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl text-amber-600 mb-4 flex justify-center">
                <FaCoffee />
              </div>
              <h3 className="font-bold text-gray-800">Cafes & Restaurants</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl text-green-600 mb-4 flex justify-center">
                <FaHome />
              </div>
              <h3 className="font-bold text-gray-800">Real Estate</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl text-pink-600 mb-4 flex justify-center">
                <FaCut />
              </div>
              <h3 className="font-bold text-gray-800">Salons & Spas</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl text-purple-600 mb-4 flex justify-center">
                <FaShoppingBag />
              </div>
              <h3 className="font-bold text-gray-800">Retail Stores</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl text-red-600 mb-4 flex justify-center">
                <FaHospital />
              </div>
              <h3 className="font-bold text-gray-800">Clinics & Medical</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl text-indigo-600 mb-4 flex justify-center">
                <FaGraduationCap />
              </div>
              <h3 className="font-bold text-gray-800">Education & Coaching</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl text-blue-400 mb-4 flex justify-center">
                <FaCar />
              </div>
              <h3 className="font-bold text-gray-800">Automotive Services</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl text-yellow-600 mb-4 flex justify-center">
                <FaHotel />
              </div>
              <h3 className="font-bold text-gray-800">Hotels & Lodging</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl text-gray-600 mb-4 flex justify-center">
                <FaWrench />
              </div>
              <h3 className="font-bold text-gray-800">Repair Services</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl text-teal-600 mb-4 flex justify-center">
                <FaBookOpen />
              </div>
              <h3 className="font-bold text-gray-800">Libraries & Bookstores</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl text-rose-600 mb-4 flex justify-center">
                🏪
              </div>
              <h3 className="font-bold text-gray-800">And Many More!</h3>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              <span className="font-bold text-blue-600">No business is too small!</span> Whether you're a small shop or a large establishment, we can build a professional website for you.
            </p>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaChartLine className="mr-2" />
              Our Unique Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Local Businesses <span className="text-purple-500">Choose Us</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We're not a faceless agency. We're your local digital partners who understand your business personally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🏪
              </div>
              <h3 className="text-xl text-blue-400 font-bold mb-4">Store Visits</h3>
              <p className="text-gray-600">We visit your business personally to understand your needs better than any call ever could.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                <FaHandshake />
              </div>
              <h3 className="text-xl text-green-400 font-bold mb-4">50% Advance Only</h3>
              <p className="text-gray-600">Simple 50% advance, 50% on completion. No hidden charges, no monthly subscriptions.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                <FaGlobe />
              </div>
              <h3 className="text-xl text-purple-400 font-bold mb-4">Free Domain (1st Year)</h3>
              <p className="text-gray-600">We provide domain name free for first year. You only pay for renewal after that.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                <FaCalendarAlt />
              </div>
              <h3 className="text-xl text-red-400 font-bold mb-4">Annual Renewal</h3>
              <p className="text-gray-600">Simple yearly renewal for hosting and domain. No complicated monthly payments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility / Trust - Sample Projects */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our <span className="text-blue-500">Sample Websites</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Examples of websites we've built. We'll show you these during our store visit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gym Project */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="h-48 bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center">
                <FaDumbbell className="text-white text-6xl" />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  GYM & FITNESS CENTER
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">FitLife Gym Website</h3>
                <p className="text-gray-600 mb-6">Complete gym website with class schedules, membership plans, online booking, and trainer profiles.</p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Class Booking:</span>
                    <span className="font-bold text-green-600">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Mobile Responsive:</span>
                    <span className="font-bold text-green-600">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Free Domain:</span>
                    <span className="font-bold text-green-600">1 Year Free</span>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500 mb-4">
                  We'll show you this during our visit
                </div>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white text-center py-3 rounded-lg font-bold transition">
                  Show During Visit →
                </button>
              </div>
            </div>
            
            {/* Cafe Project */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="h-48 bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center">
                <FaCoffee className="text-white text-6xl" />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  CAFE & RESTAURANT
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Urban Cafe & Bistro</h3>
                <p className="text-gray-600 mb-6">Restaurant website with online ordering, menu management, table reservation, and delivery integration.</p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Online Ordering:</span>
                    <span className="font-bold text-green-600">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Mobile Responsive:</span>
                    <span className="font-bold text-green-600">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Free Domain:</span>
                    <span className="font-bold text-green-600">1 Year Free</span>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500 mb-4">
                  We'll show you this during our visit
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white text-center py-3 rounded-lg font-bold transition">
                  Show During Visit →
                </button>
              </div>
            </div>
            
            {/* Real Estate Project */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center">
                <FaHome className="text-white text-6xl" />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  REAL ESTATE AGENCY
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Skyline Realtors</h3>
                <p className="text-gray-600 mb-6">Real estate website with property listings, virtual tours, agent profiles, and lead capture forms.</p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Property Listings:</span>
                    <span className="font-bold text-green-600">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Mobile Responsive:</span>
                    <span className="font-bold text-green-600">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Free Domain:</span>
                    <span className="font-bold text-green-600">1 Year Free</span>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500 mb-4">
                  We'll show you this during our visit
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-3 rounded-lg font-bold transition">
                  Show During Visit →
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">📋 During Our Store Visit We Will:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>Show you sample websites on our laptop</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>Discuss your specific requirements</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>Take photos of your business</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>Explain our pricing & payment structure</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>Discuss timeline (7-10 days)</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>Answer all your questions in person</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaWhatsapp className="mr-2" />
              Schedule Store Visit
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Ready for Your <span className="text-green-400">Free Store Visit?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Contact us to schedule a free visit to your business. We'll come with sample websites and discuss your requirements in person.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Schedule In-Person Visit</h3>
                  <p className="text-gray-300">No phone calls required. Just WhatsApp us to schedule a visit.</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-3 mr-4">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-300">WhatsApp to schedule visit</div>
                    <div className="text-2xl font-bold">+91 4374 377 473</div>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:scale-105 transition-all duration-300"
                >
                  <FaWhatsapp className="text-2xl" />
                  Schedule Visit Now
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
                <p className="text-gray-300">Advance Payment</p>
                <p className="text-gray-400 text-sm">Balance on completion</p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">7-10</div>
                <p className="text-gray-300">Days Delivery</p>
                <p className="text-gray-400 text-sm">After requirements finalization</p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">1 Year</div>
                <p className="text-gray-300">Free Domain</p>
                <p className="text-gray-400 text-sm">Renew annually after first year</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}