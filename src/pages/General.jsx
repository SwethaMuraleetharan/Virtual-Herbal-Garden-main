import { useState } from 'react';
import { X, Volume2, Sparkles, Eye, Leaf } from 'lucide-react';

const herbalPlantsData = [
  {
    id: 1,
    name: "Banana Flower",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7e1Rpa7rc3pCugVzrq1g1G16ehq5d85nqyg&s",
    description: "Rich in fiber, magnesium, and potassium. Improves digestion and reduces anemia. This tropical flower is packed with essential nutrients that support overall digestive health and help maintain healthy blood levels.",
    benefits: ["Rich in fiber", "High magnesium", "Improves digestion", "Reduces anemia"]
  },
  {
    id: 2,
    name: "Indian Blackberry",
    image: "https://preservawellness.com/cdn/shop/articles/indian_blackberry.jpg?v=1667977491",
    description: "High in vitamin C, iron, and antioxidants. Regulates blood sugar and boosts immunity. These dark purple berries are a powerhouse of nutrients that help maintain healthy glucose levels and strengthen the immune system.",
    benefits: ["High vitamin C", "Rich in iron", "Regulates blood sugar", "Boosts immunity"]
  },
  {
    id: 3,
    name: "Cardamom",
    image: "https://plantskingdom.in/cdn/shop/files/Greencardamomplant-2.jpg?v=1703504916&width=1445",
    description: "Contains essential oils, vitamins, and minerals. Aids digestion and detoxification. Known as the 'Queen of Spices', cardamom helps cleanse the body of toxins while promoting healthy digestive function.",
    benefits: ["Essential oils", "Aids digestion", "Detoxification", "Rich in minerals"]
  },
  {
    id: 4,
    name: "Clove",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-sapling/m/p/g/no-annual-yes-labongo-masla-plants-small-1-grow-bag-corofitam-original-imahyzfgpcx2rsrr.jpeg?q=90&crop=false",
    description: "Rich in manganese, antioxidants, and eugenol. Supports digestion and reduces inflammation. These aromatic flower buds contain powerful compounds that help soothe digestive issues and fight inflammation throughout the body.",
    benefits: ["Rich in manganese", "High antioxidants", "Supports digestion", "Reduces inflammation"]
  },
  {
    id: 5,
    name: "Guduchi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvl_qWhPVzhJ3CI9EptF7gthrDrYtIz-kQA&s",
    description: "Supports immunity, acts as an anti-inflammatory, and provides essential minerals. This climbing shrub is revered in traditional medicine for its ability to enhance the body's natural defense mechanisms and reduce inflammation.",
    benefits: ["Supports immunity", "Anti-inflammatory", "Essential minerals", "Natural defense"]
  },
  {
    id: 6,
    name: "Saffron",
    image: "https://cdn.shopify.com/s/files/1/0620/2749/7724/files/saffron-crocus-shk-2.jpg?v=1717432444",
    description: "Contains carotenoids, iron, and magnesium. Acts as a mood enhancer and improves digestion. This golden spice is one of the world's most precious herbs, known for its ability to uplift mood and support digestive wellness.",
    benefits: ["Contains carotenoids", "Mood enhancer", "Improves digestion", "Rich in iron"]
  },
  {
    id: 7,
    name: "Manjistha",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBPAJ-LLgRL61MCvW-K2RnHdMTgt_jrx-Sw&s",
    description: "High in calcium, fiber, and essential oils. Supports bone health and digestion. This climbing herb is traditionally used for blood purification and maintaining healthy skin while supporting overall digestive function.",
    benefits: ["High in calcium", "Rich in fiber", "Supports bone health", "Aids digestion"]
  },
  {
    id: 8,
    name: "Indian Sorrel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQU-KnXlQptDJePVB5Dg25DI-YVXikVnXUpw&s",
    description: "Rich in vitamin C, potassium, and oxalates. Boosts immunity and supports digestive health. These tangy leaves are packed with nutrients that help strengthen the immune system and promote healthy digestion.",
    benefits: ["Rich in vitamin C", "High potassium", "Boosts immunity", "Digestive health"]
  }
];

export default function GeneralWellness() {
  const [selectedHerb, setSelectedHerb] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (herb) => {
    setSelectedHerb(herb);
    setIsModalOpen(true);
    playVoice(herb.name);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHerb(null);
  };

  const playVoice = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US";
      speech.rate = 0.8;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 shadow-2xl">
          <Leaf className="w-10 h-10 text-white animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 font-serif">
          General Wellness
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover nature's pharmacy with these powerful herbal remedies for holistic health and wellness
        </p>
        <div className="flex items-center justify-center mt-4 text-emerald-600">
          <Sparkles className="w-5 h-5 mr-2 animate-spin" />
          <span className="text-sm font-medium">Click any herb to explore its wellness benefits</span>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {herbalPlantsData.map((herb, index) => (
            <div
              key={herb.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => openModal(herb)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {herb.name}
                  </h3>
                  
                  {/* Benefits Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {herb.benefits.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs font-medium rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                    {herb.benefits.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{herb.benefits.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Description Preview */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {herb.description.substring(0, 100)}...
                  </p>

                  {/* Read More Button */}
                  <div className="mt-4 flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700">
                    <span>Discover Benefits</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedHerb && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl animate-slideUp">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300 shadow-lg"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image Section */}
                <div className="relative h-80 md:h-96">
                  <img
                    src={selectedHerb.image}
                    alt={selectedHerb.name}
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                      {selectedHerb.name}
                    </h2>
                    <button
                      onClick={() => playVoice(selectedHerb.name)}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 text-green-700 rounded-full text-sm font-medium transition-colors duration-300"
                    >
                      <Volume2 className="w-4 h-4 mr-2" />
                      Pronounce
                    </button>
                  </div>

                  {/* All Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Wellness Benefits:</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedHerb.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></div>
                          <span className="text-green-700 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Detailed Benefits:</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {selectedHerb.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => playVoice(selectedHerb.description)}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold text-sm flex items-center justify-center"
                    >
                      <Volume2 className="w-4 h-4 mr-2" />
                      Read Aloud
                    </button>
                    <button
                      onClick={closeModal}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-2xl transition-colors duration-300 font-semibold text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </div>
  );
}