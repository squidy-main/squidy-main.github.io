import React, { useEffect, useRef } from 'react';
import { ChevronRight, Zap, Sparkles, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const animatedElements = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      animatedElements.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Animated background shapes
  useEffect(() => {
    const createFloatingShape = () => {
      const shape = document.createElement('div');
      shape.classList.add('floating-shape');
      
      // Random size between 50px and 150px
      const size = Math.random() * 100 + 50;
      
      // Random pastel color
      const colors = [
        'rgba(229, 222, 255, 0.15)', // Soft Purple
        'rgba(253, 225, 211, 0.15)', // Soft Peach
        'rgba(211, 228, 253, 0.15)'  // Soft Blue
      ];
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Set styles
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.backgroundColor = color;
      shape.style.position = 'absolute';
      shape.style.borderRadius = '50%';
      shape.style.opacity = '0';
      shape.style.zIndex = '0';
      
      // Random position within the hero section
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const containerWidth = heroSection.offsetWidth;
        const containerHeight = heroSection.offsetHeight;
        
        const left = Math.random() * containerWidth;
        const top = Math.random() * containerHeight;
        
        shape.style.left = `${left}px`;
        shape.style.top = `${top}px`;
        
        // Add animation
        shape.animate(
          [
            { opacity: 0, transform: 'translateY(20px) scale(0.8)' },
            { opacity: 1, transform: 'translateY(0) scale(1)' },
            { opacity: 0, transform: 'translateY(-20px) scale(0.8)' }
          ],
          {
            duration: Math.random() * 5000 + 5000, // 5-10 seconds
            iterations: 1,
            easing: 'ease-in-out'
          }
        );
        
        heroSection.appendChild(shape);
        
        // Remove shape after animation
        setTimeout(() => {
          if (heroSection.contains(shape)) {
            heroSection.removeChild(shape);
          }
        }, 10000);
      }
    };
    
    // Create shapes periodically
    const interval = setInterval(createFloatingShape, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const addRef = (index: number) => (el: HTMLDivElement) => {
    animatedElements.current[index] = el;
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-40 w-64 h-64 rounded-full bg-squid-pastel-purple/5 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-squid-pastel-blue/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-squid-pastel-peach/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div
            ref={addRef(0)}
            className="opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-squid-pastel-blue/10 text-squid-gray text-sm font-medium mb-6">
              Innovation-Driven Digital Agency
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where <span className="gradient-text">Creativity</span> Meets Technology
            </h1>
            
            <p className="text-squid-gray text-lg mb-8 max-w-xl">
              squidY is a forward-thinking agency that transforms complex ideas into elegant digital solutions. We blend design expertise with technical innovation to create experiences that stand out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center bg-squid-dark text-white px-6 py-3 rounded-md hover:bg-squid-charcoal transition-colors"
              >
                Explore Services
                <ChevronRight size={18} className="ml-2" />
              </Link>
              
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center bg-white text-squid-dark px-6 py-3 rounded-md border border-squid-dark hover:bg-squid-dark hover:text-white transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
          
          <div 
            ref={addRef(1)} 
            className="opacity-0 relative"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="w-full aspect-square relative perspective-container">
              <div className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-br from-squid-pastel-purple/20 to-squid-pastel-blue/20 transform rotate-6 transition-all duration-500 hover:rotate-3"></div>
              
              <div className="absolute top-10 right-10 p-6 bg-white rounded-lg shadow-lg z-10 max-w-xs transform transition-all duration-500 hover:-translate-y-2">
                <Zap size={32} className="text-squid-dark mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast & Responsive</h3>
                <p className="text-squid-gray text-sm">We build lightning-fast websites that provide exceptional user experiences on all devices.</p>
              </div>
              
              <div className="absolute bottom-10 left-10 p-6 bg-white rounded-lg shadow-lg z-10 max-w-xs transform transition-all duration-500 hover:-translate-y-2">
                <Sparkles size={32} className="text-squid-dark mb-4" />
                <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
                <p className="text-squid-gray text-sm">Our design approach focuses on creating unique visual identities that elevate brands.</p>
              </div>
              
              <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 p-6 bg-white rounded-lg shadow-lg z-20 max-w-xs transition-all duration-500 hover:-translate-y-4">
                <Lightbulb size={32} className="text-squid-dark mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
                <p className="text-squid-gray text-sm">We leverage AI and cutting-edge technologies to solve complex business challenges.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div
          ref={addRef(2)}
          className="mt-32 mb-10 opacity-0"
          style={{ animationDelay: '0.7s' }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-squid-gray mb-12">
              We blend strategy, design, and technology to create digital experiences that elevate brands
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              'Website Development', 
              'AI Solutions', 
              'UX/UI Design', 
              'Brand Identity',
              'eCommerce', 
              'Web Applications', 
              'SEO Optimization', 
              'Content Strategy'
            ].map((item, index) => (
              <span 
                key={index}
                className="inline-block px-5 py-2 bg-squid-cream rounded-full text-squid-dark font-medium text-sm hover:bg-squid-pastel-purple/20 transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
