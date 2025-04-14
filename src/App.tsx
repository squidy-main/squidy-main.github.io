import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Router component that handles initial navigation for GitHub Pages
const Router = () => {
  useEffect(() => {
    // Check if we have an initial route from the GitHub Pages redirect
    const initialRoute = (window as any).INITIAL_ROUTE;
    if (initialRoute) {
      // Clear the initial route
      delete (window as any).INITIAL_ROUTE;
      
      // Get the current location without the base path
      const currentPath = window.location.pathname.replace('/squidY', '');
      
      // Only navigate if we're not already at the right location
      if (currentPath !== initialRoute && currentPath !== '/') {
        window.history.replaceState(null, '', initialRoute);
      }
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/squidY">
        <Router />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
