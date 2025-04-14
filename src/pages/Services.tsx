
import React from 'react';
import NavBar from '@/components/NavBar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-white text-squid-dark">
      <NavBar />
      <main className="pt-32 md:pt-24">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
