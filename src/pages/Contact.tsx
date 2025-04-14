import React, { useState, useRef, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <NavBar />
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating shapes */}
        <div className="absolute w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
            filter: 'blur(100px)'
          }}
        />
        
        {/* Interactive cursor effect */}
        <div
          className="absolute w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
            transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
            filter: 'blur(60px)'
          }}
        />
      </div>
      
      <main 
        ref={containerRef}
        className="relative z-10 pt-32 pb-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Let's Connect
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential collaboration? 
                I'd love to hear from you. Reach out through any of the channels below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <Mail size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <a href="mailto:sakshambhown1920@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                        sakshambhown1920@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <Phone size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <a href="tel:+916284722026" className="text-gray-600 hover:text-gray-900 transition-colors">
                        +91 62847 22026
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <MapPin size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Location</h3>
                      <p className="text-gray-600">Ludhiana, Punjab, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Follow Me</h2>
                
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Github size={20} className="text-gray-600" />
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin size={20} className="text-gray-600" />
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Twitter size={20} className="text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
