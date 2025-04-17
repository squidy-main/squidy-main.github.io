import React, { useState, useRef } from 'react';
import { ArrowRight, ExternalLink, ShoppingBag, Lamp, Shirt, Heart, Palette } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ProjectShowcase = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();
  const [hoveringCardIndex, setHoveringCardIndex] = useState<number | null>(null);
  
  const projects = [
    {
      id: 'elegance',
      title: "Elegance",
      category: "E-commerce",
      description: "A luxury online store for premium shoes and handbags with a sophisticated user experience and seamless checkout process.",
      color: "bg-white",
      highlight: "border-gray-300",
      icon: ShoppingBag,
      link: "https://vgsaksham.github.io/elegance.github.io/"
    },
    {
      id: 'glass-decor',
      title: "Home Decor",
      category: "Interior Design",
      description: "A contemporary glass decor showcase featuring premium interior design products with beautiful visuals and interactive elements for enhanced shopping experience.",
      color: "bg-white",
      highlight: "border-gray-300",
      icon: Lamp,
      link: "https://squidy-main.github.io/sample-glass-decor-showcase/#/"
    },
    {
      id: 'bombay-royals',
      title: "Bombay Royals",
      category: "Ethnic Fashion",
      description: "A culturally rich e-commerce platform for authentic Indian ethnic wear with storytelling elements and heritage craftsmanship highlights.",
      color: "bg-white",
      highlight: "border-gray-300",
      icon: Shirt,
      link: "https://vgsaksham.github.io/bombayroyals.github.io/index.html"
    },
    {
      id: 'mahasharman',
      title: "Mahasharman Healthcare",
      category: "Healthcare",
      description: "A comprehensive platform for an Ayurvedic manufacturing company that seamlessly integrates wholesale B2B services with retail customer experiences.",
      color: "bg-white",
      highlight: "border-gray-300",
      icon: Heart,
      link: "https://squidy-main.github.io/mahasharmanhealthcare/index.html"
    },
    {
      id: 'designer-portfolio',
      title: "Interactive Designer Portfolio",
      category: "Personal Website",
      description: "A visually captivating portfolio website with motion graphics and interactive elements showcasing a multidisciplinary designer's work.",
      color: "bg-white",
      highlight: "border-gray-300",
      icon: Palette,
      link: "https://vgsaksham.github.io/portfolio.github.io/"
    }
  ];

  const addProjectRef = (index: number) => (el: HTMLDivElement) => {
    projectRefs.current[index] = el;
  };

  const handleViewDetails = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  const handleMouseEnterCard = (index: number) => {
    setHoveringCardIndex(index);
  };

  const handleMouseLeaveCard = () => {
    setHoveringCardIndex(null);
  };

  return (
    <section 
      id="projects" 
      className="py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-2/4 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-3/4 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
        
        <div className="absolute left-0 right-0 top-1/4 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
        <div className="absolute left-0 right-0 top-2/4 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
        <div className="absolute left-0 right-0 top-3/4 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 relative z-10"
          ref={showcaseRef}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              ref={addProjectRef(index)}
              className={`border rounded-lg overflow-hidden transition-all duration-500 backdrop-blur-lg relative bg-white ${
                hoveringCardIndex === index ? 'transform -translate-y-2 scale-105' : ''
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                boxShadow: hoveringCardIndex === index ? '0 20px 60px rgba(0, 0, 0, 0.1)' : '0 8px 32px rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={() => handleMouseEnterCard(index)}
              onMouseLeave={handleMouseLeaveCard}
            >
              <div 
                className={`absolute inset-0 rounded-lg transition-opacity duration-300 pointer-events-none ${
                  hoveringCardIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
                  zIndex: -1
                }}
              />
              
              <div 
                className={`absolute inset-px rounded-lg transition-opacity duration-500 pointer-events-none ${
                  hoveringCardIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(120deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shine 2s infinite linear',
                  zIndex: 0
                }}
              />
              
              <div className={`p-8 ${project.color} bg-opacity-10 backdrop-blur-sm relative z-10 h-full`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mr-4 border border-gray-200">
                      <project.icon size={24} className="text-gray-600" />
                    </div>
                    <span className="text-xs font-medium bg-gray-50 text-gray-700 px-3 py-1 rounded-full border border-gray-200">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  {project.description}
                </p>
                
                <div className="mt-auto flex justify-between items-center">
                  <button 
                    className="text-gray-600 flex items-center text-sm font-medium group hover:text-gray-900 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetails(project.id);
                    }}
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">View Project</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
          @keyframes shine {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProjectShowcase;