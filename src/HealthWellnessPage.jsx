import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const HealthWellnessPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/garden_bg.jpeg",
      title: "Your Curiosity + Our Herbal Wisdom = A Healthier You",
      description: "Explore the range of medicinal plants",
      // buttonText: "Explore",
    },
    {
      image: "/assets/remedies.jpg",
      title: "Ancient Remedies for Modern Health",
      description: "Discover the secrets of Ayurveda",
      // buttonText: "Learn More",
    },
    {
      image: "/assets/nutrition.jpg",
      title: "Nourish Your Body and Soul",
      description: "Experience the benefits of balanced nutrition",
      // buttonText: "Get Started",
    },
  ];

  const brands = [
    { name: "Skin Care", url: "/skin", logo: "https://img.freepik.com/premium-vector/portrait-girl-cleaning-facial-skin-with-foam-step-daily-cleansing-routine_88272-8318.jpg?semt=ais_hybrid" },
    { name: "Hair Care", url: "/hair", logo: "https://clipart-library.com/img/1621871.jpg" },
    { name: "Cultivation and History", url: "culti.html", logo: "https://thedailytexan.com/wp-content/uploads/2018/11/Aztec_1101_LaurenIbanez301Aztec-900x600.jpg" },
    { name: "Nutrition", url: "nutrition.html", logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1fb996e4-2328-46dd-b5f5-bbba631e0806_1927x1943.jpeg" },
    { name: "General Wellness", url: "herbalpractices.html", logo: "https://www.pngall.com/wp-content/uploads/15/Meditate-PNG-Images-HD.png" },
  ];

  const ingredients = [
    { name: "Amla", image: "https://www.shutterstock.com/image-photo/indian-gooseberry-fruits-amla-phyllanthus-600nw-1818688856.jpg" },
    { name: "Tulsi", image: "https://t3.ftcdn.net/jpg/02/63/84/64/360_F_263846480_zQ9YO4y7zkUE5q8d1RD20h8SgtrRBoV0.jpg" },
    { name: "Neem", image: "https://t3.ftcdn.net/jpg/04/09/16/02/360_F_409160229_cgsY3FzQce1luJK7wASQ1xy1Ax4wtsdL.jpg" },
    { name: "Aloe Vera", image: "https://media.istockphoto.com/id/1314139105/photo/organic-aloe-vera-fresh-leaf-isolated.jpg?s=612x612&w=0&k=20&c=mEwwxItAzUfMdUiwNJPl3i_g_amBSCp24VGpfuiRCQ4=" },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <img src="https://img.freepik.com/free-vector/plant-white_1308-41021.jpg?semt=ais_hybrid" alt="Logo" className="h-8" />
          <nav>
            <ul className="flex space-x-6 text-gray-600">
              <li><Link to="/" className="hover:text-green-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-300">About Us</Link></li>
              <li><Link to="/quiz" className="hover:text-green-300">Quiz</Link></li>
              <li><Link to="/contact" className="hover:text-green-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Slider */}
      <div className="relative h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-6">{slide.description}</p>
                {/* <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
                  {slide.buttonText}
                </button> */}
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Brands Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="text-center">
              <a href={brand.url} target="_self">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-20 h-20 mx-auto mb-2"
                />
                <button className="bg-green-800 text-white px-4 py-1 rounded-full hover:bg-green-700 transition duration-300">
                  {brand.name}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What's on the inside is what matters the most.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="text-center">
              <img src={ingredient.image} alt={ingredient.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <p className="font-medium">{ingredient.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 Health Street, Wellness City</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@healthwellness.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>About Us</li>
                <li>Ayurvedic Practices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthWellnessPage;
