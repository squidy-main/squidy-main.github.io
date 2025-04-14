import React from 'react';
import { ArrowUp, Github, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-semibold tracking-tighter text-white">
                squid<span className="text-squid-silver">Y</span>
              </span>
            </Link>
            
            <p className="text-white mb-6 max-w-xs">
              Crafting innovative digital experiences and AI solutions for forward-thinking businesses.
            </p>
            
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
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-squid-silver hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-squid-silver hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-squid-silver hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="text-squid-silver hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-squid-silver hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-squid-silver hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-squid-silver hover:text-white transition-colors">AI Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-squid-silver hover:text-white transition-colors">UX/UI Design</Link>
              </li>
              <li>
                <Link to="/services" className="text-squid-silver hover:text-white transition-colors">Brand Identity</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-squid-silver hover:text-white transition-colors">Get in Touch</Link>
              </li>
              <li>
                <Link to="/contact" className="text-squid-silver hover:text-white transition-colors">Support</Link>
              </li>
              <li>
                <Link to="/contact" className="text-squid-silver hover:text-white transition-colors">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-squid-charcoal text-center text-squid-silver">
          <p>&copy; {new Date().getFullYear()} squidY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
