import { notFound } from "next/navigation";
import { themesData as themeBlueprints } from "@/lib/themesData";
import { FaCheckCircle, FaArrowRight, FaStar, FaLightbulb, FaUsers, FaRocket, FaHandshake, FaPalette } from 'react-icons/fa';
import Link from 'next/link';

export async function generateStaticParams() {
  return Object.keys(themeBlueprints).map((theme) => ({
    theme,
  }));
}

export default function ThemePage({ params }) {
  const themeData = themeBlueprints[params.theme];
  
  if (!themeData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Theme Not Found</h1>
          <Link href="/themes" className="text-blue-600 hover:text-blue-800">
            ← Back to Themes
          </Link>
        </div>
      </div>
    );
  }

  const whatsappNumber = "+917454885599";
  const whatsappMessage = `Hello NextWebIT, I'm interested in the ${themeData.name} theme for my website!`;

  return (
    <>
      {/* Hero Section with Theme-Specific Design */}
      <section className={`relative ${themeData.hero.bgColor} ${themeData.hero.textColor} py-24 px-4 overflow-hidden`}>
        {/* Simplified background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <div className={`inline-flex items-center ${themeData.hero.textColor === 'text-white' ? 'bg-white/20' : 'bg-gray-900/10'} backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
            <FaPalette className="mr-2" />
            THEME PREVIEW
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {themeData.hero.heading}
          </h1>
          
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            {themeData.hero.subheading}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${themeData.hero.textColor === 'text-white' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105`}
            >
              Choose This Theme
              <FaArrowRight />
            </a>
            
            <Link 
              href="/themes"
              className="bg-transparent border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Other Themes
            </Link>
          </div>
        </div>
      </section>

      {/* Theme Features */}
      <section className={`py-20 px-4 ${themeData.style.bgSecondary}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${themeData.style.primary}`}>
              Why Choose <span className={themeData.style.accent}>{themeData.name}?</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${themeData.style.secondary}`}>
              {themeData.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <h3 className={`text-2xl font-bold mb-6 ${themeData.style.primary}`}>Key Features</h3>
              
              {themeData.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <FaCheckCircle className={`${themeData.style.accent} mr-4 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${themeData.style.primary}`}>{feature}</h4>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`p-8 rounded-2xl border ${themeData.style.border} bg-white/50`}>
              <h3 className={`text-2xl font-bold mb-6 ${themeData.style.primary}`}>Theme Highlights</h3>
              
              {themeData.sections.map((section, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <div className="text-3xl mb-4">{section.icon}</div>
                  <h4 className={`text-xl font-bold mb-3 ${themeData.style.primary}`}>{section.title}</h4>
                  <p className={`${themeData.style.secondary}`}>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Content Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${themeData.style.primary}`}>
              Content <span className={themeData.style.accent}>Showcase</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${themeData.style.secondary}`}>
              See how your content would look with this theme
            </p>
          </div>
          
          {/* Sample Services Section */}
          <div className={`mb-16 p-8 rounded-2xl border ${themeData.style.border} ${themeData.style.bgSecondary}`}>
            <h3 className={`text-2xl font-bold mb-6 ${themeData.style.primary}`}>Sample Services Section</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl border ${themeData.style.border} bg-white`}>
                <div className={`text-3xl ${themeData.style.accent} mb-4`}>💼</div>
                <h4 className={`font-bold text-lg mb-3 ${themeData.style.primary}`}>Business Websites</h4>
                <p className={themeData.style.secondary}>Professional websites that represent your brand and attract customers.</p>
              </div>
              
              <div className={`p-6 rounded-xl border ${themeData.style.border} bg-white`}>
                <div className={`text-3xl ${themeData.style.accent} mb-4`}>🛒</div>
                <h4 className={`font-bold text-lg mb-3 ${themeData.style.primary}`}>E-commerce Stores</h4>
                <p className={themeData.style.secondary}>Complete online stores with secure payments and inventory management.</p>
              </div>
              
              <div className={`p-6 rounded-xl border ${themeData.style.border} bg-white`}>
                <div className={`text-3xl ${themeData.style.accent} mb-4`}>📱</div>
                <h4 className={`font-bold text-lg mb-3 ${themeData.style.primary}`}>Mobile Optimization</h4>
                <p className={themeData.style.secondary}>Responsive designs that work perfectly on all devices.</p>
              </div>
            </div>
          </div>
          
          {/* Sample Testimonial */}
          <div className={`p-8 rounded-2xl ${themeData.style.bgSecondary} border ${themeData.style.border}`}>
            <div className="flex items-start">
              <div className={`text-4xl mr-6 ${themeData.style.accent}`}>"</div>
              <div>
                <p className={`text-xl italic mb-6 ${themeData.style.primary}`}>
                  This theme perfectly captures the essence of our brand. The design elements work harmoniously to create a memorable experience for our customers.
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${themeData.style.accent.replace('text', 'bg')} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                    A
                  </div>
                  <div>
                    <h4 className={`font-bold ${themeData.style.primary}`}>Arjun Sharma</h4>
                    <p className={themeData.style.secondary}>Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Benefits */}
      <section className={`py-20 px-4 ${themeData.style.bgSecondary}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${themeData.style.primary}`}>
              Business <span className={themeData.style.accent}>Benefits</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${themeData.style.secondary}`}>
              How this theme helps your business succeed online
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-2xl border ${themeData.style.border} bg-white`}>
              <FaLightbulb className={`text-4xl ${themeData.style.accent} mb-6`} />
              <h3 className={`text-xl font-bold mb-4 ${themeData.style.primary}`}>Brand Identity</h3>
              <p className={themeData.style.secondary}>Creates a strong, memorable identity that reflects your business values.</p>
            </div>
            
            <div className={`p-8 rounded-2xl border ${themeData.style.border} bg-white`}>
              <FaUsers className={`text-4xl ${themeData.style.accent} mb-6`} />
              <h3 className={`text-xl font-bold mb-4 ${themeData.style.primary}`}>Customer Engagement</h3>
              <p className={themeData.style.secondary}>Encourages visitors to explore and engage with your content.</p>
            </div>
            
            <div className={`p-8 rounded-2xl border ${themeData.style.border} bg-white`}>
              <FaRocket className={`text-4xl ${themeData.style.accent} mb-6`} />
              <h3 className={`text-xl font-bold mb-4 ${themeData.style.primary}`}>Competitive Edge</h3>
              <p className={themeData.style.secondary}>Sets you apart from competitors with distinctive design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${themeData.hero.bgColor} ${themeData.hero.textColor}`}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Ready to Build Your <span className={themeData.style.accent}>{themeData.name} Website?</span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Get a free consultation and see how this theme would look with your actual business content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${themeData.hero.textColor === 'text-white' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105`}
            >
              <FaHandshake className="text-2xl" />
              Choose This Theme
            </a>
            
            <Link 
              href="/themes"
              className="bg-transparent border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View All Themes
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto opacity-80">
            <div className="text-center">
              <div className="text-3xl font-bold">7-10</div>
              <div className="text-sm">Days Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50%</div>
              <div className="text-sm">Advance Payment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1 Year</div>
              <div className="text-sm">Free Domain</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}