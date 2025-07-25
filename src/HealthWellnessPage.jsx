import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const HealthWellnessPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      image: "/assets/garden_bg.jpeg",
      title: "Your Curiosity + Our Herbal Wisdom = A Healthier You",
      description: "Explore the range of medicinal plants",
    },
    {
      image: "/assets/remedies.jpg",
      title: "Ancient Remedies for Modern Health",
      description: "Discover the secrets of Ayurveda",
    },
    {
      image: "/assets/nutrition.jpg",
      title: "Nourish Your Body and Soul",
      description: "Experience the benefits of balanced nutrition",
    },
  ];

  const categories = [
    { 
      name: "Skin Care", 
      url: "/skin", 
      logo: "https://img.freepik.com/premium-vector/portrait-girl-cleaning-facial-skin-with-foam-step-daily-cleansing-routine_88272-8318.jpg?semt=ais_hybrid",
      color: "from-pink-400 to-rose-500",
      description: "Natural skincare solutions"
    },
    { 
      name: "Hair Care", 
      url: "/hair", 
      logo: "https://clipart-library.com/img/1621871.jpg",
      color: "from-purple-400 to-indigo-500",
      description: "Herbal hair treatments"
    },
    { 
      name: "Cultivation", 
      url: "/cultivation", 
      logo: "https://thedailytexan.com/wp-content/uploads/2018/11/Aztec_1101_LaurenIbanez301Aztec-900x600.jpg",
      color: "from-amber-400 to-orange-500",
      description: "Growing wisdom & history"
    },
    { 
      name: "Nutrition", 
      url: "/nutrition", 
      logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1fb996e4-2328-46dd-b5f5-bbba631e0806_1927x1943.jpeg",
      color: "from-emerald-400 to-green-500",
      description: "Nutritional balance"
    },
    { 
      name: "General Wellness", 
      url: "/generalwellness", 
      logo: "https://www.pngall.com/wp-content/uploads/15/Meditate-PNG-Images-HD.png",
      color: "from-teal-400 to-cyan-500",
      description: "Holistic wellbeing"
    },
  ];

  const ingredients = [
    { 
      name: "Amla", 
      image: "https://www.shutterstock.com/image-photo/indian-gooseberry-fruits-amla-phyllanthus-600nw-1818688856.jpg",
      benefit: "Vitamin C Powerhouse"
    },
    { 
      name: "Tulsi", 
      image: "https://t3.ftcdn.net/jpg/02/63/84/64/360_F_263846480_zQ9YO4y7zkUE5q8d1RD20h8SgtrRBoV0.jpg",
      benefit: "Sacred Healing Herb"
    },
    { 
      name: "Neem", 
      image: "https://t3.ftcdn.net/jpg/04/09/16/02/360_F_409160229_cgsY3FzQce1luJK7wASQ1xy1Ax4wtsdL.jpg",
      benefit: "Natural Purifier"
    },
    { 
      name: "Aloe Vera", 
      image: "https://media.istockphoto.com/id/1314139105/photo/organic-aloe-vera-fresh-leaf-isolated.jpg?s=612x612&w=0&k=20&c=mEwwxItAzUfMdUiwNJPl3i_g_amBSCp24VGpfuiRCQ4=",
      benefit: "Soothing Miracle"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-screen">
      {/* Floating Plant Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-20 h-20 opacity-10">
          <Leaf className="w-full h-full text-green-600 animate-pulse" />
        </div>
        <div className="absolute top-32 right-16 w-16 h-16 opacity-10 rotate-45">
          <Leaf className="w-full h-full text-emerald-600 animate-bounce" />
        </div>
        <div className="absolute bottom-20 left-16 w-24 h-24 opacity-10 -rotate-12">
          <Leaf className="w-full h-full text-green-500 animate-pulse" />
        </div>
        <div className="absolute bottom-32 right-10 w-18 h-18 opacity-10 rotate-12">
          <Leaf className="w-full h-full text-teal-600" />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-20 bg-white/80 backdrop-blur-md shadow-lg border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Digital Herbarium
                </h1>
                <p className="text-xs text-gray-500">Natural Wellness Solutions</p>
              </div>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8 text-gray-700">
                <li><a href="/" className="hover:text-green-600 transition-colors duration-300 font-medium">Home</a></li>
                <li><a href="/about" className="hover:text-green-600 transition-colors duration-300 font-medium">About Us</a></li>
                <li><a href="/quiz" className="hover:text-green-600 transition-colors duration-300 font-medium">Quiz</a></li>
                <li><a href="/contact" className="hover:text-green-600 transition-colors duration-300 font-medium">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <div className="relative z-10 h-[60vh] md:h-[70vh] overflow-hidden rounded-b-3xl mx-4 mt-4 shadow-2xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 transform ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
              <div className="flex items-center h-full">
                <div className="max-w-2xl mx-auto px-8 text-white">
                  <h2 className={`text-3xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {slide.title}
                  </h2>
                  <p className={`text-xl md:text-2xl mb-8 transform transition-all duration-1000 delay-300 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {slide.description}
                  </p>
                  <div className={`transform transition-all duration-1000 delay-500 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                      Discover Nature's Healing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ChevronLeft size={24} className="text-green-600" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ChevronRight size={24} className="text-green-600" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore Our 
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Natural Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the power of nature through our carefully curated wellness categories, 
            each designed to nurture different aspects of your health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={category.url} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.logo}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-medium text-sm transform group-hover:scale-105 transition-transform duration-300`}>
                    Explore Now
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="relative z-10 bg-gradient-to-r from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nature's Finest
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Ingredients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What's on the inside is what matters the most. Discover the powerful natural ingredients 
              that make our wellness solutions extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={ingredient.image} 
                    alt={ingredient.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{ingredient.benefit}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {ingredient.name}
                  </h3>
                  <p className="text-green-600 font-medium text-sm">
                    {ingredient.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">HerbalWise</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Connecting you with nature's wisdom for holistic health and wellness. 
                Your journey to natural healing starts here.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-green-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">123 Health Street, Wellness City</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">info@herbalwise.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-green-400">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-300">About Us</a></li>
                <li><a href="/ayurveda" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Ayurvedic Practices</a></li>
                <li><a href="/consultation" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Free Consultation</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Health Blog</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 HerbalWise. All rights reserved. | Nurturing wellness through nature's wisdom.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HealthWellnessPage;