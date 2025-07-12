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
      gsap.set(cards, {
        y: 100,
        opacity: 0,
        scale: 1,
        transformOrigin: "center center"
      });
      // Timeline for stacking cards
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",            // pin when section hits top of viewport
          end: `+=${totalCards * 100 + 50}%`,  // scroll distance (N cards + extra for fade)
          pin: true,
          scrub: 0.5,                 // less aggressive scrub for better performance
          anticipatePin: 1,
          invalidateOnRefresh: true,   // helps with responsive issues
          onUpdate: (self) => {
            // Optimize rendering during scroll
            if (self.progress === 0 || self.progress === 1) {
              gsap.set(container, { willChange: "auto" });
            } else {
              gsap.set(container, { willChange: "transform" });
            }
          }
        },
        defaults: { ease: "power2.out" }  // smoother easing    // linear ease for smooth scroll-linked motion:contentReference[oaicite:6]{index=6}
      });

      // Fade in the whole section at start
      tl.from(container, { opacity: 0, duration: 0.2 });

      // Define an offset to bring cards from below the viewport
      const offscreenY = window.innerHeight * 1.1; // slightly more than 100% viewport height

      // Animate each card entering and scale previous cards
      cards.forEach((card, i) => {
        const startTime = i * 0.3;
        // Card enters from bottom
        tl.fromTo(card,
          { y: offscreenY, opacity: 0 },         // start off-screen bottom
          { y: 0, opacity: 1, duration: 0.8 },
          "+=0.2" + (i) // start each card tween in sequence (after a small gap)
        );
        // If not the first card, scale down all previous cards a bit
        if (i > 0) {
          const previousCards = cards.slice(0, i);
          tl.to(previousCards, {
            scale: 1 - (i * 0.02), // more subtle scaling
            duration: 0.6,
            ease: "power2.out"
          }, startTime);
        }
      });
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="App w-full overflow-x-hidden relative bg-[#A4C3B2] text-gray-100 main">
      {/* <BottleOjb reff={canvasRef} /> */}
      <Navbar />
      <div id="scroll-sections" className="relative z-10 pt-0 ">
        <Home />
        {/* <About /> */}
        <WhyUs />
        <section id="features" ref={featuresRef} className="relative h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#A4C3B2]  to-[#DED6D1] -mt-[100vh] ">
          {projects.map((project, i) => (
            <Card key={i} i={i} {...project} />
          ))}
        </section>
        <Offerings />
        {/* <Plans /> */}
        <Contact />
      </div>
    </div>
  );
}
