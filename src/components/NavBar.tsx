import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();
  const navBlobRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const activeBubbleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setActiveLink(location.pathname);
    moveActiveBubble(location.pathname);
  }, [location]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced blob animation that reacts to mouse movement
  useEffect(() => {
    const updateBlobPosition = (e: MouseEvent) => {
      if (!navBlobRef.current) return;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Only animate when mouse is in top navbar area
      if (mouseY < 100) {
        navBlobRef.current.style.left = `${mouseX}px`;
        navBlobRef.current.style.top = `${mouseY}px`;
        navBlobRef.current.style.opacity = '0.15';
        navBlobRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      } else {
        navBlobRef.current.style.opacity = '0';
        navBlobRef.current.style.transform = 'translate(-50%, -50%) scale(0.5)';
      }
    };
    
    window.addEventListener('mousemove', updateBlobPosition);
    return () => window.removeEventListener('mousemove', updateBlobPosition);
  }, []);

  // Fixed liquid animation that follows active nav item
  const moveActiveBubble = (path: string) => {
    if (!activeBubbleRef.current || !navContainerRef.current) return;
    
    const navContainer = navContainerRef.current;
    const activeItem = navContainer.querySelector(`a[href="${path}"]`) as HTMLElement;
    
    if (activeItem) {
      const rect = activeItem.getBoundingClientRect();
      const containerRect = navContainer.getBoundingClientRect();
      
      // Calculate position relative to the navContainer
      const left = rect.left - containerRect.left;
      const width = rect.width;
      
      activeBubbleRef.current.style.left = `${left}px`;
      activeBubbleRef.current.style.width = `${width}px`;
      activeBubbleRef.current.style.opacity = '1';
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'nav-blur py-1 md:py-3' : 'py-2 md:py-6 bg-white'
    }`}>
      <div 
        ref={navBlobRef} 
        className="nav-blob fixed w-56 h-56 rounded-full bg-squid-pastel-purple/20 blur-3xl pointer-events-none transition-all duration-500"
        style={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' }}
      />
      
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-semibold tracking-tighter text-squid-dark">
              squid<span className="text-squid-gray">Y</span>
            </span>
          </Link>
          
          {/* Unified Nav for both Mobile and Desktop - now on the right side */}
          <nav className="flex items-center justify-end">
            <div 
              ref={navContainerRef}
              className="nav-container relative flex items-center justify-center h-8 md:h-12 bg-white/50 backdrop-blur-sm glass-effect rounded-full px-1 md:px-2 overflow-x-auto scrollbar-none"
            >
              {/* Liquid bubble for active link */}
              <div 
                ref={activeBubbleRef}
                className="absolute top-1/2 -translate-y-1/2 h-8 md:h-10 bg-squid-pastel-blue/40 rounded-full transition-all duration-700 ease-in-out shadow-sm"
                style={{ opacity: 0, width: '60px', left: '0' }}
              ></div>
              
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.href}
                  className={`relative px-2 md:px-5 py-1 text-xs md:text-sm transition-all duration-300 rounded-full wavy-border z-10 ${
                    activeLink === link.href ? "text-squid-dark font-medium" : "text-squid-gray hover:text-squid-dark"
                  }`}
                  onClick={() => {
                    setActiveLink(link.href);
                    moveActiveBubble(link.href);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
