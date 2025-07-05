import "./App.css";
// import  { useRef, useEffect, useState } from "react";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Kerabotoxanimation from "../public/Kerabotoxanimation";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import BottleOjb from "./components/BottleOjb";
import WhyUs from "./components/WhyUs";
import Features from "./components/Features";
import Offerings from "./components/Offerings";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Home from "./components/home";
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const canvasRef = useRef(null);
  // const [scrollProgress, setScrollProgress] = useState(0);

  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#home",
  //       start: "top center",
  //       once: true,
  //     },
  //   });

  //   // Navbar gradient
  //   gsap.from("nav", { background: "rgba(255,255,255,0)", duration: 1.5 });
  //   gsap.to("nav", {
  //     background:
  //       "linear-gradient(90deg, rgba(219,39,119,0.2), rgba(59,130,246,0.2))",
  //     duration: 1.5,
  //   });
  //   const updateScrollProgress = () => {
  //     const scrollY = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const docHeight = document.documentElement.scrollHeight - windowHeight;
  //     setScrollProgress(scrollY / docHeight);
  //   };

  //   window.addEventListener("scroll", updateScrollProgress);

  //   // Canvas movement animation
  //   ScrollTrigger.create({
  //     trigger: "#home",
  //     start: "top top",
  //     endTrigger: "#about",
  //     end: "bottom top",
  //     scrub: true,
  //     onUpdate: (self) => {
  //       const progress = self.progress;

  //       // More rotation speed & slightly bigger scale
  //       const xPos = gsap.utils.interpolate(25, -25, progress);
  //       const scale = gsap.utils.interpolate(1, 0.8, progress); // scale down less aggressively

  //       gsap.to(canvasRef.current, {
  //         x: `${xPos}vw`,
  //         scale,
  //         duration: 0.1,
  //       });
  //     },
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //     window.removeEventListener("scroll", updateScrollProgress);
  //   };
  // }, []);

  return (
    <div className="App w-full overflow-x-hidden relative bg-gray-900 text-gray-100">
      {/* 3D Canvas - Positioned between center and right */}
      {/* <BottleOjb ref={canvasRef} /> */}
      {/* Glassmorphic Navbar */}
      <Navbar />
      {/* Main Content */}
      <div id="scroll-sections" className="relative z-10 pt-0">
        {/* Landing / Hero Section */}
        <Home />
        {/* Other sections remain the same... */}
        <About />
        {/* Why Us Section */}
        <WhyUs />
        {/* Features Section with interactive cards */}
        <Features />
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
