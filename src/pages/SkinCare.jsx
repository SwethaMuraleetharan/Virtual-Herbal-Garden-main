import { useState } from 'react';
import { X, Volume2, Leaf, Sparkles, Eye } from 'lucide-react';

const plantsData = [
  {
    id: 1,
    name: "Neem",
    image: "https://manjariwellness.in/images/neem.jpg",
    description: "Anti-Acne Properties: Its antibacterial properties help reduce acne and prevent breakouts. Skin Purification: Neem cleanses the skin by removing toxins and impurities. Hydration: It soothes dry skin by locking in moisture.",
    benefits: ["Anti-bacterial", "Acne prevention", "Skin purification", "Moisturizing"]
  },
  {
    id: 2,
    name: "Aloe Vera",
    image: "https://images.ctfassets.net/mgaihfszrtka/7p8kC54ROraaIO0iItVBna/b31aacca043a919ec87a9b35b1758413/closeupaloeveraplantoutd_793774.jpg",
    description: "Aloe vera is a natural moisturizer that hydrates and soothes the skin, making it ideal for dry or irritated skin. Its anti-inflammatory properties help reduce redness, acne, and sunburn. Rich in antioxidants, aloe vera promotes healing and enhances skin elasticity, giving a youthful glow.",
    benefits: ["Natural moisturizer", "Anti-inflammatory", "Sunburn relief", "Anti-aging"]
  },
  {
    id: 3,
    name: "Turmeric",
    image: "https://t3.ftcdn.net/jpg/03/30/30/94/360_F_330309413_1GCy01jOT01AQWNVLoMQSluhmmXNSKFJ.jpg",
    description: "Turmeric has anti-inflammatory and antibacterial properties that help reduce acne and soothe irritated skin. Its antioxidants combat signs of aging and improve skin tone, giving a natural glow. Turmeric also aids in reducing dark spots and healing wounds, promoting overall skin health.",
    benefits: ["Anti-inflammatory", "Antibacterial", "Natural glow", "Dark spot reduction"]
  },
  {
    id: 4,
    name: "Holy Basil",
    image: "https://mtseedbank.in/wp-content/uploads/2024/08/cinnamon_basil_mtseedbank_001.jpg",
    description: "Tulsi (Holy Basil) purifies the skin by removing toxins and preventing acne with its antibacterial properties. It soothes irritation, reduces redness, and protects against infections. Rich in antioxidants, tulsi also delays signs of aging, promoting healthy and radiant skin.",
    benefits: ["Skin purification", "Antibacterial", "Anti-aging", "Infection protection"]
  },
  {
    id: 5,
    name: "Sandalwood",
    image: "https://t4.ftcdn.net/jpg/02/65/33/37/360_F_265333795_UBMny6xDQ3jUDFUQWri8N5WlcUTsV1Hq.jpg",
    description: "Sandalwood is renowned for its skin-soothing properties, helping to calm irritation and reduce redness. It brightens the complexion by fading dark spots and blemishes. Additionally, its anti-inflammatory and antimicrobial properties make it effective for treating acne and promoting clear, healthy skin.",
    benefits: ["Skin soothing", "Brightening", "Anti-inflammatory", "Antimicrobial"]
  },
  {
    id: 6,
    name: "Green Tea",
    image: "https://media.istockphoto.com/id/1298140464/photo/close-up-fresh-tea-leaves.jpg?s=612x612&w=0&k=20&c=w4jY69WCY5kqfPD10dze4-EDPXfBnMvIjI-fy-5MXBU=",
    description: "Green tea is rich in antioxidants that combat free radicals, reducing signs of aging like wrinkles and fine lines. Its anti-inflammatory properties soothe irritated skin and help manage acne. Additionally, green tea helps control excess oil and improves skin elasticity for a youthful glow.",
    benefits: ["Antioxidant-rich", "Anti-aging", "Oil control", "Skin elasticity"]
  },
  {
    id: 7,
    name: "Manjistha",
    image: "https://www.planetayurveda.com/pa-wp-images/manjistha-planet.jpg",
    description: "Manjistha is a powerful Ayurvedic herb known for its ability to purify the blood, promoting clear and radiant skin. It helps reduce pigmentation, dark spots, and acne scars, enhancing skin tone. Additionally, its anti-inflammatory and antibacterial properties soothe irritated skin and prevent breakouts.",
    benefits: ["Blood purification", "Pigmentation reduction", "Acne scar healing", "Skin tone enhancement"]
  },
  {
    id: 8,
    name: "Vetiver",
    image: "https://manekancor.com/wp-content/uploads/2020/11/Vetiver.jpg",
    description: "Vetiver, known for its cooling properties, soothes irritated skin and reduces inflammation. It deeply hydrates and nourishes, making it ideal for dry and aging skin. Additionally, its antibacterial properties help combat acne while promoting a smooth and rejuvenated complexion.",
    benefits: ["Cooling properties", "Deep hydration", "Anti-aging", "Antibacterial"]
  }
];

export default function HerbalPlantsGallery() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-3000"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 shadow-2xl">
          <Leaf className="w-10 h-10 text-white animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 font-serif">
          Skincare Herbs
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover the natural beauty secrets of ancient herbs and their amazing skincare benefits
        </p>
        <div className="flex items-center justify-center mt-4 text-emerald-600">
          <Sparkles className="w-5 h-5 mr-2 animate-spin" />
          <span className="text-sm font-medium">Click any herb to explore its benefits</span>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {plantsData.map((plant, index) => (
            <div
              key={plant.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => openModal(plant)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
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
                    {plant.name}
                  </h3>
                  
                  {/* Benefits Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {plant.benefits.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full"
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
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {plant.description.substring(0, 100)}...
                  </p>

                  {/* Read More Button */}
                  <div className="mt-4 flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700">
                    <span>Learn More</span>
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
      {isModalOpen && selectedPlant && (
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
                    src={selectedPlant.image}
                    alt={selectedPlant.name}
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                      {selectedPlant.name}
                    </h2>
                    <button
                      onClick={() => playVoice(selectedPlant.name)}
                      className="inline-flex items-center px-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-full text-sm font-medium transition-colors duration-300"
                    >
                      <Volume2 className="w-4 h-4 mr-2" />
                      Pronounce
                    </button>
                  </div>

                  {/* All Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Key Benefits:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedPlant.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-3 bg-emerald-50 rounded-xl border border-emerald-100"
                        >
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                          <span className="text-emerald-700 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Description:</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {selectedPlant.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => playVoice(selectedPlant.description)}
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-6 rounded-2xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 font-semibold text-sm flex items-center justify-center"
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
    </div>
  );
}