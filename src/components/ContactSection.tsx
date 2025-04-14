
import React, { useRef, useEffect } from 'react';
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

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
                      <a href="#" className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-squid-dark hover:bg-squid-pastel-blue/20 transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                        </svg>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-squid-dark hover:bg-squid-pastel-purple/20 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-squid-dark hover:bg-squid-pastel-peach/20 transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm.003 1.452c2.142 0 2.392.009 3.233.046.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.037.84.046 1.09.046 3.233s-.009 2.392-.046 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.84.037-1.09.046-3.233.046s-2.392-.009-3.233-.046c-.78-.036-1.203-.166-1.485-.276a2.49 2.49 0 0 1-.92-.598 2.49 2.49 0 0 1-.598-.92c-.11-.282-.24-.705-.276-1.485-.037-.84-.046-1.09-.046-3.233s.009-2.392.046-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.84-.037 1.09-.046 3.233-.046"/>
                          <path d="M8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zm0 6.775a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334zm5.23-6.937a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0"/>
                        </svg>
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
