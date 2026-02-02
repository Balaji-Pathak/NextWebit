import { FaPalette, FaPaintBrush, FaBriefcase, FaCrown, FaLightbulb, FaGem, FaBold, FaHistory, FaArrowRight } from 'react-icons/fa';
import Link from "next/link";

export default function ThemesPage() {
  const themes = [
    {
      id: 1,
      name: "Minimalist",
      slug: "minimalist",
      tagline: "Clean & Simple Design",
      description: "Clean design with whitespace, simple typography, and uncluttered layout. Perfect for businesses wanting a straightforward online presence.",
      icon: <FaPalette className="text-gray-600" />,
      color: "from-gray-100 to-gray-50",
      textColor: "text-gray-800",
      borderColor: "border-gray-200",
      features: ["Clean whitespace", "Simple typography", "Uncluttered layout", "Fast loading"]
    },
    {
      id: 2,
      name: "Modern",
      slug: "modern",
      tagline: "Contemporary & Bold",
      description: "Latest design trends with gradients, card layouts, and strong visual elements. Great for businesses wanting a fresh, updated look.",
      icon: <FaPaintBrush className="text-blue-600" />,
      color: "from-blue-100 to-blue-50",
      textColor: "text-blue-900",
      borderColor: "border-blue-200",
      features: ["Bold gradients", "Card layouts", "Modern animations", "Contemporary style"]
    },
    {
      id: 3,
      name: "Professional",
      slug: "professional",
      tagline: "Trust & Corporate Style",
      description: "Structured layout with professional colors and clear hierarchy. Ideal for businesses that want to establish trust and credibility.",
      icon: <FaBriefcase className="text-green-600" />,
      color: "from-green-100 to-green-50",
      textColor: "text-green-900",
      borderColor: "border-green-200",
      features: ["Structured layout", "Trust colors", "Corporate feel", "Clear hierarchy"]
    },
    {
      id: 4,
      name: "Dark Premium",
      slug: "dark-premium",
      tagline: "Luxury & Exclusive Feel",
      description: "Dark background with high contrast and premium styling. Creates an exclusive, high-end feel for luxury brands.",
      icon: <FaCrown className="text-purple-600" />,
      color: "from-purple-100 to-purple-50",
      textColor: "text-purple-900",
      borderColor: "border-purple-200",
      features: ["Dark mode", "High contrast", "Luxury feel", "Exclusive look"]
    },
    {
      id: 5,
      name: "Creative",
      slug: "creative",
      tagline: "Unique & Expressive",
      description: "Innovative layouts with animations and expressive visual elements. Perfect for creative businesses wanting to stand out.",
      icon: <FaLightbulb className="text-yellow-600" />,
      color: "from-yellow-100 to-yellow-50",
      textColor: "text-yellow-900",
      borderColor: "border-yellow-200",
      features: ["Innovative layout", "Animations", "Expressive visuals", "Unique elements"]
    },
    {
      id: 6,
      name: "Elegant",
      slug: "elegant",
      tagline: "Classy & Refined Design",
      description: "Soft colors with refined typography and calm spacing. Creates a classy, sophisticated impression.",
      icon: <FaGem className="text-pink-600" />,
      color: "from-pink-100 to-pink-50",
      textColor: "text-pink-900",
      borderColor: "border-pink-200",
      features: ["Soft colors", "Refined typography", "Calm spacing", "Classy elements"]
    },
    {
      id: 7,
      name: "Bold",
      slug: "bold",
      tagline: "Eye-Catching & Dynamic",
      description: "Large typography with strong colors and attention-grabbing elements. Perfect for brands wanting maximum visibility.",
      icon: <FaBold className="text-red-600" />,
      color: "from-red-100 to-red-50",
      textColor: "text-red-900",
      borderColor: "border-red-200",
      features: ["Large typography", "Strong colors", "Attention-grabbing", "High impact"]
    },
    {
      id: 8,
      name: "Classic",
      slug: "classic",
      tagline: "Traditional & Reliable",
      description: "Traditional layout with familiar patterns and reliable design. Comfortable choice for traditional businesses.",
      icon: <FaHistory className="text-indigo-600" />,
      color: "from-indigo-100 to-indigo-50",
      textColor: "text-indigo-900",
      borderColor: "border-indigo-200",
      features: ["Traditional layout", "Familiar patterns", "Reliable design", "Time-tested"]
    }
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Choose Your <span className="text-yellow-300">Website Theme</span>
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Select from 8 professionally designed themes. We'll show you live samples during our store visit.
          </p>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🎨 Personal recommendation during store visit
          </div>
        </div>
      </section>

      {/* All Themes Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎨 AVAILABLE THEMES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Browse Our <span className="text-blue-600">Theme Collection</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              8 professionally designed themes to match your business personality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {themes.map((theme) => (
              <div key={theme.id} className={`bg-gradient-to-br ${theme.color} border ${theme.borderColor} rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500`}>
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-4xl">
                      {theme.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${theme.textColor} mb-2 text-center`}>{theme.name}</h3>
                  <p className="text-lg font-medium text-gray-700 mb-4 text-center">{theme.tagline}</p>
                  
                  <p className="text-gray-600 mb-6 text-center">{theme.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {theme.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/themes/${theme.slug}`}>
                  <button className={`w-full ${theme.textColor.replace('900', '600')} border ${theme.borderColor} px-6 py-3 rounded-xl font-bold hover:bg-white/50 transition-all duration-300 flex items-center justify-center gap-2`}>
                    View Sample
                    <FaArrowRight />
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Selection Guide */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              How to <span className="text-yellow-300">Choose Your Theme?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-3xl mb-6">🎯</div>
                <h3 className="text-xl font-bold mb-4">Step 1: Business Assessment</h3>
                <p className="text-gray-300">
                  We discuss your business type, target customers, and brand personality during our store visit.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-3xl mb-6">🖥️</div>
                <h3 className="text-xl font-bold mb-4">Step 2: Live Theme Demos</h3>
                <p className="text-gray-300">
                  We show you actual website samples on our laptop for different themes that match your business.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-3xl mb-6">✅</div>
                <h3 className="text-xl font-bold mb-4">Step 3: Final Selection</h3>
                <p className="text-gray-300">
                  We help you choose the best theme based on your goals, budget, and target audience.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">We Show You Live Demos During Store Visit</h3>
              <p className="text-lg mb-8">
                Don't worry about choosing now. We'll bring our laptop, show you live theme samples, and recommend the best one for your specific business.
              </p>
              <a 
                href="https://wa.me/914374377473?text=Hello%20NextWebIT,%20I'd%20like%20to%20see%20theme%20samples!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                <span>Schedule Store Visit to See Demos</span>
                <FaArrowRight className="ml-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Comparison */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Theme <span className="text-blue-600">Comparison</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Quick overview of different theme styles
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-6 text-left font-bold text-gray-800">Theme</th>
                  <th className="p-6 text-left font-bold text-gray-800">Style</th>
                  <th className="p-6 text-left font-bold text-gray-800">Best For</th>
                  <th className="p-6 text-left font-bold text-gray-800">Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-6 font-bold text-gray-800">Minimalist</td>
                  <td className="p-6 text-gray-600">Clean & Simple</td>
                  <td className="p-6 text-gray-600">All Business Types</td>
                  <td className="p-6 text-gray-600">Whitespace, Simple Typography</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-6 font-bold text-gray-800">Modern</td>
                  <td className="p-6 text-gray-600">Contemporary</td>
                  <td className="p-6 text-gray-600">Startups, Tech</td>
                  <td className="p-6 text-gray-600">Gradients, Card Layouts</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-6 font-bold text-gray-800">Professional</td>
                  <td className="p-6 text-gray-600">Corporate</td>
                  <td className="p-6 text-gray-600">Services, Corporates</td>
                  <td className="p-6 text-gray-600">Structured, Trust Colors</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-6 font-bold text-gray-800">Dark Premium</td>
                  <td className="p-6 text-gray-600">Luxury</td>
                  <td className="p-6 text-gray-600">Premium Brands</td>
                  <td className="p-6 text-gray-600">Dark Background, High Contrast</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-6 font-bold text-gray-800">Creative</td>
                  <td className="p-6 text-gray-600">Expressive</td>
                  <td className="p-6 text-gray-600">Creative Businesses</td>
                  <td className="p-6 text-gray-600">Animations, Unique Layouts</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-6 font-bold text-gray-800">Elegant</td>
                  <td className="p-6 text-gray-600">Refined</td>
                  <td className="p-6 text-gray-600">Lifestyle, Fashion</td>
                  <td className="p-6 text-gray-600">Soft Colors, Classy Elements</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-6 font-bold text-gray-800">Bold</td>
                  <td className="p-6 text-gray-600">Attention-Grabbing</td>
                  <td className="p-6 text-gray-600">Entertainment, Events</td>
                  <td className="p-6 text-gray-600">Large Typography, Strong Colors</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-6 font-bold text-gray-800">Classic</td>
                  <td className="p-6 text-gray-600">Traditional</td>
                  <td className="p-6 text-gray-600">Traditional Businesses</td>
                  <td className="p-6 text-gray-600">Familiar Patterns, Reliable</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              <span className="font-bold text-blue-600">Note:</span> We'll show you live website samples during our store visit. You can see exactly how each theme looks and works.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to <span className="text-yellow-300">See Theme Demos?</span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Schedule a free store visit. We'll bring our laptop and show you live theme samples.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/914374377473?text=Hello%20NextWebIT,%20I'd%20like%20to%20see%20theme%20samples!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
            >
              <span>WhatsApp to Schedule Visit</span>
              <FaArrowRight />
            </a>
            <a 
              href="/about"
              className="bg-transparent border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Learn About Our Process
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">8</div>
              <div className="text-sm opacity-80">Themes Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Live</div>
              <div className="text-sm opacity-80">Demos During Visit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Free</div>
              <div className="text-sm opacity-80">Store Visit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">7-10</div>
              <div className="text-sm opacity-80">Days Delivery</div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}