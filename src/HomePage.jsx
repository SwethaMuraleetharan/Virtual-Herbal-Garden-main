import React, { useState, useEffect } from 'react';
import { Leaf, Search, Book, Info, PlayCircle, Sparkles, ArrowRight, Globe, Users, Award } from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBeginExploration = () => {
    // For demo purposes - in real app this would use router
    window.location.href = '/health-wellness';
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Video Background with Overlay */}
      <div className="absolute inset-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover scale-105"
          src="/assets/sunlight.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-green-800/50 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-300 rounded-full animate-pulse delay-1000 opacity-40" />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-lime-400 rounded-full animate-pulse delay-2000 opacity-50" />
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-green-200 rounded-full animate-pulse delay-500 opacity-70" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen text-white">
        {/* Enhanced Header */}
        <header className="backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Leaf className="h-10 w-10 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                    Digital Herbarium
                  </h1>
                  <p className="text-emerald-300 text-xs font-medium">Nature's Pharmacy</p>
                </div>
              </div>
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  <li><a href="#" className="relative text-white hover:text-emerald-300 transition-colors duration-300 font-medium group">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
                  </a></li>
                  <li><a href="/health-wellness" className="relative text-white hover:text-emerald-300 transition-colors duration-300 font-medium group">
                    Explore
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
                  </a></li>
                  <li><a href="about.html" className="relative text-white hover:text-emerald-300 transition-colors duration-300 font-medium group">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
                  </a></li>
                  <li><a href="contact.html" className="relative text-white hover:text-emerald-300 transition-colors duration-300 font-medium group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
                  </a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        {/* Enhanced Main Content */}
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
                <Sparkles className="w-4 h-4 text-emerald-300 mr-2" />
                <span className="text-emerald-200 text-sm font-medium">Welcome to Nature's Digital Garden</span>
              </div>
              
              <h2 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-emerald-200 to-green-300 bg-clip-text text-transparent">
                  Discover the
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent">
                  Healing Power
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-emerald-200 to-green-300 bg-clip-text text-transparent">
                  of Nature
                </span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                Journey through our immersive 3D botanical sanctuary and unlock the ancient wisdom of medicinal plants from around the world
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                <button 
                  onClick={handleBeginExploration}
                  className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-emerald-500/25 hover:scale-105 transform transition-all duration-300 border border-emerald-500/20"
                >
                  <span className="flex items-center">
                    Begin Your Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                
                <a 
                  href="/assets/garden.mp4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="flex items-center">
                    <PlayCircle className="mr-2 w-5 h-5" />
                    Watch Preview
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
         <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
  {[
    { icon: Globe, value: "50+", label: "Medicinal Plants Listed" },
    { icon: Users, value: "Community", label: "Promoting Herbal Awareness" },
    { icon: Book, value: "Informative", label: "Plant Descriptions Available" },
    { icon: Award, value: "Ongoing", label: "3D Garden Integration" }
  ].map((stat, index) => (
    <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
      <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
      <div className="text-emerald-200 text-sm font-medium">{stat.label}</div>
    </div>
  ))}
</section>


          {/* Enhanced Feature Section */}
          <section className="grid lg:grid-cols-2 gap-8 mb-24">
            <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-600/20 to-green-700/20 backdrop-blur-lg p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent group-hover:from-emerald-500/10 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-500/20 rounded-2xl mr-4">
                    <Search className="h-8 w-8 text-emerald-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Immersive 3D Experience</h3>
                </div>
                <p className="text-emerald-100 text-lg leading-relaxed mb-6">
                  Step into our photorealistic virtual garden where every leaf, flower, and root is rendered in stunning detail. Navigate freely through different biomes and seasons to witness nature's pharmacy in its full glory.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-emerald-200">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                    <span>360° interactive exploration</span>
                  </div>
                  <div className="flex items-center text-emerald-200">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                    <span>Plant-wise educational content</span>
                  </div>
                  <div className="flex items-center text-emerald-200">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                    <span>Unity-based 3D visual walkthrough</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-green-600/20 to-emerald-700/20 backdrop-blur-lg p-8 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent group-hover:from-green-500/10 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-500/20 rounded-2xl mr-4">
                    <Book className="h-8 w-8 text-green-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Ancient Wisdom, Modern Science</h3>
                </div>
                <p className="text-green-100 text-lg leading-relaxed mb-6">
                  Browse our curated plant library featuring traditional medicinal herbs with simple explanations of their health benefits. Learn how each plant supports well-being and how to grow them at home.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-green-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    <span>Easy-to-understand plant uses</span>
                  </div>
                  <div className="flex items-center text-green-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    <span>Traditional healing knowledge</span>
                  </div>
                  <div className="flex items-center text-green-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    <span>Home cultivation awareness</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Get Started Section */}
          <section className="text-center mb-24">
            <div className="mb-12">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                Choose Your Path to Discovery
              </h2>
              <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                Whether you're a curious beginner or seasoned herbalist, we have the perfect journey for you
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
              {/* Virtual Tour Card */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent group-hover:from-purple-500/10 transition-all duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 bg-purple-500/20 rounded-3xl">
                      <PlayCircle className="w-12 h-12 text-purple-300" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Guided Virtual Tour</h3>
                  <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                    Take a visual journey through our herbal garden simulation and explore nature’s healing power
                  </p>
                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-purple-200 text-sm font-bold">1</span>
                      </div>
                      <span className="text-purple-200">Experience breathtaking 360° garden views</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-purple-200 text-sm font-bold">2</span>
                      </div>
                      <span className="text-purple-200">Explore medicinal plant visuals in a natural setting</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-purple-200 text-sm font-bold">3</span>
                      </div>
                      <span className="text-purple-200">Learn about traditional uses from the website’s database</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-purple-200 text-sm font-bold">4</span>
                      </div>
                      <span className="text-purple-200">Gain awareness on cultivating these plants at home</span>
                    </div>
                  </div>
                  <a 
                    href="/assets/garden.mp4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    <PlayCircle className="mr-2 w-5 h-5" />
                    Start Virtual Tour
                  </a>
                </div>
              </div>

              {/* Exploration Card */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-lg rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent group-hover:from-emerald-500/10 transition-all duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 bg-emerald-500/20 rounded-3xl">
                      <Search className="w-12 h-12 text-emerald-300" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Free Exploration</h3>
                  <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
                    Explore medicinal herbs by category and learn how they support natural wellness
                  </p>
                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-emerald-200 text-sm font-bold">1</span>
                      </div>
                      <span className="text-emerald-200">Discover 50+ medicinal plants with images</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-emerald-200 text-sm font-bold">2</span>
                      </div>
                      <span className="text-emerald-200">Learn traditional uses and wellness tips</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-emerald-200 text-sm font-bold">3</span>
                      </div>
                      <span className="text-emerald-200">Explore by categories like skin, hair, and immunity</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-emerald-200 text-sm font-bold">4</span>
                      </div>
                      <span className="text-emerald-200">Get simple cultivation tips to grow herbs at home</span>
                    </div>
                  </div>
                  <button 
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25" 
                    onClick={handleBeginExploration}
                  >
                    <Book className="mr-2 w-5 h-5" />
                    Begin Exploration
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Did You Know Section */}
          <section className="text-center">
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 hover:border-blue-300/40 transition-all duration-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-blue-500/20 rounded-3xl">
                    <Info className="h-12 w-12 text-blue-300" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Ancient Wisdom Meets Modern Science
                </h3>
                <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                  "Over <span className="font-bold text-blue-200">80%</span> of the world's population relies on traditional plant-based medicines for primary healthcare, while <span className="font-bold text-purple-200">25%</span> of modern pharmaceuticals are derived from botanical sources."
                </p>
                {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-3xl font-bold text-blue-200">40,000+</div>
                    <div className="text-blue-300 text-sm">Medicinal Plant Species</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-purple-200">5,000</div>
                    <div className="text-purple-300 text-sm">Years of Recorded Use</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-blue-200">120+</div>
                    <div className="text-blue-300 text-sm">Active Compounds Identified</div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </main>

        {/* Enhanced Footer */}
        <footer className="mt-24 backdrop-blur-md bg-emerald-900/30 border-t border-emerald-500/20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-emerald-400 mr-3" />
                <span className="text-2xl font-bold text-white">Digital Herbarium</span>
              </div>
              <p className="text-emerald-200 mb-4">Bridging ancient botanical wisdom with modern scientific discovery</p>
              <p className="text-emerald-300">&copy; 2024 Digital Herbarium. Cultivating knowledge, nurturing wellness.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;