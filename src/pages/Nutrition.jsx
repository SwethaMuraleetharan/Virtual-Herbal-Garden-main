import { useState } from 'react';
import { X, Volume2, Leaf, Sparkles, Heart, Shield, Zap } from 'lucide-react';

const plantsData = [
  {
    id: 1,
    name: "Moringa",
    image: "https://t3.ftcdn.net/jpg/03/12/95/48/360_F_312954833_Tl3uz9792SH0Sy0k7HuW5QdGL2vPNoGh.jpg",
    description: "Moringa is packed with essential nutrients like vitamins A, C, and E, calcium, iron, and potassium, making it a powerful antioxidant and anti-inflammatory herb. It helps boost the immune system, improve digestion, and support heart and bone health. Additionally, Moringa promotes healthy skin, hair, and boosts energy levels.",
    benefits: ["Immune System Boost", "Heart Health", "Antioxidant Rich", "Energy Enhancement"],
    category: "Superfood"
  },
  {
    id: 2,
    name: "Tulsi",
    image: "https://mtseedbank.in/wp-content/uploads/2024/08/cinnamon_basil_mtseedbank_001.jpg",
    description: "Basil is rich in vitamins A, C, and K, providing powerful antioxidant and anti-inflammatory benefits. It supports immune function, promotes healthy digestion, and helps manage stress. Additionally, basil has antibacterial properties that aid in fighting infections and improving skin health.",
    benefits: ["Stress Relief", "Antibacterial", "Digestive Health", "Immune Support"],
    category: "Sacred Herb"
  },
  {
    id: 3,
    name: "Mint",
    image: "https://cdn.britannica.com/46/139046-050-68C68E11/Peppermint.jpg",
    description: "Mint is rich in vitamins A, C, and antioxidants, offering anti-inflammatory and digestive benefits. It helps soothe indigestion, reduce nausea, and promote healthy skin. Mint also supports respiratory health by clearing nasal passages and improving breathing.",
    benefits: ["Digestive Aid", "Respiratory Health", "Anti-inflammatory", "Skin Care"],
    category: "Aromatic Herb"
  },
  {
    id: 4,
    name: "Hibiscus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8dJLpO-iDN46rHoIs2gX6aadKuDAirCZJA&s",
    description: "Hibiscus is rich in vitamin C, antioxidants, and minerals like calcium and iron, which support immune health and skin vitality. It helps lower blood pressure, improve cholesterol levels, and promote heart health. Additionally, hibiscus has anti-inflammatory properties that aid in digestion and skin rejuvenation.",
    benefits: ["Heart Health", "Blood Pressure", "Antioxidant Rich", "Skin Rejuvenation"],
    category: "Flowering Plant"
  },
  {
    id: 5,
    name: "Turmeric",
    image: "https://t3.ftcdn.net/jpg/03/30/30/94/360_F_330309413_1GCy01jOT01AQWNVLoMQSluhmmXNSKFJ.jpg",
    description: "Turmeric is rich in curcumin, a powerful antioxidant with anti-inflammatory properties that support joint and heart health. It boosts the immune system, aids in digestion, and promotes skin health by reducing acne and pigmentation. Additionally, turmeric may help improve brain function and reduce the risk of chronic diseases.",
    benefits: ["Anti-inflammatory", "Joint Health", "Brain Function", "Skin Health"],
    category: "Golden Spice"
  },
  {
    id: 6,
    name: "Ashwagandha",
    image: "https://rukminim2.flixcart.com/image/720/864/xif0q/plant-seed/h/n/c/55-ashvagandha-seeds-ashwagandha-plants-seeds-wequality-original-imagp8yn7mz2wufz.jpeg?q=60&crop=false",
    description: "Ashwagandha is rich in antioxidants and bioactive compounds that help reduce stress and improve mood. It supports immune health, boosts energy levels, and enhances stamina. Additionally, it promotes mental clarity, cognitive function, and may aid in balancing hormones.",
    benefits: ["Stress Reduction", "Energy Boost", "Mental Clarity", "Hormone Balance"],
    category: "Adaptogen"
  },
  {
    id: 7,
    name: "Fenugreek",
    image: "https://media.istockphoto.com/id/1285888022/photo/fenugreek-seeds-and-plant-on-a-old-wooden-background.jpg?s=612x612&w=0&k=20&c=uRUQPgQtEevgbrh4H-Msh5lv7HibigXNIQd9fqfdkRk=",
    description: "Fenugreek is rich in fiber, iron, and magnesium, which support digestive health and regulate blood sugar levels. It helps promote milk production in breastfeeding mothers and improves cholesterol levels. Additionally, fenugreek has antioxidant properties contribute to healthy skin and hair.",
    benefits: ["Blood Sugar Control", "Digestive Health", "Lactation Support", "Cholesterol Management"],
    category: "Seed Herb"
  },
  {
    id: 8,
    name: "Curry Leaves",
    image: "https://media.istockphoto.com/id/1087510858/photo/curry-leaves.jpg?s=612x612&w=0&k=20&c=ix42iQk5-_Ia4O1BHVWYiCGBEHKQ5jTdmMGBDNB3YyI=",
    description: "Curry leaves are rich in vitamins A, C, and E, as well as iron and calcium, promoting healthy skin, hair, and bone health. They aid in digestion, improve liver function, and help regulate blood sugar levels. Additionally, curry leaves possess antioxidant and anti-inflammatory properties that boost overall immunity.",
    benefits: ["Liver Function", "Hair Health", "Blood Sugar", "Immunity Boost"],
    category: "Culinary Medicine"
  }
];

export default function Nutrition() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (plant) => {
    setSelectedPlant(plant);
    setIsModalOpen(true);
    playVoice(plant.name);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlant(null);
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

  const getCategoryColor = (category) => {
    const colors = {
      "Superfood": "from-green-500 to-emerald-600",
      "Sacred Herb": "from-purple-500 to-violet-600",
      "Aromatic Herb": "from-blue-500 to-cyan-600",
      "Flowering Plant": "from-pink-500 to-rose-600",
      "Golden Spice": "from-yellow-500 to-orange-600",
      "Adaptogen": "from-indigo-500 to-purple-600",
      "Seed Herb": "from-amber-500 to-yellow-600",
      "Culinary Medicine": "from-teal-500 to-green-600"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-green-200 to-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-emerald-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-lime-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-35 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Floating Nutrition Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Heart, Shield, Zap, Leaf].map((Icon, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <Icon className="w-8 h-8 text-green-600" />
          </div>
        ))}
      </div>

      <div className="relative z-10 px-4 py-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-r from-lime-400 via-green-500 to-emerald-600 rounded-full mb-8 shadow-2xl animate-pulse">
            <Leaf className="w-14 h-14 text-white animate-bounce" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent mb-6 tracking-tight">
            Nutritional Plants
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover nature's pharmacy with nutrient-dense plants that nourish your body and boost your health naturally
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-green-600">
            <div className="flex items-center">
              <Heart className="w-6 h-6 mr-2 text-red-500" />
              <span className="text-sm font-medium">Heart Health</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-6 h-6 mr-2 text-blue-500" />
              <span className="text-sm font-medium">Immune Support</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-500" />
              <span className="text-sm font-medium">Energy Boost</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="w-6 h-6 mr-2 animate-spin" />
              <span className="text-sm font-medium">Click to Learn More</span>
            </div>
          </div>
        </div>

        {/* Plants Gallery */}
        <div className="max-width-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plantsData.map((plant, index) => (
              <div
                key={plant.id}
                className="group cursor-pointer transform transition-all duration-700 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => openModal(plant)}
              >
                <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/40 hover:shadow-2xl hover:bg-white transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(plant.category)} text-white text-sm font-bold rounded-full shadow-lg`}>
                        {plant.category}
                      </span>
                    </div>

                    {/* Floating Benefits */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex flex-col space-y-2">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <Heart className="w-5 h-5 text-red-500" />
                        </div>
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <Shield className="w-5 h-5 text-blue-500" />
                        </div>
                      </div>
                    </div>

                    {/* Plant Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">{plant.name}</h3>
                      <p className="text-green-200 text-sm">Click to explore benefits</p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {plant.name}
                    </h3>
                    
                    {/* Benefits Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {plant.benefits.slice(0, 2).map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full border border-green-200"
                        >
                          {benefit}
                        </span>
                      ))}
                      {plant.benefits.length > 2 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          +{plant.benefits.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Description Preview */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {plant.description.substring(0, 120)}...
                    </p>

                    {/* Explore Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-bold text-sm group-hover:text-green-700 transition-colors duration-300">
                        Explore Benefits
                      </span>
                      <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(plant.category)} rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && selectedPlant && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl max-width-5xl w-full max-h-[95vh] overflow-y-auto border border-white/20 shadow-2xl animate-slideUp">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg group"
              >
                <X className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
              </button>

              {/* Modal Content */}
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image Section */}
                <div className="relative">
                  <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl relative">
                    <img
                      src={selectedPlant.image}
                      alt={selectedPlant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-6 py-3 bg-gradient-to-r ${getCategoryColor(selectedPlant.category)} text-white font-bold rounded-full shadow-lg text-lg`}>
                      {selectedPlant.category}
                    </span>
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{selectedPlant.benefits.length}</div>
                      <div className="text-sm text-gray-600 font-medium">Key Benefits</div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                      {selectedPlant.name}
                    </h2>
                    <p className="text-green-600 font-bold text-xl">
                      {selectedPlant.category}
                    </p>
                  </div>

                  {/* All Benefits */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                      <Heart className="w-6 h-6 text-red-500 mr-2" />
                      Health Benefits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedPlant.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                          <span className="text-green-800 font-medium text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                      <Leaf className="w-6 h-6 text-green-500 mr-2" />
                      Nutritional Profile
                    </h3>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-2xl border border-gray-100">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {selectedPlant.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => playVoice(selectedPlant.description)}
                      className={`flex-1 bg-gradient-to-r ${getCategoryColor(selectedPlant.category)} text-white py-4 px-6 rounded-2xl hover:shadow-lg transition-all duration-300 font-bold text-sm flex items-center justify-center group`}
                    >
                      <Volume2 className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Read Aloud
                    </button>
                    <button
                      onClick={closeModal}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 px-6 rounded-2xl transition-colors duration-300 font-bold text-sm"
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
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}