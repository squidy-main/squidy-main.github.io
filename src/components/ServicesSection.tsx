
import React, { useEffect, useRef } from 'react';
import { Code, Cpu, Layers, Palette, PenTool, TerminalSquare } from 'lucide-react';

const ServicesSection = () => {
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
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' } // Lower threshold and add rootMargin to trigger earlier
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

  const addRef = (index: number) => (el: HTMLDivElement) => {
    animatedElements.current[index] = el;
  };

  const services = [
    {
      title: 'Website Design',
      description: 'Elegant, intuitive designs focused on user experience and conversion optimization.',
      icon: Palette,
      color: 'bg-squid-pastel-blue/20',
      borderColor: 'hover:border-squid-pastel-blue'
    },
    {
      title: 'Web Development',
      description: 'Responsive, robust web applications built with cutting-edge technologies.',
      icon: Code,
      color: 'bg-squid-pastel-purple/20',
      borderColor: 'hover:border-squid-pastel-purple'
    },
    {
      title: 'AI Solutions',
      description: 'Custom AI tools and integrations that automate and enhance your digital presence.',
      icon: Cpu,
      color: 'bg-squid-pastel-peach/20',
      borderColor: 'hover:border-squid-pastel-peach'
    },
    {
      title: 'UX/UI Design',
      description: 'User-centered design that balances functionality with aesthetics.',
      icon: PenTool,
      color: 'bg-squid-pastel-pink/20',
      borderColor: 'hover:border-squid-pastel-pink'
    },
    {
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from database architecture to frontend implementation.',
      icon: Layers,
      color: 'bg-squid-pastel-blue/20',
      borderColor: 'hover:border-squid-pastel-blue'
    },
    {
      title: 'Custom Tools',
      description: 'Bespoke software solutions tailored to your specific business requirements.',
      icon: TerminalSquare,
      color: 'bg-squid-pastel-purple/20',
      borderColor: 'hover:border-squid-pastel-purple'
    }
  ];

  return (
    <section className="py-20 relative bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-squid-pastel-blue/10 rounded-full blur-3xl animate-float opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-squid-pastel-purple/10 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          className="max-w-3xl mx-auto text-center mb-16 opacity-0"
          ref={addRef(0)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-squid-dark mb-4">Our Expertise</h2>
          <p className="text-squid-gray text-lg">
            Comprehensive digital solutions tailored to elevate your online presence.
          </p>
        </div>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={addRef(index + 1)}
              className={`opacity-0 transition-all duration-300 bg-white soft-shadow rounded-lg overflow-hidden ${index % 2 === 0 ? 'animate-reveal-right' : 'animate-reveal-left'}`}
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/3 p-6 flex justify-center items-center">
                  <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full ${service.color} flex items-center justify-center transform transition-transform hover:scale-105`}>
                    <service.icon size={36} className="text-squid-dark" />
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-squid-gray mb-4 md:mb-6">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span key={i} className="px-3 py-1 bg-squid-cream rounded-full text-xs text-squid-gray">
                        Feature {i + 1}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
