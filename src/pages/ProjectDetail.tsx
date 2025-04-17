import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink, Github, Calendar, User, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ShoppingBag, Lamp, Shirt, Heart, Palette } from 'lucide-react';

// This data would typically come from an API or CMS in a real app
// Using static data for GitHub Pages compatibility
const projectsData = [
  {
    id: 'elegance',
    title: "Elegance",
    category: "E-commerce",
    description: "A luxury online store for premium shoes and handbags with a sophisticated user experience and seamless checkout process.",
    color: "bg-gray-100",
    highlight: "border-gray-500",
    highlightColor: "text-gray-700",
    fullDescription: `Elegance is a premium e-commerce platform designed for luxury footwear and handbags, offering an exceptional shopping experience that reflects the brand's commitment to sophistication and quality.
    
    We developed this platform with a focus on visual aesthetics and user experience, ensuring that the digital shopping journey mirrors the elegance of the physical products. The minimalist design places emphasis on high-quality product photography, allowing customers to appreciate the craftsmanship and detail of each item.
    
    The site incorporates advanced filtering options that enable customers to browse by material, designer, occasion, and price point, making it easy to find the perfect accessory. A standout feature is the AR try-on functionality for shoes, allowing customers to visualize how the footwear would look with their outfits before purchasing.`,
    technologies: ["React", "Next.js", "Shopify Storefront API", "Tailwind CSS", "ThreeJS for AR"],
    features: [
      "Virtual shoe try-on using AR",
      "Personalized product recommendations",
      "Integrated loyalty program",
      "Expert styling advice section",
      "International shipping calculator"
    ],
    client: "Elegance Luxury Accessories",
    completionDate: "April 2023",
    projectLink: "#",
    githubLink: "#",
    images: [
      "/images/elegance_img_1.JPG",
      "/images/elegance_img_2.JPG",
      "/images/elegance_img_3.JPG",
      "/images/elegance_img_4.JPG"
    ],
    link: "https://vgsaksham.github.io/elegance.github.io/"
  },
  {
    id: 'glass-decor',
    title: "Home Decor",
    category: "Interior Design",
    description: "A contemporary glass decor showcase featuring premium interior design products with beautiful visuals and interactive elements for enhanced shopping experience.",
    color: "bg-gray-100",
    highlight: "border-gray-500",
    highlightColor: "text-gray-700",
    fullDescription: `The Home Decor project offers a stunning showcase of premium glass and interior design products through an immersive digital experience that highlights the beauty and craftsmanship of each item.
    
    We created a modern, visually-driven platform that allows customers to explore high-end home decor products with interactive elements that showcase materials, dimensions, and styling options. The minimalist design puts focus on product photography with dynamic zoom features that reveal intricate details of each glass piece.
    
    The site includes room visualization tools that help customers envision how different decor items would look in various interior settings. The curated collections feature assists in finding complementary pieces, while the material education section provides information about glass manufacturing techniques and quality characteristics.`,
    technologies: ["React", "React Router", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    features: [
      "Interactive product galleries",
      "Room visualization tool",
      "Material education center",
      "Curated decor collections",
      "Responsive design for all devices"
    ],
    client: "Glass Decor Showcase",
    completionDate: "March 2024",
    projectLink: "#",
    githubLink: "#",
    images: [
      "/images/home_decor_img_1.JPG",
      "/images/home_decor_img_2.JPG",
      "/images/home_decor_img_3.JPG"
    ],
    link: "https://squidy-main.github.io/sample-glass-decor-showcase/#/"
  },
  {
    id: 'bombay-royals',
    title: "Bombay Royals",
    category: "Ethnic Fashion",
    description: "A culturally rich e-commerce platform for authentic Indian ethnic wear with storytelling elements and heritage craftsmanship highlights.",
    color: "bg-gray-100",
    highlight: "border-gray-500",
    highlightColor: "text-gray-700",
    fullDescription: `Bombay Royals' digital presence celebrates the rich heritage of Indian ethnic fashion through a thoughtfully designed e-commerce experience that puts craftsmanship and cultural storytelling at the forefront.
    
    We created a platform that not only showcases their exquisite clothing collections but also educates customers about the traditional techniques, regional textiles, and historical significance of each design. Interactive elements highlight the artisans behind each piece, connecting customers to the authentic stories that make these garments special.
    
    The site features a custom size recommendation tool that considers both Western and Indian sizing standards, ensuring a perfect fit for customers worldwide. The wedding collection section offers personalized styling services for bridal parties, complete with virtual consultations.`,
    technologies: ["React", "Firebase", "Algolia Search", "Stripe", "Cloudinary"],
    features: [
      "Artisan spotlight stories",
      "Regional textile explorer",
      "Virtual try-on for sarees and lehengas",
      "Wedding collection stylist",
      "International size conversion tool"
    ],
    client: "Bombay Royals Fashion House",
    completionDate: "October 2023",
    projectLink: "#",
    githubLink: "#",
    images: [
      "/images/bombay_royal_img_1.JPG",
      "/images/bombay_royal_img_2.JPG",
      "/images/bombay_royal_img_3.JPG"
    ],
    link: "https://vgsaksham.github.io/bombayroyals.github.io/index.html"
  },
  {
    id: 'mahasharman',
    title: "Mahasharman Healthcare",
    category: "Healthcare",
    description: "A comprehensive platform for an Ayurvedic manufacturing company that seamlessly integrates wholesale B2B services with retail customer experiences.",
    color: "bg-gray-100",
    highlight: "border-gray-500",
    highlightColor: "text-gray-700",
    fullDescription: `Mahasharman Healthcare's platform serves as both a robust B2B portal for wholesale clients and an educational retail experience for consumers interested in authentic Ayurvedic products.
    
    We developed a dual-interface solution that caters to both business partners and retail customers. The wholesale portal features inventory management, bulk ordering capabilities, and a dashboard for tracking orders and payments. Wholesale clients benefit from detailed product documentation, compliance certificates, and marketing resources.
    
    The retail side focuses on education and personalization, offering an "Ayurvedic consultation" questionnaire that recommends products based on individual doshas and health concerns. Detailed ingredient explanations and traditional usage guides help customers understand the authentic Ayurvedic approach to wellness.`,
    technologies: ["Next.js", "Sanity CMS", "PostgreSQL", "Stripe Connect", "Redis"],
    features: [
      "Dual B2B and B2C interfaces",
      "Dosha assessment questionnaire",
      "Manufacturing transparency portal",
      "Wholesale order management system",
      "Ingredient sourcing information"
    ],
    client: "Mahasharman Ayurvedic Products",
    completionDate: "January 2023",
    projectLink: "#",
    githubLink: "#",
    images: [
      "/images/mahasharman_img_1.JPG",
      "/images/mahasharman_img_2.JPG",
      "/images/mahasharman_img_3.JPG"
    ],
    link: "https://squidy-main.github.io/mahasharmanhealthcare/index.html"
  },
  {
    id: 'designer-portfolio',
    title: "Interactive Designer Portfolio",
    category: "Personal Website",
    description: "A visually captivating portfolio website with motion graphics and interactive elements showcasing a multidisciplinary designer's work.",
    color: "bg-gray-100",
    highlight: "border-gray-500",
    highlightColor: "text-gray-700",
    fullDescription: `This designer portfolio pushes the boundaries of web interactivity to create a memorable showcase that reflects the creative capabilities of a multidisciplinary design professional.
    
    We built this portfolio with a focus on motion design and user engagement, implementing subtle animations that respond to user actions and scroll position. The work showcase features interactive case studies that allow visitors to explore different aspects of each project through engaging visual storytelling.
    
    The technical implementation prioritizes performance alongside visual richness, using advanced techniques to ensure smooth animations even with complex visual elements. The design adapts seamlessly across devices while maintaining its distinctive interactive character.`,
    technologies: ["GSAP", "React", "Framer Motion", "Three.js", "WebGL"],
    features: [
      "Interactive project showcases",
      "Cursor-following animation effects",
      "Parallax scrolling elements",
      "Case study timeline explorer",
      "Creative contact form experience"
    ],
    client: "Sarah Chen, UI/UX Designer",
    completionDate: "November 2023",
    projectLink: "#",
    githubLink: "#",
    images: [
      "/images/portfolio_img_1.JPG",
      "/images/portfolio_img_2.JPG",
      "/images/portfolio_img_3.JPG"
    ],
    link: "https://vgsaksham.github.io/portfolio.github.io/"
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<typeof projectsData[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading data from an API
    setIsLoading(true);
    
    // Find the project that matches the ID from the URL
    const foundProject = projectsData.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
      // Add a slight delay to simulate network request
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } else {
      // If no project is found, redirect to the projects page
      navigate('/projects', { replace: true });
    }
  }, [projectId, navigate]);

  const handlePrevImage = () => {
    if (!project) return;
    setActiveImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    if (!project) return;
    setActiveImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white text-gray-800">
        <NavBar />
        <main className="pt-28 pb-24 container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-500">Loading project details...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavBar />
      
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back button */}
          <button 
            onClick={() => navigate('/projects')}
            className="flex items-center text-gray-500 hover:text-gray-800 transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </button>
          
          {/* Project header */}
          <div className={`rounded-lg ${project.color} p-8 mb-12 border-2 ${project.highlight} shadow-md`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="text-xs font-medium bg-white/70 text-gray-600 px-3 py-1 rounded-full mb-4 inline-block border border-gray-300">
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
                <p className="text-gray-600 text-lg max-w-2xl">{project.description}</p>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <span>Visit Project</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Carousel */}
          {project.images && project.images.length > 0 && (
            <div className="mb-12 mx-auto w-[70%] relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-300 shadow-md aspect-[16/9]">
                <div 
                  ref={carouselRef}
                  className="flex transition-transform duration-300 ease-in-out h-full"
                  style={{ transform: `translateX(-${activeImage * 100}%)` }}
                >
                  {project.images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Navigation buttons */}
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="text-gray-800" />
                </button>
                <button 
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="text-gray-800" />
                </button>
              </div>
              
              {/* Image indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeImage === index 
                        ? 'bg-gray-800 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Project content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Overview</h2>
              <div className="bg-white rounded-lg p-8 mb-8 shadow-md border border-gray-300">
                <div className="prose max-w-none text-gray-600">
                  {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Key Features</h2>
              <div className="bg-white rounded-lg p-8 shadow-md mb-8 border border-gray-300">
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`w-3 h-3 rounded-full bg-gray-500 mt-2 mr-3`}></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Project Details</h2>
              <div className="bg-white rounded-lg p-8 shadow-md mb-8 border border-gray-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Client</h3>
                    <div className="flex items-center">
                      <User size={16} className="text-gray-800 mr-2" />
                      <span className="text-gray-800">{project.client}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Completed</h3>
                    <div className="flex items-center">
                      <Calendar size={16} className="text-gray-800 mr-2" />
                      <span className="text-gray-800">{project.completionDate}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-3 py-1 rounded-full bg-white border-2 border-gray-500 text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Need Something Similar?</h2>
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-300">
                <p className="text-gray-600 mb-6">
                  If you're interested in a similar project or want to discuss your ideas, we'd love to hear from you.
                </p>
                <a 
                  href="/contact" 
                  className="w-full inline-block text-center px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors border border-gray-800"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;