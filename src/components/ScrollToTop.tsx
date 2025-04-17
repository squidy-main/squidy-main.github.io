import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component automatically scrolls to the top of the page 
 * when a new route is navigated to using HashRouter.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // For HashRouter, we need to handle the scrolling differently
    // The zero-timeout ensures this runs after the DOM is updated
    setTimeout(() => {
      // If there's a hash in the URL, try to scroll to that element
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      
      // Default behavior: scroll to top of the page
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // For a smoother scrolling experience
      });
    }, 0);
  }, [pathname, hash]); // Re-run when location changes

  return null; // This component doesn't render anything
};

export default ScrollToTop; 