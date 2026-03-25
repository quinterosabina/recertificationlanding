import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import burguerking from "../../assets/portafolio/burguerking.JPG";
import macdonalds from "../../assets/portafolio/macdonalds.jpg";
import navarro from "../../assets/portafolio/navarro.JPG";
import sedanos from "../../assets/portafolio/sedanos.JPG";
import thresholding from "../../assets/portafolio/thresholding.jpg";
import shoppingCenter from "../../assets/portafolio/shopping center Miami Gardens.JPG";

const projects = [
  {
    id: 1,
    image: burguerking,
    title: "Burger King"
  },
  {
    id: 2,
    image: macdonalds,
    title: "McDonald's"
  },
  {
    id: 3,
    image: navarro,
    title: "Navarro"
  },
  {
    id: 4,
    image: sedanos,
    title: "Sedanos"
  },
  {
    id: 5,
    image: thresholding,
    title: "Thresholding"
  },
  {
    id: 6,
    image: shoppingCenter,
    title: "Shopping Center Miami Gardens"
  }
];

interface ProjectCarouselProps {
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
}

export function ProjectCarousel({ currentIndex: externalIndex, onIndexChange }: ProjectCarouselProps = {}) {
  const [internalIndex, setInternalIndex] = useState(0);
  
  // Use external index if provided, otherwise use internal state
  const currentIndex = externalIndex !== undefined ? externalIndex : internalIndex;
  const setCurrentIndex = onIndexChange || setInternalIndex;

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-96 sm:h-[450px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={projects[currentIndex].image}
          alt={`Project ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h3 className="text-white text-2xl font-bold">{projects[currentIndex].title}</h3>
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
