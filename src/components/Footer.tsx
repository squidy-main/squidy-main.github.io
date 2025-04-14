
import React from 'react';
import { ArrowUp, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-squid-dark text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-end mb-8">
          <button
            onClick={scrollToTop}
            className="p-3 bg-squid-purple hover:bg-squid-charcoal text-white rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-semibold tracking-tighter text-white">
                squid<span className="text-squid-silver">Y</span>
              </span>
            </a>
            
            <p className="text-white mb-6 max-w-xs">
              Crafting innovative digital experiences and AI solutions for forward-thinking businesses.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-squid-pastel-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-squid-pastel-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-squid-pastel-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-squid-pastel-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                    className="text-white hover:text-squid-pastel-blue transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                'Website Design', 
                'Web Development', 
                'AI Solutions', 
                'UX/UI Design', 
                'Full-Stack Solutions'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="/services" 
                    className="text-white hover:text-squid-pastel-blue transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              {[
                'Privacy Policy', 
                'Terms of Service', 
                'Cookie Policy', 
                'Accessibility'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white hover:text-squid-pastel-blue transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} squidY. All rights reserved.
          </p>
          
          <p className="text-white text-sm">
            Designed and developed with precision and excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
