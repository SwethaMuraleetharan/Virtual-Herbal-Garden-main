import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Search, Book, Info } from 'lucide-react';
import { IconName } from 'lucide-react';
import { Link } from 'react-router-dom'; 


const HomePage = () => {
  const navigate = useNavigate();

  const handleBeginExploration = () => {
    navigate('/health-wellness');
  };

  return (
    <div className="relative min-h-screen text-green-900">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/sunlight.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-black bg-opacity-30 text-white">
        {/* Header */}
        <header className="p-5 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Digital Herbarium</h1>
          </div>
          <nav>
            <ul className="flex space-x-4 text-white">
              <li><a href="#" className="hover:text-green-300">Home</a></li> 
              <li><Link to="/health-wellness" className="hover:text-green-300">Explore</Link></li> 
              <li><a href="about.html" className="hover:text-green-300">About</a></li>
              <li><a href="contact.html" className="hover:text-green-300">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Landing Page Section */}
          <section className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 text-white">Discover the World of Medicinal Plants</h2>
            <p className="text-xl mb-8 text-white">Explore our 3D garden and learn about the healing power of nature</p>
          </section>

          {/* Feature Section */}
          <section className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
                <Search className="h-6 w-6 mr-2" />
                Explore in 3D
              </h3>
              <p className="text-white">Navigate through our beautifully rendered 3D garden. Select and interact with plants to learn more about their properties and uses.</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
                <Book className="h-6 w-6 mr-2" />
                Comprehensive Information
              </h3>
              <p className="text-white">Access detailed information about each plant, including its medicinal uses, cultivation tips, and historical significance.</p>
            </div>
          </section>

          {/* Get Started Section */}
          <section className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-white">Get Started with Your Herbal Journey</h2>
            <p className="text-xl mb-8 text-white">Choose how you'd like to explore our virtual herbal garden</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 text-left">
                <h2 className="text-2xl font-semibold mb-2 flex items-center">
                  <Search className="w-6 h-6 mr-2" />
                  Take a Virtual Tour
                </h2>
                <p className="mb-4">Immerse yourself in a guided experience through our 3D garden. Learn about key medicinal plants and their properties.</p>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Experience 360° views of our virtual garden</li>
                  <li>Learn about key plants through interactive hotspots</li>
                  <li>Discover the history and uses of medicinal herbs</li>
                  <li>Complete the tour to unlock special features</li>
                </ol>
                <button className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
  <a href="\assets\garden.mp4" target="_blank" rel="noopener noreferrer">
    Start Virtual Tour
  </a>
</button>


                {/* <button className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" ><a href="https://www.youtube.com/watch?v=FYINdPopeUQ">Start Virtual Tour</a></button> */}
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 text-left">
                <h2 className="text-2xl font-semibold mb-2 flex items-center">
                  <Book className="w-6 h-6 mr-2" />
                  Start Exploring
                </h2>
                <p className="mb-4">Dive right into our comprehensive database of medicinal plants. Search, filter, and learn at your own pace.</p>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Access our full catalog of medicinal plants</li>
                  <li>Use advanced search and filter options</li>
                  <li>Read detailed information on each plant</li>
                  <li>Create your own virtual herb garden</li>
                </ol>
                <button className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={handleBeginExploration}>Begin Exploration</button>
              </div>
            </div>
          </section>

          {/* Did You Know Section */}
          <section className="text-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 inline-block">
              <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center">
                <Info className="h-6 w-6 mr-2" />
                Did You Know?
              </h3>
              <p className="text-lg">"Over 80% of the world's population relies on traditional plant-based medicines for primary healthcare."</p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-green-800 bg-opacity-50 text-white p-4 mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Virtual Herbal Garden. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;