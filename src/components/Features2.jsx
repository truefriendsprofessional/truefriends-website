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
      // Check if we're on mobile/tablet first
      const isMobile = window.innerWidth < 768;

      // Only run stacking animation on desktop
      if (!isMobile) {
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

          // Desktop behavior - hide cards initially
          gsap.set(cards.slice(1), {
            y: window.innerHeight * 0.8, // Position cards lower in viewport
            opacity: 0
          });

          // Timeline for stacking cards
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: `+=${totalCards * 130 + 100}%`, // 30% longer duration
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              id: "features2-cards",
              refreshPriority: 1,
              fastScrollEnd: false,
              preventOverlaps: "auto",
              pinSpacing: true,
              onUpdate: (self) => {
                const container = featuresRef.current;
                if (!container) return;

                if (self.progress < 0.01 || self.progress > 0.99) {
                  gsap.set(container, { willChange: "auto" });
                }
              },
              onComplete: () => {
                const container = featuresRef.current;
                if (container) {
                  gsap.set(container, { willChange: "auto" });
                }
              }
            },
            defaults: { ease: "power1.out" }
          });

          // Define an offset to bring cards from below the viewport
          const offscreenY = window.innerHeight * 0.6;

          // Animate each card entering and scale previous cards
          cards.forEach((card, i) => {
            const startTime = i * 1.3;

            // Skip animation for first card (it's already visible)
            if (i > 0) {
              // Desktop animation - full stacking effect
              tl.fromTo(card,
                { y: offscreenY, opacity: 0, scale: 0.8 },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 1.2,
                  ease: "power1.out"
                },
                startTime
              );

              // Scale down all previous cards more gradually
              const previousCards = cards.slice(0, i);
              tl.to(previousCards, {
                scale: 1 - (i * 0.015),
                y: -10 * i,
                duration: 1.0,
                ease: "power1.out"
              }, startTime + 0.1);
            }
          });

          console.log("Features2 timeline created with", cards.length, "cards");
        }, featuresRef);

        return () => ctx.revert();
      }
    }, 300); // Increased delay to avoid conflicts with other sections

    return () => {
      clearTimeout(initTimer);
    };
  }, []);
  return (
    <section id="features"
      ref={featuresRef}
      className="relative w-full flex flex-col items-center justify-start pt-20 h-auto min-h-screen md:h-screen md:min-h-screen"
      style={{
        fontFamily: "'Roboto','Poppins', 'Segoe UI', Arial, sans-serif",
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        willChange: 'transform' // Add performance hint
      }}
    >
      {/* Desktop: Absolute positioned cards for stacking */}
      <div className="hidden md:flex justify-center  relative  w-full h-full">
        {memoizedProjects.map((project, i) => (
          <Card key={`card-${i}-${project.title}`} i={i} {...project} />
        ))}
      </div>

      {/* Mobile: Normal flow layout */}
      <div className="block md:hidden w-full space-y-6 pb-20">
        {memoizedProjects.map((project, i) => (
          <div key={`mobile-card-${i}-${project.title}`} className="w-full flex justify-center">
            <Card i={i} {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Features2

