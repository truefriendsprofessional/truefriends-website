import React, { useRef, useEffect, useState } from 'react';
import { FlipWords } from "../components/ui/flip-words";
import sleepingImg from '../assets/images/sleeping.jpg';

const WhyUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = [" Heal", " Nourish", " Strengthen", " Smoothen"];
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
      className={`w-full h-screen flex flex-col justify-center items-center md:items-end px-4 sm:px-6 md:px-12 py-10 sm:py-14 md:py-20 text-center md:text-right min-h-[60vh] transition-all duration-2000 font-[Poppins,sans-serif] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{
        fontFamily: "'Roboto','Poppins', 'Segoe UI', Arial, sans-serif",
        backgroundImage: `url(${sleepingImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >


      <h2 className="text-6xl sm:text-7xl md:text-6xl lg:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r to-[#35170B] from-[#EEC970] drop-shadow-lg tracking-tight w-full sm:w-4/5 md:w-1/2 lg:w-1/2 mx-auto md:mr-0 md:mx-0">
        Treatment that 
        <br />
        <FlipWords words={words} /> <br />
        your hairs
      </h2>
      
    </section>
  );
};

export default WhyUs;