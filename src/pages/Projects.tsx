import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import ProjectShowcase from '../components/ProjectShowcase';
import Footer from '../components/Footer';

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Fixed NavBar with proper z-index */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <NavBar />
      </div>
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Enhanced center lighting effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0) 70%)',
            filter: 'blur(120px)'
          }}
        />
      </div>
      
      {/* Glowing orb that follows mouse */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 70%)',
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
          opacity: isHovering ? 1 : 0,
          transition: 'transform 0.1s ease-out',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Light beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-black/40 to-transparent"
          style={{ left: `${mousePosition.x}px` }}
        />
        <div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-black/40 to-transparent"
          style={{ top: `${mousePosition.y}px` }}
        />
      </div>
      
      <main 
        ref={containerRef}
        className="relative z-10 pt-40 pb-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Our Projects
            </h1>
            <p className="text-lg text-gray-600">
              Explore our portfolio of innovative web solutions and digital experiences.
            </p>
          </div>
          
          <ProjectShowcase />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
