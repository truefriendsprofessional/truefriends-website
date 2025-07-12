import React, { useRef, useEffect, useState } from 'react';

const WhyUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className={`w-full h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-[#A4C3B2] via-[#DED6D1] to-[#A4C3B2] px-4 sm:px-6 md:px-12 py-10 sm:py-14 md:py-20 text-center min-h-[60vh] transition-all duration-2000 font-[Poppins,sans-serif] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} `}
      style={{ fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif" }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-indigo-400 drop-shadow-lg tracking-tight w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
        Transform Your Hair, Transform Your Confidence
      </h2>
      <p className="mb-8 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 font-medium max-w-xs sm:max-w-md md:max-w-2xl mx-auto opacity-90 px-2 sm:px-0">
        Experience the science of shine with our advanced keratin shampoo—where salon luxury meets everyday brilliance.
      </p>
    </section>
  );
};

export default WhyUs;