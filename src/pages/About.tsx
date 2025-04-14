import React, { useState, useRef, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Code, Cpu, Users, Award, Rocket, Lightbulb } from 'lucide-react';

const About = () => {
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

  const stats = [
    {
      icon: <Code size={24} className="text-squid-pastel-blue" />,
      title: "Projects Completed",
      value: "10+",
      description: "Diverse web and AI solutions"
    },
    {
      icon: <Cpu size={24} className="text-squid-pastel-purple" />,
      title: "AI Tools Developed",
      value: "3+",
      description: "Innovative AI solutions"
    },
    {
      icon: <Users size={24} className="text-squid-pastel-peach" />,
      title: "Client Satisfaction",
      value: "99%",
      description: "Happy clients worldwide"
    },
    {
      icon: <Award size={24} className="text-squid-pastel-pink" />,
      title: "Years of Excellence",
      value: "2024",
      description: "Founded this year"
    }
  ];

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
                About squidY
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Founded in 2024, squidY is a premier digital agency specializing in innovative web solutions and cutting-edge AI tools.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{stat.title}</h3>
                      <p className="text-3xl font-bold text-squid-dark">{stat.value}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
            
            {/* Mission Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Rocket size={24} className="text-squid-pastel-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600">
                    At squidY, we're dedicated to pushing the boundaries of digital innovation. Our mission is to create exceptional web experiences and develop AI tools that solve real-world problems. We believe in the power of technology to transform businesses and enhance user experiences.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Vision Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Lightbulb size={24} className="text-squid-pastel-purple" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-600">
                    We envision a future where technology seamlessly integrates with human needs. Through our innovative solutions and AI tools, we aim to make complex technologies accessible and beneficial for businesses of all sizes. Our commitment to excellence and client satisfaction drives us to continuously innovate and deliver outstanding results.
                  </p>
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

export default About;
