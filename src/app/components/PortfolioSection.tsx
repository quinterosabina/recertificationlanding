import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";
import { ProjectCarousel } from "./ProjectCarousel";
import { useState, useEffect } from "react";
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

export function PortfolioSection() {
  const { t } = useLanguage();
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex(prevIndex => (prevIndex + 1) % projects.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const handleProjectClick = (projectId: number) => {
    const projectIndex = projects.findIndex(p => p.id === projectId);
    if (projectIndex !== -1) {
      setCurrentCarouselIndex(projectIndex);
      setSelectedProject(projectId);
    }
  };

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 text-sm font-bold">
            {t.portfolio.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.portfolio.title}
          </h2>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectCarousel currentIndex={currentCarouselIndex} onIndexChange={setCurrentCarouselIndex} />
        </motion.div>

        {/* Individual Project Gallery */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => handleProjectClick(project.id)}
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Active indicator */}
                  {currentCarouselIndex === index && (
                    <div className="absolute top-2 right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  )}
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                    selectedProject === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h4 className="text-gray-900 font-semibold">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
