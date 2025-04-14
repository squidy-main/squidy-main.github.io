import React, { useRef, useEffect } from 'react';
import { Mail, MapPin, Phone, Clock, ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-react';

const ContactSection = () => {
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

  const addRef = (index: number) => (el: HTMLDivElement) => {
    animatedElements.current[index] = el;
  };

  return (
    <section id="contact" className="py-20 relative bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-squid-pastel-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-squid-pastel-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          ref={addRef(0)}
          className="max-w-3xl mx-auto text-center mb-20 opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-squid-dark mb-4">Get in Touch</h2>
          <p className="text-squid-gray text-lg">
            Ready to transform your digital presence? We'd love to hear from you.
          </p>
        </div>
        
        {/* New contact info section with visual design */}
        <div className="max-w-5xl mx-auto">
          <div 
            ref={addRef(1)}
            className="opacity-0 relative z-10"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Horizontal line with contact points */}
            <div className="hidden md:block h-0.5 bg-gradient-to-r from-transparent via-squid-pastel-blue/30 to-transparent w-full absolute top-24 left-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative">
              {/* Email */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 w-16 h-16 rounded-full bg-white border border-squid-pastel-blue/30 flex items-center justify-center shadow-lg relative z-10">
                  <Mail className="text-squid-dark" />
                </div>
                <div className="bg-white rounded-xl p-6 w-full transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-squid-gray mb-4">For any inquiries, drop us an email.</p>
                  <a href="mailto:hello@squidy.com" className="text-squid-dark font-medium hover:text-squid-pastel-blue transition-colors inline-flex items-center">
                    hello@squidy.com
                    <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 w-16 h-16 rounded-full bg-white border border-squid-pastel-purple/30 flex items-center justify-center shadow-lg relative z-10">
                  <Phone className="text-squid-dark" />
                </div>
                <div className="bg-white rounded-xl p-6 w-full transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-squid-gray mb-4">We're available during business hours.</p>
                  <a href="tel:+15553847293" className="text-squid-dark font-medium hover:text-squid-pastel-purple transition-colors inline-flex items-center">
                    +1 (555) 384-7293
                    <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 w-16 h-16 rounded-full bg-white border border-squid-pastel-peach/30 flex items-center justify-center shadow-lg relative z-10">
                  <MapPin className="text-squid-dark" />
                </div>
                <div className="bg-white rounded-xl p-6 w-full transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-squid-gray mb-4">Our office is centrally located.</p>
                  <address className="text-squid-dark font-medium not-italic">
                    1234 Design Avenue<br />
                    San Francisco, CA 94103
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional info section */}
          <div 
            ref={addRef(2)}
            className="mt-24 opacity-0 relative"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="bg-white p-12 rounded-xl shadow-lg border border-squid-pastel-purple/10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-squid-pastel-blue/5 blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-squid-pastel-purple/5 blur-3xl"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">We'd Love to Collaborate</h3>
                  <p className="text-squid-gray mb-6">
                    squidY is always excited to discuss new projects, partnerships, and opportunities. Whether you have a specific project in mind or just want to explore possibilities, our team is here to help you navigate the digital landscape.
                  </p>
                  <p className="text-squid-gray mb-6">
                    Our collaborative approach ensures that we understand your vision and goals before proposing solutions that align with your business objectives and resonate with your audience.
                  </p>
                  <div className="flex items-center mt-8 p-4 bg-squid-cream/30 rounded-lg">
                    <Clock size={20} className="text-squid-dark mr-3" />
                    <div>
                      <h4 className="text-lg font-medium text-squid-dark">Working Hours</h4>
                      <p className="text-squid-gray">Monday to Friday: 9AM - 6PM</p>
                      <p className="text-squid-gray">Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
                    <p className="text-squid-gray mb-4">Stay connected with us on social media for the latest updates and insights.</p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com/VGsaksham" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-squid-charcoal hover:bg-squid-purple flex items-center justify-center transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="https://www.instagram.com/bhown_pb30?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-squid-charcoal hover:bg-squid-purple flex items-center justify-center transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/saksham-b-635876215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-squid-charcoal hover:bg-squid-purple flex items-center justify-center transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Partners & Clients</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <div 
                          key={index}
                          className="h-14 rounded-md bg-white shadow-sm border border-squid-pastel-blue/10 flex items-center justify-center hover:border-squid-pastel-blue/30 transition-colors"
                        >
                          <div className="w-6 h-6 bg-squid-pastel-blue/30 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
