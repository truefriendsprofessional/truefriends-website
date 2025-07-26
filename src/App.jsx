import "./App.css";
import "./performance-optimizations.css";
import "./responsive.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import WhyUs from "./components/WhyUs";
import Offerings from "./components/Offerings";
import Home from "./components/Home";
import Features2 from "./components/Features2";
import Slide from "./components/Slide";
import Reviews from "./components/Reviews";
import { StickyScroll } from "./components/ui/stickey-scroll-reveal";
import NewRevewiw from "./components/NewReview";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { debugScrollTriggers } from "./components/scrollTriggerDebug"; // Uncomment for debugging

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Global ScrollTrigger configuration for better performance
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // Reduce auto-refresh events
      ignoreMobileResize: true, // Better mobile performance
    });

    // Global refresh on mount to ensure all ScrollTriggers work properly
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      
      // Uncomment for debugging
      // debugScrollTriggers();
    }, 500);

    return () => {
      clearTimeout(timer);
      // Clean up all ScrollTriggers on unmount
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="App w-full overflow-x-hidden relative bg-[#161616] text-[#FAFAFA] main smooth-scroll">
      <Navbar />
      <div id="scroll-sections" className="relative z-10 pt-0 critical-section">
        <Home />
        <WhyUs />
        <Slide />
        <Features2 />
        <Offerings />
        <NewRevewiw />
        
        <Contact />
      </div>
    </div>
  );
}
