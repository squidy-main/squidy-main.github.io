
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Monitor, Cpu, Users } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top + scrollY;
        const offset = scrollY - sectionTop;
        
        if (offset > 0) {
          const parallaxElements = sectionRef.current.querySelectorAll('.parallax');
          parallaxElements.forEach((el, i) => {
            const speed = 0.1 + (i * 0.05);
            const yPos = -offset * speed;
            (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
          });
        }
      }
      
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          statsRef.current.classList.add('animate-reveal-right');
          statsRef.current.classList.remove('opacity-0');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '120+', label: 'Projects Completed', icon: Monitor },
    { value: '15+', label: 'AI Tools Developed', icon: Cpu },
    { value: '98%', label: 'Client Satisfaction', icon: CheckCircle },
    { value: '24', label: 'Team Members', icon: Users }
  ];

  return (
    <section id="about" className="py-20 relative bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 parallax">
              <h2 className="text-3xl md:text-4xl font-bold text-squid-dark mb-4">
                We build digital products that make a difference
              </h2>
              <p className="text-squid-gray text-lg">
                At squidY, we believe in pushing the boundaries of digital innovation.
              </p>
            </div>
            
            <div className="space-y-6 parallax" style={{ transitionDelay: '0.1s' }}>
              <p className="text-squid-gray">
                Founded in 2022, squidY emerged as a response to the growing need for sophisticated, forward-thinking digital solutions. Our team of experts combines technical excellence with creative vision to deliver websites and AI tools that not only meet but exceed client expectations.
              </p>
              
              <p className="text-squid-gray">
                We specialize in creating unique digital experiences that stand out in today's crowded online landscape. By leveraging cutting-edge technologies and innovative design approaches, we help businesses establish a compelling online presence that drives engagement and converts visitors into customers.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 parallax" style={{ transitionDelay: '0.2s' }}>
              <div className="bg-squid-pastel-purple/30 border border-squid-pastel-purple p-6 rounded-sm">
                <h3 className="text-xl font-medium text-squid-dark mb-2">Our Mission</h3>
                <p className="text-squid-gray text-sm">
                  To empower businesses with exceptional digital solutions that drive growth and innovation.
                </p>
              </div>
              
              <div className="bg-squid-pastel-blue/30 border border-squid-pastel-blue p-6 rounded-sm">
                <h3 className="text-xl font-medium text-squid-dark mb-2">Our Vision</h3>
                <p className="text-squid-gray text-sm">
                  To be at the forefront of digital transformation, setting new standards for excellence and creativity.
                </p>
              </div>
            </div>
          </div>
          
          <div ref={statsRef} className="opacity-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-squid-cream border border-squid-pastel-purple/30 p-6 rounded-sm hover:bg-squid-pastel-purple/10 transition-colors staggered-animation"
                >
                  <div className="flex items-center justify-center mb-4 w-12 h-12 bg-squid-pastel-purple/30 rounded-full">
                    <stat.icon size={24} className="text-squid-dark" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-squid-dark mb-2">
                    {stat.value}
                  </h3>
                  
                  <p className="text-squid-gray text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-squid-pastel-blue/20 border border-squid-pastel-blue/40 p-8 rounded-sm staggered-animation">
              <h3 className="text-xl font-medium text-squid-dark mb-4">Why Choose Us?</h3>
              
              <ul className="space-y-3">
                {[
                  'Expert team with diverse technical skills',
                  'Innovative approach to design and development',
                  'Focus on creating unique, standout experiences',
                  'Commitment to client satisfaction and success',
                  'Forward-thinking solutions built for the future'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-squid-dark mr-3 mt-1 flex-shrink-0" />
                    <span className="text-squid-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
