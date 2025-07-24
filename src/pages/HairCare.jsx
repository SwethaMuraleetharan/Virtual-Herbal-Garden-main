import { useState } from 'react';
import { X, Volume2, Sparkles, Eye, Heart } from 'lucide-react';

const hairCareHerbsData = [
  {
    id: 1,
    name: "Amla",
    image: "https://5.imimg.com/data5/JH/HU/LK/SELLER-30208486/amla-plant.jpg",
    description: "Amla, rich in vitamin C and antioxidants, strengthens hair follicles, reducing hair fall and promoting growth. It conditions the scalp, prevents dandruff, and enhances shine. Regular use of amla helps delay premature graying, keeping hair healthy and vibrant.",
    benefits: ["Rich in Vitamin C", "Reduces hair fall", "Prevents dandruff", "Delays graying"]
  },
  {
    id: 2,
    name: "Shikakai",
    image: "https://nepaldesk.com/sites/default/files/styles/content_image_display_/public/2023-06/Shikakai%20%28Khair%29%20-%20The%20Acacia%20Concinna.jpg?itok=4cDeuADp",
    description: "Shikakai is a natural cleanser that gently removes dirt and oil from the scalp without stripping natural oils. It promotes hair growth by strengthening hair follicles and reducing dandruff. Shikakai also nourishes the hair, adding shine and making it soft and manageable.",
    benefits: ["Natural cleanser", "Promotes hair growth", "Reduces dandruff", "Adds shine"]
  },
  {
    id: 3,
    name: "Bhringraj",
    image: "https://m.media-amazon.com/images/I/41iYtra4ZGL.jpg",
    description: "Bhringraj is known for its ability to promote hair growth by stimulating the scalp and improving blood circulation. It helps reduce hair fall, prevents premature graying, and strengthens hair follicles. Additionally, bhringraj nourishes the scalp, making hair healthier, shinier, and more vibrant.",
    benefits: ["Stimulates scalp", "Improves circulation", "Prevents graying", "Strengthens follicles"]
  },
  {
    id: 4,
    name: "Hibiscus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8dJLpO-iDN46rHoIs2gX6aadKuDAirCZJA&s",
    description: "Hibiscus helps promote hair growth by stimulating the scalp and improving blood circulation. It strengthens hair roots, reducing hair fall, and adds a natural shine to hair. Rich in vitamins and antioxidants, hibiscus also prevents dandruff and delays premature graying.",
    benefits: ["Promotes growth", "Strengthens roots", "Natural shine", "Rich in vitamins"]
  },
  {
    id: 5,
    name: "Fenugreek",
    image: "https://media.istockphoto.com/id/1285888022/photo/fenugreek-seeds-and-plant-on-a-old-wooden-background.jpg?s=612x612&w=0&k=20&c=uRUQPgQtEevgbrh4H-Msh5lv7HibigXNIQd9fqfdkRk=",
    description: "Fenugreek is rich in proteins and nicotinic acid, which help strengthen hair and prevent hair fall. It promotes hair growth, conditions the scalp, and reduces dandruff. Additionally, fenugreek improves hair texture, making it softer and shinier.",
    benefits: ["Rich in proteins", "Prevents hair fall", "Conditions scalp", "Improves texture"]
  },
  {
    id: 6,
    name: "Henna",
    image: "https://vgrgardens.com/wp-content/uploads/2023/04/henna-maruthani-muligai-buyonline-vgr-gardens-2-scaled-e1681951591468.jpg",
    description: "Henna strengthens and conditions hair, adding shine and smoothness. It helps reduce dandruff and soothes scalp irritation with its antifungal and antibacterial properties. Additionally, henna naturally enhances hair color, giving it a rich, reddish tint while promoting healthy growth.",
    benefits: ["Strengthens hair", "Natural conditioner", "Antifungal properties", "Enhances color"]
  },
  {
    id: 7,
    name: "Rosemary",
    image: "https://www.gardendesign.com/pictures/images/900x705Max/site_3/rosemary-plant-rosmarinus-shutterstock-com_17869.jpg",
    description: "Rosemary stimulates blood circulation to the scalp, promoting hair growth and preventing hair loss. It strengthens hair follicles, reduces dandruff, and improves scalp health. Additionally, rosemary enhances hair shine and helps delay premature graying by improving overall hair health.",
    benefits: ["Stimulates circulation", "Prevents hair loss", "Strengthens follicles", "Improves scalp health"]
  },
  {
    id: 8,
    name: "Neem",
    image: "https://manjariwellness.in/images/neem.jpg",
    description: "Neem promotes healthy hair by strengthening the roots and reducing hair fall. Its antibacterial and antifungal properties help fight dandruff and soothe an itchy scalp. Neem also improves scalp circulation, encouraging hair growth and adding natural shine to the hair.",
    benefits: ["Strengthens roots", "Antibacterial", "Fights dandruff", "Improves circulation"]
  }
];

export default function HairCare() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 py-12 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6 shadow-2xl">
          <Heart className="w-10 h-10 text-white animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4 font-serif">
          Haircare Herbs
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover nature's secret to beautiful, healthy hair with these powerful herbal remedies
        </p>
        <div className="flex items-center justify-center mt-4 text-pink-600">
          <Sparkles className="w-5 h-5 mr-2 animate-spin" />
          <span className="text-sm font-medium">Click any herb to learn about its hair benefits</span>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {hairCareHerbsData.map((herb, index) => (
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
                      <Eye className="w-6 h-6 text-pink-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                    {herb.name}
                  </h3>
                  
                  {/* Benefits Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {herb.benefits.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-medium rounded-full"
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
                  <div className="mt-4 flex items-center text-pink-600 font-semibold text-sm group-hover:text-pink-700">
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
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-700 rounded-full text-sm font-medium transition-colors duration-300"
                    >
                      <Volume2 className="w-4 h-4 mr-2" />
                      Pronounce
                    </button>
                  </div>

                  {/* All Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Hair Benefits:</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedHerb.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                          <span className="text-purple-700 text-sm font-medium">{benefit}</span>
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
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-semibold text-sm flex items-center justify-center"
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