import { useState } from 'react';
import { Leaf, Sparkles, Sun, Droplets, Thermometer, Calendar, X, Scissors, Shield } from 'lucide-react';

const plantsData = [
  {
    id: 1,
    name: "Tulsi (Holy Basil)",
    image: "https://images.unsplash.com/photo-1616694547666-c2e9f98f14b8?w=500&q=80",
    climate: "Warm, tropical to subtropical",
    soil: "Well-drained, fertile loamy soil with pH 6.0-7.5",
    sunlight: "6-8 hours of direct sunlight daily",
    watering: "Water daily but avoid waterlogging. Reduce watering in winter",
    planting: "Plant seeds in spring after last frost. Space 12-18 inches apart",
    care: "Pinch flowers to encourage leaf growth. Harvest leaves regularly. Protect from strong winds",
    harvest: "Pick fresh leaves in morning after dew dries. Can harvest year-round in warm climates",
    tips: "Grows excellently in containers. Companion plant with tomatoes to repel pests",
    category: "Sacred Herbs"
  },
  {
    id: 2,
    name: "Neem",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&q=80",
    climate: "Hot, dry tropical and subtropical regions",
    soil: "Well-drained sandy or clay soil. Very drought tolerant once established",
    sunlight: "Full sun exposure for 6+ hours daily",
    watering: "Water deeply once a week. Extremely drought resistant after first year",
    planting: "Plant saplings in monsoon season. Space 15-20 feet apart for trees",
    care: "Prune dead branches. Very low maintenance. Can withstand poor soil conditions",
    harvest: "Harvest leaves year-round. Peak oil content in leaves during dry season",
    tips: "Excellent natural pesticide. Plant near vegetable gardens for pest control",
    category: "Medicinal Trees"
  },
  {
    id: 3,
    name: "Aloe Vera",
    image: "https://images.unsplash.com/photo-1509587584298-59b15867a245?w=500&q=80",
    climate: "Warm, arid to semi-arid climates. Cannot tolerate frost",
    soil: "Sandy, well-draining cactus soil mix. Must have excellent drainage",
    sunlight: "Bright, indirect light. 6 hours daily but protect from harsh afternoon sun",
    watering: "Water deeply but infrequently. Allow soil to dry completely between waterings",
    planting: "Plant offsets or mature plants. Use shallow, wide containers with drainage holes",
    care: "Remove dead outer leaves. Bring indoors if temperature drops below 50°F",
    harvest: "Cut outer mature leaves at base. Use immediately or refrigerate for up to 1 week",
    tips: "Perfect indoor plant. Overwatering is the most common cause of plant death",
    category: "Succulent Herbs"
  },
  {
    id: 4,
    name: "Ashwagandha",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
    climate: "Dry, subtropical regions with moderate temperatures",
    soil: "Well-drained sandy loam with good organic matter. pH 7.5-8.0",
    sunlight: "Full sun to partial shade. At least 6 hours direct sunlight",
    watering: "Moderate watering. Allow soil to dry between waterings. Drought tolerant",
    planting: "Sow seeds in spring. Space plants 12 inches apart. Germination takes 2-3 weeks",
    care: "Weed regularly when young. Mulch around plants. Minimal fertilizer needed",
    harvest: "Harvest roots after 150-180 days when leaves turn yellow. Wash and dry roots",
    tips: "Thrives in poor soil. Can be grown as annual crop in temperate regions",
    category: "Adaptogenic Roots"
  },
  {
    id: 5,
    name: "Moringa",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80",
    climate: "Hot, humid tropical and subtropical climates",
    soil: "Well-drained sandy or loamy soil. Tolerates poor soil but grows better in fertile soil",
    sunlight: "Full sun exposure. Needs at least 6-8 hours of direct sunlight",
    watering: "Water regularly during dry periods. Deep watering twice a week is sufficient",
    planting: "Plant seeds or cuttings at start of rainy season. Space 8-10 feet apart",
    care: "Prune regularly to maintain height and encourage branching. Very fast growing",
    harvest: "Harvest young leaves, flowers, and pods regularly. Peak nutrition in young leaves",
    tips: "Can grow 10+ feet in first year. Excellent living fence or windbreak",
    category: "Superfood Trees"
  },
  {
    id: 6,
    name: "Peppermint",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500&q=80",
    climate: "Cool, temperate climates. Hardy in zones 3-9",
    soil: "Moist, rich soil with good drainage. pH 6.0-7.0",
    sunlight: "Partial shade to full sun. 4-6 hours of sunlight daily",
    watering: "Keep soil consistently moist but not waterlogged. Water at base of plant",
    planting: "Plant transplants or root divisions in spring. Space 18-24 inches apart",
    care: "Pinch flowers to maintain leaf flavor. Contains spread with barriers - very invasive",
    harvest: "Cut stems just before flowering for best flavor. Harvest in morning after dew dries",
    tips: "Grow in containers to control spread. Excellent companion plant for deterring ants and rodents",
    category: "Aromatic Herbs"
  },
  {
    id: 7,
    name: "Lemongrass",
    image: "https://images.unsplash.com/photo-1609501676725-7186f669ac28?w=500&q=80",
    climate: "Warm, humid tropical and subtropical climates",
    soil: "Rich, well-draining soil with high organic content. pH 6.0-7.5",
    sunlight: "Full sun exposure. Minimum 6 hours of direct sunlight daily",
    watering: "Water regularly to keep soil moist. Increase watering during hot, dry periods",
    planting: "Plant divisions or stalks with roots in spring. Space 24 inches apart",
    care: "Cut back to 6 inches in late fall. Mulch heavily in cooler climates",
    harvest: "Cut stalks at ground level when 12+ inches tall. Use fresh or dry for storage",
    tips: "Grows well in large containers. Natural mosquito repellent when planted around patios",
    category: "Culinary Grasses"
  },
  {
    id: 8,
    name: "Rose Hip (Rosa rugosa)",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2ac0?w=500&q=80",
    climate: "Temperate climates. Very cold hardy, zones 2-9",
    soil: "Well-drained soil, tolerates poor soil. Avoid overly rich soil",
    sunlight: "Full sun to partial shade. 6+ hours of sunlight for best flowering",
    watering: "Water deeply once a week. Drought tolerant once established",
    planting: "Plant bare root or container plants in early spring. Space 4-6 feet apart",
    care: "Prune dead canes in late winter. Minimal fertilizer needed. Very disease resistant",
    harvest: "Harvest hips in fall after first frost when bright red and slightly soft",
    tips: "Don't deadhead flowers if you want hips. Excellent natural source of Vitamin C",
    category: "Flowering Shrubs"
  },
  {
    id: 9,
    name: "Fenugreek",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80",
    climate: "Cool, dry climates. Grows as cool season annual",
    soil: "Well-drained, fertile loamy soil. pH 6.0-7.0",
    sunlight: "Full sun to partial shade. 4-6 hours of sunlight daily",
    watering: "Moderate watering. Allow soil to dry slightly between waterings",
    planting: "Sow seeds directly in early spring or fall. Space 6 inches apart",
    care: "Weed regularly when seedlings are small. No fertilizer needed in good soil",
    harvest: "Harvest leaves when 4-6 inches tall. Seeds ready when pods turn brown",
    tips: "Both leaves and seeds are edible. Can be grown as microgreens indoors year-round",
    category: "Seed Spices"
  },
  {
    id: 10,
    name: "Oregano",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=500&q=80",
    climate: "Mediterranean climate preferred. Hardy in zones 4-10",
    soil: "Well-drained, slightly alkaline soil. pH 6.0-8.0",
    sunlight: "Full sun exposure. 6-8 hours of direct sunlight for best flavor",
    watering: "Water moderately. Allow soil to dry between waterings. Drought tolerant",
    planting: "Plant transplants or divide existing plants in spring. Space 12 inches apart",
    care: "Pinch flowers to maintain leaf production. Cut back by half in midsummer",
    harvest: "Harvest sprigs before flowering for best flavor. Cut in morning after dew dries",
    tips: "Perennial in warm climates. Dry leaves retain excellent flavor for winter use",
    category: "Mediterranean Herbs"
  },
  {
    id: 11,
    name: "Ginger",
    image: "https://images.unsplash.com/photo-1599908388788-8c9c8c60a4fe?w=500&q=80",
    climate: "Warm, humid tropical and subtropical climates",
    soil: "Rich, well-draining soil high in organic matter. pH 5.5-6.5",
    sunlight: "Partial shade to filtered sunlight. Protect from harsh direct sun",
    watering: "Keep soil consistently moist but not waterlogged. High humidity preferred",
    planting: "Plant rhizome pieces with eyes in spring. Space 8-12 inches apart",
    care: "Mulch heavily to retain moisture. Feed monthly with organic fertilizer during growing season",
    harvest: "Baby ginger at 3-4 months, mature rhizomes at 8-10 months after soil dies back",
    tips: "Excellent container plant. Can be grown indoors as houseplant in bright, indirect light",
    category: "Rhizome Spices"
  },
  {
    id: 12,
    name: "Curry Leaves",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80",
    climate: "Warm, humid tropical and subtropical climates",
    soil: "Well-drained, fertile soil rich in organic matter. pH 6.0-7.5",
    sunlight: "Partial shade to full sun. 4-6 hours of sunlight daily",
    watering: "Water regularly to keep soil moist. Increase watering in hot weather",
    planting: "Plant saplings or rooted cuttings. Space 6-8 feet apart for trees",
    care: "Prune regularly to encourage bushy growth. Feed with compost twice yearly",
    harvest: "Pick fresh leaves as needed. Harvest in morning for best flavor",
    tips: "Can be grown in large containers. Pinch growing tips to encourage branching",
    category: "Tropical Aromatics"
  }
];

export default function HerbalCultivationGuide() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(plantsData.map(plant => plant.category))];
  
  const filteredPlants = filter === 'All' 
    ? plantsData 
    : plantsData.filter(plant => plant.category === filter);

  const openModal = (plant) => {
    setSelectedPlant(plant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlant(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-green-200 to-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-teal-200 to-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full mb-8 shadow-2xl animate-pulse">
            <Leaf className="w-12 h-12 text-white animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-6 font-serif tracking-tight">
            Herbal Cultivation Guide
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Master the art of growing medicinal herbs with detailed cultivation techniques and care instructions
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-emerald-600">
            <div className="flex items-center">
              <Sun className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Optimal Growing Conditions</span>
            </div>
            <div className="flex items-center">
              <Droplets className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Watering Guidelines</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                    : 'bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-white/90 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Plants Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPlants.map((plant, index) => (
              <div
                key={plant.id}
                className="group cursor-pointer transform transition-all duration-700 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(plant)}
              >
                <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/30 hover:shadow-2xl hover:bg-white/90 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {plant.category}
                      </span>
                    </div>

                    {/* Quick Info Icons */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center" title="Sunlight needs">
                          <Sun className="w-4 h-4 text-orange-500" />
                        </div>
                        <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center" title="Watering requirements">
                          <Droplets className="w-4 h-4 text-blue-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {plant.name}
                    </h3>
                    
                    {/* Climate Preview */}
                    <div className="flex items-start mb-3">
                      <Thermometer className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {plant.climate}
                      </p>
                    </div>

                    {/* Soil Preview */}
                    <div className="flex items-start mb-4">
                      <Shield className="w-4 h-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {plant.soil}
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors duration-300">
                        View Full Guide
                      </span>
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <Leaf className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Modal */}
      {isModalOpen && selectedPlant && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl animate-slideUp">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image Section */}
                <div className="relative">
                  <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={selectedPlant.image}
                      alt={selectedPlant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-emerald-500/90 backdrop-blur-sm text-white font-semibold rounded-full">
                      {selectedPlant.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                      {selectedPlant.name}
                    </h2>
                    <p className="text-emerald-600 font-semibold text-lg">
                      {selectedPlant.category}
                    </p>
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center mb-2">
                        <Droplets className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="font-semibold text-blue-800 text-sm">Watering</span>
                      </div>
                      <p className="text-blue-700 text-xs">{selectedPlant.watering.split('.')[0]}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-xl border border-orange-100">
                      <div className="flex items-center mb-2">
                        <Sun className="w-5 h-5 text-orange-500 mr-2" />
                        <span className="font-semibold text-orange-800 text-sm">Sunlight</span>
                      </div>
                      <p className="text-orange-700 text-xs">{selectedPlant.sunlight.split('.')[0]}</p>
                    </div>
                  </div>

                  {/* Cultivation Sections */}
                  <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {/* Climate */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
                      <div className="flex items-center mb-2">
                        <Thermometer className="w-5 h-5 text-purple-500 mr-2" />
                        <h4 className="font-bold text-purple-800">Climate</h4>
                      </div>
                      <p className="text-purple-700 text-sm">{selectedPlant.climate}</p>
                    </div>

                    {/* Soil */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-100">
                      <div className="flex items-center mb-2">
                        <Shield className="w-5 h-5 text-amber-600 mr-2" />
                        <h4 className="font-bold text-amber-800">Soil Requirements</h4>
                      </div>
                      <p className="text-amber-700 text-sm">{selectedPlant.soil}</p>
                    </div>

                    {/* Planting */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 text-green-500 mr-2" />
                        <h4 className="font-bold text-green-800">Planting Guide</h4>
                      </div>
                      <p className="text-green-700 text-sm">{selectedPlant.planting}</p>
                    </div>

                    {/* Care Instructions */}
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-xl border border-teal-100">
                      <div className="flex items-center mb-2">
                        <Sparkles className="w-5 h-5 text-teal-500 mr-2" />
                        <h4 className="font-bold text-teal-800">Care Instructions</h4>
                      </div>
                      <p className="text-teal-700 text-sm">{selectedPlant.care}</p>
                    </div>

                    {/* Harvesting */}
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-xl border border-rose-100">
                      <div className="flex items-center mb-2">
                        <Scissors className="w-5 h-5 text-rose-500 mr-2" />
                        <h4 className="font-bold text-rose-800">Harvesting</h4>
                      </div>
                      <p className="text-rose-700 text-sm">{selectedPlant.harvest}</p>
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100">
                      <div className="flex items-center mb-2">
                        <Leaf className="w-5 h-5 text-indigo-500 mr-2" />
                        <h4 className="font-bold text-indigo-800">Pro Tips</h4>
                      </div>
                      <p className="text-indigo-700 text-sm">{selectedPlant.tips}</p>
                    </div>
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
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}