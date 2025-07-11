import "./App.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import WhyUs from "./components/WhyUs";
import Offerings from "./components/Offerings";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";

import Home from "./components/home";
import Card from "./components/Cards";

import { projects } from './data';

import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // const canvasRef = useRef(null);
  const featuresRef = useRef(null);


  useEffect(() => {
    const container = featuresRef.current;
    if (!container) return;

    // GSAP context to limit selectors to this container
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stack-card", container);
      const totalCards = cards.length;

      // Timeline for stacking cards
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",            // pin when section hits top of viewport
          end: `+=${totalCards * 100 + 50}%`,  // scroll distance (N cards + extra for fade)
          pin: true,
          scrub: 1,                   // smooth scrub
          anticipatePin: 1
        },
        defaults: { ease: "none" }    // linear ease for smooth scroll-linked motion:contentReference[oaicite:6]{index=6}
      });

      // Fade in the whole section at start
      tl.from(container, { opacity: 0, duration: 0.2 });

      // Define an offset to bring cards from below the viewport
      const offscreenY = window.innerHeight * 1.1; // slightly more than 100% viewport height

      // Animate each card entering and scale previous cards
      cards.forEach((card, i) => {
        // Card enters from bottom
        tl.fromTo(card,
          { y: offscreenY, opacity: 0 },         // start off-screen bottom
          { y: 0, opacity: 1, duration: 0.8 },
          "+=0.2" + (i) // start each card tween in sequence (after a small gap)
        );
        // If not the first card, scale down all previous cards a bit
        if (i > 0) {
          tl.to(cards.slice(0, i),
            { scale: "-=0.05", duration: 0.8 },   // shrink previous cards by 5%
            "-=0.8"                              // align scaling with this card's animation
          );
        }
      });

      // Fade out the section after last card is in place
      tl.to(container, { opacity: 0, duration: 0.4 }, "+=0.2");
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="App w-full overflow-x-hidden relative bg-[#0b111c] text-gray-100 main">
      {/* 3D Canvas - Positioned between center and right */}
      {/* <BottleOjb reff={canvasRef} /> */}
      {/* Glassmorphic Navbar */}
      <Navbar />
      {/* Main Content */}
      <div id="scroll-sections" className="relative z-10 pt-0">
        {/* Landing / Hero Section */}
        <Home />
        {/* Other sections remain the same... */}
        {/* <About /> */}
        {/* Why Us Section */}
        <WhyUs />
        {/* {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      } */}
        {/* Features Section with interactive cards */}
        {/* <Features2 /> */}
        <section id="features" ref={featuresRef} className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gray-800 px-6">
          {/* (Optional heading) */}
          {/* <h2 className="text-4xl font-bold mb-6 text-center">Features</h2> */}
          {projects.map((project, i) => (
            <Card key={i} i={i} {...project} />
          ))}
        </section>
        {/* <Features /> */}
        {/* Offerings Section */}
        <Offerings />
        {/* Plans Section */}
        <Plans />
        {/* Reviews Section with testimonials */}
        <Reviews />
        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
}
