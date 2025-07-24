import React from 'react';

const AboutUs = () => {
  const plantImages = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIqweZXDmFvaIJunyd41L_OOLuOkp5ZIo4Q&s",
      alt: "Medicinal Herbs Collection",
      className: "absolute top-[39%] left-0 w-[20%] h-[32%] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
    },
    {
      src: "https://img.freepik.com/free-photo/close-up-green-leaf-with-fresh-water-droplets-generative-ai_188544-8635.jpg",
      alt: "Fresh Green Leaf with Droplets",
      className: "absolute top-[19%] left-[23%] w-[35%] h-[39%] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
    },
    {
      src: "https://images.unsplash.com/photo-1621944129421-b57db886e63c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyaW5nJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      alt: "Flowering Plant",
      className: "absolute top-[62%] left-[23%] w-[13%] h-[21%] rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    },
    {
      src: "https://c0.wallpaperflare.com/preview/174/154/542/pink-and-green-linear-leaf-plants.jpg",
      alt: "Linear Leaf Plants",
      className: "absolute top-[62%] left-[39%] w-[34%] h-[33%] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
    },
    {
      src: "https://images.pexels.com/photos/2192227/pexels-photo-2192227.jpeg",
      alt: "Natural Plant",
      className: "absolute top-[38%] left-[60%] w-[13%] h-[21%] rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    },
    {
      src: "https://www.pixelstalk.net/wp-content/uploads/images1/HD-Plant-Backgrounds-Free-Download.jpg",
      alt: "Plant Background",
      className: "absolute top-0 left-[62%] w-[35%] h-[33%] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
    },
    {
      src: "https://images.unsplash.com/photo-1708893977168-7df2c9ff4a93?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcmluZyUyMHBsYW50fGVufDB8fDB8fHww",
      alt: "Flowering Plant Variety",
      className: "absolute top-[40%] left-[75%] w-[25%] h-[42%] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-lime-50 to-emerald-100 py-10 px-5 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-20 mt-20 mb-20">
          
          {/* Left Side - Content */}
          <div className="flex flex-col items-center lg:items-start max-w-md lg:max-w-sm xl:max-w-md text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-10 leading-tight">
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                ABOUT US
              </span>
            </h1>
            
            <p className="text-gray-700 text-base leading-relaxed mb-12 max-w-lg">
              Welcome to our herbal plant website, dedicated to educating and raising awareness about the incredible medicinal benefits and uses of herbal plants. Our mission is to make the knowledge of natural remedies accessible to everyone, promoting a healthier, more sustainable lifestyle. 
              <br /><br />
              We believe in the power of nature and its ability to support holistic health, and we are committed to sharing reliable, well-researched information on the healing properties of various herbs. Through our interactive quiz, we aim to engage and educate users while fostering a deeper understanding of the plants that have been used for centuries.
              <br /><br />
              Whether you're a beginner or an enthusiast, our website provides valuable insights, and we invite you to connect with us for any questions, feedback, or suggestions as we continue to share the wonders of herbal wellness.
            </p>
            
            <button className="bg-white text-cyan-600 px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold border-2 border-transparent hover:border-cyan-200 focus:outline-none focus:ring-4 focus:ring-cyan-200">
              Learn More
            </button>
          </div>

          {/* Right Side - Image Gallery */}
          <div className="relative w-full max-w-2xl h-96 lg:h-[700px] lg:w-[675px]">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-3xl backdrop-blur-sm"></div>
            
            {/* Plant Images */}
            {plantImages.map((image, index) => (
              <div key={index} className={`${image.className} hidden lg:block overflow-hidden`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover filter brightness-110 saturate-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            ))}
            
            {/* Mobile/Tablet fallback - single centered image */}
            <div className="lg:hidden w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://c0.wallpaperflare.com/preview/174/154/542/pink-and-green-linear-leaf-plants.jpg"
                alt="Herbal Plants Collection"
                className="w-full h-full object-cover filter brightness-110 saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-lime-400 to-green-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;