import { projects } from "../data"
import Card from "./Cards";
import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background from '../assets/images/dark.jpg';

gsap.registerPlugin(ScrollTrigger);

const Features2 = () => {
  const featuresRef = useRef(null);
  
  // Memoize projects to prevent unnecessary re-renders
  const memoizedProjects = useMemo(() => projects, []);

  useEffect(() => {
    const container = featuresRef.current;
    if (!container) return;

    // Kill any existing ScrollTriggers for this section to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id === "features2-cards") {
        trigger.kill();
      }
    });

    // Longer delay to ensure proper initialization and reduce conflicts
    const initTimer = setTimeout(() => {
      // GSAP context to limit selectors to this container
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".stack-card", container);
        const totalCards = cards.length;
        
        if (cards.length === 0) {
          console.warn("No cards found for Features2 animation");
          return;
        }
        
        // Optimize initial setup
        gsap.set(cards, {
          y: 0,
          opacity: 1,
          scale: 1,
          transformOrigin: "center center",
          willChange: "transform, opacity"
        });

        // Hide all cards except the first one initially
        // Move them further down for better viewport positioning
        gsap.set(cards.slice(1), {
          y: window.innerHeight * 0.8, // Position cards lower in viewport
          opacity: 0
        });
        
        // Timeline for stacking cards with slower progression
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=${totalCards * 130 + 100}%`, // 30% longer duration (was 100, now 130)
            pin: true,
            scrub: 1, // Slightly more scrub for smoother performance
            anticipatePin: 1,
            invalidateOnRefresh: true,
            id: "features2-cards",
            refreshPriority: 1, // Higher priority for Features2 (loads first)
            fastScrollEnd: false, // Better compatibility with other ScrollTriggers
            preventOverlaps: "auto", // Auto-prevent overlapping
            pinSpacing: true, // Ensure proper spacing after pin
            onUpdate: (self) => {
              // Simplified update function for better performance
              const container = featuresRef.current;
              if (!container) return;
              
              if (self.progress < 0.01 || self.progress > 0.99) {
                gsap.set(container, { willChange: "auto" });
              }
            },
            onComplete: () => {
              // Clean up after animation
              const container = featuresRef.current;
              if (container) {
                gsap.set(container, { willChange: "auto" });
              }
            }
          },
          defaults: { ease: "power1.out" } // Gentler easing for smoother motion
        });

        // Define an offset to bring cards from below the viewport
        const offscreenY = window.innerHeight * 0.6; // Reduced from 1.1 to 0.6 for better positioning

        // Animate each card entering and scale previous cards with slower timing
        cards.forEach((card, i) => {
          const startTime = i * 1.3; // Increased from 0.3 to 0.4 for slower progression

          // Skip animation for first card (it's already visible)
          if (i > 0) {
            // Card enters from bottom with smoother transition
            tl.fromTo(card,
              { y: offscreenY, opacity: 0, scale: 0.8 }, // Start slightly scaled down
              { 
                y: 0, 
                opacity: 1, 
                scale: 1,
                duration: 1.2, // Increased duration for smoother entry
                ease: "power1.out" 
              },
              startTime
            );

            // Scale down all previous cards more gradually
            const previousCards = cards.slice(0, i);
            tl.to(previousCards, {
              scale: 1 - (i * 0.015), // Reduced scaling factor for subtler effect
              y: -10 * i, // Add slight upward movement for stacking effect
              duration: 1.0, // Longer duration for smoother scaling
              ease: "power1.out"
            }, startTime + 0.1); // Slight delay for better visual flow
          }
        });
        
        console.log("Features2 timeline created with", cards.length, "cards");
      }, featuresRef);

      return () => ctx.revert();
    }, 300); // Increased delay to avoid conflicts with other sections

    return () => {
      clearTimeout(initTimer);
    };
  }, []);
  return (
    <section id="features"
    ref={featuresRef}
    className="relative h-screen w-full flex flex-col items-center justify-start pt-20" // Changed justify-center to justify-start and added pt-20
    style={{
            fontFamily: "'Roboto','Poppins', 'Segoe UI', Arial, sans-serif",
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            willChange: 'transform' // Add performance hint
          }}
    >
      {memoizedProjects.map((project, i) => (
        <Card  key={`card-${i}-${project.title}`} i={i} {...project} />
      ))}
    </section>
  )
}
export default Features2

