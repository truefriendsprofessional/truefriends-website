import { projects } from "../data"
import { useEffect, useRef, useMemo, useState } from "react";
import background from '../assets/images/backLight.jpg';

const FeatureCard = ({ project, index, isVisible }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current && isVideoLoaded) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isVideoLoaded]);

  return (
    <div 
      ref={cardRef}
      className={`feature-card w-full max-w-4xl mx-auto mb-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        fontFamily: "'Roboto', 'Poppins', 'Segoe UI', Arial, sans-serif"
      }}
    >
      <div 
        className="backdrop-blur-sm relative overflow-hidden transform-gpu border border-green-500/30 rounded-2xl p-8 lg:p-12"
        style={{ 
          background: `linear-gradient(135deg, ${project.color}f0, ${project.color}e0)`,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(238, 201, 112, 0.2)',
          border: '1px solid rgba(238, 201, 112, 0.3)',
        }}
      >
        {/* Luxury accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EEC970] via-[#3FA6DA] to-[#EEC970]"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none rounded-2xl" 
             style={{
               backgroundImage: `radial-gradient(circle at 20% 20%, rgba(238, 201, 112, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(63, 166, 218, 0.1) 0%, transparent 50%)`
             }}>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-[#EEC970] font-bold text-3xl lg:text-4xl xl:text-5xl mb-6 tracking-wide text-center drop-shadow-lg">
            {project.title}
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Text description */}
            <div className="w-full lg:w-2/5 order-2 lg:order-1">
              <p className="text-[#FAFAFA] text-lg lg:text-xl leading-relaxed mb-6 font-light opacity-90">
                {project.description}
              </p>
              
              {/* Features list */}
              {project.features && (
                <div className="mb-6">
                  <h4 className="text-[#EEC970] font-medium text-sm uppercase tracking-wider mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[#FAFAFA] text-sm opacity-80">
                        <div className="w-2 h-2 bg-[#EEC970] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Video container */}
            <div className="w-full lg:w-3/5 order-1 lg:order-2 relative">
              <div className="relative rounded-xl overflow-hidden border border-[#EEC970]/20 shadow-2xl aspect-video">
                {/* Loading placeholder */}
                {!isVideoLoaded && (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center rounded-xl">
                    <div className="text-[#EEC970] text-sm">Loading...</div>
                  </div>
                )}
                
                <video
                  ref={videoRef}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedData={() => setIsVideoLoaded(true)}
                  className={`w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
                    isVideoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    filter: 'brightness(0.95) contrast(1.05) saturate(1.1)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <source src={`./assets/videos/${project.src}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features2 = () => {
  const featuresRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  // Memoize projects to prevent unnecessary re-renders
  const memoizedProjects = useMemo(() => projects, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = parseInt(entry.target.dataset.cardIndex);
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '100px 0px -50px 0px'
      }
    );

    // Observe all cards
    const cards = featuresRef.current?.querySelectorAll('[data-card-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="features"
      ref={featuresRef}
      className="relative w-full py-20 min-h-screen"
      style={{
        fontFamily: "'Roboto', 'Poppins', 'Segoe UI', Arial, sans-serif",
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#EEC970] mb-6 tracking-wide drop-shadow-lg">
          Premium Hair Care Solutions
        </h1>
        {/* <p className="text-xl lg:text-2xl text-[#FAFAFA] opacity-90 max-w-3xl mx-auto leading-relaxed">
          Discover our revolutionary formulas designed to transform your hair care routine
        </p> */}
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-4">
        {memoizedProjects.map((project, index) => (
          <div key={`feature-${index}`} data-card-index={index}>
            <FeatureCard 
              project={project} 
              index={index} 
              isVisible={visibleCards.has(index)}
            />
          </div>
        ))}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  )
}

export default Features2

